import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClient, HttpResponse , HttpClientModule , HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { map } from 'rxjs/operators';

import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FileManagerModule ,


  ],
  providers: [ NavigationPaneService, ToolbarService, DetailsViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
