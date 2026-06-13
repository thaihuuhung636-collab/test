window.DFS2_WEBGIS_CONFIG = {
  "title": "Flood Impact WebGIS",
  "defaultBasemap": "satellite",
  "defaultAlpha": 0.7,
  "layers": [
    {
      "id": "KB01_Grid_Data",
      "alias": "KB01",
      "caption": "KB01 - Grid Data",
      "item": "Grid Data",
      "frames": [
        {
          "png": "frames/KB01_Grid_Data/frame_0000.png",
          "tif": "frames/KB01_Grid_Data/frame_0000.tif",
          "time": "2000-01-01 00:00:00"
        }
      ],
      "extent3857": [
        11945609.673383405,
        1844372.186383094,
        12003387.847203607,
        1885606.501322023
      ],
      "legendItems": [
        {
          "color": "#e3f2fd",
          "label": "0 - 0.5"
        },
        {
          "color": "#bbdefb",
          "label": "0.5 - 1"
        },
        {
          "color": "#90caf9",
          "label": "1 - 2"
        },
        {
          "color": "#42a5f5",
          "label": "2 - 5"
        },
        {
          "color": "#1e88e5",
          "label": "5 - 7"
        },
        {
          "color": "#1565c0",
          "label": "7 - 10"
        }
      ]
    },
    {
      "id": "KB02_Grid_Data",
      "alias": "KB02",
      "caption": "KB02 - Grid Data",
      "item": "Grid Data",
      "frames": [
        {
          "png": "frames/KB02_Grid_Data/frame_0000.png",
          "tif": "frames/KB02_Grid_Data/frame_0000.tif",
          "time": "2000-01-01 00:00:00"
        }
      ],
      "extent3857": [
        11945609.673383405,
        1844372.186383094,
        12003387.847203607,
        1885606.501322023
      ],
      "legendItems": [
        {
          "color": "#e3f2fd",
          "label": "0 - 0.5"
        },
        {
          "color": "#bbdefb",
          "label": "0.5 - 1"
        },
        {
          "color": "#90caf9",
          "label": "1 - 2"
        },
        {
          "color": "#42a5f5",
          "label": "2 - 5"
        },
        {
          "color": "#1e88e5",
          "label": "5 - 7"
        },
        {
          "color": "#1565c0",
          "label": "7 - 10"
        }
      ]
    }
  ],
  "baseLayers": [
    {
      "id": "base_Mặt_cắt_khảo_sát",
      "name": "Mặt cắt khảo sát",
      "type": "vector",
      "url": "backgrounds/MatCat_Line.geojson",
      "extent3857": [
        11958109.0071399,
        1857975.5626414088,
        11975196.166993627,
        1870990.6621971563
      ],
      "format": "geojson",
      "style": {
        "type": "single",
        "style": {
          "strokeColor": "#000000",
          "fillColor": "#000000",
          "strokeWidth": 2.8346,
          "radius": 5,
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVRYhe3OQREAIAzEwMDgAv/GQEgr4x7NGkhAkqTpVnFfeqCC/drBOAAH+OkJSZJma/n6BgC4bn0bAAAAAElFTkSuQmCC",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "lineCap": "butt",
          "strokeDash": [
            15.0,
            6.0
          ]
        }
      },
      "legendItems": [
        {
          "label": "Mặt cắt khảo sát",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 2.8346,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVRYhe3OQREAIAzEwMDgAv/GQEgr4x7NGkhAkqTpVnFfeqCC/drBOAAH+OkJSZJma/n6BgC4bn0bAAAAAElFTkSuQmCC"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "Id",
        "ChieuDai",
        "Ten"
      ],
      "popupFieldLabels": {
        "Id": "no label",
        "ChieuDai": "no label",
        "Ten": "header label"
      }
    },
    {
      "id": "base_Vi_Tri_diem_48N",
      "name": "Vi_Tri_diem_48N",
      "type": "vector",
      "url": "backgrounds/Vi_Tri_diem_48N.geojson",
      "extent3857": [
        11894829.952382118,
        1816697.9410503525,
        12021243.297339056,
        1872604.1501809221
      ],
      "format": "geojson",
      "style": {
        "type": "categorized",
        "field": "Layer",
        "categories": [
          {
            "value": "Bệnh viện",
            "label": "Bệnh viện",
            "style": {
              "strokeColor": "#e31a1c",
              "fillColor": "#e31a1c",
              "strokeWidth": 0.56692,
              "radius": 2.95384,
              "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACEUlEQVRYhe2VvW4TQRSFz52dBprYICHIGmdTWBv3/HQUSZ0fN5agyAsgGsR7IIr0CEWRsk3CA8BbRHaK2CHjjSBIeAsbJHtmDoXBQgKJtZUozX7VaHTnzjmje+8ABQUFBdeMzHOoF4ZrhDQBiSc7PBYwqaTphysV8KlaLSvKDpx7KlpT1+sCALbVIq0VBMGeDeT58ulpNquQ/9KNolJvadmktdgOk4R+NOJv/GjEYZIwrcW2V43OulFUunQB5v7SXlqLrTWGJOn6fX5ZX+fF+gZdv0+StMYwrcXWVKq7l3p5LwzXzGKFwySZuh6fnPD84WOeP3jEcbc73R/sJzSLFfbCcDVPbpUniJCmaM0bjQZ8lsF2OnDGACRAwhkD2+nAZxluNrYgQUDvVTNPbp0nCJBY1+siWuPr9jbc5wuABAcDAMS3l68AEQT37uLO+0Poeh3jo6OVSxTwhxSoqXMAADFdyxxdnVMAj22r9YTWyu13b+GzDM6YiXMSt968RhCGUOUyOB7DtlqgRztP5lw1IGBCa+XHwQFUqQQdRQjCEBCZPH0YQkcR1MICvh8cgs6JUj7JZy4n/2zDjS1ebG7SZdnVtiHwaxBVo7O0FtvB/t+DaLA/3yCaqWq6UVTSjjtw7ploTb0yKXTbboPWCpTatVq9mGUUz/sZrXqvmqKwAgD0aCvlk0qafpwnX0FBQcG18hM8sEwQgoqYWgAAAABJRU5ErkJggg==",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "color": "#ffffff",
              "lineCap": "butt"
            }
          },
          {
            "value": "Trụ sở hành chính",
            "label": "Trụ sở hành chính",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 1.13384,
              "radius": 2,
              "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABsklEQVRYhe2VPWvbQBjH/1fDCQkEkj6DMZYdAvaW5JIvYLw2pYt1xlOhQ6HfopDFg2ft+hYZEi83mDgGt19AwaAaL0LW6Tq0zYtTmrOJyaLfdm//5/889waUlJSUvDFkx3UVAIeUUh8Asiy7BTABUOzdgOM4Z41G41uz2ay2220XAIQQyXQ6/TGbzb4mSXK5raY2nU7nQ7/fj4uiUJtIKRXnPO52u+/3EtxxnLPBYBA/i7xBEASxbdvHrx2/whgbb2aepqlK0/RJX57nijE2hub2vtM0cOj7fpWQB80oiuB5HjzPQxRFD04rFdRqtSqAgy0S/D+U0o+j0ah4nLllWYoQogghyrKsJ5UYDoeSUnquo61bgb2hZSDLslshRPK3bRgGwjCEaZowTRNhGMIwjPv5Qoiff96G1zPKGBtLKV88hOv1WjHGrrH7I/dvXNc95Zy/eA17vV5s2/aRdma6E5MkuVwsFp8553dSymfjeZ4jCIK75XL5abVaXenqbl0m13VPfN+/qNfr1Var5QC/93w+n3+fTCZftgm+k4FH6w4opQ3g/jO6AaB21CspKSl5O34BszU7rcUuXSgAAAAASUVORK5CYII=",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "color": "#ffffff",
              "lineCap": "butt"
            }
          }
        ],
        "defaultStyle": {
          "strokeColor": "#232323",
          "fillColor": "#c43c39",
          "strokeWidth": 0.35,
          "radius": 3.2,
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA+0lEQVRYhe3TMUoDQRTG8f/sJGVITKqQQgYeIUTYziJH8BDRc+gBQm4RyBm8RbBRlBAWtompsi5oKg07FipEsJmVBYX3a4f3va+YB0oppf4z51zsnIt/k2HKDA1ERk1rZ8b77mfK5sVzfr9aLSovMBAZHddr11ftVtuaj/E9MNnm2WNRnIWWiEILHFk7O1wOUAMuO61OAz8PzQsq4JyLvffdw+Vf6sZQQE9EhpUVqEJQgTRNb4HN/oe3V8Aas06S5KGyAgDPcDHZ5tmb99+WT7P8aWeicWheqTM86fdPGzAv8D0Ai1nvomh8t1zelMkrTUSGoZ9OKaXUn/MOH2tDXja/ogIAAAAASUVORK5CYII=",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "color": "#c43c39",
          "lineCap": "butt"
        }
      },
      "legendItems": [
        {
          "label": "Bệnh viện",
          "color": "#e31a1c",
          "fillColor": "#e31a1c",
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACEUlEQVRYhe2VvW4TQRSFz52dBprYICHIGmdTWBv3/HQUSZ0fN5agyAsgGsR7IIr0CEWRsk3CA8BbRHaK2CHjjSBIeAsbJHtmDoXBQgKJtZUozX7VaHTnzjmje+8ABQUFBdeMzHOoF4ZrhDQBiSc7PBYwqaTphysV8KlaLSvKDpx7KlpT1+sCALbVIq0VBMGeDeT58ulpNquQ/9KNolJvadmktdgOk4R+NOJv/GjEYZIwrcW2V43OulFUunQB5v7SXlqLrTWGJOn6fX5ZX+fF+gZdv0+StMYwrcXWVKq7l3p5LwzXzGKFwySZuh6fnPD84WOeP3jEcbc73R/sJzSLFfbCcDVPbpUniJCmaM0bjQZ8lsF2OnDGACRAwhkD2+nAZxluNrYgQUDvVTNPbp0nCJBY1+siWuPr9jbc5wuABAcDAMS3l68AEQT37uLO+0Poeh3jo6OVSxTwhxSoqXMAADFdyxxdnVMAj22r9YTWyu13b+GzDM6YiXMSt968RhCGUOUyOB7DtlqgRztP5lw1IGBCa+XHwQFUqQQdRQjCEBCZPH0YQkcR1MICvh8cgs6JUj7JZy4n/2zDjS1ebG7SZdnVtiHwaxBVo7O0FtvB/t+DaLA/3yCaqWq6UVTSjjtw7ploTb0yKXTbboPWCpTatVq9mGUUz/sZrXqvmqKwAgD0aCvlk0qafpwnX0FBQcG18hM8sEwQgoqYWgAAAABJRU5ErkJggg==",
          "symbolType": "icon"
        },
        {
          "label": "Trụ sở hành chính",
          "color": "#000000",
          "fillColor": "#000000",
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABsklEQVRYhe2VPWvbQBjH/1fDCQkEkj6DMZYdAvaW5JIvYLw2pYt1xlOhQ6HfopDFg2ft+hYZEi83mDgGt19AwaAaL0LW6Tq0zYtTmrOJyaLfdm//5/889waUlJSUvDFkx3UVAIeUUh8Asiy7BTABUOzdgOM4Z41G41uz2ay2220XAIQQyXQ6/TGbzb4mSXK5raY2nU7nQ7/fj4uiUJtIKRXnPO52u+/3EtxxnLPBYBA/i7xBEASxbdvHrx2/whgbb2aepqlK0/RJX57nijE2hub2vtM0cOj7fpWQB80oiuB5HjzPQxRFD04rFdRqtSqAgy0S/D+U0o+j0ah4nLllWYoQogghyrKsJ5UYDoeSUnquo61bgb2hZSDLslshRPK3bRgGwjCEaZowTRNhGMIwjPv5Qoiff96G1zPKGBtLKV88hOv1WjHGrrH7I/dvXNc95Zy/eA17vV5s2/aRdma6E5MkuVwsFp8553dSymfjeZ4jCIK75XL5abVaXenqbl0m13VPfN+/qNfr1Var5QC/93w+n3+fTCZftgm+k4FH6w4opQ3g/jO6AaB21CspKSl5O34BszU7rcUuXSgAAAAASUVORK5CYII=",
          "symbolType": "icon"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "OBJECTID",
        "Entity",
        "Layer",
        "Color",
        "Linetype",
        "Elevation",
        "LineWt",
        "RefName",
        "Angle"
      ],
      "popupFieldLabels": {
        "OBJECTID": "no label",
        "Entity": "no label",
        "Layer": "no label",
        "Color": "no label",
        "Linetype": "no label",
        "Elevation": "no label",
        "LineWt": "no label",
        "RefName": "no label",
        "Angle": "no label"
      }
    },
    {
      "id": "base_Duong_giao_Thong_48N",
      "name": "Duong_giao_Thong_48N",
      "type": "vector",
      "url": "backgrounds/Duong_giao_Thong_48N.geojson",
      "extent3857": [
        11913841.248657383,
        1806085.0573775617,
        12039352.43823061,
        1891052.959211323
      ],
      "format": "geojson",
      "style": {
        "type": "categorized",
        "field": "Layer",
        "categories": [
          {
            "value": "Đường Quốc Lộ",
            "label": "Đường Quốc Lộ",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 2.8346,
              "radius": 5,
              "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAO0lEQVRYhe3QMREAIBDEwMBgA1Howxg1CIECEV981kBuDiRJyq6sOXbkgAb0wP6tgXHgP3CiR0iSlNsDHHYEsY2nHE4AAAAASUVORK5CYII=",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "butt",
              "strokeDash": [
                15.0,
                6.0
              ]
            }
          },
          {
            "value": "Đường sắt",
            "label": "Đường sắt",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 6.80304,
              "radius": 5,
              "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAbElEQVRYhe3UsQ3CQBAEwDEgiy6AiLbozG1B6IwSHDohxncBIvBOvL9avfRPRERwKuYGjI3e8XNm06NYeMXUGDDhthU6NAp/IgMGPPEuZM+44FXsvmPG8i309xsgr2DvA+DYyFa/7W42ImLHVliYCKs6xS5eAAAAAElFTkSuQmCC",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "square",
              "lineJoin": "miter",
              "strokeDash": [
                15.0,
                6.0
              ],
              "lineLayers": [
                {
                  "strokeColor": "#000000",
                  "fillColor": "#000000",
                  "strokeWidth": 1.13384,
                  "lineCap": "square",
                  "lineJoin": "miter",
                  "strokeDash": [
                    15.0,
                    6.0
                  ]
                },
                {
                  "strokeColor": "#000000",
                  "fillColor": "#000000",
                  "strokeWidth": 6.80304
                }
              ]
            }
          },
          {
            "value": "Đường Tỉnh Lộ",
            "label": "Đường Tỉnh Lộ",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 1.4173,
              "radius": 5,
              "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAK0lEQVRYhe3OQQEAMAjEMDYL828NDUiYjOORGGirAICw0/0mOXCTcQBghQ+pxgLDeq0KhgAAAABJRU5ErkJggg==",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "butt",
              "strokeDash": [
                15.0,
                6.0
              ]
            }
          },
          {
            "value": "None",
            "label": "None",
            "style": {
              "strokeColor": "#000000",
              "fillColor": "#000000",
              "strokeWidth": 0.736996,
              "radius": 5,
              "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALklEQVRYhe3OQQ0AIAwEsI0gEEH4wwNiCDLu0ypoFQAQ1mfdnQzMHq+TAQAg7gMZmQN1D3QnGAAAAABJRU5ErkJggg==",
              "iconScale": 1.0,
              "iconSize": [
                32,
                32
              ],
              "lineCap": "butt",
              "strokeDash": [
                15.0,
                6.0
              ]
            }
          }
        ],
        "defaultStyle": {
          "strokeColor": "#000000",
          "fillColor": "#000000",
          "strokeWidth": 0.736996,
          "radius": 5,
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVRYhe3OMREAIAwEsJZDJGJQgEqcgIxfEgWpAgDC+q6zk4FZ43UyAADEfYehA0YQk4aCAAAAAElFTkSuQmCC",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "lineCap": "butt",
          "strokeDash": [
            15.0,
            6.0
          ]
        }
      },
      "legendItems": [
        {
          "label": "Đường Quốc Lộ",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 2.8346,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAO0lEQVRYhe3QMREAIBDEwMBgA1Howxg1CIECEV981kBuDiRJyq6sOXbkgAb0wP6tgXHgP3CiR0iSlNsDHHYEsY2nHE4AAAAASUVORK5CYII="
        },
        {
          "label": "Đường sắt",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 6.80304,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAbElEQVRYhe3UsQ3CQBAEwDEgiy6AiLbozG1B6IwSHDohxncBIvBOvL9avfRPRERwKuYGjI3e8XNm06NYeMXUGDDhthU6NAp/IgMGPPEuZM+44FXsvmPG8i309xsgr2DvA+DYyFa/7W42ImLHVliYCKs6xS5eAAAAAElFTkSuQmCC"
        },
        {
          "label": "Đường Tỉnh Lộ",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 1.4173,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAK0lEQVRYhe3OQQEAMAjEMDYL828NDUiYjOORGGirAICw0/0mOXCTcQBghQ+pxgLDeq0KhgAAAABJRU5ErkJggg=="
        },
        {
          "label": "None",
          "color": "#000000",
          "fillColor": "#000000",
          "symbolType": "line",
          "strokeColor": "#000000",
          "strokeWidth": 0.736996,
          "strokeDash": [
            15.0,
            6.0
          ],
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALklEQVRYhe3OQQ0AIAwEsI0gEEH4wwNiCDLu0ypoFQAQ1mfdnQzMHq+TAQAg7gMZmQN1D3QnGAAAAABJRU5ErkJggg=="
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "OBJECTID",
        "Entity",
        "Layer",
        "Color",
        "Linetype",
        "Elevation",
        "LineWt",
        "RefName",
        "TEN",
        "Shape_Leng"
      ],
      "popupFieldLabels": {
        "OBJECTID": "no label",
        "Entity": "no label",
        "Layer": "no label",
        "Color": "no label",
        "Linetype": "no label",
        "Elevation": "no label",
        "LineWt": "no label",
        "RefName": "no label",
        "TEN": "no label",
        "Shape_Leng": "no label"
      }
    },
    {
      "id": "base_Ranh_giới_tỉnh",
      "name": "Ranh giới tỉnh",
      "type": "vector",
      "url": "backgrounds/Tinh_48.zip",
      "extent3857": [
        11370608.494102875,
        773451.0042106276,
        13068156.996284423,
        2679571.7359035327
      ],
      "format": "shpzip",
      "style": {
        "type": "single",
        "style": {
          "strokeColor": "#000000",
          "fillColor": "#000000",
          "strokeWidth": 2.8346,
          "radius": 5,
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABFElEQVRYhe3XP0sDMRzG8e8vpLQItQ6mOLq7O9hB+hoEN1+Bq6svQHBxcnRy7GsQSq+Db8JJsASHXtXB9i4OEqnQf3DnZTDPFI7LPR8IXBJJTdKnYJr2uSucZgCve4ODWia3m87VfiCILQoBqM3cVESt/JbDmZ/e1CR9QWzTHp2UAdgkEzPseYSqqnRZIiAC9PpXyo/DPYK0ggG2befKj4MvQXCABu4y8o8qS8ft5EwhWwBSZbFP/BX/AqTt5Hq8O7gMBdA4DtWa/fsvE34JIiACIiAC/j1Aw/ddbWKGPYBMTS92RsdPAG7/ofH2Xr8voyjHvbRs53whwCMAJJ87qM7qMn+RLBIFn4ueBzkVg7vJhQbAF2ORS9QcsGihAAAAAElFTkSuQmCC",
          "iconScale": 1.0,
          "iconSize": [
            32,
            32
          ],
          "lineCap": "butt",
          "strokeDash": [
            15.0,
            6.0
          ]
        }
      },
      "legendItems": [
        {
          "label": "Ranh giới tỉnh",
          "color": "#000000",
          "fillColor": "#000000",
          "iconUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABFElEQVRYhe3XP0sDMRzG8e8vpLQItQ6mOLq7O9hB+hoEN1+Bq6svQHBxcnRy7GsQSq+Db8JJsASHXtXB9i4OEqnQf3DnZTDPFI7LPR8IXBJJTdKnYJr2uSucZgCve4ODWia3m87VfiCILQoBqM3cVESt/JbDmZ/e1CR9QWzTHp2UAdgkEzPseYSqqnRZIiAC9PpXyo/DPYK0ggG2befKj4MvQXCABu4y8o8qS8ft5EwhWwBSZbFP/BX/AqTt5Hq8O7gMBdA4DtWa/fsvE34JIiACIiAC/j1Aw/ddbWKGPYBMTS92RsdPAG7/ofH2Xr8voyjHvbRs53whwCMAJJ87qM7qMn+RLBIFn4ueBzkVg7vJhQbAF2ORS9QcsGihAAAAAElFTkSuQmCC",
          "symbolType": "icon"
        }
      ],
      "visible": true,
      "popup": true,
      "popupFields": [
        "ma_tinh",
        "ten_tinh",
        "sap_nhap",
        "quy_mo",
        "tru_so",
        "loai",
        "cap",
        "stt",
        "dtich_km2",
        "dan_so",
        "matdo_km2"
      ],
      "popupFieldLabels": {
        "ma_tinh": "no label",
        "ten_tinh": "no label",
        "sap_nhap": "no label",
        "quy_mo": "no label",
        "tru_so": "no label",
        "loai": "no label",
        "cap": "no label",
        "stt": "no label",
        "dtich_km2": "no label",
        "dan_so": "no label",
        "matdo_km2": "no label"
      }
    }
  ],
  "fullExtent3857": [
    11370608.494102875,
    773451.0042106276,
    13068156.996284423,
    2679571.7359035327
  ],
  "groups": {
    "flood": "Độ sâu ngập lụt",
    "base": "Lớp nền"
  },
  "sourceCrs": "EPSG:32648",
  "webCrs": "EPSG:3857",
  "backgroundDiagnostics": [
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\HuongDien_Final\\SHP_DATA\\MatCat_Line.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11958109.0071399,
        1857975.5626414088,
        11975196.166993627,
        1870990.6621971563
      ],
      "mode": "geojson",
      "geojsonSizeMB": 0.01,
      "qgisStyle": true,
      "qgisRenderer": "singleSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\Vi_Tri_diem_48N.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11894829.952382118,
        1816697.9410503525,
        12021243.297339056,
        1872604.1501809221
      ],
      "mode": "geojson",
      "geojsonSizeMB": 0.01,
      "qgisStyle": true,
      "qgisRenderer": "categorizedSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\Duong_giao_Thong_48N.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "extent3857": [
        11913841.248657383,
        1806085.0573775617,
        12039352.43823061,
        1891052.959211323
      ],
      "mode": "geojson",
      "geojsonSizeMB": 0.42,
      "qgisStyle": true,
      "qgisRenderer": "categorizedSymbol"
    },
    {
      "source": "D:\\PROJECT\\Flood_HoHuongDien\\Data\\Tinh_48.shp",
      "sourceCrs": "EPSG:32648",
      "targetCrs": "EPSG:3857",
      "geojsonTooLargeMB": 63.5,
      "mode": "shp_zip_3857",
      "extent3857": [
        11370608.494102875,
        773451.0042106276,
        13068156.996284423,
        2679571.7359035327
      ],
      "zipSizeBytes": 15251659,
      "qgisStyle": true,
      "qgisRenderer": "singleSymbol"
    }
  ]
};