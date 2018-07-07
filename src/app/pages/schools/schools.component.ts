import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { School } from './schools.model';
import { MenuService } from '../../theme/components/menu/menu.service';
import { SchoolService } from '../../services/school.service';
import { MembershipService } from './schools.service';


@Component({
  selector: 'app-membership',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService, SchoolService ]
})
export class SchoolsComponent implements OnInit {

  public menuItems: Array<any>;
  Allstatus: any = [];
  public schools: School[];
  public school: School;
  public searchText: string;
  public p: any;
  public modalRef: NgbModalRef;
  public form: FormGroup;
  public genderOption: string;

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
              public modalService: NgbModal, ) {

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
    this. get_schools();
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

  public  get_schools(): void {
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
/**
 * activateSchool
 */
public activateSchool() {
  this.toastrService.success('School successfully activated', 'Success!');

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
