## Creation du fichier package.json
```shell
npm init
```

## Dans package.json
Permet d'utiliser l'importation moderne
```
"type": "module"
```

## Installation de package pour le projet
```shell
npm install dotenv@8.2.0 express@4.17.1 mongoose@5.10.7
```

```shell
npm install -D nodemon@2.0.4
```

## Ajout de scripts dans le fichier package.json

```
  "scripts": {
    "watch": "nodemon server.js",
    "start": "node server.js"
  },
```
Pour pouvoir executer la commande suivante
```shell
npm run start
npm run watch
```
## Demarrer le server via nodemon
```shell
npm run watch
```
(Cette commande est un alias de: nodemon server.js, que nous avons configuré dans le package.json)
