import { HttpRequestService } from './../../shared/http-request.service';
import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesContentComponent } from './components/episodes-content/episodes-content.component';


@NgModule({
  declarations: [
    EpisodesContentComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [HttpRequestService]
})
export class EpisodesModule { }
