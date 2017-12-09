/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : texte.composant.ts
 *  Application de gestion des annotations - Description
 *  Date :04-12-2017,  
 *  Crée par : 
 */

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/*import {
  Annotation,
  AnnotationService,
  User,
  UserService
} from '../shared';*/

@Component({
  selector: 'texte-page',
  templateUrl: './texte.composant.html',
  styleUrls: ['./texte.composant.css']
})
export class TexteComposant implements OnInit {


  constructor(
    private route: ActivatedRoute,
    /*private annotationService: AnnotationService,*/
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

 
 

}