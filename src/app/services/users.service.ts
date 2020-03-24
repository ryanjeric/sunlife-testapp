import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUserinfo():any{
    return {
      'name': 'Chu Ying,Rebecca',
      'img' : 'https://placekitten.com/300/300'
    }
  }

}
