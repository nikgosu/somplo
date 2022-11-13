import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modal!: boolean

  constructor(public fileService: FileService) { }

  ngOnInit(): void {
  }

}
