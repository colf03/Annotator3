# Annotator 3 v1.0

Lien de la démo :

## Introduction :
L'application UQO-annotator est developpé dans le cadre du cours "Développement des Systèmes Informatiques". 
Accessible à partir du Web, UQO-annotator permettra de modifier des fichiers .xmi avec annotations produites par l'outil cTakes ou annoter des fichiers texte.
## Installation d'Angular :
L'utilisation de l'application nécessite l'installation de Angular CLI. 
Voici la commande ```<npm install @angular/cli>```
## Générer le projet :
La commande``` <ng build>``` permet de générer le projet. Les fichiers seront ainsi enregistrés dans le répertoire /dist.

## Exécuter les tests : 
Via Karma, on exécute les tests unitaires:
par la commande ```<ng test>```.

Via Protector, on exécute les tests end-to-end:
par la commande ```<ng e2e>```

## Structure du projet : 
```
Annotator3/                   -- root du projet avec fichiers docs
├── e2e/
└── src/                      -- code du programme
    ├── app/                  -- pages de l'application et tests
    ├── composante/
    │ 
    | ├── annotation/         -- pour les annotations
    │	├── connexion/          -- pour la connexion au serveur
    │	├── signup/             -- pour le login
    │	├── restauration/       -- pour la restauration du mot de passe pour un utilisateur
    │	└── shared/
    └── environments/         -- description des environnements
```
## Aide :
Pour plus d'informations, Veuillez consulter la documentation complète du projet sur wiki!
