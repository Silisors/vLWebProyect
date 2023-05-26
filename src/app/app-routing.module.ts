import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsVlComponent } from './projects-vl/projects-vl.component';
import { PrimercompComponent } from './primercomp/primercomp.component';
import { YardComponent2Component } from './YardComponents/yard-component2/yard-component2.component';
import { YardComponent3Component } from './YardComponents/yard-component3/yard-component3.component';
import { YardComponent4Component } from './YardComponents/yard-component4/yard-component4.component';
import { YardComponent5Component } from './YardComponents/yard-component5/yard-component5.component';
import { YardComponent6Component } from './YardComponents/yard-component6/yard-component6.component';
import { YardComponent7Component } from './YardComponents/yard-component7/yard-component7.component';
import { YardComponent8Component } from './YardComponents/yard-component8/yard-component8.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: '', component: HomeComponentComponent},
  { path: 'proyectos', component: ProjectsVlComponent},
  { path: 'full-yard', component: PrimercompComponent},
  { path: 'full-yard2', component: YardComponent2Component},
  { path: 'full-yard3', component: YardComponent3Component},
  { path: 'full-yard4', component: YardComponent4Component},
  { path: 'full-yard5', component: YardComponent5Component},
  { path: 'full-yard6', component: YardComponent6Component},
  { path: 'full-yard7', component: YardComponent7Component},
  { path: 'full-yard8', component: YardComponent8Component},
  { path: 'contact-Us', component: ContactUsComponent},
  { path: 'adminPanel', component: AdminComponentComponent},
  { path: 'LoginadminPanel', component: LoginAdminComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
