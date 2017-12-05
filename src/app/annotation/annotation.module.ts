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

import { AnnnotationComponent } from './annotation.component';
import { SharedModule } from '../shared';



@NgModule({
  imports: [
    annotationRouting,
    SharedModule
  ],
  declarations: [
    AnnotationComponent
  ]
})
export class AnnotationModule {}