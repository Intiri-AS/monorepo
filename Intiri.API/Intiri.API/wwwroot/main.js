(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 56820:
/*!**********************************************!*\
  !*** ./src/app/DTOs/Out/register-out.dto.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterOutDTO": () => (/* binding */ RegisterOutDTO)
/* harmony export */ });
class RegisterOutDTO {
    constructor(firstName, lastName, countryCode, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryCode = countryCode;
        this.phoneNumber = phoneNumber;
    }
}


/***/ }),

/***/ 79232:
/*!**********************************************!*\
  !*** ./src/app/DTOs/sms-verification.dto.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsVerificationDTO": () => (/* binding */ SmsVerificationDTO)
/* harmony export */ });
class SmsVerificationDTO {
    constructor(countryCode, phoneNumber, verificationCode) {
        this.countryCode = countryCode;
        this.phoneNumber = phoneNumber;
        this.verificationCode = verificationCode;
    }
}


/***/ }),

/***/ 10986:
/*!************************************************!*\
  !*** ./src/app/DTOs/vipps-access-token.dto.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VippsAccessTokenRequestDTO": () => (/* binding */ VippsAccessTokenRequestDTO)
/* harmony export */ });
class VippsAccessTokenRequestDTO {
    constructor(authorizationCode, state, scope, redirectUri) {
        this.authorizationCode = authorizationCode;
        this.state = state;
        this.scope = scope;
        this.redirectUri = redirectUri;
    }
}


/***/ }),

/***/ 89439:
/*!********************************************!*\
  !*** ./src/app/DTOs/vipps-auth-url.dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VippsAuthUrlRequestDTO": () => (/* binding */ VippsAuthUrlRequestDTO)
/* harmony export */ });
class VippsAuthUrlRequestDTO {
    constructor(redirectUri, state) {
        this.redirectUri = redirectUri;
        this.state = state;
    }
}


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 47425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 60899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin-pages/consultations/consultations.page */ 87984);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 65731);
/* harmony import */ var _pages_admin_pages_style_style_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin-pages/style/style.page */ 76774);
/* harmony import */ var _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer/book-designer.page */ 85436);
/* harmony import */ var _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/end-user-pages/contact-designer/contact-designer.page */ 87396);
/* harmony import */ var _pages_end_user_pages_inspirations_inspirations_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/end-user-pages/inspirations/inspirations.page */ 86705);
/* harmony import */ var _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/end-user-pages/customize-moodboard/customize-moodboard.page */ 81505);
/* harmony import */ var _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/end-user-pages/my-intiri/my-intiri.page */ 98277);
/* harmony import */ var _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/end-user-pages/new-project/new-project.page */ 33735);
/* harmony import */ var _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/end-user-pages/pre-book-selection/pre-book-selection.page */ 93577);
/* harmony import */ var _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.page */ 58032);
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/landing/landing.page */ 84808);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/profile/profile.page */ 64629);
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/register.page */ 66690);
/* harmony import */ var _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.page */ 22032);
/* harmony import */ var _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/reset-password/reset.password.page */ 55250);
/* harmony import */ var _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/sms-verification/sms-verification.page */ 40970);
/* harmony import */ var _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/end-user-pages/pricing-plans/pricing-plans.page */ 99320);
/* harmony import */ var _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/end-user-pages/project-details/project-details.page */ 97807);
/* harmony import */ var _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/end-user-pages/moodboard-details/moodboard-details.page */ 18974);
/* harmony import */ var _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/end-user-pages/messenger/messenger.page */ 43947);
/* harmony import */ var _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/end-user-pages/designer-profile/designer-profile.page */ 99783);
/* harmony import */ var _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer-profile/book-designer-profile.page */ 21525);
/* harmony import */ var _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/designer-pages/internal-designer/clients/client-list/client-list.page */ 3767);
/* harmony import */ var _pages_designer_pages_client_request_client_request_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/designer-pages/client-request/client-request.page */ 95217);
/* harmony import */ var _pages_admin_pages_moodboards_moodboards_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/admin-pages/moodboards/moodboards.page */ 15453);
/* harmony import */ var _pages_admin_pages_client_client_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/admin-pages/client/client.page */ 98284);
/* harmony import */ var _pages_processing_processing_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/processing/processing.page */ 59096);
/* harmony import */ var _pages_admin_pages_add_moodboard_add_moodboard_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/admin-pages/add-moodboard/add-moodboard.page */ 63832);
/* harmony import */ var _pages_partner_pages_partner_products_partner_products_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/partner-pages/partner-products/partner-products.page */ 38785);
/* harmony import */ var _pages_partner_pages_partner_profile_partner_profile_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/partner-pages/partner-profile/partner-profile.page */ 23851);
/* harmony import */ var _pages_admin_pages_add_partner_add_partner_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/admin-pages/add-partner/add-partner.page */ 46366);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/project.service */ 354);
/* harmony import */ var _services_moodboard_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/moodboard.service */ 60608);
/* harmony import */ var _guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./guards/enduser.guard */ 30592);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./guards/admin.guard */ 31896);
/* harmony import */ var _guards_designer_guard__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./guards/designer.guard */ 5658);
/* harmony import */ var _guards_shared_guard__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./guards/shared.guard */ 25377);
/* harmony import */ var _guards_partner_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./guards/partner.guard */ 96923);
/* harmony import */ var _services_partner_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/partner.service */ 30220);
/* harmony import */ var _services_designer_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/designer.service */ 57492);
















































const routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_14__.LandingPage
    },
    {
        path: 'login',
        component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_15__.LoginPage
    },
    {
        path: 'register',
        component: _pages_register_register_page__WEBPACK_IMPORTED_MODULE_17__.RegisterPage
    },
    {
        path: 'forgot-password',
        component: _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_18__.ForgotPasswordPage
    },
    {
        path: 'reset-password',
        component: _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_19__.ResetPasswordPage
    },
    {
        path: 'sms-verification',
        component: _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_20__.SmsVerificationPage
    },
    {
        path: 'how-it-works',
        component: _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_13__.HowItWorksPage
    },
    {
        path: 'processing',
        component: _pages_processing_processing_page__WEBPACK_IMPORTED_MODULE_31__.ProcessingPage
    },
    {
        path: 'profile',
        component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_16__.ProfilePage,
        canActivate: [_guards_shared_guard__WEBPACK_IMPORTED_MODULE_41__.SharedGuard]
    },
    {
        path: 'book-designer',
        component: _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_6__.BookDesignerPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'designer-profile/:id',
        resolve: { designer: _services_designer_service__WEBPACK_IMPORTED_MODULE_44__.DesignerService },
        component: _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_25__.DesignerProfilePage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    // {
    //   path: 'payment-details', //TODO Set up page guard (end-user guard)
    //   component: PaymentDetailsPage
    // },
    {
        path: 'book-designer-profile',
        component: _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_26__.BookDesignerProfilePage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'my-inspirations',
        component: _pages_end_user_pages_inspirations_inspirations_page__WEBPACK_IMPORTED_MODULE_8__.InspirationsPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'pricing-plans',
        component: _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_21__.PricingPlansPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'messenger',
        component: _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_24__.MessengerPage,
        canActivate: [_guards_shared_guard__WEBPACK_IMPORTED_MODULE_41__.SharedGuard]
    },
    {
        path: 'customize-moodboard',
        component: _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_9__.CustomizeMoodboardPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'my-intiri',
        component: _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_10__.MyIntiriPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'project-details',
        component: _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_22__.ProjectDetailsPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'moodboard-details',
        component: _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_23__.MoodboardDetailsPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'contact-designer/:id',
        component: _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_7__.ContactDesignerPage,
        resolve: { moodboard: _services_moodboard_service__WEBPACK_IMPORTED_MODULE_37__.MoodboardService },
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'project-details/:projectId/moodboard-details/:id',
        component: _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_23__.MoodboardDetailsPage,
        resolve: { moodboard: _services_moodboard_service__WEBPACK_IMPORTED_MODULE_37__.MoodboardService },
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'edit-moodboard/:id/project/:projectId',
        component: _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_9__.CustomizeMoodboardPage,
        resolve: { moodboard: _services_moodboard_service__WEBPACK_IMPORTED_MODULE_37__.MoodboardService },
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'project-details/:id',
        component: _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_22__.ProjectDetailsPage,
        resolve: { project: _services_project_service__WEBPACK_IMPORTED_MODULE_36__.ProjectService },
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'partner-profile/:id',
        component: _pages_admin_pages_add_partner_add_partner_page__WEBPACK_IMPORTED_MODULE_35__.AddPartnerPage,
        resolve: { partner: _services_partner_service__WEBPACK_IMPORTED_MODULE_43__.PartnerService },
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'new-project',
        component: _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_11__.NewProjectPage
    },
    {
        path: 'pre-book-selection',
        component: _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_12__.PreBookSelectionPage,
        canActivate: [_guards_enduser_guard__WEBPACK_IMPORTED_MODULE_38__.EnduserGuard]
    },
    {
        path: 'dashboard',
        component: _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'consultations',
        component: _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_3__.ConsultationsPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'designers',
        component: _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_1__.DesignerPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'partners',
        component: _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_2__.VendorPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'moodboards',
        component: _pages_admin_pages_moodboards_moodboards_page__WEBPACK_IMPORTED_MODULE_29__.MoodboardsPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'clients',
        component: _pages_admin_pages_client_client_page__WEBPACK_IMPORTED_MODULE_30__.ClientPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'add-moodboard',
        component: _pages_admin_pages_add_moodboard_add_moodboard_page__WEBPACK_IMPORTED_MODULE_32__.AddMoodboardPage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'style',
        component: _pages_admin_pages_style_style_page__WEBPACK_IMPORTED_MODULE_5__.StylePage,
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_39__.AdminGuard]
    },
    {
        path: 'my-moodboard',
        component: _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_4__.MyMoodboardPage
    },
    {
        path: 'client-list',
        component: _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_27__.ClientListPage,
        canActivate: [_guards_designer_guard__WEBPACK_IMPORTED_MODULE_40__.DesignerGuard]
    },
    {
        path: 'client-request',
        component: _pages_designer_pages_client_request_client_request_page__WEBPACK_IMPORTED_MODULE_28__.ClientRequestPage
    },
    // {
    //   path: 'style-list', //TODO Set up page guard (internal designer guard)
    //   component: StyleListPage
    // },
    {
        path: 'partner',
        component: _pages_partner_pages_partner_products_partner_products_page__WEBPACK_IMPORTED_MODULE_33__.PartnerProductsPage,
        canActivate: [_guards_partner_guard__WEBPACK_IMPORTED_MODULE_42__.PartnerGuard]
    },
    {
        path: 'partner/profile',
        component: _pages_partner_pages_partner_profile_partner_profile_page__WEBPACK_IMPORTED_MODULE_34__.PartnerProfilePage,
        canActivate: [_guards_partner_guard__WEBPACK_IMPORTED_MODULE_42__.PartnerGuard]
    }
    //TODO Add routes for client pages, after discussion
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_45__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_46__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_47__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_47__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_47__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/account.service */ 89876);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language.service */ 71155);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/project.service */ 354);









let AppComponent = class AppComponent {
  constructor(accountService, projectService, languageService, storage) {
    this.accountService = accountService;
    this.projectService = projectService;
    this.languageService = languageService;
    this.storage = storage;
    this.initStorage();
  }

  initStorage() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();
    })();
  }

  ngOnInit() {
    this.setCurrentUser();
    this.setCurrentProject();
    this.languageService.setInitialAppLanguage();
  }

  setCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.accountService.setCurrentUser(user);
    } else {
      this.accountService.setCurrentUser(null);
    }
  }

  setCurrentProject() {
    const project = JSON.parse(sessionStorage.getItem('project'));
    this.projectService.setCurrentProject(project);
  }

};

AppComponent.ctorParameters = () => [{
  type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__.ProjectService
}, {
  type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "ApplicationInitializerFactory": () => (/* binding */ ApplicationInitializerFactory),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.page */ 84808);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.page */ 66690);
/* harmony import */ var _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.page */ 58032);
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.page */ 64629);
/* harmony import */ var _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.page */ 22032);
/* harmony import */ var _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset-password/reset.password.page */ 55250);
/* harmony import */ var _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sms-verification/sms-verification.page */ 40970);
/* harmony import */ var _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/end-user-pages/new-project/new-project.page */ 33735);
/* harmony import */ var _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/end-user-pages/pre-book-selection/pre-book-selection.page */ 93577);
/* harmony import */ var _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/end-user-pages/my-intiri/my-intiri.page */ 98277);
/* harmony import */ var _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/end-user-pages/customize-moodboard/customize-moodboard.page */ 81505);
/* harmony import */ var _pages_end_user_pages_inspirations_inspirations_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/end-user-pages/inspirations/inspirations.page */ 86705);
/* harmony import */ var _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/end-user-pages/contact-designer/contact-designer.page */ 87396);
/* harmony import */ var _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer/book-designer.page */ 85436);
/* harmony import */ var _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/end-user-pages/pricing-plans/pricing-plans.page */ 99320);
/* harmony import */ var _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/end-user-pages/project-details/project-details.page */ 97807);
/* harmony import */ var _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/end-user-pages/moodboard-details/moodboard-details.page */ 18974);
/* harmony import */ var _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/end-user-pages/messenger/messenger.page */ 43947);
/* harmony import */ var _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/end-user-pages/designer-profile/designer-profile.page */ 99783);
/* harmony import */ var _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/end-user-pages/payment-details/payment-details.page */ 15643);
/* harmony import */ var _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer-profile/book-designer-profile.page */ 21525);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 47425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 60899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/admin-pages/consultations/consultations.page */ 87984);
/* harmony import */ var _pages_admin_pages_moodboards_moodboards_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/admin-pages/moodboards/moodboards.page */ 15453);
/* harmony import */ var _pages_admin_pages_client_client_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/admin-pages/client/client.page */ 98284);
/* harmony import */ var _pages_admin_pages_style_style_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/admin-pages/style/style.page */ 76774);
/* harmony import */ var _pages_admin_pages_add_moodboard_add_moodboard_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/admin-pages/add-moodboard/add-moodboard.page */ 63832);
/* harmony import */ var _pages_admin_pages_add_partner_add_partner_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/admin-pages/add-partner/add-partner.page */ 46366);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 65731);
/* harmony import */ var _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/designer-pages/internal-designer/clients/client-list/client-list.page */ 3767);
/* harmony import */ var _pages_designer_pages_internal_designer_styles_style_list_style_list_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/designer-pages/internal-designer/styles/style-list/style-list.page */ 92965);
/* harmony import */ var _pages_designer_pages_client_request_client_request_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/designer-pages/client-request/client-request.page */ 95217);
/* harmony import */ var _pages_partner_pages_partner_products_partner_products_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/partner-pages/partner-products/partner-products.page */ 38785);
/* harmony import */ var _pages_partner_pages_partner_profile_partner_profile_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/partner-pages/partner-profile/partner-profile.page */ 23851);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/header/header.component */ 43646);
/* harmony import */ var _components_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/header-admin/header-admin.component */ 65263);
/* harmony import */ var _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/header-landing/header-landing.component */ 48021);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/footer/footer.component */ 64662);
/* harmony import */ var _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/step-picker/step-picker.component */ 11014);
/* harmony import */ var _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/new-project-step/new-project-step.component */ 28735);
/* harmony import */ var _components_profile_img_section_profile_img_section_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/profile-img-section/profile-img-section.component */ 64529);
/* harmony import */ var _components_profile_info_section_profile_info_section_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/profile-info-section/profile-info-section.component */ 4091);
/* harmony import */ var _components_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/sub-header/sub-header.component */ 99052);
/* harmony import */ var _components_header_partner_header_partner_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/header-partner/header-partner.component */ 95044);
/* harmony import */ var _components_header_internal_designer_header_internal_designer_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/header-internal-designer/header-internal-designer.component */ 53597);
/* harmony import */ var _components_admin_partners_admin_partners_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/admin-partners/admin-partners.component */ 33925);
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ 39400);
/* harmony import */ var _components_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/admin-clients/admin-clients.component */ 94949);
/* harmony import */ var _components_admin_inspiration_admin_inspiration_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/admin-inspiration/admin-inspiration.component */ 77869);
/* harmony import */ var _components_admin_styles_admin_styles_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/admin-styles/admin-styles.component */ 54179);
/* harmony import */ var _components_admin_materials_admin_materials_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/admin-materials/admin-materials.component */ 71259);
/* harmony import */ var _components_admin_rooms_admin_rooms_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/admin-rooms/admin-rooms.component */ 40102);
/* harmony import */ var _components_admin_colors_admin_colors_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/admin-colors/admin-colors.component */ 46775);
/* harmony import */ var _components_admin_pictures_admin_pictures_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/admin-pictures/admin-pictures.component */ 62819);
/* harmony import */ var _components_add_moodboard_step_add_moodboard_step_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/add-moodboard-step/add-moodboard-step.component */ 11226);
/* harmony import */ var _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/modals/login/login-modal.component */ 6974);
/* harmony import */ var _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/modals/logout-modal/logout-modal.component */ 17147);
/* harmony import */ var _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/modals/create-project-modal/create-project-modal.component */ 60390);
/* harmony import */ var _components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/modals/add-designer-modal/add-designer-modal.component */ 2736);
/* harmony import */ var _components_modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/modals/add-partner-modal/add-partner-modal.component */ 3603);
/* harmony import */ var _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/modals/book-designer-modal/book-designer-modal.component */ 52064);
/* harmony import */ var _components_settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/settings-popover/settings-popover.component */ 96925);
/* harmony import */ var _components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/menu-popover/menu-popover.component */ 55506);
/* harmony import */ var _components_modals_add_style_modal_add_style_modal_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/modals/add-style-modal/add-style-modal.component */ 56444);
/* harmony import */ var _components_popovers_language_popover_language_popover_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/popovers/language-popover/language-popover.component */ 38649);
/* harmony import */ var _components_modals_share_rate_modals_rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/modals/share-rate-modals/rate-modal/rate-modal.component */ 42736);
/* harmony import */ var _components_modals_share_rate_modals_rate_successful_modal_rate_successful_modal_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/modals/share-rate-modals/rate-successful-modal/rate-successful-modal.component */ 58509);
/* harmony import */ var _components_modals_share_rate_modals_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/modals/share-rate-modals/share-modal/share-modal.component */ 5402);
/* harmony import */ var _components_modals_share_rate_modals_share_successful_modal_share_successful_modal_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/modals/share-rate-modals/share-successful-modal/share-successful-modal.component */ 19904);
/* harmony import */ var _components_modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/modals/add-materials-modal/add-materials-modal.component */ 41332);
/* harmony import */ var _components_modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/modals/add-room-modal/add-room-modal.component */ 78563);
/* harmony import */ var _components_modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/modals/add-color-modal/add-color-modal.component */ 14531);
/* harmony import */ var _components_modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/modals/add-picture-modal/add-picture-modal.component */ 70818);
/* harmony import */ var _components_modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/modals/add-product-modal/add-product-modal.component */ 71681);
/* harmony import */ var _components_modals_delete_moodboard_modal_delete_moodboard_modal_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/modals/delete-moodboard-modal/delete-moodboard-modal.component */ 83026);
/* harmony import */ var _components_moodboard_details_moodboard_details_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/moodboard-details/moodboard-details.component */ 31326);
/* harmony import */ var _components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/modals/open-file-modal/open-file-modal.component */ 39582);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! angular-code-input */ 83891);
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./pipes/time-ago.pipe */ 22541);
/* harmony import */ var _components_popovers_style_popover_style_popover_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/popovers/style-popover/style-popover.component */ 94058);
/* harmony import */ var _pages_processing_processing_page__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./pages/processing/processing.page */ 59096);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 53543);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ngx-color-picker */ 60743);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _components_modals_sms_verification_modal_sms_verification_modal_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./components/modals/sms-verification-modal/sms-verification-modal.component */ 41686);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @angular/common */ 94666);










 //pages for all users








 //pages for end-users














 //pages for admins









 //pages for designers




 //pages for partners


 //app components





















 //app modals






















 //plugins










 // search module





function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_89__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_90__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_91__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_3__.LandingPage, _pages_login_login_page__WEBPACK_IMPORTED_MODULE_4__.LoginPage, _pages_register_register_page__WEBPACK_IMPORTED_MODULE_5__.RegisterPage, _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_6__.HowItWorksPage, _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__.ProfilePage, _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_8__.ForgotPasswordPage, _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_9__.ResetPasswordPage, _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_10__.SmsVerificationPage, _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_11__.NewProjectPage, _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_12__.PreBookSelectionPage, _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_13__.MyIntiriPage, _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_14__.CustomizeMoodboardPage, _pages_end_user_pages_inspirations_inspirations_page__WEBPACK_IMPORTED_MODULE_15__.InspirationsPage, _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_16__.ContactDesignerPage, _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_17__.BookDesignerPage, _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_19__.ProjectDetailsPage, _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_20__.MoodboardDetailsPage, _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_18__.PricingPlansPage, _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_21__.MessengerPage, _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_22__.DesignerProfilePage, _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_23__.PaymentDetailsPage, _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_25__.DashboardPage, _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_26__.DesignerPage, _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_27__.VendorPage, _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_24__.BookDesignerProfilePage, _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_28__.ConsultationsPage, _pages_admin_pages_client_client_page__WEBPACK_IMPORTED_MODULE_30__.ClientPage, _pages_admin_pages_moodboards_moodboards_page__WEBPACK_IMPORTED_MODULE_29__.MoodboardsPage, _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_34__.MyMoodboardPage, _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_35__.ClientListPage, _pages_designer_pages_internal_designer_styles_style_list_style_list_page__WEBPACK_IMPORTED_MODULE_36__.StyleListPage, _pages_designer_pages_client_request_client_request_page__WEBPACK_IMPORTED_MODULE_37__.ClientRequestPage, _pages_admin_pages_style_style_page__WEBPACK_IMPORTED_MODULE_31__.StylePage, _pages_admin_pages_add_moodboard_add_moodboard_page__WEBPACK_IMPORTED_MODULE_32__.AddMoodboardPage, _pages_admin_pages_add_partner_add_partner_page__WEBPACK_IMPORTED_MODULE_33__.AddPartnerPage, _pages_partner_pages_partner_products_partner_products_page__WEBPACK_IMPORTED_MODULE_38__.PartnerProductsPage, _pages_partner_pages_partner_profile_partner_profile_page__WEBPACK_IMPORTED_MODULE_39__.PartnerProfilePage, _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_42__.HeaderLandingComponent, _components_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_41__.HeaderAdminComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_40__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_43__.FooterComponent, _components_header_internal_designer_header_internal_designer_component__WEBPACK_IMPORTED_MODULE_50__.HeaderInternalDesignerComponents, _components_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_48__.SubHeaderComponent, _components_header_partner_header_partner_component__WEBPACK_IMPORTED_MODULE_49__.HeaderPartnerComponent, _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_45__.NewProjectStepComponent, _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_44__.StepPickerComponent, _components_add_moodboard_step_add_moodboard_step_component__WEBPACK_IMPORTED_MODULE_60__.AddMoodboardStepComponent, _components_moodboard_details_moodboard_details_component__WEBPACK_IMPORTED_MODULE_81__.MoodboardDetailsComponent, _components_profile_img_section_profile_img_section_component__WEBPACK_IMPORTED_MODULE_46__.ProfileImgSectionComponent, _components_profile_info_section_profile_info_section_component__WEBPACK_IMPORTED_MODULE_47__.ProfileInfoSectionComponent, _components_admin_partners_admin_partners_component__WEBPACK_IMPORTED_MODULE_51__.AdminPartnersComponent, _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_52__.AdminProductsComponent, _components_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_53__.AdminClientsComponent, _components_admin_inspiration_admin_inspiration_component__WEBPACK_IMPORTED_MODULE_54__.AdminInspirationComponent, _components_admin_styles_admin_styles_component__WEBPACK_IMPORTED_MODULE_55__.AdminStylesComponent, _components_admin_materials_admin_materials_component__WEBPACK_IMPORTED_MODULE_56__.AdminMaterialsComponent, _components_admin_rooms_admin_rooms_component__WEBPACK_IMPORTED_MODULE_57__.AdminRoomsComponent, _components_admin_colors_admin_colors_component__WEBPACK_IMPORTED_MODULE_58__.AdminColorsComponent, _components_admin_pictures_admin_pictures_component__WEBPACK_IMPORTED_MODULE_59__.AdminPicturesComponent, _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_61__.LoginModalComponent, _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_62__.LogoutModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_63__.CreateProjectModalComponent, _components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_64__.AddDesignerModalComponent, _components_modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_65__.AddPartnerModalComponent, _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_66__.BookDesignerModalComponent, _components_settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_67__.SettingsPopoverComponent, _components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_68__.MenuPopoverComponent, _components_popovers_style_popover_style_popover_component__WEBPACK_IMPORTED_MODULE_84__.StylePopoverComponent, _components_modals_add_style_modal_add_style_modal_component__WEBPACK_IMPORTED_MODULE_69__.AddStyleModalComponent, _components_popovers_language_popover_language_popover_component__WEBPACK_IMPORTED_MODULE_70__.LanguagePopoverComponent, _components_modals_share_rate_modals_rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_71__.RateModalComponent, _components_modals_share_rate_modals_rate_successful_modal_rate_successful_modal_component__WEBPACK_IMPORTED_MODULE_72__.RateSuccessfulModalComponent, _components_modals_share_rate_modals_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_73__.ShareModalComponent, _components_modals_share_rate_modals_share_successful_modal_share_successful_modal_component__WEBPACK_IMPORTED_MODULE_74__.ShareSuccessfulModalComponent, _components_modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_75__.AddMaterialsModalComponent, _components_modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_76__.AddRoomModalComponent, _components_modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_77__.AddColorModalComponent, _components_modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_78__.AddPictureModalComponent, _components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_82__.OpenFileModalComponent, _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_83__.TimeAgoPipe, _pages_processing_processing_page__WEBPACK_IMPORTED_MODULE_85__.ProcessingPage, _components_modals_sms_verification_modal_sms_verification_modal_component__WEBPACK_IMPORTED_MODULE_87__.SmsVerificationModalComponent, _components_modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_79__.AddProductModalComponent, _components_modals_delete_moodboard_modal_delete_moodboard_modal_component__WEBPACK_IMPORTED_MODULE_80__.DeleteMoodboardModalComponent],
  entryComponents: [_components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_61__.LoginModalComponent, _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_62__.LogoutModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_63__.CreateProjectModalComponent, _components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_64__.AddDesignerModalComponent, _components_modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_65__.AddPartnerModalComponent, _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_66__.BookDesignerModalComponent, _components_modals_share_rate_modals_rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_71__.RateModalComponent, _components_modals_share_rate_modals_rate_successful_modal_rate_successful_modal_component__WEBPACK_IMPORTED_MODULE_72__.RateSuccessfulModalComponent, _components_modals_share_rate_modals_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_73__.ShareModalComponent, _components_modals_share_rate_modals_share_successful_modal_share_successful_modal_component__WEBPACK_IMPORTED_MODULE_74__.ShareSuccessfulModalComponent, _components_modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_75__.AddMaterialsModalComponent, _components_modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_76__.AddRoomModalComponent, _components_modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_77__.AddColorModalComponent, _components_modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_78__.AddPictureModalComponent, _components_modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_79__.AddProductModalComponent, _components_modals_delete_moodboard_modal_delete_moodboard_modal_component__WEBPACK_IMPORTED_MODULE_80__.DeleteMoodboardModalComponent, _components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_82__.OpenFileModalComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_92__.BrowserModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_88__.Ng2SearchPipeModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_93__.ColorPickerModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_94__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_95__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_96__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_96__.ReactiveFormsModule, angular_code_input__WEBPACK_IMPORTED_MODULE_97__.CodeInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_98__.CommonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_99__.NgxSpinnerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_100__.BrowserAnimationsModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_101__.IonicStorageModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_102__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_102__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_95__.HttpClient]
    }
  }), angular_notifier__WEBPACK_IMPORTED_MODULE_103__.NotifierModule.withConfig({
    position: {
      horizontal: {
        distance: 30
      },
      vertical: {
        distance: 30
      }
    }
  })],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_91__.CUSTOM_ELEMENTS_SCHEMA],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_98__.DatePipe, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_104__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_94__.IonicRouteStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_95__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_86__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_91__.APP_INITIALIZER,
    useFactory: ApplicationInitializerFactory,
    deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_102__.TranslateService, _angular_core__WEBPACK_IMPORTED_MODULE_91__.Injector],
    multi: true
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);
 // AoT requires an exported function for factories

function HttpLoaderFactory(httpClient) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_89__.TranslateHttpLoader(httpClient);
}
function ApplicationInitializerFactory(translate, injector) {
  return /*#__PURE__*/(0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    yield injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_98__.LOCATION_INITIALIZED, Promise.resolve(null));
    const deaultLang = 'no';
    translate.addLangs(['en', 'no']);
    translate.setDefaultLang(deaultLang);

    try {
      yield translate.use(deaultLang).toPromise();
    } catch (err) {
      console.log(err);
    }
  });
}

/***/ }),

/***/ 11226:
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-moodboard-step/add-moodboard-step.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMoodboardStepComponent": () => (/* binding */ AddMoodboardStepComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_moodboard_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-moodboard-step.component.html?ngResource */ 46221);
/* harmony import */ var _add_moodboard_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-moodboard-step.component.scss?ngResource */ 96288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);





let AddMoodboardStepComponent = class AddMoodboardStepComponent {
    constructor() {
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
        this.toggleSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    toggleItem(item) {
        this.toggleSelection.emit(item);
    }
    isArray(item) {
        return Array.isArray(item);
    }
    normalizeSlashes(string) {
        return string.replaceAll("\\", "/");
    }
    isItemSelected(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.moodboard[stepName])) {
            if (this.moodboard[stepName].some(e => JSON.stringify(e) === JSON.stringify(item))) {
                return true;
            }
        }
        else { // else it's a single select
            // if it's updating sub-object
            if (stepName.includes('.')) {
                return JSON.stringify(this.moodboard[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item);
            }
            else {
                return JSON.stringify(this.moodboard[stepName]) === JSON.stringify(item);
            }
        }
        return false;
    }
};
AddMoodboardStepComponent.ctorParameters = () => [];
AddMoodboardStepComponent.propDecorators = {
    currentStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    moodboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    currentStepNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    stepsOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    toggleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
AddMoodboardStepComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-moodboard-step',
        template: _add_moodboard_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_moodboard_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddMoodboardStepComponent);



/***/ }),

/***/ 94949:
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-clients/admin-clients.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminClientsComponent": () => (/* binding */ AdminClientsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_clients_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-clients.component.html?ngResource */ 67417);
/* harmony import */ var _admin_clients_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-clients.component.scss?ngResource */ 1054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);









let AdminClientsComponent = class AdminClientsComponent {
  constructor(modalController, popoverController, userService) {
    this.modalController = modalController;
    this.popoverController = popoverController;
    this.userService = userService;
    this.users$ = this.userService.users$;
  }

  ngOnInit() {
    this.userService.getUsers();
    this.users$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(users => {
      this.users = users;
    });
  }

  showSettings(e, user) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          client: true,
          item: user
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  deleteClient() {
    this.userService.deleteUser(this.item['id']).subscribe(res => {
      this.userService.getUsers();
      this.modalController.dismiss();
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

};

AdminClientsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
}, {
  type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
}];

AdminClientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-clients',
  template: _admin_clients_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_clients_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminClientsComponent);


/***/ }),

/***/ 46775:
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-colors/admin-colors.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminColorsComponent": () => (/* binding */ AdminColorsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_colors_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-colors.component.html?ngResource */ 25659);
/* harmony import */ var _admin_colors_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-colors.component.scss?ngResource */ 88800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/color.service */ 3567);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);
/* harmony import */ var _modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/add-color-modal/add-color-modal.component */ 14531);









let AdminColorsComponent = class AdminColorsComponent {
  constructor(popoverController, modalController, colorService) {
    this.popoverController = popoverController;
    this.modalController = modalController;
    this.colorService = colorService;
    this.colorPalettes$ = this.colorService.colorPalettes$;
  }

  ngOnInit() {
    this.colorService.getColorPalettes();
  }

  showSettings(e, color) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          color: true,
          item: color
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addColor() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddColorModalComponent,
        componentProps: {
          add: true
        },
        cssClass: 'add-color-modal-css'
      });
      yield modal.present();
    })();
  }

};

AdminColorsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_services_color_service__WEBPACK_IMPORTED_MODULE_3__.ColorService
}];

AdminColorsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-colors',
  template: _admin_colors_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_colors_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminColorsComponent);


/***/ }),

/***/ 77869:
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin-inspiration/admin-inspiration.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminInspirationComponent": () => (/* binding */ AdminInspirationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_inspiration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-inspiration.component.html?ngResource */ 72749);
/* harmony import */ var _admin_inspiration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-inspiration.component.scss?ngResource */ 40535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AdminInspirationComponent = class AdminInspirationComponent {
    constructor() { }
    ngOnInit() { }
};
AdminInspirationComponent.ctorParameters = () => [];
AdminInspirationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-inspiration',
        template: _admin_inspiration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_inspiration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminInspirationComponent);



/***/ }),

/***/ 71259:
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-materials/admin-materials.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMaterialsComponent": () => (/* binding */ AdminMaterialsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_materials_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-materials.component.html?ngResource */ 96675);
/* harmony import */ var _admin_materials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-materials.component.scss?ngResource */ 8840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/material.service */ 93985);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);
/* harmony import */ var _modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/add-materials-modal/add-materials-modal.component */ 41332);










let AdminMaterialsComponent = class AdminMaterialsComponent {
  constructor(popoverController, modalController, materialService) {
    this.popoverController = popoverController;
    this.modalController = modalController;
    this.materialService = materialService;
    this.materials$ = this.materialService.materials$;
  }

  ngOnInit() {
    this.materialService.getMaterials();
    this.materialService.getMaterialTypes().subscribe(res => {
      this.materialTypes = res;
    });
    this.materials$.subscribe(materials => {
      this.materials = materials;
    });
  }

  showSettings(e, material) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          material: true,
          item: material
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addMaterials() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddMaterialsModalComponent,
        componentProps: {
          add: true
        },
        cssClass: 'add-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  onFilterChange(event) {
    const selectedTypeNames = event.detail.value;
    this.materials$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(materials => {
      if (selectedTypeNames.length > 0) {
        this.materials = materials.filter(material => selectedTypeNames.includes(material.materialTypeName));
      } else {
        this.materials = materials;
      }
    });
  }

};

AdminMaterialsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_material_service__WEBPACK_IMPORTED_MODULE_3__.MaterialService
}];

AdminMaterialsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-admin-materials',
  template: _admin_materials_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_materials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminMaterialsComponent);


/***/ }),

/***/ 33925:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-partners/admin-partners.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPartnersComponent": () => (/* binding */ AdminPartnersComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_partners_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-partners.component.html?ngResource */ 76687);
/* harmony import */ var _admin_partners_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-partners.component.scss?ngResource */ 93698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);
/* harmony import */ var _modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/add-partner-modal/add-partner-modal.component */ 3603);









let AdminPartnersComponent = class AdminPartnersComponent {
  constructor(modalController, partnerService) {
    this.modalController = modalController;
    this.partnerService = partnerService;
    this.partners$ = this.partnerService.partners$;
  }

  ngOnInit() {
    this.partnerService.getPartners();
    this.partners$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(partners => {
      this.partners = partners;
    });
  }

  addPartner() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddPartnerModalComponent,
        componentProps: {
          nextPage: false
        },
        cssClass: 'add-partner-modal-css'
      });
      yield modal.present();
    })();
  }

};

AdminPartnersComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__.PartnerService
}];

AdminPartnersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-partners',
  template: _admin_partners_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_partners_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminPartnersComponent);


/***/ }),

/***/ 62819:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-pictures/admin-pictures.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPicturesComponent": () => (/* binding */ AdminPicturesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_pictures_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-pictures.component.html?ngResource */ 36996);
/* harmony import */ var _admin_pictures_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-pictures.component.scss?ngResource */ 32731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/style.service */ 63112);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);
/* harmony import */ var _modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/add-picture-modal/add-picture-modal.component */ 70818);









let AdminPicturesComponent = class AdminPicturesComponent {
  constructor(popoverController, styleService, modalController) {
    this.popoverController = popoverController;
    this.styleService = styleService;
    this.modalController = modalController;
    this.styleImages$ = this.styleService.styleImages$;
  }

  ngOnInit() {
    this.styleService.getStyleImages();
  }

  showSettings(e, styleImage) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          picture: true,
          item: styleImage
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addPicture() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddPictureModalComponent,
        componentProps: {
          add: true
        },
        cssClass: 'add-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AdminPicturesComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
}, {
  type: src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__.StyleService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

AdminPicturesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-pictures',
  template: _admin_pictures_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_pictures_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminPicturesComponent);


/***/ }),

/***/ 39400:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-products/admin-products.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProductsComponent": () => (/* binding */ AdminProductsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-products.component.html?ngResource */ 33887);
/* harmony import */ var _admin_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-products.component.scss?ngResource */ 45505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);









let AdminProductsComponent = class AdminProductsComponent {
  constructor(popoverController, partnerService) {
    this.popoverController = popoverController;
    this.partnerService = partnerService;
    this.partners$ = this.partnerService.partners$;
    this.products$ = this.partnerService.products$;
  }

  ngOnInit() {
    this.partnerService.getProductsFromThatPartner();
    this.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(product => {
      this.allProducts = product;
      this.products = product;
    });
    this.partnerService.getPartners();
    this.partnerService.getProductsType().subscribe(res => {
      this.productTypes = res;
    });
  }

  showSettings(e, product) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          product: true,
          item: product
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  onPartnersFilterChange(event) {
    const selectedPartnerNames = event.detail.value;

    if (selectedPartnerNames.length > 0) {
      this.products = this.allProducts.filter(product => selectedPartnerNames.includes(product.partner.name));
    } else {
      this.products = this.allProducts;
    }
  }

  onProductTypeFilterChange(event) {
    const selectedProductTypes = event.detail.value;
    console.log(selectedProductTypes);

    if (selectedProductTypes.length > 0) {
      this.products = this.allProducts.filter(product => selectedProductTypes.includes(product.productType.name));
    } else {
      this.products = this.allProducts;
    }
  }

};

AdminProductsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
}, {
  type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__.PartnerService
}];

AdminProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-products',
  template: _admin_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminProductsComponent);


/***/ }),

/***/ 40102:
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-rooms/admin-rooms.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoomsComponent": () => (/* binding */ AdminRoomsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_rooms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-rooms.component.html?ngResource */ 30779);
/* harmony import */ var _admin_rooms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-rooms.component.scss?ngResource */ 55490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ 51037);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);
/* harmony import */ var _modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/add-room-modal/add-room-modal.component */ 78563);









let AdminRoomsComponent = class AdminRoomsComponent {
  constructor(popoverController, modalController, roomService) {
    this.popoverController = popoverController;
    this.modalController = modalController;
    this.roomService = roomService;
    this.rooms$ = this.roomService.rooms$;
  }

  ngOnInit() {
    this.roomService.getRooms();
    this.roomService.getRoomTypes().subscribe(res => {
      this.roomTypes = res;
    });
  }

  showSettings(e, room) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          room: true,
          item: room
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addRoom() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddRoomModalComponent,
        componentProps: {
          add: true
        },
        cssClass: 'add-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AdminRoomsComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__.RoomService
}];

AdminRoomsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-rooms',
  template: _admin_rooms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_rooms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminRoomsComponent);


/***/ }),

/***/ 54179:
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-styles/admin-styles.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminStylesComponent": () => (/* binding */ AdminStylesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_styles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-styles.component.html?ngResource */ 8708);
/* harmony import */ var _admin_styles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-styles.component.scss?ngResource */ 86525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/style.service */ 63112);
/* harmony import */ var _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-popover/menu-popover.component */ 55506);
/* harmony import */ var _modals_add_style_modal_add_style_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/add-style-modal/add-style-modal.component */ 56444);










let AdminStylesComponent = class AdminStylesComponent {
  constructor(popoverController, modalController, styleService) {
    this.popoverController = popoverController;
    this.modalController = modalController;
    this.styleService = styleService;
    this.styles$ = this.styleService.styles$;
  }

  ngOnInit() {
    this.styleService.getStyles();
    this.styles$.subscribe(styles => {
      this.styles = styles;
    });
  }

  showSettings(e, style) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_4__.MenuPopoverComponent,
        event: e,
        componentProps: {
          style: true,
          item: style
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addStyle() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_add_style_modal_add_style_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddStyleModalComponent,
        componentProps: {
          add: true
        },
        cssClass: 'add-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  onFilterChange(event) {
    const selectedStyleNames = event.detail.value;
    this.styles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(styles => {
      if (selectedStyleNames.length > 0) {
        this.styles = styles.filter(style => selectedStyleNames.includes(style.name));
      } else {
        this.styles = styles;
      }
    });
  }

};

AdminStylesComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__.StyleService
}];

AdminStylesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-admin-styles',
  template: _admin_styles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_styles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminStylesComponent);


/***/ }),

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 21757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let FooterComponent = class FooterComponent {
    constructor() { }
    // this is a workaround - usual way does not seem to work properly
    scrollTo(id) {
        let x = document.querySelector(`#${id}`);
        if (x) {
            x.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 65263:
/*!*******************************************************************!*\
  !*** ./src/app/components/header-admin/header-admin.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAdminComponent": () => (/* binding */ HeaderAdminComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-admin.component.html?ngResource */ 1152);
/* harmony import */ var _header_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-admin.component.scss?ngResource */ 13548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ 71155);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 96925);











let HeaderAdminComponent = class HeaderAdminComponent {
  constructor(router, accountService, popoverController, languageService, translate) {
    this.router = router;
    this.accountService = accountService;
    this.popoverController = popoverController;
    this.languageService = languageService;
    this.translate = translate;
    this.loggedUser$ = this.accountService.currentUser$;
    this.menuItems = [{
      title: this.translate.instant("DASHBOARD.dashboard"),
      url: '/dashboard'
    }, {
      title: this.translate.instant("DASHBOARD.consultations"),
      url: '/consultations'
    }, {
      title: this.translate.instant("DASHBOARD.partners"),
      url: '/partners'
    }, {
      title: this.translate.instant("DASHBOARD.designers"),
      url: '/designers'
    }, {
      title: this.translate.instant("DASHBOARD.clients"),
      url: '/clients'
    }, {
      title: this.translate.instant("DASHBOARD.moodboards"),
      url: '/moodboards'
    }, {
      title: this.translate.instant("DASHBOARD.style"),
      url: '/style'
    }];
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(event => {
      this.translate.setDefaultLang(event.lang);
      this.revokeTranslations();
    });
  }

  isActiveRoute(route) {
    return this.router.url.split('?')[0] === route;
  }

  revokeTranslations() {
    this.menuItems = [{
      title: this.translate.instant("DASHBOARD.dashboard"),
      url: '/dashboard'
    }, {
      title: this.translate.instant("DASHBOARD.consultations"),
      url: '/consultations'
    }, {
      title: this.translate.instant("DASHBOARD.partners"),
      url: '/partners'
    }, {
      title: this.translate.instant("DASHBOARD.designers"),
      url: '/designers'
    }, {
      title: this.translate.instant("DASHBOARD.clients"),
      url: '/clients'
    }, {
      title: this.translate.instant("DASHBOARD.moodboards"),
      url: '/moodboards'
    }, {
      title: this.translate.instant("DASHBOARD.style"),
      url: '/style'
    }];
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden';
    x['style'].height = '100vh';
  }

  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto';
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_5__.SettingsPopoverComponent,
        componentProps: {
          headerType: 'admin'
        },
        event: e,
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

};

HeaderAdminComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}, {
  type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
}];

HeaderAdminComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-header-admin',
  template: _header_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderAdminComponent);


/***/ }),

/***/ 53597:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/header-internal-designer/header-internal-designer.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInternalDesignerComponents": () => (/* binding */ HeaderInternalDesignerComponents)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_internal_designer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-internal-designer.component.html?ngResource */ 99366);
/* harmony import */ var _header_internal_designer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-internal-designer.component.scss?ngResource */ 83235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 96925);










let HeaderInternalDesignerComponents = class HeaderInternalDesignerComponents {
  constructor(router, accountService, popoverController, translate) {
    this.router = router;
    this.accountService = accountService;
    this.popoverController = popoverController;
    this.translate = translate;
    this.loggedUser$ = this.accountService.currentUser$;
    this.menuItems = [{
      title: this.translate.instant("COMMON.client"),
      url: '/client-list'
    }, // {title: this.translate.instant("NEW-PROJECT.style"), url: '/style-list'},
    {
      title: this.translate.instant("COMMON.moodboard"),
      url: '/my-moodboard'
    }];
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(event => {
      this.translate.setDefaultLang(event.lang);
      this.revokeTranslations();
    });
  }

  revokeTranslations() {
    this.menuItems = [{
      title: this.translate.instant("COMMON.client"),
      url: '/client-list'
    }, // {title: this.translate.instant("NEW-PROJECT.style"), url: '/style-list'},
    {
      title: this.translate.instant("COMMON.moodboard"),
      url: '/my-moodboard'
    }];
  }

  isActiveRoute(route) {
    return this.router.url === route;
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_4__.SettingsPopoverComponent,
        componentProps: {
          headerType: 'designer'
        },
        event: e,
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden';
    x['style'].height = '100vh';
  }

  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto';
  }

};

HeaderInternalDesignerComponents.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}];

HeaderInternalDesignerComponents = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-header-internal-designer',
  template: _header_internal_designer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_internal_designer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderInternalDesignerComponents);


/***/ }),

/***/ 48021:
/*!***********************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLandingComponent": () => (/* binding */ HeaderLandingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_landing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-landing.component.html?ngResource */ 14982);
/* harmony import */ var _header_landing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-landing.component.scss?ngResource */ 85225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ 71155);
/* harmony import */ var _popovers_language_popover_language_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popovers/language-popover/language-popover.component */ 38649);









let HeaderLandingComponent = class HeaderLandingComponent {
  constructor(popoverController, translate, languageService) {
    this.popoverController = popoverController;
    this.translate = translate;
    this.languageService = languageService;
    this.languageImg = '';
  }

  ngOnInit() {
    this.languageService.languageChange$.subscribe(response => this.chosenLanguage(response)), this.translate.onLangChange.subscribe(event => {
      this.chosenLanguage(event.lang);
    });
  }

  chosenLanguage(lng) {
    if (lng === 'en') {
      this.languageImg = 'assets/icon/flags/us.svg';
    } else if (lng === 'no') {
      this.languageImg = 'assets/icon/flags/no.svg';
    }
  } // this is a workaround - usual way does not seem to work properly


  scrollTo(id) {
    const x = document.querySelector(`#${id}`);

    if (x) {
      x.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden';
    x['style'].height = '100vh';
  }

  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto';
  }

  showLanguage(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _popovers_language_popover_language_popover_component__WEBPACK_IMPORTED_MODULE_4__.LanguagePopoverComponent,
        // componentProps: { headerType: 'admin'},
        event: e,
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

};

HeaderLandingComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}, {
  type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
}];

HeaderLandingComponent.propDecorators = {
  isScrolledDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
HeaderLandingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-header-landing',
  template: _header_landing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_landing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderLandingComponent);


/***/ }),

/***/ 95044:
/*!***********************************************************************!*\
  !*** ./src/app/components/header-partner/header-partner.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPartnerComponent": () => (/* binding */ HeaderPartnerComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_partner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-partner.component.html?ngResource */ 18968);
/* harmony import */ var _header_partner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-partner.component.scss?ngResource */ 93474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/project.model */ 32744);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 96925);











let HeaderPartnerComponent = class HeaderPartnerComponent {
  constructor(projectService, accountService, router, popoverController) {
    this.projectService = projectService;
    this.accountService = accountService;
    this.router = router;
    this.popoverController = popoverController;
    this.menuItems = [{
      title: 'Product',
      url: '/partner'
    }];
    this.loggedUser$ = this.accountService.currentUser$;
  }

  isActiveRoute(route) {
    return this.router.url === route;
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_6__.SettingsPopoverComponent,
        componentProps: {
          headerType: 'partner'
        },
        event: e,
        dismissOnSelect: false
      });
      yield popover.present();
    })();
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden';
    x['style'].height = '100vh';
  }

  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto';
  }

  removeProjectDraft() {
    this.projectService.setCurrentProject(new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__.Project());
  }

};

HeaderPartnerComponent.ctorParameters = () => [{
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__.ProjectService
}, {
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
}];

HeaderPartnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-header-partner',
  template: _header_partner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_partner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderPartnerComponent);


/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 75413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/project.model */ 32744);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 96925);











let HeaderComponent = class HeaderComponent {
  constructor(projectService, accountService, router, popoverController) {
    this.projectService = projectService;
    this.accountService = accountService;
    this.router = router;
    this.popoverController = popoverController;
    this.menuItems = [{
      title: 'My Intiri',
      url: '/my-intiri'
    }, {
      title: 'Book a designer',
      url: '/book-designer'
    }];
    this.loggedUser$ = this.accountService.currentUser$;
  }

  isActiveRoute(route) {
    return this.router.url === route;
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_6__.SettingsPopoverComponent,
        componentProps: {
          headerType: 'user'
        },
        event: e,
        dismissOnSelect: false
      });
      yield popover.present();
    })();
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden';
    x['style'].height = '100vh';
  }

  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto';
  }

  removeProjectDraft() {
    this.projectService.setCurrentProject(new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__.Project());
  }

};

HeaderComponent.ctorParameters = () => [{
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__.ProjectService
}, {
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
}];

HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderComponent);


/***/ }),

/***/ 55506:
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-popover/menu-popover.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPopoverComponent": () => (/* binding */ MenuPopoverComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-popover.component.html?ngResource */ 63879);
/* harmony import */ var _menu_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-popover.component.scss?ngResource */ 12082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_admin_pages_add_partner_add_partner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/admin-pages/add-partner/add-partner.page */ 46366);
/* harmony import */ var _admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-clients/admin-clients.component */ 94949);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);
/* harmony import */ var _modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/add-color-modal/add-color-modal.component */ 14531);
/* harmony import */ var _modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/add-materials-modal/add-materials-modal.component */ 41332);
/* harmony import */ var _modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/add-picture-modal/add-picture-modal.component */ 70818);
/* harmony import */ var _modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/add-room-modal/add-room-modal.component */ 78563);
/* harmony import */ var _modals_add_style_modal_add_style_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/add-style-modal/add-style-modal.component */ 56444);
/* harmony import */ var _modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/add-product-modal/add-product-modal.component */ 71681);
/* harmony import */ var _modals_delete_moodboard_modal_delete_moodboard_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/delete-moodboard-modal/delete-moodboard-modal.component */ 83026);
/* harmony import */ var _modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/add-designer-modal/add-designer-modal.component */ 2736);


















let MenuPopoverComponent = class MenuPopoverComponent {
  constructor(modalController, moodboardService, notifier) {
    this.modalController = modalController;
    this.moodboardService = moodboardService;
    this.notifier = notifier;
  }

  ngOnInit() {}

  toggleTemplateMoodboard() {
    this.moodboardService.setIsTemplate({
      moodboardId: this.item.id,
      isTemplate: !this.item.isTemplate
    }).subscribe(() => {
      this.moodboardService.getMoodboards();
      this.notifier.show({
        message: `Moodboard ${this.item.isTemplate ? 'removed from' : 'added to'} templates successfully`,
        type: 'success'
      });
    });
  }

  openDeleteMoodboardModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _modals_delete_moodboard_modal_delete_moodboard_modal_component__WEBPACK_IMPORTED_MODULE_12__.DeleteMoodboardModalComponent,
        componentProps: {
          delete: true,
          item: _this.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteStyleModal() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _modals_add_style_modal_add_style_modal_component__WEBPACK_IMPORTED_MODULE_10__.AddStyleModalComponent,
        componentProps: {
          delete: true,
          item: _this2.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteMaterialsModal() {
    var _this3 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _modals_add_materials_modal_add_materials_modal_component__WEBPACK_IMPORTED_MODULE_7__.AddMaterialsModalComponent,
        componentProps: {
          delete: true,
          item: _this3.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteRoomModal() {
    var _this4 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _modals_add_room_modal_add_room_modal_component__WEBPACK_IMPORTED_MODULE_9__.AddRoomModalComponent,
        componentProps: {
          delete: true,
          item: _this4.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteColorModal() {
    var _this5 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalController.create({
        component: _modals_add_color_modal_add_color_modal_component__WEBPACK_IMPORTED_MODULE_6__.AddColorModalComponent,
        componentProps: {
          delete: true,
          item: _this5.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeletePictureModal() {
    var _this6 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalController.create({
        component: _modals_add_picture_modal_add_picture_modal_component__WEBPACK_IMPORTED_MODULE_8__.AddPictureModalComponent,
        componentProps: {
          delete: true,
          item: _this6.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteContactModal() {
    var _this7 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: src_app_pages_admin_pages_add_partner_add_partner_page__WEBPACK_IMPORTED_MODULE_3__.AddPartnerPage,
        componentProps: {
          delete: true,
          item: _this7.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteClientModal() {
    var _this8 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this8.modalController.create({
        component: _admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_4__.AdminClientsComponent,
        componentProps: {
          delete: true,
          item: _this8.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteProductModal() {
    var _this9 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this9.modalController.create({
        component: _modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_11__.AddProductModalComponent,
        componentProps: {
          delete: true,
          item: _this9.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openDeleteDesignerModal() {
    var _this10 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this10.modalController.create({
        component: _modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_13__.AddDesignerModalComponent,
        componentProps: {
          delete: true,
          item: _this10.item
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

MenuPopoverComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
}, {
  type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_5__.MoodboardService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_15__.NotifierService
}];

MenuPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-menu-popover',
  template: _menu_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_menu_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MenuPopoverComponent);


/***/ }),

/***/ 14531:
/*!********************************************************************************!*\
  !*** ./src/app/components/modals/add-color-modal/add-color-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddColorModalComponent": () => (/* binding */ AddColorModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_color_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-color-modal.component.html?ngResource */ 19381);
/* harmony import */ var _add_color_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-color-modal.component.scss?ngResource */ 65510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/color.service */ 3567);

var AddColorModalComponent_1;









let AddColorModalComponent = AddColorModalComponent_1 = class AddColorModalComponent {
  constructor(modalController, colorService, formBuilder, spinner, notifier) {
    this.modalController = modalController;
    this.colorService = colorService;
    this.formBuilder = formBuilder;
    this.spinner = spinner;
    this.notifier = notifier;
    this.isFormSubmited = false;
    this.colorPallete = {
      name: '',
      number: null,
      mainColor: '',
      shadeColorLight: '',
      shadeColorMedium: '',
      shadeColorDark: ''
    };
    this.addColorForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      main: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      shadeOne: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      shadeTwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      shadeThree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }

  get nameErrors() {
    return this.addColorForm.controls.name.errors;
  }

  get numberErrors() {
    return this.addColorForm.controls.number.errors;
  }

  get mainErrors() {
    return this.addColorForm.controls.main.errors;
  }

  get shadeOneErrors() {
    return this.addColorForm.controls.shadeOne.errors;
  }

  get shadeTwoErrors() {
    return this.addColorForm.controls.shadeTwo.errors;
  }

  get shadeThreeErrors() {
    return this.addColorForm.controls.shadeThree.errors;
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addColor() {
    this.spinner.show();
    this.isFormSubmited = true;

    if (!this.addColorForm.valid) {
      this.spinner.hide();
      return;
    }

    this.colorService.addColorPalette(this.colorPallete).subscribe(res => {
      this.spinner.hide();

      if (typeof res === 'object') {
        this.colorService.getColorPalettes();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  deleteColor() {
    this.colorService.deleteColorPalette(this.item['id']).subscribe(res => {
      this.colorService.getColorPalettes();
      this.modalController.dismiss();
      this.notifier.show({
        message: 'Color deleted successfully',
        type: 'success'
      });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddColorModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AddColorModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_color_service__WEBPACK_IMPORTED_MODULE_3__.ColorService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_7__.NotifierService
}];

AddColorModalComponent = AddColorModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-add-color-modal',
  template: _add_color_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_color_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddColorModalComponent);


/***/ }),

/***/ 2736:
/*!**************************************************************************************!*\
  !*** ./src/app/components/modals/add-designer-modal/add-designer-modal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDesignerModalComponent": () => (/* binding */ AddDesignerModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-designer-modal.component.html?ngResource */ 37999);
/* harmony import */ var _add_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-designer-modal.component.scss?ngResource */ 76898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 73071);

var AddDesignerModalComponent_1;







let AddDesignerModalComponent = AddDesignerModalComponent_1 = class AddDesignerModalComponent {
  constructor(modalController, designerService, userService) {
    this.modalController = modalController;
    this.designerService = designerService;
    this.userService = userService;
    this.EN = false;
    this.NO = false;
    this.designer = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      countryCode: '',
      role: '',
      language: ''
    };
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addDesigner() {
    this.designer.language = this.EN && this.NO ? 'NO/EN' : this.EN ? 'EN' : this.NO ? 'NO' : '';
    this.designerService.addDesigner(this.designer).subscribe(res => {
      if (typeof res === 'object') {
        this.designerService.getDesigners();
        this.openSuccessModal();
        location.reload();
      }
    });
  }

  deleteDesigner() {
    this.userService.deleteUser(this.item['id']).subscribe(res => {
      this.designerService.getDesigners();
      this.modalController.dismiss();
      location.reload();
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddDesignerModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AddDesignerModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_3__.DesignerService
}, {
  type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
}];

AddDesignerModalComponent = AddDesignerModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-add-designer-modal',
  template: _add_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddDesignerModalComponent);


/***/ }),

/***/ 41332:
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/add-materials-modal/add-materials-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMaterialsModalComponent": () => (/* binding */ AddMaterialsModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_materials_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-materials-modal.component.html?ngResource */ 88499);
/* harmony import */ var _add_materials_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-materials-modal.component.scss?ngResource */ 29949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/material.service */ 93985);

var AddMaterialsModalComponent_1;










let AddMaterialsModalComponent = AddMaterialsModalComponent_1 = class AddMaterialsModalComponent {
  constructor(modalController, materialService, sanitizer, formBuilder, spinner, notifier) {
    this.modalController = modalController;
    this.materialService = materialService;
    this.sanitizer = sanitizer;
    this.formBuilder = formBuilder;
    this.spinner = spinner;
    this.notifier = notifier;
    this.isFormSubmited = false;
    this.material = {
      name: '',
      materialTypeId: null,
      imageFile: null,
      description: ''
    };
    this.imagePath = null;
    this.addMaterialForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      imageFile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }

  get nameErrors() {
    return this.addMaterialForm.controls.name.errors;
  }

  get typeErrors() {
    return this.addMaterialForm.controls.type.errors;
  }

  get descriptionErrors() {
    return this.addMaterialForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addMaterialForm.controls.imageFile.errors;
  }

  ngOnInit() {
    this.materialService.getMaterialTypes().subscribe(res => {
      this.materialTypes = res;
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.material.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.material.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addMaterial() {
    this.spinner.show();
    this.isFormSubmited = true;

    if (!this.addMaterialForm.valid) {
      this.spinner.hide();
      return;
    }

    this.materialService.addMaterial(this.material).subscribe(res => {
      this.spinner.hide();

      if (typeof res === 'object') {
        this.materialService.getMaterials();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  deleteMaterial() {
    this.materialService.deleteMaterial(this.item['id']).subscribe(res => {
      this.materialService.getMaterials();
      this.modalController.dismiss();
      this.notifier.show({
        message: 'Material deleted successfully',
        type: 'success'
      });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddMaterialsModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AddMaterialsModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_material_service__WEBPACK_IMPORTED_MODULE_3__.MaterialService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService
}];

AddMaterialsModalComponent = AddMaterialsModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-materials-modal',
  template: _add_materials_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_materials_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddMaterialsModalComponent);


/***/ }),

/***/ 3603:
/*!************************************************************************************!*\
  !*** ./src/app/components/modals/add-partner-modal/add-partner-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPartnerModalComponent": () => (/* binding */ AddPartnerModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_partner_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-partner-modal.component.html?ngResource */ 33570);
/* harmony import */ var _add_partner_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-partner-modal.component.scss?ngResource */ 25906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);

var AddPartnerModalComponent_1;







let AddPartnerModalComponent = AddPartnerModalComponent_1 = class AddPartnerModalComponent {
  constructor(modalController, partnerService, sanitizer) {
    this.modalController = modalController;
    this.partnerService = partnerService;
    this.sanitizer = sanitizer;
    this.partner = {
      name: '',
      phoneNumber: '',
      email: '',
      street: '',
      postalCode: '',
      city: '',
      country: '',
      countryCode: '',
      logoFile: null
    };
    this.partnerContact = {
      firstName: '',
      lastName: '',
      countryCode: '+381',
      phoneNumber: '',
      partnerId: 0
    };
    this.imagePath = null;
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  dismissContactModal() {
    this.modalController.dismiss();
    location.reload();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.partner.logoFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.partner.logoFile));
    } else {
      this.imagePath = null;
    }
  }

  addPartner() {
    this.partnerService.addPartner(this.partner).subscribe(res => {
      if (typeof res === 'object') {
        this.partnerService.getPartners();
        this.openSuccessModal();
      }
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddPartnerModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  openSuccessModalContact() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.modalController.dismiss();

      const modal = yield _this2.modalController.create({
        component: AddPartnerModalComponent_1,
        componentProps: {
          addedContact: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  addPartnerContact() {
    this.partnerContact.partnerId = this.partnerId;
    this.partnerService.addPartnerContact(this.partnerContact).subscribe(res => {
      if (typeof res === 'object') {
        this.openSuccessModalContact();
      }
    });
  }

};

AddPartnerModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__.PartnerService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer
}];

AddPartnerModalComponent = AddPartnerModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-add-partner-modal',
  template: _add_partner_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_partner_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddPartnerModalComponent);


/***/ }),

/***/ 70818:
/*!************************************************************************************!*\
  !*** ./src/app/components/modals/add-picture-modal/add-picture-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPictureModalComponent": () => (/* binding */ AddPictureModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_picture_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-picture-modal.component.html?ngResource */ 38466);
/* harmony import */ var _add_picture_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-picture-modal.component.scss?ngResource */ 33410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/style.service */ 63112);

var AddPictureModalComponent_1;










let AddPictureModalComponent = AddPictureModalComponent_1 = class AddPictureModalComponent {
  constructor(modalController, styleService, sanitizer, formBuilder, spinner, notifier) {
    this.modalController = modalController;
    this.styleService = styleService;
    this.sanitizer = sanitizer;
    this.formBuilder = formBuilder;
    this.spinner = spinner;
    this.notifier = notifier;
    this.isFormSubmited = false;
    this.styleImage = {
      styleId: null,
      imageFile: null
    };
    this.imagePath = null;
    this.styles$ = this.styleService.styles$;
    this.addPictureForm = this.formBuilder.group({
      style: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      imageFile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }

  get styleErrors() {
    return this.addPictureForm.controls.style.errors;
  }

  get imageFileErrors() {
    return this.addPictureForm.controls.imageFile.errors;
  }

  ngOnInit() {
    this.styleService.getStyles();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.styleImage.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.styleImage.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addStyleImage() {
    this.spinner.show();
    this.isFormSubmited = true;

    if (!this.addPictureForm.valid) {
      this.spinner.hide();
      return;
    }

    this.styleService.addStyleImage(this.styleImage).subscribe(res => {
      this.spinner.hide();

      if (typeof res === 'object') {
        this.styleService.getStyleImages();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  deleteStyleImage() {
    this.styleService.deleteStyleImage(this.item['id']).subscribe(res => {
      this.styleService.getStyleImages();
      this.modalController.dismiss();
      this.notifier.show({
        message: 'Picture deleted successfully',
        type: 'success'
      });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddPictureModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AddPictureModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__.StyleService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService
}];

AddPictureModalComponent = AddPictureModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-picture-modal',
  template: _add_picture_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_picture_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddPictureModalComponent);


/***/ }),

/***/ 71681:
/*!************************************************************************************!*\
  !*** ./src/app/components/modals/add-product-modal/add-product-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductModalComponent": () => (/* binding */ AddProductModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_product_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-modal.component.html?ngResource */ 10860);
/* harmony import */ var _add_product_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product-modal.component.scss?ngResource */ 69284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/material.service */ 93985);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);
/* harmony import */ var _services_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/color.service */ 3567);












let AddProductModalComponent = class AddProductModalComponent {
    constructor(sanitizer, modalController, fb, colorService, materialService, partnerService, notifier, spinner) {
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.fb = fb;
        this.colorService = colorService;
        this.materialService = materialService;
        this.partnerService = partnerService;
        this.notifier = notifier;
        this.spinner = spinner;
        this.submitted = false;
        this.imagePath = null;
        this.colorPallete = {
            name: '',
            number: null,
            mainColor: '',
        };
        this.colors$ = this.colorService.colors$;
        this.materials$ = this.materialService.materials$;
        this.productsType = [];
        this.materials = [];
        this.colors = [];
        this.colorHexValue = '';
        this.productData = {
            productName: "",
            productType: "",
            productMaterial: "",
            color: "",
            price: "",
            description: "",
            imageFile: ""
        };
    }
    ngOnInit() {
        this.colorService.getColors();
        this.materialService.getMaterials();
        this.partnerService.getProductsType().subscribe(response => {
            this.productsType = response;
        });
        this.colors$.subscribe(response => {
            this.colors = response;
        });
        this.materials$.subscribe(response => {
            this.materials = response;
        });
        this.userForm = this.fb.group({
            productName: [ false || undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            productType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            productMaterial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            description: "",
        });
    }
    get form() { return this.userForm.controls; }
    onFileChange(event) {
        if (event.target.files[0]) {
            this.productData.imageFile = event.target.files[0];
            this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.productData.imageFile));
        }
        else {
            this.imagePath = null;
        }
    }
    onSubmit() {
        this.submitted = true;
        this.spinner.show();
        if (this.userForm.invalid) {
            this.spinner.hide();
            return;
        }
        this.AddProduct();
    }
    AddProduct() {
        this.productData = {
            name: this.userForm.value.productName,
            productTypeId: Number(this.userForm.value.productType),
            materialId: Number(this.userForm.value.productMaterial),
            color: this.userForm.value.color,
            price: Number(this.userForm.value.price),
            description: this.userForm.value?.description || undefined,
            imageFile: this.productData.imageFile
        };
        this.partnerService.addPartnerProduct(this.productData).subscribe(response => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Product added successfully',
                type: 'success',
            });
            this.partnerService.getProductsFromThatPartner().subscribe();
            this.dismissModal();
        }, error => {
            this.spinner.hide();
            this.notifier.show({
                message: error.error,
                type: 'error',
            });
            setTimeout(() => this.dismissModal(), 2000);
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteProduct() {
        this.spinner.show();
        this.partnerService.deleteProduct(this.item['id']).subscribe(res => {
            this.spinner.hide();
            this.modalController.dismiss();
            location.reload();
        }, () => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Cannot remove product.',
                type: 'error',
            });
        });
    }
};
AddProductModalComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_color_service__WEBPACK_IMPORTED_MODULE_4__.ColorService },
    { type: src_app_services_material_service__WEBPACK_IMPORTED_MODULE_2__.MaterialService },
    { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__.PartnerService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService }
];
AddProductModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-add-product-modal',
        template: _add_product_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_product_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddProductModalComponent);



/***/ }),

/***/ 78563:
/*!******************************************************************************!*\
  !*** ./src/app/components/modals/add-room-modal/add-room-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRoomModalComponent": () => (/* binding */ AddRoomModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_room_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-room-modal.component.html?ngResource */ 42814);
/* harmony import */ var _add_room_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-room-modal.component.scss?ngResource */ 11185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ 51037);

var AddRoomModalComponent_1;










let AddRoomModalComponent = AddRoomModalComponent_1 = class AddRoomModalComponent {
  constructor(modalController, roomService, sanitizer, formBuilder, spinner, notifier) {
    this.modalController = modalController;
    this.roomService = roomService;
    this.sanitizer = sanitizer;
    this.formBuilder = formBuilder;
    this.spinner = spinner;
    this.notifier = notifier;
    this.isFormSubmited = false;
    this.room = {
      name: '',
      roomTypeId: null,
      imageFile: null,
      description: ''
    };
    this.imagePath = null;
    this.addRoomForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      imageFile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }

  get nameErrors() {
    return this.addRoomForm.controls.name.errors;
  }

  get typeErrors() {
    return this.addRoomForm.controls.type.errors;
  }

  get descriptionErrors() {
    return this.addRoomForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addRoomForm.controls.imageFile.errors;
  }

  ngOnInit() {
    this.roomService.getRoomTypes().subscribe(res => {
      this.roomTypes = res;
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.room.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.room.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addRoom() {
    this.spinner.show();
    this.isFormSubmited = true;

    if (!this.addRoomForm.valid) {
      this.spinner.hide();
      return;
    }

    this.roomService.addRoom(this.room).subscribe(res => {
      this.spinner.hide();

      if (typeof res === 'object') {
        this.roomService.getRooms();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom(this.item['id']).subscribe(res => {
      this.roomService.getRooms();
      this.modalController.dismiss();
      this.notifier.show({
        message: 'Room deleted successfully',
        type: 'success'
      });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddRoomModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AddRoomModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__.RoomService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService
}];

AddRoomModalComponent = AddRoomModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-room-modal',
  template: _add_room_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_room_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddRoomModalComponent);


/***/ }),

/***/ 56444:
/*!********************************************************************************!*\
  !*** ./src/app/components/modals/add-style-modal/add-style-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStyleModalComponent": () => (/* binding */ AddStyleModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_style_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-style-modal.component.html?ngResource */ 29403);
/* harmony import */ var _add_style_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-style-modal.component.scss?ngResource */ 20837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/style.service */ 63112);

var AddStyleModalComponent_1;










let AddStyleModalComponent = AddStyleModalComponent_1 = class AddStyleModalComponent {
  constructor(modalController, styleService, sanitizer, formBuilder, spinner, notifier) {
    this.modalController = modalController;
    this.styleService = styleService;
    this.sanitizer = sanitizer;
    this.formBuilder = formBuilder;
    this.spinner = spinner;
    this.notifier = notifier;
    this.isFormSubmited = false;
    this.style = {
      name: '',
      description: '',
      imageFile: null
    };
    this.imagePath = null;
    this.addStyleForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      imageFile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }

  get nameErrors() {
    return this.addStyleForm.controls.name.errors;
  }

  get descriptionErrors() {
    return this.addStyleForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addStyleForm.controls.imageFile.errors;
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.style.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.style.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addStyle() {
    this.spinner.show();
    this.isFormSubmited = true;

    if (!this.addStyleForm.valid) {
      this.spinner.hide();
      return;
    }

    this.styleService.addStyle(this.style).subscribe(res => {
      this.spinner.hide();

      if (typeof res === 'object') {
        this.styleService.getStyles();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  deleteStyle() {
    this.styleService.deleteStyle(this.item['id']).subscribe(res => {
      this.styleService.getStyles();
      this.modalController.dismiss();
      this.notifier.show({
        message: 'Style deleted successfully',
        type: 'success'
      });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error'
      });
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: AddStyleModalComponent_1,
        componentProps: {
          added: true
        },
        cssClass: 'added-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

AddStyleModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_style_service__WEBPACK_IMPORTED_MODULE_3__.StyleService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService
}];

AddStyleModalComponent = AddStyleModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-style-modal',
  template: _add_style_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_style_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddStyleModalComponent);


/***/ }),

/***/ 52064:
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDesignerModalComponent": () => (/* binding */ BookDesignerModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _book_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-designer-modal.component.html?ngResource */ 21731);
/* harmony import */ var _book_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-designer-modal.component.scss?ngResource */ 80829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment.service */ 51863);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/stripe-js */ 63922);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ 71155);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 17217);












let BookDesignerModalComponent = class BookDesignerModalComponent {
  constructor(modalController, paymentService, languageService, commonService, notifier, spinner) {
    this.modalController = modalController;
    this.paymentService = paymentService;
    this.languageService = languageService;
    this.commonService = commonService;
    this.notifier = notifier;
    this.spinner = spinner;
    this.extraPayment = false;
    this.extraPaymentAmount = 3500;
    this.numberOfConsultations = 1;
    this.items = [{
      id: 1,
      name: 'Room sketch'
    }, {
      id: 2,
      name: 'Color advice'
    }, {
      id: 3,
      name: 'Moodboard adjustments'
    }, {
      id: 4,
      name: 'Select products'
    }, {
      id: 5,
      name: 'Lining plan'
    }, {
      id: 6,
      name: 'Decoration'
    }, {
      id: 7,
      name: 'Other questions'
    }];
  }

  ngOnInit() {
    this.spinner.show();
    this.commonService.getConsulationsInfo().subscribe(res => {
      this.spinner.hide();
      this.duration = res?.duration;
      this.price = res?.price;
      this.totalPrice = this.price * this.numberOfConsultations;
    }, () => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Cannot get consultations info.',
        type: 'error'
      });
    });
  }

  totalPriceSum(event) {
    const numberOfConsultations = event.detail.value;
    this.numberOfConsultations = numberOfConsultations;
    const reg = new RegExp(/^[1-9]\d*$/g);

    if (reg.test(numberOfConsultations)) {
      if (this.extraPayment) {
        this.totalPrice = this.price * numberOfConsultations + this.extraPaymentAmount;
      } else {
        this.totalPrice = this.price * numberOfConsultations;
      }
    } else {
      this.totalPrice = 0;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  redirectToPayment() {
    if (this.totalPrice > 0) {
      this.checkout();
    }
  }

  checkout() {
    this.paymentService.sendPayment({
      name: 'Consulatations',
      amount: this.totalPrice * 100,
      receiverId: this.designer.id,
      locale: this.languageService.selected === 'no' ? 'nb' : 'en',
      successUrlPath: `messenger?contact=${this.designer.id}`,
      cancelUrlPath: '',
      moodboardId: this.moodboard?.id,
      numberOfConsultations: this.numberOfConsultations //required

    }).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        let stripe = yield (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__.loadStripe)('pk_test_51LrTfeKX8zAv4zjwkaohTpcztUdLuubYRrbzdmyKHqX7dR1LP5kNNyCrUZHCplwPrrEmHyTz9TW480BSefHTL0Y700LOOrqXGT');
        stripe?.redirectToCheckout({
          sessionId: res.id
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  isChecked(event) {
    if (this.numberOfConsultations == 0) {
      if (event.detail.checked) {
        this.extraPayment = true;
      } else {
        this.extraPayment = false;
      }

      this.totalPrice = 0;
      return;
    }

    if (event.detail.checked) {
      this.extraPayment = true;
      this.totalPrice = this.totalPrice + this.extraPaymentAmount;
    } else {
      this.extraPayment = false;
      this.totalPrice = this.totalPrice - this.extraPaymentAmount;
    }
  }

};

BookDesignerModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_3__.PaymentService
}, {
  type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
}, {
  type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService
}];

BookDesignerModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-book-designer-modal',
  template: _book_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_book_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BookDesignerModalComponent);


/***/ }),

/***/ 60390:
/*!******************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectModalComponent": () => (/* binding */ CreateProjectModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_project_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project-modal.component.html?ngResource */ 34618);
/* harmony import */ var _create_project_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project-modal.component.scss?ngResource */ 1382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/project.model */ 32744);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ 354);








let CreateProjectModalComponent = class CreateProjectModalComponent {
    constructor(modalController, projectService, router) {
        this.modalController = modalController;
        this.projectService = projectService;
        this.router = router;
        this.projectName = '';
    }
    ngOnInit() { }
    isValidProjectName() {
        return this.projectName.length > 1;
    }
    startProjectCreation() {
        let project = new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_2__.Project();
        project.name = this.projectName;
        this.projectService.setCurrentProject(project);
        this.dismiss();
    }
    addNewMoodboard() {
        const blankProject = new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_2__.Project();
        blankProject.projectMoodboards = [...this.project.projectMoodboards];
        blankProject.name = this.project.name;
        blankProject.id = this.project.id;
        this.projectService.setCurrentProject(blankProject);
        this.dismiss();
        location.replace('/new-project'); // in future figure out how to do this with router.navigate (navigate to '/new-project?step=0')
    }
    dismiss() {
        this.modalController.dismiss({ 'dismissed': true });
    }
};
CreateProjectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CreateProjectModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-project-modal',
        template: _create_project_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_project_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateProjectModalComponent);



/***/ }),

/***/ 83026:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/modals/delete-moodboard-modal/delete-moodboard-modal.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteMoodboardModalComponent": () => (/* binding */ DeleteMoodboardModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_moodboard_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-moodboard-modal.component.html?ngResource */ 77433);
/* harmony import */ var _delete_moodboard_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-moodboard-modal.component.scss?ngResource */ 63987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);






let DeleteMoodboardModalComponent = class DeleteMoodboardModalComponent {
    constructor(moodboardService, modalController) {
        this.moodboardService = moodboardService;
        this.modalController = modalController;
    }
    ngOnInit() { }
    deleteMoodboard() {
        this.moodboardService.deleteMoodboard(this.item['id']).subscribe(res => {
            this.moodboardService.getMoodboards();
            this.modalController.dismiss();
            location.reload();
        });
    }
    dismissModal() {
        this.modalController.dismiss();
    }
};
DeleteMoodboardModalComponent.ctorParameters = () => [
    { type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__.MoodboardService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
DeleteMoodboardModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-delete-moodboard-modal',
        template: _delete_moodboard_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_delete_moodboard_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteMoodboardModalComponent);



/***/ }),

/***/ 6974:
/*!******************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModalComponent": () => (/* binding */ LoginModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-modal.component.html?ngResource */ 81070);
/* harmony import */ var _login_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-modal.component.scss?ngResource */ 89673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_vipps_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/vipps-state */ 18097);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_types_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/types/types */ 41884);
/* harmony import */ var _sms_verification_modal_sms_verification_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sms-verification-modal/sms-verification-modal.component */ 41686);












let LoginModalComponent = class LoginModalComponent {
  constructor(accountService, router, formBuilder, serializer, modalController) {
    this.accountService = accountService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.serializer = serializer;
    this.modalController = modalController;
    this.model = {};
    this.isFormSubmited = false;
    this.activeCode = '47';
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]+$')])]
    });
  }

  get phoneNumberErrors() {
    return this.loginForm.controls.phoneNumber.errors;
  }

  ngOnInit() {}

  setActiveCode(event) {
    this.activeCode = event.detail.value;
  }

  login() {
    this.isFormSubmited = true;

    if (!this.loginForm.valid) {
      return;
    }

    const loginModel = {
      countryCode: this.activeCode,
      phoneNumber: this.loginForm.value.phoneNumber
    }; // const phoneNumberFull = `${loginModel.countryCode}${loginModel.phoneNumber}`;

    this.accountService.login(loginModel).subscribe(() => {
      this.openSmsVerificationModal(loginModel);
      this.modalController.dismiss({
        dismissed: true
      });
    }, error => {
      console.log(error);
    });
  }

  initiateVippsLogin() {
    const redirectUri = '/processing';
    const returnUrlTree = this.router.createUrlTree([], {
      queryParams: {
        step: 3
      }
    });
    const returnUri = this.serializer.serialize(returnUrlTree);
    const state = JSON.stringify(new src_app_models_vipps_state__WEBPACK_IMPORTED_MODULE_3__.VippsState(returnUri));
    this.accountService.initiateVippsLogin(redirectUri, state);
  }

  goToRegisterPage() {
    this.modalController.dismiss({
      dismissed: true
    });
    this.router.navigate(['/register'], {
      state: {
        step: "4"
      }
    });
  }

  openSmsVerificationModal(phoneModel) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _sms_verification_modal_sms_verification_modal_component__WEBPACK_IMPORTED_MODULE_6__.SmsVerificationModalComponent,
        componentProps: {
          phoneModel,
          step: '3',
          verificationTarget: src_app_types_types__WEBPACK_IMPORTED_MODULE_5__.VerificationTarget.LOGIN
        },
        cssClass: 'medium-modal-css',
        backdropDismiss: true,
        swipeToClose: false
      });
      yield modal.present();
    })();
  }

};

LoginModalComponent.ctorParameters = () => [{
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.UrlSerializer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

LoginModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-login-modal',
  template: _login_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginModalComponent);


/***/ }),

/***/ 17147:
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutModalComponent": () => (/* binding */ LogoutModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _logout_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout-modal.component.html?ngResource */ 8832);
/* harmony import */ var _logout_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-modal.component.scss?ngResource */ 74377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);






let LogoutModalComponent = class LogoutModalComponent {
    constructor(accountService, modalController, nav) {
        this.accountService = accountService;
        this.modalController = modalController;
        this.nav = nav;
    }
    ngOnInit() { }
    dismiss() {
        this.modalController.dismiss({ 'dismissed': true });
    }
    logout() {
        this.dismiss();
        this.accountService.logout();
        this.nav.navigateRoot('/landing');
    }
};
LogoutModalComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
LogoutModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-logout-modal',
        template: _logout_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_logout_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogoutModalComponent);



/***/ }),

/***/ 39582:
/*!********************************************************************************!*\
  !*** ./src/app/components/modals/open-file-modal/open-file-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenFileModalComponent": () => (/* binding */ OpenFileModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _open_file_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-file-modal.component.html?ngResource */ 14998);
/* harmony import */ var _open_file_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-file-modal.component.scss?ngResource */ 51436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 354);








let OpenFileModalComponent = class OpenFileModalComponent {
    constructor(modalController, projectService, notifier, spinner) {
        this.modalController = modalController;
        this.projectService = projectService;
        this.notifier = notifier;
        this.spinner = spinner;
        this.isRemoving = false;
    }
    ngOnInit() { }
    downloadFile() {
        const sourceSplit = this.file.url.split('/upload/');
        const source = sourceSplit[0] + '/upload/fl_attachment/' + sourceSplit[1];
        const fileName = source.split('/').pop();
        const el = document.createElement('a');
        el.setAttribute('href', source);
        el.setAttribute('download', fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteFile() {
        this.spinner.show();
        this.projectService.deleteInspiration(this.file.id).subscribe(res => {
            this.projectService.getInspirations();
            this.spinner.hide();
            this.notifier.show({
                message: 'Inspiration file removed successfully.',
                type: 'success',
            });
            this.modalController.dismiss();
        }, () => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Cannot remove inspiration file.',
                type: 'error',
            });
        });
    }
};
OpenFileModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__.NotifierService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService }
];
OpenFileModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-open-file-modal',
        template: _open_file_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_open_file_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OpenFileModalComponent);



/***/ }),

/***/ 42736:
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/rate-modal/rate-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateModalComponent": () => (/* binding */ RateModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rate_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-modal.component.html?ngResource */ 81522);
/* harmony import */ var _rate_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-modal.component.scss?ngResource */ 20188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);
/* harmony import */ var _rate_successful_modal_rate_successful_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rate-successful-modal/rate-successful-modal.component */ 58509);








let RateModalComponent = class RateModalComponent {
  constructor(modalController, designerService) {
    this.modalController = modalController;
    this.designerService = designerService;
    this.star = 0;
    this.hoverStar = 0;
    this.rateDisabled = true;
  }

  rate() {
    const payload = {
      rating: this.star,
      designerId: this.designer.id
    };
    this.designerService.rateDesigner(payload).subscribe(res => {
      this.openSuccessModal();
    });
  }

  openSuccessModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: _rate_successful_modal_rate_successful_modal_component__WEBPACK_IMPORTED_MODULE_4__.RateSuccessfulModalComponent,
        componentProps: {
          designerFullname: `${_this.designer.firstName} ${_this.designer.lastName}`
        },
        cssClass: 'auto-size-modal-css'
      });
      yield modal.present();
    })();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addRate(num) {
    this.star = num;
    this.rateDisabled = false;
  }

};

RateModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_3__.DesignerService
}];

RateModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-rate-modal',
  template: _rate_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_rate_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RateModalComponent);


/***/ }),

/***/ 58509:
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/rate-successful-modal/rate-successful-modal.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateSuccessfulModalComponent": () => (/* binding */ RateSuccessfulModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rate_successful_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-successful-modal.component.html?ngResource */ 25322);
/* harmony import */ var _rate_successful_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-successful-modal.component.scss?ngResource */ 66137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let RateSuccessfulModalComponent = class RateSuccessfulModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
RateSuccessfulModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
RateSuccessfulModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-rate-successful-modal',
        template: _rate_successful_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rate_successful_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RateSuccessfulModalComponent);



/***/ }),

/***/ 5402:
/*!******************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/share-modal/share-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModalComponent": () => (/* binding */ ShareModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _share_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share-modal.component.html?ngResource */ 23860);
/* harmony import */ var _share_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-modal.component.scss?ngResource */ 26153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _share_successful_modal_share_successful_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-successful-modal/share-successful-modal.component */ 19904);







let ShareModalComponent = class ShareModalComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }

  share() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: _share_successful_modal_share_successful_modal_component__WEBPACK_IMPORTED_MODULE_3__.ShareSuccessfulModalComponent,
        cssClass: 'auto-size-modal-css'
      });
      yield modal.present();
    })();
  }

  dismiss() {
    this.modalController.dismiss();
  }

};

ShareModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

ShareModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-share-modal',
  template: _share_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_share_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ShareModalComponent);


/***/ }),

/***/ 19904:
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/share-successful-modal/share-successful-modal.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareSuccessfulModalComponent": () => (/* binding */ ShareSuccessfulModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _share_successful_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share-successful-modal.component.html?ngResource */ 10968);
/* harmony import */ var _share_successful_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-successful-modal.component.scss?ngResource */ 96239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rate-modal/rate-modal.component */ 42736);







let ShareSuccessfulModalComponent = class ShareSuccessfulModalComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }

  dismiss() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.modalController.dismiss();

      const modal = yield _this.modalController.create({
        component: _rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_3__.RateModalComponent
      });
      yield modal.present();
    })();
  }

};

ShareSuccessfulModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

ShareSuccessfulModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-share-successful-modal',
  template: _share_successful_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_share_successful_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ShareSuccessfulModalComponent);


/***/ }),

/***/ 41686:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/modals/sms-verification-modal/sms-verification-modal.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsVerificationModalComponent": () => (/* binding */ SmsVerificationModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sms_verification_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-verification-modal.component.html?ngResource */ 88015);
/* harmony import */ var _sms_verification_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms-verification-modal.component.scss?ngResource */ 11247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);







let SmsVerificationModalComponent = class SmsVerificationModalComponent {
    constructor(accountService, router, modalController) {
        this.accountService = accountService;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                this.modalController.dismiss();
            }
        });
    }
    onCodeChanged(verificationCode) {
        //console.log('change', code);
    }
    onCodeCompleted(verificationCode) {
        this.accountService.smsVerificationLogin(this.phoneModel.countryCode, this.phoneModel.phoneNumber, verificationCode)
            .subscribe(response => {
            this.router.navigate(['/new-project'], { queryParams: { step: this.step } });
            this.modalController.dismiss({ dismissed: true });
        }, error => {
            this.error = error.error;
            console.log(error);
        });
    }
    resendVerificationCode() {
        this.accountService.resendVerificationCode(this.phoneModel).subscribe(response => {
            // nothing to do here
        }, error => {
            this.error = error.error;
            console.log(error);
        });
    }
};
SmsVerificationModalComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
SmsVerificationModalComponent.propDecorators = {
    codeInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['codeInput',] }]
};
SmsVerificationModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sms-verification-modal',
        template: _sms_verification_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sms_verification_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SmsVerificationModalComponent);



/***/ }),

/***/ 31326:
/*!*****************************************************************************!*\
  !*** ./src/app/components/moodboard-details/moodboard-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodboardDetailsComponent": () => (/* binding */ MoodboardDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _moodboard_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moodboard-details.component.html?ngResource */ 68784);
/* harmony import */ var _moodboard_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moodboard-details.component.scss?ngResource */ 34473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let MoodboardDetailsComponent = class MoodboardDetailsComponent {
    constructor() {
        this.options = {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                100: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        };
    }
    ngOnInit() { }
    normalizeSlashes(string) {
        return string && string.replaceAll("\\", "/");
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
};
MoodboardDetailsComponent.ctorParameters = () => [];
MoodboardDetailsComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slides',] }],
    moodboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    bigCardOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    withSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MoodboardDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-moodboard-details',
        template: _moodboard_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_moodboard_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoodboardDetailsComponent);



/***/ }),

/***/ 28735:
/*!***************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProjectStepComponent": () => (/* binding */ NewProjectStepComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_project_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project-step.component.html?ngResource */ 70952);
/* harmony import */ var _new_project_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-step.component.scss?ngResource */ 36166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);





let NewProjectStepComponent = class NewProjectStepComponent {
    constructor() {
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
        this.toggleSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    toggleItem(item) {
        this.toggleSelection.emit(item);
    }
    isArray(item) {
        return Array.isArray(item);
    }
    normalizeSlashes(string) {
        return string.replaceAll("\\", "/");
    }
    isItemSelected(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.project[stepName])) {
            if (this.project[stepName].some(e => e.id === item.id)) {
                return true;
            }
        }
        else { // else it's a single select
            // if it's updating sub-object
            if (stepName.includes('.')) {
                return JSON.stringify(this.project[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item);
            }
            else {
                return this.project[stepName].id === item.id;
            }
        }
        return false;
    }
};
NewProjectStepComponent.ctorParameters = () => [];
NewProjectStepComponent.propDecorators = {
    currentStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    currentStepNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    stepsOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    toggleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
NewProjectStepComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-new-project-step',
        template: _new_project_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_project_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewProjectStepComponent);



/***/ }),

/***/ 38649:
/*!************************************************************************************!*\
  !*** ./src/app/components/popovers/language-popover/language-popover.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePopoverComponent": () => (/* binding */ LanguagePopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _language_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-popover.component.html?ngResource */ 1495);
/* harmony import */ var _language_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language-popover.component.scss?ngResource */ 15921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language.service */ 71155);






let LanguagePopoverComponent = class LanguagePopoverComponent {
    constructor(popoverController, languageService) {
        this.popoverController = popoverController;
        this.languageService = languageService;
        this.languages = [];
        this.selected = '';
    }
    ngOnInit() {
        this.languages = this.languageService.getLanguages();
        this.selected = this.languageService.selected;
    }
    selectLanguage(lng) {
        this.languageService.setLanguage(lng);
        this.popoverController.dismiss();
    }
};
LanguagePopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService }
];
LanguagePopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-language-popover',
        template: _language_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_language_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LanguagePopoverComponent);



/***/ }),

/***/ 94058:
/*!******************************************************************************!*\
  !*** ./src/app/components/popovers/style-popover/style-popover.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePopoverComponent": () => (/* binding */ StylePopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _style_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-popover.component.html?ngResource */ 98880);
/* harmony import */ var _style_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-popover.component.scss?ngResource */ 38913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let StylePopoverComponent = class StylePopoverComponent {
    constructor() { }
    ngOnInit() { }
};
StylePopoverComponent.ctorParameters = () => [];
StylePopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-style-popover',
        template: _style_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_style_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StylePopoverComponent);



/***/ }),

/***/ 64529:
/*!*********************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileImgSectionComponent": () => (/* binding */ ProfileImgSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_img_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-img-section.component.html?ngResource */ 49624);
/* harmony import */ var _profile_img_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-img-section.component.scss?ngResource */ 87575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);










let ProfileImgSectionComponent = class ProfileImgSectionComponent {
    constructor(http, spinner, accountService, notifier) {
        this.http = http;
        this.spinner = spinner;
        this.accountService = accountService;
        this.notifier = notifier;
        this.image = null;
        this.firstName = null;
        this.lastName = null;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
    }
    ngOnInit() { }
    openFile() {
        document.querySelector('input').click();
    }
    onFileChange(event) {
        if (event.target.files[0]) {
            this.spinner.show();
            const formData = new FormData();
            formData.append('photoPath', event.target.files[0]);
            this.http.post(this.apiUrl + 'users/addPhoto', formData).subscribe((res) => {
                this.spinner.hide();
                if (res.photoPath) {
                    this.image = res.photoPath;
                    this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(user => {
                        this.accountService.setCurrentUser({ ...user, photoPath: res.photoPath });
                    });
                    this.notifier.show({
                        message: 'Profile image updated successfully',
                        type: 'success',
                    });
                }
            });
        }
        else {
            this.image = null;
        }
    }
};
ProfileImgSectionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_7__.NotifierService }
];
ProfileImgSectionComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    firstName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    lastName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
ProfileImgSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile-img-section',
        template: _profile_img_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_img_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileImgSectionComponent);



/***/ }),

/***/ 4091:
/*!***********************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileInfoSectionComponent": () => (/* binding */ ProfileInfoSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_info_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-info-section.component.html?ngResource */ 81457);
/* harmony import */ var _profile_info_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-info-section.component.scss?ngResource */ 18397);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






let ProfileInfoSectionComponent = class ProfileInfoSectionComponent {
    constructor(http, _parentContainer) {
        this.http = http;
        this._parentContainer = _parentContainer;
        this.userInfo = false;
        this.partnerProfile = false;
        this.dataInput = {
            firstName: '',
            lastName: '',
            gender:  false || undefined,
            countryCode: '',
            phoneNumber: '',
            email: '',
            street: '',
            postalCode: '',
            city: '',
            country: ''
        };
    }
    ngOnInit() {
        this.formGroup = this._parentContainer.control;
    }
    genderChange(event) {
        this.dataInput.gender = event.detail.value;
    }
    countryCodeChange(event) {
        this.dataInput.countryCode = event.detail.value;
    }
    countryChange(event) {
        this.dataInput.country = event.detail.value;
    }
    //Depending od form properties while creating reusable component, we will decide which method we will take in action
    submitForm() {
        if (!this.dataInput.gender) {
            this.sendPartnerProfile();
        }
        else if (this.dataInput.gender) {
            this.sendUserInfo();
        }
    }
    sendPartnerProfile() {
        console.log();
    }
    sendUserInfo() {
    }
};
ProfileInfoSectionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ControlContainer }
];
ProfileInfoSectionComponent.propDecorators = {
    userInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    partnerProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    dataInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ProfileInfoSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile-info-section',
        template: _profile_info_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_info_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileInfoSectionComponent);



/***/ }),

/***/ 96925:
/*!***************************************************************************!*\
  !*** ./src/app/components/settings-popover/settings-popover.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPopoverComponent": () => (/* binding */ SettingsPopoverComponent)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-popover.component.html?ngResource */ 4953);
/* harmony import */ var _settings_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-popover.component.scss?ngResource */ 75391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/logout-modal/logout-modal.component */ 17147);
/* harmony import */ var _popovers_language_popover_language_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popovers/language-popover/language-popover.component */ 38649);








let SettingsPopoverComponent = class SettingsPopoverComponent {
  constructor(modalController, popoverController, nav) {
    this.modalController = modalController;
    this.popoverController = popoverController;
    this.nav = nav;
  }

  ngOnInit() {}

  openLogoutModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.popoverController.dismiss();

      const modal = yield _this.modalController.create({
        component: _modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__.LogoutModalComponent,
        cssClass: 'small-modal-css'
      });
      yield modal.present();
    })();
  }

  openLanguagePopover(event) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this2.popoverController.create({
        component: _popovers_language_popover_language_popover_component__WEBPACK_IMPORTED_MODULE_4__.LanguagePopoverComponent,
        event
      });
      yield popover.present();
    })();
  }

  openPricingPlans() {
    this.popoverController.dismiss();
    this.nav.navigateRoot('/pricing-plans');
  }

};

SettingsPopoverComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}];

SettingsPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-settings-popover',
  template: _settings_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsPopoverComponent);


/***/ }),

/***/ 11014:
/*!*****************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepPickerComponent": () => (/* binding */ StepPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _step_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-picker.component.html?ngResource */ 35338);
/* harmony import */ var _step_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-picker.component.scss?ngResource */ 99526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let StepPickerComponent = class StepPickerComponent {
    constructor() {
        this.page = 'create-project';
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    goToStep(step) {
        this.changeStep.emit(step);
    }
    isEmpty(object) {
        return !object || (Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype);
    }
    isMoodboardEmpty(moodboard) {
        if (!moodboard.id && !moodboard.name && moodboard.materials.length === 0 && moodboard.products.length === 0 && moodboard.colorPalettes.length === 0) {
            return true;
        }
        return false;
    }
    areProjectDetailsValid() {
        return this.project.roomDetails['shape'] && this.project.roomDetails['size'] && !!this.project.budget;
    }
    canChangeStep(step) {
        return this.canChangeToStep(step);
    }
};
StepPickerComponent.ctorParameters = () => [];
StepPickerComponent.propDecorators = {
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    currentStepNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canChangeToStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    changeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    moodboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
StepPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-step-picker',
        template: _step_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_step_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepPickerComponent);



/***/ }),

/***/ 99052:
/*!***************************************************************!*\
  !*** ./src/app/components/sub-header/sub-header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubHeaderComponent": () => (/* binding */ SubHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sub_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-header.component.html?ngResource */ 82177);
/* harmony import */ var _sub_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-header.component.scss?ngResource */ 92268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





let SubHeaderComponent = class SubHeaderComponent {
    constructor(translate) {
        this.translate = translate;
        this.slider = false;
        this.changeSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.currentLang = '';
        this.menuItems = {
            partners: [this.translate.instant("DASHBOARD.partners"), this.translate.instant("PARTNERS.products")],
            clients: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("CLIENTS.inspiration")],
            moodboards: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")],
            clientList: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("DASHBOARD.moodboards"), this.translate.instant("DASHBOARD.statistic"), 'ratings'],
            designerMoodboards: [this.translate.instant("DASHBOARD.my-moodboards"), this.translate.instant("DASHBOARD.all-moodboards")],
            style: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")]
        };
    }
    ngOnInit() {
        this.translate.onLangChange.subscribe((event) => {
            this.translate.setDefaultLang(event.lang);
            this.revokeTranslations();
        });
    }
    revokeTranslations() {
        this.menuItems = {
            partners: [this.translate.instant("DASHBOARD.partners"), this.translate.instant("PARTNERS.products")],
            clients: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("CLIENTS.inspiration")],
            moodboards: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")],
            clientList: [this.translate.instant("DASHBOARD.clients"), this.translate.instant("DASHBOARD.moodboards"), this.translate.instant("DASHBOARD.statistic")],
            designerMoodboards: [this.translate.instant("DASHBOARD.my-moodboards"), this.translate.instant("DASHBOARD.all-moodboards")],
            style: [this.translate.instant("STYLE.styles"), this.translate.instant("STYLE.materials"), this.translate.instant("STYLE.rooms"), this.translate.instant("MY-INTIRI.colors"), this.translate.instant("STYLE.pictures")]
        };
    }
    goToSlide(id) {
        this.changeSlide.emit(id);
    }
};
SubHeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
SubHeaderComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    activeTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    changeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SubHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-sub-header',
        template: _sub_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubHeaderComponent);



/***/ }),

/***/ 31896:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 89876);





let AdminGuard = class AdminGuard {
    constructor(nav, accountService) {
        this.nav = nav;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user && user.roles[0] === 'Admin') {
                return true;
            }
            else {
                this.nav.navigateRoot('/login');
                return false;
            }
        }));
    }
};
AdminGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
AdminGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ 5658:
/*!******************************************!*\
  !*** ./src/app/guards/designer.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerGuard": () => (/* binding */ DesignerGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 89876);





let DesignerGuard = class DesignerGuard {
    constructor(nav, accountService) {
        this.nav = nav;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user && user.roles[0] === 'InternalDesigner') {
                return true;
            }
            else {
                this.nav.navigateRoot('/login');
                return false;
            }
        }));
    }
};
DesignerGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
DesignerGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DesignerGuard);



/***/ }),

/***/ 30592:
/*!*****************************************!*\
  !*** ./src/app/guards/enduser.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnduserGuard": () => (/* binding */ EnduserGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 89876);





let EnduserGuard = class EnduserGuard {
    constructor(nav, accountService) {
        this.nav = nav;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user && user.roles[0] === 'FreeEndUser') {
                return true;
            }
            else {
                this.nav.navigateRoot('/login');
                return false;
            }
        }));
    }
};
EnduserGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
EnduserGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EnduserGuard);



/***/ }),

/***/ 96923:
/*!*****************************************!*\
  !*** ./src/app/guards/partner.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerGuard": () => (/* binding */ PartnerGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 89876);





let PartnerGuard = class PartnerGuard {
    constructor(nav, accountService) {
        this.nav = nav;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user && user.roles[0] === 'Partner') {
                return true;
            }
            else {
                this.nav.navigateRoot('/login');
                return false;
            }
        }));
    }
};
PartnerGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
PartnerGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PartnerGuard);



/***/ }),

/***/ 25377:
/*!****************************************!*\
  !*** ./src/app/guards/shared.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedGuard": () => (/* binding */ SharedGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 89876);





let SharedGuard = class SharedGuard {
    constructor(nav, accountService) {
        this.nav = nav;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user) {
                return true;
            }
            else {
                this.nav.navigateRoot('/login');
                return false;
            }
        }));
    }
};
SharedGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
SharedGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SharedGuard);



/***/ }),

/***/ 53543:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 89876);




let JwtInterceptor = class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        let currentUser;
        this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(user => currentUser = user);
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], JwtInterceptor);



/***/ }),

/***/ 52095:
/*!*******************************************!*\
  !*** ./src/app/models/moodboard.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Moodboard": () => (/* binding */ Moodboard)
/* harmony export */ });
class Moodboard {
    constructor() {
        this.id = null;
        this.sourceMoodboardId = null;
        this.name = '';
        this.description = '';
        this.designer = null;
        this.style = null;
        this.room = null;
        this.colorPalettes = [];
        this.materials = [];
        this.products = [];
    }
}


/***/ }),

/***/ 32744:
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _moodboard_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moodboard.model */ 52095);

class Project {
    constructor() {
        this.id = null;
        this.name = '';
        this.styleImages = [];
        this.room = {};
        this.budget = '';
        this.roomDetails = {};
        this.colorPalettes = [];
        this.projectMoodboards = [];
        this.currentMoodboard = new _moodboard_model__WEBPACK_IMPORTED_MODULE_0__.Moodboard();
    }
}


/***/ }),

/***/ 18097:
/*!***************************************!*\
  !*** ./src/app/models/vipps-state.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VippsState": () => (/* binding */ VippsState)
/* harmony export */ });
class VippsState {
    constructor(returnUri, extra) {
        this.returnUri = returnUri;
        this.extra = extra;
    }
}


/***/ }),

/***/ 63832:
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-pages/add-moodboard/add-moodboard.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMoodboardPage": () => (/* binding */ AddMoodboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-moodboard.page.html?ngResource */ 35440);
/* harmony import */ var _add_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-moodboard.page.scss?ngResource */ 34873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_models_moodboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/moodboard.model */ 52095);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/style.service */ 63112);









let AddMoodboardPage = class AddMoodboardPage {
    constructor(projectService, moodboardSrv, styleSrv, router) {
        this.projectService = projectService;
        this.moodboardSrv = moodboardSrv;
        this.styleSrv = styleSrv;
        this.router = router;
        this.steps = [
            {
                title: 'Rooms',
                data: [],
            },
            {
                title: 'Styles',
                data: [],
            },
            {
                title: 'Materials',
                data: { roomShapes: [{ shape: 'rectangular', imagePath: 'icon/rectangle.png' }, { shape: 'square', imagePath: 'icon/square.png' }, { shape: 'l-shaped', imagePath: 'icon/l-shape.png' }] },
            },
            {
                title: 'Colors',
                data: [],
            },
            {
                title: 'Products',
                data: [],
            },
            {
                title: '',
                data: 'final'
            }
        ];
        this.stepsOrder = {
            0: 'room',
            1: 'style',
            2: 'materials',
            3: 'colorPalettes',
            4: 'products',
            5: 'final'
        };
        this.moodboard = new src_app_models_moodboard_model__WEBPACK_IMPORTED_MODULE_2__.Moodboard();
        this.currentStepNo = 0;
    }
    ngOnInit() {
        this.projectService.getRooms().subscribe((res) => {
            this.steps[0]['data'] = res;
        });
        this.styleSrv.getStyles();
        this.styleSrv.styles$.subscribe((res) => {
            this.steps[1]['data'] = res.map(e => { e.imagePath = (!e.imagePath || e.imagePath === 'path') ? e.styleImages[0].imagePath : e.imagePath; return e; });
        });
        this.projectService.getMaterials().subscribe((res) => {
            this.steps[2]['data'] = res;
        });
        this.projectService.getColorPalettes().subscribe((res) => {
            this.steps[3]['data'] = res;
        });
        this.projectService.getProducts().subscribe((res) => {
            this.steps[4]['data'] = res;
        });
    }
    backStep() {
        if (this.canChangeToStep(this.currentStepNo - 1)) {
            this.currentStepNo--;
        }
    }
    nextStep() {
        if (this.canChangeToStep(this.currentStepNo + 1)) {
            this.currentStepNo++;
        }
    }
    goToStep(stepNo) {
        if (this.canChangeToStep(stepNo)) {
            this.currentStepNo = stepNo;
        }
    }
    canChangeToStep(step) {
        if (step >= this.steps.length || step < 0) {
            return false;
        }
        switch (step) {
            case 0: {
                return true;
            }
            case 1: {
                return !this.isEmpty(this.moodboard.room);
            }
            case 2: {
                return (!this.isEmpty(this.moodboard.room) &&
                    !this.isEmpty(this.moodboard.style));
            }
            case 3: {
                return (this.moodboard.materials.length > 3 &&
                    !this.isEmpty(this.moodboard.room) &&
                    !this.isEmpty(this.moodboard.style));
            }
            case 4: {
                return (this.moodboard.materials.length > 3 &&
                    !this.isEmpty(this.moodboard.room) &&
                    !this.isEmpty(this.moodboard.style) &&
                    this.moodboard.colorPalettes.length > 1);
            }
            case 5: {
                return (this.moodboard.materials.length > 3 &&
                    this.moodboard.products.length > 1 &&
                    !this.isEmpty(this.moodboard.room) &&
                    !this.isEmpty(this.moodboard.style) &&
                    this.moodboard.colorPalettes.length > 1);
            }
        }
        return false;
    }
    toggleItem(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.moodboard[stepName])) {
            if (this.moodboard[stepName].some((e) => JSON.stringify(e) === JSON.stringify(item))) {
                this.moodboard[stepName] = this.moodboard[stepName].filter((e) => e.id !== item.id);
            }
            else {
                this.moodboard[stepName] = [...this.moodboard[stepName], item];
            }
        }
        else { // else it's a single select
            this.moodboard[stepName] =
                JSON.stringify(this.moodboard[stepName]) === JSON.stringify(item)
                    ? null
                    : item;
        }
    }
    saveMoodboard() {
        this.moodboardSrv.addMoodboard(this.moodboard).subscribe((res) => {
            this.moodboardSrv.getMoodboards();
            this.router.navigateByUrl('/moodboards');
        }, (error) => {
            console.log(error);
        });
    }
    isEmpty(object) {
        return (!object ||
            (Object.keys(object).length === 0 &&
                Object.getPrototypeOf(object) === Object.prototype));
    }
};
AddMoodboardPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService },
    { type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_3__.MoodboardService },
    { type: src_app_services_style_service__WEBPACK_IMPORTED_MODULE_5__.StyleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AddMoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-moodboard',
        template: _add_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddMoodboardPage);



/***/ }),

/***/ 46366:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin-pages/add-partner/add-partner.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPartnerPage": () => (/* binding */ AddPartnerPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_partner_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-partner.page.html?ngResource */ 33655);
/* harmony import */ var _add_partner_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-partner.page.scss?ngResource */ 58881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/menu-popover/menu-popover.component */ 55506);
/* harmony import */ var src_app_components_modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/add-partner-modal/add-partner-modal.component */ 3603);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);











let AddPartnerPage = class AddPartnerPage {
  constructor(modalController, route, router, popoverController, partnerService) {
    this.modalController = modalController;
    this.route = route;
    this.router = router;
    this.popoverController = popoverController;
    this.partnerService = partnerService;
    this.options = {
      slidesPerView: 5,
      spaceBetween: 20,
      breakpoints: {
        100: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    };

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(data => {
      this.partner = data.partner;
    });
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  showSettings(e, item) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__.MenuPopoverComponent,
        event: e,
        componentProps: {
          contact: true,
          item
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  openAddContactModal(partnerId) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: src_app_components_modals_add_partner_modal_add_partner_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddPartnerModalComponent,
        componentProps: {
          nextPage: true,
          partnerId: partnerId
        },
        cssClass: 'add-partner-contact-modal-css'
      });
      yield modal.present();
    })();
  }

  deleteContact() {
    this.partnerService.deletePartnerContact(this.item['id']).subscribe(res => {
      location.reload();
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

};

AddPartnerPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}, {
  type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_5__.PartnerService
}];

AddPartnerPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['slides']
  }]
};
AddPartnerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-add-partner',
  template: _add_partner_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_partner_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddPartnerPage);


/***/ }),

/***/ 98284:
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-pages/client/client.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPage": () => (/* binding */ ClientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.page.html?ngResource */ 5281);
/* harmony import */ var _client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.page.scss?ngResource */ 75073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let ClientPage = class ClientPage {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.options = {
            slidesPerView: 1,
            initialSlide: 0
        };
        this.currentSlide = 0;
    }
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if (params.section) {
                this.options.initialSlide = params.section;
            }
        });
    }
    changeSlide(id) {
        this.slides.slideTo(id);
        this.currentSlide = id;
        this.changeQueryParam(id);
    }
    onSlideChange() {
        const currentSlideId = this.slides['el']['swiper']['activeIndex'];
        this.currentSlide = currentSlideId;
        this.changeQueryParam(currentSlideId);
    }
    changeQueryParam(section) {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                section
            },
        });
    }
};
ClientPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ClientPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides',] }]
};
ClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-client',
        template: _client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientPage);



/***/ }),

/***/ 87984:
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-pages/consultations/consultations.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationsPage": () => (/* binding */ ConsultationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _consultations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultations.page.html?ngResource */ 74257);
/* harmony import */ var _consultations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultations.page.scss?ngResource */ 9631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);







let ConsultationsPage = class ConsultationsPage {
    constructor(service, notifier, spinner) {
        this.service = service;
        this.notifier = notifier;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
        this.service.getConsulationsInfo().subscribe((res) => {
            this.spinner.hide();
            this.duration = res?.duration;
            this.price = res?.price;
            this.initDuration = res?.duration;
            this.initPrice = res?.price;
        }, () => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Cannot get consultations info.',
                type: 'error',
            });
        });
    }
    updateConsultationsInfo() {
        this.spinner.show();
        this.service.updateConsulationsInfo({ price: this.price, duration: this.duration }).subscribe(res => {
            this.spinner.hide();
            this.initDuration = this.duration;
            this.initPrice = this.price;
            this.notifier.show({
                message: 'Consultations info updated successfully.',
                type: 'success',
            });
        }, () => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Cannot update consultations info.',
                type: 'error',
            });
        });
    }
};
ConsultationsPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__.NotifierService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService }
];
ConsultationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-consultations-page',
        template: _consultations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_consultations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConsultationsPage);



/***/ }),

/***/ 47425:
/*!***************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 23147);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 25117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);





let DashboardPage = class DashboardPage {
    constructor(commonService) {
        this.commonService = commonService;
        this.totalCountData = { totalMoodboards: null, totalPartners: null, totalClients: null, totalDesigners: null };
    }
    ngOnInit() {
        this.commonService.getDashboardData().subscribe((res) => {
            this.totalCountData = res;
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard-page',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 60899:
/*!*************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPage": () => (/* binding */ DesignerPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page.html?ngResource */ 34652);
/* harmony import */ var _designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designer.page.scss?ngResource */ 36736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/menu-popover/menu-popover.component */ 55506);
/* harmony import */ var src_app_components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/add-designer-modal/add-designer-modal.component */ 2736);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);










let DesignerPage = class DesignerPage {
  constructor(popoverController, modalController, designerService) {
    this.popoverController = popoverController;
    this.modalController = modalController;
    this.designerService = designerService;
    this.languages = this.designerService.languages;
    this.designers$ = this.designerService.designers$;
  }

  ngOnInit() {
    this.designerService.getDesigners();
    this.designers$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(designers => {
      this.designers = designers;
    });
  }

  getDesignerType(d) {
    const role = d.roles[0].name;

    if (role === 'InternalDesigner') {
      return 'Intiri Designer';
    } else if (role === 'ExternalDesigner') {
      return 'External Designer';
    }

    return role;
  }

  showSettings(e, designer) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__.MenuPopoverComponent,
        event: e,
        componentProps: {
          designer: true,
          item: designer
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addDesigner() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: src_app_components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddDesignerModalComponent,
        componentProps: {
          add: true
        },
        cssClass: 'add-designer-modal-css'
      });
      yield modal.present();
    })();
  }

  onFilterChange(event) {
    const selectedStatus = event.detail.value;
    this.designers$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(designers => {
      if (selectedStatus.length > 0) {
        this.designers = designers.filter(designer => selectedStatus.includes(designer.roles[0].name));
      } else {
        this.designers = designers;
      }
    });
  }

};

DesignerPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_5__.DesignerService
}];

DesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-designer-page',
  template: _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DesignerPage);


/***/ }),

/***/ 15453:
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin-pages/moodboards/moodboards.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodboardsPage": () => (/* binding */ MoodboardsPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _moodboards_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moodboards.page.html?ngResource */ 31773);
/* harmony import */ var _moodboards_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moodboards.page.scss?ngResource */ 21714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/menu-popover/menu-popover.component */ 55506);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);
/* harmony import */ var src_app_services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/style.service */ 63112);










let MoodboardsPage = class MoodboardsPage {
  constructor(popoverController, moodboardService, styleService) {
    this.popoverController = popoverController;
    this.moodboardService = moodboardService;
    this.styleService = styleService;
    this.moodboards$ = this.moodboardService.moodboards$;
    this.styles$ = this.styleService.styles$;
  }

  ngOnInit() {
    this.moodboardService.getMoodboards();
    this.styleService.getStyles();
    this.moodboards$.subscribe(moodboards => {
      this.moodboards = moodboards;
    });
  }

  showSettings(e, mb) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__.MenuPopoverComponent,
        event: e,
        componentProps: {
          moodboard: true,
          item: mb
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  onFilterChange(event) {
    const selectedStyleNames = event.detail.value;
    this.moodboards$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(moodboards => {
      if (selectedStyleNames.length > 0) {
        this.moodboards = moodboards.filter(moodboard => selectedStyleNames.includes(moodboard.style.name));
      } else {
        this.moodboards = moodboards;
      }
    });
  }

};

MoodboardsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}, {
  type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_4__.MoodboardService
}, {
  type: src_app_services_style_service__WEBPACK_IMPORTED_MODULE_5__.StyleService
}];

MoodboardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-moodboards',
  template: _moodboards_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_moodboards_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MoodboardsPage);


/***/ }),

/***/ 76774:
/*!*******************************************************!*\
  !*** ./src/app/pages/admin-pages/style/style.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePage": () => (/* binding */ StylePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _style_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.page.html?ngResource */ 92243);
/* harmony import */ var _style_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.page.scss?ngResource */ 73549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let StylePage = class StylePage {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.options = {
            slidesPerView: 1,
            initialSlide: 0
        };
        this.currentSlide = 0;
    }
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if (params.section) {
                this.options.initialSlide = params.section;
            }
        });
    }
    changeSlide(id) {
        this.slides.slideTo(id);
        this.currentSlide = id;
        this.changeQueryParam(id);
    }
    onSlideChange() {
        const currentSlideId = this.slides['el']['swiper']['activeIndex'];
        this.currentSlide = currentSlideId;
        this.changeQueryParam(currentSlideId);
    }
    changeQueryParam(section) {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                section
            },
        });
    }
};
StylePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
StylePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides',] }]
};
StylePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-style',
        template: _style_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_style_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StylePage);



/***/ }),

/***/ 6441:
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorPage": () => (/* binding */ VendorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.page.html?ngResource */ 85267);
/* harmony import */ var _vendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.page.scss?ngResource */ 51989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let VendorPage = class VendorPage {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.options = {
            slidesPerView: 1,
            initialSlide: 0
        };
        this.currentSlide = 0;
    }
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if (params.section) {
                this.options.initialSlide = params.section;
            }
        });
    }
    changeSlide(id) {
        this.slides.slideTo(id);
        this.currentSlide = id;
        this.changeQueryParam(id);
    }
    onSlideChange() {
        const currentSlideId = this.slides['el']['swiper']['activeIndex'];
        this.currentSlide = currentSlideId;
        this.changeQueryParam(currentSlideId);
    }
    changeQueryParam(section) {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                section
            },
        });
    }
};
VendorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
VendorPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides',] }]
};
VendorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vendor-page',
        template: _vendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VendorPage);



/***/ }),

/***/ 95217:
/*!****************************************************************************!*\
  !*** ./src/app/pages/designer-pages/client-request/client-request.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRequestPage": () => (/* binding */ ClientRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-request.page.html?ngResource */ 10634);
/* harmony import */ var _client_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-request.page.scss?ngResource */ 76857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);





let ClientRequestPage = class ClientRequestPage {
    constructor(designerService) {
        this.designerService = designerService;
        this.client = { createdMoodboards: [] };
    }
    ngOnInit() {
        this.designerService.getDesigner(2).subscribe((res) => {
            this.client = res;
        });
    }
};
ClientRequestPage.ctorParameters = () => [
    { type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_2__.DesignerService }
];
ClientRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-client-request-page',
        template: _client_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientRequestPage);



/***/ }),

/***/ 3767:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/clients/client-list/client-list.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientListPage": () => (/* binding */ ClientListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-list.page.html?ngResource */ 71893);
/* harmony import */ var _client_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-list.page.scss?ngResource */ 59415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);







let ClientListPage = class ClientListPage {
    constructor(_route, _router, dataService, spinner) {
        this._route = _route;
        this._router = _router;
        this.dataService = dataService;
        this.spinner = spinner;
        this.user = null;
        this.options = {
            slidesPerView: 1,
            initialSlide: 0
        };
        this.star = 1;
        this.rating = 0;
        this.numberOfRatings = 0;
        //Rating percentage for setting span width
        this.rate0 = 0;
        this.rate1 = 0;
        this.rate2 = 0;
        this.rate3 = 0;
        this.rate4 = 0;
        //Array with numbers of rating goin in order Excelent, Very Good, Average, Poor, Terrible
        this.ratingArray = [];
        this.currentSlide = 0;
        this.clients = [
            {
                avatar: '../../../../../assets/images/profile-img.png',
                name: 'Grace Dweler',
                email: 'test@test.com',
                style: 'Skandinavian Bright'
            },
            {
                avatar: '../../../../../assets/images/profile-img.png',
                name: 'Grace Dweler',
                email: 'test@test.com',
                style: 'Skandinavian Bright'
            },
            {
                avatar: '../../../../../assets/images/profile-img.png',
                name: 'Grace Dweler',
                email: 'test@test.com',
                style: 'Skandinavian Bright'
            },
            {
                avatar: '../../../../../assets/images/profile-img.png',
                name: 'Grace Dweler',
                email: 'test@test.com',
                style: 'Skandinavian Bright'
            },
            {
                avatar: '../../../../../assets/images/profile-img.png',
                name: 'Grace Dweler',
                email: 'test@test.com',
                style: 'Skandinavian Bright'
            },
        ];
        this.moodboards = [
            {
                image: '../../../../../assets/images/landing-img.png',
                style: 'Vintage'
            },
            {
                image: '../../../../../assets/images/landing-img.png',
                style: 'Industrial'
            },
            {
                image: '../../../../../assets/images/landing-img.png',
                style: 'Minimal'
            },
            {
                image: '../../../../../assets/images/landing-img.png',
                style: 'Minimal'
            },
            {
                image: '../../../../../assets/images/landing-img.png',
                style: 'Minimal'
            }
        ];
    }
    ngOnInit() {
        this.spinner.show();
        this._route.queryParams.subscribe(params => {
            if (params.section) {
                this.options.initialSlide = params.section;
            }
        });
        this.dataService.getDesignerRate().subscribe((res) => {
            this.spinner.hide();
            this.ratingArray = [res.fiveStar, res.fourStar, res.threeStar, res.twoStar, res.oneStar];
            this.rating = res.averageRating;
            this.star = Math.round(res.averageRating);
            this.numberOfRatings = this.ratingArray.reduce((a, b) => a + b, 0);
            const max = Math.max(...this.ratingArray);
            this.ratingArray.forEach((num, index) => {
                this['rate' + index] = Math.round(num / max * 100);
            });
        });
    }
    changeSlide(id) {
        this.slides.slideTo(id);
        this.currentSlide = id;
        this.changeQueryParam(id);
    }
    onSlideChange() {
        const currentSlideId = this.slides['el']['swiper']['activeIndex'];
        this.currentSlide = currentSlideId;
        this.changeQueryParam(currentSlideId);
    }
    changeQueryParam(section) {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                section
            },
        });
    }
};
ClientListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService }
];
ClientListPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['slides',] }]
};
ClientListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-client-list-page',
        template: _client_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientListPage);



/***/ }),

/***/ 92965:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/styles/style-list/style-list.page.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleListPage": () => (/* binding */ StyleListPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _style_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-list.page.html?ngResource */ 94613);
/* harmony import */ var _style_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-list.page.scss?ngResource */ 18330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_popovers_style_popover_style_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/popovers/style-popover/style-popover.component */ 94058);







let StyleListPage = class StyleListPage {
  constructor(popoverController) {
    this.popoverController = popoverController;
    this.styles = [{
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }, {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    }];
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_popovers_style_popover_style_popover_component__WEBPACK_IMPORTED_MODULE_3__.StylePopoverComponent,
        event: e,
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

};

StyleListPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController
}];

StyleListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-style-list-page',
  template: _style_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_style_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], StyleListPage);


/***/ }),

/***/ 65731:
/*!************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMoodboardPage": () => (/* binding */ MyMoodboardPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-moodboard.page.html?ngResource */ 57182);
/* harmony import */ var _my_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-moodboard.page.scss?ngResource */ 15919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_popovers_style_popover_style_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/popovers/style-popover/style-popover.component */ 94058);








let MyMoodboardPage = class MyMoodboardPage {
  constructor(_route, _router, popoverController) {
    this._route = _route;
    this._router = _router;
    this.popoverController = popoverController;
    this.options = {
      slidesPerView: 1,
      initialSlide: 0
    };
    this.currentSlide = 0;
    this.myMoodboards = [{
      image: '../../../../assets/images/landing-img.png',
      style: 'Vintage'
    }, {
      image: '../../../../assets/images/landing-img.png',
      style: 'Industrial'
    }, {
      image: '../../../../assets/images/landing-img.png',
      style: 'Minimal'
    }];
    this.allMoodboards = [{
      image: '../../../../assets/images/landing-img.png',
      style: 'Vintage'
    }, {
      image: '../../../../assets/images/landing-img.png',
      style: 'Industrial'
    }, {
      image: '../../../../assets/images/landing-img.png',
      style: 'Minimal'
    }, {
      image: '../../../../assets/images/landing-img.png',
      style: 'Funky'
    }];
  }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if (params.section) {
        this.options.initialSlide = params.section;
      }
    });
  }

  changeSlide(id) {
    this.slides.slideTo(id);
    this.currentSlide = id;
    this.changeQueryParam(id);
  }

  onSlideChange() {
    const currentSlideId = this.slides['el']['swiper']['activeIndex'];
    this.currentSlide = currentSlideId;
    this.changeQueryParam(currentSlideId);
  }

  changeQueryParam(section) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        section
      }
    });
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_popovers_style_popover_style_popover_component__WEBPACK_IMPORTED_MODULE_3__.StylePopoverComponent,
        event: e,
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

};

MyMoodboardPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}];

MyMoodboardPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['slides']
  }]
};
MyMoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-my-moodboard-page',
  template: _my_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_my_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MyMoodboardPage);


/***/ }),

/***/ 21525:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer-profile/book-designer-profile.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDesignerProfilePage": () => (/* binding */ BookDesignerProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _book_designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-designer-profile.page.html?ngResource */ 24395);
/* harmony import */ var _book_designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-designer-profile.page.scss?ngResource */ 31107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BookDesignerProfilePage = class BookDesignerProfilePage {
    constructor() { }
};
BookDesignerProfilePage.ctorParameters = () => [];
BookDesignerProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-book-designer-profile-page',
        template: _book_designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_book_designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookDesignerProfilePage);



/***/ }),

/***/ 85436:
/*!**************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDesignerPage": () => (/* binding */ BookDesignerPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _book_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-designer.page.html?ngResource */ 92759);
/* harmony import */ var _book_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-designer.page.scss?ngResource */ 72605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/book-designer-modal/book-designer-modal.component */ 52064);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);








let BookDesignerPage = class BookDesignerPage {
  constructor(designerService, modalController) {
    this.designerService = designerService;
    this.modalController = modalController;
    this.languages = this.designerService.languages;
    this.designers = [];
  }

  ngOnInit() {
    this.designerService.getContactDesigners().subscribe(res => {
      this.designers = res;
    });
  }

  getDesignerType(d) {
    const role = d.roles[0].name;

    if (role === 'InternalDesigner') {
      return 'Intiri Designer';
    } else if (role === 'ExternalDesigner') {
      return 'External Designer';
    }

    return role;
  }

  getMoodboardImage(d, index = null) {
    const style = d.createdMoodboards[0].style;

    if (index >= 0) {
      return style?.styleImages[index]?.imagePath;
    }

    return style?.imagePath;
  }

  paymentModal(designer) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__.BookDesignerModalComponent,
        componentProps: {
          designer
        },
        cssClass: 'book-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

BookDesignerPage.ctorParameters = () => [{
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_4__.DesignerService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

BookDesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-book-designer-page',
  template: _book_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_book_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BookDesignerPage);


/***/ }),

/***/ 87396:
/*!********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactDesignerPage": () => (/* binding */ ContactDesignerPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contact_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-designer.page.html?ngResource */ 94530);
/* harmony import */ var _contact_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-designer.page.scss?ngResource */ 23043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/book-designer-modal/book-designer-modal.component */ 52064);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);









let ContactDesignerPage = class ContactDesignerPage {
  constructor(modalController, designerService, route, router) {
    this.modalController = modalController;
    this.designerService = designerService;
    this.route = route;
    this.router = router;
    this.languages = this.designerService.languages;
    this.designers = [];

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.designerService.getContactDesigners().subscribe(res => {
      this.designers = res;
    });
    this.route.data.subscribe(data => {
      this.moodboard = data.moodboard;
    });
  }

  getDesignerType(d) {
    const role = d.roles[0].name;

    if (role === 'InternalDesigner') {
      return 'Intiri Designer';
    } else if (role === 'ExternalDesigner') {
      return 'External Designer';
    }

    return role;
  }

  getMoodboardImage(d, index = null) {
    const style = d.createdMoodboards[0].style;

    if (index >= 0) {
      return style?.styleImages[index]?.imagePath;
    }

    return style?.imagePath;
  }

  paymentModal(designer) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__.BookDesignerModalComponent,
        componentProps: {
          designer,
          moodboard: _this.moodboard
        },
        cssClass: 'book-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

ContactDesignerPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_4__.DesignerService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

ContactDesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-contact-designer-page',
  template: _contact_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_contact_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ContactDesignerPage);


/***/ }),

/***/ 81505:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/customize-moodboard/customize-moodboard.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizeMoodboardPage": () => (/* binding */ CustomizeMoodboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customize_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize-moodboard.page.html?ngResource */ 70569);
/* harmony import */ var _customize_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize-moodboard.page.scss?ngResource */ 41546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ 354);









let CustomizeMoodboardPage = class CustomizeMoodboardPage {
    constructor(projectService, route, router, moodboardService, notifier) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.moodboardService = moodboardService;
        this.notifier = notifier;
        this.steps = [
            {
                title: 'Select colors',
                data: [],
            },
            {
                title: 'Select materials',
                data: [],
            },
            {
                title: 'Select products',
                data: [],
            }
        ];
        this.stepsOrder = {
            0: 'colorPalettes',
            1: 'materials',
            2: 'products',
        };
        this.currentStepNo = 0;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            // if edit
            if (data.moodboard) {
                this.moodboard = data.moodboard;
                this.isEdit = true;
            }
            else { // if customize
                this.projectService.currentProject$.subscribe((project) => {
                    this.moodboard = project.currentMoodboard;
                    this.initialMoodboard = { ...project.currentMoodboard };
                    this.isEdit = false;
                });
            }
        });
        this.projectService.getColorPalettes().subscribe((res) => {
            this.steps[0]['data'] = res;
        });
        this.projectService.getMaterials().subscribe((res) => {
            this.steps[1]['data'] = res;
        });
        this.projectService.getProducts().subscribe((res) => {
            this.steps[2]['data'] = res;
        });
    }
    backStep() {
        if (this.canChangeToStep(this.currentStepNo - 1)) {
            this.currentStepNo--;
        }
    }
    nextStep() {
        if (this.canChangeToStep(this.currentStepNo + 1)) {
            this.currentStepNo++;
        }
    }
    goToStep(stepNo) {
        if (this.canChangeToStep(stepNo)) {
            this.currentStepNo = stepNo;
        }
    }
    canChangeToStep(step) {
        if (step >= this.steps.length || step < 0) {
            return false;
        }
        switch (step) {
            case 0: {
                return true;
            }
            case 1: {
                return this.moodboard.colorPalettes.length > 0;
            }
            case 2: {
                return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length > 0;
            }
        }
        return true;
    }
    validateData() {
        return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length > 3 && this.moodboard.products.length > 1;
    }
    toggleItem(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.moodboard[stepName])) {
            if (this.moodboard[stepName].some(e => e.id === item.id)) {
                this.moodboard[stepName] = this.moodboard[stepName].filter(e => e.id !== item.id);
            }
            else {
                this.moodboard[stepName] = [...this.moodboard[stepName], item];
            }
        }
        else {
            // else it's a single select
            this.moodboard[stepName] = this.moodboard[stepName] === item ? null : item;
        }
    }
    finish() {
        if (this.isEdit) {
            this.finishEditing();
        }
        else {
            this.finishCustomizing();
        }
    }
    finishEditing() {
        this.moodboardService.editMoodboard(this.moodboard).subscribe(res => {
            this.notifier.show({
                message: 'Moodboard updated successfully',
                type: 'success',
            });
            const projectId = this.route.snapshot.paramMap.get('projectId');
            this.router.navigateByUrl(`/project-details/${projectId}/moodboard-details/${this.moodboard.id}`);
        });
    }
    finishCustomizing() {
        if (JSON.stringify(this.moodboard) !== JSON.stringify(this.initialMoodboard)) {
            this.moodboard.sourceMoodboardId = this.moodboard.id;
            this.moodboard.id = 0;
        }
        this.projectService.currentProject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe((project) => {
            const customizedProject = project;
            customizedProject.currentMoodboard = this.moodboard;
            this.projectService.setCurrentProject(customizedProject);
            location.replace('/new-project?step=5'); // in future figure out how to do this with router.navigate
        });
    }
};
CustomizeMoodboardPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__.MoodboardService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__.NotifierService }
];
CustomizeMoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-customize-moodboard-page',
        template: _customize_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customize_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomizeMoodboardPage);



/***/ }),

/***/ 99783:
/*!********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerProfilePage": () => (/* binding */ DesignerProfilePage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-profile.page.html?ngResource */ 95662);
/* harmony import */ var _designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designer-profile.page.scss?ngResource */ 67927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/book-designer-modal/book-designer-modal.component */ 52064);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);









let DesignerProfilePage = class DesignerProfilePage {
  constructor(modalController, route, designerService, router) {
    this.modalController = modalController;
    this.route = route;
    this.designerService = designerService;
    this.router = router;
    this.languages = this.designerService.languages;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.designer = data.designer;
    });
  }

  getDesignerType() {
    const role = this.designer.roles[0].name;

    if (role === 'InternalDesigner') {
      return 'Intiri Designer';
    } else if (role === 'ExternalDesigner') {
      return 'External Designer';
    }

    return role;
  }

  normalizeSlashes(string) {
    return string.replaceAll("\\", "/");
  }

  getMoodboardImage(mb, index = null) {
    const style = mb.style;

    if (index >= 0) {
      return style?.styleImages[index]?.imagePath;
    }

    return style?.imagePath;
  } // TODO: needs to be updated after project is allowed to have multiple moodboards!


  getPiecesNo(moodboard) {
    let result = 0;
    result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    return result;
  }

  bookConsultationModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__.BookDesignerModalComponent,
        componentProps: {
          designer: _this.designer
        },
        cssClass: 'book-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

DesignerProfilePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_4__.DesignerService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

DesignerProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-designer-profile-page',
  template: _designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DesignerProfilePage);


/***/ }),

/***/ 86705:
/*!************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/inspirations/inspirations.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspirationsPage": () => (/* binding */ InspirationsPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _inspirations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspirations.page.html?ngResource */ 68015);
/* harmony import */ var _inspirations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspirations.page.scss?ngResource */ 72984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/open-file-modal/open-file-modal.component */ 39582);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 354);












let InspirationsPage = class InspirationsPage {
  constructor(projectService, spinner, sanitizer, notifier, modalController) {
    this.projectService = projectService;
    this.spinner = spinner;
    this.sanitizer = sanitizer;
    this.notifier = notifier;
    this.modalController = modalController;
    this.inspirations = [];
    this.imagePath = null;
    this.newInspiration = null;
  }

  ngOnInit() {
    this.spinner.show();
    this.projectService.getInspirations();
    this.projectService.inspirations$.subscribe(res => {
      this.spinner.hide();
      this.inspirations = res;
    });
  }

  addInspiration() {
    this.projectService.addInspiration(this.newInspiration).subscribe(res => {
      this.projectService.getInspirations();
      this.projectService.inspirations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(res => {
        this.spinner.hide();
        this.inspirations = res;
        this.imagePath = null;
        this.notifier.show({
          message: 'New inspiration image added successfully',
          type: 'success'
        });
      });
    }, () => {
      this.spinner.hide();
      this.imagePath = null;
      this.notifier.show({
        message: 'Cannot upload this file',
        type: 'error'
      });
    });
  }

  openImageInModal(image) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_3__.OpenFileModalComponent,
        componentProps: {
          file: image
        },
        cssClass: 'open-file-modal-css'
      });
      yield modal.present();
    })();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.newInspiration = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.newInspiration));
      this.spinner.show();
      this.addInspiration();
    } else {
      this.imagePath = null;
    }
  }

};

InspirationsPage.ctorParameters = () => [{
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

InspirationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-inspirations-page',
  template: _inspirations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_inspirations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InspirationsPage);


/***/ }),

/***/ 43947:
/*!******************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessengerPage": () => (/* binding */ MessengerPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messenger_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger.page.html?ngResource */ 70780);
/* harmony import */ var _messenger_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger.page.scss?ngResource */ 44013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ 59076);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messenger.service */ 28187);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_modals_share_rate_modals_rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modals/share-rate-modals/rate-modal/rate-modal.component */ 42736);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/designer.service */ 57492);

















let MessengerPage = class MessengerPage {
  constructor(msgService, accountService, datepipe, route, router, sanitizer, spinner, modalController, notifier, designerService) {
    this.msgService = msgService;
    this.accountService = accountService;
    this.datepipe = datepipe;
    this.route = route;
    this.router = router;
    this.sanitizer = sanitizer;
    this.spinner = spinner;
    this.modalController = modalController;
    this.notifier = notifier;
    this.designerService = designerService;
    this.username = 'vladk2';
    this.messages = [];
    this.message = '';
    this.isLoading = false;
    this.err = '';
    this.activeChatUser = {
      photoPath: '',
      id: null,
      firstName: '',
      lastName: '',
      chatPeriodExpired: true
    };
    this.ratePrompt = false;
  }

  ngOnInit() {
    //Pusher.logToConsole = true; // remove after testing
    this.pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_3___default())('0233be6c2ef5fb26cc7d', {
      cluster: 'eu'
    });
    this.msgService.getContacts().subscribe(res => {
      this.contacts = res;
      this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(user => {
        this.loggedUser = user;
      });

      if (this.contacts.length > 0) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let contactId = parseInt(urlParams.get('contact'), 10);

        if (!contactId) {
          contactId = this.contacts[0].id;
          this.activeChatUser = this.contacts[0];
        } else {
          this.activeChatUser = this.contacts.find(u => u.id === contactId);
        }

        this.connectToChannel(contactId);
      }
    });
  }

  checkShouldPromptRating() {
    this.designerService.isDesignerRated(this.activeChatUser.id).subscribe(res => {
      this.ratePrompt = !res && this.activeChatUser.chatPeriodExpired;
    }, () => this.ratePrompt = false);
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.attachments = event.target.files;
      this.attachmentPaths = Array.from(this.attachments).map(e => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e)));
    } else {
      this.attachments = null;
      this.attachmentPaths = null;
    }
  }

  connectToChannel(contactId) {
    this.checkShouldPromptRating();
    const channelName = this.generateChannelName(contactId);
    this.currentChannel = channelName;
    const channel = this.pusher.subscribe(channelName);
    this.msgService.getChatHistory(contactId).subscribe(history => {
      this.messages = history;
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
      channel.bind('message', data => {
        this.messages.push(data);
        setTimeout(() => {
          this.scrollToBottom();
        }, 50);
      });
    });
  }

  generateChannelName(contactId) {
    const sortedIds = [contactId, this.loggedUser.id].sort((a, b) => a - b);
    return `chat_${sortedIds[0]}_${sortedIds[1]}`;
  }

  changeChat(contact) {
    this.messages = [];
    this.activeChatUser = contact;
    this.unsubscribeFromChannel(this.currentChannel);
    this.changeQueryParam(contact.id);
    this.connectToChannel(contact.id);
  }

  sendMsg() {
    if (this.message || this.attachments && !this.isLoading) {
      this.attachments && this.spinner.show();
      this.isLoading = true;
      const req = {
        recipientId: this.activeChatUser.id,
        content: this.message,
        attachments: this.attachments
      };
      this.msgService.sendMessage(req).subscribe(res => {
        this.spinner.hide();
        this.isLoading = false;
        this.attachments = null;
        this.message = '';
      }, err => {
        this.spinner.hide();
        this.attachments = null;
        this.err = 'Error: Cannot upload file(s).';
        this.notifier.show({
          message: this.err,
          type: 'error'
        });
      });
    }
  }

  downloadFile(file) {
    const sourceSplit = file.url.split('/upload/');
    const source = sourceSplit[0] + '/upload/fl_attachment/' + sourceSplit[1];
    const fileName = source.split('/').pop();
    const el = document.createElement('a');
    el.setAttribute('href', source);
    el.setAttribute('download', fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
  }

  parseDate(dateString) {
    const date = new Date(dateString);
    return this.datepipe.transform(date, 'MMM d');
  }

  getChatClassName(msg, rightClass, leftClass) {
    const senderId = msg.senderId ? msg.senderId : msg.SenderId;
    return senderId === this.loggedUser.id ? rightClass : leftClass;
  }

  unsubscribeFromChannel(channelName) {
    this.pusher.unsubscribe(channelName);
  }

  changeQueryParam(contact) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        contact
      }
    });
  }

  openRatingModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ratePrompt = false;
      const modal = yield _this.modalController.create({
        componentProps: {
          designer: _this.activeChatUser
        },
        component: src_app_components_modals_share_rate_modals_rate_modal_rate_modal_component__WEBPACK_IMPORTED_MODULE_6__.RateModalComponent,
        cssClass: 'auto-size-modal-css'
      });
      yield modal.present();
    })();
  }

  scrollToBottom() {
    const element = document.getElementById('chatbox');
    element.scrollTop = element.scrollHeight;
  }

};

MessengerPage.ctorParameters = () => [{
  type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__.MessengerService
}, {
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_14__.NotifierService
}, {
  type: src_app_services_designer_service__WEBPACK_IMPORTED_MODULE_7__.DesignerService
}];

MessengerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-messenger',
  template: _messenger_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_messenger_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MessengerPage);


/***/ }),

/***/ 18974:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodboardDetailsPage": () => (/* binding */ MoodboardDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _moodboard_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moodboard-details.page.html?ngResource */ 34326);
/* harmony import */ var _moodboard_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moodboard-details.page.scss?ngResource */ 47017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);






let MoodboardDetailsPage = class MoodboardDetailsPage {
    constructor(moodboardService, route, router) {
        this.moodboardService = moodboardService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.moodboard = data.moodboard;
        });
        this.projectId = this.route.snapshot.paramMap.get('projectId');
    }
    backToProjectDetails() {
        this.router.navigateByUrl(this.router.url.split('/moodboard-details')[0]);
    }
};
MoodboardDetailsPage.ctorParameters = () => [
    { type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__.MoodboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MoodboardDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-moodboard-details-page',
        template: _moodboard_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_moodboard_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoodboardDetailsPage);



/***/ }),

/***/ 98277:
/*!******************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyIntiriPage": () => (/* binding */ MyIntiriPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_intiri_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-intiri.page.html?ngResource */ 7165);
/* harmony import */ var _my_intiri_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-intiri.page.scss?ngResource */ 74723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/open-file-modal/open-file-modal.component */ 39582);
/* harmony import */ var src_app_components_modals_share_rate_modals_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/share-rate-modals/share-modal/share-modal.component */ 5402);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);













let MyIntiriPage = class MyIntiriPage {
  constructor(projectService, modalController, spinner, sanitizer, notifier) {
    this.projectService = projectService;
    this.modalController = modalController;
    this.spinner = spinner;
    this.sanitizer = sanitizer;
    this.notifier = notifier;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl;
    this.projects = [];
    this.projectId = 0;
    this.inspirations = [];
    this.imagePath = null;
    this.newInspiration = null;
    this.options = {
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        100: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    };
    this.isLoading = true;
  }

  ngOnInit() {
    this.spinner.show();
    this.projectService.getAllProjects().subscribe(res => {
      this.projects = res;
      this.isLoading = false;
      this.spinner.hide();
    });
    this.projectService.getInspirations();
    this.projectService.inspirations$.subscribe(res => {
      this.inspirations = res;
    });
  }

  addInspiration() {
    this.projectService.addInspiration(this.newInspiration).subscribe(res => {
      this.projectService.getInspirations();
      this.projectService.inspirations$.subscribe(res => {
        this.spinner.hide();
        this.inspirations = res;
        this.notifier.show({
          message: 'New inspiration image added successfully',
          type: 'success'
        });
      });
    });
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.newInspiration = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.newInspiration));
      this.spinner.show();
      this.addInspiration();
    } else {
      this.imagePath = null;
    }
  } // TODO: needs to be updated after project is allowed to have multiple moodboards!


  getPiecesNo(project) {
    let result = 0;
    project.projectMoodboards.forEach(moodboard => {
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    });
    return result;
  }

  normalizeSlashes(string) {
    return string.replaceAll("\\", "/");
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  nextProject() {
    this.projectSlides.slideNext();
  }

  prevProject() {
    this.projectSlides.slidePrev();
  } // goToProjectDetails(project: Project){
  //   this.projectService.setCurrentProject(project);
  //   this.router.navigateByUrl('/project-details');
  // }


  openImageInModal(image) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_open_file_modal_open_file_modal_component__WEBPACK_IMPORTED_MODULE_3__.OpenFileModalComponent,
        componentProps: {
          file: image
        },
        cssClass: 'open-file-modal-css'
      });
      yield modal.present();
    })();
  }

  openShare() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: src_app_components_modals_share_rate_modals_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_4__.ShareModalComponent
      });
      yield modal.present();
    })();
  }

};

MyIntiriPage.ctorParameters = () => [{
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__.ProjectService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer
}, {
  type: angular_notifier__WEBPACK_IMPORTED_MODULE_10__.NotifierService
}];

MyIntiriPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['slides']
  }],
  projectSlides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['projectSlides']
  }]
};
MyIntiriPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-my-intiri-page',
  template: _my_intiri_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_my_intiri_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MyIntiriPage);


/***/ }),

/***/ 33735:
/*!**********************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProjectPage": () => (/* binding */ NewProjectPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project.page.html?ngResource */ 85631);
/* harmony import */ var _new_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-project.page.scss?ngResource */ 16882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/create-project-modal/create-project-modal.component */ 60390);
/* harmony import */ var src_app_components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/login/login-modal.component */ 6974);
/* harmony import */ var src_app_models_moodboard_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/moodboard.model */ 52095);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/project.service */ 354);













let NewProjectPage = class NewProjectPage {
  constructor(modalController, projectService, accountService, route, router) {
    this.modalController = modalController;
    this.projectService = projectService;
    this.accountService = accountService;
    this.route = route;
    this.router = router;
    this.isExistingProject = false;
    this.steps = [{
      title: 'Select the room you want to improve',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: []
    }, {
      title: 'Select pictures that you like',
      subtitle: 'Decisions are hard, pick as many as you want.',
      data: []
    }, {
      title: 'Enter more detail about selected room',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: {
        roomShapes: [{
          shape: 'rectangular',
          imagePath: 'icon/rectangle.png'
        }, {
          shape: 'square',
          imagePath: 'icon/square.png'
        }, {
          shape: 'l-shaped',
          imagePath: 'icon/l-shape.png'
        }]
      }
    }, {
      title: 'Select color pallet',
      subtitle: 'Don’t worry, you can chage color later.',
      data: []
    }, {
      title: 'Select the moodboard you like the most',
      subtitle: 'We have found you style match. Choose moodboard you like the most. ',
      data: []
    }, {
      title: 'This is your style',
      subtitle: 'This style captures the balance between comfort and minimalism characteristic of Scandinavial bright design. This include clean lines, minimal decoration and the importance of artwork. Try to create an environment that encourages feelings of strenght, contentmentt and clean lines. Typicalcoloors are calming and neutral with palettes sticking to whites, grays, greens, black and blue accents. The syle allso reflects the wooden landscape and trees of the Nordic countries.',
      data: 'final'
    }];
    this.project = null;
    this.stepsOrder = {
      0: 'room',
      1: 'styleImages',
      2: 'roomDetails.shape',
      3: 'colorPalettes',
      4: 'currentMoodboard',
      5: 'final'
    };
    this.currentStepNo = 0;
  }

  ngOnInit() {
    const isRedirectedFromLogin = this.checkIfRedirectedFromLogin();

    if (isRedirectedFromLogin) {
      const stepNum = this.route.snapshot.queryParamMap.get('step');
      const step = parseInt(stepNum, 10);

      if (!isNaN(step)) {
        this.currentStepNo = step;
      } else {
        console.log(`Invalid value received for step param: ${stepNum}`);
      }
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const stepParam = parseInt(urlParams.get('step'), 10);
    this.projectService.currentProject$.subscribe(project => {
      this.project = project;

      if (project.name === "") {
        this.openStartModal();
      }

      if (project.id) {
        this.isExistingProject = true;
      }
    });
    this.projectService.currentProject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(project => {
      // initial path parameter check (and redirect to that step if possible)
      if (stepParam && this.canChangeToStep(stepParam)) {
        this.currentStepNo = stepParam;
      } else this.currentStepNo = 0;
    });
    this.projectService.getRooms().subscribe(res => {
      this.steps[0]['data'] = res;
    });
    this.projectService.getStyleImages().subscribe(res => {
      this.steps[1]['data'] = res;
    });
    this.projectService.getColorPalettes().subscribe(res => {
      this.steps[3]['data'] = res;
    });
  }

  changeQueryParam(step) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        step
      }
    });
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
      this.changeQueryParam(this.currentStepNo);
      this.projectService.setCurrentProject(this.project);
    }

    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  nextStep() {
    const isUserLoggedIn = this.checkIfUserLoggedIn();

    if (this.currentStepNo + 1 === 4 && !isUserLoggedIn) {
      this.openLoginModal();
    } else {
      if (this.canChangeToStep(this.currentStepNo + 1)) {
        this.currentStepNo++;
        this.changeQueryParam(this.currentStepNo);
        this.projectService.setCurrentProject(this.project);
      }

      if (this.currentStepNo === 4) {
        this.getMoodboardMatches();
      }
    }
  }

  goToStep(stepNo) {
    const isUserLoggedIn = this.checkIfUserLoggedIn();

    if (stepNo === 4 && !isUserLoggedIn) {
      this.openLoginModal();
    } else {
      if (this.canChangeToStep(stepNo)) {
        this.currentStepNo = stepNo;
        this.changeQueryParam(stepNo);
        this.projectService.setCurrentProject(this.project);
      }

      if (stepNo === 4) {
        this.getMoodboardMatches();
      }
    }
  }

  getMoodboardMatches() {
    this.projectService.getMoodboardMatches(this.project).subscribe(res => {
      this.steps[4]['data'] = {
        moodboardFamily: res['moodboardFamily'],
        moodboards: res['moodboards'].map(e => {
          return { ...e.moodboard,
            percentageMatch: e.percentageMatch
          };
        })
      };
    }, error => {
      console.log(error);
    });
  }

  saveCurrentProject() {
    if (this.isExistingProject) {
      this.projectService.addMoodboardToProject(this.project).subscribe(res => {
        this.project.projectMoodboards.push(this.project.currentMoodboard);
        this.projectService.setCurrentProject(this.project);
        this.openFinalModal(true);
      }, error => {
        console.log(error);
      });
    } else {
      this.saveProject();
    }
  }

  saveProject() {
    this.projectService.saveProject(this.project).subscribe(res => {
      this.project.projectMoodboards.push(this.project.currentMoodboard);
      this.project.id = res.id;
      this.projectService.setCurrentProject(this.project);
      this.openFinalModal();
    }, error => {
      console.log(error);
    });
  }

  canChangeToStep(step) {
    if (step >= this.steps.length || step < 0) {
      return false;
    }

    switch (step) {
      case 0:
        {
          return true;
        }

      case 1:
        {
          return !this.isEmpty(this.project.room);
        }

      case 2:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room);
        }

      case 3:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && this.areProjectDetailsValid();
        }

      case 4:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && this.areProjectDetailsValid() && this.project.colorPalettes.length > 0;
        }

      case 5:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && this.areProjectDetailsValid() && this.project.colorPalettes.length > 0 && !this.isMoodboardEmpty(this.project.currentMoodboard);
        }
    }

    return false;
  }

  isEmpty(object) {
    return !object || Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
  }

  isMoodboardEmpty(moodboard) {
    if (!moodboard.id && !moodboard.name && moodboard.materials.length === 0 && moodboard.products.length === 0 && moodboard.colorPalettes.length === 0) {
      return true;
    }

    return false;
  }

  areProjectDetailsValid() {
    return this.project.roomDetails['shape'] && this.project.roomDetails['size'] && !!this.project.budget;
  }

  toggleItem(item) {
    // if you change any selection, selected moodboard will reset
    if (this.currentStepNo < 4) {
      this.project.currentMoodboard = new src_app_models_moodboard_model__WEBPACK_IMPORTED_MODULE_5__.Moodboard();
    }

    const stepName = this.stepsOrder[this.currentStepNo]; // check if it's multi-select

    if (Array.isArray(this.project[stepName])) {
      if (this.project[stepName].some(e => JSON.stringify(e) === JSON.stringify(item))) {
        this.project[stepName] = this.project[stepName].filter(e => e.id !== item.id);
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else {
      // else it's a single select
      // if it's updating sub-object
      if (stepName.includes('.')) {
        this.project[stepName.split('.')[0]][stepName.split('.')[1]] = JSON.stringify(this.project[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item) ? null : item;
      } else {
        this.project[stepName] = JSON.stringify(this.project[stepName]) === JSON.stringify(item) ? null : item;
      }
    }
  }

  openStartModal() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__.CreateProjectModalComponent,
        componentProps: {
          start: true
        },
        cssClass: 'small-modal-css',
        backdropDismiss: false,
        swipeToClose: false
      });
      yield modal.present();
    })();
  }

  openFinalModal(existing = false) {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__.CreateProjectModalComponent,
        componentProps: {
          final: true,
          existing,
          project: _this2.project
        },
        cssClass: 'final-project-step-modal-css',
        backdropDismiss: false,
        swipeToClose: false
      });
      yield modal.present();
    })();
  }

  openLoginModal() {
    var _this3 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: src_app_components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_4__.LoginModalComponent,
        cssClass: 'medium-modal-css',
        backdropDismiss: true,
        swipeToClose: false
      });
      yield modal.present();
    })();
  }

  checkIfRedirectedFromLogin() {
    return this.route.snapshot.queryParamMap.get('step') != null;
  }

  checkIfUserLoggedIn() {
    let isUserLoggedIn = false;
    this.accountService.currentUser$.subscribe(user => {
      if (user) {
        isUserLoggedIn = true;
      }
    });
    return isUserLoggedIn;
  }

};

NewProjectPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__.ProjectService
}, {
  type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}];

NewProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-new-project-page',
  template: _new_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewProjectPage);


/***/ }),

/***/ 15643:
/*!******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPage": () => (/* binding */ PaymentDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details.page.html?ngResource */ 4238);
/* harmony import */ var _payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page.scss?ngResource */ 14400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PaymentDetailsPage = class PaymentDetailsPage {
    constructor() {
        this.items = [
            { name: 'Color advice' },
            { name: 'Room sketch' },
            { name: 'Moodboard adjustment' },
            { name: 'Select products' },
            { name: 'Decoration' },
        ];
        this.consultationPrice = 950;
        this.currency = 'Nok';
        this.consultationNumber = 3;
        this.totalPrice = 2850;
    }
    ngOnInit() { }
};
PaymentDetailsPage.ctorParameters = () => [];
PaymentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-details-page',
        template: _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentDetailsPage);



/***/ }),

/***/ 93577:
/*!************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreBookSelectionPage": () => (/* binding */ PreBookSelectionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pre_book_selection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-book-selection.page.html?ngResource */ 16488);
/* harmony import */ var _pre_book_selection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pre-book-selection.page.scss?ngResource */ 97899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PreBookSelectionPage = class PreBookSelectionPage {
    constructor() { }
};
PreBookSelectionPage.ctorParameters = () => [];
PreBookSelectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pre-book-selection-page',
        template: _pre_book_selection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pre_book_selection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreBookSelectionPage);



/***/ }),

/***/ 99320:
/*!**************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pricing-plans/pricing-plans.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingPlansPage": () => (/* binding */ PricingPlansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pricing_plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-plans.page.html?ngResource */ 4657);
/* harmony import */ var _pricing_plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing-plans.page.scss?ngResource */ 30394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PricingPlansPage = class PricingPlansPage {
    constructor() { }
    ngOnInit() {
    }
};
PricingPlansPage.ctorParameters = () => [];
PricingPlansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pricing-plans',
        template: _pricing_plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pricing_plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PricingPlansPage);



/***/ }),

/***/ 97807:
/*!******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsPage": () => (/* binding */ ProjectDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _project_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.page.html?ngResource */ 65461);
/* harmony import */ var _project_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.page.scss?ngResource */ 23908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/project.model */ 32744);
/* harmony import */ var src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/moodboard.service */ 60608);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 354);









let ProjectDetailsPage = class ProjectDetailsPage {
    constructor(projectService, route, moodboardService, router) {
        this.projectService = projectService;
        this.route = route;
        this.moodboardService = moodboardService;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(data => {
            this.project = data.project;
            this.moodboards = this.project.projectMoodboards;
        });
    }
    getPiecesNo(project) {
        let result = 0;
        project.projectMoodboards.forEach(moodboard => {
            result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
        });
        return result;
    }
    // goToMoodboardDetails(moodboard: Moodboard){
    //   this.moodboardService.setCurrentMoodboard(moodboard);
    //   this.router.navigateByUrl('/moodboard-details');
    // }
    addMoodboardToProject() {
        const currentProject = new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_2__.Project();
        currentProject.id = this.project.id;
        currentProject.name = this.project.name;
        this.projectService.setCurrentProject(currentProject);
        this.router.navigateByUrl('/new-project');
    }
};
ProjectDetailsPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_moodboard_service__WEBPACK_IMPORTED_MODULE_3__.MoodboardService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ProjectDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-project-details-page',
        template: _project_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectDetailsPage);



/***/ }),

/***/ 22032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 36688);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 72653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(accountService, router, fb) {
        this.accountService = accountService;
        this.router = router;
        this.fb = fb;
        this.model = {};
    }
    ngOnInit() {
        this.accountService.currentUser$.subscribe(loggedUser => {
            if (loggedUser) {
                this.router.navigateByUrl('/my-intiri');
            }
        });
    }
    forgotPassword() {
        this.accountService.forgotPassword(this.model).subscribe(response => {
            this.router.navigateByUrl('/sms-verification');
        }, error => {
            console.log(error);
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot-password-page',
        template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 58032:
/*!*********************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorksPage": () => (/* binding */ HowItWorksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _how_it_works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-it-works.page.html?ngResource */ 74943);
/* harmony import */ var _how_it_works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-it-works.page.scss?ngResource */ 43742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HowItWorksPage = class HowItWorksPage {
    constructor() { }
};
HowItWorksPage.ctorParameters = () => [];
HowItWorksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-how-it-works-page',
        template: _how_it_works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_how_it_works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HowItWorksPage);



/***/ }),

/***/ 84808:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.html?ngResource */ 36663);
/* harmony import */ var _landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.page.scss?ngResource */ 48467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







let LandingPage = class LandingPage {
  constructor(translate) {
    this.translate = translate;
    this.comments = [{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris.',
      author: 'John Doe'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'John Boe'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'John Bro'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'Ide Ide'
    }];
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  getOptions() {
    return window.innerWidth > 700 ? {
      slidesPerView: 2
    } : {
      slidesPerView: 1
    };
  }

  logScrollEnd() {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollElement = yield _this.content.getScrollElement(); // get scroll element

      _this.isScrolledDown = scrollElement.scrollTop > 50;
    })();
  }

};

LandingPage.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
}];

LandingPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['slides']
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent]
  }]
};
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-landing-page',
  template: _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LandingPage);


/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_vipps_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/vipps-state */ 18097);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_types_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/types/types */ 41884);










let LoginPage = class LoginPage {
    constructor(accountService, router, formBuilder, nav) {
        this.accountService = accountService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.model = {};
        this.isFormSubmited = false;
        this.activeCode = '47';
        this.loginForm = this.formBuilder.group({
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')
                ])],
        });
    }
    get phoneNumberErrors() {
        return this.loginForm.controls.phoneNumber.errors;
    }
    ngOnInit() {
        this.accountService.currentUser$.subscribe(loggedUser => {
            if (loggedUser) {
                if (loggedUser.roles[0] === 'FreeEndUser') {
                    this.nav.navigateRoot('/my-intiri');
                }
                else if (loggedUser.roles[0] === 'Admin') {
                    this.nav.navigateRoot('/dashboard');
                }
                else if (loggedUser.roles[0] === 'InternalDesigner') {
                    this.nav.navigateRoot('/client-list');
                }
                else if (loggedUser.roles[0] === 'Partner') {
                    this.nav.navigateRoot('/partner');
                }
            }
        });
    }
    setActiveCode(event) {
        this.activeCode = event.detail.value;
    }
    login() {
        this.isFormSubmited = true;
        if (!this.loginForm.valid) {
            return;
        }
        const loginModel = {
            countryCode: this.activeCode,
            phoneNumber: this.loginForm.value.phoneNumber
        };
        //const phoneNumberFull = `${loginModel.countryCode}${loginModel.phoneNumber}`;
        this.accountService.login(loginModel).subscribe((response) => {
            this.router.navigate(['/sms-verification'], { queryParams: {
                    target: src_app_types_types__WEBPACK_IMPORTED_MODULE_4__.VerificationTarget.LOGIN,
                    countryCode: loginModel.countryCode,
                    phoneNumber: loginModel.phoneNumber
                } });
        }, (error) => {
            console.log(error);
        });
    }
    initiateVippsLogin() {
        const redirectUri = '/processing';
        const state = JSON.stringify(new src_app_models_vipps_state__WEBPACK_IMPORTED_MODULE_2__.VippsState('/my-intiri'));
        this.accountService.initiateVippsLogin(redirectUri, state);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login-page',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 38785:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/partner-pages/partner-products/partner-products.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerProductsPage": () => (/* binding */ PartnerProductsPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _partner_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-products.page.html?ngResource */ 88472);
/* harmony import */ var _partner_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partner-products.page.scss?ngResource */ 58503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/menu-popover/menu-popover.component */ 55506);
/* harmony import */ var src_app_components_modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/add-product-modal/add-product-modal.component */ 71681);
/* harmony import */ var src_app_services_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/material.service */ 93985);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);











let PartnerProductsPage = class PartnerProductsPage {
  constructor(popoverController, partnerService, modalController, materialService) {
    this.popoverController = popoverController;
    this.partnerService = partnerService;
    this.modalController = modalController;
    this.materialService = materialService;
    this.products$ = this.partnerService.products$;
    this.material$ = this.materialService.materials$;
  }

  ngOnInit() {
    this.partnerService.getProductsFromThatPartner().subscribe();
    this.partnerService.getProductsType().subscribe(res => {
      this.productTypes = res;
    });
    this.products$.subscribe(response => {
      this.products = response;
    });
  }

  showSettings(e, product) {
    var _this = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__.MenuPopoverComponent,
        event: e,
        componentProps: {
          product: true,
          item: product
        },
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  openAddProductModal() {
    var _this2 = this;

    return (0,C_Users_DELL_Desktop_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this2.popoverController.getTop();
      if (popover) yield popover.dismiss(null);
      const modal = yield _this2.modalController.create({
        component: src_app_components_modals_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddProductModalComponent,
        cssClass: 'product-modal-css'
      });
      yield modal.present();
    })();
  }

  onFilterChange(event) {
    const selectedTypeNames = event.detail.value;
    this.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(products => {
      if (selectedTypeNames.length > 0) {
        this.products = products.filter(products => selectedTypeNames.includes(products.productType.name));
        console.log(this.products, 'produkti');
      } else {
        this.products = products;
      }
    });
  }

};

PartnerProductsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
}, {
  type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_6__.PartnerService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: src_app_services_material_service__WEBPACK_IMPORTED_MODULE_5__.MaterialService
}];

PartnerProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-partner-products-page',
  template: _partner_products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_partner_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PartnerProductsPage);


/***/ }),

/***/ 23851:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/partner-pages/partner-profile/partner-profile.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerProfilePage": () => (/* binding */ PartnerProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _partner_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-profile.page.html?ngResource */ 84899);
/* harmony import */ var _partner_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-profile.page.scss?ngResource */ 87655);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/partner.service */ 30220);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);











let PartnerProfilePage = class PartnerProfilePage {
    constructor(http, accountService, spinner, partnerService, fb, notifier) {
        this.http = http;
        this.accountService = accountService;
        this.spinner = spinner;
        this.partnerService = partnerService;
        this.fb = fb;
        this.notifier = notifier;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl;
        this.partners$ = this.partnerService.partners$;
        this.partnerProfile = {
            firstName: '',
            lastName: '',
            countryCode: '',
            phoneNumber: '',
            email: '',
            street: '',
            postalCode: '',
            city: '',
            country: '',
            photoPath: ''
        };
        this.loggedUser$ = this.accountService.currentUser$;
    }
    ngOnInit() {
        this.spinner.show();
        this.partnerProfileForm = this.fb.group({
            dataInfoGroup: this.fb.group({
                innerGroup: this.fb.group({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    street: "",
                    postalCode: "",
                    city: "",
                    country: "",
                    countryCode: ""
                }),
            }),
        });
        this.partnerService.getPartnerProfile().subscribe(response => {
            this.spinner.hide();
            this.partnerProfile = response;
            this.patchValues(this.partnerProfile);
            if (!response.photoPath) {
                this.partnerProfile.photoPath = '../../../assets/images/profile-img.png';
            }
        });
    }
    patchValues(partnerInfo) {
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.name').patchValue(partnerInfo.name || null);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.email').patchValue(partnerInfo.email);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.phoneNumber').patchValue(partnerInfo.phoneNumber);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.street').patchValue(partnerInfo.street);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.postalCode').patchValue(partnerInfo.postalCode);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.city').patchValue(partnerInfo.city);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.country').patchValue(partnerInfo.country);
        this.partnerProfileForm.get('dataInfoGroup.innerGroup.countryCode').patchValue(partnerInfo.countryCode);
    }
    saveChanges() {
        const userInfoModel = this.partnerProfileForm.value.dataInfoGroup.innerGroup;
        this.spinner.show();
        this.http.put(this.apiUrl + 'partner/update', userInfoModel).subscribe(res => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Profile updated successfully',
                type: 'success',
            });
        });
    }
};
PartnerProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService },
    { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_3__.PartnerService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierService }
];
PartnerProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-partner-profile-page',
        template: _partner_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_partner_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PartnerProfilePage);



/***/ }),

/***/ 59096:
/*!*****************************************************!*\
  !*** ./src/app/pages/processing/processing.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessingPage": () => (/* binding */ ProcessingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _processing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processing.page.html?ngResource */ 97599);
/* harmony import */ var _processing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processing.page.scss?ngResource */ 92547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_DTOs_vipps_access_token_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/DTOs/vipps-access-token.dto */ 10986);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ 89876);







let ProcessingPage = class ProcessingPage {
    constructor(route, router, account) {
        this.route = route;
        this.router = router;
        this.account = account;
    }
    ngOnInit() {
        this.queryParams = this.getQueryParams();
        const code = this.queryParams.get('code');
        const state = this.queryParams.get('state');
        const scope = this.queryParams.get('scope');
        const redirectUri = location.origin + location.pathname;
        const accessTokenRequestData = new src_app_DTOs_vipps_access_token_dto__WEBPACK_IMPORTED_MODULE_2__.VippsAccessTokenRequestDTO(code, state, scope, redirectUri);
        const hasUserGivenConsent = this.hasUserGivenConsent(this.queryParams);
        if (hasUserGivenConsent) {
            const stateObj = JSON.parse(state);
            this.account.finalizeVippsLogin(accessTokenRequestData).subscribe(() => {
                this.router.navigateByUrl(stateObj.returnUri);
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.errorMsg = this.queryParams.get('error_description');
            this.router.navigateByUrl('/login');
        }
    }
    getQueryParams() {
        return this.route.snapshot.queryParamMap;
    }
    hasUserGivenConsent(queryParams) {
        let consent = false;
        if (!queryParams.has('error')) {
            consent = true;
        }
        return consent;
    }
};
ProcessingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService }
];
ProcessingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-processing-page',
        template: _processing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_processing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProcessingPage);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 67364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 62581);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);










let ProfilePage = class ProfilePage {
    constructor(http, accountService, spinner, notifier, fb) {
        this.http = http;
        this.accountService = accountService;
        this.spinner = spinner;
        this.notifier = notifier;
        this.fb = fb;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
        this.userInfo = {
            firstName: '',
            lastName: '',
            gender: '',
            countryCode: '',
            phoneNumber: '',
            email: '',
            street: '',
            postalCode: '',
            city: '',
            country: '',
            photoPath: ''
        };
        this.loggedUser$ = this.accountService.currentUser$;
    }
    ngOnInit() {
        this.spinner.show();
        this.profileForm = this.fb.group({
            dataInfoGroup: this.fb.group({
                innerGroup: this.fb.group({
                    firstName: "",
                    lastName: "",
                    gender: "",
                    email: "",
                    phoneNumber: "",
                    street: "",
                    postalCode: "",
                    city: "",
                    country: "",
                    countryCode: ""
                }),
            }),
        });
        this.http.get(this.apiUrl + 'users/profile').toPromise().then((res) => {
            this.spinner.hide();
            this.userInfo = res;
            this.patchValues(this.userInfo);
            if (!res.photoPath) {
                this.userInfo.photoPath = '../../../assets/images/profile-img.png';
            }
        });
    }
    patchValues(userInfo) {
        this.profileForm.get('dataInfoGroup.innerGroup.firstName').patchValue(userInfo.firstName);
        this.profileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(userInfo.lastName);
        this.profileForm.get('dataInfoGroup.innerGroup.gender').patchValue(userInfo.gender);
        this.profileForm.get('dataInfoGroup.innerGroup.email').patchValue(userInfo.email);
        this.profileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(userInfo.lastName);
        this.profileForm.get('dataInfoGroup.innerGroup.gender').patchValue(userInfo.gender);
        this.profileForm.get('dataInfoGroup.innerGroup.phoneNumber').patchValue(userInfo.phoneNumber);
        this.profileForm.get('dataInfoGroup.innerGroup.street').patchValue(userInfo.street);
        this.profileForm.get('dataInfoGroup.innerGroup.postalCode').patchValue(userInfo.postalCode);
        this.profileForm.get('dataInfoGroup.innerGroup.city').patchValue(userInfo.city);
        this.profileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(userInfo.lastName);
        this.profileForm.get('dataInfoGroup.innerGroup.country').patchValue(userInfo.country);
        this.profileForm.get('dataInfoGroup.innerGroup.countryCode').patchValue(userInfo.countryCode);
    }
    saveChanges() {
        const userInfoModel = this.profileForm.value.dataInfoGroup.innerGroup;
        this.spinner.show();
        this.http.put(this.apiUrl + 'users/profile', userInfoModel).subscribe(res => {
            this.spinner.hide();
            this.notifier.show({
                message: 'Profile updated successfully',
                type: 'success',
            });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__.NotifierService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile-page',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 66690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 46325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 47863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_DTOs_Out_register_out_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/DTOs/Out/register-out.dto */ 56820);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_types_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/types/types */ 41884);









let RegisterPage = class RegisterPage {
    constructor(accountService, formBuilder, router) {
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isFormSubmited = false;
        this.activeCode = '47';
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')
                ])],
        });
        const state = router.getCurrentNavigation().extras.state;
        if (state) {
            this.newProjectPageStep = state['step'];
        }
        console.log(this.newProjectPageStep);
    }
    get firstNameErrors() {
        return this.registerForm.controls.firstName.errors;
    }
    get lastNameErrors() {
        return this.registerForm.controls.lastName.errors;
    }
    get phoneNumberErrors() {
        return this.registerForm.controls.phoneNumber.errors;
    }
    setActiveCode(event) {
        this.activeCode = event.detail.value;
    }
    register() {
        this.isFormSubmited = true;
        if (!this.registerForm.valid) {
            return;
        }
        const registerModel = new src_app_DTOs_Out_register_out_dto__WEBPACK_IMPORTED_MODULE_2__.RegisterOutDTO(this.registerForm.value.firstName, this.registerForm.value.lastName, this.activeCode, this.registerForm.value.phoneNumber);
        this.accountService.register(registerModel).subscribe((response) => {
            const queryParams = {
                target: src_app_types_types__WEBPACK_IMPORTED_MODULE_4__.VerificationTarget.REGISTER,
                ...response,
                step: this.newProjectPageStep
            };
            Object.keys(queryParams)
                .filter(key => queryParams[key] === null || queryParams[key] === undefined)
                .forEach(key => delete queryParams[key]);
            this.router.navigate(['/sms-verification'], { queryParams: queryParams });
        }, error => {
            this.error = error;
            console.log(error);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register-page',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 55250:
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-password/reset.password.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page.html?ngResource */ 44367);
/* harmony import */ var _reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss?ngResource */ 66222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);







let ResetPasswordPage = class ResetPasswordPage {
    constructor(accountService, router, fb) {
        this.accountService = accountService;
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        this.intitializeForm();
    }
    intitializeForm() {
        this.resetPassForm = this.fb.group({
            password: [''],
            confirmPassword: [''],
            // This is only for testing and presenatation purpose
            phoneNumber: localStorage.getItem('userPhone'),
            token: localStorage.getItem('resetToken')
        });
    }
    resetPassword() {
        this.accountService.resetPassword(this.resetPassForm.value).subscribe(response => {
            // This is only for testing and presenatation purpose
            localStorage.removeItem('resetToken');
            localStorage.removeItem('userPhone');
            this.router.navigateByUrl('/login');
        }, error => {
            console.log(error);
        });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reset-password-page',
        template: _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordPage);



/***/ }),

/***/ 40970:
/*!*****************************************************************!*\
  !*** ./src/app/pages/sms-verification/sms-verification.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsVerificationPage": () => (/* binding */ SmsVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sms_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-verification.page.html?ngResource */ 83423);
/* harmony import */ var _sms_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms-verification.page.scss?ngResource */ 70087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 89876);
/* harmony import */ var src_app_types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/types/types */ 41884);








let SmsVerificationPage = class SmsVerificationPage {
    constructor(router, route, accountService, nav) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.nav = nav;
    }
    ngOnInit() {
        this.getVerificationTarget();
    }
    // this called every time when user changed the code
    onCodeChanged(code) {
        //console.log('change', code);
    }
    // this called only if user entered full code
    onCodeCompleted(verificationCode) {
        switch (this.verificationTarget) {
            case src_app_types_types__WEBPACK_IMPORTED_MODULE_3__.VerificationTarget.LOGIN:
                {
                    const countryCode = this.getQueryParamFromSnapshot('countryCode');
                    const phoneNumber = this.getQueryParamFromSnapshot('phoneNumber');
                    this.accountService.smsVerificationLogin(countryCode, phoneNumber, verificationCode)
                        .subscribe(response => {
                        this.accountService.currentUser$.subscribe(loggedUser => {
                            if (loggedUser) {
                                if (loggedUser.roles[0] === 'FreeEndUser') {
                                    this.nav.navigateRoot('/my-intiri');
                                }
                                else if (loggedUser.roles[0] === 'Admin') {
                                    this.nav.navigateRoot('/dashboard');
                                }
                                else if (loggedUser.roles[0] === 'InternalDesigner') {
                                    this.nav.navigateRoot('/client-list');
                                }
                                else if (loggedUser.roles[0] === 'Partner') {
                                    this.nav.navigateRoot('/partner/profile');
                                }
                            }
                        });
                        // this.router.navigate(['/my-intiri']);
                    }, error => {
                        this.error = error;
                        console.log(error);
                    });
                    break;
                }
            case src_app_types_types__WEBPACK_IMPORTED_MODULE_3__.VerificationTarget.REGISTER:
                {
                    const countryCode = this.getQueryParamFromSnapshot('countryCode');
                    const phoneNumber = this.getQueryParamFromSnapshot('phoneNumber');
                    const firstName = this.getQueryParamFromSnapshot('firstName');
                    const lastName = this.getQueryParamFromSnapshot('lastName');
                    const step = this.getQueryParamFromSnapshot('step');
                    this.accountService.smsVerificationRegister(countryCode, phoneNumber, verificationCode, firstName, lastName).subscribe(response => {
                        if (step) {
                            this.router.navigate(['/new-project'], { queryParams: { step } });
                        }
                        else {
                            this.router.navigate(['/my-intiri']);
                        }
                    }, error => {
                        this.error = error;
                        console.log(error);
                    });
                    break;
                }
            default:
                console.log('Invalid value for verification target', this.verificationTarget);
                break;
        }
        this.codeInput.reset();
    }
    resendVerificationCode() {
        const phoneNumberFull = this.getQueryParamFromSnapshot('phoneNumberFull');
        this.accountService.resendVerificationCode(phoneNumberFull).subscribe(response => {
            // nothing to do here
        }, error => {
            this.error = error.error;
            console.log(error);
        });
    }
    getVerificationTarget() {
        const target = this.route.snapshot.queryParamMap.get('target');
        if (target) {
            this.verificationTarget = target;
        }
    }
    getQueryParamFromSnapshot(param) {
        return this.route.snapshot.queryParamMap.get(param);
    }
};
SmsVerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
SmsVerificationPage.propDecorators = {
    codeInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['codeInput',] }]
};
SmsVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sms-verification-page',
        template: _sms_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sms_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SmsVerificationPage);



/***/ }),

/***/ 22541:
/*!****************************************!*\
  !*** ./src/app/pipes/time-ago.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let TimeAgoPipe = class TimeAgoPipe {
    transform(d) {
        let currentDate = new Date(new Date().toUTCString());
        let date = new Date(d);
        let year = currentDate.getFullYear() - date.getFullYear();
        let month = currentDate.getMonth() - date.getMonth();
        let day = currentDate.getDate() - date.getDate();
        let hour = currentDate.getHours() - date.getHours() - 2; // remove -2, set timezone (now is pulling UTC from database)
        let minute = currentDate.getMinutes() - date.getMinutes();
        let second = currentDate.getSeconds() - date.getSeconds();
        let createdSecond = (year * 31556926) + (month * 2629746) + (day * 86400) + (hour * 3600) + (minute * 60) + second;
        if (createdSecond >= 31556926) {
            let yearAgo = Math.floor(createdSecond / 31556926);
            return yearAgo > 1 ? yearAgo + " years ago" : yearAgo + " year ago";
        }
        else if (createdSecond >= 2629746) {
            let monthAgo = Math.floor(createdSecond / 2629746);
            return monthAgo > 1 ? monthAgo + " months ago" : monthAgo + " month ago";
        }
        else if (createdSecond >= 86400) {
            let dayAgo = Math.floor(createdSecond / 86400);
            return dayAgo > 1 ? dayAgo + " days ago" : dayAgo + " day ago";
        }
        else if (createdSecond >= 3600) {
            let hourAgo = Math.floor(createdSecond / 3600);
            return hourAgo > 1 ? hourAgo + " hours ago" : hourAgo + " hour ago";
        }
        else if (createdSecond >= 60) {
            let minuteAgo = Math.floor(createdSecond / 60);
            return minuteAgo > 1 ? minuteAgo + " minutes ago" : minuteAgo + " minute ago";
        }
        else if (createdSecond < 60) {
            return createdSecond > 1 ? createdSecond + " seconds ago" : createdSecond + " second ago";
        }
        else if (createdSecond < 0) {
            return "0 second ago";
        }
    }
};
TimeAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'timeAgo' })
], TimeAgoPipe);



/***/ }),

/***/ 89876:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _DTOs_vipps_auth_url_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTOs/vipps-auth-url.dto */ 89439);
/* harmony import */ var _DTOs_sms_verification_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DTOs/sms-verification.dto */ 79232);








let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(model) {
        return this.http.post(this.apiUrl + 'account/login', model);
    }
    register(model) {
        return this.http.post(this.apiUrl + 'account/register', model);
    }
    smsVerificationLogin(countryCode, phoneNumber, verificationCode) {
        const verificationDTO = new _DTOs_sms_verification_dto__WEBPACK_IMPORTED_MODULE_2__.SmsVerificationDTO(countryCode, phoneNumber, verificationCode);
        return this.http.post(this.apiUrl + 'account/sms-verification-login', verificationDTO)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
            if (user) {
                this.setCurrentUser(user);
            }
        }));
    }
    smsVerificationRegister(countryCode, phoneNumber, verificationCode, firstName, lastName) {
        const verificationDTO = {
            countryCode,
            phoneNumber,
            verificationCode,
            firstName,
            lastName
        };
        return this.http.post(this.apiUrl + 'account/sms-verification-register', verificationDTO)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
            if (user) {
                this.setCurrentUser(user);
            }
        }));
    }
    resendVerificationCode(phoneNumberFull) {
        return this.http.post(this.apiUrl + 'account/resend-sms-verification', { phoneNumberFull });
    }
    setCurrentUser(user) {
        if (user) {
            user.roles = [];
            const tokenData = this.getDecodedToken(user.token);
            const roles = tokenData.role;
            Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
            user.id = parseInt(tokenData.nameid);
            user.fullName = tokenData.name;
            user.photoPath = user.photoPath ? user.photoPath : tokenData.prn;
            localStorage.setItem('user', JSON.stringify(user));
        }
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }
    getDecodedToken(token) {
        return JSON.parse(atob(token.split('.')[1]));
    }
    forgotPassword(model) {
        return this.http.patch(this.apiUrl + 'account/forgot-password', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            const user = response;
            if (user) {
                // This is only for testing and presenatation purpose
                localStorage.setItem('resetToken', response.token);
                localStorage.setItem('userPhone', response.phoneNumber);
            }
        }));
    }
    resetPassword(model) {
        return this.http.post(this.apiUrl + 'account/reset-password', model);
    }
    initiateVippsLogin(redirectionPath, state) {
        const redirectionUri = location.origin + redirectionPath;
        const authUrlRequest = new _DTOs_vipps_auth_url_dto__WEBPACK_IMPORTED_MODULE_1__.VippsAuthUrlRequestDTO(redirectionUri, state);
        return this.http
            .post(this.apiUrl + 'account/vipps-auth-url', authUrlRequest)
            .subscribe((response) => {
            if (response) {
                window.location.href = String(response.authorizationUrl);
            }
        }, (error) => {
            console.log(error);
        });
    }
    finalizeVippsLogin(auth) {
        return this.http.post(this.apiUrl + 'account/vipps-login', auth).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                this.currentUserSource.next(user);
            }
        }));
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
AccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], AccountService);



/***/ }),

/***/ 3567:
/*!*******************************************!*\
  !*** ./src/app/services/color.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorService": () => (/* binding */ ColorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let ColorService = class ColorService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.colorPalettesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.colorPalettes$ = this.colorPalettesSource.asObservable();
        this.colorsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.colors$ = this.colorsSource.asObservable();
    }
    getColors() {
        return this.http.get(this.apiUrl + 'Colors').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((colors) => {
            if (colors) {
                this.colorsSource.next(colors);
            }
        })).toPromise();
    }
    getColorPalettes() {
        return this.http.get(this.apiUrl + 'colorPalettes').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((color) => {
            if (color) {
                this.colorPalettesSource.next(color);
            }
        })).toPromise();
    }
    addColorPalette(colorObj) {
        const formData = new FormData();
        Object.keys(colorObj).forEach(key => formData.append(key, colorObj[key]));
        return this.http.post(`${this.apiUrl}colorPalettes/add`, formData);
    }
    deleteColorPalette(colorId) {
        return this.http.delete(this.apiUrl + 'colorPalettes/delete/' + colorId);
    }
};
ColorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ColorService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ColorService);



/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getDashboardData() {
        return this.http.get(this.apiUrl + 'admin/totalCount');
    }
    getConsulationsInfo() {
        return this.http.get(this.apiUrl + 'consultations');
    }
    updateConsulationsInfo(data) {
        return this.http.patch(this.apiUrl + 'consultations/update', data);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getDesignerRate() {
        return this.http.get(this.apiUrl + 'ratings/designerRating');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
    //TODO Example service for API calls
], DataService);



/***/ }),

/***/ 57492:
/*!**********************************************!*\
  !*** ./src/app/services/designer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerService": () => (/* binding */ DesignerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let DesignerService = class DesignerService {
    constructor(http) {
        this.http = http;
        this.languages = {
            'EN': 'English',
            'NO': 'Norwegian',
            'NO/EN': 'English, Norwegian'
        };
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.designersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.designers$ = this.designersSource.asObservable();
    }
    getDesigners() {
        return this.http.get(this.apiUrl + 'designers').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((designer) => {
            if (designer) {
                this.designersSource.next(designer);
            }
        })).toPromise();
    }
    addDesigner(designerObj) {
        return this.http.post(`${this.apiUrl}account/register/designer`, designerObj);
    }
    getContactDesigners() {
        return this.http.get(this.apiUrl + 'designers/contactDesigners');
    }
    getDesigner(id) {
        return this.http.get(this.apiUrl + 'designers/id/' + id);
    }
    resolve(route) {
        return this.getDesigner(parseInt(route.paramMap.get('id')));
    }
    rateDesigner(payload) {
        return this.http.put(this.apiUrl + 'ratings/addRating', payload);
    }
    isDesignerRated(designerId) {
        return this.http.get(this.apiUrl + 'ratings/isRated/id/' + designerId);
    }
    getDesignerRating() {
        return this.http.get(this.apiUrl + 'ratings/designerRating');
    }
};
DesignerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
DesignerService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DesignerService);



/***/ }),

/***/ 71155:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);





const LNG_KEY = 'SELECTED_LANGUAGE';
let LanguageService = class LanguageService {
    constructor(translate, storage) {
        this.translate = translate;
        this.storage = storage;
        this.selected = '';
        this.languageChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    setInitialAppLanguage() {
        let language = 'no';
        this.languageChange$.next(language);
        this.translate.setDefaultLang(language);
        this.storage.get(LNG_KEY).then(val => {
            if (val) {
                this.setLanguage(val);
                this.selected = val;
            }
            else if (!val) {
                this.setLanguage('no');
            }
        });
    }
    getLanguages() {
        return [
            { text: 'English', value: 'en', img: 'assets/icon/flags/us.svg' },
            { text: 'Norwegian', value: 'no', img: 'assets/icon/flags/no.svg' },
        ];
    }
    setLanguage(lng) {
        this.translate.use(lng);
        this.selected = lng;
        this.storage.set(LNG_KEY, lng);
        this.languageChange$.next(lng);
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LanguageService);



/***/ }),

/***/ 93985:
/*!**********************************************!*\
  !*** ./src/app/services/material.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialService": () => (/* binding */ MaterialService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let MaterialService = class MaterialService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.materialsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.materials$ = this.materialsSource.asObservable();
    }
    getMaterials() {
        return this.http.get(this.apiUrl + 'materials').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((material) => {
            if (material) {
                this.materialsSource.next(material);
            }
        })).toPromise();
    }
    addMaterial(materialObj) {
        const formData = new FormData();
        Object.keys(materialObj).forEach(key => formData.append(key, materialObj[key]));
        formData.delete('imageFile'); // removing it first so we can manually add a file name
        formData.append('imageFile', materialObj.imageFile, `materialImg${materialObj.name.replace(/\s/g, '_')}.png`);
        return this.http.post(`${this.apiUrl}materials/add`, formData);
    }
    deleteMaterial(materialId) {
        return this.http.delete(this.apiUrl + 'materials/delete/' + materialId);
    }
    getMaterialTypes() {
        return this.http.get(this.apiUrl + 'materialTypes');
    }
};
MaterialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
MaterialService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], MaterialService);



/***/ }),

/***/ 28187:
/*!***********************************************!*\
  !*** ./src/app/services/messenger.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessengerService": () => (/* binding */ MessengerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let MessengerService = class MessengerService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    sendMessage(messageData) {
        let formData = new FormData();
        formData.append('RecipientId', messageData.recipientId);
        formData.append('Content', messageData.content);
        if (messageData.attachments) {
            const fileArray = Array.from(messageData.attachments);
            fileArray.forEach((file) => { formData.append('Attachments', file); });
        }
        return this.http.post(`${this.apiUrl}messenger`, formData);
    }
    getContacts() {
        return this.http.get(`${this.apiUrl}messenger/chat-persons`);
    }
    getChatHistory(userId) {
        return this.http.get(`${this.apiUrl}messenger/chat-history/${userId}`);
    }
};
MessengerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MessengerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MessengerService);



/***/ }),

/***/ 60608:
/*!***********************************************!*\
  !*** ./src/app/services/moodboard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodboardService": () => (/* binding */ MoodboardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let MoodboardService = class MoodboardService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.mbSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.moodboards$ = this.mbSource.asObservable();
    }
    getMoodboards() {
        return this.http.get(this.apiUrl + 'moodboards').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((mbs) => {
            if (mbs) {
                this.mbSource.next(mbs);
            }
        })).toPromise();
        ;
    }
    getMoodboard(id) {
        return this.http.get(this.apiUrl + 'moodboards/id/' + id);
    }
    updateMoodboard(moodboard) {
        return this.http.post(this.apiUrl + 'moodboards/addMoodboard', moodboard);
    }
    addMoodboard(moodboard) {
        const req_data = this.parseMoodboard(moodboard);
        return this.http.post(this.apiUrl + 'moodboards/add', req_data);
    }
    editMoodboard(moodboard) {
        const editMb = {
            moodboardId: moodboard.id,
            materialIds: moodboard.materials.map(e => e['id']),
            colorPaletteIds: moodboard.colorPalettes.map(e => e['id']),
            productIds: moodboard.products.map(e => e['id'])
        };
        return this.http.put(this.apiUrl + 'moodboards/edit', editMb);
    }
    deleteMoodboard(moodboardId) {
        return this.http.delete(this.apiUrl + 'moodboard/delete/' + moodboardId);
    }
    setIsTemplate(req) {
        return this.http.patch(this.apiUrl + 'moodboards/templateSet', req);
    }
    parseMoodboard(moodboard) {
        let parsedProj = {
            styleId: moodboard.style['id'],
            colorPaletteIds: moodboard.colorPalettes.map(e => e['id']),
            roomId: moodboard.room['id'],
            materialIds: moodboard.materials.map(e => e['id']),
            productIds: moodboard.products.map(e => e['id'])
        };
        return parsedProj;
    }
    ;
    resolve(route) {
        return this.getMoodboard(parseInt(route.paramMap.get('id')));
    }
};
MoodboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
MoodboardService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], MoodboardService);



/***/ }),

/***/ 30220:
/*!*********************************************!*\
  !*** ./src/app/services/partner.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerService": () => (/* binding */ PartnerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let PartnerService = class PartnerService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.partnersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.productSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(undefined);
        this.partners$ = this.partnersSource.asObservable();
        this.products$ = this.productSource.asObservable();
    }
    getPartners() {
        return this.http.get(this.apiUrl + 'partner').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((partner) => {
            if (partner) {
                this.partnersSource.next(partner);
            }
        })).toPromise();
    }
    getProductsFromThatPartner() {
        return this.http.get(this.apiUrl + 'products').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((productResponse) => {
            if (productResponse) {
                this.productSource.next(productResponse);
            }
        }));
    }
    getProductsType() {
        return this.http.get(this.apiUrl + 'productTypes');
    }
    addPartner(partnerObj) {
        const formData = new FormData();
        Object.keys(partnerObj).forEach(key => formData.append(key, partnerObj[key]));
        formData.delete('logoFile'); // removing it first so we can manually add a file name
        formData.append('logoFile', partnerObj.logoFile, `partnerImg${partnerObj.name.replace(/\s/g, '_')}.png`);
        return this.http.post(`${this.apiUrl}partner/createPartner`, formData);
    }
    addPartnerContact(partnerObj) {
        return this.http.post(`${this.apiUrl}account/register/partnerContact`, partnerObj);
    }
    getPartner(id) {
        return this.http.get(this.apiUrl + 'partner/partner/' + id);
    }
    getPartnerProfile() {
        return this.http.get(this.apiUrl + 'partner/profile');
    }
    deletePartner(partnerId) {
        return this.http.delete(this.apiUrl + 'partner/delete/' + partnerId);
    }
    deletePartnerContact(contactId) {
        return this.http.delete(this.apiUrl + 'account/delete-user/' + contactId);
    }
    deleteProduct(productId) {
        return this.http.delete(this.apiUrl + 'products/delete/' + productId);
    }
    resolve(route) {
        return this.getPartner(parseInt(route.paramMap.get('id')));
    }
    addPartnerProduct(productData) {
        const formData = new FormData();
        Object.keys(productData).forEach(key => formData.append(key, productData[key]));
        formData.delete('imageFile'); // removing it first so we can manually add a file name
        formData.append('imageFile', productData.imageFile, `productImg${productData.name.replace(/\s/g, '_')}.png`);
        return this.http.post(`${this.apiUrl}products/add`, formData);
    }
};
PartnerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PartnerService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PartnerService);



/***/ }),

/***/ 51863:
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PaymentService = class PaymentService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    sendPayment(req) {
        return this.http.post(this.apiUrl + 'payment', req);
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PaymentService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PaymentService);



/***/ }),

/***/ 354:
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project.model */ 32744);







let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.currentProjectSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.currentProject$ = this.currentProjectSource.asObservable();
        this.inspirationsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.inspirations$ = this.inspirationsSource.asObservable();
    }
    setCurrentProject(project) {
        if (!project) {
            project = new _models_project_model__WEBPACK_IMPORTED_MODULE_1__.Project();
        }
        sessionStorage.setItem('project', JSON.stringify(project));
        this.currentProjectSource.next(project);
    }
    getStyleImages() {
        return this.http.get(this.apiUrl + 'styleImages');
    }
    getColorPalettes() {
        return this.http.get(this.apiUrl + 'colorPalettes');
    }
    getRooms() {
        return this.http.get(this.apiUrl + 'rooms');
    }
    getProducts() {
        return this.http.get(this.apiUrl + 'products');
    }
    getMaterials() {
        return this.http.get(this.apiUrl + 'materials');
    }
    getAllProjects() {
        return this.http.get(this.apiUrl + 'projects');
    }
    getProject(id) {
        return this.http.get(this.apiUrl + 'projects/id/' + id);
    }
    parseProject(project) {
        let parsedProj = {
            styleImageIds: project.styleImages.map(e => e['id']),
            colorPaletteIds: project.colorPalettes.map(e => e['id']),
            roomId: project.room['id'],
            budgetRate: 0,
            moodboard: this.parseMoodboard(project.currentMoodboard),
            roomDetails: { size: project.roomDetails['size'], shape: project.roomDetails['shape'].shape },
            name: project.name
        };
        return parsedProj;
    }
    ;
    getMoodboardMatches(project) {
        const req_data = this.parseProject(project);
        return this.http.post(this.apiUrl + 'projects/moodboard-match', req_data);
    }
    saveProject(project) {
        const req_data = this.parseProject(project);
        return this.http.post(this.apiUrl + 'projects/create', req_data);
    }
    addMoodboardToProject(project) {
        const reqData = {
            projectId: project.id,
            moodboard: this.parseMoodboard(project.currentMoodboard)
        };
        return this.http.post(this.apiUrl + 'projects/addMoodboard', reqData);
    }
    resolve(route) {
        return this.getProject(parseInt(route.paramMap.get('id')));
    }
    parseMoodboard(moodboard) {
        if (moodboard.room && moodboard.style) {
            let parsedMdb = {
                styleId: moodboard.style ? moodboard.style['id'] : null,
                colorPaletteIds: moodboard.colorPalettes.map(e => e['id']),
                roomId: moodboard.room['id'],
                materialIds: moodboard?.materials.map(e => e['id']),
                productIds: moodboard?.products.map(e => e['id']),
                id: moodboard.id,
                name: moodboard.name,
                sourceMoodboardId: moodboard.sourceMoodboardId
            };
            return parsedMdb;
        }
        return moodboard;
    }
    ;
    getInspirations() {
        return this.http.get(this.apiUrl + 'inspirations').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((inspirations) => {
            this.inspirationsSource.next(inspirations);
        })).toPromise();
    }
    addInspiration(file) {
        const formData = new FormData();
        formData.append('inFile', file);
        return this.http.post(this.apiUrl + 'inspirations/add', formData);
    }
    deleteInspiration(id) {
        return this.http.delete(this.apiUrl + 'inspirations/delete/' + id);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ProjectService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ 51037:
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomService": () => (/* binding */ RoomService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let RoomService = class RoomService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.roomsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.rooms$ = this.roomsSource.asObservable();
    }
    getRooms() {
        return this.http.get(this.apiUrl + 'rooms').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((room) => {
            if (room) {
                this.roomsSource.next(room);
            }
        })).toPromise();
    }
    addRoom(roomObj) {
        const formData = new FormData();
        Object.keys(roomObj).forEach(key => formData.append(key, roomObj[key]));
        formData.delete('imageFile'); // removing it first so we can manually add a file name
        formData.append('imageFile', roomObj.imageFile, `roomImg${roomObj.name.replace(/\s/g, '_')}.png`);
        return this.http.post(`${this.apiUrl}rooms/add`, formData);
    }
    deleteRoom(roomId) {
        return this.http.delete(this.apiUrl + 'rooms/delete/' + roomId);
    }
    getRoomTypes() {
        return this.http.get(this.apiUrl + 'roomTypes');
    }
};
RoomService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
RoomService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], RoomService);



/***/ }),

/***/ 63112:
/*!*******************************************!*\
  !*** ./src/app/services/style.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleService": () => (/* binding */ StyleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let StyleService = class StyleService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.stylesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.styles$ = this.stylesSource.asObservable();
        this.styleImagesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.styleImages$ = this.styleImagesSource.asObservable();
    }
    getStyles() {
        return this.http.get(this.apiUrl + 'styles').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((styles) => {
            if (styles) {
                this.stylesSource.next(styles);
            }
        })).toPromise();
    }
    addStyle(styleObj) {
        const formData = new FormData();
        Object.keys(styleObj).forEach(key => formData.append(key, styleObj[key]));
        formData.delete('imageFile'); // removing it first so we can manually add a file name
        formData.append('imageFile', styleObj.imageFile, `styleImg${styleObj.name.replace(/\s/g, '_')}.png`);
        return this.http.post(`${this.apiUrl}styles/add`, formData);
    }
    deleteStyle(styleId) {
        return this.http.delete(this.apiUrl + 'styles/delete/' + styleId);
    }
    //StyleImages
    getStyleImages() {
        return this.http.get(this.apiUrl + 'styleImages').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((styleImages) => {
            if (styleImages) {
                this.styleImagesSource.next(styleImages);
            }
        })).toPromise();
    }
    addStyleImage(styleImageObj) {
        const formData = new FormData();
        const uniqueStr = Date.now().toString(36) + Math.random().toString(36);
        Object.keys(styleImageObj).forEach(key => formData.append(key, styleImageObj[key]));
        formData.delete('imageFile'); // removing it first so we can manually add a file name
        formData.append('imageFile', styleImageObj.imageFile, `styleImg${uniqueStr}.png`);
        return this.http.post(`${this.apiUrl}styleImages/add`, formData);
    }
    deleteStyleImage(styleImageId) {
        return this.http.delete(this.apiUrl + 'styleImages/delete/' + styleImageId);
    }
};
StyleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
StyleService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], StyleService);



/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);






let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.users$ = this.userSource.asObservable();
    }
    getUsers() {
        return this.http.get(this.apiUrl + 'users/endUsers').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            if (user) {
                this.userSource.next(user);
            }
        })).toPromise();
    }
    deleteUser(userId) {
        return this.http.delete(this.apiUrl + 'account/delete-user/' + userId);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 41884:
/*!********************************!*\
  !*** ./src/app/types/types.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationTarget": () => (/* binding */ VerificationTarget)
/* harmony export */ });
var VerificationTarget;
(function (VerificationTarget) {
    VerificationTarget["REGISTER"] = "register";
    VerificationTarget["LOGIN"] = "login";
})(VerificationTarget || (VerificationTarget = {}));
;


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: 'https://intiri-test.azurewebsites.net/api/'
    apiUrl: 'https://localhost:7004/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-46e842f3_js-node_modules_ionic_core_dist_esm_t-5e0416",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-46e842f3_js-node_modules_ionic_core_dist_esm_t-5e0416",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 96288:
/*!********************************************************************************************!*\
  !*** ./src/app/components/add-moodboard-step/add-moodboard-step.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".step-title {\n  margin-top: 0.25rem;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  color: var(--ion-color-black-1)\n}\n\n.step-subtitle {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: var(--ion-color-black-3)\n}\n\n.step-item-wrapper,  .moodboard-item-wrapper {\n  margin-top: 1rem;\n  height: 130px;\n  width: 100%;\n  cursor: pointer;\n  border-radius: 1rem;\n  padding: 0px\n}\n\n.step-item-wrapper:hover,  .moodboard-item-wrapper:hover {\n  opacity: 0.8\n}\n\n@media (min-width: 1024px) {\n\n  .step-item-wrapper,  .moodboard-item-wrapper {\n    height: 180px\n  }\n}\n\n.moodboard-item-wrapper {\n  height: 230px\n}\n\n@media (min-width: 1024px) {\n\n  .moodboard-item-wrapper {\n    height: 310px\n  }\n}\n\n.selected-item {\n  border-width: 3px;\n  border-color: var(--ion-color-primary)\n}\n\n.bigger-margin {\n  margin-bottom: 2.5rem\n}\n\n.step-image {\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n  object-fit: cover\n}\n\n.step-icon-wrapper {\n  height: 87%;\n  border-radius: 1rem;\n  background-color: var(--ion-color-light);\n  padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n  .step-icon-wrapper {\n    padding-top: 50px\n  }\n}\n\n.step-color-wrapper {\n  margin: 0.5rem;\n  height: 87%;\n  border-radius: 1rem;\n  padding: 0.75rem;\n  --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n  --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.step-icon {\n  margin-left: auto;\n  margin-right: auto;\n  height: 50px;\n  width: 50px\n}\n\n.step-items {\n  margin-bottom: 0.75rem;\n  max-height: 640px;\n  min-height: 490px;\n  overflow: auto\n}\n\n.step-items::-webkit-scrollbar {\n  width: 5px;\n  background-color: transparent;\n  opacity: 0\n}\n\n.step-items:hover::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(207 207 207 / var(--tw-bg-opacity))\n}\n\n.step-items::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(223 223 223 / var(--tw-bg-opacity));\n  transition-duration: 1000ms\n}\n\n.input {\n  margin-top: 1rem;\n  width: 300px;\n  flex: 1 1 0%\n}\n\n.result-grid {\n  display: grid;\n  grid-auto-flow: row dense;\n  grid-template-columns: repeat(13, minmax(0, 1fr));\n  gap: 0.75rem\n}\n\n.item-sm {\n  background-color: var(--ion-color-light);\n  height: 53px\n}\n\n.item-sm-tall {\n  background-color: var(--ion-color-secondary);\n  grid-row: auto/span 3;\n  height: 184px\n}\n\n.item-md {\n  background-color: var(--ion-color-primary);\n  background-size: cover !important;\n  grid-column: auto/span 2;\n  grid-row: auto/span 1.5;\n  height: 86px\n}\n\n.item-lg {\n  background-image: url('/assets/images/landing-img.png');\n  background-size: cover !important;\n  grid-column: auto/span 4;\n  grid-row: auto/span 3;\n  height: 184px\n}\n\n.item-lg-tall {\n  background-image: url('/assets/images/img-01.png');\n  background-size: cover !important;\n  grid-column: auto/span 4;\n  grid-row: auto/span 6;\n  height: 381px\n}\n\n.step-items-row {\n  column-gap: 2%\n}\n\nion-input {\n  height: 3rem\n}\n\nion-select {\n  height: 3rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-black-2);\n  padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tb29kYm9hcmQtc3RlcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG1CQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLGVBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUtBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFdBQUE7RUFBQSxtQkFBQTtFQUFBLHdDQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLDZDQUFBO0VBQUEsd0RBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsc0JBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFVBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLHlEQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGdCQUFBO0VBQUEsWUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEseUJBQUE7RUFBQSxpREFBQTtFQUFBO0FBQUE7O0FBS0U7RUFBQSx3Q0FBQTtFQUNBO0FBREE7O0FBSUE7RUFBQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0E7QUFGQTs7QUFLQTtFQUFBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0E7QUFKQTs7QUFPQTtFQUFBLHVEQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0E7QUFKQTs7QUFPQTtFQUFBLGtEQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0E7QUFKQTs7QUFTRjtFQUFBO0FBQUE7O0FBR0E7RUFBQTtBQUFBOztBQUdBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxzQ0FBQTtFQUFBO0FBQUEiLCJmaWxlIjoiYWRkLW1vb2Rib2FyZC1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtdGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTEgdGV4dC00eGwgbXQtMTtcclxufVxyXG5cclxuLnN0ZXAtc3VidGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTMgdGV4dC1iYXNlO1xyXG59XHJcblxyXG4uc3RlcC1pdGVtLXdyYXBwZXIge1xyXG4gIEBhcHBseSByb3VuZGVkLTJ4bCBob3ZlcjpvcGFjaXR5LTgwIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLVsxMzBweF0gbGc6aC1bMTgwcHhdIG10LTQgcC0wO1xyXG59XHJcblxyXG4ubW9vZGJvYXJkLWl0ZW0td3JhcHBlciB7XHJcbiAgQGV4dGVuZCAuc3RlcC1pdGVtLXdyYXBwZXI7XHJcbiAgQGFwcGx5IGgtWzIzMHB4XSBsZzpoLVszMTBweF07XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1pdGVtIHtcclxuICBAYXBwbHkgYm9yZGVyLVszcHhdIGJvcmRlci1wcmltYXJ5O1xyXG59XHJcblxyXG4uYmlnZ2VyLW1hcmdpbiB7XHJcbiAgQGFwcGx5IG1iLTEwO1xyXG59XHJcblxyXG4uc3RlcC1pbWFnZSB7XHJcbiAgQGFwcGx5IG9iamVjdC1jb3ZlciBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtWzEzcHhdO1xyXG59XHJcblxyXG4uc3RlcC1pY29uLXdyYXBwZXIge1xyXG4gIEBhcHBseSBoLVs4NyVdIHJvdW5kZWQtMnhsIGJnLWxpZ2h0IHB0LVszMHB4XSBsZzpwdC1bNTBweF07XHJcbn1cclxuXHJcbi5zdGVwLWNvbG9yLXdyYXBwZXIge1xyXG4gIEBhcHBseSBoLVs4NyVdIHJvdW5kZWQtMnhsIG0tMiBwLTMgc2hhZG93LTE7XHJcbn1cclxuXHJcbi5zdGVwLWljb24ge1xyXG4gIEBhcHBseSBoLVs1MHB4XSB3LVs1MHB4XSBteC1hdXRvO1xyXG59XHJcblxyXG4uc3RlcC1pdGVtcyB7XHJcbiAgQGFwcGx5IG1pbi1oLVs0OTBweF0gbWF4LWgtWzY0MHB4XSBvdmVyZmxvdy1hdXRvIG1iLTM7XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgQGFwcGx5IG9wYWNpdHktMCB3LVs1cHhdIGJnLXRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3RlcC1pdGVtczpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIEBhcHBseSBiZy1bI2NmY2ZjZl07XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgQGFwcGx5IGJnLVsjZGZkZmRmXSBkdXJhdGlvbi0xMDAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIEBhcHBseSBtdC00IGZsZXgtMSB3LVszMDBweF07XHJcbn1cclxuXHJcbi5yZXN1bHQtZ3JpZCB7XHJcbiAgQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLTEzIGdhcC0zIGdyaWQtZmxvdy1yb3ctZGVuc2U7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAmLXNtIHtcclxuICAgIEBhcHBseSBiZy1saWdodDtcclxuICAgIGhlaWdodDogNTNweDtcclxuICB9XHJcbiAgJi1zbS10YWxsIHtcclxuICAgIEBhcHBseSBiZy1zZWNvbmRhcnk7XHJcbiAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMztcclxuICAgIGhlaWdodDogMTg0cHg7XHJcbiAgfVxyXG4gICYtbWQge1xyXG4gICAgQGFwcGx5IGJnLXByaW1hcnk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMjtcclxuICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxLjU7XHJcbiAgICBoZWlnaHQ6IDg2cHg7XHJcbiAgfVxyXG4gICYtbGcge1xyXG4gICAgQGFwcGx5IGJnLWxhbmRpbmctaW1nO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDQ7XHJcbiAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMztcclxuICAgIGhlaWdodDogMTg0cHg7XHJcbiAgfVxyXG4gICYtbGctdGFsbCB7XHJcbiAgICBAYXBwbHkgYmctaW1nLTAxO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDQ7XHJcbiAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gNjtcclxuICAgIGhlaWdodDogMzgxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcC1pdGVtcy1yb3cge1xyXG4gIEBhcHBseSBnYXAteC1bMiVdO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgQGFwcGx5IGgtMTI7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1054:
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin-clients/admin-clients.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.client {\n\n    margin-bottom: 30px;\n\n    height: 320px;\n\n    overflow: hidden;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\nion-col {\n\n    padding-left: 0px;\n\n    padding-right: 0px\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsWUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLGFBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsNkNBQUE7O0lBQUEsd0RBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGlCQUFBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxxQkFBQTs7SUFBQSx3Q0FBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRtaW4tY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xIHRleHQtbGVmdDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIEBhcHBseSBoLTEyO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00O1xyXG59XHJcblxyXG4uY2xpZW50IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgcHgtMiBoLVszMjBweF0gbWItWzMwcHhdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMTtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBAYXBwbHkgcHgtMFxyXG59XHJcblxyXG4ucGx1cy1pY29uLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IG14LWF1dG8gdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQtZnVsbCBiZy1saWdodCBwLTIgaC1bNjBweF0gdy1bNjBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 88800:
/*!********************************************************************************!*\
  !*** ./src/app/components/admin-colors/admin-colors.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left;\n\n    color: var(--ion-color-black-2)\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    margin-bottom: 1rem\n}\n\n.card {\n\n    height: 200px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    padding: 18px;\n\n    padding-left: 13px;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.step-icon-wrapper {\n\n    margin: 0.5rem;\n\n    height: 93%;\n\n    border-radius: 0.125rem;\n\n    background-color: var(--ion-color-light);\n\n    padding-top: 50px\n}\n\n.step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 70px;\n\n    width: 55px\n}\n\n.step-color-wrapper {\n\n    margin: 0.5rem;\n\n    height: 87%;\n\n    border-radius: 0.125rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWNvbG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxnQkFBQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxhQUFBOztJQUFBLGtCQUFBOztJQUFBLDZDQUFBOztJQUFBLHdEQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsY0FBQTs7SUFBQSxXQUFBOztJQUFBLHVCQUFBOztJQUFBLHdDQUFBOztJQUFBO0FBQUE7O0FBSUo7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQTtBQUFBOztBQUlJOztJQUFBLGNBQUE7O0lBQUEsV0FBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImFkbWluLWNvbG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSB0ZXh0LWxlZnQgdGV4dC1ibGFjay0yO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIEBhcHBseSBtYi00XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgc2hhZG93LTEgaC1bMjAwcHhdIHAtWzE4cHhdIHBsLVsxM3B4XVxyXG59XHJcblxyXG4uc3RlcC1pY29uLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IGgtWzkzJV0gcm91bmRlZC1zbSBtLTIgYmctbGlnaHQgcHQtWzUwcHhdXHJcbn1cclxuXHJcbi5zdGVwLWljb24ge1xyXG5AYXBwbHkgaC1bNzBweF0gdy1bNTVweF0gbXgtYXV0bztcclxufVxyXG5cclxuLnN0ZXAtY29sb3Itd3JhcHBlciB7XHJcbiAgICBAYXBwbHkgaC1bODclXSByb3VuZGVkLXNtIG0tMjtcclxuICB9Il19 */";

/***/ }),

/***/ 40535:
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin-inspiration/admin-inspiration.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left;\n\n    color: var(--ion-color-black-2)\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    margin-bottom: 1rem\n}\n\n.card {\n\n    height: 200px;\n\n    border-radius: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWluc3BpcmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxhQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRtaW4taW5zcGlyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBmbGV4LTEgdGV4dC1sZWZ0IHRleHQtYmxhY2stMjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBAYXBwbHkgbWItNFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBAYXBwbHkgcm91bmRlZC0yeGwgaC1bMjAwcHhdXHJcbn0iXX0= */";

/***/ }),

/***/ 8840:
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin-materials/admin-materials.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left;\n\n    color: var(--ion-color-black-2)\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    margin-bottom: 1rem\n}\n\n.card {\n\n    height: 200px;\n\n    border-radius: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1hdGVyaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxnQkFBQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImFkbWluLW1hdGVyaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSB0ZXh0LWxlZnQgdGV4dC1ibGFjay0yO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIEBhcHBseSBtYi00XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSByb3VuZGVkLTJ4bCBoLVsyMDBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 93698:
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-partners/admin-partners.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.logo {\n\n    margin-bottom: 30px;\n\n    height: 270px;\n\n    min-height: 320px;\n\n    overflow: hidden;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhcnRuZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxtQkFBQTs7SUFBQSxhQUFBOztJQUFBLGlCQUFBOztJQUFBLGdCQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRtaW4tcGFydG5lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBteC0yIGZsZXgtMSB0ZXh0LWxlZnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBAYXBwbHkgaC0xMjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgQGFwcGx5IGJvcmRlciBoLVsyNzBweF0gcm91bmRlZC0yeGwgYm9yZGVyLWJsYWNrLTIgbWluLWgtWzMyMHB4XSBtYi1bMzBweF0gb3ZlcmZsb3ctaGlkZGVuO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 32731:
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-pictures/admin-pictures.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left;\n\n    color: var(--ion-color-black-2)\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    margin-bottom: 1rem\n}\n\n.card {\n\n    height: 200px;\n\n    border-radius: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBpY3R1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxhQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRtaW4tcGljdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBmbGV4LTEgdGV4dC1sZWZ0IHRleHQtYmxhY2stMjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBAYXBwbHkgbWItNFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBAYXBwbHkgcm91bmRlZC0yeGwgaC1bMjAwcHhdXHJcbn0iXX0= */";

/***/ }),

/***/ 45505:
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-products/admin-products.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    padding-left: 0px;\n\n    padding-right: 0px;\n\n    padding-bottom: 0.75rem\n}\n\n.card {\n\n    height: 300px;\n\n    border-radius: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGFBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJhZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSB0ZXh0LWxlZnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBAYXBwbHkgaC0xMjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBAYXBwbHkgcHgtMCBwYi0zXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSByb3VuZGVkLTJ4bCBoLVszMDBweF07XHJcbn0iXX0= */";

/***/ }),

/***/ 55490:
/*!******************************************************************************!*\
  !*** ./src/app/components/admin-rooms/admin-rooms.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left;\n\n    color: var(--ion-color-black-2)\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    margin-bottom: 1rem\n}\n\n.card {\n\n    height: 200px;\n\n    border-radius: 1rem\n}\n\n.step-icon-wrapper {\n\n    height: 93%;\n\n    border-radius: 1rem;\n\n    background-color: var(--ion-color-light);\n\n    padding-top: 50px\n}\n\n.step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 70px;\n\n    width: 55px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXJvb21zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxhQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsV0FBQTs7SUFBQSxtQkFBQTs7SUFBQSx3Q0FBQTs7SUFBQTtBQUFBOztBQUlKOztJQUFBLGlCQUFBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJhZG1pbi1yb29tcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSB0ZXh0LWxlZnQgdGV4dC1ibGFjay0yO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIEBhcHBseSBtYi00XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSByb3VuZGVkLTJ4bCBoLVsyMDBweF1cclxufVxyXG5cclxuLnN0ZXAtaWNvbi13cmFwcGVyIHtcclxuICAgIEBhcHBseSBoLVs5MyVdIHJvdW5kZWQtMnhsIGJnLWxpZ2h0IHB0LVs1MHB4XSBcclxufVxyXG5cclxuLnN0ZXAtaWNvbiB7XHJcbkBhcHBseSBoLVs3MHB4XSB3LVs1NXB4XSBteC1hdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 86525:
/*!********************************************************************************!*\
  !*** ./src/app/components/admin-styles/admin-styles.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left;\n\n    color: var(--ion-color-black-2)\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    margin-bottom: 1rem\n}\n\n.card {\n\n    height: 200px;\n\n    border-radius: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXN0eWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxnQkFBQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImFkbWluLXN0eWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSB0ZXh0LWxlZnQgdGV4dC1ibGFjay0yO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIEBhcHBseSBtYi00XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSByb3VuZGVkLTJ4bCBoLVsyMDBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "p {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\nion-button {\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    margin-left: -15px;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\nion-button:hover {\n\n    opacity: 0.8\n}\n\nion-row {\n\n    height: 100%\n}\n\nion-col {\n\n    display: flex;\n\n    justify-content: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    ion-col {\n\n        justify-content: center\n    }\n}\n\n.social-logo {\n\n    margin-right: 1rem;\n\n    margin-bottom: 2rem;\n\n    cursor: pointer;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.social-logo:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1024px) {\n\n    .social-logo {\n\n        font-size: 2.25rem;\n\n        line-height: 2.5rem\n    }\n}\n\n.footer-text {\n\n    font-size: 16px;\n\n    font-weight: 400;\n\n    line-height: 26px\n}\n\n@media (min-width: 1024px) {\n\n    .footer-text {\n\n        font-size: 18px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGVBQUE7O0lBQUEsa0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxrQkFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBAYXBwbHkgdGV4dC13aGl0ZVxyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIEBhcHBseSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIG1sLVstMTVweF0gaG92ZXI6b3BhY2l0eS04MCBteS0wXHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgQGFwcGx5IGgtZnVsbFxyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LXN0YXJ0IGxnOmp1c3RpZnktY2VudGVyXHJcbn1cclxuXHJcbi5zb2NpYWwtbG9nbyB7XHJcbiAgQGFwcGx5IHRleHQtd2hpdGUgdGV4dC0yeGwgbGc6dGV4dC00eGwgbXItNCBtYi04IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODBcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICBAYXBwbHkgZm9udC1ub3JtYWwgdGV4dC1bMTZweF0gbGc6dGV4dC1bMThweF0gbGVhZGluZy1bMjZweF1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 13548:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-admin/header-admin.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-popover {\n  --backdrop-opacity: 0;\n  --offset-y: 10px;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUdKO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0cmFja2luZy1ub3JtYWwgbm9ybWFsLWNhc2UgdGV4dC1ibGFjay0xIHRleHQtWzE4cHhdIGZvbnQtbWVkaXVtIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBweS00O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4geGw6ZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIG1sLTg7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLVswLjdyZW1dIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDVweF0gdy1bNDVweF0gbXItNFxyXG59XHJcblxyXG5pb24tcG9wb3ZlciB7XHJcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xyXG4gIC0tb2Zmc2V0LXk6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn0iXX0= */";

/***/ }),

/***/ 83235:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/header-internal-designer/header-internal-designer.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1pbnRlcm5hbC1kZXNpZ25lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUlKO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUFGIiwiZmlsZSI6ImhlYWRlci1pbnRlcm5hbC1kZXNpZ25lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0cmFja2luZy1ub3JtYWwgbm9ybWFsLWNhc2UgdGV4dC1bMThweF0gZm9udC1tZWRpdW0gdGV4dC1ibGFjay0xIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBweS00O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4geGw6ZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIG1sLTg7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLVswLjdyZW1dIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDVweF0gdy1bNDVweF0gbXItNFxyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 85225:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".white-header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(241 245 249 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: -0.025em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 576px) {\n\n  .header-wrapper {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    max-width: 640px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .header-wrapper {\n    max-width: 768px;\n    padding-right: 4rem;\n    padding-left: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .header-wrapper {\n    max-width: 992px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .header-wrapper {\n    max-width: 1024px;\n    padding-right: 10rem;\n    padding-left: 10rem;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .header-wrapper {\n    max-width: 1200px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .header-wrapper {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1340px) {\n\n  .header-wrapper {\n    max-width: 1340px;\n  }\n}\n\n@media (min-width: 1480px) {\n\n  .header-wrapper {\n    max-width: 1480px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .header-wrapper {\n    max-width: 1536px;\n  }\n}\n\n.header-wrapper {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    margin-top: 3rem;\n  }\n}\n\n.header-buttons {\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n@media (min-width: 768px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n\nion-img {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsd0JBQUE7RUFBQSxzQkFBQTtFQUFBLHlEQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGVBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsd0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBLGdCQUFBO0lBQUEsbUJBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxpQkFBQTtJQUFBLG9CQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEseUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXItbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZS1oZWFkZXIge1xyXG4gIEBhcHBseSBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItc2xhdGUtMTAwXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIEBhcHBseSBub3JtYWwtY2FzZSB0ZXh0LWJsYWNrLTEgZm9udC1tZWRpdW0gaG92ZXI6dGV4dC1ibGFjay0yIG14LTEgdGV4dC1bMThweF0gdHJhY2tpbmctdGlnaHRcclxufVxyXG5cclxuLmhlYWRlci13cmFwcGVyIHtcclxuICBAYXBwbHkgY29udGFpbmVyIGZsZXggaXRlbXMtY2VudGVyIHB5LTQgbXQtNCBzbTptdC0xMlxyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4gbWQ6ZmxleCBmbGV4LTEganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC0yXHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 93474:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-partner/header-partner.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-popover {\n  --backdrop-opacity: 0;\n  --offset-y: 10px;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1wYXJ0bmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGVBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGlCQUFBO0VBQUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUU7RUFBQSxvQkFBQTtFQUFBLGVBQUE7RUFBQSxzQkFBQTtFQUFBLHdDQUFBO0VBQUEsZUFBQTtFQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLXBhcnRuZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBAYXBwbHkgdHJhY2tpbmctbm9ybWFsIG5vcm1hbC1jYXNlIHRleHQtYmxhY2stMSB0ZXh0LVsxOHB4XSBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LWJsYWNrLTIgbXgtMTtcclxufVxyXG5cclxuLmhlYWRlci13cmFwcGVyIHtcclxuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIgcHktNCA7XHJcbn1cclxuXHJcbi5oZWFkZXItYnV0dG9ucyB7XHJcbiAgQGFwcGx5IGhpZGRlbiB4bDpmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIgZ2FwLTIgbWwtODtcclxufVxyXG5cclxuLmhlYWRlci1pY29uIHtcclxuICAgIEBhcHBseSB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC14bCBiZy1saWdodCBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwIHAtWzAuN3JlbV0gbXItMlxyXG59XHJcblxyXG4uaGVhZGVyLXByb2ZpbGUtaW1nIHtcclxuICAgIEBhcHBseSBvYmplY3QtY292ZXIgcm91bmRlZC14bCBoLVs0NXB4XSB3LVs0NXB4XSBtci00XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyIHtcclxuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDA7XHJcbiAgLS1vZmZzZXQteTogMTBweDtcclxufVxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 75413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUlKO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUFGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0cmFja2luZy1ub3JtYWwgbm9ybWFsLWNhc2UgdGV4dC1ibGFjay0xIHRleHQtWzE4cHhdIGZvbnQtbWVkaXVtIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBweS00O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4geGw6ZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIG1sLTg7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLVswLjdyZW1dIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDVweF0gdy1bNDVweF0gbXItNFxyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 12082:
/*!********************************************************************************!*\
  !*** ./src/app/components/menu-popover/menu-popover.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-popover {\n  --offset-y: -120px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FBQ0oiLCJmaWxlIjoibWVudS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXBvcG92ZXIge1xyXG4gICAgLS1vZmZzZXQteTogLTEyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 65510:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/modals/add-color-modal/add-color-modal.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    padding-left: 0px;\n\n    padding-right: 0px\n}\n\n@media (min-width: 640px) {\n\n    .profile-input {\n\n        padding-left: 100px;\n\n        padding-right: 100px\n    }\n}\n\n.card {\n\n    height: 200px;\n\n    width: 270px;\n\n    border-radius: 1rem;\n\n    border-width: 2px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding: 18px\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb2xvci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxZQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUEsbUJBQUE7O1FBQUE7SUFBQTtBQUFBOztBQUlBOztJQUFBLGFBQUE7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGlCQUFBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxxQkFBQTs7SUFBQSx3Q0FBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRkLWNvbG9yLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5wdXQge1xyXG4gICAgQGFwcGx5IG10LTQgbXgtMiBmbGV4LTEgcHgtMCBzbTpweC1bMTAwcHhdXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSBib3JkZXItMiByb3VuZGVkLTJ4bCBib3JkZXItYmxhY2stMiB3LVsyNzBweF0gaC1bMjAwcHhdIHAtWzE4cHhdXHJcbn1cclxuXHJcbi5wbHVzLWljb24td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 76898:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/modals/add-designer-modal/add-designer-modal.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.phone-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    min-width: 130px\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 81px;\n\n    width: 81px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kZXNpZ25lci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBLHdDQUFBOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImFkZC1kZXNpZ25lci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xXHJcbn1cclxuXHJcbi5waG9uZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBteC0yIG1pbi13LVsxMzBweF1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIEBhcHBseSBoLTEyXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTRcclxufVxyXG5cclxuLnBsdXMtaWNvbi13cmFwcGVyIHtcclxuICAgIEBhcHBseSBteC1hdXRvIHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgYmctbGlnaHQgcC0yIGgtWzgxcHhdIHctWzgxcHhdXHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 29949:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/add-materials-modal/add-materials-modal.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    padding-left: 0px;\n\n    padding-right: 0px\n}\n\n@media (min-width: 640px) {\n\n    .profile-input {\n\n        padding-left: 100px;\n\n        padding-right: 100px\n    }\n}\n\nion-select {\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tYXRlcmlhbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLG1CQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGlCQUFBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxxQkFBQTs7SUFBQSx3Q0FBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRkLW1hdGVyaWFscy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xIHB4LTAgc206cHgtWzEwMHB4XVxyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgYm9yZGVyLWJsYWNrLTIgO1xyXG59XHJcblxyXG4ucGx1cy1pY29uLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IG14LWF1dG8gdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQtZnVsbCBiZy1saWdodCBwLTIgaC1bNjBweF0gdy1bNjBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 25906:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modals/add-partner-modal/add-partner-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  margin-top: 1rem;\n  flex: 1 1 0%;\n}\n\n.phone-input {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  margin-top: 1rem;\n  min-width: 130px;\n}\n\nion-input {\n  height: 3rem;\n}\n\nion-select {\n  height: 3rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-black-2);\n  padding-right: 1rem;\n}\n\n.plus-icon-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: 81px;\n  width: 81px;\n  border-radius: 9999px;\n  background-color: var(--ion-color-light);\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.partner-form {\n  height: 800px;\n  width: 80%;\n  overflow: auto;\n}\n\n.partner-form::-webkit-scrollbar {\n  width: 5px;\n  background-color: transparent;\n  opacity: 0;\n}\n\n.partner-form:hover::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(207 207 207 / var(--tw-bg-opacity));\n}\n\n.partner-form::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(223 223 223 / var(--tw-bg-opacity));\n  transition-duration: 1000ms;\n}\n\nion-icon {\n  --ionicon-stroke-width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXJ0bmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxzQ0FBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFBQSxxQkFBQTtFQUFBLHdDQUFBO0VBQUEsZUFBQTtFQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsYUFBQTtFQUFBLFVBQUE7RUFBQTtBQUFBOztBQUdKO0VBQUEsVUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEseURBQUE7RUFBQTtBQUFBOztBQUdBO0VBQ0ksNEJBQUE7QUFFSiIsImZpbGUiOiJhZGQtcGFydG5lci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xXHJcbn1cclxuXHJcbi5waG9uZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBteC0yIG1pbi13LVsxMzBweF1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIEBhcHBseSBoLTEyXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTRcclxufVxyXG5cclxuLnBsdXMtaWNvbi13cmFwcGVyIHtcclxuICAgIEBhcHBseSBteC1hdXRvIHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgYmctbGlnaHQgcC0yIGgtWzgxcHhdIHctWzgxcHhdXHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXHJcbiAgfVxyXG5cclxuLnBhcnRuZXItZm9ybSB7XHJcbiAgICBAYXBwbHkgaC1bODAwcHhdIHctWzgwJV0gb3ZlcmZsb3ctYXV0bztcclxufVxyXG4ucGFydG5lci1mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbkBhcHBseSBvcGFjaXR5LTAgdy1bNXB4XSBiZy10cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhcnRuZXItZm9ybTpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5AYXBwbHkgYmctWyNjZmNmY2ZdO1xyXG59XHJcblxyXG4ucGFydG5lci1mb3JtOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbkBhcHBseSBiZy1bI2RmZGZkZl0gZHVyYXRpb24tMTAwMDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNjBweDtcclxuICB9Il19 */";

/***/ }),

/***/ 33410:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modals/add-picture-modal/add-picture-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    padding-left: 0px;\n\n    padding-right: 0px\n}\n\n@media (min-width: 640px) {\n\n    .profile-input {\n\n        padding-left: 100px;\n\n        padding-right: 100px\n    }\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1waWN0dXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxtQkFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBR0E7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBLHdDQUFBOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJhZGQtcGljdHVyZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xIHB4LTAgc206cHgtWzEwMHB4XVxyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgICBAYXBwbHkgaC0xMlxyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00XHJcbn1cclxuXHJcbi5wbHVzLWljb24td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 69284:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modals/add-product-modal/add-product-modal.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".flex-row-product {\n  display: flex;\n  justify-content: space-between;\n}\n\n.fixed-width {\n  width: 45%;\n}\n\n.color-box {\n  width: 60%;\n  height: 60%;\n}\n\n.color-box .plus-icon-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: 60px;\n  width: 60px;\n  border-radius: 9999px;\n  background-color: var(--ion-color-light);\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBQ0Q7O0FBRUE7RUFDRyxVQUFBO0FBQ0g7O0FBRUE7RUFDRyxVQUFBO0VBQ0EsV0FBQTtBQUNIOztBQUNJO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEscUJBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJhZGQtcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LXJvdy1wcm9kdWN0IHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4uZml4ZWQtd2lkdGgge1xyXG4gICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uY29sb3ItYm94ICB7XHJcbiAgIHdpZHRoOiA2MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG4ucGx1cy1pY29uLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IG14LWF1dG8gdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQtZnVsbCBiZy1saWdodCBwLTIgaC1bNjBweF0gdy1bNjBweF1cclxufVxyXG59Il19 */";

/***/ }),

/***/ 11185:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/modals/add-room-modal/add-room-modal.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    padding-left: 0px;\n\n    padding-right: 0px\n}\n\n@media (min-width: 640px) {\n\n    .profile-input {\n\n        padding-left: 100px;\n\n        padding-right: 100px\n    }\n}\n\nion-select {\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yb29tLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxtQkFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxZQUFBOztJQUFBLFdBQUE7O0lBQUEscUJBQUE7O0lBQUEsd0NBQUE7O0lBQUEsZUFBQTs7SUFBQSxpQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImFkZC1yb29tLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5wdXQge1xyXG4gICAgQGFwcGx5IG10LTQgbXgtMiBmbGV4LTEgcHgtMCBzbTpweC1bMTAwcHhdXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBib3JkZXItYmxhY2stMiA7XHJcbn1cclxuXHJcbi5wbHVzLWljb24td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 20837:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/modals/add-style-modal/add-style-modal.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    padding-left: 0px;\n\n    padding-right: 0px\n}\n\n@media (min-width: 640px) {\n\n    .profile-input {\n\n        padding-left: 100px;\n\n        padding-right: 100px\n    }\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdHlsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxZQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUEsbUJBQUE7O1FBQUE7SUFBQTtBQUFBOztBQUdBOztJQUFBLGlCQUFBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxxQkFBQTs7SUFBQSx3Q0FBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRkLXN0eWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5wdXQge1xyXG4gICAgQGFwcGx5IG10LTQgbXgtMiBmbGV4LTEgcHgtMCBzbTpweC1bMTAwcHhdXHJcbn1cclxuLnBsdXMtaWNvbi13cmFwcGVyIHtcclxuICAgIEBhcHBseSBteC1hdXRvIHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgYmctbGlnaHQgcC0yIGgtWzYwcHhdIHctWzYwcHhdXHJcbn0iXX0= */";

/***/ }),

/***/ 80829:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n@media (min-width: 1280px) {\n\n  .container {\n    padding-left: 152px;\n    padding-right: 152px;\n  }\n}\n\nion-checkbox {\n  --border-color: #555555;\n  --border-radius: 5px;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVzaWduZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxhQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxtQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJib29rLWRlc2lnbmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgQGFwcGx5IHB4LTQgeGw6cHgtWzE1MnB4XSBweS0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2hlY2tib3gge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1382:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9qZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUU7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBLHdDQUFBOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJjcmVhdGUtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZCB7XHJcbiAgQGFwcGx5IHBvaW50ZXItZXZlbnRzLW5vbmUgb3BhY2l0eS02MFxyXG59XHJcblxyXG4ucGx1cy1pY29uLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IG14LWF1dG8gdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQtZnVsbCBiZy1saWdodCBwLTIgaC1bNjBweF0gdy1bNjBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 63987:
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/modals/delete-moodboard-modal/delete-moodboard-modal.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".plus-icon-wrapper {\n    margin-left: auto;\n    margin-right: auto;\n    height: 60px;\n    width: 60px;\n    border-radius: 9999px;\n    background-color: var(--ion-color-light);\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1tb29kYm9hcmQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxpQkFBQTtJQUFBLGtCQUFBO0lBQUEsWUFBQTtJQUFBLFdBQUE7SUFBQSxxQkFBQTtJQUFBLHdDQUFBO0lBQUEsZUFBQTtJQUFBLGlCQUFBO0lBQUEsaUJBQUE7SUFBQTtBQUFBIiwiZmlsZSI6ImRlbGV0ZS1tb29kYm9hcmQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGx1cy1pY29uLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IG14LWF1dG8gdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQtZnVsbCBiZy1saWdodCBwLTIgaC1bNjBweF0gdy1bNjBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 89673:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".vipps-btn {\n  display: flex;\n  height: 46px;\n  width: 130px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding-top: 0.25rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #FF5B24;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.img-bg {\n  border-radius: 0 !important;\n  border: none !important;\n  height: 15px !important;\n  width: 22px !important;\n  background-size: 15px 22px !important;\n  background-repeat: no-repeat !important;\n  background-image: url('no.svg') !important;\n}\n\n.ion-warning {\n  display: flex;\n  font-size: 10px;\n  color: red;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n  padding-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQTtBQUZBOztBQUtBO0VBQ0EsWUFBQTtBQUNKOztBQUVJO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFSTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVJO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFSTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImxvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpcHBzLWJ0biB7XHJcbiAgICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB3LVsxMzBweF0gaC1bNDZweF0gcm91bmRlZC0yeGwgdGV4dC1sZyBmb250LW1lZGl1bSBwdC0xO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNUIyNDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFzc3dvcmQtaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgY2FyZXQtY29sb3I6ICM1NTU1NTU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWctYmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMjJweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZmxhZ3Mvbm8uc3ZnXCIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pb24td2FybmluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgICAiXX0= */";

/***/ }),

/***/ 74377:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".logout-icon-wrapper {\n    margin-left: auto;\n    margin-right: auto;\n    height: 60px;\n    width: 60px;\n    border-radius: 9999px;\n    background-color: var(--ion-color-light);\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtJQUFBLGlCQUFBO0lBQUEsa0JBQUE7SUFBQSxZQUFBO0lBQUEsV0FBQTtJQUFBLHFCQUFBO0lBQUEsd0NBQUE7SUFBQSxlQUFBO0lBQUEsaUJBQUE7SUFBQSxpQkFBQTtJQUFBO0FBQUEiLCJmaWxlIjoibG9nb3V0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvdXQtaWNvbi13cmFwcGVyIHtcclxuICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 51436:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/modals/open-file-modal/open-file-modal.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuLWZpbGUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 20188:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/rate-modal/rate-modal.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-textarea {\n  height: 150px;\n  width: 470px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InJhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 66137:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/rate-successful-modal/rate-successful-modal.component.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRlLXN1Y2Nlc3NmdWwtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 26153:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/share-modal/share-modal.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 96239:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/share-successful-modal/share-successful-modal.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1zdWNjZXNzZnVsLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 11247:
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/modals/sms-verification-modal/sms-verification-modal.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "code-input {\n  --color: #555555;\n  --item-border: 1px solid #555555;\n  --item-border-radius: 15px;\n  --item-border-bottom: 1px solid #555555;\n  --item-border-has-value: 1px solid #555555;\n  --item-border-bottom-has-value: 1px solid #555555;\n  --item-border-focused: 1px solid #555555;\n  --item-border-bottom-focused: 1px solid #555555;\n  --item-shadow-focused: 0px;\n}\n\n@media (max-width: 520px) {\n  code-input {\n    --item-spacing: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtcy12ZXJpZmljYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNtcy12ZXJpZmljYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjb2RlLWlucHV0IHtcclxuICAtLWNvbG9yOiAjNTU1NTU1O1xyXG4gIC8vIC0taXRlbS1zcGFjaW5nOiAyMHB4O1xyXG4gIC0taXRlbS1ib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC0taXRlbS1ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tYm9yZGVyLWhhcy12YWx1ZTogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20taGFzLXZhbHVlOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tYm9yZGVyLWZvY3VzZWQ6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItYm90dG9tLWZvY3VzZWQ6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1zaGFkb3ctZm9jdXNlZDogMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIGNvZGUtaW5wdXQge1xyXG4gICAgLS1pdGVtLXNwYWNpbmc6IDNweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 34473:
/*!******************************************************************************************!*\
  !*** ./src/app/components/moodboard-details/moodboard-details.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".result-grid {\n\n    display: grid;\n\n    grid-auto-flow: row dense;\n\n    grid-template-columns: repeat(13, minmax(0, 1fr));\n\n    gap: 0.75rem\n}\n\n.step-items-row {\n\n    column-gap: 2%\n}\n\n.step-items {\n\n    margin-bottom: 0.75rem;\n\n    max-height: 750px;\n\n    overflow: auto\n}\n\n.step-image {\n\n    height: 100%;\n\n    width: 100%;\n\n    border-radius: 1rem;\n\n    object-fit: cover\n}\n\nimg {\n\n    height: 100%;\n\n    width: 100%;\n\n    object-fit: cover\n}\n\np {\n\n    text-align: left\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2Rib2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLGFBQUE7O0lBQUEseUJBQUE7O0lBQUEsaURBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLHNCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUE7QUFBQSIsImZpbGUiOiJtb29kYm9hcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQtZ3JpZCB7XHJcbiAgQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLTEzIGdhcC0zIGdyaWQtZmxvdy1yb3ctZGVuc2U7XHJcbn1cclxuLnN0ZXAtaXRlbXMtcm93IHtcclxuICBAYXBwbHkgZ2FwLXgtWzIlXTtcclxufVxyXG5cclxuLnN0ZXAtaXRlbXMge1xyXG4gIEBhcHBseSBtYXgtaC1bNzUwcHhdIG92ZXJmbG93LWF1dG8gbWItMztcclxufVxyXG5cclxuLnN0ZXAtaW1hZ2Uge1xyXG4gIEBhcHBseSBvYmplY3QtY292ZXIgaC1mdWxsIHctZnVsbCByb3VuZGVkLTJ4bDtcclxufVxyXG5cclxuaW1nIHtcclxuICBAYXBwbHkgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIEBhcHBseSB0ZXh0LWxlZnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 36166:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".step-title {\n  margin-top: 0.25rem;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  color: var(--ion-color-black-1)\n}\n\n.step-subtitle {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: var(--ion-color-black-3)\n}\n\n.step-item-wrapper,  .moodboard-item-wrapper {\n  margin-top: 1rem;\n  height: 130px;\n  width: 100%;\n  cursor: pointer;\n  border-radius: 1rem;\n  padding: 0px\n}\n\n.step-item-wrapper:hover,  .moodboard-item-wrapper:hover {\n  opacity: 0.8\n}\n\n@media (min-width: 1024px) {\n\n  .step-item-wrapper,  .moodboard-item-wrapper {\n    height: 180px\n  }\n}\n\n.moodboard-item-wrapper {\n  height: 230px;\n  border-width: 1px;\n  --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n  --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n@media (min-width: 1024px) {\n\n  .moodboard-item-wrapper {\n    height: 310px\n  }\n}\n\n.selected-item {\n  border-width: 3px;\n  border-color: var(--ion-color-primary)\n}\n\n.bigger-margin {\n  margin-bottom: 2.5rem\n}\n\n.step-image {\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n  object-fit: cover\n}\n\n.step-icon-wrapper {\n  height: 100%;\n  border-radius: 1rem;\n  background-color: var(--ion-color-light);\n  padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n  .step-icon-wrapper {\n    padding-top: 60px\n  }\n}\n\n.step-color-wrapper {\n  margin: 0.5rem;\n  height: 87%;\n  border-radius: 1rem;\n  padding: 0.75rem;\n  --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n  --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.step-icon {\n  margin-left: auto;\n  margin-right: auto;\n  height: 50px;\n  width: 50px\n}\n\n.step-items {\n  margin-bottom: 0.75rem;\n  max-height: 640px;\n  min-height: 490px;\n  overflow: auto\n}\n\n.step-items::-webkit-scrollbar {\n  width: 5px;\n  background-color: transparent;\n  opacity: 0\n}\n\n.step-items:hover::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(207 207 207 / var(--tw-bg-opacity))\n}\n\n.step-items::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(223 223 223 / var(--tw-bg-opacity));\n  transition-duration: 1000ms\n}\n\n.input {\n  margin-top: 1rem;\n  width: 300px;\n  flex: 1 1 0%\n}\n\n.result-grid {\n  display: grid;\n  grid-auto-flow: row dense;\n  grid-template-columns: repeat(13, minmax(0, 1fr));\n  gap: 0.75rem\n}\n\n.item-sm {\n  background-color: var(--ion-color-light);\n  height: 53px\n}\n\n.item-sm-tall {\n  background-color: var(--ion-color-secondary);\n  grid-row: auto/span 3;\n  height: 184px\n}\n\n.item-md {\n  background-color: var(--ion-color-primary);\n  background-size: cover !important;\n  grid-column: auto/span 2;\n  grid-row: auto/span 1.5;\n  height: 86px\n}\n\n.item-lg {\n  background-image: url('/assets/images/landing-img.png');\n  background-size: cover !important;\n  grid-column: auto/span 4;\n  grid-row: auto/span 3;\n  height: 184px\n}\n\n.item-lg-tall {\n  background-image: url('/assets/images/img-01.png');\n  background-size: cover !important;\n  grid-column: auto/span 4;\n  grid-row: auto/span 6;\n  height: 381px\n}\n\n.step-items-row {\n  column-gap: 2%\n}\n\nion-input {\n  height: 3rem\n}\n\nion-select {\n  height: 3rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-black-2);\n  padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFLQTtFQUFBLGFBQUE7RUFBQSxpQkFBQTtFQUFBLDZDQUFBO0VBQUEsd0RBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsd0NBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsY0FBQTtFQUFBLFdBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsNkNBQUE7RUFBQSx3REFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxzQkFBQTtFQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsVUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEseURBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsZ0JBQUE7RUFBQSxZQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGFBQUE7RUFBQSx5QkFBQTtFQUFBLGlEQUFBO0VBQUE7QUFBQTs7QUFLRTtFQUFBLHdDQUFBO0VBQ0E7QUFEQTs7QUFJQTtFQUFBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQTtBQUZBOztBQUtBO0VBQUEsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQTtBQUpBOztBQU9BO0VBQUEsdURBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQTtBQUpBOztBQU9BO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQTtBQUpBOztBQVNGO0VBQUE7QUFBQTs7QUFHQTtFQUFBO0FBQUE7O0FBR0E7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHNDQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJuZXctcHJvamVjdC1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtdGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTEgdGV4dC00eGwgbXQtMTtcclxufVxyXG5cclxuLnN0ZXAtc3VidGl0bGUge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTMgdGV4dC1iYXNlO1xyXG59XHJcblxyXG4uc3RlcC1pdGVtLXdyYXBwZXIge1xyXG4gIEBhcHBseSByb3VuZGVkLTJ4bCBob3ZlcjpvcGFjaXR5LTgwIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLVsxMzBweF0gbGc6aC1bMTgwcHhdIG10LTQgcC0wO1xyXG59XHJcblxyXG4ubW9vZGJvYXJkLWl0ZW0td3JhcHBlciB7XHJcbiAgQGV4dGVuZCAuc3RlcC1pdGVtLXdyYXBwZXI7XHJcbiAgQGFwcGx5IGgtWzIzMHB4XSBsZzpoLVszMTBweF0gYm9yZGVyIHNoYWRvdy0xO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtaXRlbSB7XHJcbiAgQGFwcGx5IGJvcmRlci1bM3B4XSBib3JkZXItcHJpbWFyeTtcclxufVxyXG5cclxuLmJpZ2dlci1tYXJnaW4ge1xyXG4gIEBhcHBseSBtYi0xMDtcclxufVxyXG5cclxuLnN0ZXAtaW1hZ2Uge1xyXG4gIEBhcHBseSBvYmplY3QtY292ZXIgaC1mdWxsIHctZnVsbCByb3VuZGVkLVsxM3B4XTtcclxufVxyXG5cclxuLnN0ZXAtaWNvbi13cmFwcGVyIHtcclxuICBAYXBwbHkgaC1bMTAwJV0gcm91bmRlZC0yeGwgYmctbGlnaHQgcHQtWzMwcHhdIGxnOnB0LVs2MHB4XTtcclxufVxyXG5cclxuLnN0ZXAtY29sb3Itd3JhcHBlciB7XHJcbiAgQGFwcGx5IGgtWzg3JV0gcm91bmRlZC0yeGwgbS0yIHAtMyBzaGFkb3ctMTtcclxufVxyXG5cclxuLnN0ZXAtaWNvbiB7XHJcbiAgQGFwcGx5IGgtWzUwcHhdIHctWzUwcHhdIG14LWF1dG87XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zIHtcclxuICBAYXBwbHkgbWluLWgtWzQ5MHB4XSBtYXgtaC1bNjQwcHhdIG92ZXJmbG93LWF1dG8gbWItMztcclxufVxyXG5cclxuLnN0ZXAtaXRlbXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBAYXBwbHkgb3BhY2l0eS0wIHctWzVweF0gYmctdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgQGFwcGx5IGJnLVsjY2ZjZmNmXTtcclxufVxyXG5cclxuLnN0ZXAtaXRlbXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBAYXBwbHkgYmctWyNkZmRmZGZdIGR1cmF0aW9uLTEwMDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgQGFwcGx5IG10LTQgZmxleC0xIHctWzMwMHB4XTtcclxufVxyXG5cclxuLnJlc3VsdC1ncmlkIHtcclxuICBAYXBwbHkgZ3JpZCBncmlkLWNvbHMtMTMgZ2FwLTMgZ3JpZC1mbG93LXJvdy1kZW5zZTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICYtc20ge1xyXG4gICAgQGFwcGx5IGJnLWxpZ2h0O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gIH1cclxuICAmLXNtLXRhbGwge1xyXG4gICAgQGFwcGx5IGJnLXNlY29uZGFyeTtcclxuICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAzO1xyXG4gICAgaGVpZ2h0OiAxODRweDtcclxuICB9XHJcbiAgJi1tZCB7XHJcbiAgICBAYXBwbHkgYmctcHJpbWFyeTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IGF1dG8gLyBzcGFuIDEuNTtcclxuICAgIGhlaWdodDogODZweDtcclxuICB9XHJcbiAgJi1sZyB7XHJcbiAgICBAYXBwbHkgYmctbGFuZGluZy1pbWc7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gNDtcclxuICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAzO1xyXG4gICAgaGVpZ2h0OiAxODRweDtcclxuICB9XHJcbiAgJi1sZy10YWxsIHtcclxuICAgIEBhcHBseSBiZy1pbWctMDE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gNDtcclxuICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiA2O1xyXG4gICAgaGVpZ2h0OiAzODFweDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zLXJvdyB7XHJcbiAgQGFwcGx5IGdhcC14LVsyJV07XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICBAYXBwbHkgaC0xMjtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 15921:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/popovers/language-popover/language-popover.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 38913:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/popovers/style-popover/style-popover.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 87575:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".change-img-btn {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-bottom: 2rem;\n    height: 2.5rem;\n    border-radius: 0.75rem;\n    border-width: 1px;\n    border-color: var(--ion-color-primary);\n    background-color: transparent;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: 500;\n    text-transform: none;\n    color: var(--ion-color-primary)\n}\n.change-img-btn:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW1nLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxtQkFBQTtJQUFBLG9CQUFBO0lBQUEsbUJBQUE7SUFBQSxjQUFBO0lBQUEsc0JBQUE7SUFBQSxpQkFBQTtJQUFBLHNDQUFBO0lBQUEsNkJBQUE7SUFBQSxrQkFBQTtJQUFBLG1CQUFBO0lBQUEsZ0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUEiLCJmaWxlIjoicHJvZmlsZS1pbWctc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtaW1nLWJ0biB7XHJcbiAgICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy10cmFuc3BhcmVudCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItcHJpbWFyeSBib3JkZXIgcHgtNCBteC0yIG1iLTggaC0xMFxyXG59Il19 */";

/***/ }),

/***/ 18397:
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.phone-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    min-width: 130px\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW5mby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJwcm9maWxlLWluZm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xXHJcbn1cclxuXHJcbi5waG9uZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBteC0yIG1pbi13LVsxMzBweF1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIEBhcHBseSBoLTEyXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTRcclxufSJdfQ== */";

/***/ }),

/***/ 75391:
/*!****************************************************************************************!*\
  !*** ./src/app/components/settings-popover/settings-popover.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-icon {\n    margin-right: 0.5rem;\n    cursor: pointer;\n    border-radius: 0.75rem;\n    background-color: var(--ion-color-light);\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: var(--ion-color-primary)\n}\n.header-icon:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxvQkFBQTtJQUFBLGVBQUE7SUFBQSxzQkFBQTtJQUFBLHdDQUFBO0lBQUEsZUFBQTtJQUFBLGlCQUFBO0lBQUEsaUJBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQTtBQUFBIiwiZmlsZSI6InNldHRpbmdzLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWljb24ge1xyXG4gICAgQGFwcGx5IHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLXhsIGJnLWxpZ2h0IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODAgcC0yIG1yLTJcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 99526:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".project-step {\n\n    margin-left: 5%;\n\n    margin-right: 5%;\n\n    display: inline-block;\n\n    width: 60px;\n\n    cursor: pointer;\n\n    border-color: var(--ion-color-secondary);\n\n    padding-top: 32px;\n\n    padding-bottom: 32px\n}\n\n.project-step:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1200px) {\n\n    .project-step {\n\n        margin-left: auto;\n\n        margin-right: auto;\n\n        display: block;\n\n        border-right-width: 0px;\n\n        border-bottom-width: 1px\n    }\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    cursor: default\n}\n\n.no-border {\n\n    border-width: 0px\n}\n\n.project-step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 30px;\n\n    width: 30px;\n\n    background-size: cover\n}\n\n.project-step-text {\n\n    margin-top: 1rem;\n\n    margin-left: -17px;\n\n    width: 98px;\n\n    text-align: center;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsV0FBQTs7SUFBQSxlQUFBOztJQUFBLHdDQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxpQkFBQTs7UUFBQSxrQkFBQTs7UUFBQSxjQUFBOztRQUFBLHVCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZ0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsV0FBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6InN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtc3RlcCB7XHJcbiAgQGFwcGx5IGlubGluZS1ibG9jayB4bC1pb246YmxvY2sgdy1bNjBweF0gcHktWzMycHhdICB4bC1pb246Ym9yZGVyLXItMCB4bC1pb246Ym9yZGVyLWIgYm9yZGVyLXNlY29uZGFyeSBteC1bNSVdIHhsLWlvbjpteC1hdXRvIGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgQGFwcGx5IHBvaW50ZXItZXZlbnRzLW5vbmUgY3Vyc29yLWRlZmF1bHRcclxufVxyXG5cclxuLm5vLWJvcmRlciB7XHJcbiAgQGFwcGx5IGJvcmRlci0wO1xyXG59XHJcblxyXG4ucHJvamVjdC1zdGVwLWljb24ge1xyXG4gIEBhcHBseSB3LVszMHB4XSBoLVszMHB4XSBteC1hdXRvIGJnLWNvdmVyO1xyXG59XHJcblxyXG4ucHJvamVjdC1zdGVwLXRleHQge1xyXG4gIEBhcHBseSB0ZXh0LWNlbnRlciBtdC00IHRleHQtcHJpbWFyeSB3LVs5OHB4XSBtbC1bLTE3cHhdO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 92268:
/*!****************************************************************************!*\
  !*** ./src/app/components/sub-header/sub-header.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-buttons {\n\n    margin-left: 2rem;\n\n    display: flex;\n\n    height: 100%;\n\n    flex: 1 1 0%;\n\n    flex-wrap: wrap;\n\n    align-items: flex-start;\n\n    gap: 0.5rem\n}\n\n@media (min-width: 1024px) {\n\n    .header-buttons {\n\n        align-items: center\n    }\n}\n\n.btn {\n\n    margin-left: 0.25rem;\n\n    margin-right: 0.25rem;\n\n    font-size: 18px;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    letter-spacing: 0em;\n\n    color: var(--ion-color-black-1)\n}\n\n.btn:hover {\n\n    color: var(--ion-color-black-2)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsaUJBQUE7O0lBQUEsYUFBQTs7SUFBQSxZQUFBOztJQUFBLFlBQUE7O0lBQUEsZUFBQTs7SUFBQSx1QkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxvQkFBQTs7SUFBQSxxQkFBQTs7SUFBQSxlQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJzdWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1idXR0b25zIHtcclxuICAgIEBhcHBseSBmbGV4IGZsZXgtMSBmbGV4LXdyYXAgaXRlbXMtc3RhcnQgbGc6aXRlbXMtY2VudGVyIGdhcC0yIG1sLTggaC1bMTAwJV07XHJcbiAgfVxyXG4uYnRuIHtcclxuICAgIEBhcHBseSBub3JtYWwtY2FzZSB0ZXh0LWJsYWNrLTEgZm9udC1tZWRpdW0gaG92ZXI6dGV4dC1ibGFjay0yIG14LTEgdHJhY2tpbmctbm9ybWFsIHRleHQtWzE4cHhdO1xyXG4gIH1cclxuIl19 */";

/***/ }),

/***/ 34873:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin-pages/add-moodboard/add-moodboard.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".side-menu-item {\n\n    margin-left: 50px;\n\n    margin-bottom: 40px;\n\n    cursor: pointer;\n\n    text-align: left;\n\n    font-weight: 500;\n\n    color: var(--ion-color-black-1)\n}\n\n.side-menu-item:hover {\n\n    color: var(--ion-color-primary)\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tb29kYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGlCQUFBOztJQUFBLG1CQUFBOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG9CQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiYWRkLW1vb2Rib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1tZW51LWl0ZW0ge1xyXG4gICAgQGFwcGx5IHRleHQtYmxhY2stMSB0ZXh0LWxlZnQgbWwtWzUwcHhdIG1iLVs0MHB4XSBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXByaW1hcnk7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 58881:
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin-pages/add-partner/add-partner.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".text-clamp {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.card {\n  height: 250px;\n  border-radius: 1rem;\n}\n\n.profile-input {\n  margin-top: 1rem;\n  flex: 1 1 0%;\n}\n\n.plus-icon-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: 60px;\n  width: 60px;\n  border-radius: 9999px;\n  background-color: var(--ion-color-light);\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXJ0bmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0k7RUFBQSxhQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGdCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBLHFCQUFBO0VBQUEsd0NBQUE7RUFBQSxlQUFBO0VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUEiLCJmaWxlIjoiYWRkLXBhcnRuZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2xhbXAge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgQGFwcGx5IHJvdW5kZWQtMnhsIGgtWzI1MHB4XTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW5wdXQge1xyXG4gICAgQGFwcGx5IG10LTQgZmxleC0xXHJcbn1cclxuXHJcbi5wbHVzLWljb24td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 75073:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/client/client.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9631:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin-pages/consultations/consultations.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".consultations-input-wrapper {\n\n    position: relative;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.consultations-input {\n\n    height: 3.5rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.currency-label {\n\n    position: absolute;\n\n    bottom: 16px;\n\n    right: 13px;\n\n    z-index: 50;\n\n    color: var(--ion-color-black-3)\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.7\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGtCQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsY0FBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJjb25zdWx0YXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zdWx0YXRpb25zLWlucHV0LXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IG10LTQgZmxleC0xIHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29uc3VsdGF0aW9ucy1pbnB1dCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTQgYm9yZGVyLWJsYWNrLTI7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1sYWJlbCB7XHJcbiAgICBAYXBwbHkgYWJzb2x1dGUgYm90dG9tLVsxNnB4XSByaWdodC1bMTNweF0gei01MCB0ZXh0LWJsYWNrLTM7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTcwO1xyXG59Il19 */";

/***/ }),

/***/ 25117:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.total {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 200px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.sales {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 426px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.designers {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 882px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.trending {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 426px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSw2Q0FBQTs7SUFBQSx3REFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSw2Q0FBQTs7SUFBQSx3REFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSw2Q0FBQTs7SUFBQSx3REFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSw2Q0FBQTs7SUFBQSx3REFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgaC1bMjAwcHhdIG1iLVszMHB4XSBzaGFkb3ctMTtcclxufVxyXG5cclxuLnNhbGVzIHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBoLVs0MjZweF0gbWItWzMwcHhdIHNoYWRvdy0xO1xyXG59XHJcblxyXG4uZGVzaWduZXJzIHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBoLVs4ODJweF0gbWItWzMwcHhdIHNoYWRvdy0xO1xyXG59XHJcblxyXG4udHJlbmRpbmcge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGgtWzQyNnB4XSBtYi1bMzBweF0gc2hhZG93LTE7XHJcbn0iXX0= */";

/***/ }),

/***/ 36736:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.designer {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 350px;\n\n    overflow: hidden;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsbUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxhQUFBOztJQUFBLGdCQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBLHFCQUFBOztJQUFBLDZDQUFBOztJQUFBLHdEQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiZGVzaWduZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNFxyXG59XHJcblxyXG4uZGVzaWduZXIge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIHB4LTIgaC1bMzUwcHhdIG1iLVszMHB4XSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTE7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 21714:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin-pages/moodboards/moodboards.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    padding: 0px\n}\n\n.designer {\n\n    margin-bottom: 10px;\n\n    height: 270px;\n\n    overflow: hidden;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n@media (min-width: 1024px) {\n\n    .designer {\n\n        height: 350px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2Rib2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLGFBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsNkNBQUE7O0lBQUEsd0RBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQTtJQUFBO0FBQUEiLCJmaWxlIjoibW9vZGJvYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gICAgQGFwcGx5IHAtMFxyXG59XHJcblxyXG4uZGVzaWduZXIge1xyXG4gICAgQGFwcGx5ICBib3JkZXIgcm91bmRlZC0yeGwgaC1bMjcwcHhdIGxnOmgtWzM1MHB4XSBtYi1bMTBweF0gb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0xO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 73549:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin-pages/style/style.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 51989:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW5kb3IucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 76857:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/client-request/client-request.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtcmVxdWVzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 59415:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/clients/client-list/client-list.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  padding-left: 0px;\n  padding-right: 0px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  text-transform: none;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n.active-btn {\n  color: var(--ion-color-primary);\n}\n\n.avatar-img {\n  height: 70px !important;\n  width: 70px !important;\n  border-radius: 15px;\n}\n\n.moodboard-img {\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.client {\n  margin-bottom: 30px;\n  height: 320px;\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n  --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.client:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0U7RUFBQSxtQkFBQTtFQUFBLGFBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsNkNBQUE7RUFBQSx3REFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQTtBQUFBIiwiZmlsZSI6ImNsaWVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrIG5vcm1hbC1jYXNlIHRleHQtbGcgcHgtMFxyXG59XHJcblxyXG4uYWN0aXZlLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtcHJpbWFyeTtcclxufVxyXG5cclxuLmF2YXRhci1pbWcge1xyXG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLm1vb2Rib2FyZC1pbWcge1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGllbnQge1xyXG4gIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC1bMzIwcHhdIG1iLVszMHB4XSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTEgaG92ZXI6b3BhY2l0eS04MCBjdXJzb3ItcG9pbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 18330:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/styles/style-list/style-list.page.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS1saXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 15919:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".moodboard-img {\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.avatar-img {\n  height: 20px !important;\n  width: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW1vb2Rib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoibXktbW9vZGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb29kYm9hcmQtaW1nIHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyLWltZyB7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 31107:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer-profile/book-designer-profile.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".time-btn {\n  height: 46px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-light);\n  background-color: var(--ion-color-light);\n  padding: 0px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  text-transform: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVzaWduZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLG9DQUFBO0VBQUEsd0NBQUE7RUFBQSxZQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsMENBQUE7RUFDQTtBQURBIiwiZmlsZSI6ImJvb2stZGVzaWduZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZS1idG4ge1xyXG4gIEBhcHBseSBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtMnhsIGJnLWxpZ2h0IHRleHQtYmxhY2sgdGV4dC1sZyBoLVs0NnB4XSBwLTAgcHgtMiBmb250LW5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 72605:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".designer {\n    margin-bottom: 10px;\n    height: 270px;\n    overflow: hidden;\n    border-radius: 1rem;\n    border-width: 1px;\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 1024px) {\n    .designer {\n        height: 350px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVzaWduZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0lBQUEsbUJBQUE7SUFBQSxhQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBLGlCQUFBO0lBQUEsNkNBQUE7SUFBQSx3REFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBIiwiZmlsZSI6ImJvb2stZGVzaWduZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2lnbmVyIHtcclxuICAgIEBhcHBseSAgYm9yZGVyIHJvdW5kZWQtMnhsIGgtWzI3MHB4XSBsZzpoLVszNTBweF0gbWItWzEwcHhdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 23043:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".designer {\n    margin-bottom: 10px;\n    height: 270px;\n    overflow: hidden;\n    border-radius: 1rem;\n    border-width: 1px;\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 1024px) {\n    .designer {\n        height: 350px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGVzaWduZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0lBQUEsbUJBQUE7SUFBQSxhQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBLGlCQUFBO0lBQUEsNkNBQUE7SUFBQSx3REFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBIiwiZmlsZSI6ImNvbnRhY3QtZGVzaWduZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2lnbmVyIHtcclxuICAgIEBhcHBseSAgYm9yZGVyIHJvdW5kZWQtMnhsIGgtWzI3MHB4XSBsZzpoLVszNTBweF0gbWItWzEwcHhdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 41546:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/customize-moodboard/customize-moodboard.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".disabled {\n    pointer-events: none;\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZS1tb29kYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0lBQUEsb0JBQUE7SUFBQTtBQUFBIiwiZmlsZSI6ImN1c3RvbWl6ZS1tb29kYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcclxuICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 67927:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".designer {\n    margin-bottom: 10px;\n    height: 270px;\n    overflow: hidden;\n    border-radius: 1rem;\n    border-width: 1px;\n    --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n    --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 1024px) {\n    .designer {\n        height: 350px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0lBQUEsbUJBQUE7SUFBQSxhQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBLGlCQUFBO0lBQUEsNkNBQUE7SUFBQSx3REFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO1FBQUE7SUFBQTtBQUFBIiwiZmlsZSI6ImRlc2lnbmVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2lnbmVyIHtcclxuICAgIEBhcHBseSAgYm9yZGVyIHJvdW5kZWQtMnhsIGgtWzI3MHB4XSBsZzpoLVszNTBweF0gbWItWzEwcHhdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 72984:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/inspirations/inspirations.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-bottom: 0px;\n  padding-left: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}@media (min-width: 1280px) {.back-btn {\n    padding-left: 0px;\n  }\n}.back-btn {\n  --padding-start: 4px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BpcmF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBLENBQUEsNEJBQUE7SUFBQTtFQUFBO0FBQUEsQ0FESjtFQUVJLG9CQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJpbnNwaXJhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnRuIHtcclxuICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgbWItMCBwbC0yIHhsOnBsLTA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 44013:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".chat {\n  height: 490px;\n  overflow: auto;\n  border-bottom-width: 1px;\n  border-color: var(--ion-color-secondary);\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n.chat-input {\n  display: flex;\n  min-height: 102px;\n  align-items: center;\n}\n\n.chat-bubble,  .chat-file,  .chat-image,  .chat-right,  .chat-left {\n  clear: both;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  max-width: 400px;\n  padding: 15px;\n  text-align: left;\n}\n\n.l-side,  .chat-left {\n  margin-left: 55px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.r-side,  .chat-right {\n  float: right;\n  margin-right: 27px;\n  background-color: var(--ion-color-secondary);\n}\n\n.chat-left {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.chat-right {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  border-top-left-radius: 0.5rem;\n}\n\n.download-img {\n  display: none;\n}\n\n.chat-image {\n  position: relative;\n  height: 110px;\n  width: 150px;\n  border-radius: 0.5rem;\n  background-size: cover;\n  padding: 0px;\n}\n\n@media (min-width: 1024px) {\n\n  .chat-image {\n    height: 180px;\n    width: 250px;\n  }\n}\n\n.chat-image:hover .download-img {\n  display: block;\n}\n\n.chat-file {\n  position: relative;\n  height: 50px;\n  width: 170px;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  padding: 0px;\n}\n\n.chat-file:hover {\n  opacity: 0.7;\n}\n\n.chat::-webkit-scrollbar {\n  width: 4px;\n  background-color: transparent;\n  opacity: 0;\n}\n\n.chat:hover::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-primary);\n}\n\n.chat::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-secondary);\n  transition-duration: 1000ms;\n}\n\n.img-btn {\n  margin-right: 20px;\n  cursor: pointer;\n  font-size: 32px;\n  color: var(--ion-color-primary);\n}\n\n.send-btn-wrapper {\n  margin-right: 20px;\n  height: 38px;\n  width: 38px;\n  border-radius: 9999px;\n  background-color: var(--ion-color-primary);\n  padding: 10px;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.send-btn {\n  margin-top: -1px;\n  cursor: pointer;\n  font-size: 22px;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.text-clamp {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3Nlbmdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxhQUFBO0VBQUEsY0FBQTtFQUFBLHdCQUFBO0VBQUEsd0NBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUU7RUFBQSxhQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUlGO0VBQUEsV0FBQTtFQUFBLGVBQUE7RUFBQSxrQkFBQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBS0E7RUFBQSxrQ0FBQTtFQUFBLGlDQUFBO0VBQUE7QUFBQTs7QUFNQTtFQUFBLGtDQUFBO0VBQUEsaUNBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsYUFBQTtBQUZGOztBQU9FO0VBQUEsa0JBQUE7RUFBQSxhQUFBO0VBQUEsWUFBQTtFQUFBLHFCQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsYUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUNFLGNBQUE7QUFKSjs7QUFVRTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFlBQUE7RUFBQSxlQUFBO0VBQUEscUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFVBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBR0E7RUFBQTtBQUFBOztBQUdBO0VBQUEsNENBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsa0JBQUE7RUFBQSxlQUFBO0VBQUEsZUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEscUJBQUE7RUFBQSwwQ0FBQTtFQUFBLGFBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxnQkFBQTtFQUFBLGVBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUVKO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFIRiIsImZpbGUiOiJtZXNzZW5nZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQge1xyXG4gIEBhcHBseSBoLVs0OTBweF0gYm9yZGVyLWIgYm9yZGVyLXNlY29uZGFyeSBweS1bMjVweF0gb3ZlcmZsb3ctYXV0bztcclxufVxyXG5cclxuLmNoYXQtaW5wdXQge1xyXG4gICAgQGFwcGx5IGZsZXggbWluLWgtWzEwMnB4XSBpdGVtcy1jZW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZSB7XHJcbiAgQGFwcGx5IGNsZWFyLWJvdGggcC1bMTVweF0gdGV4dC1sZWZ0IG15LVs1cHhdIG1heC13LVs0MDBweF07XHJcbn1cclxuXHJcbi5sLXNpZGUge1xyXG4gIEBhcHBseSBtbC1bNTVweF0gYmctd2hpdGU7XHJcbn1cclxuXHJcbi5yLXNpZGUge1xyXG4gIEBhcHBseSBmbG9hdC1yaWdodCBtci1bMjdweF0gYmctc2Vjb25kYXJ5O1xyXG59XHJcbi5jaGF0LWxlZnQge1xyXG4gIEBleHRlbmQgLmNoYXQtYnViYmxlO1xyXG4gIEBleHRlbmQgLmwtc2lkZTtcclxuICBAYXBwbHkgcm91bmRlZC1iLWxnIHJvdW5kZWQtdHItbGc7XHJcbn1cclxuXHJcbi5jaGF0LXJpZ2h0IHtcclxuICBAZXh0ZW5kIC5jaGF0LWJ1YmJsZTtcclxuICBAZXh0ZW5kIC5yLXNpZGU7XHJcbiAgQGFwcGx5IHJvdW5kZWQtYi1sZyByb3VuZGVkLXRsLWxnO1xyXG59XHJcblxyXG4uZG93bmxvYWQtaW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hhdC1pbWFnZSB7XHJcbiAgQGV4dGVuZCAuY2hhdC1idWJibGU7XHJcbiAgQGFwcGx5IHctWzE1MHB4XSBoLVsxMTBweF0gbGc6dy1bMjUwcHhdIGxnOmgtWzE4MHB4XSByb3VuZGVkLWxnIGJnLWNvdmVyIHAtMCByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNoYXQtaW1hZ2U6aG92ZXIge1xyXG4gIC5kb3dubG9hZC1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdC1maWxlIHtcclxuICBAZXh0ZW5kIC5jaGF0LWJ1YmJsZTtcclxuICBAYXBwbHkgdy1bMTcwcHhdIGgtWzUwcHhdIHJvdW5kZWQtbGcgcC0wIGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNzAgcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgQGFwcGx5IG9wYWNpdHktMCB3LVs0cHhdIGJnLXRyYW5zcGFyZW50O1xyXG59XHJcbi5jaGF0OmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgQGFwcGx5IGJnLXByaW1hcnk7XHJcbn1cclxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBAYXBwbHkgYmctc2Vjb25kYXJ5IGR1cmF0aW9uLTEwMDA7XHJcbn1cclxuXHJcbi5pbWctYnRuIHtcclxuICAgIEBhcHBseSB0ZXh0LVszMnB4XSBtci1bMjBweF0gdGV4dC1wcmltYXJ5IGN1cnNvci1wb2ludGVyO1xyXG59XHJcblxyXG4uc2VuZC1idG4td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IHAtWzEwcHhdIHJvdW5kZWQtZnVsbCBtci1bMjBweF0gaC1bMzhweF0gdy1bMzhweF07XHJcbn1cclxuXHJcbi5zZW5kLWJ0biB7XHJcbiAgICBAYXBwbHkgdGV4dC1bMjJweF0gbXQtWy0xcHhdIGN1cnNvci1wb2ludGVyO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgQGFwcGx5IG9wYWNpdHktNjAgcG9pbnRlci1ldmVudHMtbm9uZTtcclxufVxyXG4udGV4dC1jbGFtcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxufSJdfQ== */";

/***/ }),

/***/ 47017:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-bottom: 0px;\n  padding-left: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}@media (min-width: 1280px) {.back-btn {\n    padding-left: 0px;\n  }\n}.back-btn {\n  --padding-start: 4px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2Rib2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsb0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUEsQ0FBQSw0QkFBQTtJQUFBO0VBQUE7QUFBQSxDQURGO0VBRUUsb0JBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6Im1vb2Rib2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBtYi0wIHBsLTIgeGw6cGwtMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 74723:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".img-settings {\n  height: 52px !important;\n  width: 100%;\n  margin-top: 4px;\n  background-size: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWludGlyaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFDRiIsImZpbGUiOiJteS1pbnRpcmkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zZXR0aW5ncyB7XHJcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 16882:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".disabled {\n    pointer-events: none;\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtJQUFBLG9CQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJuZXctcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xyXG4gIEBhcHBseSBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNjBcclxufSJdfQ== */";

/***/ }),

/***/ 14400:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".credit-btn {\n  margin: 0px;\n  margin-top: 30px;\n  height: 62px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-secondary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  text-transform: none\n}\n\n.vipps-btn {\n  margin: 0px;\n  margin-top: 30px;\n  margin-left: 10px;\n  height: 62px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-light);\n  background-color: var(--ion-color-light);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.25rem\n}\n\n@media (min-width: 1280px) {\n\n  .vipps-btn {\n    margin-left: 30px\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxXQUFBO0VBQUEsZ0JBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHdDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLFdBQUE7RUFBQSxnQkFBQTtFQUFBLGlCQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0LWJ0biB7XHJcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtMnhsIGgtWzYycHhdIHAtMCBweC00IG0tMCBtdC1bMzBweF0gdGV4dC1sZyB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4udmlwcHMtYnRuIHtcclxuICBAYXBwbHkgYm9yZGVyIGJvcmRlci1saWdodCBiZy1saWdodCByb3VuZGVkLTJ4bCBoLVs2MnB4XSBwLTAgcHgtNCBwdC0xIG0tMCBtdC1bMzBweF0gbWwtWzEwcHhdIHhsOm1sLVszMHB4XTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 97899:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtYm9vay1zZWxlY3Rpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 30394:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pricing-plans/pricing-plans.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLXBsYW5zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 23908:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-bottom: 0px;\n  padding-left: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}@media (min-width: 1280px) {.back-btn {\n    padding-left: 0px;\n  }\n}.back-btn {\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.designer {\n  margin-bottom: 10px;\n  height: 270px;\n  overflow: hidden;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-shadow:  4px 4px 15px rgb(0, 0, 0, 0.25);\n  --tw-shadow-colored: 4px 4px 15px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n@media (min-width: 1024px) {.designer {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBLENBQUEsNEJBQUE7SUFBQTtFQUFBO0FBQUEsQ0FERjtFQUVFLG9CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFHRTtFQUFBLG1CQUFBO0VBQUEsYUFBQTtFQUFBLGdCQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLDZDQUFBO0VBQUEsd0RBQUE7RUFBQTtBQUFBOztBQUFBLDRCQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idG4ge1xyXG4gIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgbWItMCBwbC0yIHhsOnBsLTA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5kZXNpZ25lciB7XHJcbiAgQGFwcGx5ICBib3JkZXIgcm91bmRlZC0yeGwgaC1bMjcwcHhdIGxnOmgtWzM1MHB4XSBtYi1bMTBweF0gb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0xO1xyXG59Il19 */";

/***/ }),

/***/ 72653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0U7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsMENBQUE7RUFDQSxvQkFBQTtFQUNBO0FBRkE7O0FBTUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxjQUFBO0VBQUEsV0FBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBO0FBRkE7O0FBS0Y7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XHJcbiAgY29sb3I6ICM1NTU1NTVcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uc2VuZC1idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTI4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IHRleHQtbGcgZm9udC1zZW1pYm9sZDtcclxuICBiYWNrZ3JvdW5kOiAjOUI3RTYwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 43742:
/*!**********************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctaXQtd29ya3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 48467:
/*!************************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".hero-pencraft {\n\n    margin-bottom: 2rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3rem;\n\n    line-height: 1;\n\n    line-height: 90px;\n\n    color: var(--ion-color-black-2)\n}\n\n@media (min-width: 768px) {\n\n    .hero-pencraft {\n\n        font-size: 3.75rem;\n\n        line-height: 1\n    }\n}\n\n.hero-text {\n\n    margin-bottom: 1.5rem;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 60px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 768px) {\n\n    .hero-text {\n\n        font-size: 3rem;\n\n        line-height: 1;\n\n        line-height: 80px\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text {\n\n        text-align: left;\n\n        font-size: 3.75rem;\n\n        line-height: 1;\n\n        line-height: 90px\n    }\n}\n\n.hero-wrapper {\n\n    margin-left: 1rem;\n\n    margin-right: 1rem;\n\n    margin-bottom: 4rem;\n\n    margin-top: -72px;\n\n    height: 800px;\n\n    border-radius: 1rem;\n\n    background-image: url('/assets/images/landing-img.png');\n\n    background-size: cover\n}\n\n@media (min-width: 768px) {\n\n    .hero-wrapper {\n\n        margin-left: 3rem;\n\n        margin-right: 3rem;\n\n        height: 1030px\n    }\n}\n\n.hero-text-wrapper {\n\n    position: absolute;\n\n    top: 150px;\n\n    display: flex;\n\n    flex: 1 1 0%;\n\n    flex-direction: column;\n\n    align-items: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text-wrapper {\n\n        width: 610px\n    }\n}\n\n.pencraft,  .pencraft-white {\n\n    padding-top: 4rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3.75rem;\n\n    line-height: 1;\n\n    line-height: 70px;\n\n    color: var(--ion-color-black-2)\n}\n\n.pencraft-white {\n\n    padding-top: 0px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-headline,  .landing-headline-white {\n\n    margin-bottom: 1.5rem;\n\n    text-align: left;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 55px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 1024px) {\n\n    .landing-headline,  .landing-headline-white {\n\n        font-size: 3rem;\n\n        line-height: 1\n    }\n}\n\n.landing-headline-white {\n\n    text-align: center;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-text {\n\n    font-size: 18px;\n\n    font-weight: 400;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-2)\n}\n\n.landing-bold {\n\n    font-size: 18px;\n\n    font-weight: 700;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-1)\n}\n\n.landing-img {\n\n    margin: 4rem;\n\n    margin-left: 0px;\n\n    border-radius: 1rem\n}\n\n.quote-icon {\n\n    display: inline-block;\n\n    height: 40px;\n\n    width: 27px;\n\n    background-image: url('/assets/icon/quote.svg')\n}\n\n.arrow-icon {\n\n    display: inline-block;\n\n    height: 20px;\n\n    width: 40px;\n\n    cursor: pointer\n}\n\n.arrow-icon:hover {\n\n    opacity: 0.5\n}\n\n.contact-btn {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.contact-btn:hover {\n\n    opacity: 0.7\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLG1CQUFBOztJQUFBLGdDQUFBOztJQUFBLGVBQUE7O0lBQUEsY0FBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUEsZ0JBQUE7O1FBQUEsa0JBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSx1REFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGlCQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxVQUFBOztJQUFBLGFBQUE7O0lBQUEsWUFBQTs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxnQ0FBQTs7SUFBQSxrQkFBQTs7SUFBQSxjQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBS0E7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUE7SUFBQTtBQUFBOztBQUtBOztJQUFBLGtCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxlQUFBOztJQUFBLGtCQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tcGVuY3JhZnQge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTIgZm9udC1BbGxpc29uIHRleHQtNXhsIG1kOnRleHQtNnhsIG1iLTggbGVhZGluZy1bOTBweF1cclxufVxyXG5cclxuLmhlcm8tdGV4dCB7XHJcbiAgQGFwcGx5IHRleHQtYmxhY2stMSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBsZzp0ZXh0LWxlZnQgbWItNiBsZWFkaW5nLVs2MHB4XSBtZDpsZWFkaW5nLVs4MHB4XSBsZzpsZWFkaW5nLVs5MHB4XSBmb250LWJvbGRcclxufVxyXG5cclxuLmhlcm8td3JhcHBlciB7XHJcbiAgQGFwcGx5IGJnLWxhbmRpbmctaW1nIHJvdW5kZWQtMnhsIGJnLWNvdmVyIGgtWzgwMHB4XSBtZDpoLVsxMDMwcHhdIG1iLTE2IG10LVstNzJweF0gbXgtNCBtZDpteC0xMlxyXG59XHJcblxyXG4uaGVyby10ZXh0LXdyYXBwZXIge1xyXG4gIEBhcHBseSBsZzp3LVs2MTBweF0gdG9wLVsxNTBweF0gYWJzb2x1dGUgZmxleCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtc3RhcnRcclxufVxyXG5cclxuLnBlbmNyYWZ0IHtcclxuICBAYXBwbHkgcHQtMTYgdGV4dC1ibGFjay0yIGZvbnQtQWxsaXNvbiB0ZXh0LTZ4bCBsZWFkaW5nLVs3MHB4XVxyXG59XHJcblxyXG4ucGVuY3JhZnQtd2hpdGUge1xyXG4gIEBleHRlbmQgLnBlbmNyYWZ0O1xyXG4gIEBhcHBseSB0ZXh0LXdoaXRlIHB0LTA7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWhlYWRsaW5lIHtcclxuICBAYXBwbHkgdGV4dC1ibGFjay0xIHRleHQtNHhsIGxnOnRleHQtNXhsIHRleHQtbGVmdCBtYi02IGxlYWRpbmctWzU1cHhdIGZvbnQtYm9sZFxyXG59XHJcblxyXG4ubGFuZGluZy1oZWFkbGluZS13aGl0ZSB7XHJcbiAgQGV4dGVuZCAubGFuZGluZy1oZWFkbGluZTtcclxuICBAYXBwbHkgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlcjtcclxufVxyXG5cclxuLmxhbmRpbmctdGV4dCB7XHJcbiAgQGFwcGx5IGZvbnQtbm9ybWFsIHRleHQtYmxhY2stMiB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxyXG59XHJcblxyXG4ubGFuZGluZy1ib2xkIHtcclxuICBAYXBwbHkgZm9udC1ib2xkIHRleHQtYmxhY2stMSB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxyXG59XHJcblxyXG4ubGFuZGluZy1pbWcge1xyXG4gIEBhcHBseSBtLTE2IG1sLTAgcm91bmRlZC0yeGxcclxufVxyXG5cclxuLnF1b3RlLWljb24ge1xyXG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgdy1bMjdweF0gaC1bNDBweF0gYmctcXVvdGVcclxufVxyXG5cclxuLmFycm93LWljb24ge1xyXG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgdy1bNDBweF0gaC1bMjBweF0gaG92ZXI6b3BhY2l0eS01MFxyXG59XHJcblxyXG4uY29udGFjdC1idG4ge1xyXG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTcwIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItd2hpdGUgYm9yZGVyIHB4LTQgbXgtYXV0byBteS0wIGgtMTBcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".vipps-btn {\n  display: flex;\n  height: 46px;\n  width: 151px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding-top: 0.25rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #FF5B24;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.img-bg {\n  border-radius: 0 !important;\n  border: none !important;\n  height: 15px !important;\n  width: 22px !important;\n  background-size: 15px 22px !important;\n  background-repeat: no-repeat !important;\n  background-image: url('no.svg') !important;\n}\n\n.ion-warning {\n  display: flex;\n  font-size: 10px;\n  color: red;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n  padding-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlwcHMtYnRuIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB3LVsxNTFweF0gaC1bNDZweF0gcm91bmRlZC0yeGwgdGV4dC1sZyBmb250LW1lZGl1bSBwdC0xO1xyXG4gIGJhY2tncm91bmQ6ICNGRjVCMjQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTU1NTtcclxuICBjb2xvcjogIzU1NTU1NTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogIzU1NTU1NTtcclxuICBjYXJldC1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuLmltZy1iZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDIycHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24vZmxhZ3Mvbm8uc3ZnXCIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24td2FybmluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 58503:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/partner-pages/partner-products/partner-products.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%;\n\n    text-align: left\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\nion-col {\n\n    padding-left: 0px;\n\n    padding-right: 0px;\n\n    padding-bottom: 0.75rem\n}\n\n.card {\n\n    height: 300px;\n\n    border-radius: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXItcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLGdCQUFBOztJQUFBLFlBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGFBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJwYXJ0bmVyLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSB0ZXh0LWxlZnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBAYXBwbHkgaC0xMjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBAYXBwbHkgcHgtMCBwYi0zXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIEBhcHBseSByb3VuZGVkLTJ4bCBoLVszMDBweF07XHJcbn0iXX0= */";

/***/ }),

/***/ 87655:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/partner-pages/partner-profile/partner-profile.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLXByb2ZpbGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 92547:
/*!******************************************************************!*\
  !*** ./src/app/pages/processing/processing.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".spinner-center {\n  left: 50%;\n  top: 50%;\n  transform: scale(3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3NpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQUFGIiwiZmlsZSI6InByb2Nlc3NpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zcGlubmVyLWNlbnRlciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 62581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 47863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.vipps-btn {\n  display: flex;\n  height: 46px;\n  width: 151px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding-top: 0.25rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #FF5B24;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n\n.ion-warning {\n  display: flex;\n  font-size: 10px;\n  color: red;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n  padding-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYnRuIHtcclxuICBAYXBwbHkgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi52aXBwcy1idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHctWzE1MXB4XSBoLVs0NnB4XSByb3VuZGVkLTJ4bCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB0LTE7XHJcbiAgYmFja2dyb3VuZDogI0ZGNUIyNDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5pb24td2FybmluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 66222:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.reset-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 12rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XHJcbiAgY29sb3I6ICM1NTU1NTVcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy00OCBoLTE0IHRleHQtd2hpdGUgcm91bmRlZC0yeGwgbXQtOCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 70087:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sms-verification/sms-verification.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".register-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #AA4C33;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\n.ion-warning {\n  display: flex;\n  color: red;\n  padding: 0;\n  margin-top: 0.5rem;\n  justify-content: center;\n  padding-top: 1px;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n\ncode-input {\n  --color: #555555;\n  --item-spacing: 20px;\n  --item-border: 1px solid #555555;\n  --item-border-radius: 15px;\n  --item-border-bottom: 1px solid #555555;\n  --item-border-has-value: 1px solid #555555;\n  --item-border-bottom-has-value: 1px solid #555555;\n  --item-border-focused: 1px solid #555555;\n  --item-border-bottom-focused: 1px solid #555555;\n  --item-shadow-focused: 0px;\n}\n\n@media (max-width: 520px) {\n  code-input {\n    --item-spacing: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7RUFDQTtBQUZBOztBQUtGO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uc2VuZC1idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWxnIG10LTQgZm9udC1zZW1pYm9sZDtcclxuICBjb2xvcjogI0FBNEMzMztcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pb24td2FybmluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmNvZGUtaW5wdXQge1xyXG4gIC0tY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1pdGVtLXNwYWNpbmc6IDIwcHg7XHJcbiAgLS1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItaGFzLXZhbHVlOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1oYXMtdmFsdWU6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItZm9jdXNlZDogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20tZm9jdXNlZDogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLXNoYWRvdy1mb2N1c2VkOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIGNvZGUtaW5wdXQge1xyXG4gICAgLS1pdGVtLXNwYWNpbmc6IDNweDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n  <notifier-container></notifier-container>\r\n</ion-app>\r\n";

/***/ }),

/***/ 46221:
/*!********************************************************************************************!*\
  !*** ./src/app/components/add-moodboard-step/add-moodboard-step.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <h2 class=\"step-title\">{{currentStep.title}}</h2>\r\n  <ion-grid *ngIf=\"isArray(currentStep.data)\" class=\"step-items\">\r\n    <ion-row class=\"step-items-row\">\r\n      <ion-col *ngFor=\"let item of currentStep.data\" (click)=\"toggleItem(item)\" size=\"5.8\" size-lg=\"2.82\" size-xl=\"2.2\" class=\"step-item-wrapper\" [class.selected-item]=\"!item.iconPath && !item.mainColor && isItemSelected(item)\" [class.bigger-margin]=\"item.name\">\r\n        <!-- if image (style|material|product) -->\r\n        <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n         <!-- if icon (room) -->\r\n        <div *ngIf=\"item.iconPath\" class=\"step-icon-wrapper\"  [class.selected-item]=\"isItemSelected(item)\">\r\n          <img src=\"{{item.iconPath}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n        </div>\r\n        <!-- if color pallete -->\r\n        <div *ngIf=\"item.mainColor\" class=\"step-color-wrapper\" [class.selected-item]=\"isItemSelected(item)\">\r\n          <div class=\"w-[47.5%] h-full inline-block\" [ngStyle]=\"{background: item.mainColor}\"></div>\r\n          <div class=\"w-[47.5%] h-full inline-block float-right\">\r\n            <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorLight}\"></div>\r\n            <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorMedium}\"></div>\r\n            <div class=\"h-[30%]\" [ngStyle]=\"{background: item.shadeColorDark}\"></div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"!item.number && item.name\" class=\"font-bold pt-5 text-black-2\">{{item.name}} </p>\r\n        <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-8 text-black-2\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- if final step -->\r\n  <div *ngIf=\"currentStep.data === 'final'\">\r\n    <app-moodboard-details [moodboard]=\"moodboard\"></app-moodboard-details>\r\n  </div>\r\n\r\n</div>";

/***/ }),

/***/ 67417:
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin-clients/admin-clients.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\r\n  <ion-row *ngIf=\"!delete\" class=\"mb-3\">\r\n    <ion-col size=\"12\" size-md=\"3\" size-lg=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <!-- <ion-col offset-md=\"6\" size=\"12\" size-md=\"3\" size-lg=\"3\" class=\"relative bottom-[29px] w-full\">\r\n      <div class=\"profile-input justify-end\">\r\n        <div class=\"w-full\">\r\n          <span class=\"text-sm text-black-2\">{{'CLIENTS.client-type' | translate}}</span>\r\n          <ion-select interface=\"popover\" [multiple]=\"true\">\r\n            <ion-select-option value=\"viewAll\">{{'CLIENTS.view-all' | translate}}</ion-select-option>\r\n            <ion-select-option value=\"premiumClients\">{{'CLIENTS.premium' | translate}}</ion-select-option>\r\n            <ion-select-option value=\"freePlanClients\">{{'CLIENTS.free' | translate}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row *ngIf=\"!delete\" class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let user of (users$ | async) | filter:searchText\" class=\"\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.25\">\r\n      <div class=\"client\">\r\n        <div class=\"my-6 flex flex-1 justify-center pt-3\">\r\n          <img [src]=\"user.photoPath || '../../../assets/images/profile-img.png'\" class=\"!w-[70px] !h-[70px] rounded-2xl object-cover \" alt=\"Profile Img\"/>\r\n        </div>\r\n        <div class=\"absolute top-[12px] right-[12px]\">\r\n            <button (click)=\"showSettings($event, user)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50\" type=\"button\">\r\n                <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 text-center\">\r\n            <p class=\"text-black-2 leading-8 font-semibold text-2xl text-clamp-2\" title=\"{{user.firstName}} {{user.lastName}}\">{{user.firstName}} {{user.lastName}}</p>\r\n        </div>\r\n        <div class=\"mt-4 text-center\">\r\n          <div class=\"px-1\">\r\n            <p class=\"leading-[26px] text-black-2 text-lg text-clamp-1\" title=\"{{user.phoneNumber}}\">+{{user.countryCode}}{{user.phoneNumber}}</p>\r\n            <p class=\"leading-[26px] text-black-2 text-lg text-clamp-1\" title=\"{{user.email}}\">{{user.email}}</p>\r\n            <p class=\"leading-[26px] text-black-2 text-lg text-clamp-1\" title=\"{{user.street}}\">{{user.street}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- User delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove client</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this client? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteClient()\">Remove client</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-grid>";

/***/ }),

/***/ 25659:
/*!********************************************************************************!*\
  !*** ./src/app/components/admin-colors/admin-colors.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"6\" size-xl=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"6\" offset-xl=\"6.5\" size-xl=\"2.5\" class=\"flex justify-end\">\r\n      <ion-button (click)=\"addColor()\" fill=\"clear\" class=\"primary-btn mt-4\">{{'STYLE.add-color' | translate}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let colorPalette of (colorPalettes$ | async) | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n      <div class=\"card\">\r\n        <div class=\"w-[47.5%] h-full inline-block\" [ngStyle]=\"{background: colorPalette.mainColor}\"></div>\r\n        <div class=\"w-[47.5%] h-full inline-block float-right\">\r\n          <div class=\"h-[31%] mb-[6%]\" [ngStyle]=\"{background: colorPalette.shadeColorLight}\"></div>\r\n          <div class=\"h-[31%] mb-[6%]\" [ngStyle]=\"{background: colorPalette.shadeColorMedium}\"></div>\r\n          <div class=\"h-[32%]\" [ngStyle]=\"{background: colorPalette.shadeColorDark}\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"py-2 text-black-2 font-semibold\">{{colorPalette.number}} <span class=\"font-normal\">/ {{colorPalette.name}}</span></p>\r\n        <div class=\"float-right\">\r\n          <button (click)=\"showSettings($event, colorPalette)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center \" type=\"button\">\r\n              <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 72749:
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin-inspiration/admin-inspiration.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"12\" size-md=\"4\" size-lg=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col offset-md=\"6\" size=\"12\" size-md=\"3\" size-lg=\"3\" class=\"relative bottom-[29px] w-full\">\r\n      <div class=\"profile-input justify-end\">\r\n        <div class=\"w-full\">\r\n          <span class=\"text-sm text-black-2\">{{'CLIENTS.owner' | translate}}</span>\r\n          <ion-select interface=\"popover\" [multiple]=\"true\">\r\n            <ion-select-option value=\"viewAll\">{{'CLIENTS.view-all' | translate}}</ion-select-option>\r\n            <ion-select-option value=\"fromClients\">{{'CLIENTS.from-clients' | translate}}</ion-select-option>\r\n            <ion-select-option value=\"fromIntiri\">{{'CLIENTS.from-intiri' | translate}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12]\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n      <div class=\"card\">\r\n        <div class=\"h-full w-full\">\r\n          <img src=\"../../../assets/images/img-01.png\" class=\"object-cover rounded-2xl !h-full !w-full\" alt=\"Profile Img\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"text-2xl py-2 text-black-2 font-semibold\">Vintage</p>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 96675:
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin-materials/admin-materials.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"6\" size-md=\"4\" size-xl=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\" size-md=\"4\" offset-xl=\"3.5\" size-xl=\"3\" class=\"relative bottom-[27px] \">\r\n      <div class=\"profile-input justify-end\">\r\n        <div class=\"w-full\">\r\n          <span class=\"text-sm text-black-2\">Type</span>\r\n          <ion-select (ionChange)=\"onFilterChange($event)\" interface=\"popover\" [multiple]=\"true\">\r\n            <ion-select-option *ngFor=\"let materialType of materialTypes\" value=\"{{materialType.name}}\">{{materialType.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-md=\"4\" size-xl=\"2.5\" class=\"flex justify-end\">\r\n      <ion-button (click)=\"addMaterials()\" fill=\"clear\" class=\"primary-btn mt-4\">{{'STYLE.add-material' | translate}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let material of materials | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n      <div class=\"card\">\r\n        <div class=\"h-full w-full\">\r\n          <img src=\"{{material.imagePath}}\" class=\"object-cover rounded-2xl !h-full !w-full\" alt=\"Profile Img\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"py-2 text-black-2 font-semibold\">{{material.name}}</p>\r\n        <div class=\"float-right\">\r\n          <button (click)=\"showSettings($event, material)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center bg-white rounded-lg\" type=\"button\">\r\n              <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 76687:
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-partners/admin-partners.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-buttons class=\"justify-end mt-4\">\r\n        <ion-button class=\"primary-btn\" (click)=\"addPartner()\">{{'PARTNERS.add' | translate}}</ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"mt-8 gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let partner of (partners$ | async) | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.25\">\r\n      <div class=\"logo cursor-pointer hover:opacity-70\" routerLink=\"/partner-profile/{{partner.id}}\" routerDirection=\"root\">\r\n        <div class=\"my-6 mx-5 h-[60px] flex flex-1 justify-center\">\r\n          <img src=\"{{partner.logoPath}}\" class=\"object-scale-down\" alt=\"Profile Img\" />\r\n        </div>\r\n        <div class=\"my-4 text-center\">\r\n          <div class=\"px-1\">\r\n            <p class=\"leading-[26px] text-black-2 text-lg text-clamp-1\" title=\"{{partner.name}}\">{{partner.name}}</p>\r\n            <p class=\"leading-[26px] text-black-2 text-lg text-clamp-1\" title=\"{{partner.email}}\">{{partner.email}}</p>\r\n            <p class=\"leading-[26px] text-black-2 text-lg text-clamp-1\" title=\"{{partner.street}}\">{{partner.street}}</p>\r\n          </div>\r\n          <div class=\"p-4 mt-6 mx-5 bg-light\">\r\n            <ul>\r\n              <li *ngFor=\"let number of [0,1,2,3,4]\" class=\"inline-block\">\r\n                <ion-icon name=\"star\" class=\"text-primary rounded text-xl mr-1\"></ion-icon>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 36996:
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-pictures/admin-pictures.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"6\" size-xl=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\" offset-xl=\"6.5\" size-xl=\"2.5\" class=\"flex justify-end\">\r\n      <ion-button (click)=\"addPicture()\" fill=\"clear\" class=\"primary-btn mt-4\">{{'STYLE.add-pictures' | translate}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let styleImage of (styleImages$ | async) | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n      <div class=\"card\">\r\n        <div class=\"h-full w-full\">\r\n          <img src=\"{{styleImage.imagePath}}\" class=\"object-cover !h-full !w-full rounded-2xl\" alt=\"Picture Img\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"py-2 text-black-2 font-semibold\">{{styleImage.styleName}}</p>\r\n        <div class=\"float-right\">\r\n          <button (click)=\"showSettings($event, styleImage)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center bg-white rounded-lg\" type=\"button\">\r\n              <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 33887:
/*!************************************************************************************!*\
  !*** ./src/app/components/admin-products/admin-products.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"12\" size-md=\"4\" size-lg=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col offset-md=\"3\" size=\"12\" size-md=\"5\" size-lg=\"6\" class=\"relative bottom-[29px]\">\r\n      <div class=\"profile-input justify-end flex flex-1 gap-x-[1.65%] !mt-8 md:!mt-4\">\r\n        <div class=\"w-full\">\r\n          <span class=\"text-sm text-black-2\">Partners</span>\r\n          <ion-select (ionChange)=\"onPartnersFilterChange($event)\" class=\"w-full\" interface=\"popover\" [multiple]=\"true\">\r\n            <ion-select-option *ngFor=\"let partner of (partners$ | async)\" value=\"{{partner.name}}\">{{partner.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div class=\"w-full\">\r\n          <span class=\"text-sm text-black-2\">{{'PARTNERS.type' | translate}}</span>\r\n          <ion-select (ionChange)=\"onProductTypeFilterChange($event)\" class=\"w-full\" interface=\"popover\" [multiple]=\"true\">\r\n            <ion-select-option value=\"{{productType.name}}\" *ngFor=\"let productType of productTypes\">{{productType.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.65%]\">\r\n    <ion-col *ngFor=\"let product of products | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.23\">\r\n      <div class=\"card\">\r\n        <div class=\"h-full w-full \">\r\n          <img src=\"{{product.imagePath}}\" class=\"object-cover rounded-2xl !h-full !w-full\" alt=\"Profile Img\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"py-2 text-black-2 font-semibold\">{{product.name}}</p>\r\n        <div class=\"float-right\">\r\n          <button (click)=\"showSettings($event, product)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center bg-white rounded-lg\" type=\"button\">\r\n              <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 30779:
/*!******************************************************************************!*\
  !*** ./src/app/components/admin-rooms/admin-rooms.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"6\" size-xl=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    \r\n    <ion-col size=\"6\" offset-xl=\"6.5\" size-xl=\"2.5\" class=\"flex justify-end\">\r\n      <ion-button (click)=\"addRoom()\" fill=\"clear\" class=\"primary-btn mt-4\">{{'STYLE.add-room' | translate}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let room of (rooms$ | async) | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n      <div class=\"card\">\r\n        <div class=\"step-icon-wrapper\" >\r\n          <img src=\"{{room.iconPath}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"py-2 text-black-2 font-semibold\">{{room.name}}</p>\r\n        <div class=\"float-right\">\r\n          <button (click)=\"showSettings($event, room)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center bg-white rounded-lg\" type=\"button\">\r\n              <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 8708:
/*!********************************************************************************!*\
  !*** ./src/app/components/admin-styles/admin-styles.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"px-0 m\">\r\n  <ion-row class=\"mt-2\">\r\n    <ion-col size=\"12\" size-md=\"4\" size-lg=\"3\">\r\n      <div class=\"profile-input\">\r\n        <div class=\"mt-6\">\r\n          <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col offset-md=\"4\" size=\"12\" size-md=\"3\" size-lg=\"3\" class=\"relative bottom-[29px] w-full\">\r\n      <div class=\"profile-input justify-end\">\r\n        <div class=\"w-full\">\r\n          <span class=\"text-sm text-black-2\">{{'NEW-PROJECT.style' | translate}}</span>\r\n          <ion-select (ionChange)=\"onFilterChange($event)\" interface=\"popover\" [multiple]=\"true\">\r\n            <ion-select-option *ngFor=\"let style of (styles$ | async)\" value=\"{{style.name}}\">{{style.name}}</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-sm=\"3\" size-xl=\"2\">\r\n      <ion-button (click)=\"addStyle()\" fill=\"clear\" class=\"primary-btn mt-4\">{{'STYLE.add-style' | translate}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"gap-x-[1.45%]\">\r\n    <ion-col *ngFor=\"let style of styles | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n      <div class=\"card\">\r\n        <div class=\"h-full w-full\">\r\n          <img src=\"{{style.imagePath == 'path' ? style.styleImages[0].imagePath : style.imagePath}}\" class=\"object-cover rounded-2xl !h-full !w-full\" alt=\"Profile Img\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"py-2 text-black-2 font-semibold\">{{style.name}}</p>\r\n        <div class=\"float-right\">\r\n          <button (click)=\"showSettings($event, style)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center\" type=\"button\">\r\n              <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>";

/***/ }),

/***/ 21757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-footer>\r\n  <div class=\"bg-dark min-h-[500px] py-[50px] lg:pt-[120px]\">\r\n    <ion-row class=\"container\">\r\n      <ion-col size=\"8\" offset=\"2\" size-lg=\"4\" offset-lg=\"0\">\r\n        <ion-text class=\"text-left\">\r\n          <p class=\"text-2xl font-bold text-left\">White Logo.</p> <br/>\r\n          <p class=\"footer-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit.</p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <hr/>\r\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"2\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\r\n        <ion-text>\r\n          <p class=\"uppercase\">{{'LANDING.navigation' | translate}}</p><br/>\r\n            <ion-button (click)=\"scrollTo('home')\" fill=\"clear\">{{'LANDING.home' | translate}}</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('how-it-works')\" fill=\"clear\">How it works</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('stories')\" fill=\"clear\">{{'LANDING.stories' | translate}}</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('contact')\" fill=\"clear\">{{'LANDING.contact' | translate}}</ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"4\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\r\n        <ion-text>\r\n          <p class=\"uppercase\">{{'LANDING.social' | translate}}</p><br/>\r\n          <ion-icon class=\"social-logo\" name=\"logo-facebook\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-instagram\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-linkedin\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-twitter\"></ion-icon><br/>\r\n\r\n          <ion-button fill=\"clear\">{{'LANDING.terms' | translate}}</ion-button><br/>\r\n          <ion-button fill=\"clear\">{{'LANDING.privacy' | translate}}</ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 1152:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-admin/header-admin.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n  <ion-header class=\"\" id=\"main-content\">\r\n    <ion-toolbar class=\"header-wrapper header-container\">\r\n      <ion-buttons slot=\"start\" class=\"\">\r\n        <ion-button slot=\"start\">\r\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n          </a>\r\n        </ion-button>\r\n        <section class=\"header-buttons\">\r\n        <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n        </section>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"header-buttons justify-end\">\r\n        <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\r\n          <img [src]=\"(loggedUser$ | async)?.photoPath ? (loggedUser$ | async)?.photoPath : '../../../assets/images/profile-img.png'\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n        </a>\r\n        <ion-icon class=\"header-icon\" (click)=\"showSettings($event)\" name=\"settings-sharp\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of menuItems\">\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 99366:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/header-internal-designer/header-internal-designer.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header id=\"main-content\">\r\n  <ion-toolbar class=\"header-wrapper header-container\">\r\n    <ion-buttons slot=\"start\" class=\"\">\r\n      <ion-button slot=\"start\">\r\n        <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n          <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n        </a>\r\n      </ion-button>\r\n      <section class=\"header-buttons\">\r\n        <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n      </section>\r\n    </ion-buttons>\r\n    <ion-buttons class=\"header-buttons justify-end\">\r\n      <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\r\n        <img [src]=\"(loggedUser$ | async)?.photoPath ? (loggedUser$ | async)?.photoPath : '../../../assets/images/profile-img.png'\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n      </a>\r\n      <ion-icon class=\"header-icon\" routerLink=\"/messenger\" routerDirection=\"root\" name=\"chatbox-ellipses-sharp\"></ion-icon>\r\n      <ion-icon class=\"header-icon\" (click)=\"showSettings($event)\" name=\"settings-sharp\"></ion-icon>\r\n      <!-- <ion-icon class=\"header-icon\" name=\"notifications-sharp\"></ion-icon> -->\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n<ion-header>\r\n  <ion-toolbar translucent>\r\n    <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n      <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n    </a></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of menuItems\">\r\n      <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"cursor-pointer\" routerLink=\"/profile\" routerDirection=\"root\">{{'COMMON.my-profile' | translate}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"cursor-pointer\">{{'COMMON.settings' | translate}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"cursor-pointer\">{{'COMMON.notifications' | translate}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 14982:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [class.white-header]=\"isScrolledDown\" class=\"bg-transparent sticky top-0 z-[100]\" >\r\n  <div class=\"header-wrapper\">\r\n    <a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\r\n      <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n    </a>\r\n      <ion-buttons class=\"header-buttons\">\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('home')\">{{'LANDING.home' | translate}}</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('how-it-works')\">{{'LANDING.how-it-works' | translate}}</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('stories')\">{{'LANDING.stories' | translate}}</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('contact')\">{{'LANDING.contact' | translate}}</ion-button>\r\n        <ion-button fill=\"clear\" class=\"primary-btn\" routerLink=\"/login\" routerDirection=\"root\">{{'COMMON.login' | translate}}</ion-button>\r\n        <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/register\" routerDirection=\"root\">{{'COMMON.register' | translate}}</ion-button>\r\n        <ion-button class=\"btn hover:opacity-80\" (click)=\"showLanguage($event)\">\r\n          <ion-img [src]=\"languageImg\"></ion-img>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div class=\"flex md:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/login\" >{{'COMMON.login' | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/register\" >{{'COMMON.register' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n\r\n";

/***/ }),

/***/ 18968:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-partner/header-partner.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header id=\"main-content\" class=\"header\">\r\n    <ion-toolbar class=\"header-wrapper header-container\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button slot=\"start\">\r\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n          </a>\r\n        </ion-button>\r\n        <section class=\"header-buttons\">\r\n          <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n        </section>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"header-buttons justify-end\">\r\n        <a routerLink=\"/partner/profile\" routerDirection=\"root\" class=\"py-1\">\r\n          <img [title]=\"(loggedUser$ | async)?.fullName\" [src]=\"(loggedUser$ | async)?.photoPath ? (loggedUser$ | async)?.photoPath : '../../../assets/images/profile-img.png'\" alt=\"Profile Img\" class=\"header-profile-img\"/>\r\n        </a>\r\n        <div title=\"Settings\" (click)=\"showSettings($event)\" class=\"cursor-pointer hover:opacity-80 relative top-[4px]\"><ion-icon class=\"header-icon\"  name=\"settings-sharp\"></ion-icon></div>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of menuItems\">\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/profile\" routerDirection=\"root\">{{'COMMON.my-profile' | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\">{{'COMMON.settings' | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/new-project\" routerDirection=\"root\">{{'COMMON.create' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <ion-header id=\"main-content\">\r\n    <ion-toolbar class=\"header-wrapper header-container\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button slot=\"start\">\r\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n          </a>\r\n        </ion-button>\r\n        <section class=\"header-buttons\">\r\n          <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n        </section>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"header-buttons justify-end\">\r\n        <ng-container *ngIf=\"(loggedUser$ | async) as loggedUser\">\r\n          <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\r\n            <img [title]=\"loggedUser.fullName\" [src]=\"loggedUser.photoPath || '../../../assets/images/profile-img.png'\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n          </a>\r\n          <div title=\"Messenger\" routerLink=\"/messenger\" routerDirection=\"root\" class=\"cursor-pointer hover:opacity-80 relative top-[4px]\"><ion-icon class=\"header-icon pointer-events-none\" name=\"chatbox-ellipses-sharp\"></ion-icon></div>\r\n          <div title=\"Settings\" (click)=\"showSettings($event)\" class=\"cursor-pointer hover:opacity-80 relative top-[4px]\"><ion-icon class=\"header-icon\"  name=\"settings-sharp\"></ion-icon></div>\r\n        </ng-container>\r\n        <ion-button *ngIf=\"!(loggedUser$ | async)\" fill=\"clear\" class=\"secondary-btn\" routerLink=\"/login\" routerDirection=\"root\">{{'NEW-COMMON.login' | translate}}</ion-button>\r\n        <ion-button fill=\"clear\" class=\"primary-btn\" (click)=\"removeProjectDraft()\" href=\"/new-project\">{{'MY-INTIRI.create' | translate}}</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of menuItems\">\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/profile\" routerDirection=\"root\">{{'COMMON.my-profile' | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\">{{'COMMON.settings' | translate}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/new-project\" routerDirection=\"root\">{{'MY-INTIRI.create' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 63879:
/*!********************************************************************************!*\
  !*** ./src/app/components/menu-popover/menu-popover.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list *ngIf=\"designer\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Edit designer</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteDesignerModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"product\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Edit product</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteProductModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"moodboard \" lines=\"none\" >\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteMoodboardModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"toggleTemplateMoodboard()\" [button]=\"true\">{{item.isTemplate ? 'Remove from template moodboards' : 'Make a template moodboard'}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"client\" lines=\"none\" >\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteClientModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"style\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Edit style</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteStyleModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"material\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Connect to moodboard</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteMaterialsModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"room\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Connect to moodboard</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteRoomModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"color\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Connect to moodboard</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteColorModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"picture\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Connect to moodboard</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeletePictureModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"contact\" lines=\"none\" >\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\">Connect to moodboard</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" (click)=\"openDeleteContactModal()\" [button]=\"true\">{{'COMMON.delete' | translate}}</ion-item>\r\n</ion-list>";

/***/ }),

/***/ 19381:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/modals/add-color-modal/add-color-modal.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add color modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center h-full\">\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <form [formGroup]=\"addColorForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"addColor()\" autocomplete=\"off\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">{{'STYLE.add-color' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <p class=\"leading-[22px] mb-2 font-semibold text-black-1 text-lg\">{{'STYLE.color-preview' | translate}}</p>\r\n            <div class=\"border-2 border-dashed rounded-2xl h-[240px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n              <div class=\"flex justify-center mt-[18px]\">\r\n                <div class=\"card\">\r\n                  <div class=\"w-[47.5%] h-full inline-block\" [ngStyle]=\"{background: colorPallete.mainColor}\"></div>\r\n                  <div class=\"w-[47.5%] h-full inline-block float-right\">\r\n                    <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: colorPallete.shadeColorLight}\"></div>\r\n                    <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: colorPallete.shadeColorMedium}\"></div>\r\n                    <div class=\"h-[30%]\" [ngStyle]=\"{background: colorPallete.shadeColorDark}\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-4 mx-2 flex-1 px-0 sm:px-[100px]\">\r\n        <ion-col>\r\n          <div class=\"pr-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.color-name' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.name\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"name\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && nameErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"pl-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.color-number' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.number\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"number\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && numberErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-4 mx-2 flex-1 px-0 sm:px-[100px] relative\">\r\n        <ion-col>\r\n          <div class=\"pr-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.select-main-color' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.mainColor\" disabled [style.background]=\"colorPallete.mainColor\"\r\n            [cpPosition]=\"'top'\"\r\n            [(colorPicker)]=\"colorPallete.mainColor\" type=\"text\"\r\n            class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"main\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && mainErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"pl-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.shade' | translate}} 1</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.shadeColorLight\" disabled [style.background]=\"colorPallete.shadeColorLight\"\r\n            [cpPosition]=\"'top'\"\r\n            [(colorPicker)]=\"colorPallete.shadeColorLight\" type=\"text\"\r\n            class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"shadeOne\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && shadeOneErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-4 mx-2 flex-1 px-0 sm:px-[100px]\">\r\n        <ion-col>\r\n          <div class=\"pr-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.shade' | translate}} 2</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.shadeColorMedium\" disabled [style.background]=\"colorPallete.shadeColorMedium\"\r\n            [cpPosition]=\"'top'\"\r\n            [(colorPicker)]=\"colorPallete.shadeColorMedium\" type=\"text\"\r\n            class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"shadeTwo\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && shadeTwoErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"pl-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.shade' | translate}} 3</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.shadeColorDark\" disabled [style.background]=\"colorPallete.shadeColorDark\"\r\n            [cpPosition]=\"'top'\"\r\n            [(colorPicker)]=\"colorPallete.shadeColorDark\" type=\"text\"\r\n            class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"shadeThree\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && shadeThreeErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-8\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" type=\"submit\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n  </div>\r\n   <!-- Color added modal -->\r\n   <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'STYLE.color-added' | translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'STYLE.color-added-text' | translate}}</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'STYLE.go-to-colors' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- Color delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove color</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this color? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteColor()\">Remove color</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 37999:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/modals/add-designer-modal/add-designer-modal.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add designer modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center flex flex-col h-full\">\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">{{'DESIGNERS.add' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">{{'DESIGNERS.designer-name' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"designer.firstName\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">Last name</span>\r\n            <ion-input [(ngModel)]=\"designer.lastName\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <section class=\"flex\">\r\n            <div class=\"phone-input\">\r\n              <span class=\"text-sm text-black-2\">{{'COMMON.phone' | translate}}</span>\r\n              <ion-select class=\"\" interface=\"popover\" [(ngModel)]=\"designer.countryCode\">\r\n                <ion-select-option value=\"45\">+45</ion-select-option>\r\n                <ion-select-option value=\"46\">+46</ion-select-option>\r\n                <ion-select-option value=\"47\">+47</ion-select-option>\r\n                <ion-select-option value=\"381\">+381</ion-select-option>\r\n                <ion-select-option value=\"382\">+382</ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm invisible\">{{'COMMON.phone' | translate}}</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" [(ngModel)]=\"designer.phoneNumber\"></ion-input>\r\n            </div>\r\n          </section>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ml-2.5\">\r\n          <p class=\"font-medium text-black-1 text-lg mt-7 mb-2\">{{'DESIGNERS.designer-status' | translate}}</p>\r\n          <ion-radio-group [(ngModel)]=\"designer.role\">\r\n            <ion-radio value=\"InternalDesigner\"></ion-radio>\r\n            <span class=\"m-4 relative bottom-[4px]\">{{'DESIGNERS.inhouse' | translate}}</span>\r\n            <ion-radio value=\"ExternalDesigner\"></ion-radio>\r\n            <span class=\"m-4 relative bottom-[4px]\">{{'DESIGNERS.external' | translate}}</span>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ml-2.5\">\r\n          <p class=\"font-medium text-black-1 text-lg mt-7 mb-2\">Language</p>\r\n          <div class=\"flex items-center mb-3\">\r\n            <input id=\"default-checkbox\" type=\"checkbox\" value=\"EN\" [(ngModel)]=\"EN\" class=\"w-5 h-5 rounded text-primary cursor-pointer\">\r\n            <label for=\"default-checkbox\" class=\"ml-2 text-lg text-black-1\">English</label>\r\n          </div>\r\n          <div class=\"flex items-center\">\r\n            <input id=\"default-checkbox\" type=\"checkbox\" value=\"Norwegian\" [(ngModel)]=\"NO\" class=\"w-5 h-5 rounded text-primary\">\r\n            <label for=\"default-checkbox\" class=\"ml-2 text-lg text-black-1\">Norwegian</label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-12\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" (click)=\"addDesigner()\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n   <!-- Designer added modal -->\r\n   <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'DESIGNERS.designer-added' | translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'DESIGNERS.designer-added-text' | translate}}</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'DESIGNERS.go-to' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n   <!-- Designer delete modal -->\r\n <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n  <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n    <div class=\"max-w-md w-full space-y-8\">\r\n      <div>\r\n        <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n        <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove designer</h2>\r\n        <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this designer? This action cannot be undone.</p>\r\n      </div>\r\n      <ion-buttons class=\"justify-center\">\r\n        <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteDesigner()\">Remove designer</ion-button>\r\n        <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 88499:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/add-materials-modal/add-materials-modal.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add material modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center h-full\">\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <form [formGroup]=\"addMaterialForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"addMaterial()\" autocomplete=\"off\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">{{'STYLE.add-material' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-4 mx-2 flex-1 px-0 sm:px-[100px]\">\r\n        <ion-col>\r\n          <div class=\"pr-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.material-name' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"material.name\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"name\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && nameErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"pl-2\">\r\n            <span class=\"text-sm text-black-2\">Type</span>\r\n          <ion-select [(ngModel)]=\"material.materialTypeId\" interface=\"popover\" class=\" h-[56px]\" formControlName=\"type\">\r\n            <ion-select-option  *ngFor=\"let materialType of materialTypes\" value=\"{{materialType.id}}\">{{materialType.name}}</ion-select-option>\r\n          </ion-select>\r\n          <span class=\"ion-warning\" *ngIf=\"isFormSubmited && typeErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.description' | translate}}</span>\r\n            <ion-textarea rows=\"5\" [(ngModel)]=\"material.description\" class=\"border border-black-2 rounded-2xl focus:outline-0\" formControlName=\"description\"></ion-textarea>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && descriptionErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input w-fit\">\r\n            <p class=\"leading-[22px] mb-2 font-semibold text-black-1 text-lg\">{{'STYLE.image' | translate}}</p>\r\n            <label for=\"dropzone-file\">\r\n              <div class=\"w-[200px] border-2 border-dashed rounded-2xl h-[200px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                <div *ngIf=\"!imagePath\" class=\"text-center mt-[65px]\">\r\n                  <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                  <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">{{'COMMON.upload' | translate}}</p>\r\n                </div>\r\n                <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"materialImg\" />\r\n              </div>\r\n              <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" formControlName=\"imageFile\"/>\r\n            </label>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && imageFileErrors?.required\">Image Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-8\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" type=\"submit\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n  </div>\r\n   <!-- Material added modal -->\r\n   <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'STYLE.material-added' | translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'STYLE.material-added-text' | translate}}</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'STYLE.material-added-text' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- Material delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove material</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this material? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteMaterial()\">Remove material</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 33570:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modals/add-partner-modal/add-partner-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add partner modal -->\r\n  <div *ngIf=\"!nextPage && !added && !addedContact\" class=\"justify-center items-center flex flex-col h-full w-full\">\r\n    <h1 class=\"font-medium text-black-1 text-5xl mt-16 mb-8 text-center\">{{'PARTNERS.add' | translate}}</h1>\r\n    <div class=\"partner-form\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">{{'PARTNERS.partner-name' | translate}}</span>\r\n              <ion-input [(ngModel)]=\"partner.name\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <section class=\"flex\">\r\n              <div class=\"phone-input\">\r\n                <span class=\"text-sm text-black-2\">{{'COMMON.phone' | translate}}</span>\r\n                <ion-select class=\"\" interface=\"popover\" [(ngModel)]=\"partner.countryCode\">\r\n                  <ion-select-option value=\"45\">+45</ion-select-option>\r\n                  <ion-select-option value=\"46\">+46</ion-select-option>\r\n                  <ion-select-option value=\"47\">+47</ion-select-option>\r\n                  <ion-select-option value=\"381\">+381</ion-select-option>\r\n                  <ion-select-option value=\"382\">+382</ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n              <div class=\"profile-input\">\r\n                <span class=\"text-sm invisible\">{{'COMMON.phone' | translate}}</span>\r\n                <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" [(ngModel)]=\"partner.phoneNumber\"></ion-input>\r\n              </div>\r\n            </section>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">{{'COMMON.email' | translate}}</span>\r\n              <ion-input [(ngModel)]=\"partner.email\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">{{'PAYMENT.street' | translate}}</span>\r\n              <ion-input [(ngModel)]=\"partner.street\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"flex\">\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">{{'details.postal-code' | translate}}</span>\r\n              <ion-input [(ngModel)]=\"partner.postalCode\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">{{'details.city' | translate}}</span>\r\n              <ion-input [(ngModel)]=\"partner.city\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">{{'details.country' | translate}}</span>\r\n              <ion-select [(ngModel)]=\"partner.country\" interface=\"popover\">\r\n                <ion-select-option value=\"Norway\">Norway</ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"profile-input w-fit\">\r\n              <p class=\"leading-[22px] mb-2 font-semibold text-black-1 text-lg\">{{'PARTNERS.partner-logo' | translate}}</p>\r\n              <label for=\"dropzone-file\">\r\n                <div class=\"w-[200px] border-2 border-dashed rounded-2xl h-[200px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                  <div *ngIf=\"!imagePath\" class=\"text-center mt-[65px]\">\r\n                    <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                    <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">{{'COMMON.upload' | translate}}</p>\r\n                  </div>\r\n                  <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"partnerLogoImg\" />\r\n                </div>\r\n                <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" />\r\n              </label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-12\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" (click)=\"addPartner()\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n   <!-- Add partner contact -->\r\n   <div *ngIf=\"nextPage\" class=\"justify-center items-center flex flex-col h-full\">\r\n    <h1 class=\"font-medium text-black-1 text-5xl mt-16 mb-8 text-center\">{{'PARTNERS.add-contact' | translate}}</h1>\r\n    <div class=\"partner-form\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">Partner contact name</span>\r\n              <ion-input [(ngModel)]=\"partnerContact.firstName\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm text-black-2\">Partner contact surname</span>\r\n              <ion-input [(ngModel)]=\"partnerContact.lastName\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <section class=\"flex\">\r\n              <!-- <div class=\"phone-input\">\r\n                <span class=\"text-sm text-black-2\">Phone number</span>\r\n                <ion-select class=\"\" value=\"serbia\" interface=\"popover\">\r\n                  <ion-select-option value=\"denmark\">+45</ion-select-option>\r\n                  <ion-select-option value=\"sweden\">+46</ion-select-option>\r\n                  <ion-select-option value=\"norway\">+47</ion-select-option>\r\n                  <ion-select-option value=\"serbia\">+381</ion-select-option>\r\n                  <ion-select-option value=\"montenegro\">+382</ion-select-option>\r\n                </ion-select>\r\n              </div> -->\r\n              <div class=\"profile-input\">\r\n                <span class=\"text-sm\">{{'COMMON.phone' | translate}}</span>\r\n                <ion-input [(ngModel)]=\"partnerContact.phoneNumber\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n              </div>\r\n            </section>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-12\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" (click)=\"addPartnerContact()\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <!-- Partner added modal -->\r\n  <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'PARTNERS.partner-added' | translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'PARTNERS.partner-added-text' | translate}}</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'PARTNERS.go-to' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- Partner contact added modal -->\r\n  <div *ngIf=\"addedContact\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Partner contact added!</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">You successfully added new partner contact.</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissContactModal()\">Go to Partner</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 38466:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modals/add-picture-modal/add-picture-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add picture modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center h-full\">\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <form [formGroup]=\"addPictureForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"addStyleImage()\" autocomplete=\"off\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">{{'STYLE.add-pictures' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row >\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.select-style' | translate}}</span>\r\n            <ion-select [(ngModel)]=\"styleImage.styleId\" interface=\"popover\" formControlName=\"style\">\r\n              <ion-select-option *ngFor=\"let style of (styles$ | async)\" value=\"{{style.id}}\">{{style.name}}</ion-select-option>\r\n            </ion-select>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && styleErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input w-fit\">\r\n            <p class=\"leading-[22px] mb-2 font-semibold text-black-1 text-lg\">{{'STYLE.image' | translate}}</p>\r\n            <label for=\"dropzone-file\">\r\n              <div class=\"w-[200px] border-2 border-dashed rounded-2xl h-[200px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                <div *ngIf=\"!imagePath\" class=\"text-center mt-[65px]\">\r\n                  <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                  <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">{{'COMMON.upload' | translate}}</p>\r\n                </div>\r\n                <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"pictureImg\" />\r\n              </div>\r\n              <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" formControlName=\"imageFile\"/>\r\n            </label>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && imageFileErrors?.required\">Image Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-8\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" type=\"submit\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n  </div>\r\n   <!-- Picture modal -->\r\n   <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'STYLE.picture-added' | translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'STYLE.picture-added-text' | translate}}</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'STYLE.go-to-pictures' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- Picture delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove picture</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this picture? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteStyleImage()\">Remove picture</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 10860:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/modals/add-product-modal/add-product-modal.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n<ion-content>\r\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div *ngIf=\"!delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full h-full space-y-8 mt-6  h-100\">\r\n        <div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black1\">{{'PARTNERS.addProduct' | translate}}</h2>\r\n        </div>\r\n        <div class=\"profile-input\">\r\n          <span class=\"text-sm text-black-2\">{{'PARTNERS.product-name' | translate}}</span>\r\n          <ion-input formControlName=\"productName\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          <div *ngIf=\"submitted && form.productName.errors\" class=\"invalid-feedback\">\r\n            <span slot=\"error\" style=\"color: red;\" *ngIf=\"form.productName.errors.required\">*{{'PARTNERS.product-name-required' | translate}}</span>\r\n          </div>\r\n        </div>\r\n        <section class=\"flex-row-product\">\r\n          <div class=\"profile-input fixed-width\">\r\n            <span class=\"text-sm text-black-2\">{{'PARTNERS.type' | translate}}</span>\r\n            <ion-select interface=\"popover\"  formControlName=\"productType\" class=\"border rounded-2xl h-14 border-black-2  \">\r\n              <ion-select-option value=\"{{productType.id}}\" *ngFor=\"let productType of productsType\">{{productType.name}}</ion-select-option>\r\n            </ion-select>\r\n            <div *ngIf=\"submitted && form.productType.errors\" class=\"invalid-feedback\">\r\n              <span slot=\"error\" style=\"color: red;\" *ngIf=\"form.productType.errors.required\">*{{'PARTNERS.product-type-required' | translate}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"profile-input fixed-width\">\r\n            <span class=\"text-sm text-black-2\">{{'PARTNERS.product-material' | translate}}</span>\r\n            <ion-select interface=\"popover\"  formControlName=\"productMaterial\" class=\"border rounded-2xl h-14 border-black-2  \">\r\n            <ion-select-option value=\"{{material.id}}\" *ngFor=\"let material of materials\">{{material.name}}</ion-select-option>\r\n            </ion-select>\r\n            <div *ngIf=\"submitted && form.productType.errors\" class=\"invalid-feedback\">\r\n              <span slot=\"error\" style=\"color: red;\" *ngIf=\"form.productType.errors.required\">*{{'PARTNERS.product-material-required' | translate}}</span>\r\n            </div>\r\n            \r\n          </div>\r\n        </section>\r\n        <div class=\"flex-row-product\">\r\n          <div class=\"profile-input fixed-width\">\r\n            <!-- <span class=\"text-sm text-black-2\">Select color</span>\r\n            <ion-select interface=\"popover\"  formControlName=\"color\" class=\"border rounded-2xl h-14 border-black-2  \">\r\n              <ion-select-option value=\"{{color.hexValue}}\" *ngFor=\"let color of colors\"  >{{color.name}}\r\n              </ion-select-option> -->\r\n            <!-- </ion-select> -->\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.select-main-color' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"colorPallete.mainColor\"  [style.background]=\"colorPallete.mainColor\"\r\n            [cpPosition]=\"'top'\" formControlName=\"color\"\r\n            [(colorPicker)]=\"colorPallete.mainColor\" type=\"text\"\r\n            class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            <div *ngIf=\"submitted && form.color.errors\" class=\"invalid-feedback\">\r\n              <span slot=\"error\" style=\"color: red;\" *ngIf=\"form.color.errors.required\">*{{'PARTNERS.color-required' | translate}}</span>\r\n            </div>\r\n            \r\n        </div>\r\n          <div class=\"profile-input fixed-width\">\r\n            <span class=\"text-sm text-black-2\">{{'CONSULTATIONS.price' | translate}}</span>\r\n            <ion-input  type=\"text\" class=\"border rounded-2xl h-14 border-black-2 \" formControlName=\"price\"></ion-input>\r\n            <div *ngIf=\"submitted && form.price.errors\" class=\"invalid-feedback\">\r\n              <span slot=\"error\" style=\"color: red;\" *ngIf=\"form.price.errors.required\">*{{'PARTNERS.price-required' | translate}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <span class=\"text-sm text-black-2\">{{'STYLE.description' | translate}}</span>\r\n          <ion-textarea rows=\"5\" class=\"border border-black-2 rounded-2xl focus:outline-0\" formControlName=\"description\"></ion-textarea>\r\n        </div>\r\n        <div>\r\n          <span class=\"text-sm text-black-2\">{{'PARTNERS.product-image' | translate}}</span>\r\n          <div class=\"profile-input w-fit\">\r\n            <label for=\"dropzone-file\">\r\n              <div class=\"w-[150px] border-2 border-dashed rounded-2xl h-[150px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                <div class=\"text-center mt-[50px]\" *ngIf=\"!imagePath\">\r\n                  <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                  <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">{{'COMMON.upload'| translate}}</p>\r\n                  \r\n                </div>\r\n                <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"roomImg\" />\r\n              </div>\r\n              <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" formControlName=\"imageUrl\" />\r\n            </label>\r\n            <div *ngIf=\"submitted && form.imageUrl.errors\" class=\"invalid-feedback\">\r\n              <span slot=\"error\" style=\"color: red;\" *ngIf=\"form.imageUrl.errors.required\">*{{'PARTNERS.product-image-required' | translate}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"flex justify-center\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px] mb-8\" (click)=\"dismissModal()\">{{'COMMON.cancel'| translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px] mb-8\" type='submit' >{{'COMMON.add'| translate}}</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n  <!-- Product delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove product</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this product? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteProduct()\">Remove product</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 42814:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/modals/add-room-modal/add-room-modal.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add room modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center h-full\">\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <form [formGroup]=\"addRoomForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"addRoom()\" autocomplete=\"off\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">{{'STYLE.add-room' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-4 mx-2 flex-1 px-0 sm:px-[100px]\">\r\n        <ion-col>\r\n          <div class=\"pr-2\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.room-name'| translate}}</span>\r\n            <ion-input [(ngModel)]=\"room.name\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"name\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && nameErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"pl-2\">\r\n            <div class=\"pl-2\">\r\n              <span class=\"text-sm text-black-2\">Type</span>\r\n            <ion-select [(ngModel)]=\"room.roomTypeId\" interface=\"popover\" class=\" h-[56px]\" formControlName=\"type\">\r\n              <ion-select-option  *ngFor=\"let roomType of roomTypes\" value=\"{{roomType.id}}\">{{roomType.name}}</ion-select-option>\r\n            </ion-select>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && typeErrors?.required\">Field Required!</span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.description'| translate}}</span>\r\n            <ion-textarea rows=\"5\" [(ngModel)]=\"room.description\" class=\"border border-black-2 rounded-2xl\" formControlName=\"description\"></ion-textarea>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && descriptionErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input w-fit\">\r\n            <p class=\"leading-[22px] mb-2 font-semibold text-black-1 text-lg\">{{'STYLE.image'| translate}}</p>\r\n            <label for=\"dropzone-file\">\r\n              <div class=\"w-[200px] border-2 border-dashed rounded-2xl h-[200px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                <div *ngIf=\"!imagePath\" class=\"text-center mt-[65px]\">\r\n                  <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                  <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">{{'COMMON.upload'| translate}}</p>\r\n                </div>\r\n                <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"roomImg\" />\r\n              </div>\r\n              <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" formControlName=\"imageFile\"/>\r\n            </label>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && imageFileErrors?.required\">Image Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-8\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel'| translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" type=\"submit\">{{'COMMON.add'| translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n  </div>\r\n   <!-- Room added modal -->\r\n   <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'STYLE.room-added'| translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'STYLE.room-added-text'| translate}}</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'STYLE.go-to-rooms'| translate}}</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- Room delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove room</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this room? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteRoom()\">Remove room</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel'| translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 29403:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/modals/add-style-modal/add-style-modal.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add style modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center h-full\">\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <form [formGroup]=\"addStyleForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"addStyle()\" autocomplete=\"off\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">{{'STYLE.add-style' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.style-name' | translate}}</span>\r\n            <ion-input [(ngModel)]=\"style.name\" type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"name\"></ion-input>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && nameErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">{{'STYLE.description' | translate}}</span>\r\n            <ion-textarea rows=\"5\" [(ngModel)]=\"style.description\" class=\"border border-black-2 rounded-2xl\" formControlName=\"description\"></ion-textarea>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && descriptionErrors?.required\">Field Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input w-fit\">\r\n            <p class=\"leading-[22px] mb-2 font-semibold text-black-1 text-lg\">{{'STYLE.image' | translate}}</p>\r\n            <label for=\"dropzone-file\">\r\n              <div class=\"w-[200px] border-2 border-dashed rounded-2xl h-[200px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                <div *ngIf=\"!imagePath\" class=\"text-center mt-[65px]\">\r\n                  <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                  <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">{{'COMMON.upload' | translate}}</p>\r\n                </div>\r\n                <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"styleImg\" />\r\n              </div>\r\n              <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" formControlName=\"imageFile\"/>\r\n            </label>\r\n            <span class=\"ion-warning\" *ngIf=\"isFormSubmited && imageFileErrors?.required\">Image Required!</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-8\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" type=\"submit\">{{'COMMON.add' | translate}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    </form>\r\n  </div>\r\n  <!-- Style added modal -->\r\n  <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mt-[7px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">{{'STYLE.style-added' | translate}}</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">{{'STYLE.style-added-text' | translate}}</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'STYLE.go-to-styles' | translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Style delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove style</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this style? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteStyle()\">Remove style</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 21731:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n    <p class=\"mt-[40px] text-2xl text-black font-medium\">{{'BOOK-MODAL.book' | translate}}</p>\r\n    <p class=\"mt-[30px] text-2xl text-primary font-medium\">{{price}} Nok / {{'BOOK-MODAL.consultation' | translate}}</p>\r\n    <p class=\"text-lg text-black-2\">{{'BOOK-MODAL.duration' | translate}} {{duration}}min</p>\r\n    <div class=\"mt-[30px]\">\r\n      <span class=\"text-sm text-black-2\">{{'BOOK-MODAL.duration' | translate}}</span>\r\n      <ion-input type=\"number\" min=\"1\" class=\"border rounded-2xl border-black-2 w-[310px] h-14 focus:ring-transparent\" [(ngModel)]=\"numberOfConsultations\" (ionChange)=\"totalPriceSum($event)\"></ion-input>\r\n    </div>\r\n    <p class=\"mt-[30px] text-lg text-black-2 font-medium\">{{'BOOK-MODAL.total' | translate}}</p>\r\n    <p class=\"text-[45px] text-primary font-medium\">{{totalPrice}} Nok</p>\r\n    <ion-item-divider class=\"border-b-[3px] border-primary w-[60px] h-0 bg-white\"></ion-item-divider>\r\n    <p class=\"mt-[25px] text-2xl text-black font-medium\">{{'BOOK-MODAL.tell' | translate}}</p>\r\n    <p class=\"text-lg text-black-2 text-center\">{{'BOOK-MODAL.help' | translate}}</p>\r\n    <div class=\"flex flex-wrap mt-[30px]\">\r\n      <ion-item *ngFor=\"let item of items\" class=\"w-full xl:w-1/2\" lines=\"none\">\r\n        <div class=\"flex items-center\">\r\n          <ion-checkbox></ion-checkbox>\r\n          <p class=\"text-[18px] text-black-2 ml-2 leading-[26px]\">{{item.name}}</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"w-full xl:w-1/2\" lines=\"none\">\r\n        <div class=\"flex items-center\">\r\n          <ion-checkbox (ionChange)=\"isChecked($event)\"></ion-checkbox>\r\n          <div>\r\n            <p class=\"text-[18px] text-black-2 ml-2 leading-[26px]\">{{'BOOK-MODAL.2d-3d' | translate}}</p>\r\n            <p class=\"text-[18px] text-primary ml-2 leading-[26px]\">(+3500 Nok)</p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"mt-[30px] pb-6\">\r\n      <ion-button fill=\"clear\" class=\"secondary-btn\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n      <ion-button fill=\"clear\" class=\"primary-btn\" [disabled]=\"totalPrice <= 0\" (click)=\"redirectToPayment()\">{{'BOOK-MODAL.proceed' | translate}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 34618:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- first step of creating a project (start)-->\r\n  <div *ngIf=\"start\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper\"><div class=\"bg-plus h-[34px] w-[34px] mx-auto mt-[5px]\"></div></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black-1\">{{'NEW-PROJECT.create' | translate}}</h2>\r\n          <p class=\"text-center text-base text-black-2\">{{'NEW-PROJECT.project' | translate}}</p>\r\n        </div>\r\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\r\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\r\n          <div class=\"rounded-md shadow-sm -space-y-px\">\r\n            <div>\r\n              <label for=\"project-name\" class=\"sr-only\">{{'NEW-PROJECT.project-name' | translate}}</label>\r\n              <input id=\"project-name\" name=\"email\" type=\"email\" autocomplete=\"email\" [(ngModel)]=\"projectName\" required class=\"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[8px] focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm\" placeholder=\"Project name\">\r\n            </div>\r\n          </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button  class=\"secondary-btn\" (click)=\"dismiss()\" routerLink=\"/my-intiri\" routerDirection=\"root\">{{'COMMON.cancel' | translate}}</ion-button>\r\n            <ion-button class=\"primary-btn\" [class.disabled]=\"!isValidProjectName()\" (click)=\"startProjectCreation()\">{{'COMMON.create' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   <!-- last step of creating a project (final)-->\r\n   <div *ngIf=\"final\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"text-primary h-[34px] w-[34px] mx-auto mt-[5px]\" name=\"bookmark\"></ion-icon></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black-1\">{{'PROJECT-SAVED-MODAL.save' | translate}}</h2>\r\n          <p *ngIf=\"!existing\" class=\"text-center text-base text-black-2\">{{'PROJECT-SAVED-MODAL.save-text1' | translate}} <span class=\"font-medium\">{{project.name}}</span> {{'PROJECT-SAVED-MODAL.save-text2' | translate}}</p>\r\n          <p *ngIf=\"existing\" class=\"text-center text-base text-black-2\">You have successfully added new moodboard to project <span class=\"font-medium\">{{project.name}}</span>. You can now add new moodboard to the same project or review it.</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button  class=\"secondary-btn\" (click)=\"dismiss()\" href=\"/project-details/{{project.id}}\">{{'PROJECT-SAVED-MODAL.go-to' | translate}}</ion-button>\r\n            <ion-button class=\"primary-btn\" (click)=\"addNewMoodboard()\">{{'PROJECT-SAVED-MODAL.add-new' | translate}}</ion-button>\r\n          </ion-buttons>\r\n          <!-- <p class=\"text-primary text-center cursor-pointer hover:opacity-80\" [class.disabled]=\"true\"><ion-icon class=\"text-xl relative top-[6px] mr-2\" name=\"share-social\"></ion-icon>Share via email</p> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 77433:
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/modals/delete-moodboard-modal/delete-moodboard-modal.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = " <!-- Moodboard delete modal -->\r\n <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n  <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n    <div class=\"max-w-md w-full space-y-8\">\r\n      <div>\r\n        <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n        <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove moodboard</h2>\r\n        <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this moodboard? This action cannot be undone.</p>\r\n      </div>\r\n      <ion-buttons class=\"justify-center\">\r\n        <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteMoodboard()\">Remove moodboard</ion-button>\r\n        <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 81070:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"h-full w-full\">\r\n        <img class=\"h-7 w-full text-center\" src=\"../../../assets/images/intiri-logo.svg\">\r\n        <h1 class=\"text-2xl font-semibold mt-5 text-center\">{{'LOGIN.login' | translate}}</h1>\r\n        <form [formGroup]=\"loginForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"login()\" autocomplete=\"off\">\r\n          <div class=\"mt-2\">\r\n            <span class=\"text-sm text-black-2\">{{'LOGIN.phone' | translate}}</span>\r\n            <div class=\"flex justify-center space-x-1\">\r\n              <div>\r\n                <ion-select class=\"border rounded-2xl border-black-2 h-14 w-24\" interface=\"popover\"\r\n                  (ionChange)=\"setActiveCode($event)\" [value]=\"activeCode\">\r\n                  <ion-select-option value=\"47\">\r\n                    <div>\r\n                      <p class=\"text-lg text-black\">+47</p>\r\n                    </div>\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"381\">\r\n                    <p class=\"text-lg text-black\">+381</p>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n              <div>\r\n                <ion-input #phoneNumber formControlName=\"phoneNumber\" name=\"phoneNumber\"\r\n                  class=\"border rounded-2xl h-14 border-black-2 w-72\"></ion-input>\r\n                <span class=\"ion-warning\" *ngIf=\"isFormSubmited && phoneNumberErrors?.required\">Phone is\r\n                  Required!</span>\r\n                <span class=\"ion-warning\" *ngIf=\"isFormSubmited && phoneNumberErrors?.pattern\">Invalid Phone\r\n                  Number!</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center mt-6\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn\" type=\"submit\">{{'LOGIN.login' | translate}}</ion-button>\r\n            <p class=\"text-lg text-black-2 mt-2\">{{'LOGIN.or' | translate}}</p>\r\n            <ion-button fill=\"clear\" class=\"vipps-btn mt-2 mx-2\" (click)=\"initiateVippsLogin()\">\r\n              <img src=\"../../../../assets/icon/vipps-white.svg\">\r\n            </ion-button>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center mt-6\">\r\n            <p class=\"text-lg text-black-2\">{{'LOGIN.no-account' | translate}}</p>\r\n            <ion-button fill=\"clear\" class=\"secondary-btn\" (click)=\"goToRegisterPage()\">{{'LOGIN.create' | translate}}\r\n            </ion-button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 8832:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"logout-icon-wrapper\"><ion-icon class=\"h-[34px] w-[34px] mx-auto mt-[5px] block\" name=\"log-out-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black1\">{{'COMMON.logout' | translate}}</h2>\r\n          <p class=\"text-center text-base text-black2\">{{'MY-INTIRI.logout-text' | translate}}</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button  class=\"secondary-btn\" (click)=\"dismiss()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n          <ion-button class=\"primary-btn\" (click)=\"logout()\">{{'COMMON.logout' | translate}}</ion-button>\r\n        </ion-buttons>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 14998:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/modals/open-file-modal/open-file-modal.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n<div *ngIf=\"!isRemoving\">\r\n  <img [src]=\"file.url\" class=\"object-cover rounded-2xl max-w-full mx-auto max-h-[90vh]\" alt=\"Inspiration Img\" />\r\n  <ion-icon name=\"trash\" class=\"absolute right-[96px] top-[16px] text-primary text-3xl cursor-pointer hover:opacity-80 bg-[#F8F5F1] px-[1px] pb-[2px] border border-primary rounded-[6px]\" (click)=\"isRemoving=true\"></ion-icon>\r\n  <ion-icon name=\"cloud-download\" class=\"absolute right-[56px] top-[16px] text-primary text-3xl cursor-pointer hover:opacity-80 bg-[#F8F5F1] px-[1px] pb-[2px] border border-primary rounded-[6px]\" (click)=\"downloadFile()\"></ion-icon>\r\n  <ion-icon name=\"close\" class=\"absolute right-[16px] top-[16px] text-primary text-3xl cursor-pointer hover:opacity-80 bg-[#F8F5F1] p-[1px] border border-primary rounded-[6px]\" (click)=\"dismissModal()\"></ion-icon>\r\n</div>\r\n<div *ngIf=\"isRemoving\" class=\"p-16\">\r\n  <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove inspiration</h2>\r\n  <p class=\"text-center text-base text-[18px] text-black-2 mb-6\">Are you sure that you want to remove this inspiration? This action cannot be undone.</p>\r\n<ion-buttons class=\"justify-center\">\r\n  <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteFile()\">Remove</ion-button>\r\n  <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n</ion-buttons>\r\n</div>";

/***/ }),

/***/ 81522:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/rate-modal/rate-modal.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"flex flex-col items-center px-[65px]\">\r\n    <p class=\"text-2xl font-medium mt-[80px]\">{{'SHARE-RATE.rate-designer' | translate}}</p>\r\n    <p class=\"text-lg mt-[10px]\">{{'SHARE-RATE.please-rate' | translate}} <b>{{designer.firstName}} {{designer.lastName}}</b></p>\r\n    <div class=\"flex justify-evenly items-center mt-[40px] w-full\">\r\n      <ion-icon name=\"star\" class=\"h-14 w-14 text-light cursor-pointer\" (mouseenter)=\"hoverStar=1\" (mouseleave)=\"hoverStar=0\" (click)=\"addRate(1)\" [class.!text-secondary]=\"star>=1 || hoverStar>=1\"></ion-icon>\r\n      <ion-icon name=\"star\" class=\"h-14 w-14 text-light cursor-pointer\" (mouseenter)=\"hoverStar=2\" (mouseleave)=\"hoverStar=0\" (click)=\"addRate(2)\" [class.!text-secondary]=\"star>=2 || hoverStar>=2\"></ion-icon>\r\n      <ion-icon name=\"star\" class=\"h-14 w-14 text-light cursor-pointer\" (mouseenter)=\"hoverStar=3\" (mouseleave)=\"hoverStar=0\" (click)=\"addRate(3)\" [class.!text-secondary]=\"star>=3 || hoverStar>=3\"></ion-icon>\r\n      <ion-icon name=\"star\" class=\"h-14 w-14 text-light cursor-pointer\" (mouseenter)=\"hoverStar=4\" (mouseleave)=\"hoverStar=0\" (click)=\"addRate(4)\" [class.!text-secondary]=\"star>=4 || hoverStar>=4\"></ion-icon>\r\n      <ion-icon name=\"star\" class=\"h-14 w-14 text-light cursor-pointer\" (mouseenter)=\"hoverStar=5\" (mouseleave)=\"hoverStar=0\" (click)=\"addRate(5)\" [class.!text-secondary]=\"star>=5 || hoverStar>=5\"></ion-icon>\r\n    </div>\r\n    <!-- <div class=\"mt-[40px]\" *ngIf=\"star > 0\">\r\n      <p class=\"text-black-2 text-[13px]\">{{'SHARE-RATE.comment' | translate}}</p>\r\n      <ion-textarea rows=\"5\" class=\"border border-black-2 rounded-2xl mt-0\"></ion-textarea>\r\n    </div> -->\r\n    <div class=\"flex justify-center mt-[40px]\">\r\n      <ion-button fill=\"clear\" class=\"secondary-btn\" (click)=\"dismiss()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n      <ion-button fill=\"clear\" class=\"primary-btn\" (click)=\"rate()\" [disabled]=\"rateDisabled\" [class.!opacity-50]=\"rateDisabled\">{{'SHARE-RATE.rate' | translate}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 25322:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/rate-successful-modal/rate-successful-modal.component.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"flex flex-col items-center\">\r\n    <div class=\"w-[80px] h-[80px] bg-light rounded-full mt-[75px] flex items-center justify-center\">\r\n      <ion-icon name=\"star\" class=\"h-10 w-10 text-secondary\"></ion-icon>\r\n    </div>\r\n    <p class=\"text-2xl font-medium mt-[40px]\">{{'SHARE-RATE.thank-you' | translate}}</p>\r\n    <p class=\"text-lg mt-[10px]\">{{'SHARE-RATE.success-rate' | translate}} <b>{{designerFullname}}</b></p>\r\n    <ion-button fill=\"clear\" class=\"primary-btn mt-[40px]\" (click)=\"dismiss()\">{{'SHARE-RATE.go-to' | translate}}</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 23860:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/share-modal/share-modal.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"flex flex-col items-center px-[65px]\">\r\n    <div class=\"h-[80px] w-[80px] rounded-full bg-light mt-[75px] flex items-center justify-center\">\r\n      <ion-icon name=\"share-social\" class=\"h-[30px] w-[30px] text-primary\"></ion-icon>\r\n    </div>\r\n    <p class=\"text-2xl font-medium mt-[40px]\">{{'SHARE-RATE.share' | translate}}</p>\r\n    <p class=\"text-lg mt-[10px] text-black-2\">{{'SHARE-RATE.share-text' | translate}}</p>\r\n    <div class=\"mt-[40px]\">\r\n      <span class=\"text-sm text-black-2\">{{'COMMON.phone' | translate}}</span>\r\n      <div class=\"flex justify-between\">\r\n        <div>\r\n          <ion-select class=\"border rounded-2xl border-black-2 h-14 w-24 xl:w-32\" interface=\"popover\">\r\n            <ion-select-option>\r\n              <div>\r\n                <p class=\"text-lg text-black\">+47</p>\r\n              </div>\r\n            </ion-select-option>\r\n            <ion-select-option>\r\n              <p class=\"text-lg text-black\">+381</p>\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n        <div>\r\n          <ion-input name=\"phoneNumber\" class=\"border rounded-2xl h-14 border-black-2 w-60 xl:w-80 ml-[10px]\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex justify-start w-full\">\r\n      <ion-button fill=\"clear\" class=\"normal-case mt-[30px]\">\r\n        <ion-icon name=\"add\" slot=\"start\"></ion-icon>\r\n        <p class=\"text-lg text-primary font-medium\">{{'COMMON.add' | translate}}</p>\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"flex justify-center mt-[40px]\">\r\n      <ion-button fill=\"clear\" class=\"secondary-btn\" (click)=\"dismiss()\">{{'COMMON.cancel' | translate}}</ion-button>\r\n      <ion-button fill=\"clear\" class=\"primary-btn\" (click)=\"share()\">{{'SHARE-RATE.share' | translate}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 10968:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/components/modals/share-rate-modals/share-successful-modal/share-successful-modal.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"flex flex-col items-center\">\r\n    <div class=\"w-[80px] h-[80px] bg-light rounded-full mt-[75px] flex items-center justify-center\">\r\n      <ion-icon name=\"checkmark-circle-outline\" class=\"h-10 w-10 text-primary\"></ion-icon>\r\n    </div>\r\n    <p class=\"text-2xl font-medium mt-[40px]\">{{'SHARE-RATE.moodboard-shared' | translate}}</p>\r\n    <p class=\"text-lg mt-[10px] text-black-2\">{{'SHARE-RATE.success-share' | translate}}</p>\r\n    <ion-button fill=\"clear\" class=\"primary-btn mt-[40px]\" (click)=\"dismiss()\">{{'SHARE-RATE.go-to' | translate}}</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 88015:
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/modals/sms-verification-modal/sms-verification-modal.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n        <div class=\"min-h-full min-w-full flex items-center justify-center py-2 px-2 sm:px-2 lg:px-2 bg-white\">\r\n            <div class=\"max-w-md w-full p-6\">\r\n                <div class=\"w-full\">\r\n                    <img class=\"h-7 w-full text-center\" src=\"../../../assets/images/intiri-logo.svg\">\r\n                    <h1 class=\"text-2xl font-semibold text-center mt-10\">{{'SMS.code' | translate}}</h1>\r\n                    <p class=\"text-base text-black-2 text-center\">\r\n                        {{'SMS.sms-msg' | translate}}\r\n                    </p>\r\n                    <div class=\"mt-8\">\r\n                        <code-input #codeInput [codeLength]=\"6\" (codeChanged)=\"onCodeChanged($event)\"\r\n                            (codeCompleted)=\"onCodeCompleted($event)\">\r\n                        </code-input>\r\n                        <span class=\"ion-warning mt-2\" *ngIf=\"error\">{{ error }}</span>\r\n                    </div>\r\n                    <div class=\"flex flex-col justify-center items-center\">\r\n                        <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\"> {{'SMS.proceed' | translate}}</ion-button>\r\n                        <ion-button fill=\"clear\" class=\"send-btn\">{{'SMS.again' | translate}}</ion-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 68784:
/*!******************************************************************************************!*\
  !*** ./src/app/components/moodboard-details/moodboard-details.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card class=\"border shadow-1 rounded-2xl w-full xl:w-[866px] h-[410px] m-0 mt-7 p-4\">\r\n      <div class=\"result-grid\">\r\n        <div class=\"item-sm\" [ngStyle]=\"{background: moodboard?.colorPalettes[0].shadeColorLight}\"></div>\r\n        <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.products[0].imagePath) + ')'}\"></div>\r\n        <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.products[1].imagePath) + ')'}\"></div>\r\n        <div class=\"item-lg-tall\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.style.styleImages[0].imagePath) + ')'}\"></div>\r\n        <div class=\"item-sm\" [ngStyle]=\"{background: moodboard?.colorPalettes[0].shadeColorMedium}\"></div>\r\n        <div class=\"item-sm\" [ngStyle]=\"{background: moodboard?.colorPalettes[0].shadeColorDark}\"></div>\r\n        <div class=\"item-sm-tall\" [ngStyle]=\"{background: moodboard?.colorPalettes[moodboard?.colorPalettes.length-1].mainColor}\"></div>\r\n        <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.style.styleImages[1].imagePath) + ')'}\"></div>\r\n        <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.materials[0].imagePath) + ')'}\"></div>\r\n        <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.materials[1].imagePath) + ')'}\"></div>\r\n        <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.materials[2].imagePath) + ')'}\"></div>\r\n        <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(moodboard?.materials[3].imagePath) + ')'}\"></div>\r\n      </div>\r\n  </ion-card>\r\n  <div *ngIf=\"!bigCardOnly\" class=\"mt-16 xl:text-left\">\r\n    <div class=\"flex justify-between items-center mb-6\">\r\n      <p class=\"text-black-2 text-2xl font-medium\">{{'MOODBOARD-DETAILS.included' | translate}}</p>\r\n      <div *ngIf=\"withSlides && moodboard?.colorPalettes.length + moodboard?.materials.length + moodboard?.products.length > options.slidesPerView\">\r\n        <ion-button fill=\"clear\" class=\"text-black hover:opacity-50\" (click)=\"prev()\">\r\n          <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" class=\"text-black hover:opacity-50\" (click)=\"next()\">\r\n          <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <ion-grid *ngIf=\"!withSlides\" class=\"step-items\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of moodboard?.colorPalettes\" size=\"12\" size-sm=\"5.8\" size-lg=\"2.7\" size-xl=\"2.2\" class=\"w-full h-[130px] lg:h-[180px] mb-16 p-0\" [class.bigger-margin]=\"item.name\">\r\n          <div *ngIf=\"item.mainColor\" class=\"h-full w-full rounded-sm p-0\" >\r\n            <div class=\"w-full h-full inline-block rounded-xl\" [ngStyle]=\"{background: item.mainColor}\"></div>\r\n          </div>\r\n          <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-2 text-black-2\">{{item.name}} </p>\r\n          <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-2 text-black-2 text-[18px]\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n        </ion-col>\r\n        <ion-col *ngFor=\"let item of moodboard?.materials\" size=\"12\" size-sm=\"5.8\" size-lg=\"2.7\" size-xl=\"2.2\" class=\"w-full h-[130px] lg:h-[180px] mb-16 p-0\" [class.bigger-margin]=\"item.name\">\r\n          <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n          <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-2 text-black-2 text-[18px]\">{{item.name}} </p>\r\n        </ion-col>\r\n        <ion-col *ngFor=\"let item of moodboard?.products\" size=\"12\" size-sm=\"5.8\" size-lg=\"2.7\" size-xl=\"2.2\" class=\"w-full h-[130px] lg:h-[180px] mb-16 p-0\" [class.bigger-margin]=\"item.name\">\r\n          <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n          <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-2 text-black-2 text-[18px]\">{{item.name}} </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-slides *ngIf=\"withSlides\" #slides [options]=\"options\" class=\"py-4 pr-4 w-full\">\r\n        <ion-slide *ngFor=\"let item of moodboard?.colorPalettes\" size=\"12\" size-sm=\"5.8\" size-lg=\"2.7\" size-xl=\"2.2\" class=\"w-full h-[130px] lg:h-[180px] mb-16 p-0\" [class.bigger-margin]=\"item.name\">\r\n          <div *ngIf=\"item.mainColor\" class=\"h-full w-full rounded-sm p-0\" >\r\n            <div class=\"w-full h-full inline-block rounded-xl\" [ngStyle]=\"{background: item.mainColor}\"></div>\r\n          </div>\r\n          <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-2 text-black-2\">{{item.name}} </p>\r\n          <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-2 text-black-2 text-[18px]\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n        </ion-slide>\r\n        <ion-slide *ngFor=\"let item of moodboard?.materials\" size=\"12\" size-sm=\"5.8\" size-lg=\"2.7\" size-xl=\"2.2\" class=\"w-full h-[130px] lg:h-[180px] mb-16 p-0\" [class.bigger-margin]=\"item.name\">\r\n          <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n          <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-2 text-black-2 text-[18px]\">{{item.name}} </p>\r\n        </ion-slide>\r\n        <ion-slide *ngFor=\"let item of moodboard?.products\" size=\"12\" size-sm=\"5.8\" size-lg=\"2.7\" size-xl=\"2.2\" class=\"w-full h-[130px] lg:h-[180px] mb-16 p-0\" [class.bigger-margin]=\"item.name\">\r\n          <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n          <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-2 text-black-2 text-[18px]\">{{item.name}} </p>\r\n        </ion-slide>\r\n    </ion-slides>\r\n  </div>";

/***/ }),

/***/ 70952:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <h2 class=\"step-title\">{{currentStep.title}}</h2>\r\n  <p class=\"step-subtitle\">{{currentStep.subtitle}}</p>\r\n  <ion-grid *ngIf=\"isArray(currentStep.data)\" class=\"step-items\">\r\n    <ion-row class=\"step-items-row\">\r\n      <ion-col *ngFor=\"let item of currentStep.data\" (click)=\"toggleItem(item)\" size=\"5.8\" size-lg=\"2.82\" size-xl=\"2.2\" class=\"step-item-wrapper\" [class.selected-item]=\"!item.iconPath && !item.mainColor && isItemSelected(item)\" [class.bigger-margin]=\"item.name\">\r\n        <!-- if image (style|material|product) -->\r\n        <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n         <!-- if icon (room) -->\r\n        <div *ngIf=\"item.iconPath\" class=\"step-icon-wrapper\"  [class.selected-item]=\"isItemSelected(item)\">\r\n          <img src=\"{{item.iconPath}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n        </div>\r\n        <!-- if color pallete -->\r\n        <div *ngIf=\"item.mainColor\" class=\"step-color-wrapper\" [class.selected-item]=\"isItemSelected(item)\">\r\n          <div class=\"w-[47.5%] h-full inline-block\" [ngStyle]=\"{background: item.mainColor}\"></div>\r\n          <div class=\"w-[47.5%] h-full inline-block float-right\">\r\n            <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorLight}\"></div>\r\n            <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorMedium}\"></div>\r\n            <div class=\"h-[30%]\" [ngStyle]=\"{background: item.shadeColorDark}\"></div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"!item.number && item.name\" class=\"font-bold pt-5 text-black-2\">{{item.name}} </p>\r\n        <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-8 text-black-2\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n   <!-- if room details -->\r\n  <div *ngIf=\"currentStep.data.roomShapes\">\r\n    <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">{{'NEW-PROJECT.room-details' | translate}}</p>\r\n    <p class=\"text-black-2\">{{'NEW-PROJECT.room-shape' | translate}}</p>\r\n    <ion-grid class=\"step-items\" style=\"min-height: 300px;\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of currentStep.data.roomShapes\" (click)=\"toggleItem(item)\" size=\"5.8\" size-sm=\"2.2\" class=\"step-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n          <div class=\"step-icon-wrapper\" >\r\n            <img src=\"../../../assets/{{item.imagePath}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"input\">\r\n      <span class=\"text-black-2\">{{'NEW-PROJECT.room-area' | translate}}</span>\r\n      <ion-input [(ngModel)]=\"project.roomDetails.size\" type=\"number\" min=\"1\" class=\"border rounded-2xl h-14 border-black-2 !pr-4\"></ion-input>\r\n    </div>\r\n    <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">{{'NEW-PROJECT.budget' | translate}}</p>\r\n    <div class=\"input\">\r\n      <span class=\"text-black-2\">{{'NEW-PROJECT.select-budget' | translate}}</span>\r\n      <ion-select  [(ngModel)]=\"project.budget\" interface=\"popover\">\r\n        <ion-select-option value=\"low\">{{'COMMON.low' | translate}}</ion-select-option>\r\n        <ion-select-option value=\"medium\">{{'COMMON.medium' | translate}}</ion-select-option>\r\n        <ion-select-option value=\"high\">{{'COMMON.high' | translate}}</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- if moodboards -->\r\n  <div *ngIf=\"currentStep.data.moodboards\">\r\n    <ion-grid class=\"step-items\" style=\"min-height: 400px;\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of currentStep.data.moodboards\" (click)=\"toggleItem(item)\" size=\"5.8\" size-sm=\"3\" class=\"moodboard-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.style.styleImages[0].imagePath}}\" class=\"h-[95px] lg:h-[135px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img src=\"{{item.style.styleImages[2].imagePath}}\" class=\"h-[95px] lg:h-[135px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.style.styleImages[1].imagePath}}\" class=\"h-full object-cover w-full\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          <p *ngIf=\"item.style.name\" class=\"text-lg font-bold mt-4 text-black-2\">{{item.style.name}} <span *ngIf=\"item.percentageMatch\" class=\"text-base font-normal text-primary\">/ {{item.percentageMatch}}% match</span></p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">{{'NEW-PROJECT.see-rooms-style' | translate}}</p>\r\n    <ion-grid class=\"step-items\" style=\"min-height: 785px;\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of currentStep.data.moodboardFamily\" (click)=\"toggleItem(item)\" size=\"5.5\" size-sm=\"3\" class=\"moodboard-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.materials[0].imagePath}}\" class=\"h-[95px] lg:h-[135px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img src=\"{{item.products[1].imagePath}}\" class=\"h-[95px] lg:h-[135px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.style.styleImages[1].imagePath}}\" class=\"h-full w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          <p *ngIf=\"item.style.name\" class=\"text-lg font-bold mt-4 text-black-2\">{{item.style.name}} <span *ngIf=\"item.percentageMatch\" class=\"text-base font-normal text-primary\">/ {{item.percentageMatch}}% match</span></p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <div class=\"h-full w-full relative\">\r\n          <div class=\"mt-8 w-full h-[360px] bg-landing-img bg-cover blur rounded-lg \"></div>\r\n          <div class=\"flex-column text-center w-[80%] absolute top-1/2 left-1/2\" style=\"transform: translate(-50%, -50%)\">\r\n            <p class=\"text-black-1 text-xl font-bold mb-2\">{{'NEW-PROJECT.upgrade' | translate}}</p>\r\n            <p class=\"text-black-2 font-bold mb-4\">{{'NEW-PROJECT.upgrade-text' | translate}}</p>\r\n            <ion-buttons class=\"justify-center\">\r\n              <ion-button class=\"primary-btn\" routerLink=\"/pricing-plans\" routerDirection=\"root\">{{'PRICING-PLAN.pricing-plans' | translate}}</ion-button>\r\n            </ion-buttons>\r\n          </div>\r\n        </div>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n    <!-- if final step -->\r\n    <div *ngIf=\"currentStep.data === 'final'\">\r\n      <app-moodboard-details [moodboard]=\"project.currentMoodboard\"></app-moodboard-details>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 1495:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/popovers/language-popover/language-popover.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-list button *ngFor=\"let lng of languages\" (click)=\"selectLanguage(lng.value)\" class=\"cursor-pointer hover:opacity-80\">\r\n    <div class=\"flex items-center justify-between\">\r\n      <div class=\"flex items-center\">\r\n        <img [src]=\"lng.img\" slot=\"start\" class=\"w-8 h-8 ml-2\">\r\n        <p class=\"text-lg ml-2\">\r\n          {{lng.text}}\r\n        </p>\r\n      </div>\r\n      <ion-icon slot=\"end\" name=\"checkmark\" class=\"w-6 h-6 mr-2\" *ngIf=\"lng.value === selected\"></ion-icon>\r\n    </div>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ }),

/***/ 98880:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/popovers/style-popover/style-popover.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\">Edit style</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\">View details</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\">Remove{{'NEW-PROJECT.upgrade' | translate}}</ion-item>\r\n</ion-list>\r\n";

/***/ }),

/***/ 49624:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-light  xl-ion:w-[300px]  xl-ion:h-[680px] rounded-lg text-center\">\r\n  <img [src]=\"image\" class=\"rounded-[50%] w-[300px] h-[300px] object-cover p-8 relative top-12 mx-auto\" alt=\"Profile Img\"/>\r\n  <h3 class=\"mt-12 mx-10 mb-8 font-medium text-black-2\">{{firstName}} {{lastName}}</h3>\r\n  <!-- <p class=\"text-black-3 mb-8\">16 projects</p> -->\r\n  <ion-buttons class=\"justify-center\">\r\n    <label for=\"dropzone-file\">\r\n      <ion-button class=\"change-img-btn\" (click)=\"openFile()\">{{'PROFILE.change-profile-pic' | translate}}\r\n        <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" />\r\n      </ion-button>\r\n    </label>\r\n  </ion-buttons>\r\n</div>\r\n";

/***/ }),

/***/ 81457:
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h3 class=\"text-black-2 text-[24px] my-0 mx-2\">Personal Info</h3>\r\n<div *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n  <div formGroupName=\"innerGroup\">\r\n<section class=\"sm:flex\">\r\n  <div class=\"profile-input\" *ngIf=\"partnerProfile\">\r\n    <span class=\"text-sm text-black-2\">{{'PARTNERS.partner-name' | translate}}</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"name\"></ion-input>\r\n  </div>\r\n  <div class=\"profile-input\" *ngIf=\"userInfo\">\r\n    <span class=\"text-sm text-black-2\">{{'COMMON.firstname' | translate}}</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"firstName\"></ion-input>\r\n  </div>\r\n  <div class=\"profile-input\" *ngIf=\"userInfo\">\r\n    <span class=\"text-sm text-black-2\">{{'COMMON.lastname' | translate}}</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"lastName\"></ion-input>\r\n  </div>\r\n</section>\r\n<div class=\"profile-input\" *ngIf=\"userInfo\">\r\n  <span class=\"text-sm text-black-2\">{{'PROFILE.gender' | translate}}</span>\r\n  <ion-select interface=\"popover\" [value]=\"dataInput.gender\" formControlName=\"gender\" (ionChange)=\"genderChange($event)\">\r\n    <ion-select-option value=\"male\">Male</ion-select-option>\r\n    <ion-select-option value=\"female\">Female</ion-select-option>\r\n    <ion-select-option value=\"non-binary\">Non-binary</ion-select-option>\r\n    <ion-select-option value=\"not-to-say\">I prefer not to say</ion-select-option>\r\n  </ion-select>\r\n</div>\r\n\r\n\r\n<section class=\"flex\">\r\n  <div class=\"phone-input\">\r\n    <span class=\"text-sm text-black-2\">{{'COMMON.phone' | translate}}</span>\r\n    <ion-select class=\"\" interface=\"popover\" [value]=\"dataInput.countryCode\" (ionChange)=\"countryCodeChange($event)\" formControlName=\"countryCode\">\r\n      <ion-select-option value=\"+45\">+45</ion-select-option>\r\n      <ion-select-option value=\"+46\">+46</ion-select-option>\r\n      <ion-select-option value=\"+47\">+47</ion-select-option>\r\n      <ion-select-option value=\"+381\">+381</ion-select-option>\r\n      <ion-select-option value=\"+382\">+382</ion-select-option>\r\n    </ion-select>\r\n  </div>\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm invisible\">{{'COMMON.phone' | translate}}</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"phoneNumber\"></ion-input>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">{{'COMMON.email' | translate}}</span>\r\n  <ion-input type=\"email\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"email\"></ion-input>\r\n  <span class=\"text-sm text-[#eb445a] hidden\">Wrong format</span>\r\n</div>\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">{{'PARTNERS.street' | translate}}</span>\r\n  <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"street\"></ion-input>\r\n</div>\r\n<section class=\"sm:flex\">\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm text-black-2\">{{'PARTNERS.postal-code' | translate}}</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"postalCode\"></ion-input>\r\n  </div>\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm text-black-2\">{{'PARTNERS.city' | translate}}</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\" formControlName=\"city\"></ion-input>\r\n  </div>\r\n</section>\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">{{'PARTNERS.country' | translate}}</span>\r\n  <ion-select interface=\"popover\" [value]=\"dataInput.country\" (ionChange)=\"countryChange($event)\" formControlName=\"country\">\r\n    <ion-select-option value=\"Norway\">Norway</ion-select-option>\r\n    <ion-select-option value=\"Serbia\">Serbia</ion-select-option>\r\n    <ion-select-option value=\"England\">England</ion-select-option>\r\n  </ion-select>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 4953:
/*!****************************************************************************************!*\
  !*** ./src/app/components/settings-popover/settings-popover.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list *ngIf=\"headerType === 'user'\" lines=\"none\" >\r\n  <ion-item class=\"mt-[16px]\">\r\n    <ion-icon class=\"header-icon\" name=\"settings-sharp\"></ion-icon>\r\n    <span class=\"text-primary font-medium ml-2\">{{'PRICING-PLAN.free-plan' | translate}}</span><br/><br/>\r\n  </ion-item>\r\n  <hr class=\"border-light border-t mx-[16px] my-[16px]\" />\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\" (click)=\"openLanguagePopover($event)\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">{{'LANDING.terms' | translate}}</ion-item>\r\n  <!-- <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\" (click)=\"openPricingPlans()\">{{'PRICING-PLAN.pricing-plans' | translate}}</ion-item> -->\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">{{'COMMON.logout' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"headerType === 'admin'\" lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\" (click)=\"openLanguagePopover($event)\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">{{'LANDING.terms' | translate}}</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">{{'COMMON.logout' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"headerType === 'partner'\" lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\" (click)=\"openLanguagePopover($event)\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">{{'LANDING.terms' | translate}}</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">{{'COMMON.logout' | translate}}</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"headerType === 'designer'\" lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\" (click)=\"openLanguagePopover($event)\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">{{'LANDING.terms' | translate}}</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">{{'COMMON.logout' | translate}}</ion-item>\r\n</ion-list>\r\n";

/***/ }),

/***/ 35338:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"page === 'create-project'\" class=\"bg-light xl-ion:w-[240px] xl-ion:h-[820px] rounded-lg text-center\">\r\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\r\n    <div class=\"w-[30px] h-[22px] mx-auto bg-cover bg-room\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.room' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-style\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.style' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step\">\r\n    <div class=\"w-[30px] h-[22px] mx-auto bg-cover bg-room-details\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.room-details' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 3\" [class.disabled]=\"!canChangeStep(3)\" (click)=\"goToStep(3)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-color-pallete\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.color-pallete' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 4\" [class.disabled]=\"!canChangeStep(4)\" (click)=\"goToStep(4)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-moodboard\"></div>\r\n    <p class=\"project-step-text\">{{'COMMON.moodboard' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 5\" [class.disabled]=\"!canChangeStep(5)\" (click)=\"goToStep(5)\" class=\"project-step no-border\">\r\n    <div class=\"project-step-icon bg-final-result\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.final' | translate}}</p>\r\n  </section>\r\n</div>\r\n\r\n<div *ngIf=\"page === 'customize-moodboard'\" class=\"bg-light xl-ion:w-[240px] xl-ion:h-[680px] rounded-lg text-center\">\r\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-color-pallete\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.color-pallete' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\r\n    <div class=\"project-step-icon mx-auto bg-cover bg-materials\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.materials' | translate}}</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step no-border\">\r\n    <div class=\"project-step-icon bg-sofa\"></div>\r\n    <p class=\"project-step-text\">{{'NEW-PROJECT.products' | translate}}</p>\r\n  </section>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 82177:
/*!****************************************************************************!*\
  !*** ./src/app/components/sub-header/sub-header.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"!slider\" class=\"h-[61px] w-[100%] rounded-xl bg-light\">\r\n  <section class=\"header-buttons\">\r\n      <ion-button *ngFor=\"let item of menuItems[menu]\" [class.!text-primary]=\"activeTitle === item.title\" fill=\"clear\" class=\"btn\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-button>\r\n    </section>\r\n</div>\r\n\r\n<div *ngIf=\"slider\" class=\"lg:h-[61px] w-[100%] rounded-xl bg-light\">\r\n  <section class=\"header-buttons\">\r\n      <ion-button *ngFor=\"let item of menuItems[menu]; index as i\" (click)=\"goToSlide(i)\"  [class.!text-primary]=\"activeTitle === i\" fill=\"clear\" class=\"btn\">{{item | titlecase}}</ion-button>\r\n    </section>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 35440:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin-pages/add-moodboard/add-moodboard.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <ion-grid class=\"main-container\">\r\n      <p class=\"main-title mb-[34px] pl-2\">Add moodboard</p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"2.5\">\r\n          <div class=\"bg-light xl-ion:w-[240px] xl-ion:h-[440px] rounded-lg text-center pb-1\">\r\n            <p [class.!text-primary]=\"currentStepNo == 0\" (click)=\"goToStep(0)\" [class.disabled]=\"!canChangeToStep(0)\" class=\"side-menu-item pt-[45px]\">{{'NEW-PROJECT.room' | translate}}</p>\r\n            <p [class.!text-primary]=\"currentStepNo == 1\" (click)=\"goToStep(1)\" [class.disabled]=\"!canChangeToStep(1)\" class=\"side-menu-item\">{{'NEW-PROJECT.style' | translate}}</p>\r\n            <p [class.!text-primary]=\"currentStepNo == 2\" (click)=\"goToStep(2)\" [class.disabled]=\"!canChangeToStep(2)\" class=\"side-menu-item\">{{'NEW-PROJECT.materials' | translate}}</p>\r\n            <p [class.!text-primary]=\"currentStepNo == 3\" (click)=\"goToStep(3)\" [class.disabled]=\"!canChangeToStep(3)\" class=\"side-menu-item\">{{'MY-INTIRI.colors' | translate}}</p>\r\n            <p [class.!text-primary]=\"currentStepNo == 4\" (click)=\"goToStep(4)\" [class.disabled]=\"!canChangeToStep(4)\" class=\"side-menu-item\">{{'NEW-PROJECT.products' | translate}}</p>\r\n            <p [class.!text-primary]=\"currentStepNo == 5\" (click)=\"goToStep(5)\" [class.disabled]=\"!canChangeToStep(5)\" class=\"side-menu-item\">{{'MOODBOARDS.moodboard-preview' | translate}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" offset=\"0.1\" size-xl=\"9.4\">\r\n          <app-add-moodboard-step\r\n          (toggleSelection)=\"toggleItem($event)\"\r\n          [stepsOrder]=\"stepsOrder\"\r\n          [moodboard]=\"moodboard\"\r\n          [currentStepNo]=\"currentStepNo\"\r\n          [currentStep]=\"steps[currentStepNo]\"></app-add-moodboard-step>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"3\">\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] !== 'final'\"\r\n              class=\"secondary-btn\"\r\n              (click)=\"backStep()\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n              >{{'COMMON.back' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] !== 'final'\"\r\n              class=\"primary-btn\"\r\n              (click)=\"nextStep()\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\r\n              >{{'COMMON.next' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] === 'final'\"\r\n              class=\"secondary-btn\"\r\n              routerLink=\"/moodboards\"\r\n              routerDirection=\"root\"\r\n              >{{'COMMON.cancel' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] === 'final'\"\r\n              class=\"primary-btn\"\r\n              (click)=\"saveMoodboard();\"\r\n              >{{'MOODBOARDS.save' | translate}}</ion-button\r\n            >\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 33655:
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin-pages/add-partner/add-partner.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div *ngIf=\"!delete\" id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-md=\"3\" size-lg=\"2.5\">\r\n          <div class=\"bg-light xl:h-[820px] h-[630px] rounded-lg text-center\">\r\n            <img src=\"../../../assets/images/img-01.png\" class=\"rounded-[50%] w-[165px] h-[165px] xll:w-[250px] xll:h-[250px] object-cover p-8 relative top-12 mx-auto\" alt=\"Profile Img\"/>\r\n            <h3 class=\"mt-12 mx-10 mb-8 font-medium text-black-2\">{{partner.name}}</h3>\r\n            <p class=\"text-black-2 \">+{{partner.countryCode}}{{partner.phoneNumber}}</p>\r\n            <p class=\"text-black-2\">{{partner.email}}</p>\r\n            <p class=\"text-black-2\">{{partner.street}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-md=\"7.7\" offset=\"0.2\" size-lg=\"9.3\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-button fill=\"clear\" class=\"text-black hover:opacity-50 relative right-[18px]\" routerLink=\"/partners\" routerDirection=\"root\">\r\n                <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n                <p class=\"capitalize ml-2 text-lg\">{{'DASHBOARD.partners' | translate}}</p>\r\n              </ion-button>\r\n            </ion-row>\r\n            <ion-row>\r\n              <p class=\"text-black-2 text-2xl font-medium cursor-default\">Partners contacts</p>\r\n            </ion-row>\r\n            <ion-row class=\"w-[85%]\">\r\n              <ion-col *ngFor=\"let contact of partner.partnerContacts\" size=\"12\" size-md=\"5\" size-lg=\"3\">\r\n                <div class=\"mt-4 border rounded-2xl shadow-1 h-[130px]\">\r\n                  <div class=\"flex justify-between pt-[35px] px-4\">\r\n                    <p class=\"text-black-2 font-semibold text-lg h-full cursor-default text-clamp\">\r\n                      {{contact.firstName}} {{contact.lastName}}\r\n                    </p>\r\n                    <div class=\"float-right\">\r\n                      <button (click)=\"showSettings($event, contact)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"pt-1 inline-flex text-black-2 text-sm font-medium text-center\" type=\"button\">\r\n                          <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <p class=\"text-black-2 px-4\">{{contact.phoneNumber}}</p>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"12\" size-md=\"5\" size-lg=\"3\">\r\n                <div class=\"profile-input\">\r\n                  <div (click)=\"openAddContactModal(partner.id)\" class=\"border-2 border-dashed rounded-2xl h-[128px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                    <div class=\"text-center mt-[35px]\">\r\n                      <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                      <p class=\"font-semibold text-black-3 text-lg\">Add contact person</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"pt-20 flex justify-between items-center\">\r\n                <p class=\"text-2xl text-black-2 font-medium\">{{'PARTNERS.products' | translate}}</p>\r\n                <div *ngIf=\"partner.products.length > options.slidesPerView\">\r\n                  <ion-button fill=\"clear\" class=\"text-black-2 hover:opacity-50\" (click)=\"prev()\">\r\n                    <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-button fill=\"clear\" class=\"text-black-2 hover:opacity-50\" (click)=\"next()\">\r\n                    <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n            </ion-row>\r\n            <ion-row class=\"gap-x-[1.65%]\">\r\n              <ion-slides #slides [options]=\"options\" class=\"w-full\">\r\n                <ion-slide *ngFor=\"let product of partner.products\" >\r\n                  <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"1.83\">\r\n                    <div class=\"card\">\r\n                      <div class=\"h-full w-full\">\r\n                        <img src=\"{{product.imagePath}}\" class=\"object-cover rounded-2xl !h-full !w-full\" alt=\"Profile Img\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"flex justify-between\">\r\n                      <p class=\"py-2 text-black-2 font-semibold\">{{product.name}}</p>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-slide>\r\n              </ion-slides>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <!-- Picture delete modal -->\r\n  <div *ngIf=\"delete\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"h-[32px] w-[32px] ml-[3px] mt-[7px]\" name=\"trash-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Remove partner contact</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">Are you sure that you want to remove this partner contact? This action cannot be undone.</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"deleteContact()\">Remove</ion-button>\r\n          <ion-button class=\"secondary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5281:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/client/client.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">{{'DASHBOARD.clients' | translate}}</p>\r\n      <app-sub-header [menu]=\"'clients'\" [activeTitle]=\"currentSlide\" [slider]=\"true\" (changeSlide)=\"changeSlide($event)\"></app-sub-header>\r\n      <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"onSlideChange()\">\r\n        <ion-slide>\r\n          <app-admin-clients></app-admin-clients>\r\n        </ion-slide>\r\n        <!-- <ion-slide>\r\n          <app-admin-inspiration></app-admin-inspiration>\r\n        </ion-slide> -->\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 74257:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin-pages/consultations/consultations.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <app-header-admin></app-header-admin>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">{{'DASHBOARD.consultations' | translate}}</h1>\r\n          <p class=\"text-2xl font-bold text-black-2 mt-8\">{{'CONSULTATIONS.details' | translate}}</p>\r\n\r\n          <div class=\"consultations-input-wrapper\">\r\n            <span class=\"text-sm text-black-2\">{{'COMMON.duration' | translate}}</span>\r\n            <span class=\"currency-label\">{{'CONSULTATIONS.min' | translate}}</span>\r\n            <ion-input\r\n              [(ngModel)]=\"duration\"\r\n              type=\"number\"\r\n              min=\"1\"\r\n              class=\"consultations-input !pr-[48px]\"\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <div class=\"consultations-input-wrapper\">\r\n            <span class=\"text-sm text-black-2\">{{'CONSULTATIONS.price' | translate}}</span>\r\n            <span class=\"currency-label\">Nok</span>\r\n            <ion-input\r\n              [(ngModel)]=\"price\"\r\n              type=\"number\"\r\n              min=\"1\"\r\n              class=\"consultations-input !pr-[48px]\"\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <ion-buttons class=\"justify-center mt-8\">\r\n            <ion-button class=\"primary-btn\" [class.disabled]=\"initDuration == duration && initPrice == price\" (click)=\"updateConsultationsInfo()\">{{'PROFILE.save' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 23147:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header-admin></app-header-admin>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"4\">\r\n            <h1 class=\"main-title\">{{'DASHBOARD.dashboard' | translate}}</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n            <div class=\"w-[270px] h-[52px] mt-6\">\r\n                <ion-select value=\"month\" interface=\"popover\" >\r\n                  <ion-select-option value=\"month\">Month</ion-select-option>\r\n                  <ion-select-option value=\"year\">Year</ion-select-option>\r\n                </ion-select>\r\n            </div>\r\n        </ion-row> -->\r\n        <ion-row class=\"mt-8\">\r\n            <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"2.25\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] ml-[30px] tracking-[3px]\">{{'DASHBOARD.total-vendors' | translate}}</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">{{totalCountData.totalPartners}}</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0\" size-xl=\"2.25\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] ml-[30px] tracking-[3px]\">{{'DASHBOARD.total-designers' | translate}}</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">{{totalCountData.totalDesigners}}</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0\"  offset-xl=\"0\" size-xl=\"2.25\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] ml-[30px] tracking-[3px]\">{{'DASHBOARD.total-clients' | translate}}</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">{{totalCountData.totalClients}}</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0\" size-xl=\"2.25\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] mx-[25px] tracking-[2px]\">{{'DASHBOARD.total-moodboards' | translate}}</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">{{totalCountData.totalMoodboards}}</p>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"9.5\">\r\n                <div class=\"sales\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">{{'DASHBOARD.sales-overview' | translate}}</h3>\r\n                </div>\r\n                <div class=\"sales\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">{{'DASHBOARD.client-number' | translate}}</h3>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0\" size-xl=\"2.5\">\r\n                <div class=\"designers\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">{{'DASHBOARD.top-designers' | translate}}</h3>\r\n                    <ul>\r\n                        <li *ngFor=\"let number of [0,1,2,3,4,5,6,7,8,9,10]\">\r\n                            <div class=\"my-6 flex justify-between mt-[30px]\">\r\n                                <div class=\"flex\" >\r\n                                <img src=\"../../../assets/images/profile-img.png\" class=\"w-[40px] h-[40px] rounded-2xl object-cover ml-[30px]\" alt=\"Profile Img\"/>\r\n                                <div class=\"ml-3.5 w-[170px]\">\r\n                                    <p class=\"text-black-1 leading-5 font-semibold\">Moniqa Ramirez</p>\r\n                                    <p class=\"text-secondary size-[22px] leading-5\">Scandinavian style</p>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"5.875\">\r\n                <div class=\"trending\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">{{'DASHBOARD.trending-styles' | translate}}</h3>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0.25\" size-xl=\"5.875\">\r\n                <div class=\"trending\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">{{'DASHBOARD.recent-activity' | translate}}</h3>\r\n                    <ul>\r\n                        <li *ngFor=\"let number of [0,1,2,3,4]\">\r\n                            <div class=\"my-6 flex justify-between mt-[30px]\">\r\n                                <div class=\"flex\" >\r\n                                <img src=\"../../../assets/images/profile-img.png\" class=\"w-[40px] h-[40px] rounded-2xl object-cover ml-[30px]\" alt=\"Profile Img\"/>\r\n                                <div class=\"ml-3.5 flex\">\r\n                                    <p class=\"text-black-2 size-[22px] leading-5 flex-1\"> <span class=\"text-black-1 leading-5 font-semibold\">Moniqa Ramirez </span>made an enquiry about Scandinavian style designer.</p>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row> -->\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>";

/***/ }),

/***/ 34652:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header-admin></app-header-admin>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col  size=\"12\" size-xl=\"4\">\r\n            <h1 class=\"main-title\">{{'DASHBOARD.designers' | translate}}</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"4\" size-xl=\"2.9\">\r\n                <div class=\"profile-input\">\r\n                    <div class=\"mt-6\">\r\n                      <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"Search\" [(ngModel)]=\"searchText\"></ion-input>\r\n                    </div>\r\n                  </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"4\" offset-xl=\"4.5\" size-xl=\"2.8\">\r\n                <span class=\"text-sm text-black-2\">{{'DESIGNERS.designer-status' | translate}}</span>\r\n                <div class=\" h-[52px]\">\r\n                    <ion-select (ionChange)=\"onFilterChange($event)\" interface=\"popover\" [multiple]=\"true\">\r\n                        <ion-select-option value=\"InternalDesigner\">In-house designer</ion-select-option>\r\n                        <ion-select-option value=\"ExternalDesigner\">External designer</ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"4\" size-xl=\"1.8\">\r\n                <ion-button (click)=\"addDesigner()\" fill=\"clear\" class=\"primary-btn mt-6\">{{'DESIGNERS.add' | translate}}</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"mt-8 gap-x-[1.45%]\">\r\n            <ion-col *ngFor=\"let designer of designers | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.25\">\r\n                <div class=\"designer\">\r\n                    <div class=\"my-6 flex flex-1 justify-center\">\r\n                        <img [src]=\"designer.photoPath || '../../../assets/images/profile-img.png'\" class=\"w-[70px] h-[70px] rounded-2xl object-cover \" alt=\"Profile Img\"/>\r\n                    </div>\r\n                    <div class=\"absolute top-[12px] right-[12px]\">\r\n                        <button (click)=\"showSettings($event, designer)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50\" type=\"button\">\r\n                            <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"my-4 text-center\">\r\n                        <p class=\"text-black-2 leading-5 font-semibold text-2xl text-clamp-2 cursor-default pb-[4px]\" title=\"{{designer.firstName}} {{designer.lastName}}\">{{designer.firstName}} {{designer.lastName}}</p>\r\n                        <p class=\"text-black-2 size-[22px] leading-5 mt-2\">{{languages[designer.language]}}</p>\r\n                        <p class=\"px-2 py-2 bg-secondary rounded-lg text-white inline-block mt-4 leading-5\">{{getDesignerType(designer) | uppercase}}</p>\r\n                        <div class=\"py-4 px-1 m-4 bg-light\">\r\n                            <ul>\r\n                                <li *ngFor=\"let number of [0,1,2,3,4]\" class=\"inline-block\">\r\n                                    <ion-icon name=\"star\" class=\"text-primary mr-1\"></ion-icon>\r\n                                </li>\r\n                            </ul>\r\n                            <p class=\"text-primary size-[20px] leading-5 text-clamp-1\">{{designer.createdMoodboards.length}} {{'CONTACT-DESIGNER.completed' | translate}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>";

/***/ }),

/***/ 31773:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin-pages/moodboards/moodboards.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">{{'DASHBOARD.moodboards' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-md=\"3.9\" size-xl=\"2.75\">\r\n          <div class=\"mt-6\">\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"grid sm-ion:flex gap-x-2\" size=\"12\" size-md=\"7.9\" offset-md=\"0.2\" offset-xl=\"3.95\" size-xl=\"5.3\">\r\n          <div class=\"sm-ion:w-1/2 w-[90vw]\">\r\n            <span class=\"text-sm text-black-2\">{{'DASHBOARD.style' | translate}}</span>\r\n            <div class=\"h-[52px]\">\r\n              <ion-select (ionChange)=\"onFilterChange($event)\" interface=\"popover\" [multiple]=\"true\">\r\n                <ion-select-option *ngFor=\"let style of (styles$ | async)\" value=\"{{style.name}}\">{{style.name}}</ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </div>\r\n          <ion-button routerLink=\"/add-moodboard\" routerDirection=\"root\" fill=\"clear\" class=\"primary-btn mt-6 sm-ion:w-1/2\">Add moodboard</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"mt-8 gap-x-[1.65%]\">\r\n        <ion-col *ngFor=\"let moodboard of moodboards | filter:searchText\" class=\"!pb-8\" size=\"12\" size-sm=\"5.75\" size-xl=\"3.86\" >\r\n          <div class=\"designer\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                  <img src=\"{{moodboard.style.styleImages[0].imagePath}}\" class=\"h-[113px] lg:h-[155px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img src=\"{{moodboard.style.styleImages[1].imagePath}}\" class=\"h-[113px] lg:h-[155px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                  <div *ngIf=\"moodboard.isTemplate\" class=\"h-[30px] w-[70px] bg-[#EFE8DE] flex items-center justify-evenly rounded-md absolute right-[22px] top-[20px] shadow-sm\">\r\n                    <p class=\"text-black-1 text-sm\">Template</p>\r\n                  </div>\r\n                  <img src=\"{{moodboard.style.styleImages[2].imagePath}}\" class=\"h-[235px] lg:h-[318px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n          <div class=\"flex\">\r\n            <img src=\"../../../assets/images/profile-img.png\" class=\"w-[30ppx] h-[30px] rounded object-cover \"\r\n              alt=\"Profile Img\" />\r\n            <p class=\"text-black-2 font-semibold my-[3px] mx-2 text-xl\">{{moodboard.designer.firstName}} {{moodboard.designer.lastName}}</p>\r\n            <div class=\"absolute right-[-5px]\">\r\n              <button (click)=\"showSettings($event, moodboard)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50\" type=\"button\">\r\n                  <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-black-3 mt-1\">{{moodboard.style.name}} / {{moodboard.room.name}}</p>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 92243:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin-pages/style/style.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">{{'DASHBOARD.style' | translate}}</p>\r\n      <app-sub-header [menu]=\"'style'\" [activeTitle]=\"currentSlide\" [slider]=\"true\" (changeSlide)=\"changeSlide($event)\"></app-sub-header>\r\n      <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"onSlideChange()\">\r\n        <ion-slide>\r\n          <app-admin-styles></app-admin-styles>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <app-admin-materials></app-admin-materials>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <app-admin-rooms></app-admin-rooms>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <app-admin-colors></app-admin-colors>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <app-admin-pictures></app-admin-pictures>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 85267:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">{{'DASHBOARD.partners' | translate}}</p>\r\n      <app-sub-header [menu]=\"'partners'\" [activeTitle]=\"currentSlide\" [slider]=\"true\" (changeSlide)=\"changeSlide($event)\"></app-sub-header>\r\n      <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"onSlideChange()\">\r\n        <ion-slide>\r\n          <app-admin-partners></app-admin-partners>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <app-admin-products></app-admin-products>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 10634:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/client-request/client-request.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-internal-designer></app-header-internal-designer>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">Client request</p>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"2.5\" class=\"p-0\">\r\n          <div class=\"p-2 xl:p-0 h-full\">\r\n            <div class=\"bg-light rounded-2xl flex flex-col items-center h-full pb-4\">\r\n              <img src=\"../../../../assets/images/profile-img.png\" class=\"w-[120px] h-[120px] rounded-full mt-[65px]\">\r\n              <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">Marry Jane Smith</p>\r\n              <p class=\"text-lg text-black-2 mt-[5px]\">m.j.smith@gmail.com</p>\r\n              <p class=\"text-lg text-primary mt-[30px]\">SELECTED STYLE</p>\r\n              <p class=\"text-lg text-black-2 mt-[5px]\">Skandinavian Bright</p>\r\n              <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" routerLink=\"/messenger\" routerDirection=\"root\">Open chat</ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-xl=\"9.5\" class=\"p-2 xl:p-0 xl:pl-5\">\r\n          <p class=\"text-2xl text-black-2 font-medium\">{{'COMMON.moodboard' | translate}}</p>\r\n          <app-moodboard-details [moodboard]=\"client.createdMoodboards[0]\" [withSlides]=\"true\"></app-moodboard-details>\r\n          <ion-buttons class=\"justify-center mt-12\">\r\n            <ion-button\r\n              class=\"secondary-btn\"\r\n              >{{'COMMON.back' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              class=\"primary-btn\"\r\n              >Create offer</ion-button\r\n            >\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 71893:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/clients/client-list/client-list.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-internal-designer></app-header-internal-designer>\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">{{'DASHBOARD.clients' | translate}}</p>\r\n      <app-sub-header [menu]=\"'clientList'\" [activeTitle]=\"currentSlide\" [slider]=\"true\" (changeSlide)=\"changeSlide($event)\"></app-sub-header>\r\n      <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"onSlideChange()\">\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5\">\r\n            <ion-row class=\"gap-x-[1.45%]\">\r\n              <ion-col *ngFor=\"let i of [1,2,3,4,5,6,7,8]\" class=\"\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.25\">\r\n                <div class=\"client\" routerLink=\"/client-request\" routerDirection=\"root\">\r\n                  <div class=\"my-6 flex flex-1 justify-center pt-3\">\r\n                    <img [src]=\"user?.photoPath || '../../../assets/images/profile-img.png'\" class=\"!w-[70px] !h-[70px] rounded-2xl object-cover \" alt=\"Profile Img\"/>\r\n                  </div>\r\n                  <div class=\"my-4 text-center px-2\">\r\n                      <p class=\"text-black-2 leading-8 font-semibold text-lg lg:text-xl xll:text-2xl text-clamp-2 \" title=\"user.firstName user.lastName\">user.firstName user.lastName</p>\r\n                  </div>\r\n                  <div class=\"mt-4 text-center\">\r\n                    <div class=\"w-full bg-light flex flex-col items-center mt-[15px] px-2\">\r\n                      <p class=\"text-sm text-primary mt-[15px]\">Selected style</p>\r\n                      <p class=\"text-md lg:text-lg text-black-2 font-medium mb-[15px]\">Scandinavian</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" sizeLg=\"4\" *ngFor=\"let moodboard of moodboards\">\r\n                <ion-card class=\"ion-card-container h-[350px] mt-[30px]\">\r\n                  <img src={{moodboard.image}} class=\"moodboard-img\">\r\n                </ion-card>\r\n                <div class=\"flex items-center justify-start ml-2\">\r\n                  <p class=\"text-black-2 text-2xl font-medium min-w-[45px]\">{{moodboard.style}}</p>\r\n                  <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"#\" routerDirection=\"root\">\r\n                    <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n                <div class=\"text-left ml-2\">\r\n                  <p class=\"text-black-3 text-lg\">2 moodboard / 20 pieces / 2d ago</p>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5 flex\">\r\n            <ion-row class=\"w-full\">\r\n              <ion-col size=\"12\" sizeLg=\"4\">\r\n                <ion-card class=\"ion-card-container h-[200px] mt-[30px] flex flex-col items-start justify-center\">\r\n                  <p class=\"text-lg text-primary ml-[20px]\">{{'DASHBOARD.client-number' | translate}}</p>\r\n                  <p class=\"text-[60px] text-black font-medium ml-[20px]\">25</p>\r\n                </ion-card>\r\n              </ion-col>\r\n              <ion-col size=\"12\" sizeLg=\"4\">\r\n                <ion-card class=\"ion-card-container h-[200px] mt-[30px] flex flex-col items-start justify-center\">\r\n                  <p class=\"text-lg text-primary ml-[20px]\">TOTAL INCOME</p>\r\n                  <p class=\"text-[60px] text-black font-medium ml-[20px]\">$25.456</p>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5 flex\">\r\n            <ion-row class=\"w-full\">\r\n              <ion-col size=\"12\" sizeLg=\"6\">\r\n                <ion-card class=\"ion-card-container xl:h-[330px] mt-[30px]\">\r\n                  <ion-row class=\"w-full xl:h-full\">\r\n                    <ion-col size=\"12\" sizeXl=\"6\" class=\"flex flex-col items-center justify-center\">\r\n                      <div class=\"text-start w-[240px]\">\r\n                        <div class=\"flex justify-between items-center w-full\">\r\n                          <ion-icon name=\"star\" class=\"h-8 w-8 text-light\" [class.!text-secondary]=\"star>=1\"></ion-icon>\r\n                          <ion-icon name=\"star\" class=\"h-8 w-8 text-light\" [class.!text-secondary]=\"star>=2\"></ion-icon>\r\n                          <ion-icon name=\"star\" class=\"h-8 w-8 text-light\" [class.!text-secondary]=\"star>=3\"></ion-icon>\r\n                          <ion-icon name=\"star\" class=\"h-8 w-8 text-light\" [class.!text-secondary]=\"star>=4\"></ion-icon>\r\n                          <ion-icon name=\"star\" class=\"h-8 w-8 text-light\" [class.!text-secondary]=\"star>=5\"></ion-icon>\r\n                        </div>\r\n                        <p class=\"font-bold text-[65px] text-black mt-[10px]\">{{rating}}</p>\r\n                        <p class=\"text-black-3 text-lg\" *ngIf=\"numberOfRatings !== 1\">{{numberOfRatings}} ratings</p>\r\n                        <p class=\"text-black-3 text-lg\" *ngIf=\"numberOfRatings === 1\">{{numberOfRatings}} rating</p>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" sizeXl=\"6\" class=\"flex flex-col items-center justify-center w-full\">\r\n                      <div class=\"w-full\">\r\n                        <ion-row>\r\n                          <ion-col size=\"5\" class=\"text-start\">\r\n                            <p class=\"text-lg text-black\">Excellent</p>\r\n                            <p class=\"text-lg text-black mt-[10px]\">Very good</p>\r\n                            <p class=\"text-lg text-black mt-[10px]\">Average</p>\r\n                            <p class=\"text-lg text-black mt-[10px]\">Poor</p>\r\n                            <p class=\"text-lg text-black mt-[10px]\">Terible</p>\r\n                          </ion-col>\r\n                          <ion-col size=\"7\">\r\n                            <div class=\"flex items-center w-full\">\r\n                              <span class=\"bg-primary rounded-[7px] h-3 m-0 p-0\" [ngStyle]=\"{width: rate0 + 'px'}\"></span>\r\n                              <p class=\"text-black-2 text-[14px] ml-2\">{{ratingArray[0]}}</p>\r\n                            </div>\r\n                            <div class=\"flex items-center mt-[18px] w-full\">\r\n                              <span class=\"bg-primary rounded-[7px] h-3 m-0 p-0\" [ngStyle]=\"{width: rate1 + 'px'}\"></span>\r\n                              <p class=\"text-black-2 text-[14px] ml-2\">{{ratingArray[1]}}</p>\r\n                            </div>\r\n                            <div class=\"flex items-center mt-[18px] w-full\">\r\n                              <span class=\"bg-primary rounded-[7px] h-3 m-0 p-0\" [ngStyle]=\"{width: rate2 + 'px'}\"></span>\r\n                              <p class=\"text-black-2 text-[14px] ml-2\">{{ratingArray[2]}}</p>\r\n                            </div>\r\n                            <div class=\"flex items-center mt-[18px] w-full\">\r\n                              <span class=\"bg-primary rounded-[7px] h-3 m-0 p-0\" [ngStyle]=\"{width: rate3 + 'px'}\"></span>\r\n                              <p class=\"text-black-2 text-[14px] ml-2\">{{ratingArray[3]}}</p>\r\n                            </div>\r\n                            <div class=\"flex items-center mt-[18px] w-full\">\r\n                              <span class=\"bg-primary rounded-[7px] h-3 p-0 m-0\" [ngStyle]=\"{width: rate4 + 'px'}\"></span>\r\n                              <p class=\"text-black-2 text-[14px] ml-2\">{{ratingArray[4]}}</p>\r\n                            </div>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 94613:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/styles/style-list/style-list.page.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-internal-designer></app-header-internal-designer>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">{{'DASHBOARD.dashboard' | translate}}</p>\r\n      <div>\r\n        <ion-row>\r\n          <ion-col size=\"3\" *ngFor=\"let style of styles\">\r\n            <ion-card class=\"ion-card-container h-[200px]\">\r\n              <img src={{style.image}} class=\"h-full w-full\">\r\n            </ion-card>\r\n            <div class=\"flex justify-between items-center ml-3 mt-2\">\r\n              <p class=\"text-2xl text-medium\">{{style.name}}</p>\r\n              <button (click)=\"showSettings($event)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50\" type=\"button\">\r\n                <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n              </button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 57182:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-internal-designer></app-header-internal-designer>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">Moodboard</p>\r\n      <app-sub-header [menu]=\"'designerMoodboards'\" [activeTitle]=\"currentSlide\" [slider]=\"true\" (changeSlide)=\"changeSlide($event)\"></app-sub-header>\r\n      <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"onSlideChange()\">\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5\">\r\n            <ion-row>\r\n              <ion-col size=\"4\" *ngFor=\"let moodboard of myMoodboards\">\r\n                <ion-card class=\"ion-card-container h-[350px]\">\r\n                  <img src={{moodboard.image}} class=\"moodboard-img\">\r\n                </ion-card>\r\n                <div class=\"flex justify-between items-center ml-3 mt-2\">\r\n                  <div class=\"flex items-center justify-start\">\r\n                    <p class=\"text-2xl text-medium\">{{moodboard.style}}</p>\r\n                    <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"#\" routerDirection=\"root\">\r\n                      <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                  <button (click)=\"showSettings($event)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50\" type=\"button\">\r\n                    <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n                  </button>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5\">\r\n            <ion-row>\r\n              <ion-col size=\"4\" class=\"px-3\">\r\n                <ion-select class=\"border rounded-2xl border-black-2 h-[52px] w-full text-left\" interface=\"popover\" placeholder=\"Select style\">\r\n                  <ion-select-option>Vintage</ion-select-option>\r\n                  <ion-select-option>Traditional</ion-select-option>\r\n                  <ion-select-option>Minimal</ion-select-option>\r\n                  <ion-select-option>Industrial</ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\" *ngFor=\"let moodboard of allMoodboards\">\r\n                <ion-card class=\"ion-card-container h-[350px]\">\r\n                  <img src={{moodboard.image}} class=\"moodboard-img\">\r\n                </ion-card>\r\n                <div class=\"flex flex-col ml-3 mt-2\">\r\n                  <div class=\"flex items-center justify-start\">\r\n                    <p class=\"text-2xl text-medium\">{{moodboard.style}}</p>\r\n                    <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"#\" routerDirection=\"root\">\r\n                      <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                  <div class=\"flex items-center justify-start\">\r\n                    <img src=\"../../../../assets/images/profile-img.png\" class=\"avatar-img rounded-md\">\r\n                    <p class=\"text-lg ml-2 text-black-2\">Monica Bing</p>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 24395:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer-profile/book-designer-profile.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <h1 class=\"main-title\">{{'BOOK-DESIGNER-PROFILE.profile' | translate}}</h1>\r\n      <div class=\"mt-[30px]\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"4\" class=\"p-0\">\r\n            <div class=\"p-2 xl:p-0\">\r\n              <div class=\"bg-light rounded-2xl flex flex-col items-center\">\r\n                <img src=\"../../../../assets/images/profile-img.png\" class=\"w-[240px] h-[240px] rounded-full mt-[65px]\">\r\n                <div class=\"w-[144px] h-[30px] bg-secondary rounded-[5px] flex items-center justify-center mt-[30px]\">\r\n                  <p class=\"text-white text-sm\">{{'DESIGNERS.inhouse' | translate}}</p>\r\n                </div>\r\n                <p class=\"text-2xl text-black-2 font-medium mt-[15px]\">Diana Haliwell</p>\r\n                <p class=\"text-lg text-black-3\">16 {{'DESIGNERS.projects' | translate}}</p>\r\n                <p class=\"text-lg text-black-2 px-[30px] xl:px-[60px] mt-[30px] mb-[30px]\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.\r\n                  <br>\r\n                  <br>\r\n                  Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"8\" class=\"p-0 xl:pl-5\">\r\n            <div class=\"p-2 xl:p-0\">\r\n              <p class=\"text-2xl text-black-2 font-medium\">Available slots</p>\r\n              <div class=\"mt-[30px] flex flex-col xl:flex-row flex-wrap items-center xl:justify-between\">\r\n                <div class=\"border border-black rounded-2xl h-[400px] xl:h-[477px] w-full xl:w-[470px] p-4 flex justify-center items-center\">\r\n                  <ion-datetime presentation=\"calendar\" class=\"h-full w-full bg-white\"></ion-datetime>\r\n                </div>\r\n                <div class=\"border border-black rounded-2xl h-[477px] w-[260px] p-4 mt-5 xl:mt-0 flex flex-col items-center\">\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">10 AM - 11 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">11 AM - 12 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">13 AM - 14 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">14 AM - 15 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">15 AM - 16 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">16 AM - 17 AM</ion-button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-2xl text-black-2 font-medium mt-[80px]\">Moodboard</p>\r\n              <div class=\"mt-[30px] mb-[200px]\">\r\n                <div class=\"border border-black rounded-2xl w-full xl:w-[746px] h-[410px] p-4\">\r\n                  <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-full\">\r\n                </div>\r\n              </div>\r\n              <div class=\"flex flex-col xl:flex-row justify-center items-center h-[152px] w-full xl:w-[746px] fixed bottom-0 bg-white z-10\">\r\n                <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/messenger\" routerDirection=\"root\">Open chat</ion-button>\r\n                <ion-button fill=\"clear\" class=\"primary-btn\">{{'DESIGNER-PROFILE.book' | translate}}</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 92759:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <h1 class=\"main-title\">{{'MY-INTIRI.book' | translate}}</h1>\r\n      <!-- <div class=\"mt-[30px] p-2 xl:p-0\">\r\n        <span class=\"text-sm black-2\">{{'COMMON.sort' | translate}}</span>\r\n          <ion-select class=\"border rounded-2xl border-black-2 h-[52px] w-[270px]\" interface=\"popover\">\r\n            <ion-select-option>Rating</ion-select-option>\r\n            <ion-select-option>{{'COMMON.moodboards' | translate}}</ion-select-option>\r\n          </ion-select>\r\n      </div> -->\r\n      <ion-row class=\"mt-8 gap-x-[1.65%]\">\r\n        <ion-col *ngFor=\"let d of designers\" class=\"!pb-8\" size=\"12\" size-sm=\"5.75\" size-xl=\"3.86\" >\r\n          <div class=\"designer\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                  <img [src]=\"getMoodboardImage(d, 0) || '../../../../assets/images/landing-img.png'\" class=\"h-[113px] lg:h-[155px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img [src]=\"getMoodboardImage(d, 1) || '../../../../assets/images/landing-img.png'\"  class=\"h-[113px] lg:h-[155px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                  <div class=\"h-[30px] w-[55px] bg-[#EFE8DE] flex items-center justify-evenly rounded-md absolute right-[20px] top-[20px] shadow-sm\">\r\n                    <ion-icon name=\"star\" class=\"text-black-1 text-sm\"></ion-icon>\r\n                    <p class=\"text-black-1 text-sm\">{{d.designerRating.averageRating}}</p>\r\n                  </div>\r\n                  <img [src]=\"getMoodboardImage(d) || '../../../../assets/images/landing-img.png'\"  class=\"h-[235px] lg:h-[318px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n          <div class=\"flex items-center justify-between mt-4\">\r\n            <div class=\"flex items-center justify-start\">\r\n              <img [src]=\"d.photoPath ? d.photoPath : '../../../../assets/images/profile-img.png'\" class=\"h-[30px] w-[30px] rounded-md object-cover\">\r\n              <p class=\"text-black-2 text-2xl font-medium ml-2\">{{d.firstName}} {{d.lastName}}</p>\r\n            </div>\r\n            <ion-buttons routerLink=\"/designer-profile/{{d.id}}\"><ion-button class=\"primary-btn !bg-none\">Choose</ion-button></ion-buttons>\r\n          </div>\r\n          <div>\r\n            <p class=\"text-lg text-black-3\">{{getDesignerType(d)}} / {{d.createdMoodboards.length}} designs / {{languages[d.language]}}</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 94530:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container mb-40\">\r\n      <h1 class=\"main-title\">{{'CONTACT-DESIGNER.select' | translate}}</h1>\r\n      <ion-row class=\"mt-8 gap-x-[1.65%]\">\r\n        <ion-col *ngFor=\"let d of designers\" class=\"!pb-8\" size=\"12\" size-sm=\"5.75\" size-xl=\"3.86\" >\r\n          <div class=\"designer\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                  <img [src]=\"getMoodboardImage(d, 0) || '../../../../assets/images/landing-img.png'\" class=\"h-[113px] lg:h-[155px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img [src]=\"getMoodboardImage(d, 1) || '../../../../assets/images/landing-img.png'\"  class=\"h-[113px] lg:h-[155px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                  <div class=\"h-[30px] w-[55px] bg-[#EFE8DE] flex items-center justify-evenly rounded-md absolute right-[20px] top-[20px] shadow-sm\">\r\n                    <ion-icon name=\"star\" class=\"text-black-1 text-sm\"></ion-icon>\r\n                    <p class=\"text-black-1 text-sm\">{{d.designerRating.averageRating}}</p>\r\n                  </div>\r\n                  <img [src]=\"getMoodboardImage(d) || '../../../../assets/images/landing-img.png'\"  class=\"h-[235px] lg:h-[318px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n          <div class=\"flex items-center justify-between mt-4\">\r\n            <div class=\"flex items-center justify-start\">\r\n              <img [src]=\"d.photoPath ? d.photoPath : '../../../../assets/images/profile-img.png'\" class=\"h-[30px] w-[30px] rounded-md object-cover\">\r\n              <p class=\"text-black-2 text-2xl font-medium ml-2\">{{d.firstName}} {{d.lastName}}</p>\r\n            </div>\r\n            <ion-buttons (click)=\"paymentModal(d)\"><ion-button class=\"primary-btn !bg-none\">Choose</ion-button></ion-buttons>\r\n          </div>\r\n          <div>\r\n            <p class=\"text-lg text-black-3\">{{getDesignerType(d)}} / {{d.createdMoodboards.length}} designs / {{languages[d.language]}}</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 70569:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/customize-moodboard/customize-moodboard.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header></app-header>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"3\">\r\n            <app-step-picker\r\n              (changeStep)=\"goToStep($event)\"\r\n              [canChangeToStep]=\"canChangeToStep\"\r\n              [currentStepNo]=\"currentStepNo\"\r\n              [moodboard]=\"moodboard\"\r\n              [steps]=\"steps\"\r\n              [page]=\"'customize-moodboard'\"\r\n            ></app-step-picker>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"9\">\r\n            <app-new-project-step\r\n              (toggleSelection)=\"toggleItem($event)\"\r\n              [project]=\"moodboard\"\r\n              [stepsOrder]=\"stepsOrder\"\r\n              [currentStepNo]=\"currentStepNo\"\r\n              [currentStep]=\"steps[currentStepNo]\"\r\n            ></app-new-project-step>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col offset-xl=\"3\">\r\n            <ion-buttons class=\"justify-center\">\r\n                <ion-button\r\n                *ngIf=\"currentStepNo === 0\"\r\n                class=\"secondary-btn\"\r\n                routerLink=\"/new-project\"\r\n                routerDirection=\"root\"\r\n                >{{'COMMON.cancel' | translate}}</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"currentStepNo !== 0\"\r\n                class=\"secondary-btn\"\r\n                [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n                (click)=\"backStep()\"\r\n                >{{'COMMON.back' | translate}}</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"currentStepNo !== 2\"\r\n                class=\"primary-btn\"\r\n                [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\r\n                (click)=\"nextStep()\"\r\n                >{{'COMMON.next' | translate}}</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"currentStepNo === 2\"\r\n                class=\"primary-btn\"\r\n                [class.disabled]=\"!validateData()\"\r\n                (click)=\"finish()\"\r\n                >{{'NEW-PROJECT.finish' | translate}}</ion-button\r\n              >\r\n            </ion-buttons>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>\r\n";

/***/ }),

/***/ 95662:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <h1 class=\"main-title\">{{'BOOK-DESIGNER-PROFILE.profile' | translate}}</h1>\r\n      <div class=\"mt-[30px]\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"4\" class=\"p-0\">\r\n            <div class=\"p-2 xl:p-0\">\r\n              <div class=\"bg-light rounded-2xl flex flex-col items-center\">\r\n                <img [src]=\"designer.photoPath || '../../../../assets/images/profile-img.png'\" class=\"w-[240px] h-[240px] rounded-full mt-[65px]\">\r\n                <div class=\"w-[144px] h-[30px] bg-secondary rounded-[5px] flex items-center justify-center mt-[30px]\">\r\n                  <p class=\"text-white text-sm\">{{getDesignerType() | uppercase}}</p>\r\n                </div>\r\n                <p class=\"text-2xl text-black-2 font-medium mt-[15px]\">{{designer.firstName}} {{designer.lastName}}</p>\r\n                <p class=\"text-lg text-black-3\">{{designer.createdMoodboards.length}} {{'BOOK-DESIGNER-PROFILE.projects' | translate}}</p>\r\n                <p class=\"text-lg text-black-2 px-[30px] xl:px-[60px] mt-[30px]\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.\r\n                  <br>\r\n                  <br>\r\n                  Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.\r\n                </p>\r\n                <div class=\"flex flex-col items-start w-full px-[30px] xl:px-[60px]\">\r\n                  <p class=\"text-primary text-lg mt-[20px]\">{{'DESIGNER-PROFILE.languages' | translate}}</p>\r\n                  <p class=\"text-black-2 text-lg\">{{languages[designer.language]}}</p>\r\n                </div>\r\n                <ion-button fill=\"clear\" class=\"primary-btn mb-[60px] mt-[30px]\" (click)=\"bookConsultationModal()\">Book consultation</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col *ngIf=\"designer.createdMoodboards.length > 0\" size=\"12\" size-xl=\"8\" class=\"p-2 xl:p-0 xl:pl-5\">\r\n            <p class=\"text-2xl text-black-2 font-medium\">{{'MY-INTIRI.latest-project' | translate}}</p>\r\n            <ion-card class=\"border shadow-1 rounded-2xl w-full xl:w-[866px] h-[410px] m-0 mt-7 p-4\">\r\n              <div class=\"result-grid\">\r\n                <div class=\"item-sm\" [ngStyle]=\"{background: designer.createdMoodboards[designer.createdMoodboards.length-1].colorPalettes[0].shadeColorLight}\"></div>\r\n                <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].products[0].imagePath) + ')'}\"></div>\r\n                <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].products[1].imagePath) + ')'}\"></div>\r\n                <div class=\"item-lg-tall\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].style.styleImages[0].imagePath) + ')'}\"></div>\r\n                <div class=\"item-sm\" [ngStyle]=\"{background: designer.createdMoodboards[designer.createdMoodboards.length-1].colorPalettes[0].shadeColorMedium}\"></div>\r\n                <div class=\"item-sm\" [ngStyle]=\"{background: designer.createdMoodboards[designer.createdMoodboards.length-1].colorPalettes[0].shadeColorDark}\"></div>\r\n                <div class=\"item-sm-tall\" [ngStyle]=\"{background: designer.createdMoodboards[designer.createdMoodboards.length-1].colorPalettes[designer.createdMoodboards[designer.createdMoodboards.length-1].colorPalettes.length-1].mainColor}\"></div>\r\n                <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].style.styleImages[1].imagePath) + ')'}\"></div>\r\n                <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].materials[0].imagePath) + ')'}\"></div>\r\n                <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].materials[1].imagePath) + ')'}\"></div>\r\n                <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].materials[2].imagePath) + ')'}\"></div>\r\n                <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(designer.createdMoodboards[designer.createdMoodboards.length-1].materials[3].imagePath) + ')'}\"></div>\r\n              </div>\r\n          </ion-card>\r\n            <div class=\"flex items-center justify-start\">\r\n              <p class=\"text-black-2 text-2xl font-medium mt-2\">{{designer.createdMoodboards[designer.createdMoodboards.length-1].style.name}}</p>\r\n            </div>\r\n            <div>\r\n              <p class=\"text-black-3 text-lg\">{{getPiecesNo(designer.createdMoodboards[designer.createdMoodboards.length-1])}} pieces / {{designer.createdMoodboards[designer.createdMoodboards.length-1].created | timeAgo }}</p>\r\n            </div>\r\n            <div class=\"mt-16\">\r\n              <p class=\"text-2xl font-medium text-black-2\">{{'DESIGNER-PROFILE.other' | translate}}</p>\r\n              <ion-row class=\"mt-8 gap-x-[1.65%]\">\r\n                <ion-col *ngFor=\"let mb of designer.createdMoodboards\" class=\"!pb-8\" size=\"12\" size-sm=\"5.75\" size-xl=\"5.8\" >\r\n                  <div class=\"designer\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                          <img [src]=\"getMoodboardImage(mb, 0) || '../../../../assets/images/landing-img.png'\" class=\"h-[113px] lg:h-[155px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                          <img [src]=\"getMoodboardImage(mb, 1) || '../../../../assets/images/landing-img.png'\" class=\"h-[113px] lg:h-[155px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                        </ion-col>\r\n                        <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                          <img [src]=\"getMoodboardImage(mb) || '../../../../assets/images/landing-img.png'\" class=\"h-[235px] lg:h-[318px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </div>\r\n                  <div class=\"flex items-center justify-between\">\r\n                    <div class=\"flex items-center justify-start\">\r\n                      <p class=\"text-black-2 text-2xl font-medium\">{{mb.style.name}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <p class=\"text-black-3 text-lg\">{{getPiecesNo(mb)}} pieces / {{designer.createdMoodboards[designer.createdMoodboards.length-1].created | timeAgo }}</p>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 68015:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/inspirations/inspirations.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header></app-header>\r\n      <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n      <div class=\"main-container\">\r\n        <ion-button fill=\"clear\" class=\"back-btn\" routerLink=\"/my-intiri\" routerDirection=\"root\">\r\n          <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n          <p>{{'MY-INTIRI.intiri' | translate}}</p>\r\n        </ion-button>\r\n        <p class=\"main-title\">My Inspiration</p>\r\n        <ion-grid class=\"mt-8 p-0\">\r\n            <ion-row class=\"gap-x-[1.45%]\">\r\n                <ion-col *ngFor=\"let i of inspirations\" class=\"p-0\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n                    <div class=\"h-full w-full mb-4\">\r\n                      <img [src]=\"i.url\" (click)=\"openImageInModal(i)\" class=\"object-cover rounded-2xl h-[250px] !w-full shadow hover:shadow-lg hover:opacity-80 cursor-pointer\" alt=\"Inspiration Img\" />\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\" class=\"p-0\">\r\n                    <div class=\"profile-input w-full\">\r\n                      <label for=\"dropzone-file\">\r\n                        <div class=\"w-full border-2 border-dashed rounded-2xl h-[250px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                          <div *ngIf=\"!imagePath\" class=\"text-center mt-[95px]\">\r\n                            <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                            <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">Upload</p>\r\n                          </div>\r\n                          <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"styleImg\" />\r\n                        </div>\r\n                        <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" />\r\n                      </label>\r\n                    </div>\r\n                  </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 70780:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header *ngIf=\"loggedUser?.roles[0] === 'FreeEndUser'\"></app-header>\r\n    <app-header-admin *ngIf=\"loggedUser?.roles[0] === 'Admin'\"></app-header-admin>\r\n    <app-header-internal-designer *ngIf=\"loggedUser?.roles[0] === 'InternalDesigner'\"></app-header-internal-designer>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">{{'MESSENGER.messages' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3.2\">\r\n            <div class=\" xl-ion:h-[720px] pb-8\">\r\n              <div class=\"mb-2\">\r\n                <span class=\"text-sm text-black-2\">{{'MESSENGER.search' | translate}}</span>\r\n                <ion-input [(ngModel)]=\"searchText\" type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px]\"></ion-input>\r\n              </div>\r\n              <ul>\r\n                <li *ngFor=\"let user of contacts | filter:searchText\">\r\n                  <div [class.bg-light]=\"activeChatUser.id === user.id\" class=\"py-3 mb-1 px-2 rounded-md hover:bg-light flex justify-between cursor-pointer\" (click)=\"changeChat(user)\">\r\n                    <div class=\"flex\" >\r\n                      <img [src]=\"user.photoPath ? user.photoPath : '../../../assets/images/profile-img.png'\" class=\"w-[57px] h-[57px] rounded-lg object-cover\" alt=\"Profile Img\"/>\r\n                      <div class=\"ml-3.5 w-[170px]\">\r\n                        <p class=\"text-black-1 leading-5 font-semibold\">{{user.firstName}} {{user.lastName}}</p>\r\n                        <p class=\"text-black-3 size-[15px] leading-5 text-clamp\">{{user.lastMessageContent}}</p>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <p class=\"text-black-3 size-[15px] leading-[14px]\">{{parseDate(user.lastMessageDate)}}</p>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0.3\" size-xl=\"8.5\" class=\"relative\">\r\n          <div *ngIf=\"ratePrompt\" class=\"w-[333px] h-[100px] absolute z-10 m-auto inset-0\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn w-[170px]\" (click)=\"openRatingModal()\">Rate Designer</ion-button>\r\n            <ion-button fill=\"clear\" class=\"secondary-btn w-[130px]\" (click)=\"ratePrompt=false;\">Skip</ion-button>\r\n          </div>\r\n            <div [class]=\"ratePrompt ? 'blur pointer-events-none' : ''\">\r\n            <div class=\"bg-light xl-ion:h-[682px] rounded-lg text-center pb-8\">\r\n              <div class=\"flex py-[22px] pl-[18px] border-b border-secondary\">\r\n                <img [src]=\"activeChatUser.photoPath ? activeChatUser.photoPath : '../../../assets/images/profile-img.png'\" class=\"w-[45px] h-[45px] rounded-lg object-cover\" alt=\"Profile Img\"/>\r\n                <p class=\"text-black-1 leading-5 font-semibold ml-[13px] flex items-center\">{{activeChatUser.firstName}} {{activeChatUser.lastName}}</p>\r\n              </div>\r\n              <div class=\"chat\" id=\"chatbox\">\r\n                <ng-container *ngFor=\"let msg of messages\">\r\n                  <div *ngIf=\"msg.content || msg.Content\" [class]=\"getChatClassName(msg, 'chat-right', 'chat-left')\">{{msg.content ? msg.content : msg.Content}}</div>\r\n                  <ng-container *ngFor=\"let file of msg.attachments\">\r\n                    <div *ngIf=\"!file.fileFormat.startsWith('image')\" class=\"chat-file\" [class]=\"getChatClassName(msg, 'r-side', 'l-side')\"  (click)=\"downloadFile(file)\">\r\n                      <ion-icon class=\"text-4xl mt-2 pl-2 text-primary\" name=\"document\"></ion-icon>\r\n                      <span class=\"relative bottom-[30px] left-[45px] text-clamp-1 max-w-[120px] text-[15px]\" [title]=\"'Download '+file.url.split('/').pop()\">{{file.url.split('/').pop()}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"file.fileFormat.startsWith('image')\" [ngStyle]=\"{background: 'url(' + file.url + ')'}\"  [class]=\"getChatClassName(msg, 'r-side', 'l-side')\" class=\"chat-image !bg-cover\">\r\n                      <div [ngStyle]=\"{background: 'url(' + file.url + ')'}\" class=\"w-full h-full !bg-cover blur-sm rounded-lg download-img\"></div>\r\n                      <div class=\"flex-column text-center w-[80%] absolute top-1/2 left-1/2 download-img\" style=\"transform: translate(-50%, -50%)\">\r\n                        <div (click)=\"downloadFile(file)\" class=\"mx-auto bg-secondary rounded-xl w-[40px] h-[40px] cursor-pointer\"> <ion-icon name=\"download\" class=\"text-4xl text-primary\"></ion-icon> </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                  <ng-container *ngFor=\"let file of msg.MessageAttachments\">\r\n                    <div *ngIf=\"!file.FileFormat.startsWith('image')\" class=\"chat-file\" [class]=\"getChatClassName(msg, 'r-side', 'l-side')\"   (click)=\"downloadFile(file)\">\r\n                      <ion-icon class=\"text-4xl mt-2 pl-2 text-primary\" name=\"document\"></ion-icon>\r\n                      <span class=\"relative bottom-[30px] left-[45px] text-clamp-1 max-w-[120px] text-[15px]\" [title]=\"'Download '+file.Url.split('/').pop()\">{{file.Url.split('/').pop()}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"file.FileFormat.startsWith('image')\" [ngStyle]=\"{background: 'url(' + file.Url + ')'}\"  [class]=\"getChatClassName(msg, 'r-side', 'l-side')\" class=\"chat-image !bg-cover\">\r\n                      <div [ngStyle]=\"{background: 'url(' + file.Url + ')'}\" class=\"w-full h-full !bg-cover blur-sm rounded-lg download-img\"></div>\r\n                      <div class=\"flex-column text-center w-[80%] absolute top-1/2 left-1/2 download-img\" style=\"transform: translate(-50%, -50%)\">\r\n                        <div (click)=\"downloadFile(file)\" class=\"mx-auto bg-secondary rounded-xl w-[40px] h-[40px] cursor-pointer\"> <ion-icon name=\"download\" class=\"text-4xl text-primary\"></ion-icon> </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n\r\n              </div>\r\n              <div class=\"chat-input relative\">\r\n                <ngx-spinner [fullScreen]=\"false\" size=\"medium\" bdColor=\"rgba(51,51,51,0.1)\" color=\"#9B7E60\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n                <ng-container *ngIf=\"!activeChatUser.chatPeriodExpired\">\r\n                  <ion-input type=\"text\" (keyup.enter)=\"sendMsg()\" [(ngModel)]=\"message\" placeholder=\"Type a message...\" class=\"border bg-transparent text-left h-[52px] rounded-2xl border-black-2 mx-[20px] w-[80%]\"></ion-input>\r\n                  <label for=\"dropzone-file\">\r\n                    <div *ngIf=\"attachments\" class=\"text-primary cursor-pointer relative bottom-[10px] inline-block\">{{attachments.length}} file(s) selected</div>\r\n                    <ion-icon class=\"img-btn\" name=\"attach-outline\"></ion-icon>\r\n                    <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" multiple type=\"file\" class=\"hidden\" />\r\n                  </label>\r\n                  <div class=\"send-btn-wrapper\" (click)=\"sendMsg()\"><ion-icon class=\"send-btn\" name=\"send-sharp\"></ion-icon></div>\r\n                </ng-container>\r\n                <div *ngIf=\"activeChatUser.id && activeChatUser.chatPeriodExpired\" class=\"text-primary mx-auto cursor-default\">\r\n                  Your chat session with {{activeChatUser.firstName}} has expired.\r\n                </div>\r\n                <div *ngIf=\"!activeChatUser.id\" class=\"text-primary mx-auto cursor-default\">\r\n                  Your inbox is empty. \r\n                  <span routerLink=\"/book-designer\" routerDirection=\"root\" class=\"font-bold cursor-pointer hover:opacity-80\">Book designer</span> in order to start conversation.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 34326:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <ion-button fill=\"clear\" class=\"back-btn\" (click)=\"backToProjectDetails()\">\r\n        <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n        <p>Project details</p>\r\n      </ion-button>\r\n      <p class=\"main-title\">{{moodboard.name}}</p>\r\n      <div class=\"p-2 xl:p-0\">\r\n        <app-moodboard-details [moodboard]=\"moodboard\"></app-moodboard-details>\r\n        <div class=\"flex flex-col lg:flex-row justify-center mt-10 xl:mt-40 mb-40\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/edit-moodboard/{{moodboard.id}}/project/{{projectId}}\" routerDirection=\"root\">{{'MOODBOARD-DETAILS.edit' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn\" routerLink=\"/contact-designer/{{moodboard.id}}\" routerDirection=\"root\">{{'MOODBOARD-DETAILS.contact-designer' | translate}}</ion-button>\r\n          <ion-button fill=\"clear\" class=\"secondary-btn opacity-60\" disabled>{{'MOODBOARD-DETAILS.contact-craftsman' | translate}}</ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7165:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <div *ngIf=\"!isLoading\" class=\"main-container\">\r\n      <div class=\"flex justify-between\">\r\n        <p class=\"main-title\">{{'MY-INTIRI.intiri' | translate}}</p>\r\n      </div>\r\n      <ion-row class=\"mt-3\">\r\n        <ion-col size=\"12\" class=\"p-2 xl:p-0 xl:pt-6\">\r\n          <div>\r\n            <div *ngIf=\"projects.length > 0\">\r\n              <div class=\"flex justify-between items-center \">\r\n                <p class=\"text-2xl font-medium mb-4\">{{'MY-INTIRI.latest-project' | translate}}</p>\r\n                <div *ngIf=\"projects[projects.length-1].projectMoodboards.length > options.slidesPerView\">\r\n                  <ion-button fill=\"clear\" class=\"text-black hover:opacity-50\" (click)=\"prev()\">\r\n                    <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-button fill=\"clear\" class=\"text-black hover:opacity-50\" (click)=\"next()\">\r\n                    <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex items-center justify-start cursor-pointer hover:opacity-80\" routerLink=\"/project-details/{{projects[projects.length-1].id}}\" routerDirection=\"root\">\r\n                <p class=\"text-black-2 text-2xl font-medium min-w-[45px]\">{{projects[projects.length-1].name}}</p>\r\n                <ion-button fill=\"clear\" class=\"text-black\" >\r\n                  <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n              <div>\r\n                <p class=\"text-black-3 text-lg\">{{projects[projects.length-1].projectMoodboards.length }} moodboards / {{getPiecesNo(projects[projects.length-1])}} pieces / {{projects[projects.length-1].created | timeAgo }}</p>\r\n              </div>\r\n              <div class=\"flex flex-wrap gap-x-[2%]\">\r\n                <ion-slides #slides [options]=\"options\" class=\"py-4 pr-4 w-full\">\r\n                  <ion-slide *ngFor=\"let moodboard of projects[projects.length-1].projectMoodboards\" class=\"rounded-2xl border shadow-1 h-[350px] min-w-[300px]\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                          <img src=\"{{moodboard.style.styleImages[0].imagePath}}\" class=\"!h-[153.5px] lg:h-[155px] !w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                          <img src=\"{{moodboard.style.styleImages[1].imagePath}}\" class=\"!h-[153.5px] lg:h-[155px] !w-full object-cover\" alt=\"moodboard-img\"/>\r\n                        </ion-col>\r\n                        <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                          <img src=\"{{moodboard.style.styleImages[2].imagePath}}\" class=\"!h-[315px] lg:h-[318px] !w-full object-cover\" alt=\"moodboard-img\"/>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </div>\r\n            </div>\r\n            <div class=\"mt-8\">\r\n              <div class=\"flex justify-between items-center\">\r\n                <p class=\"text-2xl font-medium text-black-2\">{{'MY-INTIRI.all-projects' | translate}}</p>\r\n                <div *ngIf=\"projects.length > options.slidesPerView\">\r\n                  <ion-button fill=\"clear\" class=\"text-black hover:opacity-50\" (click)=\"prevProject()\">\r\n                    <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-button fill=\"clear\" class=\"text-black hover:opacity-50\" (click)=\"nextProject()\">\r\n                    <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex flex-wrap gap-x-[2%]\">\r\n                <ion-slides #projectSlides [options]=\"options\" class=\"pb-20 pr-4 pt-4 w-full\">\r\n                  <ion-slide *ngFor=\"let project of projects\" class=\"rounded-2xl border shadow-1 h-[350px] min-w-[300px]\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                          <img src=\"{{project.projectMoodboards[0].style.styleImages[0].imagePath}}\" class=\"!h-[153.5px] lg:h-[155px] !w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                          <img src=\"{{project.projectMoodboards[0].style.styleImages[1].imagePath}}\" class=\"!h-[153.5px] lg:h-[155px] !w-full object-cover\" alt=\"moodboard-img\"/>\r\n                        </ion-col>\r\n                        <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                          <img src=\"{{project.projectMoodboards[0].style.styleImages[2].imagePath}}\" class=\"!h-[315px] lg:h-[318px] !w-full object-cover\" alt=\"moodboard-img\"/>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <div class=\"flex items-center justify-start pt-2 cursor-pointer hover:opacity-80\" routerLink=\"/project-details/{{project.id}}\" routerDirection=\"root\">\r\n                          <p class=\"text-black-2 text-2xl font-medium min-w-[45px]\">{{project.name}}</p>\r\n                          <ion-button fill=\"clear\" class=\"text-black\">\r\n                            <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                        <div class=\"w-full text-left\">\r\n                          <p class=\"text-black-3 text-lg\">{{project.projectMoodboards.length }} moodboards / {{getPiecesNo(project)}} pieces / {{project.created | timeAgo }}</p>\r\n                        </div>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"flex justify-between items-center\">\r\n        <p class=\"text-2xl font-medium text-black-2 mt-8 mb-4\">{{'MY-INTIRI.inspirations' | translate}}</p>\r\n        <ion-button fill=\"clear\" class=\"text-primary\">\r\n          <p class=\"capitalize hover:opacity-80\" routerLink=\"/my-inspirations\" routerDirection=\"root\">See all</p>\r\n        </ion-button>\r\n      </div>\r\n      <ion-row class=\"gap-x-[1.45%]\">\r\n        <ion-col *ngFor=\"let i of inspirations.slice(-6)\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n          <div>\r\n            <div class=\"h-full w-full\">\r\n              <img [src]=\"i.url\" (click)=\"openImageInModal(i)\" class=\"object-cover rounded-2xl h-[250px] shadow !w-full hover:shadow-lg hover:opacity-80 cursor-pointer\" alt=\"Inspiration Img\" />\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"inspirations.length == 0\" size=\"12\" size-sm=\"5.75\" size-xl=\"1.85\">\r\n          <div class=\"profile-input w-full\">\r\n            <label for=\"dropzone-file\">\r\n              <div class=\"w-full border-2 border-dashed rounded-2xl h-[250px] border-black-3 hover:opacity-70 cursor-pointer\">\r\n                <div *ngIf=\"!imagePath\" class=\"text-center mt-[85px]\">\r\n                  <ion-icon class=\"text-[27px] text-black-3\" name=\"add-outline\"></ion-icon>\r\n                  <p class=\"leading-[22px] font-semibold text-black-3 text-lg\">Add first inspiration</p>\r\n                </div>\r\n                <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"object-cover rounded-2xl p-2 h-full w-full\" alt=\"styleImg\" />\r\n              </div>\r\n              <input (change)=\"onFileChange($event)\" id=\"dropzone-file\" type=\"file\" class=\"hidden\" />\r\n            </label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 85631:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"2.6\">\r\n          <app-step-picker\r\n            (changeStep)=\"goToStep($event)\"\r\n            [canChangeToStep]=\"canChangeToStep\"\r\n            [currentStepNo]=\"currentStepNo\"\r\n            [project]=\"project\"\r\n            [steps]=\"steps\"\r\n          ></app-step-picker>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-xl=\"9.4\">\r\n          <app-new-project-step\r\n            (toggleSelection)=\"toggleItem($event)\"\r\n            [project]=\"project\"\r\n            [stepsOrder]=\"stepsOrder\"\r\n            [currentStepNo]=\"currentStepNo\"\r\n            [currentStep]=\"steps[currentStepNo]\"\r\n          ></app-new-project-step>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"3\">\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] !== 'final'\"\r\n              class=\"secondary-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n              (click)=\"backStep()\"\r\n              >{{'COMMON.back' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] !== 'final'\"\r\n              class=\"primary-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\r\n              (click)=\"nextStep()\"\r\n              >{{'COMMON.next' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] === 'final'\"\r\n              class=\"secondary-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n              routerLink=\"/customize-moodboard\"\r\n              routerDirection=\"root\"\r\n              >{{'NEW-PROJECT.customize' | translate}}</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo]['data'] === 'final'\"\r\n              class=\"primary-btn\"\r\n              (click)=\"saveCurrentProject()\"\r\n              >{{'NEW-PROJECT.finish' | translate}}</ion-button\r\n            >\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4238:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title\">{{'PAYMENT.details' | translate}}</p>\r\n      <div class=\"w-full\">\r\n      <ion-row class=\"p-2 xl:p-0\">\r\n        <ion-col size=\"12\" size-xl=\"5\">\r\n          <div class=\"flex\">\r\n            <ion-button fill=\"clear\" class=\"credit-btn\">\r\n              <ion-icon name=\"card-outline\"></ion-icon>\r\n              <p class=\"ml-2\">{{'PAYMENT.card' | translate}}</p>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" class=\"vipps-btn\">\r\n              <img src=\"../../../../assets/icon/vipps-red.svg\">\r\n            </ion-button>\r\n          </div>\r\n          <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">{{'PAYMENT.billing' | translate}}</p>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">{{'PAYMENT.name' | translate}}</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">{{'PAYMENT.street' | translate}}</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px] flex flex-col xl:flex-row\">\r\n            <div>\r\n              <span class=\"text-sm black-2\">{{'PAYMENT.postal-code' | translate}}</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n            <div class=\"ml-0 xl:ml-[20px] mt-[30px] xl:mt-0\">\r\n              <span class=\"text-sm black-2\">{{'PAYMENT.city' | translate}}</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">{{'PAYMENT.country' | translate}}</span>\r\n            <ion-select class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\" interface=\"popover\">\r\n              <ion-select-option>Serbia</ion-select-option>\r\n              <ion-select-option>Norway</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">{{'PAYMENT.card' | translate}}</p>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">{{'PAYMENT.card-name' | translate}}</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">{{'PAYMENT.card-number' | translate}}</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px] flex\">\r\n            <div>\r\n              <span class=\"text-sm black-2\">{{'PAYMENT.cvv' | translate}}</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n            <div class=\"ml-[10px] xl:ml-[20px]\">\r\n              <span class=\"text-sm black-2\">{{'PAYMENT.expiration' | translate}}</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex justify-center mt-[30px] mb-[50px]\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn\">{{'COMMON.continue' | translate}}</ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col offset-xl=\"2\" size-xl=\"5\" size=\"12\">\r\n          <div class=\"min-h-[580px] bg-light border border-light rounded-2xl px-[30px] xl:px-[50px] pt-[50px]\">\r\n          <p class=\"text-2xl text-black-2 font-medium\">{{'PAYMENT.summary' | translate}}</p>\r\n          <p class=\"text-lg text-black-2 font-medium mt-[30px]\">Consultation with designer</p>\r\n          <p class=\"text-lg text-black-2 mt-[10px]\" *ngFor=\"let item of items\">{{item.name}}</p>\r\n          <ion-item-divider class=\"border-b border-secondary bg-transparent\"></ion-item-divider>\r\n          <div class=\"mt-[30px] flex justify-between\">\r\n            <p class=\"text-lg text-black-2 font-medium\">{{'PAYMENT.price' | translate}}</p>\r\n            <p class=\"text-lg text-black-2\">{{consultationPrice}} {{currency}}</p>\r\n          </div>\r\n          <div class=\"mt-[14px] flex justify-between\">\r\n            <p class=\"text-lg text-black-2 font-medium\">{{'BOOK-MODAL.number' | translate}}</p>\r\n            <p class=\"text-lg text-black-2\">{{consultationNumber}}</p>\r\n          </div>\r\n          <ion-item-divider class=\"border-b border-secondary bg-transparent\"></ion-item-divider>\r\n          <div class=\"mt-[30px] flex justify-between items-center mb-[50px]\">\r\n            <p class=\"text-lg text-black-2 font-medium\">{{'PAYMENT.total' | translate}}L</p>\r\n            <p class=\"text-2xl text-black-2 font-medium\">{{totalPrice}} {{currency}}</p>\r\n          </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 16488:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 4657:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pricing-plans/pricing-plans.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">{{'PRICING-PLAN.pricing-plans' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3\">\r\n            <div class=\"xl-ion:w-[370px] xl-ion:h-[720px] rounded-xl text-center border shadow-1 pb-8\">\r\n                <div class=\"pt-12\">\r\n                    <img src=\"../../../assets/icon/free-plan.svg\" class=\"w-[100px] h-[77px] mx-auto\" alt=\"Free Plan Img\"/>\r\n                </div>\r\n                <h3 class=\"mt-10 mx-10 mb-1 font-medium text-black-2\">{{'PRICING-PLAN.free-plan' | translate}}</h3>\r\n                <hr class=\"w-[60px] h-[0px] border border-primary bg-primary mx-auto mt-[30px]\">\r\n \r\n              </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0.2\" size-xl=\"3\">\r\n            <div class=\"bg-light xl-ion:w-[370px] xl-ion:h-[720px] rounded-xl text-center pb-8\">\r\n                <div class=\"pt-12\">\r\n                    <img src=\"../../../assets/icon/premium-plan.svg\" class=\"w-[100px] h-[77px] mx-auto\" alt=\"Premium Plan Img\"/>\r\n                </div>\r\n                <h3 class=\"mt-10 mx-10 mb-1 font-medium text-black-2\">{{'PRICING-PLAN.premium-plan' | translate}}</h3>\r\n                <hr class=\"w-[60px] h-[0px] border border-primary bg-primary mx-auto mt-[30px]\">\r\n                <p class=\"text-black-2 mt-[30px]\">{{'BOOK-MODAL.room-sketch' | translate}}</p>\r\n                <p class=\"text-black-2 mt-[30px]\">{{'BOOK-MODAL.moodboard-adjustment' | translate}}</p>\r\n                <p class=\"text-black-2 mt-[30px]\">{{'BOOK-MODAL.select-products' | translate}}</p>\r\n                <p class=\"text-black-2 mt-[30px]\">{{'BOOK-MODAL.decoration' | translate}}</p>\r\n                <ion-buttons class=\"justify-center mt-8\">\r\n                    <ion-button class=\"primary-btn\">{{'PRICING-PLAN.upgrade' | translate}}</ion-button>\r\n                </ion-buttons>\r\n            </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 65461:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <ion-button fill=\"clear\" class=\"back-btn\" routerLink=\"/my-intiri\" routerDirection=\"root\">\r\n        <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n        <p>{{'MY-INTIRI.intiri' | translate}}</p>\r\n      </ion-button>\r\n      <!-- <p class=\"main-title\">Skandinavian bright</p> -->\r\n      <div *ngIf=\"project\">\r\n        <p class=\"main-title\">{{project.name}}</p>\r\n        <div class=\"mt-7 flex flex-wrap gap-x-[2.4%] p-2 xl:p-0\">\r\n          <div *ngFor=\"let mb of moodboards\" class=\"w-full md:w-[45%] xl:w-[31.5%] mb-4\">\r\n            <ion-grid class=\"border shadow-1 rounded-2xl\">\r\n              <ion-row>\r\n                <ion-col size=\"4.5\" class=\"!p-3 !pr-2\">\r\n                  <img src=\"{{mb.style.styleImages[0].imagePath}}\" class=\"!h-[153.5px] lg:h-[155px] !w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img src=\"{{mb.style.styleImages[1].imagePath}}\" class=\"!h-[153.5px] lg:h-[155px] !w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"7.5\" class=\"!p-3 !pl-0\">\r\n                  <img src=\"{{mb.style.styleImages[2].imagePath}}\" class=\"!h-[315px] lg:h-[318px] !w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <div class=\"flex items-center justify-start cursor-pointer hover:opacity-90\" routerLink=\"/project-details/{{project.id}}/moodboard-details/{{mb.id}}\" routerDirection=\"root\">\r\n              <p class=\"text-black-2 text-2xl font-medium min-w-[45px]\">{{mb.name}}</p>\r\n              <ion-button fill=\"clear\" class=\"text-black\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n              </ion-button>\r\n              <!-- <ion-button fill=\"clear\" class=\"text-black\" (click)=\"goToMoodboardDetails(mb)\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n              </ion-button> -->\r\n            </div>\r\n            <div>\r\n              <p class=\"text-black-3 text-lg\">{{project.created | timeAgo }}</p>\r\n              <!-- <p class=\"text-black-3 text-lg\">{{getPiecesNo(project)}} pieces / {{project.created | timeAgo }}</p> -->\r\n            </div>\r\n          </div>\r\n\r\n          <ion-card class=\"h-[350px] w-full md:w-[45%] xl:w-[30%] border border-black-3 border-dashed rounded-2xl shadow-none m-0 mt-1 p-4 flex justify-center items-center flex-col cursor-pointer hover:opacity-80\">\r\n            <ion-icon name=\"add\" class=\"w-20 h-20\" (click)=\"addMoodboardToProject()\"></ion-icon>\r\n            <p class=\"text-lg font-medium\">{{'PROJECT-DETAILS.new' | translate}}</p>\r\n          </ion-card>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 36688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Login {{'COMMON.login' | translate}}</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold mt-7\">Forgot password?</h1>\r\n          <p class=\"text-lg black-2\">\r\n            Please enter your phone number to reset your password.\r\n          </p>\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"forgotPassword()\" autocomplete=\"off\">\r\n          <div class=\"mt-8\">\r\n            <span class=\"text-sm black-2\">{{'COMMON.phone' | translate}}</span>\r\n            <div class=\"flex justify-between\">\r\n              <div>\r\n                <ion-input class=\"border rounded-2xl border-black-2 h-14 w-32\"></ion-input>\r\n              </div>\r\n              <div>\r\n                <ion-input name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-80\"></ion-input>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"send-btn\" type=\"submit\">Send</ion-button>\r\n          </div>\r\n          </form>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 74943:
/*!**********************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 36663:
/*!************************************************************!*\
  !*** ./src/app/pages/landing/landing.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content\r\n[scrollEvents]=\"true\"\r\n(ionScroll)=\"logScrollEnd()\">\r\n  <div class=\"bg-white\">\r\n    <div>\r\n      <app-header-landing [isScrolledDown]=\"isScrolledDown\"></app-header-landing>\r\n      <div class=\"hero-wrapper\">\r\n\r\n        <!-- Hero Text -->\r\n        <div class=\"container relative\" id=\"home\">\r\n          <div class=\"hero-text-wrapper\">\r\n            <p class=\"hero-pencraft\">{{'LANDING.welcome' | translate}}</p>\r\n            <p class=\"hero-text\">Get <span class=\"text-primary\">IDEAS</span> for furnishing and decorating your home!</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" routerLink=\"/new-project\" routerDirection=\"root\">{{'LANDING.find' | translate}}</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Text 1 -->\r\n      <ion-grid id=\"how-it-works\">\r\n        <ion-row class=\"container\">\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\r\n            <img src=\"../../../assets/images/01.png\" alt=\"\">\r\n            <p class=\"pencraft\">{{'LANDING.how-it-works' | translate}}</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" routerLink=\"/new-project\" routerDirection=\"root\">{{'LANDING.find' | translate}}</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Text 2 -->\r\n      <ion-grid>\r\n        <ion-row class=\"container flex-col-reverse xs:flex-row \">\r\n          <ion-col size=\"12\" size-sm  class=\"pt-32 pr-11 pl-11 md:pl-0\">\r\n            <img src=\"../../../assets/images/02.png\" alt=\"\">\r\n            <p class=\"pencraft\">{{'LANDING.how-it-works' | translate}}</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" routerLink=\"/new-project\" routerDirection=\"root\">{{'LANDING.find' | translate}}</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      <!-- Text 3 -->\r\n      <ion-grid class=\"mb-12\">\r\n        <ion-row class=\"container\">\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\r\n            <img src=\"../../../assets/images/03.png\" alt=\"\">\r\n            <p class=\"pencraft\">{{'LANDING.how-it-works' | translate}}</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" routerLink=\"/new-project\" routerDirection=\"root\">{{'LANDING.find' | translate}}</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Stories / Testimonials -->\r\n      <div class=\"bg-light bg-cover min-h-[1030px]\" id=\"stories\">\r\n        <ion-row class=\"container relative py-[30px] xl:py-[310px]\">\r\n          <ion-col size=\"12\" size-xl=\"3.5\"  class=\"ion-align-self-center pl-[5%] xl-ion:pl-0\">\r\n            <p class=\"pencraft\">{{'LANDING.stories' | translate}}</p>\r\n            <p class=\"landing-headline\">You said<br/> about us</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"7.5\" offset-xl=\"0.75\" class=\"\">\r\n            <ion-slides #slides [options]=\"getOptions()\" class=\"h-[100%]\">\r\n              <ion-slide *ngFor=\"let comment of comments\">\r\n                <ion-card class=\"border rounded-2xl border-black-1 bg-transparent p-8 text-left h-[97%]\">\r\n                  <div class=\"mb-2\">\r\n                    <span class='quote-icon'></span>\r\n                    <span class='quote-icon ml-1'></span>\r\n                  </div>\r\n                  <p class=\"text-black-2 text-lg\">{{comment.text}}</p>\r\n                  <p class=\"text-lg font-semibold text-black mt-4\">{{comment.author}}</p>\r\n                </ion-card>\r\n              </ion-slide>\r\n            </ion-slides>\r\n            <div class=\"flex justify-end\">\r\n              <ion-button fill=\"clear\" (click)=\"prev()\" class=\"text-black\">\r\n                <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button fill=\"clear\" (click)=\"next()\" class=\"text-black\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <!-- Contact Us -->\r\n      <div id=\"contact\" class=\"bg-primary bg-cover h-[480px] text-center pt-[140px]\">\r\n        <p class=\"pencraft-white\">{{'LANDING.contact-us' | translate}}</p>\r\n        <p class=\"landing-headline-white\">{{'LANDING.hesitate' | translate}}</p>\r\n        <ion-buttons>\r\n          <ion-button href=\"mailto:office@intiri.com\" class=\"contact-btn\">office@intiri.com</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-row>\r\n    <ion-col offset-xl=\"1\" size-xl=\"5\" class=\"p-2 xl:p-12 h-full\">\r\n      <div class=\"w-full \">\r\n        <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"font-['Allison'] text-7xl mt-16 text-black-2\">{{'LOGIN.welcome' | translate}}</h1>\r\n          <h1 class=\"text-5xl font-semibold\">{{'LOGIN.login' | translate}}</h1>\r\n          <p class=\"text-lg text-black-2\">\r\n            {{'LOGIN.login-msg' | translate}}\r\n          </p>\r\n          <form [formGroup]=\"loginForm\" class=\"d-flex mt-2 mt-md-0 text-left\" (ngSubmit)=\"login()\" autocomplete=\"off\">\r\n          <div class=\"mt-8 mx-auto w-max\">\r\n            <span class=\"text-sm text-black-2 text-left block mb-[3px]\">{{'LOGIN.phone' | translate}}</span>\r\n            <div class=\"flex gap-x-2\">\r\n              <div>\r\n                <ion-select class=\"border rounded-2xl border-black-2 h-14 w-24 xl:w-32\" interface=\"popover\" (ionChange)=\"setActiveCode($event)\" [value]=\"activeCode\">\r\n                  <ion-select-option value=\"47\">\r\n                    <div>\r\n                      <p class=\"text-lg text-black\">+47</p>\r\n                    </div>\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"381\">\r\n                    <p class=\"text-lg text-black\">+381</p>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n              <div>\r\n                <ion-input #phoneNumber formControlName=\"phoneNumber\" name=\"phoneNumber\" class=\"border rounded-2xl h-14 border-black-2 w-60 xl:w-80\"></ion-input>\r\n                <span class=\"ion-warning\" *ngIf=\"isFormSubmited && phoneNumberErrors?.required\">Phone is Required!</span>\r\n                <span class=\"ion-warning\" *ngIf=\"isFormSubmited && phoneNumberErrors?.pattern\">Invalid Phone Number!</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" type=\"submit\">{{'LOGIN.login' | translate}}</ion-button>\r\n            <p class=\"text-lg text-black-2 mt-7\">{{'LOGIN.or' | translate}}</p>\r\n            <ion-button fill=\"clear\" class=\"vipps-btn\" (click)=\"initiateVippsLogin()\">\r\n              <img src=\"../../../assets/icon/vipps-white.svg\">\r\n            </ion-button>\r\n            <p class=\"text-lg text-black-2 mt-20\">{{'LOGIN.no-account' | translate}}</p>\r\n            <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/register\" routerDirection=\"root\">{{'LOGIN.create' | translate}}</ion-button>\r\n          </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-xl=\"6\" class=\"p-2 xl:p-12 h-full hidden xl:flex justify-center xl:justify-end\">\r\n      <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";

/***/ }),

/***/ 88472:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/partner-pages/partner-products/partner-products.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-partner></app-header-partner>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">{{'DASHBOARD.partner' | translate}}</p>\r\n      <ion-grid class=\"px-0 m\">\r\n        <ion-row class=\"mt-2\">\r\n          <ion-col size=\"12\" size-md=\"4\" size-lg=\"3\">\r\n            <div class=\"profile-input\">\r\n              <div class=\"mt-6\">\r\n                <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-12\" placeholder=\"{{'MESSENGER.search' | translate}}\" [(ngModel)]=\"searchText\"></ion-input>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col offset-md=\"3\" offset-lg=\"5\" size=\"12\" size-md=\"5\" size-lg=\"4\" class=\"relative bottom-[15px]\">\r\n            <div class=\"profile-input justify-end flex flex-1 gap-x-[1.65%] !mt-8 md:!mt-4\">\r\n              <div class=\"w-full\">\r\n                <span class=\"text-sm text-black-2\">{{'PARTNERS.type' | translate}}</span>\r\n                <ion-select (ionChange)=\"onFilterChange($event)\" class=\"w-full\" interface=\"popover\" [multiple]=\"true\">\r\n                  <ion-select-option value=\"{{productType.name}}\" *ngFor=\"let productType of productTypes\">{{productType.name}}</ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n                <ion-buttons class=\"justify-end mt-[25px]\">\r\n                <ion-button class=\"primary-btn\" (click)=\"openAddProductModal()\">{{'PARTNERS.addProduct' | translate}}</ion-button>\r\n              </ion-buttons>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"gap-x-[1.65%]\">\r\n          <ion-col *ngFor=\"let product of products | filter:searchText\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.23\">\r\n            <div class=\"card\">\r\n              <div class=\"h-full w-full \">\r\n                <img src=\"{{product.imagePath}}\" class=\"object-cover rounded-2xl !h-full !w-full\" alt=\"Profile Img\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"flex justify-between\">\r\n              <p class=\"py-2 text-black-2 font-semibold\">{{product.name}}</p>\r\n              <div class=\"float-right\">\r\n                <button (click)=\"showSettings($event, product)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex py-2 text-black-1 text-sm font-medium text-center bg-white rounded-lg\" type=\"button\">\r\n                    <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 84899:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/partner-pages/partner-profile/partner-profile.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\" [formGroup]=\"partnerProfileForm\">\r\n    <app-header-partner></app-header-partner>\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">{{'PROFILE.profile' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3.5\">\r\n          <app-profile-img-section\r\n            [image]=\"partnerProfile.photoPath\"\r\n            [firstName]=\"partnerProfile.firstName\"\r\n            [lastName]=\"partnerProfile.lastName\">\r\n          </app-profile-img-section>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n          <div formGroupName=\"dataInfoGroup\">\r\n          <app-profile-info-section\r\n            [partnerProfile]=\"true\">\r\n          </app-profile-info-section>\r\n        </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"4\" size-xl=\"5\">\r\n          <ion-buttons class=\"justify-center mt-8\">\r\n            <ion-button class=\"primary-btn\" (click)=\"saveChanges()\">{{'PROFILE.save' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 97599:
/*!******************************************************************!*\
  !*** ./src/app/pages/processing/processing.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"h-full\">\r\n  <ion-spinner name=\"dots\" class=\"spinner-center\"></ion-spinner>\r\n</div>\r\n";

/***/ }),

/***/ 67364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\" [formGroup]=\"profileForm\">\r\n    <app-header *ngIf=\"(loggedUser$ | async)?.roles[0] === 'FreeEndUser'\"></app-header>\r\n    <app-header-admin *ngIf=\"(loggedUser$ | async)?.roles[0] === 'Admin'\"></app-header-admin>\r\n    <app-header-internal-designer *ngIf=\"(loggedUser$ | async)?.roles[0] === 'InternalDesigner'\"></app-header-internal-designer>\r\n    <ngx-spinner size=\"medium\" type=\"ball-spin-clockwise\"></ngx-spinner>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">{{'PROFILE.profile' | translate}}</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3.5\">\r\n          <app-profile-img-section\r\n            [image]=\"userInfo.photoPath\"\r\n            [firstName]=\"userInfo.firstName\"\r\n            [lastName]=\"userInfo.lastName\">\r\n          </app-profile-img-section>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n          <div formGroupName=\"dataInfoGroup\">\r\n            <app-profile-info-section\r\n            [dataInfo]=\"userInfo\"\r\n            [userInfo]=\"true\">\r\n          </app-profile-info-section>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"4\" size-xl=\"5\">\r\n          <ion-buttons class=\"justify-center mt-8\">\r\n            <ion-button class=\"primary-btn\" (click)=\"saveChanges()\">{{'PROFILE.save' | translate}}</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 46325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\" offset-xl=\"1\" size-xl=\"5\" class=\"p-2 xl:p-12 h-full\">\r\n      <div class=\"w-full xl:w-[470px]\">\r\n        <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\" />\r\n        <div class=\"text-center\">\r\n        <ion-button\r\n          fill=\"clear\"\r\n          class=\"login-btn\"\r\n          routerLink=\"/login\"\r\n          routerDirection=\"root\"\r\n        >\r\n          <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n          <p>{{'COMMON.login' | translate}}</p>\r\n        </ion-button>\r\n        <h1 class=\"font-['Allison'] text-7xl mt-0 text-black-2\">\r\n          {{'REGISTER.start' | translate}}\r\n        </h1>\r\n        <h1 class=\"text-5xl font-semibold\">{{'LOGIN.create' | translate}}</h1>\r\n        <p class=\"text-lg text-black-2\">\r\n          Manage your account, create and edit projects, collaborate on design\r\n          and more.\r\n        </p>\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" class=\"w-max mx-auto text-left\">\r\n          <div class=\"mt-8 flex flex-col xl:flex-row justify-between\">\r\n            <div>\r\n              <span class=\"text-sm text-black-2\">{{'COMMON.firstname' | translate}}</span>\r\n              <ion-input\r\n                type=\"text\"\r\n                #firstName\r\n                formControlName=\"firstName\"\r\n                class=\"border rounded-2xl h-14 border-black-2 w-full xl:w-56\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"ion-warning\"\r\n                *ngIf=\"isFormSubmited && firstNameErrors?.required\"\r\n                >First name is Required!</span\r\n              >\r\n            </div>\r\n            <div class=\"mt-[30px] xl:mt-0\">\r\n              <span class=\"text-sm text-black-2\">{{'COMMON.lastname' | translate}}</span>\r\n              <ion-input\r\n                type=\"text\"\r\n                #lastName\r\n                formControlName=\"lastName\"\r\n                class=\"border rounded-2xl h-14 border-black-2 w-full xl:w-56\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"ion-warning\"\r\n                *ngIf=\"isFormSubmited && lastNameErrors?.required\"\r\n                >Last name is Required!</span\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-7\">\r\n            <span class=\"text-sm text-black-2\">{{'LOGIN.phone' | translate}}</span>\r\n            <div class=\"flex gap-x-2\">\r\n              <div>\r\n                <ion-select\r\n                  class=\"border rounded-2xl border-black-2 h-14 w-24 xl:w-32\"\r\n                  interface=\"popover\"\r\n                  (ionChange)=\"setActiveCode($event)\"\r\n                  [value]=\"activeCode\"\r\n                >\r\n                  <ion-select-option value=\"47\">\r\n                    <div>\r\n                      <p class=\"text-lg text-black\">+47</p>\r\n                    </div>\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"381\">\r\n                    <p class=\"text-lg text-black\">+381</p>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n              <div>\r\n                <ion-input\r\n                  #phoneNumber\r\n                  formControlName=\"phoneNumber\"\r\n                  class=\"border rounded-2xl h-14 border-black-2 w-60 xl:w-80\"\r\n                ></ion-input>\r\n                <span\r\n                  class=\"ion-warning\"\r\n                  *ngIf=\"isFormSubmited && phoneNumberErrors?.required\"\r\n                  >Phone is Required!</span\r\n                >\r\n                <span\r\n                  class=\"ion-warning\"\r\n                  *ngIf=\"isFormSubmited && phoneNumberErrors?.pattern\"\r\n                  >Invalid Phone Number!</span\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button type=\"submit\" fill=\"clear\" class=\"primary-btn mt-[30px]\"\r\n              >{{'COMMON.register' | translate}}</ion-button\r\n            >\r\n            <p class=\"text-lg text-black-2 mt-1\">Or</p>\r\n            <ion-button fill=\"clear\" class=\"vipps-btn\">\r\n              <img src=\"../../../assets/icon/vipps-white.svg\" />\r\n            </ion-button>\r\n            <span class=\"inline-block w-1/2 mt-2 text-center text-red-500\" *ngIf=\"error\">{{error.error}}</span>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-xl=\"6\" class=\"p-2 xl:p-12 h-full hidden xl:flex justify-center xl:justify-end\">\r\n      <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";

/***/ }),

/***/ 44367:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>{{'COMMON.login' | translate}}</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold mt-7\">Reset password</h1>\r\n          <p class=\"text-lg black-2\">\r\n            Please enter your new password.\r\n          </p>\r\n          <form [formGroup]=\"resetPassForm\" (ngSubmit)=\"resetPassword()\">\r\n            <div class=\"mt-8\">\r\n              <span class=\"text-sm black-2\">Password</span>\r\n              <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n                <ion-input formControlName=\"password\" type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n                <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"mt-7\">\r\n              <span class=\"text-sm black-2\">Repeat password</span>\r\n              <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n                <ion-input formControlName=\"confirmPassword\" type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n                <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"flex flex-col justify-center items-center\">\r\n              <ion-button fill=\"clear\" type=\"submit\" class=\"reset-btn\">Reset password</ion-button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 83423:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sms-verification/sms-verification.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset-xl=\"1\" size-xl=\"5\" class=\"p-2 xl:p-12 h-full\">\r\n        <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n        <div class=\"w-full xl:w-[470px] text-center\">\r\n          <ion-button fill=\"clear\" class=\"register-btn\" routerLink=\"/register\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>{{'SMS.create' | translate}}</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold\">{{'SMS.code' | translate}}</h1>\r\n          <p class=\"text-lg text-black-2\">\r\n            {{'SMS.sms-msg' | translate}}\r\n          </p>\r\n          <div class=\"mt-8 max-w-[500px] mx-auto\">\r\n            <code-input  #codeInput [codeLength]=\"6\" (codeChanged)=\"onCodeChanged($event)\" (codeCompleted)=\"onCodeCompleted($event)\">\r\n\r\n            </code-input>\r\n            <span class=\"ion-warning mt-2\" *ngIf=\"error\">{{ error }}</span>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\">{{'SMS.proceed' | translate}}</ion-button>\r\n            <ion-button fill=\"clear\" class=\"send-btn\">{{'SMS.again' | translate}}</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-xl=\"6\" class=\"p-2 xl:p-12 h-full hidden xl:flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map