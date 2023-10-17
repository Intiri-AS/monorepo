import { Injectable } from '@angular/core';
import { lazyload, placeholder, responsive } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill, imaggaCrop } from '@cloudinary/url-gen/actions/resize';
import { autoGravity, focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  cloudinaryInstance = new Cloudinary({
    cloud: {
      cloudName: environment.cloudinaryCloud,
    },
  });

  // Not really sure if lazyload is necessary
  plugins = [responsive({ steps: 200 }), placeholder({ mode: 'blur' })];

  constructor() {}

  mapIdToCloudinaryImage(
    publicId: string,
    cloudName?: string
  ): CloudinaryImage {
    if (cloudName) {
      return new Cloudinary({
        cloud: {
          cloudName,
        },
      }).image(publicId);
    }
    return this.cloudinaryInstance.image(publicId);
  }

  generateImgSrcSet(publicId: string, cloudName?: string): string {
    return [
      `${this.mapIdToCloudinaryImage(publicId, cloudName)
        .resize(fill().height(250).width(200).gravity(autoGravity()))
        .toURL()} 200w`,
      `${this.mapIdToCloudinaryImage(publicId, cloudName)
        .resize(fill().height(250).width(400).gravity(autoGravity()))
        .toURL()} 400w`,
      `${this.mapIdToCloudinaryImage(publicId, cloudName)
        .resize(fill().height(250).width(600).gravity(autoGravity()))
        .toURL()} 600w`,
      `${this.mapIdToCloudinaryImage(publicId, cloudName)
        .resize(fill().height(250).width(800).gravity(autoGravity()))
        .toURL()} 800w`,
    ].join(', ');
  }

  generateImgSizes(): string {
    return '(max-width: 200px) 200px, auto';
    return '(max-width: 200px) 200px, (max-width: 400px) 400px, (max-width: 600px) 600px';
  }

  generateImgSrc(publicId: string, cloudName: string): string {
    return this.mapIdToCloudinaryImage(publicId, cloudName).toURL();
  }
}
