/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0
 *  Fichier : connexion.composant.ts
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
  selector: 'connexion-page',
  templateUrl: './connexion.composant.html',
  styleUrls: ['./connexion.composant.css']
})
export class ConnexionComposant implements OnInit {


  constructor(
    private route: ActivatedRoute,
    /*private annotationService: AnnotationService,*/
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

 
 

}