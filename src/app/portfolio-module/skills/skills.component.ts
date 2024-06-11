import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skills= [
  {
    "skillName": "Angular",
    "percentage": 65
  },
  {
    "skillName": "HTML",
    "percentage": 80
  },
  {
    "skillName": "CSS",
    "percentage": 75
  },
  {
    "skillName": "Flex Box",
    "percentage": 50
  },
  {
    "skillName": "CSS Grid",
    "percentage": 30
  },
  {
    "skillName": "Bootstrap",
    "percentage": 70
  },
  {
    "skillName": "JavaScript",
    "percentage": 50
  },
  {
    "skillName": "jQuery",
    "percentage": 40
  },
  {
    "skillName": "TypeScript",
    "percentage": 40
  },
  {
    "skillName": "GIT",
    "percentage": 50
  },
  {
    "skillName": "Jira",
    "percentage": 50
  },
  {
    "skillName": "BitBucket",
    "percentage": 50
  }
]
}
