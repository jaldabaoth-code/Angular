import { Component, Input } from '@angular/core';
import { Skill } from "../common/skill.model";

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent {
    @Input()
    public skill: Skill;

    constructor() { }
}
