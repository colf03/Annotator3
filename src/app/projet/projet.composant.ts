/*
 *  Projet :  ANNOTATOR 3
 *  Version du fichier : 1.0.0 
 *  Fichier : projet.composant.ts 
 *  Application de gestion des projets - Description 
 *  Date :08-12-2017,   
 *  Crée par : Florian Colly 
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
  selector: 'projet-page',
  templateUrl: './projet.composant.html',
  styleUrls: ['./projet.composant.css']
})
export class ProjetComposant implements OnInit {


	  constructor(
		private route: ActivatedRoute,
		/*private annotationService: AnnotationService,*/
		private router: Router,
	  ) { }

	  ngOnInit() {
		
	  }
	  
	  ajouterProjet(nomProjet: String, listeAnnotateur: Array<Utilisateur>) { 
		
	  } 
	 
	  supprimerProjet(id: number) { 
		
	  } 
	 
	  modifierProjet(id: number, nom: string) { 
		 
	  } 
 
	ajouterCollaborateurAProjet(id: number , listeAnnotateur: Array<Utilisateur>){ 
	 
	} 
	 
	supprimerCollaborateurProjet(id: number , nom : String){ 

	}
 

}