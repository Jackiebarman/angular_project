import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 students;
 constructor(private homeservice:UsersService) { }
 geturl()
 {
   return "url('assets/d2.jpg')";
 }
 geturl2()
 {
   return "url('assets/d3.jpg')";
 }
 getsize()
 {
   return "120%";
 }
 ngOnInit() {
   this.students = this.homeservice.getstudents();
   console.log(this.students[1].name);
 }

}
