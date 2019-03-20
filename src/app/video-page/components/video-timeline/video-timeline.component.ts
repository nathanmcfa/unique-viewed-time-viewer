import { Component, OnInit, Input } from '@angular/core';
import { UniqueViewedTime } from '../../../classes/model/unique-viewed-time';

@Component({
  selector: 'app-video-timeline',
  templateUrl: './video-timeline.component.html',
  styleUrls: ['./video-timeline.component.css']
})
export class VideoTimelineComponent implements OnInit {
  @Input() uvt: UniqueViewedTime;

  constructor() { }

  ngOnInit() {
  }

}
