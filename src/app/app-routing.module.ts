import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./dashboard/home/home.component";
import { ProjectContainerComponent } from "./project/project-container/project-container.component";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";

const routes: Routes = [
  { path: 'projects/details/:id', component: ProjectDetailComponent},
  { path: 'projects', component: ProjectContainerComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
