import { Component, OnInit } from '@angular/core';
import { Electromenagers } from '../model/electromenagers.model';
import { ElectromenagersService } from '../services/electromenagers.service';

@Component({
  selector: 'app-electromenagers',
  templateUrl: './electromenagers.component.html'
  
})
export class ElectromenagersComponent implements OnInit {
 
  electromenagers : Electromenagers[];

  constructor(private electromenagersService : ElectromenagersService) {
    this.electromenagers = electromenagersService.listeElectromenagers();
   
   }

  ngOnInit(): void {
  }

  supprimerElectromenagers(elec : Electromenagers) 
  {
     //console.log(elec);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
       this.electromenagersService.supprimerElectromenagers(elec);
 }

}
