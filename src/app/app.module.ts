import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatalystModule } from '@haiilo/catalyst-angular';
import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';

@NgModule({
  imports: [BrowserModule, CatalystModule.forRoot()],
  declarations: [AppComponent, StageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
