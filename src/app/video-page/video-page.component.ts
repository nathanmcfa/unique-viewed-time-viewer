import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../shared/services/video.service';
import { ViewedFragmentService } from '../shared/services/viewed-fragment.service';
import { ViewedFragment } from '../classes/model/viewed-fragment';
import { Video } from '../classes/model/video';
import { UniqueViewedTime, createUVT } from '../classes/model/unique-viewed-time';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  fragments: ViewedFragment[];
  videoId: string;
  video: Video;
  uvt: UniqueViewedTime;

  constructor(
    private viewedFragmentService: ViewedFragmentService,
    private videoService: VideoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(p => p.get('id'))
    ).subscribe(id => this.onNewRouteParams(id));
  }

  onNewRouteParams(vid: string) {
    this.videoId = vid;
    this.video = this.videoService.getVideoById(vid);
    this.fragments = this.viewedFragmentService.getViewedFragmentByParent(vid);
    this.uvt = createUVT(this.video, this.fragments);
	}

}
