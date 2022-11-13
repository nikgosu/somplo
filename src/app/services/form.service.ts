import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form!: FormGroup;

  constructor() {
    this._createForm()
  }

  private _createForm () {
    this.form = new FormGroup({
      img: new FormControl(),
      animation: new FormControl(''),
      width: new FormControl(100),
      height: new FormControl(100),
      verticalPos: new FormControl(0),
      horizontalPos: new FormControl(0),
    })
  }
}
