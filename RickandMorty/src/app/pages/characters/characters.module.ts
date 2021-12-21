import { HttpRequestService } from './../../shared/http-request.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';


@NgModule({
  declarations: [
    CharactersContentComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [HttpRequestService]
})
export class CharactersModule { }
