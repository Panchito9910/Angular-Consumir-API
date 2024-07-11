import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { Character, Data, DataService} from './services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { FilterCharacter } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    NgFor,
    NgIf,
    FormsModule,
    NavbarComponent,
    UsersCardsComponent,
    SearchbarComponent,
    HttpClientModule,
    FilterCharacter,
    MatDialogModule,
    MatButtonModule,
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'proyecto';
  data!:Data;
  characters:Character[]=[]
  criteria:string='';
  page!:number;

  constructor(private readonly dataSer: DataService) {}
  
  ngOnInit(): void {
    this.dataSer.getCharacters().subscribe((res)=>{
      this.characters=[...res.results];
      this.data=res;
    });    
  }
  
  onClickPrevious(e:Event,data:Data):void{
    e.preventDefault();
    this.getCharactersPage(data.info.prev);
  }
  onClickNext(e:Event,data:Data):void{
    e.preventDefault();
    this.getCharactersPage(data.info.next);
  }
  getCharactersPage(url:string):void{
    this.dataSer.getCharactersPage(url).subscribe((res)=>{
      this.characters=[...res.results];
      this.data=res;
    })
  }
}
