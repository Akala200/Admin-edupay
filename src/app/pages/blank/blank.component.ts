import { Component, ViewEncapsulation } from '@angular/core';
import {User} from '../../model/user.model';
import { Subject } from 'rxjs/Subject';
import { UserService } from '../../services/user.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { HttpClient, HttpBackend, HttpErrorResponse, } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';






@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankComponent {

  source: LocalDataSource;


  public data = [];
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
    noDataMessage: 'No data found',
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

  constructor(private userService: UserService, private http: Http) {

    this.source = new LocalDataSource();

    this.loadData((data) => {
      this.data = data;
    });
  }

  public loadData(data) {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://edupay-api.azurewebsites.net/api/admin/user/get-all');
    req.onload = () => {
      data(JSON.parse(req.response));
    };
    req.send();
  }

  public onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
      const req = this.http.delete('http://edupay-api.azurewebsites.net/api/Values/' + event.id).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
    }
  }

  public onRowSelect(event) {
   // console.log(event);
  }

  public onUserRowSelect(event) {
    // console.log(event);   //this select return only one page rows
  }

  public onRowHover(event) {
    // console.log(event);
  }

  onPostCall(event) {
    event.confirm.resolve(event.newData);
    const req = this.http.post('http://edupay-api.azurewebsites.net/user/create/', this.data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });
 }

 onPutCall(event) {
  event.confirm.resolve(event.newData);
         // console.log(event.newData); //this contains the new edited data
      // your post request goes here
     //    example
  const req = this.http.put('http://edupay-api.azurewebsites.net/api/Values/' + event.newData.id, this.data).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.newData);
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log('Client-side error occured.');
    } else {
      console.log('Server-side error occured.');
    }
  });
  }

}


