import { Component, OnInit } from '@angular/core';
import {Developer} from "../common/developer.model";
import {Skill} from "../common/skill.model";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;

  constructor() { }

  ngOnInit(): void {
    this.developer = new Developer(
      'Allen',
      'Barry',
      20,
      'Male',
      'I am flash',
      [
        new Skill('PHP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png', 'https://www.php.net/'),
        new Skill('Java', 'https://cdn2.clc2l.fr/t/j/a/java-N5uhyL.jpg', 'https://www.java.com/fr/'),
      ]
    );
  }
}
