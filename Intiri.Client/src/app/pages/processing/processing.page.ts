import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { VippsAccessTokenRequestDTO } from 'src/app/DTOs/vipps-access-token.dto';
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
    const redirectUri = location.origin + location.pathname;

    const accessTokenRequestData = new VippsAccessTokenRequestDTO(
      code,
      state,
      scope,
      redirectUri
    );

    const hasUserGivenConsent = this.hasUserGivenConsent(this.queryParams);
    if (hasUserGivenConsent) {
      const stateObj = JSON.parse(state);
      this.account.finalizeVippsLogin(accessTokenRequestData).subscribe(
        () => {
          this.router.navigateByUrl(stateObj.returnUri);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.errorMsg = this.queryParams.get('error_description');
      this.router.navigateByUrl('/login');
    }
  }

  getQueryParams(): ParamMap {
    return this.route.snapshot.queryParamMap;
  }

  hasUserGivenConsent(queryParams: ParamMap): boolean {
    let consent = false;
    if (!queryParams.has('error')) {
      consent = true;
    }
    return consent;
  }
}
