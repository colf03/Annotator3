/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : annotation.composant.ts
 *  Application de gestion des annotations - Description
 *  Date :04-12-2017,  
 *  Crée par : Bastien SANSAS
 */

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Annotation,
  AnnotationService,
  User,
  UserService
} from '../shared';

@Component({
  selector: 'annotation-page',
  templateUrl: './annotation.component.html'
})
export class AnnotationComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private annotationService: AnnotationService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  ajouterAnnotation(indexCaractereDebut: number, indexCaractereFin: number, categorie: string) {
   
  }

  supprimerAnnotation(iD: number) {
   
  }

  creerCategorie(nom: string) {
    
  }
 

}