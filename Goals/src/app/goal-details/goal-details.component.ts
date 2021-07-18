import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  @Input() goal:Goal=new Goal(0,'','',new Date());
  @Output() goalEvent= new EventEmitter<boolean>();


  constructor() { }
completeGoal(complete:boolean){
  this.goalEvent.emit(complete)

}
  ngOnInit(): void {
  }

}
