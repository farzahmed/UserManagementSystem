import { Injectable, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([
    {
      id: 1,
      name: "Shoaib Rehman",
      email: "shoaib@gmail.com",
      createdOn: "",
      updatedAt: "",
      updatedBy: "",
      cnic: "11111-111111-1",
      password: "Khan@121"
    },
    {
      id: 1,
      name: "Faraz",
      email: "faraz@gmail.com",
      createdOn: "",
      updatedAt: "",
      updatedBy: "",
      cnic: "11111-222222-1",
      password: "Faraz@121"
    }
  ]); 
  users$: Observable<any[]> = this.usersSubject.asObservable(); 

  constructor(private router: Router) {} 

  getUsers(): Observable<any[]> {
    return this.users$; 
  }

  formatDate(date: Date): string {
    let day = date.getDate().toString().padStart(2, '0'); 
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
   
  addUser(user: any): boolean {
    let users = this.usersSubject.getValue(); 
    if (users.some(u => u.email === user.email)) {
      return false; 
    }
  
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    user.cnic = user.cnic || ''; 
    user.createdOn = this.formatDate(new Date()); 
    user.updatedBy = ''; 
    user.updatedAt='';

    users.push(user);
    this.usersSubject.next(users);
    return true;
  }
  formatDates(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = date.toLocaleString('en-US', { month: 'long' }); 
    const year = date.getFullYear(); 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0'); 

    return `${day}.${month},${year} at ${hours}:${minutes}:${seconds}`;
  }
  
  updateUser(updatedUser: any): void {
    let users = this.usersSubject.getValue();
    let index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      
      const loggedInUserEmail = localStorage.getItem('loggedInUserEmail'); 
      updatedUser.updatedBy = loggedInUserEmail || 'Unknown'; 
      updatedUser.updatedAt = this.formatDates(new Date()); 

      users[index] = updatedUser;
      this.usersSubject.next(users);
    }
  }

  deleteUser(userId: number): void {
    let users = this.usersSubject.getValue().filter(user => user.id !== userId);
    this.usersSubject.next(users);
  }

  getUsersList(): any[] {
    return this.usersSubject.getValue();
  }

  isLoggedIn() {
    return localStorage.getItem('loggedInUserEmail') || null;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
 