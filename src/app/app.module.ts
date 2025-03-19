import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
// import { EditUserComponent } from './components/edit-user/edit-user.component';
// import { ViewUserComponent } from './components/view-user/view-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CnicFormatterDirective } from './directives/cnic-formatter.directive';
import { CapitalPipe } from './pipe/capital.pipe';
import { DowmloadSelectionComponent } from './components/dowmload-selection/dowmload-selection.component';
import { RouterModule } from '@angular/router';

import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './components/header/header.component'; // ✅ Import MatRadioModule



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    UserListComponent,
    // EditUserComponent,
    // ViewUserComponent,
    DeleteConfirmationComponent,
    ViewUserComponent,
    CnicFormatterDirective,
    CapitalPipe,
    DowmloadSelectionComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    MatSortModule ,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule ,
    MatTableModule,
    MatToolbarModule ,
    MatSnackBarModule ,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule ,
 MatRadioModule ,
 RouterModule // Aapka routing module


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
