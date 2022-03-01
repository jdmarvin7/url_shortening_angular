import { ApiService } from './../services/api.service';
//import { ApiService } from './../api.service';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shorten-link-ui',
  templateUrl: './shorten-link-ui.component.html',
  styleUrls: ['./shorten-link-ui.component.scss']
})
export class ShortenLinkUiComponent implements OnInit {
  link: any;
  links: any[] =[];

  @Output() emitLink = new EventEmitter<any>();

  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }

  pegandoLink(): void {
    const value = this.service.pegar(this.link);
    value.subscribe((link: any) => {
      this.link = link;
      console.log(this.link.result);
      this.zerarCampos();
    });
  }

  aoClicar() {
    this.emitLink.emit(({
      link: this.link.result.short_link,
      fullLink: this.link.resul.full_short_link
    }))
  }

  zerarCampos() {
    return this.link = '...'
  }
}
