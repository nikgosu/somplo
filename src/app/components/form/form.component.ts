import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, DoCheck{

  @Input() handleModalVisible!: () => void;

  animationOptions = [
    'select animation',
    'from-top',
    'from-bottom',
    'from-left',
    'from-right',
    'rotate',
    'rotateYZ'
  ]

  sliderInputsProps = [
    {
      for: 'width',
      min: 1,
      max: 100,
      value: 100,
    },
    {
      for: 'height',
      min: 1,
      max: 100,
      value: 100,
    },
    {
      for: 'verticalPos',
      min: -100,
      max: 100,
      value: 0,
    },
    {
      for: 'horizontalPos',
      min: -100,
      max: 100,
      value: 0,
    },
  ]

  constructor(public fileService: FileService, public formService: FormService) { }

  ngOnInit(): void {
  }

  onGenerateClick () {
    let animationElement = document.getElementById('box')
    animationElement && this.fileService.createBlob(animationElement)
    this.handleModalVisible()
  }

  get img () {
    return this.formService.form.get('img')
  }

  ngDoCheck(): void {
    console.log(this.formService.form.value)
  }
}
