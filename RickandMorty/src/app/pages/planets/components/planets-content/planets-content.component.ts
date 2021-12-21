import { HttpRequestService } from './../../../../shared/http-request.service';
import { Component, OnInit } from '@angular/core';
import { IPlanet } from 'src/app/pages/models/iPlanet';

@Component({
  selector: 'app-planets-content',
  templateUrl: './planets-content.component.html',
  styleUrls: ['./planets-content.component.scss']
})
export class PlanetsContentComponent implements OnInit {

  public URL: string = "https://rickandmortyapi.com/api/location"
  public planetsList: IPlanet[] = []

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.getPlanets()
  }

  public getPlanets() {
    this.httpRequestService.getData(this.URL).subscribe((data: any) => {
      this.planetsList = data.results;
    })
  }

}
