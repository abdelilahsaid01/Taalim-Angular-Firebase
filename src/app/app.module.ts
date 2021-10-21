import { AuthGuard } from './guards/auth.guard';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule} from '@angular/forms';
import { PreAnColComponent } from './components/pre-an-col/pre-an-col.component'
import {AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { EditCoursComponent } from './components/edit-cours/edit-cours.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddControleComponent } from './components/add-controle/add-controle.component';
import { EditControleComponent } from './components/edit-controle/edit-controle.component';
import { CollegeLyceeComponent } from './components/college-lycee/college-lycee.component';
import { AddExamenComponent } from './components/add-examen/add-examen.component';
import { EditExamenComponent } from './components/edit-examen/edit-examen.component'
import { AuthentificationService } from './services/authentification.service'


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    PreAnColComponent,
    EditCoursComponent,
    AddCoursComponent,
    PageNotFoundComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    AddControleComponent,
    EditControleComponent,
    CollegeLyceeComponent,
    AddExamenComponent,
    EditExamenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ],
  providers: [AuthGuard,AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule}
