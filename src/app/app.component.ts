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


  handleDownloadClick () {
    let animationElement = document.getElementById('box')
    animationElement && this.fileService.createBlob(animationElement)
    this.modal = !this.modal
  }

  ngOnInit(): void {
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }
}
