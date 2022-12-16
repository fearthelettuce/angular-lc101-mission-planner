import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: Crew[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    if (!this.memberExists(memberName)) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }

  remove(member: Crew) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    if (!this.memberExists(name)) {
      member['name'] = name;
    }
    this.memberBeingEdited = null;
  }

  memberExists(name: string): boolean {
    for (let member of this.crew) {
      if (member.name === name) {
        return true
      }
    }
    // for (let i=0; i < this.crew.length; i++) {
    //   if (this.crew[i].name === name) {
    //     return true;
    //   }
    // }
    return false;
  }
}

interface Crew {name: string, firstMission: boolean}