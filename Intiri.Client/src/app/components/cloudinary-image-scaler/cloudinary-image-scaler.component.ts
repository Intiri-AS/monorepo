import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
} from '@angular/core';
import { Effect } from '@cloudinary/url-gen/actions';
import { format } from '@cloudinary/url-gen/actions/delivery';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Format, Quality } from '@cloudinary/url-gen/qualifiers';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { CloudinaryService } from 'src/app/services/cloudinary.service';

@Component({
  selector: 'app-cloudinary-image-scaler',
  template: `
    <div [ngStyle]="divStyle">
      <img
        *ngIf="src"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"
        [ngStyle]="imgStyle"
      />
    </div>
  `,
  styles: [
    `
      div {
        overflow: hidden;
        height: 100%;
        width: 100%;
        transition: all 0.5s;

        & {
          overflow: hidden;
        }
      }
    `,
    `
      img {
        background: url(http://i.imgur.com/0BBsCUB.gif) no-repeat center;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: relative;
      }
    `,
  ],
  providers: [CloudinaryService],
})
export class CloudinaryImageScalerComponent
  implements OnInit, OnChanges, AfterContentChecked
{
  // Non-optional props
  @Input() publicId: string;

  // Optional props
  // srcString is used to get the cloudinary cloud if the image could be hosted on a different cloud
  @Input() srcString: string;
  // @Input() class: string;
  @Input() alt: string;
  @Input() stepSizeHeight = 200;
  @Input() stepSizeWidth = 200;

  @Input() borderRadius = '0px';

  src: string;

  imgStyle: { [key: string]: string } = {};
  divStyle: { [key: string]: string } = {};

  hasCheckedDimensions = false;

  cloudRegex = /https:\/\/res\.cloudinary\.com\/(.*)\/image\/upload/;
  cloud: string;

  constructor(private el: ElementRef, public cloudinary: CloudinaryService) {}

  @HostListener('window:resize')
  onResize() {
    this.updateSrcSet('[onResize]');
  }

  ngOnInit(): void {
    if (this.srcString) {
      const matches = this.srcString.match(this.cloudRegex);
      // The first match should be the entire url up to /upload/ including the cloud which is in a capture group
      if (matches.length >= 2) {
        this.cloud = matches[1];
      }
    }

    this.divStyle['border-radius'] = this.borderRadius;

    // this.src = this.cloudinary
    //   .mapIdToCloudinaryImage(this.publicId)
    //   .effect(Effect.blur(2000))
    //   .quality(Quality.auto())
    //   .delivery(format(Format.auto()))
    //   .toURL();

    // this.imgStyle = {
    //   background: `url(${this.src}) no-repeat center`,
    // };
  }

  ngAfterContentChecked(): void {
    if (
      !this.hasCheckedDimensions &&
      this.el.nativeElement.offsetHeight !== 0 &&
      this.el.nativeElement.offsetWidth !== 0
    ) {
      this.hasCheckedDimensions = true;
      this.updateSrcSet('[afterContentChecked]');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.hasCheckedDimensions &&
      (changes.publicId ||
        changes.stepSizeWidth ||
        changes.stepSizeHeight ||
        changes.class)
    ) {
      this.updateSrcSet('[propChange]');
    }
    if (
      changes.borderRadius
    ) {
      this.divStyle['border-radius'] = this.borderRadius;
    }
  }

  private dimensionsToImageDimensions(
    height: number,
    width: number
  ): { imgHeight: number; imgWidth: number } {
    const rounder = (num: number, stepSize: number) =>
      Math.ceil(num / stepSize) * stepSize;

    return {
      imgHeight: rounder(height, this.stepSizeHeight),
      imgWidth: rounder(width, this.stepSizeWidth),
    };
  }

  private updateSrcSet(source: string = '') {
    const { offsetHeight: height, offsetWidth: width } = this.el.nativeElement;

    // TODO: Generate a good src

    const { imgHeight, imgWidth } = this.dimensionsToImageDimensions(
      height,
      width
    );

    const calculatedSrc = this.cloudinary
      .mapIdToCloudinaryImage(this.publicId)
      .quality(Quality.auto())
      .resize(fill().height(imgHeight).width(imgWidth).gravity(autoGravity()))
      .toURL();

    if (this.src !== calculatedSrc) {
      console.log(
        source,
        'Generated new src:',
        { height, width },
        { imgHeight, imgWidth },
        calculatedSrc
      );

      this.src = calculatedSrc;

      this.imgStyle = {
        background: `url(${this.src}) no-repeat center`,
      };
    }
  }
}
