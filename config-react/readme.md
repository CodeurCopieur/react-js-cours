## Configuration manuelle d'un projet React - les détails


* npm init -y -> créer le fichier package.json
* npm i react, react-dom -> dependencies nécéssaire dureant le dev pas production
* npm i webpack -D ou --save dev
* npm i webpack-cli -D ou --save dev -> permet d'accéder a certaines commande afin d'initaliser, écouter et lancer les fichiers...
* npm i webpack-dev-server -D -> server live reload pour chaque changement éffectuer
* npm i @babel/core -D compiler le code react en js pour être interprétrer par le navigateur
* npm i babel-loader -D permet gerer l'ordre de chargemetn des fichiers js et css
* npm i @babel/preset-react -D pour permettre a babel de comprendre le jsx
* npm i @babel/preset-env -D pour avoir la version récent du javascript
* npm i html-webpack-plugin -D injecte le bundli.js dans le index.html