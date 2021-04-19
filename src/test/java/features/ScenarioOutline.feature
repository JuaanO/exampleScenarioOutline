Feature: Esta es la prueba de implementa un escenario Outline
  de una aplicacion WEB, con un patron de diseno Page Object
  Model con las depencias correctas que funcione aun la
  generacion de reportes.

  Scenario Outline: Crear un escenario Outline de prueba
    Given un navegador abierto en Google
    When el usuario busque en la caja <eleccion> opciones
    And el usuario presione buscar
    Then se mostrara el resultado de la busqueda en la pantalla

    Examples:
      | eleccion      |
      | juegos switch |
      | juegos ps4    |
      | juegos xbox   |
