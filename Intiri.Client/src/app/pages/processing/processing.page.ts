import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AccessTokenRequestDTO } from 'src/app/DTO/vipps-types';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing.page.html',
  styleUrls: ['./processing.page.scss'],
})
export class ProcessingPage implements OnInit {
  errorMsg: string;
  private queryParams: ParamMap;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private account: AccountService
  ) {}

  ngOnInit() {
    this.queryParams = this.getQueryParams();
    const code = this.queryParams.get('code');
    const state = this.queryParams.get('state');
    const scope = this.queryParams.get('scope');
    const redirectUri = this.queryParams.get('redirectUri');
    console.log('redirectUri', redirectUri);

    let a = new AccessTokenRequestDTO();
    a.authorizationCode = code;
    a.state = state;
    a.scope = scope;
    a.redirectUri = 'http://localhost:8100/my-intiry';
    console.log(code);

    const hasUserGivenConsent = this.hasUserGivenConsent(this.queryParams);
    if (hasUserGivenConsent) {
      console.log(a);
      this.account.finalizeVippsLogin(a);
    } else {
      this.errorMsg = this.queryParams.get('error_description');
      this.router.navigateByUrl('/login');
    }
  }

  getQueryParams(): ParamMap {
    return this.route.snapshot.queryParamMap;
  }

  hasUserGivenConsent(queryParams: ParamMap): boolean {
    let isConsentGiven = false;

    if (!queryParams.has('error')) {
      isConsentGiven = true;
    }
    return isConsentGiven;
  }
}
