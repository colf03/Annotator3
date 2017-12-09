/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : utilisateur.module.ts
 *  Application de gestion des annotations - Description
 *  Date : 04-12-2017,  
 *  Crée par : 
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UtilisateurComposant } from './utilisateur.composant';
//import { SharedModule } from '../shared';



@NgModule({
  imports: [
    /*annotationRouting,*/
    /*SharedModule*/
  ],
  declarations: [
    UtilisateurComposant
  ]
})
export class UtilisateurModule {}