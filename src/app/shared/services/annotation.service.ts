/*
 *  Projet :  ANNOTATOR 3
 *   Version du fichier : 1.0.0
 *  Fichier : annotation.service.ts
 *  Application de gestion des annotations - Description
 *  Date :04-12-2017,  
 *  Crée par : Bastien SANSAS
 */

import { Annotation } from '../models';

@Injectable()
export class AnnotationService {
  constructor (
  ) {}

  getAnnotations(idTexte): Observable<Annotation> {
    
  }

  getCategories(idProjet): Observable<string> {
    
  }
	
  ajouterAnnotation(newAnnotation): boolean {
    
  }
  
  supprimerAnnotation(idAnnotation): boolean {
    
  }
  
  modifierAnnotation(AnnotationAModifer ): boolean {
    
  }
  
  ajouterCategorie(newCategorie) : boolean {
    
  }
  
  supprimerCategorie(CategorieASupprimer) : boolean {
    
  }
  
  supprimerCategorie(CategorieAModifer) : boolean {
    
  }

}