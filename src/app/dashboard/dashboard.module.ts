import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*import { SharedModule } from '../shared';*/

import { TexteComposant } from '../texte/texte.composant';
import { DashboardComposant } from '../dashboard/dashboard.composant';
import { ProjetComposant } from '../projet/projet.composant';
import { UtilisateurComposant } from '../utilisateur/utilisateur.composant';
import { AnnotationComposant } from '../annotation/annotation.composant';

const appRoutes: Routes = [
  /*{ path: 'Connexion', component: ConnexionComponent  },*/
  { path: 'Dashboard', component: DashboardComposant  },
  { path: 'Texte', component: TexteComposant  },
  { path: 'Projet', component: ProjetComposant  },
  { path: 'Utilisateur', component: UtilisateurComposant  },
  { path: 'Annotation', component: AnnotationComposant  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
     appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
		DashboardComposant,
		TexteComposant,
		ProjetComposant,
		UtilisateurComposant,
		AnnotationComposant/*,
		SharedComposant*/
  ],
  providers: [

  ]
})
export class DashboardModule { }
