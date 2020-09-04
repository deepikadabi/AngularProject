import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { faThumbsDown, faThumbsUp , faEdit } from '@fortawesome/free-solid-svg-icons';
//import { QuestionComponent } from '../question/question.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public like = faThumbsUp;
  public dislike = faThumbsDown;
  public edit = faEdit;

  task = new FormControl();

  taskPlaceholder = 'Enter Task Here';
  btnTitle = 'Add Task';
  taskList = [];
  inList=[];
  addTask() {
    const nt = this.task.value;
    this.taskList.push(nt);
    this.task.setValue('');
  }

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  processQuestion() {
    // sessionStorage.removeItem('sid');
     this.router.navigate(['login']);
/*
    // open modal
    this.modalService.open(QuestionComponent, {
      centered: true,
    }); */
  }

  
  answerhere() {
    // sessionStorage.removeItem('sid');
    // this.router.navigate(['login']);

    // open modal
   this.router.navigate(['answer']);
/*
    this.modalService.open(AnswerComponent, {
      centered: true,
    }); */
  }
}
