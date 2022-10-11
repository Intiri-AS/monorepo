import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-img-section',
  templateUrl: './profile-img-section.component.html',
  styleUrls: ['./profile-img-section.component.scss'],
})
export class ProfileImgSectionComponent implements OnInit {

  @Input() image = null;

  apiUrl = environment.apiUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient
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
      const formData = new FormData();
      formData.append('photoPath', event.target.files[0]);
      this.http.post(this.apiUrl + 'users/addPhoto', formData).subscribe(res => {
        console.log(res);
      })
    } else {
      this.image = null;
    }
  }

}
