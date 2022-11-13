import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(public fileService: FileService, public formService: FormService) { }

  ngOnInit(): void {
  }

}
