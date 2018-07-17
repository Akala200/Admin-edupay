import { Component, ViewEncapsulation } from '@angular/core';
import {User} from '../../model/user.model';
import { Subject } from 'rxjs/Subject';
import { UserService } from '../../services/user.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { HttpClient, HttpBackend, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ToastrService, GlobalConfig } from 'ngx-toastr';








@Component({
  selector: 'app-blank',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent {

  options: GlobalConfig;
  source: LocalDataSource;


  public user = [];
  public settings = {
    selectMode: 'single',  // single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'right' // left|right
    },
    add: {
      addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
      createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
      saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
      confirmDelete: true
    },
    noDataMessage: 'No user created',
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
        filter: true
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      phoneNumber: {
        title: 'Phone Number',
        type: 'number'
      },
      role: {
        title: 'Role',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Admin', title: 'Admin' }, { value: 'Agent', title: 'Agent' }, { value: 'User', title: 'User' }]
          }
        }
      },
      gender: {
        title: 'Gender',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Male', title: 'Male' }, { value: 'Female', title: 'Female' }]
          }
        }
      }
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

  constructor(private userService: UserService, private http: Http, public toastrService: ToastrService) {

    this.options = this.toastrService.toastrConfig;

    this.source = new LocalDataSource();

    this.loadData((user) => {
      this.user = user;
    });
  }

  public loadData(user) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/users.json'); // http://edupay-api.azurewebsites.net/api/admin/user/get-all
    req.onload = () => {
      user(JSON.parse(req.response));
    };
    req.send();
  }

  public onDeleteConfirm(user) {
    if (window.confirm('Are you sure you want to delete?')) {
      const req = this.userService.delete(user.id).subscribe(
        res => {
          console.log(res);
          user.confirm.resolve();
          this.toastrService.success('User successfully deleted', 'Success!');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
          this.toastrService.error('Could not delete user', 'error!');
        }
      });

    } else {
      user.confirm.reject();
    }
  }

  public onRowSelect(user) {
   // console.log(user);
  }

  public onUserRowSelect(user) {
    // console.log(user);   //this select return only one page rows
  }

  public onRowHover(user) {
    // console.log(user);
  }




  onPostCall(user) {
  user.confirm.resolve(user.newUser);
         // console.log(user.newUser); //this contains the new edited user
      // your post request goes here
     //    example
  const req = this.userService.postData(user).subscribe(
    res => {
      console.log(res);
      this.toastrService.success('User successfully updated', 'Success!');
      user.confirm.resolve(user.newUser);
  },
  (err: HttpErrorResponse) => {
    this.toastrService.error('An error occured ', 'Try again!');
    if (err.error instanceof Error) {
      console.log('Client-side error occured.');
    } else {
      console.log('Server-side error occured.');
    }
  })
}


 onPutCall(user) {
  user.confirm.resolve(user.newUser);
         // console.log(user.newUser); //this contains the new edited user
      // your post request goes here
     //    example
  const req = this.userService.update( user.newUser.id, ).subscribe(
    res => {
      console.log(res);
      this.toastrService.success('User successfully updated', 'Success!');
      user.confirm.resolve(user.newUser);
  },
  (err: HttpErrorResponse) => {
    this.toastrService.error('An error occured ', 'Try again!');
    if (err.error instanceof Error) {
      console.log('Client-side error occured.');
    } else {
      console.log('Server-side error occured.');
    }
  });
  }

}
