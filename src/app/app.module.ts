import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    OwlModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
