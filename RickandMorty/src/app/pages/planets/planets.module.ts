import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../../shared/shared.module';
import { HttpRequestService } from './../../shared/http-request.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsContentComponent } from './components/planets-content/planets-content.component';


@NgModule({
  declarations: [
    PlanetsContentComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [HttpRequestService]
})
export class PlanetsModule { }
