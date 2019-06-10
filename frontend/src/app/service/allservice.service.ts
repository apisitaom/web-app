import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {
  public API = '//localhost:8080';
  constructor(private httpClient:HttpClient) { }

//Register
  getRegister():Observable<any>{
    return this.httpClient.get(this.API+'/register');
  }

  //position
getPosition():Observable<any>{
  return this.httpClient.get(this.API+'/position');
}

deleteRegister(idRegister: number) {
  return this.httpClient.delete(this.API + '/' + idRegister);
}


remove(idRegister:number){
return this.httpClient.get(this.API+'/register'+'/'+{idRegister})
}
// remove(href: string) {
//   return this.http.delete(href);
// }

}
