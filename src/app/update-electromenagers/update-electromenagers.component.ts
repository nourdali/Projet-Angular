import { Component, OnInit } from '@angular/core';
import { Electromenagers } from '../model/electromenagers.model';
import { ActivatedRoute,Router} from '@angular/router'; 
import { ElectromenagersService } from '../services/electromenagers.service';


@Component({
  selector: 'app-update-electromenagers',
  templateUrl: './update-electromenagers.component.html',
  styles: []
})
export class UpdateElectromenagersComponent implements OnInit {
  currentElectromenagers = new Electromenagers();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router, 
              private electromenagersService: ElectromenagersService) { }

  ngOnInit(): void {

    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentElectromenagers = this.electromenagersService.consulterElectromenagers(this.activatedRoute.snapshot.params.id);
    console.log(this.currentElectromenagers);

  }

  updateElectromenagers(){
   //console.log(this.currentElectromenagers); 
   this.electromenagersService.updateElectromenagers(this.currentElectromenagers);
   this.router.navigate(["electromenagers"]);
  }

}
