import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { User } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:9090";
  PATH_OF_API_PROD = "https://proyectointegrador-backend-production.up.railway.app";
  requestHeader = new HttpHeaders( {"No-Auth":"True"} );

  constructor(private httpClient: HttpClient, 
              private userAuthService:UserAuthService) { }

  public register(registerData){
    return this.httpClient.post(this.PATH_OF_API_PROD + '/registerNewUser', registerData);
  }

  public login(loginData){
    return this.httpClient.post(this.PATH_OF_API_PROD + "/authenticate", loginData, {headers: this.requestHeader});
  }

  public forUser(){
    return this.httpClient.get(this.PATH_OF_API_PROD + '/forUser', {responseType: 'text'});
  }

  public forAdmin(){
    return this.httpClient.get(this.PATH_OF_API_PROD + '/forAdmin', {responseType: 'text'});
  }

  public getAllUsers(){
    return this.httpClient.get<User[]>(this.PATH_OF_API_PROD + '/getAllUsers');
  }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if(userRoles != null && userRoles){
      for(let i = 0; i < userRoles.length; i++){
        for(let j = 0; j < allowedRoles.length; j++){
          if(userRoles[i].roleName == allowedRoles[j]){
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return false;
  }
}
