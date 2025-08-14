# Frontend Base AngularJS v1.0.0

Base frontend para proyectos web escrita en AngularJS

## Instalar aplicación

1. Clonar el repositorio `git clone https://github.com/donbungle/ang1.git`
2. Ingresar al directorio del proyecto `cd app`
3. Instalar dependencias `npm i` o `npm install`
4. Instalar dependencias bower `node ./node_modules/bower-installer/bower-installer.js`

## Scripts

Para ejecutar los scripts se ejecuta `npm run [script]`, por ejemplo: `npm run start`.

* `start` - Produce la versión de producción en ./dist

* `dev` - Produce la versión de desarrollo en ./ instalando las dependendecias de desarrollo y app

* `test` - Ejecutar tests (Karma)

* `docker` - Para deployment en docker (TODO)

* `clean` - Borra directorios y archivos generados

## Ejcución de la aplicación

1. Parametrizar `docker-compose.yml`
1. Ejecutar servicios docker `docker-compose up -d`