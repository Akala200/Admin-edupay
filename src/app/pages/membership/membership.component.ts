import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { School } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService, SchoolService ]
})
export class MembershipComponent implements OnInit {

  public menuItems: Array<any>;
  Allstatus: any = [];
  private schools: School[];
  private school: School;
  private searchText: string;
  private p: any;
  private modalRef: NgbModalRef;
  private form: FormGroup;
  private genderOption: string;

  public menuSelectSettings: IMultiSelectSettings = {
      enableSearch: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-secondary btn-block',
      dynamicTitleMaxItems: 0,
      displayAllSelectedText: true,
      showCheckAll: true,
      showUncheckAll: true
  };
  public menuSelectTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'menu item selected',
      checkedPlural: 'menu items selected',
      searchPlaceholder: 'Find menu item...',
      defaultTitle: 'Select menu items for user',
      allSelected: 'All selected',
  };
  public menuSelectOptions: IMultiSelectOption[] = [];

  constructor(public fb: FormBuilder,
              public toastrService: ToastrService,
              public membershipService: MembershipService,
              public menuService: MenuService,
              public modalService: NgbModal) {

    this.menuItems = this.menuService.getVerticalMenuItems();
    this.menuItems.forEach(item => {
      const menu = {
        id: item.id,
        name: item.title
      }
      this.menuSelectOptions.push(menu);
    })
  }

  ngOnInit() {
    this.getUsers();
    this.form = this.fb.group({
        id: null,
        username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
        password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        profile: this.fb.group({
          name: null,
          surname: null,
          birthday: null,
          gender: null,
          image: null
        }),
        work: this.fb.group({
          company: null,
          position: null,
          salary: null
        }),
        contacts: this.fb.group({
          email: null,
          phone: null,
          address: null
        }),
        social: this.fb.group({
          facebook: null,
          twitter: null,
          google: null
        }),
        settings: this.fb.group({
          isActive: null,
          isDeleted: null,
          registrationDate: null,
          joinedDate: null
        }),
        menuIds: null
    });
  }

  public getUsers(): void {
    this.membershipService.get_schools().subscribe((res: any[]) => {
      this.schools = res;
      });
    }


  public openMenuAssign(event) {
    let parent = event.target.parentNode;
    while (parent) {
      parent = parent.parentNode;
      if (parent.classList.contains('content')) {
        parent.classList.add('flipped');
        parent.parentNode.parentNode.classList.add('z-index-1');
        break;
      }
    }
  }

  public closeMenuAssign(event) {
    let parent = event.target.parentNode;
    while (parent) {
      parent = parent.parentNode;
      if (parent.classList.contains('content')) {
        parent.classList.remove('flipped');
        parent.parentNode.parentNode.classList.remove('z-index-1');
        break;
      }
    }
  }

  public assignMenuItemsToUser(school) {
    sessionStorage.setItem('userMenuItems', JSON.stringify(school.menuIds));
    this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
  }

  public openModal(modalContent, school) {
    if (school) {
      this.school = school;
      this.form.setValue(school);
    } else {
      this.school = new school();
      this.school.settings = new school();
    }
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      this.form.reset();
      this.genderOption = null;
    }, (reason) => {
      this.form.reset();
      this.genderOption = null;
    });
  }

  public closeModal() {
    this.modalRef.close();
  }

}
