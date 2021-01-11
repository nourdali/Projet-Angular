import { Component, OnInit } from '@angular/core';
import { Electromenagers } from '../model/electromenagers.model';
import { ElectromenagersService } from '../services/electromenagers.service';

@Component({
  selector: 'app-add-electromenagers',
  templateUrl: './add-electromenagers.component.html'
  
})
export class AddElectromenagersComponent implements OnInit {

  newElectromenagers = new Electromenagers();
  message:string;
  

  constructor(private electromenagersService : ElectromenagersService) { }

  ngOnInit(): void {
  }

  addElectromenagers(){
    // console.log(this.newElectromenagers);
     this.electromenagersService.ajouterElectromenagers(this.newElectromenagers);
     this.message = "Electromenagers" + this.newElectromenagers.nom + "ajouté avec succés!";

    }

}
