import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  public onomatopoeias: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onReceiveNewOnomatopia($event: string) {
    this.onomatopoeias.push($event);
  }

  /* Afficher Quete 08 - Output */
  isShowOutput = true;
  AfficherMasquerOutput() {
    this.isShowOutput = !this.isShowOutput;
  }
}
