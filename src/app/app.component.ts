import {
  Component, OnInit,
} from '@angular/core';
import {FileService} from "./services/file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'SomploTest';
  modal = false


  constructor(public fileService: FileService) {

  }


  handleModalVisible () {
    this.modal = !this.modal
  }

  ngOnInit(): void {
    this.handleModalVisible = this.handleModalVisible.bind(this);
  }
}
