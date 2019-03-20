import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPageComponent } from './video-page/video-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'video/:id', component: VideoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [ HomeComponent, VideoPageComponent ];
}
