import { Injectable } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {TEMPLATE_STYLES} from "../../consts/template";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  base64textString = '';
  fileUrl!: SafeResourceUrl

  constructor(private _sanitizer: DomSanitizer) { }

  public getFile (event: any, animationsForm: FormGroup) {
    let reader = new FileReader()
    let files = event.target.files
    let file = files[0]

    if(file) {
      reader.readAsDataURL(file)

      reader.onload = (_event: ProgressEvent) => {
        this._toDataURL(
          reader.result,
          (dataUrl: string) => {
            this.base64textString = dataUrl;
          },
          'image/png'
        )
        animationsForm.patchValue({
          img: reader.result})
      }
    }
  }

  private _toDataURL(src: any, callback: (dataUrl: string) => void, outputFormat: string) {
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

  public createBlob (animationElement: HTMLElement) {
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
        ${animationElement.outerHTML}
      </body>
    </html>
    `], {type: 'text/html'});

    this.fileUrl = this._sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
