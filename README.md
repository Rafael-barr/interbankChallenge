# interbankChallenge
Búsqueda de iPhone 13 en Mercado Libre
------
# Descripcion

Este proyecto es parte de un desafío técnico para Interbank. El objetivo es desarrollar una aplicación de automatización de pruebas que busque un iPhone 13 en Mercado Libre y verifique ciertos elementos en la página de resultados. Utilizamos Cypress junto con Cucumber para escribir y ejecutar pruebas automatizadas.

## Tecnologías Utilizadas

Cypress: Un framework de pruebas end-to-end para aplicaciones web.
Cucumber: Un marco de pruebas que permite escribir pruebas en un lenguaje legible por humanos.
Node.js: Un entorno de ejecución para JavaScript.
Git: Sistema de control de versiones.

## Prerrequisitos
Asegúrate de tener instaladas las siguientes herramientas:

Node.js (versión 12 o superior)
npm (administrador de paquetes de Node.js)
Git
## Instalación
- Clona este repositorio en tu máquina local:
    git clone https://github.com/Rafael-barr/interbankChallenge.git
    cd interbankChallenge

## Instala las dependencias del proyecto:

npm install
- Configura Cypress y Cucumber:

Asegúrate de tener el archivo cypress.config.js correctamente configurado. Lo podras observar en el cypress.config.js

### Uso
- Ejecución de Pruebas
- Para ejecutar las pruebas automatizadas, usa el siguiente comando:
    npm run test:chrome
    npm run test:firefox
- Los scripts ya estan definidos en el package.json

- Esto abrirá la interfaz de usuario de Cypress, desde donde puedes seleccionar y ejecutar las pruebas.

### Estructura del Proyecto
- cypress/
- integration/
- features/: Contiene los archivos .feature escritos en Gherkin.
- step_definitions/: Contiene las definiciones de los pasos para los archivos .feature.
- support/: Contiene archivos de soporte y configuración adicional.
- cypress.config.js: Archivo de configuración principal de Cypress.

### Ejemplo de Archivo .feature
- gherkin

Feature: Búsqueda de iPhone 13 en Mercado Libre

  Scenario: Buscar un iPhone 13
    Given que estoy en la página de inicio de Mercado Libre
    When busco "iPhone 13"
    Then debería ver resultados relacionados con "iPhone 13"

### Ejemplo de Definiciones de Pasos
- javascript

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que estoy en la página de inicio de Mercado Libre', () => {
  cy.visit('https://www.mercadolibre.com.ar/');
});

When('busco {string}', (producto) => {
  cy.get('#cb1-edit').type(`${producto}{enter}`);
});

Then('debería ver resultados relacionados con {string}', (producto) => {
  cy.contains(producto).should('be.visible');
});

### Generacion de reportes con mochawesome
- Primero, necesitas instalar mochawesome, mochawesome-merge, y mochawesome-report-generator.
- Se debe configurar el config.json con el siguiente:
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
- Ademas agregar el siguiente script en nuestro package.json 
"scripts": {
  "merge-reports": "mochawesome-merge cypress/reports/*.json > cypress/reports/report.json && marge cypress/reports/report.json -f report -o cypress/reports"
}


### Contribuciones
- Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio que desees realizar. Puedes clonar el repositorio, crear una nueva rama para tu feature, hacer tus cambios y enviar un pull request.

### Licencia
- Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

