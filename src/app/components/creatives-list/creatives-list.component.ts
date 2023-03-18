import { Component, OnInit } from '@angular/core';
import {CreativeService} from "../../services/creative.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './creatives-list.component.html',
  styleUrls: ['./creatives-list.component.scss']
})
export class CreativesListComponent implements OnInit {
  creatives$!: Observable<any[]>

  constructor(
    private creativeService: CreativeService
  ) {
    this.creatives$ = creativeService.creatives.value$
  }

  ngOnInit(): void {
    this.creativeService.getAllCreatives().subscribe(creatives => {
      this.creativeService.creatives.value = creatives
      console.log(creatives)
    })
  }

}
