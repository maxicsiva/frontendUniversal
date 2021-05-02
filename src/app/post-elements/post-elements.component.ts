import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-elements',
  templateUrl: './post-elements.component.html',
  styleUrls: ['./post-elements.component.scss']
})
export class PostElementsComponent implements OnInit {

  @Input() postDatas;

  constructor() { }

  ngOnInit(): void {
  }

}
