import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllserviceService } from '../service/allservice.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { registerLocaleData } from '@angular/common';
import { stringify } from '@angular/core/src/util';
import { error } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
[x:string]:any;
  constructor(private httpClient:HttpClient,private controller:AllserviceService,private router:Router) { }
  public API = '//localhost:8080';
  public registers = {
    idRegister:Number,
    firstName:String,
    lastName:String,
    address:String,
    phoneNumber:Number,
    salary:Number,
    natoinality:String,
  };

  firstName:String

  dataColumns: string[] = ['idRegister', 'firstName', 'lastName','address', 'phoneNumber','salary','natoinality','booton1'];

  public positions ={
    idPosition:Number,
    position:String,
  };

  ngOnInit() {
    this.controller.getRegister().subscribe(data =>{
      this.registers = data;
      console.log(this.registers);
    });
    this.controller.getPosition().subscribe(data =>{
      this.positions = data;
      console.log(this.positions);
    });
  }
  
research(filter:string){
  
  this.httpClient.get('http://localhost:8080//register', {}) 
  .subscribe 

}


  // deleteRegister(idRegister){
  //   if(this.AllserviceService.push == false){
  //     this.httpClient.delete(this.API + '/reigsters'+ '/' + idRegister).subscribe(data => {
  //       console.log('Success',data);
  //     },
  //     error =>{
  //       console.log('Error',error);
  //     }
  //     );
  //   }else{
  //     this.AllserviceService.counter = this.AllserviceService.counter - 1 ;
  //     this.httpClient.delete(this.API + '/registers' + '/' + idRegister).subscribe(data =>{
  //       console.log('Success',data);
  //     },
  //     error =>{
  //       console.log('Error',error);
  //     }
  //     );
  //   }
  // }


  // remove(href) {
  //   this.carService.remove(href).subscribe(result => {
  //     this.gotoList();
  //   }, error => console.error(error));
  // }

  // remove(href){
  //   this.controller.remove(href).subscribe(result =>{
      
  //   }, error => console.error(error));
  // }


  // remove(idRegister): void {
  //   this.userService.deleteRegister(idRegister.id)
  //     .subscribe( data => {
  //       this.idRegister = this.idRegister.filter(u => u !== idRegister);
  //     })
  // };

remove(idRegister){
this.controller.remove(idRegister).subscribe((data)=>{
  this.registers.idRegister;
} ,(error) =>{
  console.log(error);
   });
  }
}