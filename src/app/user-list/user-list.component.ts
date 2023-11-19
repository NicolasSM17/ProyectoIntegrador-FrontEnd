import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  displayedColumns: string[] = ['User Name', 'First Name', 'Last Name'];
  dataSource = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.dataSource = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
