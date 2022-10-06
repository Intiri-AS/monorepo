import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-img-section',
  templateUrl: './profile-img-section.component.html',
  styleUrls: ['./profile-img-section.component.scss'],
})
export class ProfileImgSectionComponent implements OnInit {

  @Input() image = null;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {}

  openFile() {
    document.querySelector('input').click();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.image = event.target.files[0];
      this.image = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
      // call API for image upload
    } else {
      this.image = null;
    }
  }

}
