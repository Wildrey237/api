# Manipulation d'une api

Dans ce projet nous allons manipuler une api afin de récupérer des données, effectuer l'enssemble du CRUD sur celle-ci et enfin les afficher sur une page web partielle.

## Etapes 1 - Preparation de l'espace de travail

- installer les differents packages nécessaires au développement du projet avec :
``` bash
npm install 
```
- Configurer le docker avec la commande :
``` bash
docker-compose up
```
-lancer le serveur avec la commande :
``` bash
npm run dev
```
## Etapes 2 - Manipulation de l'api
- pour manipuler au mieux ces API nous allons utiliser l'outil postman ou l'extension de VSCode "Thunder Client".
- Telecharder la base de donnée dans le mongoose du docker avec l'url suivante : http://localhost:3500/import
- pour voir toutes les données de la base de donnée, utiliser l'url suivante : http://localhost:3500/drake
- pour voir la liste des albums de drake, utiliser l'url suivante : http://localhost:3500/drake/albums
- pour faire une recherche sur un album, utiliser l'url suivante : http://localhost:3500/drake/albums/(le nom de l'album)
- pour voir tout les titres de drake, utiliser l'url suivante : http://localhost:3500/drake/title
- pour faire une recherche sur un titre, utiliser l'url suivante : http://localhost:3500/drake/title/(le nom du titre)
- pour ajouter un album, faudra au prealablement:
    - se creer un compte sur l'url suivante : http://localhost:3500/auth/register en POST avec les données de la forme suivantes :
    ``` bash
    {
        "email": "blablaba",
        "password": "blablabla"
    }
    ```
    - se connecter sur l'url suivante : http://localhost:3500/auth/login en POST avec les données de la forme suivantes :
    ``` bash
    {
        "email": "blablaba",
        "password": "blablabla"
    }
    ```
    - verifier que vous etes bien connecté en vous rendant sur l'url suivante : http://localhost:3500/auth en GET
    - ajouter un album en POST sur l'url suivante : http://localhost:3500/auth/drake/album en POST avec les données de la forme suivantes :
    ``` bash
    {
        "album": String,
        "lyrics_title": String,
        "lyrics_url": String,
        "lyrics": String,
        "track_views": String,
        "cover_links": String,
    }
    ```