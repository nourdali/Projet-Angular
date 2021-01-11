import { Injectable } from '@angular/core';
import { Electromenagers } from '../model/electromenagers.model';

@Injectable({
  providedIn: 'root'
})
export class ElectromenagersService {

  electromenagers : Electromenagers[];
 // electromenager : Electromenagers;
 
  constructor() {
    this.electromenagers =  [ 
      {id : 1, nom : "Robot de cuisine", prix : 300.400, dateCreation : new Date("01/14/2011")}, 
      {id : 2, nom : "Lave-linge", prix : 450, dateCreation : new Date("12/07/2010")}, 
      {id : 3, nom : "Refrigerateur", prix : 2000.400, dateCreation : new Date("02/02/2020")},
      {id : 4, nom : "Machine à coudre", prix : 900, dateCreation : new Date("10/04/1999")}, 
      {id : 5, nom : "Aspirateur", prix: 500, dateCreation : new Date("02/08/2019")},
     ];
   }
   listeElectromenagers():Electromenagers[]{
     return this.electromenagers;
   }
  
   ajouterElectromenagers(electromenagers : Electromenagers){
     this.electromenagers.push(electromenagers);
   }

supprimerElectromenagers( elec: Electromenagers){
    //supprimer le produit prod du tableau produits
    const index = this.electromenagers.indexOf(elec, 0);
    if (index > -1) {
    this.electromenagers.splice(index, 1);
    }
    
    }

consulterElectromenagers(id:number): Electromenagers{ 
      return this.electromenagers.find(elec => elec.id == id);
      // return this.electromenager;
      }

updateElectromenagers(elec:Electromenagers) 
{ 
  // console.log(elec); 
  this.supprimerElectromenagers(elec); 
  this.ajouterElectromenagers(elec); 
  this.trierElectromenagerts();
}

trierElectromenagerts(){ 
  this.electromenagers = this.electromenagers.sort((n1,n2) => { 
    if (n1.id > n2.id) { 
      return 1; } 
    if (n1.id< n2.id) { 
      return -1; } 
   return 0; }); }

   
}
