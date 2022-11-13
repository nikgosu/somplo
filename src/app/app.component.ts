import {
  Component,
  DoCheck,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {TEMPLATE_STYLES} from "../consts/template";
import {FileService} from "./components/services/file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{

  @ViewChild('animation') animationElement = document.getElementById('box')

  title = 'SomploTest';
  animationsForm!: FormGroup;
  modal = false
  base64textString = '';
  fileUrl!: SafeResourceUrl

  animationOptions = [
    'Select animation',
    'from-top',
    'from-bottom',
    'from-left',
    'rotate'
  ]


  constructor(private sanitizer: DomSanitizer, public FileService: FileService) {
    this._createForm()
  }

  ngDoCheck(): void {
    this.createBlob()
  }

  private _createForm () {
    this.animationsForm = new FormGroup({
      img: new FormControl(),
      animation: new FormControl(''),
      width: new FormControl(100),
      height: new FormControl(100),
      verticalPos: new FormControl(0),
      horizontalPos: new FormControl(0),
    })
  }

  getFile (event: any) {
    let reader = new FileReader()
    let files = event.target.files
    let file = files[0]

    if(file) {
      reader.readAsDataURL(file)

      reader.onload = (_event: ProgressEvent) => {
        this.toDataURL(
          reader.result,
          (dataUrl: string) => {
            this.base64textString = dataUrl;
          },
          'image/png'
        )
        this.animationsForm.patchValue({
          img: reader.result})
      }
    }
  }

   toDataURL(src: any, callback: (dataUrl: string) => void, outputFormat: string) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
      let ctx = canvas.getContext('2d');
      let dataURL;
      canvas.height = img.naturalHeight;
      canvas.width = img.naturalWidth;
      ctx && ctx.drawImage(img, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }

  }

  createBlob () {
    this.animationElement = document.getElementById('box')
    if (this.animationElement) {
      let blob = new Blob([`
      <!doctype html>
        <html lang="en">
        <head>
          <style>
            ${TEMPLATE_STYLES}
          </style>
          <meta charset="utf-8">
          <title>Your Banner</title>
        </head>
        <body>
          ${this.animationElement.outerHTML}
        </body>
      </html>
      `], {type: 'text/html'});
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    }
  }

  handleDownloadClick () {
    this.createBlob()
    this.modal = !this.modal
  }
}
