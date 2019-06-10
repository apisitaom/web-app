import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllserviceService } from '../service/allservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private httpClient:HttpClient,private controller:AllserviceService,private router:Router) { }

  ngOnInit() {
  }


  // insert(){
  //   this.httpClient.post
  // }

}
