import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllserviceService } from 'src/app/service/allservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abount',
  templateUrl: './abount.component.html',
  styleUrls: ['./abount.component.css']
})
export class AbountComponent implements OnInit {

  constructor(private httpClient:HttpClient,private controller:AllserviceService,private router:Router) { }
 
  public API = '//localhost:8080';

  firstName:String;
  lastName:String;
  address:String;
  phoneNumber:number;
  salary:number;
  natoinality:String;

  positions: Array<any>;
  positionSelect:'';

  data:any = {
  }
  ngOnInit() {
    this.controller.getPosition().subscribe(on =>{
      this.positions = on;
      console.log(this.positions);
    });
  }
  register(){
    if(this.firstName == null){
      alert("กรุณากรอกชื่อ");
    }else if(this.lastName == null){
      alert("กรุณากรอกนามสกุล");
    }else if(this.address == null){
      alert("กรุณากรอกที่อยู่");
    }else if(this.phoneNumber == null){
      alert("กรุณากรอกเบอร์โทร");
    }else if(this.salary == null){
      alert("กรุณากรอกเงินเดือนที่ต้องการ");
    }else if(this.natoinality == null){
      alert("กรุณากรอกสัญชาติ");
    }else if(this.positionSelect == null){
      alert("กรุณาเลือกตำเเหน่ง");
    }else{
    this.httpClient.post('http://localhost:8080/register/' + this.firstName+'/'+this.lastName+'/'
    +this.address+'/'+this.phoneNumber+'/'+this.salary+'/'+this.natoinality+'/'+ this.positionSelect , {})
  .subscribe()
  alert("การกรอกข้อมูลสำเร็จ")
  this.router.navigate(['register']);
   }
  }


  // end() {
  //   if (this.AllserviceService.push === false) {
  //     alert('ไม่สามารถบันทึกข้อมูลได้กรุณาตรวจสอบใหม่');
  //   } else {
  //     alert('ดำเนินการเสร็จสิ้น');
  //   }
  // }


}



