import { ICharacter } from './../../../models/iCharacter';
import { HttpRequestService } from './../../../../shared/http-request.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss']
})
export class CharactersContentComponent implements OnInit {

  public URL: string = "https://rickandmortyapi.com/api/character"
  public characterList: ICharacter[] = []

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  public getCharacters() {
    this.httpRequestService.getData(this.URL).subscribe((data: any) => {
      const results = data.results
      const formattedResults = results.map(({ name, image }: any) => ({ name, image}))
      this.characterList = formattedResults
    })
  }


}
