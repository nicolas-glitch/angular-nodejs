import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home',   component  : HomeComponent },
    { path: 'heroes', component  : HeroesComponent  },
    { path: 'about',  component  : AboutComponent },
    { path: '**', pathMatch:'full' ,component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}



