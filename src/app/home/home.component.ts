import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from "ngx-device-detector";
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile: any;
  instagramIcon = faInstagram;
  twitterIcon = faTwitter;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  
  constructor(private deviceService: DeviceDetectorService) { 
    this.isMobile = this.deviceService.isMobile();
  }

  ngOnInit(): void {
  }

}
