/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : projet.module.ts
 *  Application de gestion des annotations - Description
 *  Date : 04-12-2017,  
 *  Crée par : 
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjetComposant } from './projet.composant';
//import { SharedModule } from '../shared';



@NgModule({
  imports: [
    /*annotationRouting,*/
    /*SharedModule*/
  ],
  declarations: [
    ProjetComposant
  ]
})
export class ProjetModule {}