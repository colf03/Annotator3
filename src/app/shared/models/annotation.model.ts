/*
 *  Projet :  ANNOTATOR 3
 *   Version du fichier : 1.0.0
 *  Fichier : annotation.model.ts
 *  Application de gestion des annotations - Description
 *  Date :04-12-2017,  
 *  Crée par : Bastien SANSAS
 */

import { Texte } from './texte.model';

export class Annotation {
  id: number;
  categorie = '';
  IndexCaractereDebut : number;
  IndexCaractereFin : number;
  texteAssocie: Texte;
}
