import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  [x: string]: any;

  userForm: FormGroup;
  actionType: string;


  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.actionType = data?.actionType || 'Add';

    this.userForm = this.fb.group({
      name: [data?.user?.name || '', [Validators.required, Validators.minLength(3)]],
      email: [data?.user?.email || '', [Validators.required, Validators.email]],
      cnic: [data?.user?.cnic || '', [Validators.required, Validators.pattern(/^\d{5}-\d{7}-\d$/)]],
      createdOn: [data?.user?.createdOn || new Date().toLocaleString()], 
      updatedBy: [data?.user?.updatedBy || ''],
      updatedAt: [data?.user?.updatedAt || new Date().toLocaleString()], 

    });
  }

  save() {
    if (this.userForm.valid) {
      let user = this.userForm.value;
      
      // this.formatCnic(); 
  
      if (this.actionType === 'Add') {
        console.log  ("her i cnic",this.userForm.value)
        user.createdOn = this.formatDate(new Date()); 

        if (this.userService.addUser(user)) {
          alert('User successfully added!');
        } else {
          alert('User with this email already exists!');
        }
      } else {
        user.updatedAt = this.formatDates(new Date()); 

        this.userService.updateUser({ ...this.data.user, ...user });
        alert('User successfully updated!');
      }
  
      this.dialogRef.close(true);
    }
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
  
  
  
  formatDate(date: Date): string {
    let day = date.getDate().toString().padStart(2, '0'); 
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    let year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
  // formatCnic() {
  //   let cnic = this.userForm.get('cnic')?.value.replace(/\D/g, ''); 
    
  //   if (cnic.length > 5) {
  //     cnic = cnic.substring(0, 5) + '-' + cnic.substring(5);
  //   }
  //   if (cnic.length > 13) {
  //     cnic = cnic.substring(0, 13) + '-' + cnic.substring(13, 14);
  //   }
  
  //   this.userForm.get('cnic')?.setValue(cnic, { emitEvent: false });
  // }
  
close(){
  this.dialogRef.close()
}
  
}
