import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten-link-ui',
  templateUrl: './shorten-link-ui.component.html',
  styleUrls: ['./shorten-link-ui.component.scss']
})
export class ShortenLinkUiComponent implements OnInit {

  link!: string;

  constructor() { }

  ngOnInit(): void {
  }

  pegandoLink(): void {
    console.log(this.link);
  }

}
