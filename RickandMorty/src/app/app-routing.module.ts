import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "characters", loadChildren: () => import("./pages/characters/characters.module").then(m => m.CharactersModule)
  },
  {
    path: "episodes", loadChildren: () => import("./pages/episodes/episodes.module").then(m => m.EpisodesModule)
  },
  {
    path: "planets", loadChildren: () => import("./pages/planets/planets.module").then(m => m.PlanetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
