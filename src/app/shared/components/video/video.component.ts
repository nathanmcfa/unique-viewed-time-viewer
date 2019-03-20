import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../classes/model/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  @Input() large: boolean;

  constructor() { }

  ngOnInit() {
  }

}
