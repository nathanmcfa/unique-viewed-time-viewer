import { Component, OnInit } from '@angular/core';
import { VideoService } from '../shared/services/video.service';
import { Video } from '../classes/model/video';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    videos: Video[];

    constructor(
      private videoService: VideoService
    ) { }

    ngOnInit() {
      this.videos = this.videoService.getVideos();
    }

}
