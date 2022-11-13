import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() handleModalVisible!: () => void;

  animationOptions = [
    'select animation',
    'from-top',
    'from-bottom',
    'from-left',
    'rotate',
    'rotateYZ'
  ]
  constructor(public fileService: FileService, public formService: FormService) { }

  ngOnInit(): void {
  }

  onGenerateClick () {
    let animationElement = document.getElementById('box')
    animationElement && this.fileService.createBlob(animationElement)
    this.handleModalVisible()
  }
}
