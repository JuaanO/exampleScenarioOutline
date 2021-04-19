$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ScenarioOutline.feature");
formatter.feature({
  "name": "Esta es la prueba de implementa un escenario Outline",
  "description": "  de una aplicacion WEB, con un patron de diseno Page Object\n  Model con las depencias correctas que funcione aun la\n  generacion de reportes.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Crear un escenario Outline de prueba",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "un navegador abierto en Google",
  "keyword": "Given "
});
formatter.step({
  "name": "el usuario busque en la caja \u003celeccion\u003e opciones",
  "keyword": "When "
});
formatter.step({
  "name": "el usuario presione buscar",
  "keyword": "And "
});
formatter.step({
  "name": "se mostrara el resultado de la busqueda en la pantalla",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "eleccion"
      ]
    },
    {
      "cells": [
        "juegos switch"
      ]
    },
    {
      "cells": [
        "juegos ps4"
      ]
    },
    {
      "cells": [
        "juegos xbox"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear un escenario Outline de prueba",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "un navegador abierto en Google",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.prueba.unNavegadorAbiertoEnGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario busque en la caja juegos switch opciones",
  "keyword": "When "
});
formatter.match({
  "location": "steps.prueba.elUsuarioBusqueEnLaCaja(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario presione buscar",
  "keyword": "And "
});
formatter.match({
  "location": "steps.prueba.elUsuarioPresioneBuscar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se mostrara el resultado de la busqueda en la pantalla",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.prueba.seMostraraElResultadoDeLaBusquedaEnLaPantalla()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear un escenario Outline de prueba",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "un navegador abierto en Google",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.prueba.unNavegadorAbiertoEnGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario busque en la caja juegos ps4 opciones",
  "keyword": "When "
});
formatter.match({
  "location": "steps.prueba.elUsuarioBusqueEnLaCaja(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario presione buscar",
  "keyword": "And "
});
formatter.match({
  "location": "steps.prueba.elUsuarioPresioneBuscar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se mostrara el resultado de la busqueda en la pantalla",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.prueba.seMostraraElResultadoDeLaBusquedaEnLaPantalla()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear un escenario Outline de prueba",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "un navegador abierto en Google",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.prueba.unNavegadorAbiertoEnGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario busque en la caja juegos xbox opciones",
  "keyword": "When "
});
formatter.match({
  "location": "steps.prueba.elUsuarioBusqueEnLaCaja(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario presione buscar",
  "keyword": "And "
});
formatter.match({
  "location": "steps.prueba.elUsuarioPresioneBuscar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se mostrara el resultado de la busqueda en la pantalla",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.prueba.seMostraraElResultadoDeLaBusquedaEnLaPantalla()"
});
formatter.result({
  "status": "passed"
});
});