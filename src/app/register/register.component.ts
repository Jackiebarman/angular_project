import { HttpClient } from '@angular/common/http';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userModel=new User('','','','',+91,'','','');
  exist=false;
  submitted=false;
  constructor(public _http:HttpClient) { }
  geturl()
  {
    return "url('assets/online1.jpg')";
  }
  getsize()
  {
    return "100%";
  }
  onSubmit(){
    this.exist=false;
    this._http.post<any>('http://localhost:3000/register',this.userModel)
    .subscribe((data)=>{console.log("registration successful");this.submitted=true},(error)=> this.exist=true
    )
  
  }
  ngOnInit() {
  }

}
