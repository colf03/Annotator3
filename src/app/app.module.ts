import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './composante/connexion/connexion.component';

import { AngularFireModule } from 'angularfire2';

//New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
  apiKey: "AIzaSyBtzdAPBbqmn6XqGybZK_uObwue0k1J7CE",
  authDomain: "dsiannotator3.firebaseapp.com",
  databaseURL: "https://dsiannotator3.firebaseio.com",
  projectId: "dsiannotator3",
  storageBucket: "dsiannotator3.appspot.com",
  messagingSenderId: "586163935619"
};
const appRoutes: Routes = [
  { path: 'Connexion', component: ConnexionComponent  },

];
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
     appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
