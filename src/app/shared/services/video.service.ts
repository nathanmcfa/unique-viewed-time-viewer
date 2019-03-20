import { Injectable } from '@angular/core';
import { Video } from '../../classes/model/video';
import videoData from '../../../assets/data/video.data.json';

@Injectable()
export class VideoService {

    constructor() {}

    getVideos(): Video[] {
      return videoData as Video[];
    }
    getVideoById(video_id: string): Video {
      return videoData.filter(v => v.id === video_id).shift();
    }
}
