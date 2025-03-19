import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn:string | null = null;

  constructor(private userService: UserService, private router :Router) {
    this.isLoggedIn = localStorage.getItem('loggedInUserEmail');
    console.log("status login from cons ",this.isLoggedIn)
  }

  ngOnInit(): void {
    // this.isLoggedIn = this.userService.isLoggedIn();
    this.isLoggedIn = localStorage.getItem('loggedInUserEmail');
    console.log("status login",this.isLoggedIn)

  }

  logout(): void {
    // this.userService.logout();
    localStorage.clear();
    this.isLoggedIn = null;
    this.router.navigate(['/login'])
  }

}


// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// @Component({
//   selector: 'app-view-user',
//   templateUrl: './view-user.component.html',
//   styleUrls: ['./view-user.component.css']
// })
// export class ViewUserComponent {
//   constructor(
//     public dialogRef: MatDialogRef<ViewUserComponent>,
//     @Inject(MAT_DIALOG_DATA) public user: any
//   ) {}

//   close() {
//     this.dialogRef.close();
//   }
// }


// <!-- <h2 mat-dialog-title class="text-center">👀 View User</h2>

 
// <mat-dialog-content>
//   <div class="user-details">
//     <mat-form-field class="w-100" appearance="fill" disabled>
//       <mat-label>Name</mat-label>
//       <input matInput [value]="user.name" readonly>
//   </mat-form-field>

//     <mat-form-field class="w-100" appearance="fill" disabled>
//       <mat-label>Email</mat-label>
//       <input matInput [value]="user.email" readonly>
//   </mat-form-field>
//   </div>
// </mat-dialog-content>

// <mat-dialog-actions>
//   <button mat-raised-button color="warn" (click)="close()">Close</button>
// </mat-dialog-actions>
//  -->

/* view-user.component.css */
// .mat-dialog-content {
//   padding: 20px;
// }

// .mat-form-field {
//   margin-bottom: 15px; /* Adds space between fields */
// }

// .mat-dialog-actions {
//   display: flex;
//   justify-content: flex-end;
//   padding: 15px;
// }

// button.mat-raised-button {
//   margin-left: 10px;
// }

// button.mat-raised-button:disabled {
//   background-color: #dcdcdc;
//   cursor: not-allowed;
// }

// .user-details {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }









// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from 'src/app/services/user-service.service';

// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css']
// })
// export class EditUserComponent {
//   editForm: FormGroup;

//   constructor(
//     public dialogRef: MatDialogRef<EditUserComponent>,
//     @Inject(MAT_DIALOG_DATA) public user: any,
//     private fb: FormBuilder,
//     private userService: UserService
//   ) {
//     this.editForm = this.fb.group({
//       name: [user.name, [Validators.required, Validators.minLength(3)]],
//       email: [user.email, [Validators.required, Validators.email]]
//     });
//   }

//   save() {
//     if (this.editForm.valid) {
//       const updatedUser = { ...this.user, ...this.editForm.value };
//       this.userService.updateUser(updatedUser);
//       this.dialogRef.close(updatedUser);
//       alert('User successfully updated!');
//     }
//   }

//   close() {
//     this.dialogRef.close();
//   }
// }






// <!-- <h2 mat-dialog-title class="text-center">✏ Edit User</h2>
// <mat-dialog-content>
//   <form [formGroup]="editForm">
//     <mat-form-field class="w-100" appearance="fill">
//       <mat-label>Name</mat-label>
//       <input matInput type="text" formControlName="name" [class.is-invalid]="editForm.get('name')?.invalid && editForm.get('name')?.touched" />
//       <mat-error *ngIf="editForm.get('name')?.invalid && editForm.get('name')?.touched">
//         Name is required and must be at least 3 characters long.
//       </mat-error>
//     </mat-form-field>
//     <br /><br />
//     <mat-form-field class="w-100" appearance="fill">
//       <mat-label>Email</mat-label>
//       <input matInput type="email" formControlName="email" [class.is-invalid]="editForm.get('email')?.invalid && editForm.get('email')?.touched" />
//       <mat-error *ngIf="editForm.get('email')?.invalid && editForm.get('email')?.touched">
//         Please enter a valid email.
//       </mat-error>
//     </mat-form-field>
//   </form>
// </mat-dialog-content>
// <mat-dialog-actions>
//   <button mat-raised-button color="warn" (click)="close()">Cancel</button>
//   <button mat-raised-button color="primary" [disabled]="editForm.invalid" (click)="save()">Save Changes</button>
// </mat-dialog-actions> -->



/* edit-user.component.css */
// .mat-dialog-content {
//   padding: 20px;
// }
// /* In your component's CSS file (edit-user.component.css) */
// .custom-snackbar {
//   background-color: #4caf50; /* Green background for success */
//   color: white;
//   font-size: 16px; /* Adjust the font size */
//   font-weight: bold;
//   border-radius: 5px; /* Rounded corners */
//   padding: 10px 20px; /* Increase padding for a more spacious look */
//   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Soft shadow for better visibility */
// }

// /* Optional: Style for the "Close" button in the snackbar */
// .custom-snackbar .mat-button {
//   color: white; /* White color for the button */
// }


// .mat-form-field {
//   margin-bottom: 15px; /* Adds space between fields */
// }

// .mat-dialog-actions {
//   display: flex;
//   justify-content: flex-end;
//   padding: 15px;
// }

// button.mat-raised-button {
//   margin-left: 10px;
// }

// button.mat-raised-button:disabled {
//   background-color: #dcdcdc;
//   cursor: not-allowed;
// }
