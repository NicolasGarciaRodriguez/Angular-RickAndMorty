import { IEpisode } from './../../../models/iEpisode';
import { HttpRequestService } from './../../../../shared/http-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-content',
  templateUrl: './episodes-content.component.html',
  styleUrls: ['./episodes-content.component.scss']
})
export class EpisodesContentComponent implements OnInit {

  public URL: string = "https://rickandmortyapi.com/api/episode"
  public episodeList: IEpisode[] = []

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.getEpisodes()
  }

  public getEpisodes() {
    this.httpRequestService.getData(this.URL).subscribe((data: any) => {
      this.episodeList = data.results
      console.log(this.episodeList)
    })
  }

}
