/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : annotation.module.ts
 *  Application de gestion des annotations - Description
 *  Date : 04-12-2017,  
 *  Crée par : Bastien SANSAS
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnnotationComposant } from './annotation.composant';
//import { SharedModule } from '../shared';



@NgModule({
  imports: [
    /*annotationRouting,*/
    /*SharedModule*/
  ],
  declarations: [
    AnnotationComposant
  ]
})
export class AnnotationModule {}