import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllserviceService } from '../service/allservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private hhtpClient:HttpClient,private controller:AllserviceService,private router:Router) { }

  ngOnInit() {

  }




}
