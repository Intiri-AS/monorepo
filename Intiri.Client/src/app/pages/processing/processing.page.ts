import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing.page.html',
  styleUrls: ['./processing.page.scss']
})

export class ProcessingPage implements OnInit {
  errorMsg: string;
  private queryParams: ParamMap;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.queryParams = this.getQueryParams();
    const hasUserGivenConsent = this.hasUserGivenConsent(this.queryParams);
    if (hasUserGivenConsent)
    {
      // call api for token endpoint
    }
    else {
      this.errorMsg = this.queryParams.get('error_description');
      this.router.navigateByUrl('/login');
    }
  }

  getQueryParams(): ParamMap {
    return this.route.snapshot.queryParamMap;
  }

  hasUserGivenConsent(queryParams: ParamMap): boolean {
    let isConsentGiven = false;

    if ( !queryParams.has('error')) {
      isConsentGiven = true;
    }
    return isConsentGiven;
  }

}
