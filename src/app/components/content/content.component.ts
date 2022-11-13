import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {FormService} from "../../services/form.service";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('expandedPanel', [
      transition('* => from-top', animate('2s ease', keyframes([
        style({top: '-300px'}),
        style({top: 0})
      ]))),
      transition('* => from-bottom', animate('2s ease', keyframes([
        style({top: '300px'}),
        style({top: 0})
      ]))),
      transition('* => from-left', animate('2s ease', keyframes([
        style({left: '-220px'}),
        style({left: 0})
      ]))),
      transition('* => rotate', animate('2s ease', keyframes([
        style({transform: 'rotateZ(360deg)'}),
      ]))),
      transition('* => rotateYZ', animate('2s ease', keyframes([
        style({transform: 'rotateY(360deg) rotateZ(360deg)'}),
      ]))),
    ]),
  ],
})
export class ContentComponent implements OnInit {

  state: string = ''

  constructor(public fileService: FileService, public formService: FormService) { }

  ngOnInit(): void {
  }

}
