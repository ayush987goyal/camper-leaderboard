import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CamperService {

  constructor(private http:Http) { }

  getRecent(){
    return this.http.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }

  getAlltime(){
    return this.http.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  }

}
