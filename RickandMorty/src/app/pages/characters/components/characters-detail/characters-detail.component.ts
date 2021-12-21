import { ICharacterDetail } from './../../../models/iCharacter';
import { HttpRequestService } from './../../../../shared/http-request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {

  private URL: string = "https://rickandmortyapi.com/api/character/"
  public dataCharacter: ICharacterDetail = {
    name: "",
    image: "",
    status: "",
    species: "",
    gender: "",
    created: "",
    origin: {
      name: ""
    },
  }
  public characterId?: any;

  constructor(private httpRequestService: HttpRequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => { this.characterId = params.idCharacter });
    this.RecoverCharacterDetail(this.characterId);
  }

  public RecoverCharacterDetail(idCharacter: any) {
    this.httpRequestService.getData(this.URL + idCharacter).subscribe((data: any) => {
      this.dataCharacter = data;
      console.log(this.dataCharacter)
    })
  }

}
