import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioModuleModule } from './portfolio-module/portfolio-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'home', title:'Home', component: HomeComponent},
  {path:'', title:'Home', redirectTo:'/home', pathMatch:'full'},
  {path: 'about', loadChildren:()=> import('./portfolio-module/portfolio-module.module').then(m => m.PortfolioModuleModule)},
  {path:'skills', loadChildren:()=>import('./portfolio-module/portfolio-module.module').then(m=> m.PortfolioModuleModule)},
  {path:'experience', loadChildren:()=>import('./portfolio-module/portfolio-module.module').then(m=> m.PortfolioModuleModule)},
  {path:'projects', loadChildren:()=>import('./portfolio-module/portfolio-module.module').then(m=> m.PortfolioModuleModule)},
  {path:'contact', loadChildren:()=>import('./portfolio-module/portfolio-module.module').then(m=> m.PortfolioModuleModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PortfolioModuleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
