import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewedFragmentService } from './shared/services/viewed-fragment.service';
import { VideoService } from './shared/services/video.service';
import { VideoComponent } from './shared/components/video/video.component';
import { VideoTimelineComponent } from './video-page/components/video-timeline/video-timeline.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, AppRoutingModule.components, VideoComponent, VideoTimelineComponent, HeaderComponent ],
  providers:    [ ViewedFragmentService, VideoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
