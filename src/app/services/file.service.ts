import { Injectable } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormGroup} from "@angular/forms";
import {
  ANIMATION_FROM_BOTTOM_STYLES,
  ANIMATION_FROM_LEFT_STYLES, ANIMATION_FROM_RIGHT_STYLES,
  ANIMATION_FROM_TOP_STYLES, ANIMATION_ROTATE_STYLES, ANIMATION_ROTATE_YZ_STYLES, WITHOUT_ANIMATION_STYLES
} from "../../consts/template";
import {FormService} from "./form.service";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  base64textString = '';
  fileUrl!: SafeResourceUrl

  constructor(private _sanitizer: DomSanitizer, private formService: FormService) { }

  public getFile (event: any, animationsForm: FormGroup) {
    let reader = new FileReader()
    let files = event.target.files
    let file = files[0]

    animationsForm.patchValue({
      img: file.name})

    if(file && !animationsForm.invalid) {
      reader.readAsDataURL(file)

      reader.onload = (_event: ProgressEvent) => {
        this._toDataURL(
          reader.result,
          (dataUrl: string) => {
            this.base64textString = dataUrl;
          },
          'image/png'
        )

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

    let template = this._createTemplate(animationElement)
    let blob = new Blob([template], {type: 'text/html'});

    this.fileUrl = this._sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  private _createTemplate (animationElement: HTMLElement) {
    let animationType = this.formService.form.value.animation
    return `
    <!doctype html>
      <html lang="en">
      <head>
        <style>
          ${
            animationType === 'from-top' ?
              ANIMATION_FROM_TOP_STYLES + `
                @keyframes from-top
                {
                    0% {
                      top: -300px;
                    }
                    100% {
                      top: ${this.formService.form.value.verticalPos}%;
                    }
                }`
            : animationType === 'from-bottom' ?
              ANIMATION_FROM_BOTTOM_STYLES + `
                @keyframes from-bottom
                {
                  0% {
                    top: 300px;
                  }
                  100% {
                    top: ${this.formService.form.value.verticalPos}%;;
                  }
                }
              `
            : animationType === 'from-left' ?
              ANIMATION_FROM_LEFT_STYLES + `
                @keyframes from-left
                {
                  0% {
                    left: -220px
                  }
                  100% {
                    left: ${this.formService.form.value.horizontalPos}%;;
                  }
                }
              `
            : animationType === 'from-right' ?
                    ANIMATION_FROM_RIGHT_STYLES + `
                @keyframes from-right
                {
                  0% {
                    left: 220px
                  }
                  100% {
                    left: ${this.formService.form.value.horizontalPos}%;;
                  }
                }
              `
            : animationType === 'rotate' ?
              ANIMATION_ROTATE_STYLES
            : animationType === 'rotateYZ' ?
              ANIMATION_ROTATE_YZ_STYLES
            :
              WITHOUT_ANIMATION_STYLES
          }
        </style>
        <meta charset="utf-8">
        <title>Your Banner</title>
      </head>
      <body>
        ${animationElement.outerHTML}
      </body>
    </html>
    `
  }
}
