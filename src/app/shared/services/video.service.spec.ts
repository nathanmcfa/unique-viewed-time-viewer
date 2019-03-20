import { TestBed } from '@angular/core/testing';
import { VideoService } from './video.service';

describe('VideoService', () => {

	let videoService: VideoService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VideoService
			]
		});
		videoService = TestBed.get(VideoService);
	});

	it('should be created', () => {
		const service: VideoService = TestBed.get(VideoService);
		expect(service).toBeTruthy();
	});

	describe('getVideos', () => {

		it(`should get all videos`, () => {
			const videos = videoService.getVideos();

			expect(videos.length).toBe(3);
		});

	});

	describe('getVideoById', () => {

		it(`should get only the video requested`, () => {
			const video = videoService.getVideoById('d5044ac6-c6av-458d-8489-f8afbezz7h9b');

			expect(video.title).toBe('Aladdin');
		});

	});

});
