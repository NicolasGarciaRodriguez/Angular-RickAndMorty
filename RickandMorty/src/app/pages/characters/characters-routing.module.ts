import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: CharactersContentComponent
  },
  {
    path: "detail/:idCharacter", component: CharactersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
