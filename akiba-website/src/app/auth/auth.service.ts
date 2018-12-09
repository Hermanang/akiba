import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { apiUrl } from '../app.constants';
// const url = `http://localhost:9000`;
@Injectable()
export class AuthService {


  constructor(/*private http: HttpClient*/) { }

//   getProfileUsers() {
//     return this.http.get<any>(`http://localhost:9000/api/presta/profile_user`)
//       .pipe(
//         catchError(this.authService.handleError('getUsers'))
//       );
//   }

//   getProfileUser(id) {
//     return this.http.get<any>(`http://localhost:9000/api/presta/profile_user/${id}`)
//       .pipe(
//         catchError(this.authService.handleError('getUsers'))
//       );
//   }

//   addProfileUser(profileUser) {
//     return this.http.post<any>(`http://localhost:9000/api/presta/profile_user/add`, profileUser)
//       .pipe(
//         catchError(this.authService.handleError('getUsers'))
//       );
//   }

//   updateProfileUsers(user) {
//     return this.http.put<any>(`/profile_user/${user._id}`, user)
//       .pipe(
//         catchError(this.authService.handleError('updateUser'))
//       );
// }

//   removeProfileUsers() {
//     return this.http.get<any>(`/profile_user/data`)
//     .pipe(
//       catchError(this.authService.handleError('getAtatUserForm'))
//     );
//   }

}
