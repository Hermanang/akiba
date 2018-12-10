import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = `http://localhost:9000/api`;
@Injectable()
export class JobService {


  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get<any>(`${apiUrl}/akiba/jobs`)
      /*.pipe(
        catchError(this.authService.handleError('getJobs'))
      )*/;
  }

  getJob(id) {
    return this.http.get<any>(`${apiUrl}/akiba/job/${id}`)
      /*.pipe(
        catchError(this.authService.handleError('getUsers'))
      )*/;
  }

  // addProfileUser(profileUser) {
  //   return this.http.post<any>(`http://localhost:9000/api/presta/profile_user/add`, profileUser)
  //     .pipe(
  //       catchError(this.authService.handleError('getUsers'))
  //     );
  // }

  /*updateProfileUsers(user) {
    return this.http.put<any>(`/profile_user/${user._id}`, user)
      .pipe(
        catchError(this.authService.handleError('updateUser'))
      );
}*/

  /*removeProfileUsers() {
    return this.http.get<any>(`/profile_user/data`)
    /*.pipe(
      catchError(this.authService.handleError('getAtatUserForm'))
    );
  }*/

}
