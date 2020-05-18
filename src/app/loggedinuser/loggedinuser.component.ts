import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-loggedinuser',
  templateUrl: './loggedinuser.component.html',
  styleUrls: ['./loggedinuser.component.css']
})
export class LoggedinuserComponent implements OnInit {
  students;
  constructor(private homeservice:UsersService) { }

  ngOnInit() {
    this.students = this.homeservice.getstudents();
    console.log(this.students[1].name);
  }

}
