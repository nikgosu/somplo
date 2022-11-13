import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public fileService: FileService, public formService: FormService) { }

  ngOnInit(): void {
  }

}
