import { Component, Input } from '@angular/core';
import { Character, DataService, } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsCharacterComponent } from '../modal-details-character/modal-details-character.component';
@Component({
  selector: 'app-users-cards',
  standalone: true,
  imports: [],
  templateUrl: './users-cards.component.html',
  styleUrl: './users-cards.component.scss'
})
export class UsersCardsComponent {
  @Input() character!:Character;
  constructor(public dialog:MatDialog,){}
  openModalDetailsCharacter(character:Character):void{
    const dialogRef=this.dialog.open(ModalDetailsCharacterComponent,{
      data:{character:character}
    });
  }
}
