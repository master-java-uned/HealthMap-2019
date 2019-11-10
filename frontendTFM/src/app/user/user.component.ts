import { Component, OnInit } from '@angular/core';
import{TokenService} from '../services/token.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private tokenService: TokenService,private router: Router) { }

  ngOnInit() {}
  
  logOut(): void {
  this.tokenService.logOut();
  this.router.navigate(['login']);
}

}
