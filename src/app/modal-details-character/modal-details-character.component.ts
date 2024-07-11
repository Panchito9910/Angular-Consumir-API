import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Character } from '../services/data.service';
@Component({
  selector: 'app-modal-details-character',
  standalone: true,
  imports: [],
  templateUrl: './modal-details-character.component.html',
  styleUrl: './modal-details-character.component.scss'
})
export class ModalDetailsCharacterComponent implements OnInit {
  public character!:Character;
  constructor(
    public dialogRef:MatDialogRef<ModalDetailsCharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){}

  ngOnInit(): void {
    this.character=this.data.character;
  }
  
  onClickClose():void{
    this.dialogRef.close();
  }
}
