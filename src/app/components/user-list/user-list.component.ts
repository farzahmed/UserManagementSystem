import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user-service.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { AddUserComponent } from '../add-user/add-user.component';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DowmloadSelectionComponent } from '../dowmload-selection/dowmload-selection.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'cnic', 'createdOn', 'updatedBy', 'updatedAt', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private userService: UserService) {}
ngOnInit(){
}
  ngAfterViewInit() {
  // window.location.reload();
    this.userService.users$.subscribe(users => {
      if (users && users.length > 0) {
        this.dataSource.data = users;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  downloadUsers(): void {
    if (!this.dataSource || !this.dataSource.data || this.dataSource.data.length === 0) {
      alert("No users available to download.");
      return;
    }

    const dialogRef = this.dialog.open( DowmloadSelectionComponent );

    dialogRef.afterClosed().subscribe((selectedFormat) => {
      if (selectedFormat === 'pdf') {
        this.exportToPDF();
      } else if (selectedFormat === 'excel') {
        this.exportToExcel();
      }
    });
  }

  exportToPDF(): void {
    const doc = new jsPDF();
    doc.text("User List", 14, 10);

    const columns = ["ID", "Name", "Email", "CNIC", "Created On", "Updated By", "Updated At"];
    const rows = this.dataSource.data.map(user => [
      user.id, user.name, user.email, user.cnic, user.createdOn, user.updatedBy || "Not Updated", user.updatedAt || "Not Updated"
    ]);

    autoTable(doc, { head: [columns], body: rows, startY: 20 });

    doc.save("User_List.pdf");
  }

  exportToExcel(): void {
    const usersData = this.dataSource.data.map(user => ({
      ID: user.id,
      Name: user.name,
      Email: user.email,
      CNIC: user.cnic,
      "Created On": user.createdOn,
      "Updated By": user.updatedBy || "Not Updated",
      "Updated At": user.updatedAt || "Not Updated"
    }));

    const worksheet = XLSX.utils.json_to_sheet(usersData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "User_List.xlsx");
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openUserDialog(actionType: string, user?: any) {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        actionType: actionType,
        user: user || {}
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.getUsers().subscribe(users => {
          this.dataSource.data = users;
        });
      }
    });
  }

  addUser() {
    this.openUserDialog('Add');
  }

  viewUser(user: any) {
    this.openUserDialog('View', user);
  }

  editUser(user: any) {
    this.openUserDialog('Edit', user);
  }

  deleteUser(user: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.userService.deleteUser(user.id);
      }
    });
  }
}
