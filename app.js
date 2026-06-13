
const cfg=window.DFS2_WEBGIS_CONFIG;const state={active:new Set(),layers:{},hitLayers:{},frame:0,timer:null,series:[],points:[]};
const street=new ol.layer.Tile({source:new ol.source.XYZ({url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',attributions:'Tiles © Esri'}),visible:false,zIndex:0});
const satellite=new ol.layer.Tile({source:new ol.source.XYZ({url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',attributions:'Imagery © Esri'}),visible:false,zIndex:0});
const pts=new ol.source.Vector();const ptLayer=new ol.layer.Vector({source:pts,zIndex:60,style:f=>new ol.style.Style({image:new ol.style.Circle({radius:6,fill:new ol.style.Fill({color:'#f00'}),stroke:new ol.style.Stroke({color:'#fff',width:2})}),text:new ol.style.Text({text:f.get('label')||'',offsetY:-15,fill:new ol.style.Fill({color:'#111'}),stroke:new ol.style.Stroke({color:'#fff',width:3})})})});
const map=new ol.Map({target:'map',layers:[street,satellite,ptLayer],view:new ol.View({projection:'EPSG:3857',center:[0,0],zoom:2})});
const frame=document.getElementById('frame'),timeEl=document.getElementById('time'),frameText=document.getElementById('frameText'),legendEl=document.getElementById('legend'),attr=document.getElementById('attr');
function setBasemap(v){street.setVisible(v==='street'||v==='esri');satellite.setVisible(v==='satellite');}
document.getElementById('basemap').onchange=e=>setBasemap(e.target.value);document.getElementById('basemap').value=(cfg.defaultBasemap==='satellite'?'satellite':(cfg.defaultBasemap==='none'?'none':'street'));setBasemap(document.getElementById('basemap').value);
function addFloodLayer(l){let lyr=new ol.layer.Image({visible:false,opacity:cfg.defaultAlpha??.72,zIndex:30,source:new ol.source.ImageStatic({url:l.frames[0].png,imageExtent:l.extent3857,projection:'EPSG:3857'})});map.addLayer(lyr);state.layers[l.id]=lyr;}
function color(c,fb){return c||fb||'#1a73e8'}
function strokeOptions(s,stroke,width){
    let opt={color:stroke,width:width};
    if(Array.isArray(s.strokeDash)&&s.strokeDash.length){opt.lineDash=s.strokeDash.map(Number).filter(x=>Number.isFinite(x)&&x>0);}
    if(s.lineCap){opt.lineCap=s.lineCap;}
    if(s.lineJoin){opt.lineJoin=s.lineJoin;}
    return opt;
}
function olStyleFromWebStyle(s,geomType){
    s=s||{};
    let stroke=color(s.strokeColor,s.color||'#1a73e8');
    let fill=color(s.fillColor,s.color||'rgba(26,115,232,.18)');
    let width=Number(s.strokeWidth||2);
    let radius=Number(s.radius||s.size||5);
    if(String(geomType||'').includes('Point')||String(geomType||'').includes('MultiPoint')){
        if(s.iconUrl){
            return new ol.style.Style({image:new ol.style.Icon({src:s.iconUrl,scale:Number(s.iconScale||1),anchor:[0.5,0.5],anchorXUnits:'fraction',anchorYUnits:'fraction'})});
        }
        return new ol.style.Style({image:new ol.style.Circle({radius:radius,fill:new ol.style.Fill({color:fill}),stroke:new ol.style.Stroke(strokeOptions(s,stroke,width))})});
    }
    if(String(geomType||'').includes('Line')){
        if(Array.isArray(s.lineLayers)&&s.lineLayers.length){
            return s.lineLayers.map(ll=>new ol.style.Style({stroke:new ol.style.Stroke(strokeOptions(ll,color(ll.strokeColor,stroke),Number(ll.strokeWidth||width)))}));
        }
        return new ol.style.Style({stroke:new ol.style.Stroke(strokeOptions(s,stroke,width))});
    }
    return new ol.style.Style({stroke:new ol.style.Stroke(strokeOptions(s,stroke,width)),fill:new ol.style.Fill({color:fill})});
}
function styleForFeature(f,b){
    let geomType=f.getGeometry()?f.getGeometry().getType():'';
    let st=b&&b.style?b.style:null;
    if(!st)return olStyleFromWebStyle(null,geomType);
    try{
        if(st.type==='single')return olStyleFromWebStyle(st.style||st,geomType);
        if(st.type==='categorized'){
            let v=String(f.get(st.field));
            let cat=(st.categories||[]).find(x=>String(x.value)===v);
            return olStyleFromWebStyle(cat?cat.style:(st.defaultStyle||null),geomType);
        }
        if(st.type==='graduated'){
            let v=Number(f.get(st.field));
            let rg=(st.ranges||[]).find(x=>Number.isFinite(v)&&v>=Number(x.lower)&&v<=Number(x.upper));
            return olStyleFromWebStyle(rg?rg.style:null,geomType);
        }
    }catch(e){console.warn('Style fallback',e)}
    return olStyleFromWebStyle(null,geomType);
}
function transparentHitStyle(f){
    let gt=f.getGeometry()?f.getGeometry().getType():'';
    let clear='rgba(0,0,0,0.001)';
    if(String(gt||'').includes('Point'))return new ol.style.Style({image:new ol.style.Circle({radius:7,fill:new ol.style.Fill({color:clear}),stroke:new ol.style.Stroke({color:clear,width:1})})});
    if(String(gt||'').includes('Line'))return new ol.style.Style({stroke:new ol.style.Stroke({color:clear,width:8})});
    return new ol.style.Style({stroke:new ol.style.Stroke({color:clear,width:1}),fill:new ol.style.Fill({color:clear})});
}
function addBaseLayer(b){
    if(b.type==='raster'){
        let lyr=new ol.layer.Image({
            visible:false,opacity:.82,zIndex:10,
            source:new ol.source.ImageStatic({url:b.url,imageExtent:b.extent3857,projection:'EPSG:3857'})
        });
        lyr.set('layerName',b.name||b.id);
        lyr.set('layerKind','raster');
        map.addLayer(lyr);
        state.layers[b.id]=lyr;
        return;
    }
    let src=new ol.source.Vector();
    let visualLayer=null;
    if(b.renderedVectorUrl && b.qgisRenderedVectorForced){
        visualLayer=new ol.layer.Image({
            visible:false,opacity:.95,zIndex:20,
            source:new ol.source.ImageStatic({url:b.renderedVectorUrl,imageExtent:(b.renderedVectorExtent3857||b.extent3857),projection:'EPSG:3857'})
        });
        visualLayer.set('layerName',b.name||b.id);
        visualLayer.set('layerKind','vector-rendered');
        map.addLayer(visualLayer);
        state.layers[b.id]=visualLayer;
    }
    let lyr=new ol.layer.Vector({
        visible:false,
        source:src,
        zIndex:(b.renderedVectorUrl&&b.qgisRenderedVectorForced)?21:20,
        style:f=>(b.renderedVectorUrl&&b.qgisRenderedVectorForced)?transparentHitStyle(f):styleForFeature(f,b)
    });
    lyr.set('layerName',b.name||b.id);
    lyr.set('layerKind','vector');
    lyr.set('popupEnabled',b.popup!==false);
    lyr.set('popupFields',b.popupFields||null);
    map.addLayer(lyr);
    if(b.renderedVectorUrl&&b.qgisRenderedVectorForced){
        state.hitLayers[b.id]=lyr;
    }else{
        state.layers[b.id]=lyr;
    }
    function done(){
        if(b.extent3857&&src.getFeatures().length)lyr.set('extent3857',b.extent3857);
    }
    function fail(e){
        console.warn('Không đọc được lớp nền',b.url,e);
        attr.innerHTML='<b>Lưu ý</b><br>Không đọc được '+b.url+'. Nếu đang mở index.html trực tiếp, hãy chạy run_local_server.bat hoặc python -m http.server 8080.';
    }
    if(b.url.match(/\.geojson$|\.json$/i)){
        fetch(b.url).then(r=>r.json()).then(g=>{
            src.addFeatures(new ol.format.GeoJSON().readFeatures(g,{dataProjection:'EPSG:3857',featureProjection:'EPSG:3857'}));
            done();
        }).catch(fail);
    }else if(window.shp){
        shp(b.url).then(g=>{
            src.addFeatures(new ol.format.GeoJSON().readFeatures(g,{featureProjection:'EPSG:3857'}));
            done();
        }).catch(fail);
    }
}
function cardHTML(id,name,meta,group){return `<div class="card" data-name="${String(name).toLowerCase()}" data-group="${group}"><label><input type="checkbox" data-id="${id}" data-group="${group}">${name}</label><small>${meta||''}</small></div>`}
function buildUI(){let flood=document.getElementById('floodLayers'),base=document.getElementById('baseLayers');cfg.layers.forEach(l=>{addFloodLayer(l);flood.insertAdjacentHTML('beforeend',cardHTML(l.id,l.caption||l.alias,l.item+' · '+l.frames.length+' frame','flood'));});(cfg.baseLayers||[]).forEach(b=>{addBaseLayer(b);base.insertAdjacentHTML('beforeend',cardHTML(b.id,b.name,b.type,'base'));});document.querySelectorAll('input[type=checkbox][data-id]').forEach(cb=>cb.onchange=e=>{let id=e.target.dataset.id,group=e.target.dataset.group;let vis=e.target.checked;if(group==='flood'){if(vis)state.active.add(id);else state.active.delete(id);}if(state.layers[id])state.layers[id].setVisible(vis);if(state.hitLayers[id])state.hitLayers[id].setVisible(vis);refresh(true);});document.getElementById('layerSearch').oninput=e=>{let q=e.target.value.toLowerCase().trim();document.querySelectorAll('.card').forEach(c=>c.classList.toggle('hidden',q && !c.dataset.name.includes(q)));};(cfg.baseLayers||[]).forEach(b=>{if(b.visible){let cb=document.querySelector(`input[data-id="${b.id}"]`);if(cb){cb.checked=true;cb.onchange({target:cb});}}});if(cfg.layers[0]){let first=document.querySelector(`input[data-id="${cfg.layers[0].id}"]`);if(first){first.checked=true;first.onchange({target:first});}}else refresh(true);}
function setFrame(i){let max=Number(frame.max||0);state.frame=Math.max(0,Math.min(max,Number(i)));frame.value=state.frame;frameText.textContent=`Frame ${state.frame+1}/${max+1}`;let times=[];cfg.layers.forEach(l=>{if(state.active.has(l.id)){let fr=l.frames[Math.min(state.frame,l.frames.length-1)];state.layers[l.id].setSource(new ol.source.ImageStatic({url:fr.png,imageExtent:l.extent3857,projection:'EPSG:3857'}));times.push((l.caption||l.alias)+': '+fr.time)}});timeEl.textContent=times.join(' | ')||'--';drawChart();}
function refresh(fit=true){let m=0,ext=null;cfg.layers.forEach(l=>{if(state.active.has(l.id)){m=Math.max(m,l.frames.length-1);if(l.extent3857)ext=ext?ol.extent.extend(ext,l.extent3857.slice()):l.extent3857.slice();}});(cfg.baseLayers||[]).forEach(b=>{let lyr=state.layers[b.id];if(lyr&&lyr.getVisible()&&b.extent3857)ext=ext?ol.extent.extend(ext,b.extent3857.slice()):b.extent3857.slice();});if(!ext&&cfg.fullExtent3857)ext=cfg.fullExtent3857.slice();frame.max=m;if(fit&&ext)map.getView().fit(ext,{padding:[30,30,30,30],maxZoom:15});setFrame(state.frame);drawLegend();}
function legendSymbolHtml(it){
    if(it&&it.iconUrl){return `<img class="legendIcon" src="${it.iconUrl}">`;}
    if(it&&it.symbolType==='line'){
        let dash='';
        if(Array.isArray(it.strokeDash)&&it.strokeDash.length){dash=`border-top-style:dashed;`;}
        let w=Math.max(2,Math.min(8,Number(it.strokeWidth||2)));
        return `<span class="legendLine" style="border-top-color:${it.strokeColor||it.color||'#1a73e8'};border-top-width:${w}px;${dash}"></span>`;
    }
    return `<span class="sw" style="background:${(it&&it.color)||'#1a73e8'}"></span>`;
}
function drawLegend(){
    legendEl.innerHTML='';
    let activeFlood=cfg.layers.filter(l=>state.active.has(l.id));
    let activeBase=(cfg.baseLayers||[]).filter(b=>state.layers[b.id]&&state.layers[b.id].getVisible());
    if(!activeFlood.length && !activeBase.length){
        legendEl.innerHTML='<span class="muted">Chưa bật lớp bản đồ</span>';
        return;
    }
    if(activeFlood.length){
        legendEl.innerHTML+='<div class="legendTitle">Lớp ngập đang hiển thị</div>';
        activeFlood.forEach(l=>{
            legendEl.innerHTML+=`<div class="layerName"><span class="layerDot"></span><b>${l.caption||l.alias}</b></div>`;
            (l.legendItems||[]).forEach(it=>legendEl.innerHTML+=`${legendSymbolHtml(it)}${it.label}<br>`);
        });
    }
    if(activeBase.length){
        legendEl.innerHTML+='<div class="legendTitle">Lớp nền đang hiển thị</div>';
        activeBase.forEach(b=>{
            let kind=b.type==='vector'?'Vector':'Raster';
            legendEl.innerHTML+=`<div class="layerName"><span class="layerDot"></span><b>${b.name}</b> <small>(${kind})</small></div>`;
            if((b.legendItems||[]).length){
                (b.legendItems||[]).forEach(it=>legendEl.innerHTML+=`${legendSymbolHtml(it)}${it.label}<br>`);
            }
        });
    }
}
const cache=new Map();async function openGeo(u){if(cache.has(u))return cache.get(u);let t=await GeoTIFF.fromUrl(u),im=await t.getImage(),o={im,b:im.getBoundingBox()};cache.set(u,o);return o;}async function sample(fr,xy){let g=await openGeo(fr.tif),w=g.im.getWidth(),h=g.im.getHeight(),b=g.b;let px=Math.floor((xy[0]-b[0])/(b[2]-b[0])*w),py=Math.floor((b[3]-xy[1])/(b[3]-b[1])*h);px=Math.max(0,Math.min(w-1,px));py=Math.max(0,Math.min(h-1,py));let r=await g.im.readRasters({window:[px,py,px+1,py+1]});return Number(Array.isArray(r)?(r[0][0]??r[0]):r[0]);}
async function makeSeries(l,xy,ptLabel){let vals=[];for(let fr of l.frames)vals.push(await sample(fr,xy));return {point:ptLabel,label:ptLabel+' · '+(l.caption||l.alias)+' - '+l.item,times:l.frames.map(f=>f.time),values:vals};}
function drawChart(){if(!state.series.length){document.getElementById('tsPanel').style.display='none';return;}document.getElementById('tsPanel').style.display='block';let traces=state.series.map(s=>({x:s.times,y:s.values,mode:'lines+markers',name:s.label}));let x0=state.series[0].times[Math.min(state.frame,state.series[0].times.length-1)];Plotly.react('chart',traces,{margin:{l:55,r:18,t:20,b:55},showlegend:true,legend:{orientation:'h',y:-.22},shapes:[{type:'line',x0,x1:x0,yref:'paper',y0:0,y1:1,line:{color:'red',width:2}}]},{responsive:true});}
async function addPointAtCoordinate(coord,label){let ll=ol.proj.toLonLat(coord);pts.addFeature(new ol.Feature({geometry:new ol.geom.Point(coord),label}));state.points.push({label,lon:ll[0],lat:ll[1]});document.getElementById('tsPanel').style.display='block';document.getElementById('pointInfo').textContent='Đang lấy timeseries tại '+label+'...';for(let l of cfg.layers.filter(l=>state.active.has(l.id))){try{state.series.push(await makeSeries(l,coord,label));}catch(err){console.warn(err)}}document.getElementById('pointInfo').textContent=`${state.points.length} điểm · ${state.series.length} chuỗi`;drawChart();}
function escapeHtml(v){
    return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function attrTableHtml(props,layerName,popupFields){
    let entries=Object.entries(props||{}).filter(([k])=>k!=='geometry');
    if(Array.isArray(popupFields)&&popupFields.length){let allow=new Set(popupFields.map(String));entries=entries.filter(([k])=>allow.has(String(k)));}
    let rows=entries.map(([k,v])=>`<tr><th>${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`).join('');
    if(!rows)rows='<tr><td colspan="2">Không có thuộc tính hoặc tất cả field đang ẩn</td></tr>';
    return `<div class="muted">Layer: ${escapeHtml(layerName||'')}</div><table class="attrTable">${rows}</table>`;
}
function showAttributePanel(props,layerName,popupFields){
    attr.innerHTML=attrTableHtml(props,layerName,popupFields);
    document.getElementById('attrPanel').style.display='block';
}
function hideAttributePanel(){
    document.getElementById('attrPanel').style.display='none';
}
function clickObjectEnabled(){let el=document.getElementById('clickObjMode');return !!(el&&el.checked);}
function clickTimeseriesEnabled(){let el=document.getElementById('clickTsMode');return !!(el&&el.checked);}
document.getElementById('closeAttr').onclick=()=>hideAttributePanel();
document.getElementById('clickObjMode').onchange=e=>{if(!e.target.checked)hideAttributePanel();};
document.getElementById('clickTsMode').onchange=e=>{if(!e.target.checked)document.getElementById('tsPanel').style.display='none';};
map.on('singleclick',async e=>{
    const allowObj=clickObjectEnabled();
    const allowTs=clickTimeseriesEnabled();
    if(!allowObj && !allowTs){
        // Không chọn chế độ click nào: không mở thuộc tính, không tạo timeseries.
        return;
    }
    let hit=false;
    if(allowObj){
        map.forEachFeatureAtPixel(e.pixel,(f,l)=>{
            if(l!==ptLayer){
                hit=true;
                if(l&&l.get&&l.get('popupEnabled')===false){return false;}
                let layerName=(l&&l.get)?l.get('layerName'):'';
                let popupFields=(l&&l.get)?l.get('popupFields'):null;
                showAttributePanel(f.getProperties(),layerName,popupFields);
                return true;
            }
        },{hitTolerance:4});
        if(!hit)hideAttributePanel();
    }else{
        hideAttributePanel();
    }
    if(allowTs){
        // Nếu bật Timeseries, mọi click trên map đều tạo điểm timeseries tại vị trí click,
        // kể cả khi đồng thời click trúng đối tượng nền.
        let label='P'+(state.points.length+1);
        await addPointAtCoordinate(e.coordinate,label);
    }
});
frame.oninput=e=>setFrame(e.target.value);document.getElementById('play').onclick=()=>{clearInterval(state.timer);state.timer=setInterval(()=>setFrame((state.frame+1)%(Number(frame.max)+1||1)),400)};document.getElementById('pause').onclick=()=>clearInterval(state.timer);document.getElementById('prev').onclick=()=>setFrame(state.frame-1);document.getElementById('next').onclick=()=>setFrame(state.frame+1);
document.getElementById('csv').onclick=()=>{let rows=[['series','point','time','value']];state.series.forEach(s=>s.times.forEach((t,i)=>rows.push([s.label,s.point||'',t,s.values[i]])));let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([rows.map(r=>r.join(',')).join('\n')],{type:'text/csv'}));a.download='timeseries.csv';a.click();};document.getElementById('savepts').onclick=()=>{let rows=[['label','lon','lat']];state.points.forEach(p=>rows.push([p.label,p.lon,p.lat]));let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([rows.map(r=>r.join(',')).join('\n')],{type:'text/csv'}));a.download='points.csv';a.click();};document.getElementById('loadpts').onchange=e=>{let f=e.target.files[0];if(!f)return;f.text().then(async txt=>{for(let line of txt.split(/\r?\n/).slice(1)){let c=line.split(',');if(c.length>=3){let label=c[0]||('P'+(state.points.length+1)),lon=Number(c[1]),lat=Number(c[2]);if(Number.isFinite(lon)&&Number.isFinite(lat)){await addPointAtCoordinate(ol.proj.fromLonLat([lon,lat]),label);}}}});};document.getElementById('clearpts').onclick=()=>{pts.clear();state.points=[];state.series=[];Plotly.react('chart',[],{});document.getElementById('pointInfo').textContent='';document.getElementById('tsPanel').style.display='none';};
buildUI();
