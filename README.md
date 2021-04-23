# imprimir
Extension de chrone segun la chrone developer para utilizar la libreria escpos para imresora termicas
https://developer.chrome.com/docs/extensions/mv3/content_scripts/
https://developer.mozilla.org/es/docs/Web/HTTP/CORS
https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/ Use la verison V2 porq no me dejaba utilizar la V3 en mi navegador

Primero esta el manifiesto, la cree con una browse action // manifest.json
{
  "browser_action": { … },
  "page_action": { … }
}
Lo pense como una browse action ----->  con un icon de a la carta, por default.
Los permisos son a las tab

Nivel background --> index.html
El front end es con vue
En este nivel solo tengo acceso al nivel del navegador, por lo cual aca tengo scripts de printer.js
Index.html
Tengo encendida /apagada la funcionalidad
Necesito para usar la livbreria esc pos , el nombre de la impresora, el server(puerto) y el texto
La librerias son --->
https://github.com/escpos/node-escpos ---->>> ya lo use y funciona






