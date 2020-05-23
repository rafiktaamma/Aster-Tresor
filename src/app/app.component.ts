import {Component, OnInit} from '@angular/core';
import { HostListener } from '@angular/core';



@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ajaxSettings: object;
  public contextMenuSettings: object;
  public toolbarSettings: object;
  public allowMultiSelection: boolean;
  public hostUrl = 'https://file-provider-nodejs.herokuapp.com/';
  public ngOnInit(): void {
    // Initializing the File Manager with NodeJS service.
    this.ajaxSettings = {
      // Replace the hosted port number in the place of "{port}"
      // url : this.hostUrl,
      // downloadUrl : this.hostUrl + 'Download',
        url: this.hostUrl ,
        downloadUrl: this.hostUrl + 'Download',
         uploadUrl : this.hostUrl + 'Upload',
         getImageUrl : this.hostUrl + 'GetImage'
    };

    this.contextMenuSettings = { file: ['Open', 'Download' , '|', 'Details'],
      folder: ['Open', 'Download' , '|', 'Details'],
      layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|'],
      visible: true};
    this.toolbarSettings = { items: ['Download', 'SortBy', 'Refresh', 'Selection' , 'View', 'Details'], visible: true};
    this.allowMultiSelection = false;
  }
@HostListener('window:scroll', ['$event'])
onWindowScroll(e) {
  const element = document.querySelector('.navbar');
  if (window.pageYOffset > 10) {
    element.classList.add('nav_onScroll');
    element.classList.remove('py-lg-3');
    element.classList.add('py-0');
  } else {
    element.classList.remove('nav_onScroll');
    element.classList.remove('py-0');
    element.classList.add('py-lg-3');
  } }

}
