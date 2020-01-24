import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input('param') parameter: any;
  @Input('data') parentListInfo: any;
  @Output() changeInfo = new EventEmitter();

  childUser: any;
  showEditBtn: boolean = true;
  isEditMode: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  onEdit() {
    this.showEditBtn = false;
    this.isEditMode = false;
  }

  onCancel() {
    this.isEditMode = !this.isEditMode;
    this.showEditBtn = true;
  }

  ngOnChanges(changes) {
    console.info(changes)
    this.childUser = Object.assign({}, changes.parentListInfo.currentValue)
    //this.childUser = changes.parentListInfo.currentValue;
  }
  //This lifecycle hook, responds “when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.”

  onUpdate() {
    this.showEditBtn = true;
    this.isEditMode = true;
    //this.changeInfo.emit(this.childUser);
  }

}
