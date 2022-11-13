import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() onDownloadClick!: () => void;

  animationOptions = [
    'Select animation',
    'from-top',
    'from-bottom',
    'from-left',
    'rotate'
  ]
  constructor(public fileService: FileService, public formService: FormService) { }

  ngOnInit(): void {
  }

}
