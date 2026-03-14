var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-principale-",
      "name": "Entrée principale ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.028952986314822127,
          "pitch": -0.06276556304149139,
          "rotation": 0,
          "target": "1-accueil-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4597229989642919,
          "pitch": -0.08822443651021317,
          "title": "Entrée principale de l'UCS&nbsp;",
          "text": "Vue de face de l'entrée principale de l'UCS, accès sur la route principale, accès au parkinget au transport public...&nbsp;"
        }
      ]
    },
    {
      "id": "1-accueil-",
      "name": "Accueil ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9114184084789656,
          "pitch": 0.06921257716767215,
          "rotation": 0,
          "target": "0-entre-principale-"
        },
        {
          "yaw": -2.06662562213144,
          "pitch": 0.04058144834387889,
          "rotation": 0,
          "target": "2-tage-bureaux"
        },
        {
          "yaw": -0.1638693308059409,
          "pitch": 0.04444736292437845,
          "rotation": 5.497787143782138,
          "target": "3-terrain-de-basquette-"
        },
        {
          "yaw": 0.13233775015456573,
          "pitch": 0.08257881485055663,
          "rotation": 0.7853981633974483,
          "target": "4-jardin-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.373115152415995,
          "pitch": 0.08844425647313159,
          "title": "Accès à la réception et au bureaux décanat&nbsp;",
          "text": "Service de réception pour tout renseignement et bureau facultaires, escalier menant à l'étage.&nbsp;"
        },
        {
          "yaw": 2.3880758283358787,
          "pitch": 0.0707731816686632,
          "title": "Amphithéâtre (grande salle)",
          "text": "Une salle où s'organise, conférence, réunion et différentes cérémonies&nbsp;"
        },
        {
          "yaw": -0.8740757243816155,
          "pitch": 0.044049070711752236,
          "title": "Jardin",
          "text": "Pour la pratique d'agronomie&nbsp;"
        }
      ]
    },
    {
      "id": "2-tage-bureaux",
      "name": "Étage (bureaux)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.139338367483669,
          "pitch": 0.2755188397068231,
          "rotation": 4.71238898038469,
          "target": "1-accueil-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6200527829019826,
          "pitch": -0.015959132680189114,
          "title": "&nbsp;Bureaux facultaires&nbsp;",
          "text": "Text"
        },
        {
          "yaw": 1.5905974071943723,
          "pitch": 0.00604096864049275,
          "title": "Accès à l'étage de l'amphithéâtre&nbsp;",
          "text": "Text"
        },
        {
          "yaw": -1.053868994494941,
          "pitch": 0.14868093466484567,
          "title": "Espace vert pour l'agronomie&nbsp;",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-terrain-de-basquette-",
      "name": "Terrain de basquette ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4024683631145276,
          "pitch": -0.00017913841502803507,
          "rotation": 0.7853981633974483,
          "target": "1-accueil-"
        },
        {
          "yaw": 0.8428077745723392,
          "pitch": -0.004128844827921085,
          "rotation": 0,
          "target": "4-jardin-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0683343954888684,
          "pitch": 0.1341218641868842,
          "title": "Lieu de divertissement",
          "text": "Sport, activités culturelles...&nbsp;"
        },
        {
          "yaw": -1.2896791985038014,
          "pitch": -0.3114520276255881,
          "title": "Raillon 1",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-jardin-",
      "name": "Jardin ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7482280415634186,
          "pitch": -0.04428460538694168,
          "rotation": 0,
          "target": "3-terrain-de-basquette-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.844274216940942,
          "pitch": -0.4642104244605001,
          "title": "Raillon sérénité&nbsp;",
          "text": "Text"
        },
        {
          "yaw": -0.8703422566080086,
          "pitch": -0.22486210505966042,
          "title": "Raillon 2",
          "text": "Text"
        },
        {
          "yaw": -1.9941964554525242,
          "pitch": -0.20442800349800905,
          "title": "Préfecture, comptabilité&nbsp;",
          "text": "Text"
        },
        {
          "yaw": 2.1497309000066736,
          "pitch": -0.13870381905153195,
          "title": "Cantine&nbsp;",
          "text": "Derrière le bâtiment sérénité&nbsp;"
        },
        {
          "yaw": -0.07408414487251314,
          "pitch": 0.3597196797550044,
          "title": "Jardin emblématique de l'université&nbsp;",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
