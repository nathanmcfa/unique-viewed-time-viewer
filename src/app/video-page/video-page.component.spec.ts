import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoPageComponent } from './video-page.component';
import { VideoService } from '../shared/services/video.service';
import { ViewedFragmentService } from '../shared/services/viewed-fragment.service';
import videoData from '../../assets/data/video.data.json';
import viewedFragmentData from '../../assets/data/viewed-fragment.data.json';
import { Mock } from 'ts-mocks/lib';

describe('VideoTimelineComponent', () => {
	let component: VideoPageComponent;
	let fixture: ComponentFixture<VideoPageComponent>;

	beforeEach(async(() => {
		const mockVideoService = new Mock<VideoService>();
		mockVideoService.setup(s => s.getVideoById).is(() => videoData[0]);

		const mockViewedFragmentService = new Mock<ViewedFragmentService>();
		mockViewedFragmentService.setup(s => s.getViewedFragmentByParent).is(() => [viewedFragmentData[0], viewedFragmentData[1], viewedFragmentData[2]]);

		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [ VideoPageComponent ],
			providers: [
			{
				provide: VideoService,
				useValue: mockVideoService.Object
			},
			{
				provide: ViewedFragmentService,
				useValue: mockViewedFragmentService.Object
			}],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VideoPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('onNewRouteParams', () => {

		it('should fetch the video and fragments given an ID', () => {
			component.onNewRouteParams('bf1ec36c-ea65-45b9-9227-9a6cea0896db');
			expect(component.videoId).toBe('bf1ec36c-ea65-45b9-9227-9a6cea0896db');
			expect(component.video.id).toBe('bf1ec36c-ea65-45b9-9227-9a6cea0896db');
			expect(component.fragments.length).toBe(3);
		});

	});

});
