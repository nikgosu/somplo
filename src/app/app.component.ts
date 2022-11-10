import {Component, DoCheck} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'SomploTest';
  animationsForm!: FormGroup;
  animationOptions = [
    'slide in from top',
    'rotate',
    'slide'
  ]

  constructor() {
    this._createForm()
  }

  ngDoCheck(): void {

  }

  private _createForm () {
    this.animationsForm = new FormGroup({
      img: new FormControl(),
      animation: new FormControl('')
    })
  }

  getFile (event: any) {
    let reader = new FileReader()

    if(event.target.files && event.target.files.length) {
      reader.readAsDataURL(event.target.files[0])

      reader.onload = (_event: ProgressEvent) => {
        this.animationsForm.patchValue({
          img: reader.result})
      }
    }
  }
}
