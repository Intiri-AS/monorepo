(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 7425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 5731);
/* harmony import */ var _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/shared-guarded-pages/style/style.page */ 281);
/* harmony import */ var _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer/book-designer.page */ 5436);
/* harmony import */ var _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/end-user-pages/contact-designer/contact-designer.page */ 7396);
/* harmony import */ var _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/end-user-pages/craftsman-portal/craftsman-portal.page */ 2080);
/* harmony import */ var _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/end-user-pages/customize-moodboard/customize-moodboard.page */ 1505);
/* harmony import */ var _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/end-user-pages/my-intiri/my-intiri.page */ 8277);
/* harmony import */ var _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/end-user-pages/new-project/new-project.page */ 3735);
/* harmony import */ var _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/end-user-pages/pre-book-selection/pre-book-selection.page */ 3577);
/* harmony import */ var _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.page */ 8032);
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/landing/landing.page */ 4808);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/profile/profile.page */ 4629);
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/register/register.page */ 6690);
/* harmony import */ var _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/shared-guarded-pages/moodboard/moodboard.page */ 8441);
/* harmony import */ var _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.page */ 2032);
/* harmony import */ var _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/reset-password/reset.password.page */ 5250);
/* harmony import */ var _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/sms-verification/sms-verification.page */ 970);
























const routes = [
    {
        path: '',
        redirectTo: 'new-project',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_13__.LandingPage
    },
    {
        path: 'login',
        component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_14__.LoginPage
    },
    {
        path: 'register',
        component: _pages_register_register_page__WEBPACK_IMPORTED_MODULE_16__.RegisterPage
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
        component: _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_12__.HowItWorksPage
    },
    {
        path: 'profile',
        component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_15__.ProfilePage,
    },
    {
        path: 'book-designer',
        component: _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_5__.BookDesignerPage
    },
    {
        path: 'contact-designer',
        component: _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_6__.ContactDesignerPage
    },
    {
        path: 'craftsman-portal',
        component: _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_7__.CraftsmanPortalPage
    },
    {
        path: 'customize-moodboard',
        component: _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_8__.CustomizeMoodboardPage
    },
    {
        path: 'my-intiri',
        component: _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_9__.MyIntiriPage
    },
    {
        path: 'new-project',
        component: _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_10__.NewProjectPage
    },
    {
        path: 'pre-book-selection',
        component: _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_11__.PreBookSelectionPage
    },
    {
        path: 'dashboard',
        component: _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    },
    {
        path: 'designer',
        component: _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_1__.DesignerPage
    },
    {
        path: 'vendor',
        component: _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_2__.VendorPage
    },
    {
        path: 'my-moodboard',
        component: _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_3__.MyMoodboardPage
    },
    {
        path: 'style',
        component: _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_4__.StylePage
    },
    {
        path: 'moodboard',
        component: _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_17__.MoodboardPage
    }
    //TODO Add routes for client pages, after discussion
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_23__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing/landing.page */ 4808);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register/register.page */ 6690);
/* harmony import */ var _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.page */ 8032);
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile/profile.page */ 4629);
/* harmony import */ var _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.page */ 2032);
/* harmony import */ var _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/reset-password/reset.password.page */ 5250);
/* harmony import */ var _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/sms-verification/sms-verification.page */ 970);
/* harmony import */ var _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/end-user-pages/new-project/new-project.page */ 3735);
/* harmony import */ var _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/end-user-pages/pre-book-selection/pre-book-selection.page */ 3577);
/* harmony import */ var _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/end-user-pages/my-intiri/my-intiri.page */ 8277);
/* harmony import */ var _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/end-user-pages/customize-moodboard/customize-moodboard.page */ 1505);
/* harmony import */ var _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/end-user-pages/craftsman-portal/craftsman-portal.page */ 2080);
/* harmony import */ var _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/end-user-pages/contact-designer/contact-designer.page */ 7396);
/* harmony import */ var _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer/book-designer.page */ 5436);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 7425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 5731);
/* harmony import */ var _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/shared-guarded-pages/style/style.page */ 281);
/* harmony import */ var _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/shared-guarded-pages/moodboard/moodboard.page */ 8441);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/header-landing/header-landing.component */ 8021);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/step-picker/step-picker.component */ 1014);
/* harmony import */ var _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/new-project-step/new-project-step.component */ 8735);
/* harmony import */ var _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/modals/login/login-modal.component */ 6974);
/* harmony import */ var _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/modals/create-project-modal/create-project-modal.component */ 390);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-code-input */ 3891);









//pages for all users








//pages for end-users







//pages for admins



//pages for designers

//shared admin/designer pages


//app components





//app modals


//plugins

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_31__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_2__.LandingPage, _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage, _pages_register_register_page__WEBPACK_IMPORTED_MODULE_4__.RegisterPage, _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_5__.HowItWorksPage, _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_6__.ProfilePage, _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordPage, _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordPage,
            _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_9__.SmsVerificationPage,
            _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_10__.NewProjectPage, _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_11__.PreBookSelectionPage, _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_12__.MyIntiriPage, _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_13__.CustomizeMoodboardPage, _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_14__.CraftsmanPortalPage, _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_15__.ContactDesignerPage, _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_16__.BookDesignerPage,
            _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_17__.DashboardPage, _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_18__.DesignerPage, _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_19__.VendorPage,
            _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_20__.MyMoodboardPage,
            _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_21__.StylePage, _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_22__.MoodboardPage,
            _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_24__.HeaderLandingComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__.FooterComponent,
            _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_27__.NewProjectStepComponent, _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_26__.StepPickerComponent,
            _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_28__.LoginModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_29__.CreateProjectModalComponent
        ],
        entryComponents: [
            _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_28__.LoginModalComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_33__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
            angular_code_input__WEBPACK_IMPORTED_MODULE_36__.CodeInputModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_33__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 8021:
/*!***********************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLandingComponent": () => (/* binding */ HeaderLandingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_landing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-landing.component.html?ngResource */ 4982);
/* harmony import */ var _header_landing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-landing.component.scss?ngResource */ 5225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let HeaderLandingComponent = class HeaderLandingComponent {
    constructor() { }
    // this is a workaround - usual way does not seem to work properly
    scrollTo(id) {
        const x = document.querySelector(`#${id}`);
        if (x) {
            x.scrollIntoView({ behavior: 'smooth' });
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
};
HeaderLandingComponent.ctorParameters = () => [];
HeaderLandingComponent.propDecorators = {
    isScrolledDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderLandingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header-landing',
        template: _header_landing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_landing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderLandingComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HeaderComponent = class HeaderComponent {
    constructor() { }
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
        sessionStorage.removeItem('draftProjectName');
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 390:
/*!******************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectModalComponent": () => (/* binding */ CreateProjectModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_project_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project-modal.component.html?ngResource */ 4618);
/* harmony import */ var _create_project_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project-modal.component.scss?ngResource */ 1382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let CreateProjectModalComponent = class CreateProjectModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.projectName = '';
    }
    ngOnInit() { }
    isValidProjectName() {
        return this.projectName.length > 1;
    }
    startProjectCreation() {
        sessionStorage.setItem('draftProjectName', this.projectName);
        this.dismiss();
    }
    dismiss() {
        this.modalController.dismiss({ 'dismissed': true });
    }
};
CreateProjectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CreateProjectModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-create-project-modal',
        template: _create_project_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_project_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateProjectModalComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-modal.component.html?ngResource */ 1070);
/* harmony import */ var _login_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-modal.component.scss?ngResource */ 9673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LoginModalComponent = class LoginModalComponent {
    constructor() { }
};
LoginModalComponent.ctorParameters = () => [];
LoginModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-modal',
        template: _login_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginModalComponent);



/***/ }),

/***/ 8735:
/*!***************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProjectStepComponent": () => (/* binding */ NewProjectStepComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_project_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project-step.component.html?ngResource */ 952);
/* harmony import */ var _new_project_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-step.component.scss?ngResource */ 6166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let NewProjectStepComponent = class NewProjectStepComponent {
    constructor() {
        this.toggleSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    toggleItem(item) {
        this.toggleSelection.emit(item);
    }
    isItemSelected(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.project[stepName])) {
            if (this.project[stepName].includes(item)) {
                return true;
            }
        }
        else {
            // else it's a single select
            return this.project[stepName] === item;
        }
        return false;
    }
};
NewProjectStepComponent.ctorParameters = () => [];
NewProjectStepComponent.propDecorators = {
    currentStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    currentStepNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    stepsOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    toggleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
NewProjectStepComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-new-project-step',
        template: _new_project_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_project_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewProjectStepComponent);



/***/ }),

/***/ 1014:
/*!*****************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepPickerComponent": () => (/* binding */ StepPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _step_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-picker.component.html?ngResource */ 5338);
/* harmony import */ var _step_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-picker.component.scss?ngResource */ 9526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let StepPickerComponent = class StepPickerComponent {
    constructor() {
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    goToStep(step) {
        this.changeStep.emit(step);
    }
    canChangeStep(step) {
        return this.canChangeToStep(step);
    }
};
StepPickerComponent.ctorParameters = () => [];
StepPickerComponent.propDecorators = {
    currentStepNo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canChangeToStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    changeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
StepPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-step-picker',
        template: _step_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_step_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepPickerComponent);



/***/ }),

/***/ 7425:
/*!***************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3147);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 5117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DashboardPage = class DashboardPage {
    constructor() { }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard-page',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 899:
/*!*************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPage": () => (/* binding */ DesignerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer.page.html?ngResource */ 4652);
/* harmony import */ var _designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page.scss?ngResource */ 6736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DesignerPage = class DesignerPage {
    constructor() { }
};
DesignerPage.ctorParameters = () => [];
DesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-designer-page',
        template: _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DesignerPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _vendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.page.html?ngResource */ 5267);
/* harmony import */ var _vendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.page.scss?ngResource */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let VendorPage = class VendorPage {
    constructor() { }
};
VendorPage.ctorParameters = () => [];
VendorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vendor-page',
        template: _vendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VendorPage);



/***/ }),

/***/ 5731:
/*!************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMoodboardPage": () => (/* binding */ MyMoodboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-moodboard.page.html?ngResource */ 7182);
/* harmony import */ var _my_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-moodboard.page.scss?ngResource */ 5919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MyMoodboardPage = class MyMoodboardPage {
    constructor() { }
};
MyMoodboardPage.ctorParameters = () => [];
MyMoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-moodboard-page',
        template: _my_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyMoodboardPage);



/***/ }),

/***/ 5436:
/*!**************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDesignerPage": () => (/* binding */ BookDesignerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _book_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-designer.page.html?ngResource */ 2759);
/* harmony import */ var _book_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-designer.page.scss?ngResource */ 2605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let BookDesignerPage = class BookDesignerPage {
    constructor() { }
};
BookDesignerPage.ctorParameters = () => [];
BookDesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-book-designer-page',
        template: _book_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_book_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookDesignerPage);



/***/ }),

/***/ 7396:
/*!********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactDesignerPage": () => (/* binding */ ContactDesignerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contact_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-designer.page.html?ngResource */ 4530);
/* harmony import */ var _contact_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-designer.page.scss?ngResource */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ContactDesignerPage = class ContactDesignerPage {
    constructor() { }
};
ContactDesignerPage.ctorParameters = () => [];
ContactDesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact-designer-page',
        template: _contact_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactDesignerPage);



/***/ }),

/***/ 2080:
/*!********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/craftsman-portal/craftsman-portal.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CraftsmanPortalPage": () => (/* binding */ CraftsmanPortalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _craftsman_portal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craftsman-portal.page.html?ngResource */ 53);
/* harmony import */ var _craftsman_portal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./craftsman-portal.page.scss?ngResource */ 6092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CraftsmanPortalPage = class CraftsmanPortalPage {
    constructor() { }
};
CraftsmanPortalPage.ctorParameters = () => [];
CraftsmanPortalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-craftsman-portal-page',
        template: _craftsman_portal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_craftsman_portal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CraftsmanPortalPage);



/***/ }),

/***/ 1505:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/customize-moodboard/customize-moodboard.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizeMoodboardPage": () => (/* binding */ CustomizeMoodboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _customize_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize-moodboard.page.html?ngResource */ 569);
/* harmony import */ var _customize_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize-moodboard.page.scss?ngResource */ 1546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CustomizeMoodboardPage = class CustomizeMoodboardPage {
    constructor() { }
};
CustomizeMoodboardPage.ctorParameters = () => [];
CustomizeMoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-customize-moodboard-page',
        template: _customize_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customize_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomizeMoodboardPage);



/***/ }),

/***/ 8277:
/*!******************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyIntiriPage": () => (/* binding */ MyIntiriPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_intiri_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-intiri.page.html?ngResource */ 7165);
/* harmony import */ var _my_intiri_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-intiri.page.scss?ngResource */ 4723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MyIntiriPage = class MyIntiriPage {
    constructor() { }
};
MyIntiriPage.ctorParameters = () => [];
MyIntiriPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-intiri-page',
        template: _my_intiri_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_intiri_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyIntiriPage);



/***/ }),

/***/ 3735:
/*!**********************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProjectPage": () => (/* binding */ NewProjectPage)
/* harmony export */ });
/* harmony import */ var C_Users_milos_source_repos_Projects_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project.page.html?ngResource */ 5631);
/* harmony import */ var _new_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-project.page.scss?ngResource */ 6882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/create-project-modal/create-project-modal.component */ 390);







let NewProjectPage = class NewProjectPage {
  constructor(modalController) {
    this.modalController = modalController;
    this.steps = [{
      title: 'Select pictures that you like',
      subtitle: 'Decisions are hard, pick as many as you want.',
      data: [{
        id: 1,
        img: 'images/landing-img.png'
      }, {
        id: 2,
        img: 'images/img-01.png'
      }, {
        id: 3,
        img: 'images/landing-img.png'
      }, {
        id: 4,
        img: 'images/intiri-logo.svg'
      }, {
        id: 5,
        img: 'images/landing-img.png'
      }, {
        id: 6,
        img: 'images/landing-img.png'
      }, {
        id: 7,
        img: 'images/landing-img.png'
      }, {
        id: 8,
        img: 'images/img-01.png'
      }, {
        id: 9,
        img: 'images/landing-img.png'
      }, {
        id: 10,
        img: 'images/intiri-logo.svg'
      }, {
        id: 11,
        img: 'images/img-01.png'
      }, {
        id: 12,
        img: 'images/landing-img.png'
      }, {
        id: 13,
        img: 'images/intiri-logo.svg'
      }, {
        id: 14,
        img: 'images/img-01.png'
      }, {
        id: 15,
        img: 'images/landing-img.png'
      }]
    }, {
      title: 'Select the room you want to improve',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: [{
        id: 1,
        icon: 'icon/style.svg',
        title: 'Brush'
      }, {
        id: 2,
        icon: 'icon/room.svg',
        title: 'Bed'
      }]
    }, {
      title: 'Select color pallet',
      subtitle: 'Don’t worry, you can chage color later.',
      data: [{
        id: 1,
        color: '#243c5a',
        title: 'Midnight'
      }, {
        id: 2,
        color: '#3f3cbb',
        title: 'Purple'
      }, {
        id: 3,
        color: '#565584',
        title: 'Metal'
      }, {
        id: 4,
        color: '#3ab7bf',
        title: 'Tahiti'
      }, {
        id: 5,
        color: '#243c5a',
        title: 'Midnight'
      }, {
        id: 6,
        color: '#3f3cbb',
        title: 'Purple'
      }, {
        id: 7,
        color: '#565584',
        title: 'Metal'
      }, {
        id: 8,
        color: '#3ab7bf',
        title: 'Tahiti'
      }, {
        id: 9,
        color: '#243c5a',
        title: 'Midnight'
      }, {
        id: 10,
        color: '#3f3cbb',
        title: 'Purple'
      }, {
        id: 11,
        color: '#565584',
        title: 'Metal'
      }, {
        id: 12,
        color: '#3ab7bf',
        title: 'Tahiti'
      }]
    }, {
      title: 'Select the moodboard you like the most',
      subtitle: 'We have found you style match. Choose moodboard you like the most. ',
      data: []
    }, {
      title: 'This is your style',
      subtitle: 'This style captures the balance between comfort and minimalism characteristic of Scandinavial bright design. This include clean lines, minimal decoration and the importance of artwork. Try to create an environment that encourages feelings of strenght, contentmentt and clean lines. Typicalcoloors are calming and neutral with palettes sticking to whites, grays, greens, black and blue accents. The syle allso reflects the wooden landscape and trees of the Nordic countries.',
      data: []
    }];
    this.project = {
      'style': [],
      'room': null,
      'color-pallete': null,
      'moodboard': null
    };
    this.stepsOrder = {
      0: 'style',
      1: 'room',
      2: 'color-pallete',
      3: 'moodboard',
      4: 'final-result'
    };
    this.currentStepNo = 0;
  }

  ngOnInit() {
    if (!sessionStorage.getItem('draftProjectName')) {
      this.openModal();
    }
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
      case 0:
        {
          return true;
        }

      case 1:
        {
          return this.project['style'].length > 0;
        }

      case 2:
        {
          return this.project['style'].length > 0 && this.project['room'];
        }

      case 3:
        {
          return this.project['style'].length > 0 && this.project['room'] && this.project['color-pallete'];
        }

      case 4:
        {
          return this.project['style'].length > 0 && this.project['room'] && this.project['color-pallete'] && this.project['final-result'];
        }
    }

    return true;
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo]; // check if it's multi-select

    if (Array.isArray(this.project[stepName])) {
      if (this.project[stepName].includes(item)) {
        this.project[stepName] = this.project[stepName].filter(e => e.id !== item.id);
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else {
      // else it's a single select
      this.project[stepName] = this.project[stepName] === item ? null : item;
    }
  }

  openModal() {
    var _this = this;

    return (0,C_Users_milos_source_repos_Projects_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__.CreateProjectModalComponent,
        cssClass: 'modal-css',
        backdropDismiss: false,
        swipeToClose: false
      });
      yield modal.present();
    })();
  }

};

NewProjectPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

NewProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-new-project-page',
  template: _new_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewProjectPage);


/***/ }),

/***/ 3577:
/*!************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreBookSelectionPage": () => (/* binding */ PreBookSelectionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pre_book_selection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-book-selection.page.html?ngResource */ 6488);
/* harmony import */ var _pre_book_selection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pre-book-selection.page.scss?ngResource */ 7899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 2032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 6688);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 2653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ForgotPasswordPage = class ForgotPasswordPage {
    constructor() { }
};
ForgotPasswordPage.ctorParameters = () => [];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgot-password-page',
        template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 8032:
/*!*********************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorksPage": () => (/* binding */ HowItWorksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _how_it_works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-it-works.page.html?ngResource */ 4943);
/* harmony import */ var _how_it_works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-it-works.page.scss?ngResource */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 4808:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var C_Users_milos_source_repos_Projects_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.html?ngResource */ 6663);
/* harmony import */ var _landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.page.scss?ngResource */ 8467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/login/login-modal.component */ 6974);








let LandingPage = class LandingPage {
  constructor(modalController) {
    this.modalController = modalController;
  }

  openLogin() {
    var _this = this;

    return (0,C_Users_milos_source_repos_Projects_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_3__.LoginModalComponent,
        cssClass: 'modal-css'
      });
      yield modal.present();
    })();
  }

  logScrollEnd() {
    var _this2 = this;

    return (0,C_Users_milos_source_repos_Projects_Intiri_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollElement = yield _this2.content.getScrollElement(); // get scroll element

      _this2.isScrolledDown = scrollElement.scrollTop > 50;
    })();
  }

};

LandingPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

LandingPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent]
  }]
};
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LoginPage = class LoginPage {
    constructor() { }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-page',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 2581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProfilePage = class ProfilePage {
    constructor() { }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile-page',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RegisterPage = class RegisterPage {
    constructor() { }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register-page',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 5250:
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-password/reset.password.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page.html?ngResource */ 4367);
/* harmony import */ var _reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss?ngResource */ 6222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ResetPasswordPage = class ResetPasswordPage {
    constructor() { }
};
ResetPasswordPage.ctorParameters = () => [];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reset-password-page',
        template: _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordPage);



/***/ }),

/***/ 8441:
/*!************************************************************************!*\
  !*** ./src/app/pages/shared-guarded-pages/moodboard/moodboard.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodboardPage": () => (/* binding */ MoodboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moodboard.page.html?ngResource */ 3285);
/* harmony import */ var _moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moodboard.page.scss?ngResource */ 2776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MoodboardPage = class MoodboardPage {
    constructor() { }
};
MoodboardPage.ctorParameters = () => [];
MoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-moodboard-page',
        template: _moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoodboardPage);



/***/ }),

/***/ 281:
/*!****************************************************************!*\
  !*** ./src/app/pages/shared-guarded-pages/style/style.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePage": () => (/* binding */ StylePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _style_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.page.html?ngResource */ 1594);
/* harmony import */ var _style_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.page.scss?ngResource */ 9620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let StylePage = class StylePage {
    constructor() { }
};
StylePage.ctorParameters = () => [];
StylePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-style-page',
        template: _style_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_style_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StylePage);



/***/ }),

/***/ 970:
/*!*****************************************************************!*\
  !*** ./src/app/pages/sms-verification/sms-verification.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsVerificationPage": () => (/* binding */ SmsVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sms_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-verification.page.html?ngResource */ 3423);
/* harmony import */ var _sms_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms-verification.page.scss?ngResource */ 87);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SmsVerificationPage = class SmsVerificationPage {
    constructor() { }
    // this called every time when user changed the code
    onCodeChanged(code) {
        console.log('change', code);
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
        console.log('completed', code);
    }
};
SmsVerificationPage.ctorParameters = () => [];
SmsVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sms-verification-page',
        template: _sms_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sms_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SmsVerificationPage);



/***/ }),

/***/ 2340:
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
    production: false
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-46e842f3_js-node_modules_ionic_core_dist_esm_t-5e0416",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-46e842f3_js-node_modules_ionic_core_dist_esm_t-5e0416",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
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
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5721:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "p {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\nion-button {\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    margin-left: -15px;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\nion-button:hover {\n\n    opacity: 0.8\n}\n\nion-row {\n\n    height: 100%\n}\n\nion-col {\n\n    display: flex;\n\n    justify-content: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    ion-col {\n\n        justify-content: center\n    }\n}\n\n.social-logo {\n\n    margin-right: 1rem;\n\n    margin-bottom: 2rem;\n\n    cursor: pointer;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.social-logo:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1024px) {\n\n    .social-logo {\n\n        font-size: 2.25rem;\n\n        line-height: 2.5rem\n    }\n}\n\n.footer-text {\n\n    font-size: 16px;\n\n    font-weight: 400;\n\n    line-height: 26px\n}\n\n@media (min-width: 1024px) {\n\n    .footer-text {\n\n        font-size: 18px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGVBQUE7O0lBQUEsa0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxrQkFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBAYXBwbHkgdGV4dC13aGl0ZVxyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIEBhcHBseSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIG1sLVstMTVweF0gaG92ZXI6b3BhY2l0eS04MCBteS0wXHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgQGFwcGx5IGgtZnVsbFxyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LXN0YXJ0IGxnOmp1c3RpZnktY2VudGVyXHJcbn1cclxuXHJcbi5zb2NpYWwtbG9nbyB7XHJcbiAgQGFwcGx5IHRleHQtd2hpdGUgdGV4dC0yeGwgbGc6dGV4dC00eGwgbXItNCBtYi04IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODBcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICBAYXBwbHkgZm9udC1ub3JtYWwgdGV4dC1bMTZweF0gbGc6dGV4dC1bMThweF0gbGVhZGluZy1bMjZweF1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5225:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".white-header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(241 245 249 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-weight: 700;\n  text-transform: none;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.login-btn {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-primary);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 500;\n  text-transform: none;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.login-btn:hover {\n  opacity: 0.8;\n}\n\n.register-btn {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: transparent;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 500;\n  text-transform: none;\n  color: var(--ion-color-primary);\n}\n\n.register-btn:hover {\n  opacity: 0.8;\n}\n\n.header-wrapper {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 576px) {\n\n  .header-wrapper {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    max-width: 640px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .header-wrapper {\n    max-width: 768px;\n    padding-right: 4rem;\n    padding-left: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .header-wrapper {\n    max-width: 992px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .header-wrapper {\n    max-width: 1024px;\n    padding-right: 12rem;\n    padding-left: 12rem;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .header-wrapper {\n    max-width: 1200px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .header-wrapper {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1340px) {\n\n  .header-wrapper {\n    max-width: 1340px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .header-wrapper {\n    max-width: 1536px;\n  }\n}\n\n.header-wrapper {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    margin-top: 3rem;\n  }\n}\n\n.header-buttons {\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n@media (min-width: 768px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsd0JBQUE7RUFBQSxzQkFBQTtFQUFBLHlEQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxjQUFBO0VBQUEsc0JBQUE7RUFBQSwwQ0FBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxjQUFBO0VBQUEsc0JBQUE7RUFBQSxpQkFBQTtFQUFBLHNDQUFBO0VBQUEsNkJBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsV0FBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxnQkFBQTtJQUFBLG1CQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBLGlCQUFBO0lBQUEsb0JBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSx5QkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUtaGVhZGVyIHtcclxuICBAYXBwbHkgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMFxyXG59XHJcblxyXG4uYnRuIHtcclxuICBAYXBwbHkgbm9ybWFsLWNhc2UgdGV4dC1ibGFjay0xIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWJsYWNrLTIgbXgtMVxyXG59XHJcblxyXG4ubG9naW4tYnRuIHtcclxuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBweC00IG14LTIgaC0xMFxyXG59XHJcblxyXG4ucmVnaXN0ZXItYnRuIHtcclxuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy10cmFuc3BhcmVudCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItcHJpbWFyeSBib3JkZXIgcHgtNCBteC0yIGgtMTBcclxufVxyXG5cclxuLmhlYWRlci13cmFwcGVyIHtcclxuICBAYXBwbHkgY29udGFpbmVyIGZsZXggaXRlbXMtY2VudGVyIHB5LTQgbXQtNCBzbTptdC0xMlxyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4gbWQ6ZmxleCBmbGV4LTEganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC0yXHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-weight: 700;\n  text-transform: none;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.new-project-btn {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-primary);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 500;\n  text-transform: none;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.new-project-btn:hover {\n  opacity: 0.8;\n}\n\n.header-wrapper {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 576px) {\n\n  .header-wrapper {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    max-width: 640px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .header-wrapper {\n    max-width: 768px;\n    padding-right: 4rem;\n    padding-left: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .header-wrapper {\n    max-width: 992px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .header-wrapper {\n    max-width: 1024px;\n    padding-right: 12rem;\n    padding-left: 12rem;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .header-wrapper {\n    max-width: 1200px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .header-wrapper {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1340px) {\n\n  .header-wrapper {\n    max-width: 1340px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .header-wrapper {\n    max-width: 1536px;\n  }\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 40px;\n  width: 40px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsY0FBQTtFQUFBLHNCQUFBO0VBQUEsMENBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxXQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBLGdCQUFBO0lBQUEsbUJBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxnQkFBQTtJQUFBLG1CQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsaUJBQUE7SUFBQSxvQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGlCQUFBO0VBQUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUU7RUFBQSxvQkFBQTtFQUFBLGVBQUE7RUFBQSxzQkFBQTtFQUFBLHdDQUFBO0VBQUEsZUFBQTtFQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgQGFwcGx5IG5vcm1hbC1jYXNlIHRleHQtYmxhY2stMSBmb250LWJvbGQgaG92ZXI6dGV4dC1ibGFjay0yIG14LTE7XHJcbn1cclxuXHJcbi5uZXctcHJvamVjdC1idG4ge1xyXG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBjb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIgcHktNDtcclxufVxyXG5cclxuLmhlYWRlci1idXR0b25zIHtcclxuICBAYXBwbHkgaGlkZGVuIHhsOmZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBnYXAtMiBtbC04O1xyXG59XHJcblxyXG4uaGVhZGVyLWljb24ge1xyXG4gICAgQGFwcGx5IHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLXhsIGJnLWxpZ2h0IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODAgcC0yIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDBweF0gdy1bNDBweF0gbXItNFxyXG59XHJcblxyXG5pb24taGVhZGVyOjphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59Il19 */";

/***/ }),

/***/ 1382:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".create-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.create-btn:hover {\n\n    opacity: 0.8\n}\n\n.cancel-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-primary);\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    color: var(--ion-color-primary)\n}\n\n.cancel-btn:hover {\n\n    opacity: 0.8\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9qZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsMENBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlGOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUU7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBLHdDQUFBOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJjcmVhdGUtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3JlYXRlLWJ0biB7XHJcbiAgICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBweC00IG14LTIgaC0xMFxyXG4gIH1cclxuXHJcbi5jYW5jZWwtYnRuIHtcclxuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy10cmFuc3BhcmVudCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItcHJpbWFyeSBib3JkZXIgcHgtNCBteC0yIGgtMTBcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXHJcbn1cclxuXHJcbi5wbHVzLWljb24td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 9673:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6166:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".step-title {\n\n    margin-top: 0.25rem;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    color: var(--ion-color-black-1)\n}\n\n.step-subtitle {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem;\n\n    color: var(--ion-color-black-3)\n}\n\n.step-item-wrapper {\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    height: 130px;\n\n    width: 100%;\n\n    cursor: pointer;\n\n    border-radius: 1rem;\n\n    border-width: 1px\n}\n\n.step-item-wrapper:hover {\n\n    border-width: 4px;\n\n    opacity: 0.8\n}\n\n@media (min-width: 768px) {\n\n    .step-item-wrapper {\n\n        margin-right: 0.75rem\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .step-item-wrapper {\n\n        height: 180px\n    }\n}\n\n.selected-item {\n\n    border-width: 4px;\n\n    border-color: var(--ion-color-primary)\n}\n\n.bigger-margin {\n\n    margin-top: 3rem\n}\n\n.step-image {\n\n    height: 100%;\n\n    width: 100%;\n\n    border-radius: 0.125rem;\n\n    object-fit: cover;\n\n    padding: 0.5rem\n}\n\n.step-icon-wrapper {\n\n    margin: 0.5rem;\n\n    height: 90%;\n\n    border-radius: 0.125rem;\n\n    background-color: var(--ion-color-light);\n\n    padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n    .step-icon-wrapper {\n\n        padding-top: 50px\n    }\n}\n\n.step-color-wrapper {\n\n    margin: 0.5rem;\n\n    height: 90%;\n\n    border-radius: 0.125rem;\n\n    padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n    .step-color-wrapper {\n\n        padding-top: 50px\n    }\n}\n\n.step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 50px;\n\n    width: 50px\n}\n\n.step-items {\n\n    margin-bottom: 0.75rem;\n\n    max-height: 700px;\n\n    min-height: 490px;\n\n    overflow: auto\n}\n\n.step-items::-webkit-scrollbar {\n\n    width: 4px;\n\n    background-color: transparent;\n\n    opacity: 0\n}\n\n.step-items:hover::-webkit-scrollbar-thumb {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(207 207 207 / var(--tw-bg-opacity))\n}\n\n.step-items::-webkit-scrollbar-thumb {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n\n    transition-duration: 1000ms\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsbUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxlQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsYUFBQTs7SUFBQSxXQUFBOztJQUFBLGVBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUtBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSx1QkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGNBQUE7O0lBQUEsV0FBQTs7SUFBQSx1QkFBQTs7SUFBQSx3Q0FBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxjQUFBOztJQUFBLFdBQUE7O0lBQUEsdUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLHNCQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsVUFBQTs7SUFBQSw2QkFBQTs7SUFBQTtBQUFBOztBQUdEOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0M7O0lBQUEsa0JBQUE7O0lBQUEseURBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJuZXctcHJvamVjdC1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtdGl0bGUge1xyXG4gICAgQGFwcGx5IHRleHQtYmxhY2stMSB0ZXh0LTR4bCBtdC0xXHJcbn1cclxuXHJcbi5zdGVwLXN1YnRpdGxlIHtcclxuICAgIEBhcHBseSB0ZXh0LWJsYWNrLTMgdGV4dC1iYXNlXHJcbn1cclxuXHJcbi5zdGVwLWl0ZW0td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgcm91bmRlZC0yeGwgYm9yZGVyIGhvdmVyOmJvcmRlci00IGhvdmVyOm9wYWNpdHktODAgY3Vyc29yLXBvaW50ZXIgdy1mdWxsIGgtWzEzMHB4XSBsZzpoLVsxODBweF0gbXItMiBtZDptci0zIG10LTRcclxufVxyXG5cclxuLnNlbGVjdGVkLWl0ZW0ge1xyXG4gICAgQGFwcGx5IGJvcmRlci00IGJvcmRlci1wcmltYXJ5XHJcbn1cclxuXHJcbi5iaWdnZXItbWFyZ2luIHtcclxuICAgIEBhcHBseSBtdC0xMlxyXG59XHJcblxyXG5cclxuLnN0ZXAtaW1hZ2Uge1xyXG4gICAgQGFwcGx5IG9iamVjdC1jb3ZlciBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtc20gcC0yXHJcbn1cclxuXHJcbi5zdGVwLWljb24td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgaC1bOTAlXSByb3VuZGVkLXNtIG0tMiBiZy1saWdodCBwdC1bMzBweF0gbGc6cHQtWzUwcHhdXHJcbn1cclxuXHJcbi5zdGVwLWNvbG9yLXdyYXBwZXIge1xyXG4gICAgQGFwcGx5IGgtWzkwJV0gcm91bmRlZC1zbSBtLTIgcHQtWzMwcHhdIGxnOnB0LVs1MHB4XVxyXG59XHJcblxyXG4uc3RlcC1pY29uIHtcclxuICAgIEBhcHBseSBoLVs1MHB4XSB3LVs1MHB4XSBteC1hdXRvXHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zIHtcclxuICAgIEBhcHBseSBtaW4taC1bNDkwcHhdIG1heC1oLVs3MDBweF0gb3ZlcmZsb3ctYXV0byBtYi0zXHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBAYXBwbHkgb3BhY2l0eS0wIHctWzRweF0gYmctdHJhbnNwYXJlbnRcclxuICAgIH1cclxuLnN0ZXAtaXRlbXM6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgQGFwcGx5IGJnLVsjY2ZjZmNmXVxyXG59XHJcbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBAYXBwbHkgYmctd2hpdGUgZHVyYXRpb24tMTAwMFxyXG59Il19 */";

/***/ }),

/***/ 9526:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".project-step {\n\n    margin-left: 5%;\n\n    margin-right: 5%;\n\n    display: inline-block;\n\n    width: 60px;\n\n    cursor: pointer;\n\n    border-color: var(--ion-color-secondary);\n\n    padding-top: 32px;\n\n    padding-bottom: 32px\n}\n\n.project-step:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1200px) {\n\n    .project-step {\n\n        margin-left: auto;\n\n        margin-right: auto;\n\n        display: block;\n\n        border-right-width: 0px;\n\n        border-bottom-width: 1px\n    }\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    cursor: default\n}\n\n.no-border {\n\n    border-width: 0px\n}\n\n.project-step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 30px;\n\n    width: 30px;\n\n    background-size: cover\n}\n\n.project-step-text {\n\n    margin-top: 1rem;\n\n    margin-left: -17px;\n\n    width: 93px;\n\n    text-align: center;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsV0FBQTs7SUFBQSxlQUFBOztJQUFBLHdDQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxpQkFBQTs7UUFBQSxrQkFBQTs7UUFBQSxjQUFBOztRQUFBLHVCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJRTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlGOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZ0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsV0FBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6InN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtc3RlcCB7XHJcbiAgQGFwcGx5IGlubGluZS1ibG9jayB4bC1pb246YmxvY2sgdy1bNjBweF0gcHktWzMycHhdICB4bC1pb246Ym9yZGVyLXItMCB4bC1pb246Ym9yZGVyLWIgYm9yZGVyLXNlY29uZGFyeSBteC1bNSVdIHhsLWlvbjpteC1hdXRvIGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBjdXJzb3ItZGVmYXVsdFxyXG59XHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBAYXBwbHkgYm9yZGVyLTA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0ZXAtaWNvbiB7XHJcbiAgQGFwcGx5IHctWzMwcHhdIGgtWzMwcHhdIG14LWF1dG8gYmctY292ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0ZXAtdGV4dCB7XHJcbiAgQGFwcGx5IHRleHQtY2VudGVyIG10LTQgdGV4dC1wcmltYXJ5IHctWzkzcHhdIG1sLVstMTdweF07XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5117:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6736:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ25lci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1989:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW5kb3IucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5919:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1tb29kYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2605:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rLWRlc2lnbmVyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3043:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWRlc2lnbmVyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6092:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/craftsman-portal/craftsman-portal.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmFmdHNtYW4tcG9ydGFsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1546:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/customize-moodboard/customize-moodboard.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemUtbW9vZGJvYXJkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4723:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbnRpcmkucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6882:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".next-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.next-btn:hover {\n\n    opacity: 0.8\n}\n\n.back-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-primary);\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    color: var(--ion-color-primary)\n}\n\n.back-btn:hover {\n\n    opacity: 0.8\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLDBDQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJRjs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBLDZCQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6Im5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmV4dC1idG4ge1xyXG4gICAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIHJvdW5kZWQteGwgcHgtNCBteC0yIGgtMTBcclxuICB9XHJcblxyXG4uYmFjay1idG4ge1xyXG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXRyYW5zcGFyZW50IHRleHQtcHJpbWFyeSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIGJvcmRlci1wcmltYXJ5IGJvcmRlciBweC00IG14LTIgaC0xMFxyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIEBhcHBseSBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNjBcclxufSJdfQ== */";

/***/ }),

/***/ 7899:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtYm9vay1zZWxlY3Rpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0U7RUFBQSxrQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQTtBQUZBOztBQUtGO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrLTIge1xyXG4gIGNvbG9yOiAjNTU1NTU1XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gIEBhcHBseSBmb250LVsnRmlyYS1TYW5zJ10gdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5zZW5kLWJ0biB7XHJcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMjggaC0xNCB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIG10LTggZm9udC1bJ0ZpcmEtU2FucyddIHRleHQtbGcgZm9udC1zZW1pYm9sZDtcclxuICBiYWNrZ3JvdW5kOiAjOUI3RTYwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3742:
/*!**********************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctaXQtd29ya3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8467:
/*!************************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 2rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 700;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.btn:hover {\n\n    opacity: 0.8\n}\n\n.hero-pencraft {\n\n    margin-bottom: 2rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3rem;\n\n    line-height: 1;\n\n    line-height: 90px;\n\n    color: var(--ion-color-black-2)\n}\n\n@media (min-width: 768px) {\n\n    .hero-pencraft {\n\n        font-size: 3.75rem;\n\n        line-height: 1\n    }\n}\n\n.hero-text {\n\n    margin-bottom: 1.5rem;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 60px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 768px) {\n\n    .hero-text {\n\n        font-size: 3rem;\n\n        line-height: 1;\n\n        line-height: 80px\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text {\n\n        text-align: left;\n\n        font-size: 3.75rem;\n\n        line-height: 1;\n\n        line-height: 90px\n    }\n}\n\n.hero-wrapper {\n\n    margin-left: 1rem;\n\n    margin-right: 1rem;\n\n    margin-bottom: 4rem;\n\n    margin-top: -72px;\n\n    height: 800px;\n\n    border-radius: 1rem;\n\n    background-image: url('/assets/images/landing-img.png');\n\n    background-size: cover\n}\n\n@media (min-width: 768px) {\n\n    .hero-wrapper {\n\n        margin-left: 3rem;\n\n        margin-right: 3rem;\n\n        height: 1030px\n    }\n}\n\n.hero-text-wrapper {\n\n    position: absolute;\n\n    top: 150px;\n\n    display: flex;\n\n    flex: 1 1 0%;\n\n    flex-direction: column;\n\n    align-items: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text-wrapper {\n\n        width: 610px\n    }\n}\n\n.pencraft,  .pencraft-white {\n\n    padding-top: 4rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3.75rem;\n\n    line-height: 1;\n\n    line-height: 70px;\n\n    color: var(--ion-color-black-2)\n}\n\n.pencraft-white {\n\n    padding-top: 0px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-headline,  .landing-headline-white {\n\n    margin-bottom: 1.5rem;\n\n    text-align: left;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 55px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 1024px) {\n\n    .landing-headline,  .landing-headline-white {\n\n        font-size: 3rem;\n\n        line-height: 1\n    }\n}\n\n.landing-headline-white {\n\n    text-align: center;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-text {\n\n    font-size: 18px;\n\n    font-weight: 400;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-2)\n}\n\n.landing-bold {\n\n    font-size: 18px;\n\n    font-weight: 700;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-1)\n}\n\n.landing-img {\n\n    margin: 4rem;\n\n    margin-left: 0px;\n\n    border-radius: 1rem\n}\n\n.quote-icon {\n\n    display: inline-block;\n\n    height: 40px;\n\n    width: 27px;\n\n    background-image: url('/assets/icon/quote.svg')\n}\n\n.arrow-icon {\n\n    display: inline-block;\n\n    height: 20px;\n\n    width: 40px;\n\n    cursor: pointer\n}\n\n.arrow-icon:hover {\n\n    opacity: 0.5\n}\n\n.contact-btn {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.contact-btn:hover {\n\n    opacity: 0.7\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsMENBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLGdDQUFBOztJQUFBLGVBQUE7O0lBQUEsY0FBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUEsZ0JBQUE7O1FBQUEsa0JBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSx1REFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGlCQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxVQUFBOztJQUFBLGFBQUE7O0lBQUEsWUFBQTs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxnQ0FBQTs7SUFBQSxrQkFBQTs7SUFBQSxjQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBS0E7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUE7SUFBQTtBQUFBOztBQUtBOztJQUFBLGtCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxlQUFBOztJQUFBLGtCQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwIG10LThcclxufVxyXG5cclxuLmhlcm8tcGVuY3JhZnQge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTIgZm9udC1BbGxpc29uIHRleHQtNXhsIG1kOnRleHQtNnhsIG1iLTggbGVhZGluZy1bOTBweF1cclxufVxyXG5cclxuLmhlcm8tdGV4dCB7XHJcbiAgQGFwcGx5IHRleHQtYmxhY2stMSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBsZzp0ZXh0LWxlZnQgbWItNiBsZWFkaW5nLVs2MHB4XSBtZDpsZWFkaW5nLVs4MHB4XSBsZzpsZWFkaW5nLVs5MHB4XSBmb250LWJvbGRcclxufVxyXG5cclxuLmhlcm8td3JhcHBlciB7XHJcbiAgQGFwcGx5IGJnLWxhbmRpbmctaW1nIHJvdW5kZWQtMnhsIGJnLWNvdmVyIGgtWzgwMHB4XSBtZDpoLVsxMDMwcHhdIG1iLTE2IG10LVstNzJweF0gbXgtNCBtZDpteC0xMlxyXG59XHJcblxyXG4uaGVyby10ZXh0LXdyYXBwZXIge1xyXG4gIEBhcHBseSBsZzp3LVs2MTBweF0gdG9wLVsxNTBweF0gYWJzb2x1dGUgZmxleCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtc3RhcnRcclxufVxyXG5cclxuLnBlbmNyYWZ0IHtcclxuICBAYXBwbHkgcHQtMTYgdGV4dC1ibGFjay0yIGZvbnQtQWxsaXNvbiB0ZXh0LTZ4bCBsZWFkaW5nLVs3MHB4XVxyXG59XHJcblxyXG4ucGVuY3JhZnQtd2hpdGUge1xyXG4gIEBleHRlbmQgLnBlbmNyYWZ0O1xyXG4gIEBhcHBseSB0ZXh0LXdoaXRlIHB0LTA7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWhlYWRsaW5lIHtcclxuICBAYXBwbHkgdGV4dC1ibGFjay0xIHRleHQtNHhsIGxnOnRleHQtNXhsIHRleHQtbGVmdCBtYi02IGxlYWRpbmctWzU1cHhdIGZvbnQtYm9sZFxyXG59XHJcblxyXG4ubGFuZGluZy1oZWFkbGluZS13aGl0ZSB7XHJcbiAgQGV4dGVuZCAubGFuZGluZy1oZWFkbGluZTtcclxuICBAYXBwbHkgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlcjtcclxufVxyXG5cclxuLmxhbmRpbmctdGV4dCB7XHJcbiAgQGFwcGx5IGZvbnQtbm9ybWFsIHRleHQtYmxhY2stMiB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxyXG59XHJcblxyXG4ubGFuZGluZy1ib2xkIHtcclxuICBAYXBwbHkgZm9udC1ib2xkIHRleHQtYmxhY2stMSB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxyXG59XHJcblxyXG4ubGFuZGluZy1pbWcge1xyXG4gIEBhcHBseSBtLTE2IG1sLTAgcm91bmRlZC0yeGxcclxufVxyXG5cclxuLnF1b3RlLWljb24ge1xyXG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgdy1bMjdweF0gaC1bNDBweF0gYmctcXVvdGVcclxufVxyXG5cclxuLmFycm93LWljb24ge1xyXG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgdy1bNDBweF0gaC1bMjBweF0gaG92ZXI6b3BhY2l0eS01MFxyXG59XHJcblxyXG4uY29udGFjdC1idG4ge1xyXG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTcwIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItd2hpdGUgYm9yZGVyIHB4LTQgbXgtYXV0byBteS0wIGgtMTBcclxufSJdfQ== */";

/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.forgot-btn {\n  margin-top: 1.75rem;\n  border-width: 0px;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #AA4C33;\n  text-transform: none;\n}\n\n.create-btn {\n  display: flex;\n  height: 3.5rem;\n  width: 13rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  border-width: 1px;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #9B7E60;\n  text-transform: none;\n  border-color: #9B7E60;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBO0FBRkE7O0FBTUE7RUFBQSxhQUFBO0VBQUEsY0FBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFIQTs7QUFNRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrLTIge1xyXG4gIGNvbG9yOiAjNTU1NTU1XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTI4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IGZvbnQtWydGaXJhLVNhbnMnXSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmZvcmdvdC1idG4ge1xyXG4gIEBhcHBseSBib3JkZXItMCB0ZXh0LWxnIGZvbnQtWydGaXJhLVNhbnMnXSBmb250LXNlbWlib2xkIG10LTc7XHJcbiAgY29sb3I6ICNBQTRDMzM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGUtYnRuIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyIHctNTIgaC0xNCByb3VuZGVkLTJ4bCBmb250LVsnRmlyYS1TYW5zJ10gdGV4dC1sZyBmb250LXNlbWlib2xkO1xyXG4gIGNvbG9yOiAjOUI3RTYwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzlCN0U2MDtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.register-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 8rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsY0FBQTtFQUFBLFdBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsbUJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBO0FBRkE7O0FBS0Y7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XHJcbiAgY29sb3I6ICM1NTU1NTVcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgQGFwcGx5IGZvbnQtWydGaXJhLVNhbnMnXSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ibGFjayBtdC0xNDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJ0biB7XHJcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMzIgaC0xNCB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIG10LTggZm9udC1bJ0ZpcmEtU2FucyddIHRleHQtbGcgZm9udC1zZW1pYm9sZDtcclxuICBiYWNrZ3JvdW5kOiAjOUI3RTYwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgY2FyZXQtY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbi5ib3JkZXItYmxhY2stMiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6222:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.reset-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 12rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsY0FBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsbUJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBO0FBRkE7O0FBS0Y7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrLTIge1xyXG4gIGNvbG9yOiAjNTU1NTU1XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gIEBhcHBseSBmb250LVsnRmlyYS1TYW5zJ10gdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5yZXNldC1idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTQ4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IGZvbnQtWydGaXJhLVNhbnMnXSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 2776:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/shared-guarded-pages/moodboard/moodboard.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb29kYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9620:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared-guarded-pages/style/style.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 87:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sms-verification/sms-verification.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.register-btn {\n  margin-top: 3.5rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 12rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Fira-Sans\";\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #AA4C33;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n\ncode-input {\n  --color: #555555;\n  --item-spacing: 20px;\n  --item-border: 1px solid #555555;\n  --item-border-radius: 15px;\n  --item-border-bottom: 1px solid #555555;\n  --item-border-has-value: 1px solid #555555;\n  --item-border-bottom-has-value: 1px solid #555555;\n  --item-border-focused: 1px solid #555555;\n  --item-border-bottom-focused: 1px solid #555555;\n  --item-shadow-focused: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUdFO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsMENBQUE7RUFDQSxvQkFBQTtFQUNBO0FBRkE7O0FBTUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxjQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGtCQUFBO0VBQUEsYUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7RUFDQTtBQUZBOztBQUtGO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQkFBQTtBQUNGIiwiZmlsZSI6InNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrLTIge1xyXG4gIGNvbG9yOiAjNTU1NTU1XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1idG4ge1xyXG4gIEBhcHBseSBmb250LVsnRmlyYS1TYW5zJ10gdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTQ4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IGZvbnQtWydGaXJhLVNhbnMnXSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnNlbmQtYnRuIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1sZyBtdC02IGZvbnQtWydGaXJhLVNhbnMnXSBmb250LXNlbWlib2xkO1xyXG4gIGNvbG9yOiAjQUE0QzMzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgY2FyZXQtY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbi5ib3JkZXItYmxhY2stMiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmNvZGUtaW5wdXQge1xyXG4gIC0tY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1pdGVtLXNwYWNpbmc6IDIwcHg7XHJcbiAgLS1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItaGFzLXZhbHVlOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1oYXMtdmFsdWU6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItZm9jdXNlZDogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20tZm9jdXNlZDogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLXNoYWRvdy1mb2N1c2VkOiAwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 1757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-footer>\r\n  <div class=\"bg-dark min-h-[500px] py-[50px] lg:pt-[120px]\">\r\n    <ion-row>\r\n      <ion-col size=\"8\" offset=\"2\"  size-lg=\"2\" offset-lg=\"3\">\r\n        <ion-text class=\"text-left\">\r\n          <p class=\"text-2xl font-bold text-left\">White Logo.</p> <br/>\r\n          <p class=\"footer-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit.</p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <hr/>\r\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"1\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\r\n        <ion-text>\r\n          <p class=\"uppercase\">Navigation</p><br/>\r\n            <ion-button (click)=\"scrollTo('home')\" fill=\"clear\">Home</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('how-it-works')\" fill=\"clear\">How it works</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('stories')\" fill=\"clear\">Stories</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('contact')\" fill=\"clear\">Contact</ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"2\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\r\n        <ion-text>\r\n          <p class=\"uppercase\">Social Media</p><br/>\r\n          <ion-icon class=\"social-logo\" name=\"logo-facebook\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-instagram\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-linkedin\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-twitter\"></ion-icon><br/>\r\n\r\n          <ion-button fill=\"clear\">Terms & Conditions</ion-button><br/>\r\n          <ion-button fill=\"clear\">Privacy Policy</ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 4982:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [class.white-header]=\"isScrolledDown\" class=\"bg-transparent sticky top-0 z-[100]\" >\r\n  <div class=\"header-wrapper\">\r\n    <a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\r\n      <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n    </a>\r\n      <ion-buttons class=\"header-buttons\">\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('home')\">Home</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('how-it-works')\">How It Works</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('stories')\">Stories</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('contact')\">Contact</ion-button>\r\n        <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">Login</ion-button>\r\n        <ion-button fill=\"clear\" class=\"register-btn\" routerLink=\"/register\" routerDirection=\"root\">Register</ion-button>\r\n      </ion-buttons>\r\n      <div class=\"flex md:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/login\" >Login</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/register\" >Register</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n\r\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n  <ion-header class=\"\" id=\"main-content\">\r\n    <ion-toolbar class=\"header-wrapper\">\r\n      <ion-buttons slot=\"start\" class=\"\">\r\n        <ion-button slot=\"start\">\r\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n          </a>\r\n        </ion-button>\r\n        <section class=\"header-buttons\">\r\n        <ion-button fill=\"clear\" class=\"btn\" routerLink=\"/my-intiri\" routerDirection=\"root\">My Intiri</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\">Book a designer</ion-button>\r\n        </section>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"header-buttons justify-end\">\r\n        <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n          <img src=\"../../../assets/images/landing-img.png\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n        </a>\r\n        <ion-icon class=\"header-icon\" name=\"chatbox-ellipses-sharp\"></ion-icon>\r\n        <ion-icon class=\"header-icon\" name=\"settings-sharp\"></ion-icon>\r\n        <ion-button fill=\"clear\" class=\"new-project-btn\" (click)=\"removeProjectDraft()\" href=\"/new-project\">Create new project</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n  <ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n    <ion-header>\r\n      <ion-toolbar translucent>\r\n        <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n          <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n        </a></ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label class=\"cursor-pointer\" routerLink=\"/my-intiri\" >My Intiri</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"cursor-pointer\" routerLink=\"#\" >Book a designer</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"cursor-pointer\" routerLink=\"#\" >My Profile</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"cursor-pointer\" routerLink=\"#\" >Settings</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"cursor-pointer\" routerLink=\"#\" >Create new project</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>";

/***/ }),

/***/ 4618:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper\"><div class=\"bg-plus h-[34px] w-[34px] mx-auto mt-[5px]\"></div></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black1\">Let's create new project</h2>\r\n          <p class=\"text-center text-base text-black2\">Name the project first.</p>\r\n        </div>\r\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\r\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\r\n          <div class=\"rounded-md shadow-sm -space-y-px\">\r\n            <div>\r\n              <label for=\"project-name\" class=\"sr-only\">Project name</label>\r\n              <input id=\"project-name\" name=\"email\" type=\"email\" autocomplete=\"email\" [(ngModel)]=\"projectName\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[8px] focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm\" placeholder=\"Project name\">\r\n            </div>\r\n          </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button  class=\"cancel-btn\" (click)=\"dismiss()\" routerLink=\"/my-intiri\" routerDirection=\"root\">Cancel</ion-button>\r\n            <ion-button class=\"create-btn\" [class.disabled]=\"!isValidProjectName()\" (click)=\"startProjectCreation()\">Create</ion-button>\r\n          </ion-buttons>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1070:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <img class=\"mx-auto h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\" alt=\"Workflow\">\r\n          <h2 class=\"mt-6 text-center text-3xl font-extrabold text-gray-900\">Sign in to your account</h2>\r\n        </div>\r\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\r\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\r\n          <div class=\"rounded-md shadow-sm -space-y-px\">\r\n            <div>\r\n              <label for=\"email-address\" class=\"sr-only\">Email address</label>\r\n              <input id=\"email-address\" name=\"email\" type=\"email\" autocomplete=\"email\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\" placeholder=\"Email address\">\r\n            </div>\r\n            <div>\r\n              <label for=\"password\" class=\"sr-only\">Password</label>\r\n              <input id=\"password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex items-center justify-between\">\r\n            <div class=\"flex items-center\">\r\n              <input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\" class=\"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded\">\r\n              <label for=\"remember-me\" class=\"ml-2 block text-sm text-gray-900\"> Remember me </label>\r\n            </div>\r\n\r\n            <div class=\"text-sm\">\r\n              <a href=\"#\" class=\"font-medium text-indigo-600 hover:text-indigo-500\"> Forgot your password? </a>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button type=\"submit\" class=\"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\r\n              <span class=\"absolute left-0 inset-y-0 flex items-center pl-3\">\r\n                <!-- Heroicon name: solid/lock-closed -->\r\n                <svg class=\"h-5 w-5 text-indigo-500 group-hover:text-indigo-400\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                  <path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\" />\r\n                </svg>\r\n              </span>\r\n              Sign in\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 952:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div >\r\n  <h2 class=\"step-title\">{{currentStep.title}}</h2>\r\n  <p class=\"step-subtitle\">{{currentStep.subtitle}}</p>\r\n  <ion-grid class=\"step-items\">\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of currentStep.data\" (click)=\"toggleItem(item)\" size=\"5.5\" size-sm=\"3.75\" class=\"step-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.title\">\r\n        <img *ngIf=\"item.img\" src=\"../../../assets/{{item.img}}\" class=\"step-image\" alt=\"style-img\"/>\r\n        <div *ngIf=\"item.icon\" class=\"step-icon-wrapper\" >\r\n          <img src=\"../../../assets/{{item.icon}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n        </div>\r\n        <div *ngIf=\"item.color\" class=\"step-color-wrapper\" [ngStyle]=\"{background: item.color}\"></div>\r\n        <p *ngIf=\"item.title\" class=\"font-bold mt-6\">{{item.title}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>";

/***/ }),

/***/ 5338:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-light xl-ion:w-[240px] xl-ion:h-[680px] rounded-lg text-center\">\r\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-style\"></div>\r\n    <p class=\"project-step-text\">Style</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\r\n    <div class=\"w-[30px] h-[22px] mx-auto bg-cover bg-room\"></div>\r\n    <p class=\"project-step-text\">Room</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-color-pallete\"></div>\r\n    <p class=\"project-step-text\">Color Pallete</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 3\" [class.disabled]=\"!canChangeStep(3)\" (click)=\"goToStep(3)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-moodboard\"></div>\r\n    <p class=\"project-step-text\">Moodboard</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 4\" [class.disabled]=\"!canChangeStep(4)\" (click)=\"goToStep(4)\" class=\"project-step no-border\">\r\n    <div class=\"project-step-icon bg-final-result\"></div>\r\n    <p class=\"project-step-text\">Final Result</p>\r\n  </section>\r\n</div>\r\n";

/***/ }),

/***/ 3147:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 4652:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 5267:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 7182:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 2759:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 4530:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 53:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/craftsman-portal/craftsman-portal.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 569:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/customize-moodboard/customize-moodboard.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 7165:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <p class=\"text-center text-4xl mt-32\">MY INTIRI HOMEPAGE</p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5631:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"px-[2%] xs:px-[5%] 2xl:container mt-[30px]\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3\">\r\n          <app-step-picker\r\n            (changeStep)=\"goToStep($event)\"\r\n            [canChangeToStep]=\"canChangeToStep\"\r\n            [currentStepNo]=\"currentStepNo\"\r\n            [project]=\"project\"\r\n            [steps]=\"steps\"\r\n          ></app-step-picker>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"9\">\r\n          <app-new-project-step\r\n            (toggleSelection)=\"toggleItem($event)\"\r\n            [project]=\"project\"\r\n            [stepsOrder]=\"stepsOrder\"\r\n            [currentStepNo]=\"currentStepNo\"\r\n            [currentStep]=\"steps[currentStepNo]\"\r\n          ></app-new-project-step>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"3\">\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button\r\n              class=\"back-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n              (click)=\"backStep()\"\r\n              >Back</ion-button\r\n            >\r\n            <ion-button\r\n              class=\"next-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\r\n              (click)=\"nextStep()\"\r\n              >Next</ion-button\r\n            >\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6488:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 6688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Login</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold font-['Fira-Sans'] mt-7\">Forgot password?</h1>\r\n          <p class=\"text-lg font-['Fira-Sans'] black-2\">\r\n            Please enter your email address to reset your password.\r\n          </p>\r\n          <div class=\"font-['Fira-Sans'] mt-8\">\r\n            <span class=\"text-sm black-2\">Email</span>\r\n            <ion-input type=\"email\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"send-btn\">Send</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4943:
/*!**********************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 6663:
/*!************************************************************!*\
  !*** ./src/app/pages/landing/landing.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content\r\n[scrollEvents]=\"true\"\r\n(ionScroll)=\"logScrollEnd()\">\r\n  <div class=\"bg-white\">\r\n    <div>\r\n      <app-header-landing [isScrolledDown]=\"isScrolledDown\"></app-header-landing>\r\n      <div class=\"hero-wrapper\">\r\n\r\n        <!-- <div class=\"justify-center items-center flex flex-col h-full\">\r\n          <ion-button class=\"btn\" fill=\"clear\" (click)=\"openLogin()\">Modal</ion-button>\r\n        </div> -->\r\n\r\n        <!-- Hero Text -->\r\n        <div class=\"container relative\">\r\n          <div class=\"hero-text-wrapper\">\r\n            <p class=\"hero-pencraft\">Welcome to Intiri</p>\r\n            <p class=\"hero-text\">Get <span class=\"text-primary\">IDEAS</span> for furnishing and decorating your home!</p>\r\n            <ion-buttons size=\"small\">\r\n            <ion-button class=\"btn\">Find your style</ion-button>\r\n            </ion-buttons>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Text 1 -->\r\n      <ion-grid id=\"how-it-works\">\r\n        <ion-row class=\"container\">\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\r\n            <img src=\"../../../assets/images/01.png\" alt=\"\">\r\n            <p class=\"pencraft\">How it works</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-buttons>\r\n              <ion-button class=\"btn\">Find your style</ion-button>\r\n            </ion-buttons>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Text 2 -->\r\n      <ion-grid>\r\n        <ion-row class=\"container flex-col-reverse xs:flex-row \">\r\n          <ion-col size=\"12\" size-sm  class=\"pt-32 pr-11 pl-11 md:pl-0\">\r\n            <img src=\"../../../assets/images/02.png\" alt=\"\">\r\n            <p class=\"pencraft\">How it works</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-buttons>\r\n              <ion-button class=\"btn\">Find your style</ion-button>\r\n            </ion-buttons>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      <!-- Text 3 -->\r\n      <ion-grid class=\"mb-12\">\r\n        <ion-row class=\"container\">\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\r\n            <img src=\"../../../assets/images/03.png\" alt=\"\">\r\n            <p class=\"pencraft\">How it works</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-buttons>\r\n              <ion-button class=\"btn\">Find your style</ion-button>\r\n            </ion-buttons>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Stories / Testimonials -->\r\n      <ion-grid id=\"stories\" class=\"bg-light bg-cover min-h-[1030px]\">\r\n        <ion-row class=\"container relative py-[30px] xl:py-[310px]\">\r\n          <ion-col size=\"12\" size-xl=\"3.5\"  class=\"ion-align-self-center\">\r\n            <p class=\"pencraft\">Stories</p>\r\n            <p class=\"landing-headline\">You said <br/> about us</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"3.75\" offset-xl=\"0.75\" class=\"border border-black rounded-2xl p-8 mt-4 xl:mt-0\">\r\n            <div class=\"mb-2\">\r\n              <span class='quote-icon'></span>\r\n              <span class='quote-icon ml-1'></span>\r\n            </div>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.</p><br/>\r\n            <p class=\"landing-text\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris.</p>\r\n            <p class=\"landing-bold mt-4\">John Doe</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"3.75\" offset-xl=\"0.25\"  class=\"border border-black rounded-2xl p-8 mt-4 xl:mt-0\">\r\n            <div class=\"mb-2\">\r\n              <span class='quote-icon'></span>\r\n              <span class='quote-icon ml-1'></span>\r\n            </div>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-bold mt-4\">John Doe</p>\r\n          </ion-col>\r\n          <ion-col size=\"5\" offset=\"7\" size-sm=\"2\" offset-sm=\"10\" size-xl=\"1.5\" offset-xl=\"11\" class=\"mt-3\">\r\n            <div>\r\n              <span class='arrow-icon bg-arrow-left'></span>\r\n              <span class='arrow-icon bg-arrow-right ml-4'></span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Contact Us -->\r\n      <div id=\"contact\" class=\"bg-primary bg-cover h-[480px] text-center pt-[140px]\">\r\n        <p class=\"pencraft-white\">Contact us</p>\r\n        <p class=\"landing-headline-white\">Don't hesitate to say hi</p>\r\n        <ion-buttons>\r\n          <ion-button href=\"mailto:office@intiri.com\" class=\"contact-btn\">office@intiri.com</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\">\r\n          <h1 class=\"font-['Allison'] text-7xl mt-16 black-2\">Welcome back</h1>\r\n          <h1 class=\"text-5xl font-semibold font-['Fira-Sans']\">Login</h1>\r\n          <p class=\"text-lg font-['Fira-Sans'] black-2\">\r\n            Manage your account, create and edit projects, collaborate on design and more.\r\n          </p>\r\n          <div class=\"font-['Fira-Sans'] mt-8\">\r\n            <span class=\"text-sm black-2\">Email</span>\r\n            <ion-input type=\"email\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n          <div class=\"font-['Fira-Sans'] mt-7\">\r\n            <span class=\"text-sm black-2\">Password</span>\r\n            <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n              <ion-input type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n              <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"login-btn\">Login</ion-button>\r\n            <ion-button fill=\"clear\" class=\"forgot-btn\" routerLink=\"/forgot-password\" routerDirection=\"root\">Forgot password?</ion-button>\r\n            <p class=\"font-['Fira-Sans'] text-lg black-2 mt-24\">Don't have an account?</p>\r\n            <ion-button fill=\"clear\" class=\"create-btn\" routerLink=\"/register\" routerDirection=\"root\">Create an account</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Login</p>\r\n          </ion-button>\r\n          <h1 class=\"font-['Allison'] text-7xl mt-0 black-2\">Start your journey</h1>\r\n          <h1 class=\"text-5xl font-semibold font-['Fira-Sans']\">Create an account</h1>\r\n          <p class=\"text-lg font-['Fira-Sans'] black-2\">\r\n            Manage your account, create and edit projects, collaborate on design and more.\r\n          </p>\r\n          <div class=\"font-['Fira-Sans'] mt-8\">\r\n            <span class=\"text-sm black-2\">First and last name</span>\r\n            <ion-input type=\"name\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n          <div class=\"font-['Fira-Sans'] mt-7\">\r\n            <span class=\"text-sm black-2\">Email</span>\r\n            <ion-input type=\"email\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n          <div class=\"font-['Fira-Sans'] mt-7\">\r\n            <span class=\"text-sm black-2\">Password</span>\r\n            <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n              <ion-input type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n              <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"font-['Fira-Sans'] mt-7\">\r\n            <span class=\"text-sm black-2\">Repeat password</span>\r\n            <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n              <ion-input type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n              <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"register-btn\">Register</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4367:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Login</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold font-['Fira-Sans'] mt-7\">Reset password</h1>\r\n          <p class=\"text-lg font-['Fira-Sans'] black-2\">\r\n            Please enter your new password.\r\n          </p>\r\n          <div class=\"font-['Fira-Sans'] mt-8\">\r\n            <span class=\"text-sm black-2\">Password</span>\r\n            <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n              <ion-input type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n              <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"font-['Fira-Sans'] mt-7\">\r\n            <span class=\"text-sm black-2\">Repeat password</span>\r\n            <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n              <ion-input type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n              <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"reset-btn\">Reset password</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 3285:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/shared-guarded-pages/moodboard/moodboard.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 1594:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared-guarded-pages/style/style.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 3423:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sms-verification/sms-verification.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\">\r\n          <ion-button fill=\"clear\" class=\"register-btn\" routerLink=\"/register\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Create an account</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold font-['Fira-Sans']\">Sms verification</h1>\r\n          <p class=\"text-lg font-['Fira-Sans'] black-2\">\r\n            An sms with 6-digit verification code was sent to your phone.\r\n          </p>\r\n          <div class=\"mt-8\">\r\n            <code-input [codeLength]=\"6\" (codeChanged)=\"onCodeChanged($event)\" (codeCompleted)=\"onCodeCompleted($event)\">\r\n\r\n            </code-input>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"btn\">Proceed to app</ion-button>\r\n            <ion-button fill=\"clear\" class=\"send-btn\">Send again</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map