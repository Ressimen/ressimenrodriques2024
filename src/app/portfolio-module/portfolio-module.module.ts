import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
{ path: 'about', title:'About', component: AboutComponent },
{ path: 'skills', title:'Skills', component: SkillsComponent },
{ path: 'experience', title:'Experience', component: ExperienceComponent },
{ path: 'projects', title:'Projects', component: ProjectsComponent },
{ path: 'contact', title:'Contact', component: ContactComponent },
{path:'**', title:'Home', component:HomeComponent}
]

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports:[RouterModule]
})
export class PortfolioModuleModule { }
