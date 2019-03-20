import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { VideoService } from '../shared/services/video.service';
import videoData from '../../assets/data/video.data.json';
import { Mock } from 'ts-mocks/lib';

describe('VideoTimelineComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const mockVideoService = new Mock<VideoService>();
		mockVideoService.setup(s => s.getVideos).is(() => videoData);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomeComponent ],
      providers: [
      {
        provide: VideoService,
        useValue: mockVideoService.Object
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.videos.length).toBe(3);
  });

});
