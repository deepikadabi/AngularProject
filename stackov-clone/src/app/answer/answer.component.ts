import { Component, OnInit } from '@angular/core';
import { faThumbsDown, faThumbsUp , faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  public like = faThumbsUp;
  public dislike = faThumbsDown;
  public edit = faEdit;
  constructor() { }

  ngOnInit(): void {
  }

}
