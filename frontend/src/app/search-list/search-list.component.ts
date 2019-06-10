import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AllserviceService } from '../service/allservice.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router,private controller:AllserviceService) { }

  ngOnInit() {
    
  }

}
