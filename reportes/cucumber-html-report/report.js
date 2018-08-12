$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FunctionTestLinkedIn/LinkedIn.feature");
formatter.feature({
  "line": 2,
  "name": "Acciones LinkedIn",
  "description": "como usuario quiero iniciar sesion, visualizar el perfil de uno de mis contactos, acceder a mi perfil y añadir una sección de experiencia laboral",
  "id": "acciones-linkedin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Inicio sesión y visualizo el perfil de uno de mis contacto",
  "description": "",
  "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "el usuario está en la página de linkedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "el usuario ingresa el \"\u003cusuario\u003e\" y \"\u003ccontraseña\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "inicia sesion",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ingresa a tus contactos y selecciona un contacto",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizas el perfil de tu contacto",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "cierro sesión",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;",
  "rows": [
    {
      "cells": [
        "usuario",
        "contraseña"
      ],
      "line": 17,
      "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;;1"
    },
    {
      "cells": [
        "karinacardenasestupinan@gmail.com",
        "karina880330*"
      ],
      "line": 18,
      "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Inicio sesión y visualizo el perfil de uno de mis contacto",
  "description": "",
  "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "el usuario está en la página de linkedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "el usuario ingresa el \"karinacardenasestupinan@gmail.com\" y \"karina880330*\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "inicia sesion",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ingresa a tus contactos y selecciona un contacto",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "visualizas el perfil de tu contacto",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "cierro sesión",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.el_usuario_está_en_la_página_de_linkedIn()"
});
formatter.result({
  "duration": 52983885513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karinacardenasestupinan@gmail.com",
      "offset": 23
    },
    {
      "val": "karina880330*",
      "offset": 61
    }
  ],
  "location": "Steps.el_usuario_ingresa_el_And(String,String)"
});
formatter.result({
  "duration": 8431354632,
  "status": "passed"
});
formatter.match({
  "location": "Steps.inicia_sesion()"
});
formatter.result({
  "duration": 33909596608,
  "status": "passed"
});
formatter.match({
  "location": "Steps.ingresa_a_tus_contactos_y_selecciona_un_contacto()"
});
formatter.result({
  "duration": 23167716650,
  "status": "passed"
});
formatter.match({
  "location": "Steps.visualizas_el_perfil_de_tu_contacto()"
});
formatter.result({
  "duration": 32241,
  "status": "passed"
});
formatter.match({
  "location": "Steps.cierro_sesión()"
});
formatter.result({
  "duration": 11714655964,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Inicio sesión y visualizo el perfil de uno de mis contacto",
  "description": "",
  "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "el usuario está en la página de linkedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "el usuario ingresa el \"\u003cusuario\u003e\" y \"\u003ccontraseña\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "inicia sesion",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "accedo a mi perfil",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "añado una nueva experiencia con los siguientes datos: \"\u003ccargo\u003e\" \"\u003ccompañia\u003e\" \"\u003clocación\u003e\" \"\u003cmes_inicio\u003e\" \"\u003caño_inicio\u003e\" \"\u003cdescripción_posición\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Se actualiza el perfil con la nueva experiencia",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "cierro sesión",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;",
  "rows": [
    {
      "cells": [
        "usuario",
        "contraseña",
        "cargo",
        "compañia",
        "locación",
        "mes_inicio",
        "año_inicio",
        "descripción_posición"
      ],
      "line": 33,
      "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;;1"
    },
    {
      "cells": [
        "karinacardenasestupinan@gmail.com",
        "karina880330*",
        "Analista QA",
        "Falabella Financiero",
        "Provincia de Santiago, Chile",
        "agosto",
        "2018",
        "Desarrollo de proyectos web y mobile, análisis de requerimientos funcionales, pruebas manuales y automatizadas."
      ],
      "line": 34,
      "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Inicio sesión y visualizo el perfil de uno de mis contacto",
  "description": "",
  "id": "acciones-linkedin;inicio-sesión-y-visualizo-el-perfil-de-uno-de-mis-contacto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 20,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "el usuario está en la página de linkedIn",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "el usuario ingresa el \"karinacardenasestupinan@gmail.com\" y \"karina880330*\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "inicia sesion",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "accedo a mi perfil",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "añado una nueva experiencia con los siguientes datos: \"Analista QA\" \"Falabella Financiero\" \"Provincia de Santiago, Chile\" \"agosto\" \"2018\" \"Desarrollo de proyectos web y mobile, análisis de requerimientos funcionales, pruebas manuales y automatizadas.\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Se actualiza el perfil con la nueva experiencia",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "cierro sesión",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.el_usuario_está_en_la_página_de_linkedIn()"
});
formatter.result({
  "duration": 4035909688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karinacardenasestupinan@gmail.com",
      "offset": 23
    },
    {
      "val": "karina880330*",
      "offset": 61
    }
  ],
  "location": "Steps.el_usuario_ingresa_el_And(String,String)"
});
formatter.result({
  "duration": 3820743168,
  "status": "passed"
});
formatter.match({
  "location": "Steps.inicia_sesion()"
});
formatter.result({
  "duration": 22942810123,
  "status": "passed"
});
formatter.match({
  "location": "Steps.accedo_a_mi_perfil()"
});
formatter.result({
  "duration": 2982258088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analista QA",
      "offset": 55
    },
    {
      "val": "Falabella Financiero",
      "offset": 69
    },
    {
      "val": "Provincia de Santiago, Chile",
      "offset": 92
    },
    {
      "val": "agosto",
      "offset": 123
    },
    {
      "val": "2018",
      "offset": 132
    },
    {
      "val": "Desarrollo de proyectos web y mobile, análisis de requerimientos funcionales, pruebas manuales y automatizadas.",
      "offset": 139
    }
  ],
  "location": "Steps.añado_una_nueva_experiencia_con_los_siguientes_datos(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 71860584757,
  "status": "passed"
});
formatter.match({
  "location": "Steps.se_actualiza_el_perfil_con_la_nueva_experiencia()"
});
formatter.result({
  "duration": 4617740469,
  "status": "passed"
});
formatter.match({
  "location": "Steps.cierro_sesión()"
});
formatter.result({
  "duration": 7429335028,
  "status": "passed"
});
});