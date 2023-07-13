import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(d: any): string {
    //Created date
    let date = new Date(d);

    // Convert current date to UTC
    let now = new Date();
    let currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    let year = currentDate.getFullYear() - date.getFullYear();
    let month = currentDate.getMonth() - date.getMonth();
    let day = currentDate.getDate() - date.getDate();
    let hour = currentDate.getHours() - date.getHours();
    let minute = currentDate.getMinutes() - date.getMinutes();
    let second = currentDate.getSeconds() - date.getSeconds();

    let createdSecond = (year * 31556926) + (month * 2629746) + (day * 86400) + (hour * 3600) + (minute * 60) + second;

    if (createdSecond >= 31556926) {
      let yearAgo = Math.floor(createdSecond / 31556926);
      return yearAgo > 1 ? yearAgo + this.translate.instant('TIME.years') : yearAgo + this.translate.instant('TIME.year');
    } else if (createdSecond >= 2629746) {
      let monthAgo = Math.floor(createdSecond / 2629746);
      return monthAgo > 1 ? monthAgo + this.translate.instant('TIME.months') : monthAgo + this.translate.instant('TIME.month');
    } else if (createdSecond >= 86400) {
      let dayAgo = Math.floor(createdSecond / 86400);
      return dayAgo > 1 ? dayAgo + this.translate.instant('TIME.days') : dayAgo + this.translate.instant('TIME.day');
    } else if (createdSecond >= 3600) {
      let hourAgo = Math.floor(createdSecond / 3600);
      return hourAgo > 1 ? hourAgo + this.translate.instant('TIME.hours') : hourAgo + this.translate.instant('TIME.hour');
    } else if (createdSecond >= 60) {
      let minuteAgo = Math.floor(createdSecond / 60);
      return minuteAgo > 1 ? minuteAgo + this.translate.instant('TIME.minutes') : minuteAgo + this.translate.instant('TIME.minute');
    } else if (createdSecond < 0) {
      return "Just now";
    } else if (createdSecond < 60) {
      return createdSecond > 1 ? createdSecond + this.translate.instant('TIME.seconds') : createdSecond + this.translate.instant('TIME.second');
    }
  }
}
