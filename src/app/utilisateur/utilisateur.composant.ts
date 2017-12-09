/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : utilisateur.composant.ts
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
  selector: 'utilisateur-page',
  templateUrl: './utilisateur.composant.html',
  styleUrls: ['./utilisateur.composant.css']
})
export class UtilisateurComposant implements OnInit {


  constructor(
    private route: ActivatedRoute,
    /*private annotationService: AnnotationService,*/
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

 
 

}