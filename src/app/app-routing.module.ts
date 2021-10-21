import { AuthGuard } from './guards/auth.guard';
import { CollegeLyceeComponent } from './components/college-lycee/college-lycee.component';
import { EditControleComponent } from './components/edit-controle/edit-controle.component';
import { AddControleComponent } from './components/add-controle/add-controle.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';
import { EditCoursComponent } from './components/edit-cours/edit-cours.component';
import { PreAnColComponent } from './components/pre-an-col/pre-an-col.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamenComponent } from './components/add-examen/add-examen.component';
import { EditExamenComponent } from './components/edit-examen/edit-examen.component';

const routes: Routes = [
  {path:"" , component:IndexComponent},
  //{path: 'abc',redirectTo: 'login',pathMatch:'full'},
  {path:"footer" , component:FooterComponent},
  {path:"source/:param" , component:PreAnColComponent},
  {path:"cours/edit/:id/:param" , component:EditCoursComponent,canActivate:[AuthGuard]},
  {path:"cours/add/:param" , component:AddCoursComponent,canActivate:[AuthGuard]},
  {path:"niveau/:param" , component:CollegeLyceeComponent},
  {path:"contact" , component:ContactsComponent},
  {path:"login" , component:LoginComponent}, 
  // {path:"register" , component:RegisterComponent},
  {path:"controle/add/:param" , component:AddControleComponent,canActivate:[AuthGuard]},
  {path:"controle/edit/:id/:param" , component:EditControleComponent,canActivate:[AuthGuard]},
  {path:"examen/add/:param" , component:AddExamenComponent,canActivate:[AuthGuard]},
  {path:"examen/edit/:id/:param" , component:EditExamenComponent,canActivate:[AuthGuard]},
  {path:"**" , component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [ RouterModule.forRoot(routes, { initialNavigation : false }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
