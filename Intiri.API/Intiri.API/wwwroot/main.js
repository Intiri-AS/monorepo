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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 124);
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
/* harmony import */ var _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/end-user-pages/pricing-plans/pricing-plans.page */ 9320);
/* harmony import */ var _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/end-user-pages/project-details/project-details.page */ 7807);
/* harmony import */ var _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/end-user-pages/moodboard-details/moodboard-details.page */ 8974);
/* harmony import */ var _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/end-user-pages/messenger/messenger.page */ 3947);
/* harmony import */ var _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/end-user-pages/designer-profile/designer-profile.page */ 9783);
/* harmony import */ var _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/end-user-pages/payment-details/payment-details.page */ 5643);






























const routes = [
    {
        path: '',
        redirectTo: 'my-intiri',
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
        path: 'designer-profile',
        component: _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_25__.DesignerProfilePage
    },
    {
        path: 'payment-details',
        component: _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_26__.PaymentDetailsPage
    },
    {
        path: 'craftsman-portal',
        component: _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_7__.CraftsmanPortalPage
    },
    {
        path: 'pricing-plans',
        component: _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_21__.PricingPlansPage
    },
    {
        path: 'messenger',
        component: _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_24__.MessengerPage
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
        path: 'project-details',
        component: _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_22__.ProjectDetailsPage
    },
    {
        path: 'moodboard-details',
        component: _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_23__.MoodboardDetailsPage
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
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_29__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/account.service */ 9876);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/project.service */ 354);






let AppComponent = class AppComponent {
    constructor(accountService, projectService) {
        this.accountService = accountService;
        this.projectService = projectService;
    }
    ngOnInit() {
        this.setCurrentUser();
        this.setCurrentProject();
    }
    setCurrentUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.accountService.setCurrentUser(user);
    }
    setCurrentProject() {
        const project = JSON.parse(sessionStorage.getItem('project'));
        console.log(project);
        this.projectService.setCurrentProject(project);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _services_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ionic/angular */ 3819);
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
/* harmony import */ var _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/end-user-pages/pricing-plans/pricing-plans.page */ 9320);
/* harmony import */ var _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/end-user-pages/project-details/project-details.page */ 7807);
/* harmony import */ var _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/end-user-pages/moodboard-details/moodboard-details.page */ 8974);
/* harmony import */ var _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/end-user-pages/messenger/messenger.page */ 3947);
/* harmony import */ var _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/end-user-pages/designer-profile/designer-profile.page */ 9783);
/* harmony import */ var _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/end-user-pages/payment-details/payment-details.page */ 5643);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 7425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 5731);
/* harmony import */ var _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/shared-guarded-pages/style/style.page */ 281);
/* harmony import */ var _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/shared-guarded-pages/moodboard/moodboard.page */ 8441);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/header-landing/header-landing.component */ 8021);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/step-picker/step-picker.component */ 1014);
/* harmony import */ var _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/new-project-step/new-project-step.component */ 8735);
/* harmony import */ var _components_profile_img_section_profile_img_section_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/profile-img-section/profile-img-section.component */ 4529);
/* harmony import */ var _components_profile_info_section_profile_info_section_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/profile-info-section/profile-info-section.component */ 4091);
/* harmony import */ var _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/modals/login/login-modal.component */ 6974);
/* harmony import */ var _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/modals/logout-modal/logout-modal.component */ 7147);
/* harmony import */ var _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/modals/create-project-modal/create-project-modal.component */ 390);
/* harmony import */ var _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/modals/book-designer-modal/book-designer-modal.component */ 2064);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! angular-code-input */ 3891);









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
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_40__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_41__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_2__.LandingPage, _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage, _pages_register_register_page__WEBPACK_IMPORTED_MODULE_4__.RegisterPage, _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_5__.HowItWorksPage, _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_6__.ProfilePage, _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordPage, _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordPage,
            _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_9__.SmsVerificationPage,
            _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_10__.NewProjectPage, _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_11__.PreBookSelectionPage, _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_12__.MyIntiriPage, _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_13__.CustomizeMoodboardPage, _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_14__.CraftsmanPortalPage, _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_15__.ContactDesignerPage, _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_16__.BookDesignerPage,
            _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_18__.ProjectDetailsPage, _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_19__.MoodboardDetailsPage, _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_17__.PricingPlansPage, _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_20__.MessengerPage, _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_21__.DesignerProfilePage, _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_22__.PaymentDetailsPage,
            _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_23__.DashboardPage, _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_24__.DesignerPage, _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_25__.VendorPage,
            _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_26__.MyMoodboardPage,
            _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_27__.StylePage, _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_28__.MoodboardPage,
            _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_30__.HeaderLandingComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_29__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__.FooterComponent,
            _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_33__.NewProjectStepComponent, _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_32__.StepPickerComponent,
            _components_profile_img_section_profile_img_section_component__WEBPACK_IMPORTED_MODULE_34__.ProfileImgSectionComponent, _components_profile_info_section_profile_info_section_component__WEBPACK_IMPORTED_MODULE_35__.ProfileInfoSectionComponent,
            _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_36__.LoginModalComponent, _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_37__.LogoutModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_38__.CreateProjectModalComponent, _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_39__.BookDesignerModalComponent
        ],
        entryComponents: [
            _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_36__.LoginModalComponent, _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_37__.LogoutModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_38__.CreateProjectModalComponent, _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_39__.BookDesignerModalComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_42__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_43__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_45__.ReactiveFormsModule,
            angular_code_input__WEBPACK_IMPORTED_MODULE_46__.CodeInputModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_47__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_43__.IonicRouteStrategy }
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
/* harmony import */ var _home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/project.model */ 2744);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/logout-modal/logout-modal.component */ 7147);









let HeaderComponent = class HeaderComponent {
  constructor(modalController, projectService) {
    this.modalController = modalController;
    this.projectService = projectService;
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

  openLogoutModal() {
    var _this = this;

    return (0,_home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_5__.LogoutModalComponent,
        cssClass: 'modal-css'
      });
      yield modal.present();
    })();
  }

};

HeaderComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService
}];

HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderComponent);


/***/ }),

/***/ 2064:
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDesignerModalComponent": () => (/* binding */ BookDesignerModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _book_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-designer-modal.component.html?ngResource */ 1731);
/* harmony import */ var _book_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-designer-modal.component.scss?ngResource */ 829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let BookDesignerModalComponent = class BookDesignerModalComponent {
    constructor(modalController, nav) {
        this.modalController = modalController;
        this.nav = nav;
        this.price = 950;
        this.totalPrice = 0;
        this.items = [
            {
                id: 1, name: 'Room sketch'
            },
            {
                id: 2, name: 'Color advice'
            },
            {
                id: 3, name: 'Moodboard adjustments'
            },
            {
                id: 4, name: '2D & 3D drawings'
            },
            {
                id: 5, name: 'Select products'
            },
            {
                id: 6, name: 'Lining plan'
            },
            {
                id: 7, name: 'Decoration'
            },
            {
                id: 8, name: 'Other questions'
            }
        ];
    }
    totalPriceSum(event) {
        const numberOfConsultations = event.detail.value;
        const reg = new RegExp(/^[1-9]\d*$/g);
        if (reg.test(numberOfConsultations)) {
            this.totalPrice = this.price * numberOfConsultations;
        }
        else {
            this.totalPrice = 0;
        }
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    redirectToDesigner() {
        this.modalController.dismiss();
        this.nav.navigateRoot('/designer-profile');
    }
};
BookDesignerModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
BookDesignerModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-book-designer-modal',
        template: _book_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_book_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookDesignerModalComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_project_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project-modal.component.html?ngResource */ 4618);
/* harmony import */ var _create_project_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project-modal.component.scss?ngResource */ 1382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/project.model */ 2744);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ 354);







let CreateProjectModalComponent = class CreateProjectModalComponent {
    constructor(modalController, projectService) {
        this.modalController = modalController;
        this.projectService = projectService;
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
    dismiss() {
        this.modalController.dismiss({ 'dismissed': true });
    }
};
CreateProjectModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService }
];
CreateProjectModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

/***/ 7147:
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutModalComponent": () => (/* binding */ LogoutModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _logout_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout-modal.component.html?ngResource */ 8832);
/* harmony import */ var _logout_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-modal.component.scss?ngResource */ 4377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);






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
        this.nav.navigateRoot('/login');
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_project_step_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project-step.component.html?ngResource */ 952);
/* harmony import */ var _new_project_step_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-step.component.scss?ngResource */ 6166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);





let NewProjectStepComponent = class NewProjectStepComponent {
    constructor() {
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
        this.toggleSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    toggleItem(item) {
        this.toggleSelection.emit(item);
    }
    isItemSelected(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.project[stepName])) {
            if (this.project[stepName].some(e => JSON.stringify(e) === JSON.stringify(item))) {
                return true;
            }
        }
        else {
            // else it's a single select
            return JSON.stringify(this.project[stepName]) === JSON.stringify(item);
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

/***/ 4529:
/*!*********************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileImgSectionComponent": () => (/* binding */ ProfileImgSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_img_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-img-section.component.html?ngResource */ 9624);
/* harmony import */ var _profile_img_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-img-section.component.scss?ngResource */ 7575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProfileImgSectionComponent = class ProfileImgSectionComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileImgSectionComponent.ctorParameters = () => [];
ProfileImgSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_info_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-info-section.component.html?ngResource */ 1457);
/* harmony import */ var _profile_info_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-info-section.component.scss?ngResource */ 8397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProfileInfoSectionComponent = class ProfileInfoSectionComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileInfoSectionComponent.ctorParameters = () => [];
ProfileInfoSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile-info-section',
        template: _profile_info_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_info_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileInfoSectionComponent);



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
        this.page = 'create-project';
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    goToStep(step) {
        this.changeStep.emit(step);
    }
    isEmpty(object) {
        return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
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

/***/ 2744:
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    //TODO This is example for User model
    constructor() {
        this.name = '';
        this.styleImages = [];
        this.room = {};
        this.color = {};
        this.moodboard = {};
    }
}


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
/* harmony import */ var _home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contact_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-designer.page.html?ngResource */ 4530);
/* harmony import */ var _contact_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-designer.page.scss?ngResource */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/book-designer-modal/book-designer-modal.component */ 2064);







let ContactDesignerPage = class ContactDesignerPage {
  constructor(modalController) {
    this.modalController = modalController;
    this.designers = [{
      image: '../../../../assets/images/landing-img.png',
      name: 'Sheldon Cooper',
      logo: '../../../../assets/images/landing-img.png',
      designs: 120,
      rating: 4.5
    }, {
      image: '../../../../assets/images/landing-img.png',
      name: 'Mary Jane',
      logo: '../../../../assets/images/landing-img.png',
      designs: 160,
      rating: 4
    }, {
      image: '../../../../assets/images/landing-img.png',
      name: 'Marco Geller',
      logo: '../../../../assets/images/landing-img.png',
      designs: 100,
      rating: 3.7
    }, {
      image: '../../../../assets/images/landing-img.png',
      name: 'Sheldon Cooper',
      logo: '../../../../assets/images/landing-img.png',
      designs: 120,
      rating: 4.5
    }, {
      image: '../../../../assets/images/landing-img.png',
      name: 'Mary Jane',
      logo: '../../../../assets/images/landing-img.png',
      designs: 160,
      rating: 4
    }, {
      image: '../../../../assets/images/landing-img.png',
      name: 'Marco Geller',
      logo: '../../../../assets/images/landing-img.png',
      designs: 100,
      rating: 3.7
    }];
  }

  paymentModal() {
    var _this = this;

    return (0,_home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__.BookDesignerModalComponent,
        cssClass: 'book-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

ContactDesignerPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

ContactDesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-contact-designer-page',
  template: _contact_designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_contact_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ContactDesignerPage);


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
    constructor() {
        this.steps = [
            {
                title: 'Select colors',
                data: [
                    { id: 1, color: '#243c5a', title: 'Midnight' },
                    { id: 2, color: '#3f3cbb', title: 'Purple' },
                    { id: 3, color: '#565584', title: 'Metal' },
                    { id: 4, color: '#3ab7bf', title: 'Tahiti' },
                    { id: 5, color: '#243c5a', title: 'Midnight' },
                    { id: 6, color: '#3f3cbb', title: 'Purple' },
                    { id: 7, color: '#565584', title: 'Metal' },
                    { id: 8, color: '#3ab7bf', title: 'Tahiti' },
                    { id: 9, color: '#243c5a', title: 'Midnight' },
                    { id: 10, color: '#3f3cbb', title: 'Purple' },
                    { id: 11, color: '#565584', title: 'Metal' },
                    { id: 12, color: '#3ab7bf', title: 'Tahiti' },
                ],
            },
            {
                title: 'Select materials',
                data: [
                    { id: 1, img: 'images/landing-img.png', title: 'Wood' },
                    { id: 2, img: 'images/img-01.png', title: 'Ceramic' },
                    { id: 3, img: 'images/landing-img.png', title: 'Wood' },
                    { id: 4, img: 'images/intiri-logo.svg', title: 'Wool' },
                    { id: 5, img: 'images/landing-img.png', title: 'Wood' },
                    { id: 6, img: 'images/landing-img.png', title: 'Wood' },
                    { id: 7, img: 'images/landing-img.png', title: 'Wood' }
                ],
            },
            {
                title: 'Select products',
                data: [
                    { id: 1, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 2, img: 'images/img-01.png', title: 'Table' },
                    { id: 3, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 4, img: 'images/intiri-logo.svg', title: 'Sofa' },
                    { id: 5, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 6, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 7, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 8, img: 'images/img-01.png', title: 'Table' },
                    { id: 9, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 10, img: 'images/intiri-logo.svg', title: 'Sofa' },
                    { id: 11, img: 'images/img-01.png', title: 'Table' },
                    { id: 12, img: 'images/landing-img.png', title: 'Chair' },
                    { id: 13, img: 'images/intiri-logo.svg', title: 'Sofa' },
                ],
            }
        ];
        this.moodboard = {
            'color-pallete': [],
            'materials': [],
            'products': []
        };
        this.stepsOrder = {
            0: 'color-pallete',
            1: 'materials',
            2: 'products',
        };
        this.currentStepNo = 0;
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
                return this.moodboard['color-pallete'].length > 0;
            }
            case 2: {
                return this.moodboard['color-pallete'].length > 0 && this.moodboard['materials'].length > 0;
            }
        }
        return true;
    }
    validateData() {
        return this.moodboard['color-pallete'].length > 0 && this.moodboard['materials'].length > 0 && this.moodboard['products'].length > 0;
    }
    toggleItem(item) {
        const stepName = this.stepsOrder[this.currentStepNo];
        // check if it's multi-select
        if (Array.isArray(this.moodboard[stepName])) {
            if (this.moodboard[stepName].includes(item)) {
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

/***/ 9783:
/*!********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerProfilePage": () => (/* binding */ DesignerProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-profile.page.html?ngResource */ 5662);
/* harmony import */ var _designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-profile.page.scss?ngResource */ 7927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DesignerProfilePage = class DesignerProfilePage {
    constructor() { }
};
DesignerProfilePage.ctorParameters = () => [];
DesignerProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-designer-profile-page',
        template: _designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DesignerProfilePage);



/***/ }),

/***/ 3947:
/*!******************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessengerPage": () => (/* binding */ MessengerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _messenger_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messenger.page.html?ngResource */ 780);
/* harmony import */ var _messenger_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger.page.scss?ngResource */ 4013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MessengerPage = class MessengerPage {
    constructor() { }
    ngOnInit() {
    }
};
MessengerPage.ctorParameters = () => [];
MessengerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-messenger',
        template: _messenger_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_messenger_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessengerPage);



/***/ }),

/***/ 8974:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodboardDetailsPage": () => (/* binding */ MoodboardDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _moodboard_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moodboard-details.page.html?ngResource */ 4326);
/* harmony import */ var _moodboard_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moodboard-details.page.scss?ngResource */ 7017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MoodboardDetailsPage = class MoodboardDetailsPage {
    constructor() {
        this.parts = [
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Parkett'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Couch'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Boot'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Carpet'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Floor'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: '6634 / Soft Touch'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Walls'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Desk'
            }
        ];
    }
};
MoodboardDetailsPage.ctorParameters = () => [];
MoodboardDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-moodboard-details-page',
        template: _moodboard_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_moodboard_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoodboardDetailsPage);



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
    constructor() {
        this.projects = [
            {
                projectName: 'Vintage',
                moodboard: '2',
                pieces: '20',
                updated: '1 week',
                image: '../../../../assets/images/landing-img.png'
            },
            {
                projectName: 'Industrial',
                moodboard: '3',
                pieces: '25',
                updated: '1 day',
                image: '../../../../assets/images/landing-img.png'
            },
            {
                projectName: 'Minimal',
                moodboard: '1',
                pieces: '5',
                updated: '3 week',
                image: '../../../../assets/images/landing-img.png'
            },
            {
                projectName: 'Funky',
                moodboard: '0',
                pieces: '20',
                updated: '1 day',
                image: '../../../../assets/images/landing-img.png'
            },
        ];
        this.news = [
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Andy Miller',
                news: 'New moodboard'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Andy Miller',
                news: 'New moodboard'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Andy Miller',
                news: 'New moodboard'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Andy Miller',
                news: 'New moodboard'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Andy Miller',
                news: 'New moodboard'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Andy Miller',
                news: 'New moodboard'
            },
        ];
    }
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
/* harmony import */ var _home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project.page.html?ngResource */ 5631);
/* harmony import */ var _new_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-project.page.scss?ngResource */ 2569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/create-project-modal/create-project-modal.component */ 390);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 354);








let NewProjectPage = class NewProjectPage {
  constructor(modalController, projectService) {
    this.modalController = modalController;
    this.projectService = projectService;
    this.steps = [{
      title: 'Select pictures that you like',
      subtitle: 'Decisions are hard, pick as many as you want.',
      data: []
    }, {
      title: 'Select the room you want to improve',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: []
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
      data: []
    }];
    this.project = null;
    this.stepsOrder = {
      0: 'styleImages',
      1: 'room',
      2: 'color',
      3: 'moodboard',
      4: 'final-result'
    };
    this.currentStepNo = 0;
  }

  ngOnInit() {
    this.projectService.currentProject$.subscribe(project => {
      this.project = project;

      if (!project.name) {
        this.openModal();
      }
    });
    this.projectService.getStyleImages().subscribe(res => {
      this.steps[0]['data'] = res;
    });
    this.projectService.getRooms().subscribe(res => {
      this.steps[1]['data'] = res;
    });
    this.projectService.getColors().subscribe(res => {
      this.steps[2]['data'] = res;
    });
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
      this.projectService.setCurrentProject(this.project);
    }
  }

  nextStep() {
    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
      this.projectService.setCurrentProject(this.project);
    }
  }

  goToStep(stepNo) {
    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
      this.projectService.setCurrentProject(this.project);
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
          return this.project.styleImages.length > 0;
        }

      case 2:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room);
        }

      case 3:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && !this.isEmpty(this.project.color);
        }

      case 4:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && !this.isEmpty(this.project.color) && !this.isEmpty(this.project.moodboard);
        }
    }

    return false;
  }

  isEmpty(object) {
    return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo]; // check if it's multi-select

    if (Array.isArray(this.project[stepName])) {
      if (this.project[stepName].some(e => JSON.stringify(e) === JSON.stringify(item))) {
        this.project[stepName] = this.project[stepName].filter(e => e.id !== item.id);
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else {
      // else it's a single select
      this.project[stepName] = JSON.stringify(this.project[stepName]) === JSON.stringify(item) ? null : item;
    }
  }

  openModal() {
    var _this = this;

    return (0,_home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService
}];

NewProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-new-project-page',
  template: _new_project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewProjectPage);


/***/ }),

/***/ 5643:
/*!******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPage": () => (/* binding */ PaymentDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details.page.html?ngResource */ 4238);
/* harmony import */ var _payment_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page.scss?ngResource */ 4400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 9320:
/*!**************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pricing-plans/pricing-plans.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingPlansPage": () => (/* binding */ PricingPlansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pricing_plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-plans.page.html?ngResource */ 4657);
/* harmony import */ var _pricing_plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing-plans.page.scss?ngResource */ 394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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

/***/ 7807:
/*!******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsPage": () => (/* binding */ ProjectDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _project_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.page.html?ngResource */ 5461);
/* harmony import */ var _project_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.page.scss?ngResource */ 3908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProjectDetailsPage = class ProjectDetailsPage {
    constructor() {
        this.moodboards = [
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'moodboard 1',
                pieces: 20,
                updated: '1 week'
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'moodboard 2',
                pieces: 10,
                updated: '1 day'
            }
        ];
    }
};
ProjectDetailsPage.ctorParameters = () => [];
ProjectDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-project-details-page',
        template: _project_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectDetailsPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 6688);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 2653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);







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
/* harmony import */ var _home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.html?ngResource */ 6663);
/* harmony import */ var _landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.page.scss?ngResource */ 8467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);






let LandingPage = class LandingPage {
  constructor() {
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

    return (0,_home_strahinja_Documents_Intiri_backend_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollElement = yield _this.content.getScrollElement(); // get scroll element

      _this.isScrolledDown = scrollElement.scrollTop > 50;
    })();
  }

};

LandingPage.ctorParameters = () => [];

LandingPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['slides']
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent]
  }]
};
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);






let LoginPage = class LoginPage {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.model = {};
    }
    ngOnInit() {
        this.accountService.currentUser$.subscribe(loggedUser => {
            if (loggedUser) {
                this.router.navigateByUrl('/my-intiri');
            }
        });
    }
    login() {
        this.accountService.login(this.model).subscribe(response => {
            this.router.navigateByUrl('/sms-verification');
        }, error => {
            console.log(error);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);







let RegisterPage = class RegisterPage {
    constructor(accountService, fb, router) {
        this.accountService = accountService;
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.intitializeForm();
    }
    intitializeForm() {
        this.registerForm = this.fb.group({
            username: [''],
            phoneNumber: [''],
        });
    }
    register() {
        this.accountService.register(this.registerForm.value).subscribe(response => {
            this.router.navigateByUrl('/sms-verification');
        }, error => {
            console.log(error);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page.html?ngResource */ 4367);
/* harmony import */ var _reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss?ngResource */ 6222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 9876);







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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sms_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-verification.page.html?ngResource */ 3423);
/* harmony import */ var _sms_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms-verification.page.scss?ngResource */ 87);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let SmsVerificationPage = class SmsVerificationPage {
    constructor(router) {
        this.router = router;
        // This is only for testing and presenatation purpose
        this.loginCode = '111111';
        this.registerCode = '222222';
        this.resetPassCode = '333333';
    }
    ngOnInit() {
    }
    // this called every time when user changed the code
    onCodeChanged(code) {
        //console.log('change', code);
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
        // This is only for testing and presenatation purpose
        if (this.loginCode === code) {
            this.router.navigateByUrl('/my-intiri');
        }
        else if (this.resetPassCode === code) {
            this.router.navigateByUrl('/reset-password');
        }
        else if (this.registerCode === code) {
            this.router.navigateByUrl('/login');
        }
        // Reset code input fields
        this.codeInput.reset();
    }
};
SmsVerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SmsVerificationPage.propDecorators = {
    codeInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['codeInput',] }]
};
SmsVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sms-verification-page',
        template: _sms_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sms_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SmsVerificationPage);



/***/ }),

/***/ 9876:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);






let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(model) {
        return this.http.post(this.apiUrl + 'account/login', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                this.currentUserSource.next(user);
            }
        }));
    }
    register(model) {
        return this.http.post(this.apiUrl + 'account/register', model);
    }
    setCurrentUser(user) {
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }
    forgotPassword(model) {
        return this.http.patch(this.apiUrl + 'account/forgot-password', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
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
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
AccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AccountService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project.model */ 2744);






let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.currentProjectSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.currentProject$ = this.currentProjectSource.asObservable();
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
    getColors() {
        return this.http.get(this.apiUrl + 'colors');
    }
    getRooms() {
        return this.http.get(this.apiUrl + 'rooms');
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ProjectService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ProjectService);



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
    production: false,
    apiUrl: 'https://localhost:7004/'
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
module.exports = "p {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\nion-button {\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    margin-left: -15px;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\nion-button:hover {\n\n    opacity: 0.8\n}\n\nion-row {\n\n    height: 100%\n}\n\nion-col {\n\n    display: flex;\n\n    justify-content: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    ion-col {\n\n        justify-content: center\n    }\n}\n\n.social-logo {\n\n    margin-right: 1rem;\n\n    margin-bottom: 2rem;\n\n    cursor: pointer;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.social-logo:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1024px) {\n\n    .social-logo {\n\n        font-size: 2.25rem;\n\n        line-height: 2.5rem\n    }\n}\n\n.footer-text {\n\n    font-size: 16px;\n\n    font-weight: 400;\n\n    line-height: 26px\n}\n\n@media (min-width: 1024px) {\n\n    .footer-text {\n\n        font-size: 18px\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGVBQUE7O0lBQUEsa0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsYUFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxrQkFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgQGFwcGx5IHRleHQtd2hpdGVcbn1cbmlvbi1idXR0b24ge1xuICBAYXBwbHkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSBtbC1bLTE1cHhdIGhvdmVyOm9wYWNpdHktODAgbXktMFxufVxuaW9uLXJvdyB7XG4gIEBhcHBseSBoLWZ1bGxcbn1cblxuaW9uLWNvbCB7XG4gIEBhcHBseSBmbGV4IGp1c3RpZnktc3RhcnQgbGc6anVzdGlmeS1jZW50ZXJcbn1cblxuLnNvY2lhbC1sb2dvIHtcbiAgQGFwcGx5IHRleHQtd2hpdGUgdGV4dC0yeGwgbGc6dGV4dC00eGwgbXItNCBtYi04IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODBcbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgQGFwcGx5IGZvbnQtbm9ybWFsIHRleHQtWzE2cHhdIGxnOnRleHQtWzE4cHhdIGxlYWRpbmctWzI2cHhdXG59XG4iXX0= */";

/***/ }),

/***/ 5225:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".white-header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(241 245 249 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-weight: 700;\n  text-transform: none;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.login-btn {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-primary);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 500;\n  text-transform: none;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.login-btn:hover {\n  opacity: 0.8;\n}\n\n.register-btn {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: transparent;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 500;\n  text-transform: none;\n  color: var(--ion-color-primary);\n}\n\n.register-btn:hover {\n  opacity: 0.8;\n}\n\n.header-wrapper {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 576px) {\n\n  .header-wrapper {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    max-width: 640px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .header-wrapper {\n    max-width: 768px;\n    padding-right: 4rem;\n    padding-left: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .header-wrapper {\n    max-width: 992px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .header-wrapper {\n    max-width: 1024px;\n    padding-right: 12rem;\n    padding-left: 12rem;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .header-wrapper {\n    max-width: 1200px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .header-wrapper {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1340px) {\n\n  .header-wrapper {\n    max-width: 1340px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .header-wrapper {\n    max-width: 1536px;\n  }\n}\n\n.header-wrapper {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    margin-top: 3rem;\n  }\n}\n\n.header-buttons {\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n@media (min-width: 768px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsd0JBQUE7RUFBQSxzQkFBQTtFQUFBLHlEQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxjQUFBO0VBQUEsc0JBQUE7RUFBQSwwQ0FBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxjQUFBO0VBQUEsc0JBQUE7RUFBQSxpQkFBQTtFQUFBLHNDQUFBO0VBQUEsNkJBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsV0FBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxnQkFBQTtJQUFBLG1CQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBLGlCQUFBO0lBQUEsb0JBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSx5QkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUtaGVhZGVyIHtcbiAgQGFwcGx5IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0xMDBcbn1cblxuLmJ0biB7XG4gIEBhcHBseSBub3JtYWwtY2FzZSB0ZXh0LWJsYWNrLTEgZm9udC1ib2xkIGhvdmVyOnRleHQtYmxhY2stMiBteC0xXG59XG5cbi5sb2dpbi1idG4ge1xuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBweC00IG14LTIgaC0xMFxufVxuXG4ucmVnaXN0ZXItYnRuIHtcbiAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctdHJhbnNwYXJlbnQgdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIHJvdW5kZWQteGwgYm9yZGVyLXByaW1hcnkgYm9yZGVyIHB4LTQgbXgtMiBoLTEwXG59XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIEBhcHBseSBjb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIgcHktNCBtdC00IHNtOm10LTEyXG59XG5cbi5oZWFkZXItYnV0dG9ucyB7XG4gIEBhcHBseSBoaWRkZW4gbWQ6ZmxleCBmbGV4LTEganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC0yXG59XG5cbmlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 5413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-weight: 700;\n  text-transform: none;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.new-project-btn {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-primary);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 500;\n  text-transform: none;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.new-project-btn:hover {\n  opacity: 0.8;\n}\n\n.header-wrapper {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 576px) {\n\n  .header-wrapper {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    max-width: 640px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .header-wrapper {\n    max-width: 768px;\n    padding-right: 4rem;\n    padding-left: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .header-wrapper {\n    max-width: 992px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .header-wrapper {\n    max-width: 1024px;\n    padding-right: 12rem;\n    padding-left: 12rem;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .header-wrapper {\n    max-width: 1200px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .header-wrapper {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1340px) {\n\n  .header-wrapper {\n    max-width: 1340px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .header-wrapper {\n    max-width: 1536px;\n  }\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 40px;\n  width: 40px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-popover {\n  --backdrop-opacity: 0;\n  --offset-y: 10px;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsY0FBQTtFQUFBLHNCQUFBO0VBQUEsMENBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxXQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBLGdCQUFBO0lBQUEsbUJBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxnQkFBQTtJQUFBLG1CQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsaUJBQUE7SUFBQSxvQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGlCQUFBO0VBQUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUU7RUFBQSxvQkFBQTtFQUFBLGVBQUE7RUFBQSxzQkFBQTtFQUFBLHdDQUFBO0VBQUEsZUFBQTtFQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7O0FBR0o7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIEBhcHBseSBub3JtYWwtY2FzZSB0ZXh0LWJsYWNrLTEgZm9udC1ib2xkIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xufVxuXG4ubmV3LXByb2plY3QtYnRuIHtcbiAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIHJvdW5kZWQteGwgcHgtNCBteC0yIGgtMTA7XG59XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIEBhcHBseSBjb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIgcHktNDtcbn1cblxuLmhlYWRlci1idXR0b25zIHtcbiAgQGFwcGx5IGhpZGRlbiB4bDpmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIgZ2FwLTIgbWwtODtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLTIgbXItMlxufVxuXG4uaGVhZGVyLXByb2ZpbGUtaW1nIHtcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDBweF0gdy1bNDBweF0gbXItNFxufVxuXG5pb24tcG9wb3ZlciB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMDtcbiAgLS1vZmZzZXQteTogMTBweDtcbn1cblxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 829:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 152px;\n  padding-right: 152px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-checkbox {\n  --border-color: #555555;\n  --border-radius: 5px;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n}\n\n.cancel-btn {\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  text-transform: none;\n}\n\n.proceed-btn {\n  margin-left: 1.25rem;\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: var(--ion-color-primary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVzaWduZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxhQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBR0U7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHNDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSwrQkFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxvQkFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsc0NBQUE7RUFBQSwwQ0FBQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBO0FBREEiLCJmaWxlIjoiYm9vay1kZXNpZ25lci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBAYXBwbHkgcHgtWzE1MnB4XSBweS0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1jb2xvcjogIzU1NTU1NTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhbmNlbC1idG4ge1xuICBAYXBwbHkgdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLTJ4bCB0ZXh0LWxnIGZvbnQtbWVkaXVtIGgtWzUycHhdIHAtMCBweC00O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnByb2NlZWQtYnRuIHtcbiAgQGFwcGx5IHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IGJnLXByaW1hcnkgcm91bmRlZC0yeGwgdGV4dC1sZyBmb250LW1lZGl1bSBoLVs1MnB4XSBwLTAgcHgtNCBtbC01O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1382:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".create-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.create-btn:hover {\n\n    opacity: 0.8\n}\n\n.cancel-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-primary);\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    color: var(--ion-color-primary)\n}\n\n.cancel-btn:hover {\n\n    opacity: 0.8\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9qZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsMENBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlGOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUU7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBLHdDQUFBOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJjcmVhdGUtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNyZWF0ZS1idG4ge1xuICAgIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwXG4gIH1cblxuLmNhbmNlbC1idG4ge1xuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy10cmFuc3BhcmVudCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItcHJpbWFyeSBib3JkZXIgcHgtNCBteC0yIGgtMTBcbn1cblxuLmRpc2FibGVkIHtcbiAgQGFwcGx5IHBvaW50ZXItZXZlbnRzLW5vbmUgb3BhY2l0eS02MFxufVxuXG4ucGx1cy1pY29uLXdyYXBwZXIge1xuICAgIEBhcHBseSBteC1hdXRvIHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgYmctbGlnaHQgcC0yIGgtWzYwcHhdIHctWzYwcHhdXG59Il19 */";

/***/ }),

/***/ 9673:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4377:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".logout-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.logout-btn:hover {\n\n    opacity: 0.8\n}\n\n.cancel-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-primary);\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    color: var(--ion-color-primary)\n}\n\n.cancel-btn:hover {\n\n    opacity: 0.8\n}\n\n.logout-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 60px;\n\n    width: 60px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLDBDQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJRjs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBLDZCQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxZQUFBOztJQUFBLFdBQUE7O0lBQUEscUJBQUE7O0lBQUEsd0NBQUE7O0lBQUEsZUFBQTs7SUFBQSxpQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImxvZ291dC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ291dC1idG4ge1xuICAgIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwXG4gIH1cblxuLmNhbmNlbC1idG4ge1xuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy10cmFuc3BhcmVudCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItcHJpbWFyeSBib3JkZXIgcHgtNCBteC0yIGgtMTBcbn1cblxuLmxvZ291dC1pY29uLXdyYXBwZXIge1xuICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxufSJdfQ== */";

/***/ }),

/***/ 6166:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".step-title {\n\n    margin-top: 0.25rem;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    color: var(--ion-color-black-1)\n}\n\n.step-subtitle {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem;\n\n    color: var(--ion-color-black-3)\n}\n\n.step-item-wrapper {\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    height: 130px;\n\n    width: 100%;\n\n    cursor: pointer;\n\n    border-radius: 1rem;\n\n    border-width: 1px\n}\n\n.step-item-wrapper:hover {\n\n    border-width: 4px;\n\n    opacity: 0.8\n}\n\n@media (min-width: 768px) {\n\n    .step-item-wrapper {\n\n        margin-right: 0.75rem\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .step-item-wrapper {\n\n        height: 180px\n    }\n}\n\n.selected-item {\n\n    border-width: 4px;\n\n    border-color: var(--ion-color-primary)\n}\n\n.bigger-margin {\n\n    margin-bottom: 2.5rem\n}\n\n.step-image {\n\n    height: 100%;\n\n    width: 100%;\n\n    border-radius: 0.125rem;\n\n    object-fit: cover;\n\n    padding: 0.5rem\n}\n\n.step-icon-wrapper {\n\n    margin: 0.5rem;\n\n    height: 90%;\n\n    border-radius: 0.125rem;\n\n    background-color: var(--ion-color-light);\n\n    padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n    .step-icon-wrapper {\n\n        padding-top: 50px\n    }\n}\n\n.step-color-wrapper {\n\n    margin: 0.5rem;\n\n    height: 90%;\n\n    border-radius: 0.125rem;\n\n    padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n    .step-color-wrapper {\n\n        padding-top: 50px\n    }\n}\n\n.step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 50px;\n\n    width: 50px\n}\n\n.step-items {\n\n    margin-bottom: 0.75rem;\n\n    max-height: 700px;\n\n    min-height: 490px;\n\n    overflow: auto\n}\n\n.step-items::-webkit-scrollbar {\n\n    width: 5px;\n\n    background-color: transparent;\n\n    opacity: 0\n}\n\n.step-items:hover::-webkit-scrollbar-thumb {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(207 207 207 / var(--tw-bg-opacity))\n}\n\n.step-items::-webkit-scrollbar-thumb {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(223 223 223 / var(--tw-bg-opacity));\n\n    transition-duration: 1000ms\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0lBQUEsbUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxlQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsYUFBQTs7SUFBQSxXQUFBOztJQUFBLGVBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSx1QkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGNBQUE7O0lBQUEsV0FBQTs7SUFBQSx1QkFBQTs7SUFBQSx3Q0FBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxjQUFBOztJQUFBLFdBQUE7O0lBQUEsdUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLHNCQUFBOztJQUFBLGlCQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsVUFBQTs7SUFBQSw2QkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsa0JBQUE7O0lBQUEseURBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJuZXctcHJvamVjdC1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtdGl0bGUge1xuICBAYXBwbHkgdGV4dC1ibGFjay0xIHRleHQtNHhsIG10LTE7XG59XG5cbi5zdGVwLXN1YnRpdGxlIHtcbiAgQGFwcGx5IHRleHQtYmxhY2stMyB0ZXh0LWJhc2U7XG59XG5cbi5zdGVwLWl0ZW0td3JhcHBlciB7XG4gIEBhcHBseSByb3VuZGVkLTJ4bCBib3JkZXIgaG92ZXI6Ym9yZGVyLTQgaG92ZXI6b3BhY2l0eS04MCBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgaC1bMTMwcHhdIGxnOmgtWzE4MHB4XSBtci0yIG1kOm1yLTMgbXQtNDtcbn1cblxuLnNlbGVjdGVkLWl0ZW0ge1xuICBAYXBwbHkgYm9yZGVyLTQgYm9yZGVyLXByaW1hcnk7XG59XG5cbi5iaWdnZXItbWFyZ2luIHtcbiAgQGFwcGx5IG1iLTEwO1xufVxuXG4uc3RlcC1pbWFnZSB7XG4gIEBhcHBseSBvYmplY3QtY292ZXIgaC1mdWxsIHctZnVsbCByb3VuZGVkLXNtIHAtMjtcbn1cblxuLnN0ZXAtaWNvbi13cmFwcGVyIHtcbiAgQGFwcGx5IGgtWzkwJV0gcm91bmRlZC1zbSBtLTIgYmctbGlnaHQgcHQtWzMwcHhdIGxnOnB0LVs1MHB4XTtcbn1cblxuLnN0ZXAtY29sb3Itd3JhcHBlciB7XG4gIEBhcHBseSBoLVs5MCVdIHJvdW5kZWQtc20gbS0yIHB0LVszMHB4XSBsZzpwdC1bNTBweF07XG59XG5cbi5zdGVwLWljb24ge1xuICBAYXBwbHkgaC1bNTBweF0gdy1bNTBweF0gbXgtYXV0bztcbn1cblxuLnN0ZXAtaXRlbXMge1xuICBAYXBwbHkgbWluLWgtWzQ5MHB4XSBtYXgtaC1bNzAwcHhdIG92ZXJmbG93LWF1dG8gbWItMztcbn1cblxuLnN0ZXAtaXRlbXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgQGFwcGx5IG9wYWNpdHktMCB3LVs1cHhdIGJnLXRyYW5zcGFyZW50O1xufVxuLnN0ZXAtaXRlbXM6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgQGFwcGx5IGJnLVsjY2ZjZmNmXTtcbn1cbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIEBhcHBseSBiZy1bI2RmZGZkZl0gZHVyYXRpb24tMTAwMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7575:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".change-img-btn {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-bottom: 2rem;\n    height: 2.5rem;\n    border-radius: 0.75rem;\n    border-width: 1px;\n    border-color: var(--ion-color-primary);\n    background-color: transparent;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: 500;\n    text-transform: none;\n    color: var(--ion-color-primary)\n}\n.change-img-btn:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW1nLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxtQkFBQTtJQUFBLG9CQUFBO0lBQUEsbUJBQUE7SUFBQSxjQUFBO0lBQUEsc0JBQUE7SUFBQSxpQkFBQTtJQUFBLHNDQUFBO0lBQUEsNkJBQUE7SUFBQSxrQkFBQTtJQUFBLG1CQUFBO0lBQUEsZ0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUEiLCJmaWxlIjoicHJvZmlsZS1pbWctc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtaW1nLWJ0biB7XG4gICAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctdHJhbnNwYXJlbnQgdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIHJvdW5kZWQteGwgYm9yZGVyLXByaW1hcnkgYm9yZGVyIHB4LTQgbXgtMiBtYi04IGgtMTBcbn0iXX0= */";

/***/ }),

/***/ 8397:
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.phone-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    min-width: 130px\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW5mby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJwcm9maWxlLWluZm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcbiAgICBAYXBwbHkgbXQtNCBteC0yIGZsZXgtMVxufVxuXG4ucGhvbmUtaW5wdXQge1xuICAgIEBhcHBseSBtdC00IG14LTIgbWluLXctWzEzMHB4XVxufVxuXG5pb24taW5wdXQge1xuICAgIEBhcHBseSBoLTEyXG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00XG59Il19 */";

/***/ }),

/***/ 9526:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".project-step {\n\n    margin-left: 5%;\n\n    margin-right: 5%;\n\n    display: inline-block;\n\n    width: 60px;\n\n    cursor: pointer;\n\n    border-color: var(--ion-color-secondary);\n\n    padding-top: 32px;\n\n    padding-bottom: 32px\n}\n\n.project-step:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1200px) {\n\n    .project-step {\n\n        margin-left: auto;\n\n        margin-right: auto;\n\n        display: block;\n\n        border-right-width: 0px;\n\n        border-bottom-width: 1px\n    }\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    cursor: default\n}\n\n.no-border {\n\n    border-width: 0px\n}\n\n.project-step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 30px;\n\n    width: 30px;\n\n    background-size: cover\n}\n\n.project-step-text {\n\n    margin-top: 1rem;\n\n    margin-left: -17px;\n\n    width: 93px;\n\n    text-align: center;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsV0FBQTs7SUFBQSxlQUFBOztJQUFBLHdDQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxpQkFBQTs7UUFBQSxrQkFBQTs7UUFBQSxjQUFBOztRQUFBLHVCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJRTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlGOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZ0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsV0FBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6InN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtc3RlcCB7XG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgeGwtaW9uOmJsb2NrIHctWzYwcHhdIHB5LVszMnB4XSAgeGwtaW9uOmJvcmRlci1yLTAgeGwtaW9uOmJvcmRlci1iIGJvcmRlci1zZWNvbmRhcnkgbXgtWzUlXSB4bC1pb246bXgtYXV0byBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTgwO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIEBhcHBseSBwb2ludGVyLWV2ZW50cy1ub25lIGN1cnNvci1kZWZhdWx0XG59XG5cbi5uby1ib3JkZXIge1xuICBAYXBwbHkgYm9yZGVyLTA7XG59XG5cbi5wcm9qZWN0LXN0ZXAtaWNvbiB7XG4gIEBhcHBseSB3LVszMHB4XSBoLVszMHB4XSBteC1hdXRvIGJnLWNvdmVyO1xufVxuXG4ucHJvamVjdC1zdGVwLXRleHQge1xuICBAYXBwbHkgdGV4dC1jZW50ZXIgbXQtNCB0ZXh0LXByaW1hcnkgdy1bOTNweF0gbWwtWy0xN3B4XTtcbn1cbiJdfQ== */";

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
module.exports = ".next-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.next-btn:hover {\n\n    opacity: 0.8\n}\n\n.back-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-primary);\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    color: var(--ion-color-primary)\n}\n\n.back-btn:hover {\n\n    opacity: 0.8\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZS1tb29kYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsMENBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG9CQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiY3VzdG9taXplLW1vb2Rib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV4dC1idG4ge1xuICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBweC00IG14LTIgaC0xMDtcbn1cblxuLmJhY2stYnRuIHtcbiAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctdHJhbnNwYXJlbnQgdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIHJvdW5kZWQteGwgYm9yZGVyLXByaW1hcnkgYm9yZGVyIHB4LTQgbXgtMiBoLTEwO1xufVxuXG4uZGlzYWJsZWQge1xuICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwO1xufVxuIl19 */";

/***/ }),

/***/ 7927:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".contact-btn {\n  margin-top: 30px;\n  margin-bottom: 60px;\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: var(--ion-color-primary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  text-transform: none\n}\n\n.time-btn {\n  height: 46px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-light);\n  background-color: var(--ion-color-light);\n  padding: 0px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  text-transform: none\n}\n\n.book-btn {\n  margin-left: 1.25rem;\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: var(--ion-color-primary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  text-transform: none\n}\n\n.cancel-btn {\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  color: var(--ion-color-primary);\n  text-transform: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsZ0JBQUE7RUFBQSxtQkFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsc0NBQUE7RUFBQSwwQ0FBQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQTtBQURBOztBQUtBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsWUFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLG9CQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxzQ0FBQTtFQUFBLDBDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHNDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsK0JBQUE7RUFDQTtBQURBIiwiZmlsZSI6ImRlc2lnbmVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtYnRuIHtcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgdGV4dC1sZyBoLVs1MnB4XSBwLTAgcHgtNCBtdC1bMzBweF0gbWItWzYwcHhdO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnRpbWUtYnRuIHtcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC0yeGwgYmctbGlnaHQgdGV4dC1ibGFjayB0ZXh0LWxnIGgtWzQ2cHhdIHAtMCBweC0yIGZvbnQtbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmJvb2stYnRuIHtcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgdGV4dC1sZyBoLVs1MnB4XSBwLTAgcHgtNCBtbC01O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNhbmNlbC1idG4ge1xuICBAYXBwbHkgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHJvdW5kZWQtMnhsIHRleHQtcHJpbWFyeSB0ZXh0LWxnIGgtWzUycHhdIHAtMCBweC00O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 4013:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".chat {\n\n    height: 490px;\n\n    overflow: auto;\n\n    border-bottom-width: 1px;\n\n    border-color: var(--ion-color-secondary);\n\n    padding-top: 25px;\n\n    padding-bottom: 25px\n}\n\n.chat-input {\n\n    display: flex;\n\n    height: 102px;\n\n    align-items: center\n}\n\n.chat-bubble,  .chat-right,  .chat-left {\n\n    clear: both;\n\n    margin-top: 5px;\n\n    margin-bottom: 5px;\n\n    max-width: 400px;\n\n    padding: 15px;\n\n    text-align: left\n}\n\n.chat-left {\n\n    margin-left: 55px;\n\n    border-bottom-right-radius: 0.5rem;\n\n    border-bottom-left-radius: 0.5rem;\n\n    border-top-right-radius: 0.5rem;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity))\n}\n\n.chat-right {\n\n    float: right;\n\n    margin-right: 27px;\n\n    border-bottom-right-radius: 0.5rem;\n\n    border-bottom-left-radius: 0.5rem;\n\n    border-top-left-radius: 0.5rem;\n\n    background-color: var(--ion-color-secondary)\n}\n\n.chat::-webkit-scrollbar {\n\n    width: 4px;\n\n    background-color: transparent;\n\n    opacity: 0\n}\n\n.chat:hover::-webkit-scrollbar-thumb {\n\n    background-color: var(--ion-color-primary)\n}\n\n.chat::-webkit-scrollbar-thumb {\n\n    background-color: var(--ion-color-secondary);\n\n    transition-duration: 1000ms\n}\n\n.img-btn {\n\n    margin-right: 20px;\n\n    cursor: pointer;\n\n    font-size: 32px;\n\n    color: var(--ion-color-primary)\n}\n\n.send-btn-wrapper {\n\n    margin-right: 20px;\n\n    height: 38px;\n\n    width: 38px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-primary);\n\n    padding: 10px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.send-btn {\n\n    margin-top: -1px;\n\n    cursor: pointer;\n\n    font-size: 22px\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3Nlbmdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0lBQUEsYUFBQTs7SUFBQSxjQUFBOztJQUFBLHdCQUFBOztJQUFBLHdDQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBSUU7O0lBQUEsYUFBQTs7SUFBQSxhQUFBOztJQUFBO0FBQUE7O0FBSUY7O0lBQUEsV0FBQTs7SUFBQSxlQUFBOztJQUFBLGtCQUFBOztJQUFBLGdCQUFBOztJQUFBLGFBQUE7O0lBQUE7QUFBQTs7QUFLQTs7SUFBQSxpQkFBQTs7SUFBQSxrQ0FBQTs7SUFBQSxpQ0FBQTs7SUFBQSwrQkFBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBOztBQUtBOztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUEsa0NBQUE7O0lBQUEsaUNBQUE7O0lBQUEsOEJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxVQUFBOztJQUFBLDZCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSw0Q0FBQTs7SUFBQTtBQUFBOztBQUlFOztJQUFBLGtCQUFBOztJQUFBLGVBQUE7O0lBQUEsZUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxxQkFBQTs7SUFBQSwwQ0FBQTs7SUFBQSxhQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZ0JBQUE7O0lBQUEsZUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG9CQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoibWVzc2VuZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcbiAgQGFwcGx5IGgtWzQ5MHB4XSBib3JkZXItYiBib3JkZXItc2Vjb25kYXJ5IHB5LVsyNXB4XSBvdmVyZmxvdy1hdXRvO1xufVxuXG4uY2hhdC1pbnB1dCB7XG4gICAgQGFwcGx5IGZsZXggaC1bMTAycHhdIGl0ZW1zLWNlbnRlcjtcbn1cblxuLmNoYXQtYnViYmxlIHtcbiAgQGFwcGx5IGNsZWFyLWJvdGggIHAtWzE1cHhdIHRleHQtbGVmdCBteS1bNXB4XSBtYXgtdy1bNDAwcHhdO1xufVxuXG4uY2hhdC1sZWZ0IHtcbiAgQGV4dGVuZCAuY2hhdC1idWJibGU7XG4gIEBhcHBseSBiZy13aGl0ZSBtbC1bNTVweF0gcm91bmRlZC1iLWxnIHJvdW5kZWQtdHItbGc7XG59XG5cbi5jaGF0LXJpZ2h0IHtcbiAgQGV4dGVuZCAuY2hhdC1idWJibGU7XG4gIEBhcHBseSBmbG9hdC1yaWdodCBiZy1zZWNvbmRhcnkgbXItWzI3cHhdIHJvdW5kZWQtYi1sZyByb3VuZGVkLXRsLWxnO1xufVxuXG4uY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBAYXBwbHkgb3BhY2l0eS0wIHctWzRweF0gYmctdHJhbnNwYXJlbnQ7XG59XG4uY2hhdDpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBAYXBwbHkgYmctcHJpbWFyeTtcbn1cbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIEBhcHBseSBiZy1zZWNvbmRhcnkgZHVyYXRpb24tMTAwMDtcbn1cblxuLmltZy1idG4ge1xuICAgIEBhcHBseSB0ZXh0LVszMnB4XSBtci1bMjBweF0gdGV4dC1wcmltYXJ5IGN1cnNvci1wb2ludGVyO1xufVxuXG4uc2VuZC1idG4td3JhcHBlciB7XG4gICAgQGFwcGx5IHRleHQtd2hpdGUgYmctcHJpbWFyeSBwLVsxMHB4XSByb3VuZGVkLWZ1bGwgbXItWzIwcHhdIGgtWzM4cHhdIHctWzM4cHhdO1xufVxuXG4uc2VuZC1idG4ge1xuICAgIEBhcHBseSB0ZXh0LVsyMnB4XSBtdC1bLTFweF0gY3Vyc29yLXBvaW50ZXI7XG59XG5cbi5kaXNhYmxlZCB7XG4gICAgQGFwcGx5IG9wYWNpdHktNjAgcG9pbnRlci1ldmVudHMtbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7017:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-top: 3.5rem;\n  margin-bottom: 0px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none\n}\n\n.clear-btn {\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  text-transform: none\n}\n\n.full-btn {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: var(--ion-color-primary);\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  text-transform: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2Rib2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxzQ0FBQTtFQUFBLHFCQUFBO0VBQUEsc0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSwrQkFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxzQ0FBQTtFQUFBLDBDQUFBO0VBQUEscUJBQUE7RUFBQSxzQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQTtBQURBIiwiZmlsZSI6Im1vb2Rib2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ0biB7XG4gIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgbXQtMTQgbWItMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uY2xlYXItYnRuIHtcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLTJ4bCBoLVs1MnB4XSBweC0zO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmZ1bGwtYnRuIHtcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZC0yeGwgaC1bNTJweF0gYmctcHJpbWFyeSBteC00IHB4LTM7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 4723:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbnRpcmkucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2569:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".next-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.next-btn:hover {\n\n    opacity: 0.8\n}\n\n.back-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-primary);\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    color: var(--ion-color-primary)\n}\n\n.back-btn:hover {\n\n    opacity: 0.8\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLDBDQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJRjs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBLDZCQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6Im5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5leHQtYnRuIHtcbiAgICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBweC00IG14LTIgaC0xMFxuICB9XG5cbi5iYWNrLWJ0biB7XG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXRyYW5zcGFyZW50IHRleHQtcHJpbWFyeSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIGJvcmRlci1wcmltYXJ5IGJvcmRlciBweC00IG14LTIgaC0xMFxufVxuXG4uZGlzYWJsZWQge1xuICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXG59Il19 */";

/***/ }),

/***/ 4400:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".credit-btn {\n  margin: 0px;\n  margin-top: 30px;\n  height: 62px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-secondary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  text-transform: none\n}\n\n.continue-btn {\n  height: 52px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-primary);\n  background-color: var(--ion-color-primary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  text-transform: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxXQUFBO0VBQUEsZ0JBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHdDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsc0NBQUE7RUFBQSwwQ0FBQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBO0FBREEiLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVkaXQtYnRuIHtcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtMnhsIGgtWzYycHhdIHAtMCBweC00IG0tMCBtdC1bMzBweF0gdGV4dC1sZyB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNvbnRpbnVlLWJ0biB7XG4gIEBhcHBseSBib3JkZXIgYm9yZGVyLXByaW1hcnkgYmctcHJpbWFyeSByb3VuZGVkLTJ4bCBoLVs1MnB4XSBwLTAgcHgtNCB0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1tZWRpdW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 7899:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pre-book-selection/pre-book-selection.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtYm9vay1zZWxlY3Rpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 394:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/pricing-plans/pricing-plans.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".upgrade-btn {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    height: 2.5rem;\n    border-radius: 0.75rem;\n    background-color: var(--ion-color-primary);\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: 500;\n    text-transform: none;\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n.upgrade-btn:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNpbmctcGxhbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0lBQUEsbUJBQUE7SUFBQSxvQkFBQTtJQUFBLGNBQUE7SUFBQSxzQkFBQTtJQUFBLDBDQUFBO0lBQUEsa0JBQUE7SUFBQSxtQkFBQTtJQUFBLGdCQUFBO0lBQUEsb0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUEiLCJmaWxlIjoicHJpY2luZy1wbGFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBncmFkZS1idG4ge1xuICAgIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwXG4gIH1cbiJdfQ== */";

/***/ }),

/***/ 3908:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-top: 3.5rem;\n  margin-bottom: 0px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQSIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnRuIHtcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBtdC0xNCBtYi0wO1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 2653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0U7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsMENBQUE7RUFDQSxvQkFBQTtFQUNBO0FBRkE7O0FBTUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxjQUFBO0VBQUEsV0FBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBO0FBRkE7O0FBS0Y7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XG4gIGNvbG9yOiAjNTU1NTU1XG59XG5cbi5sb2dpbi1idG4ge1xuICBAYXBwbHkgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnNlbmQtYnRuIHtcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMjggaC0xNCB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIG10LTggdGV4dC1sZyBmb250LXNlbWlib2xkO1xuICBiYWNrZ3JvdW5kOiAjOUI3RTYwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xufVxuXG4uYm9yZGVyLWJsYWNrLTIge1xuICBib3JkZXItY29sb3I6ICM1NTU1NTU7XG59XG5cbmlvbi1pY29uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */";

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
module.exports = ".btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 2rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 700;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.btn:hover {\n\n    opacity: 0.8\n}\n\n.hero-pencraft {\n\n    margin-bottom: 2rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3rem;\n\n    line-height: 1;\n\n    line-height: 90px;\n\n    color: var(--ion-color-black-2)\n}\n\n@media (min-width: 768px) {\n\n    .hero-pencraft {\n\n        font-size: 3.75rem;\n\n        line-height: 1\n    }\n}\n\n.hero-text {\n\n    margin-bottom: 1.5rem;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 60px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 768px) {\n\n    .hero-text {\n\n        font-size: 3rem;\n\n        line-height: 1;\n\n        line-height: 80px\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text {\n\n        text-align: left;\n\n        font-size: 3.75rem;\n\n        line-height: 1;\n\n        line-height: 90px\n    }\n}\n\n.hero-wrapper {\n\n    margin-left: 1rem;\n\n    margin-right: 1rem;\n\n    margin-bottom: 4rem;\n\n    margin-top: -72px;\n\n    height: 800px;\n\n    border-radius: 1rem;\n\n    background-image: url('/assets/images/landing-img.png');\n\n    background-size: cover\n}\n\n@media (min-width: 768px) {\n\n    .hero-wrapper {\n\n        margin-left: 3rem;\n\n        margin-right: 3rem;\n\n        height: 1030px\n    }\n}\n\n.hero-text-wrapper {\n\n    position: absolute;\n\n    top: 150px;\n\n    display: flex;\n\n    flex: 1 1 0%;\n\n    flex-direction: column;\n\n    align-items: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text-wrapper {\n\n        width: 610px\n    }\n}\n\n.pencraft,  .pencraft-white {\n\n    padding-top: 4rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3.75rem;\n\n    line-height: 1;\n\n    line-height: 70px;\n\n    color: var(--ion-color-black-2)\n}\n\n.pencraft-white {\n\n    padding-top: 0px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-headline,  .landing-headline-white {\n\n    margin-bottom: 1.5rem;\n\n    text-align: left;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 55px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 1024px) {\n\n    .landing-headline,  .landing-headline-white {\n\n        font-size: 3rem;\n\n        line-height: 1\n    }\n}\n\n.landing-headline-white {\n\n    text-align: center;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-text {\n\n    font-size: 18px;\n\n    font-weight: 400;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-2)\n}\n\n.landing-bold {\n\n    font-size: 18px;\n\n    font-weight: 700;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-1)\n}\n\n.landing-img {\n\n    margin: 4rem;\n\n    margin-left: 0px;\n\n    border-radius: 1rem\n}\n\n.quote-icon {\n\n    display: inline-block;\n\n    height: 40px;\n\n    width: 27px;\n\n    background-image: url('/assets/icon/quote.svg')\n}\n\n.arrow-icon {\n\n    display: inline-block;\n\n    height: 20px;\n\n    width: 40px;\n\n    cursor: pointer\n}\n\n.arrow-icon:hover {\n\n    opacity: 0.5\n}\n\n.contact-btn {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.contact-btn:hover {\n\n    opacity: 0.7\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsMENBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLGdDQUFBOztJQUFBLGVBQUE7O0lBQUEsY0FBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUEsZ0JBQUE7O1FBQUEsa0JBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSx1REFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGlCQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxVQUFBOztJQUFBLGFBQUE7O0lBQUEsWUFBQTs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxnQ0FBQTs7SUFBQSxrQkFBQTs7SUFBQSxjQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBS0E7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUE7SUFBQTtBQUFBOztBQUtBOztJQUFBLGtCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxlQUFBOztJQUFBLGtCQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LWJvbGQgbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBweC00IG14LTIgaC0xMCBtdC04XG59XG5cbi5oZXJvLXBlbmNyYWZ0IHtcbiAgQGFwcGx5IHRleHQtYmxhY2stMiBmb250LUFsbGlzb24gdGV4dC01eGwgbWQ6dGV4dC02eGwgbWItOCBsZWFkaW5nLVs5MHB4XVxufVxuXG4uaGVyby10ZXh0IHtcbiAgQGFwcGx5IHRleHQtYmxhY2stMSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBsZzp0ZXh0LWxlZnQgbWItNiBsZWFkaW5nLVs2MHB4XSBtZDpsZWFkaW5nLVs4MHB4XSBsZzpsZWFkaW5nLVs5MHB4XSBmb250LWJvbGRcbn1cblxuLmhlcm8td3JhcHBlciB7XG4gIEBhcHBseSBiZy1sYW5kaW5nLWltZyByb3VuZGVkLTJ4bCBiZy1jb3ZlciBoLVs4MDBweF0gbWQ6aC1bMTAzMHB4XSBtYi0xNiBtdC1bLTcycHhdIG14LTQgbWQ6bXgtMTJcbn1cblxuLmhlcm8tdGV4dC13cmFwcGVyIHtcbiAgQGFwcGx5IGxnOnctWzYxMHB4XSB0b3AtWzE1MHB4XSBhYnNvbHV0ZSBmbGV4IGZsZXgtMSBmbGV4LWNvbCBpdGVtcy1zdGFydFxufVxuXG4ucGVuY3JhZnQge1xuICBAYXBwbHkgcHQtMTYgdGV4dC1ibGFjay0yIGZvbnQtQWxsaXNvbiB0ZXh0LTZ4bCBsZWFkaW5nLVs3MHB4XVxufVxuXG4ucGVuY3JhZnQtd2hpdGUge1xuICBAZXh0ZW5kIC5wZW5jcmFmdDtcbiAgQGFwcGx5IHRleHQtd2hpdGUgcHQtMDtcbn1cblxuLmxhbmRpbmctaGVhZGxpbmUge1xuICBAYXBwbHkgdGV4dC1ibGFjay0xIHRleHQtNHhsIGxnOnRleHQtNXhsIHRleHQtbGVmdCBtYi02IGxlYWRpbmctWzU1cHhdIGZvbnQtYm9sZFxufVxuXG4ubGFuZGluZy1oZWFkbGluZS13aGl0ZSB7XG4gIEBleHRlbmQgLmxhbmRpbmctaGVhZGxpbmU7XG4gIEBhcHBseSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyO1xufVxuXG4ubGFuZGluZy10ZXh0IHtcbiAgQGFwcGx5IGZvbnQtbm9ybWFsIHRleHQtYmxhY2stMiB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxufVxuXG4ubGFuZGluZy1ib2xkIHtcbiAgQGFwcGx5IGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTEgdGV4dC1bMThweF0gbGVhZGluZy1bMzBweF1cbn1cblxuLmxhbmRpbmctaW1nIHtcbiAgQGFwcGx5IG0tMTYgbWwtMCByb3VuZGVkLTJ4bFxufVxuXG4ucXVvdGUtaWNvbiB7XG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgdy1bMjdweF0gaC1bNDBweF0gYmctcXVvdGVcbn1cblxuLmFycm93LWljb24ge1xuICBAYXBwbHkgaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyIHctWzQwcHhdIGgtWzIwcHhdIGhvdmVyOm9wYWNpdHktNTBcbn1cblxuLmNvbnRhY3QtYnRuIHtcbiAgQGFwcGx5IGhvdmVyOm9wYWNpdHktNzAgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIGJvcmRlci13aGl0ZSBib3JkZXIgcHgtNCBteC1hdXRvIG15LTAgaC0xMFxufVxuIl19 */";

/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.forgot-btn {\n  margin-top: 1.75rem;\n  border-width: 0px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #AA4C33;\n  text-transform: none;\n}\n\n.create-btn {\n  display: flex;\n  height: 3.5rem;\n  width: 13rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  border-width: 1px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #9B7E60;\n  text-transform: none;\n  border-color: #9B7E60;\n}\n\n.vipps-btn {\n  display: flex;\n  height: 3.5rem;\n  width: 13rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #FF5B24;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGFBQUE7RUFBQSxjQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFIQTs7QUFPQTtFQUFBLGFBQUE7RUFBQSxjQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBO0FBRkE7O0FBS0Y7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFjay0yIHtcbiAgY29sb3I6ICM1NTU1NTVcbn1cblxuLmxvZ2luLWJ0biB7XG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTI4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IHRleHQtbGcgZm9udC1zZW1pYm9sZDtcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5mb3Jnb3QtYnRuIHtcbiAgQGFwcGx5IGJvcmRlci0wIHRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC03O1xuICBjb2xvcjogI0FBNEMzMztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jcmVhdGUtYnRuIHtcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlciB3LTUyIGgtMTQgcm91bmRlZC0yeGwgdGV4dC1sZyBmb250LXNlbWlib2xkO1xuICBjb2xvcjogIzlCN0U2MDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzlCN0U2MDtcbn1cblxuLnZpcHBzLWJ0biB7XG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHctNTIgaC0xNCByb3VuZGVkLTJ4bCB0ZXh0LWxnIGZvbnQtbWVkaXVtO1xuICBiYWNrZ3JvdW5kOiAjRkY1QjI0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnBhc3N3b3JkLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xufVxuXG4uYm9yZGVyLWJsYWNrLTIge1xuICBib3JkZXItY29sb3I6ICM1NTU1NTU7XG59XG4iXX0= */";

/***/ }),

/***/ 2581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".save-btn {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    height: 2.5rem;\n    border-radius: 0.75rem;\n    background-color: var(--ion-color-primary);\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: 500;\n    text-transform: none;\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n.save-btn:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0lBQUEsbUJBQUE7SUFBQSxvQkFBQTtJQUFBLGNBQUE7SUFBQSxzQkFBQTtJQUFBLDBDQUFBO0lBQUEsa0JBQUE7SUFBQSxtQkFBQTtJQUFBLGdCQUFBO0lBQUEsb0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUEiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zYXZlLWJ0biB7XG4gICAgQGFwcGx5IGhvdmVyOm9wYWNpdHktODAgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIG5vcm1hbC1jYXNlIHJvdW5kZWQteGwgcHgtNCBteC0yIGgtMTBcbiAgfVxuIl19 */";

/***/ }),

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.register-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 8rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFjay0yIHtcbiAgY29sb3I6ICM1NTU1NTVcbn1cblxuLmxvZ2luLWJ0biB7XG4gIEBhcHBseSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ibGFjayBtdC0xNDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ucmVnaXN0ZXItYnRuIHtcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMzIgaC0xNCB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIG10LTggdGV4dC1sZyBmb250LXNlbWlib2xkO1xuICBiYWNrZ3JvdW5kOiAjOUI3RTYwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnBhc3N3b3JkLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xufVxuXG4uYm9yZGVyLWJsYWNrLTIge1xuICBib3JkZXItY29sb3I6ICM1NTU1NTU7XG59XG5cbmlvbi1pY29uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 6222:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.reset-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 12rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XG4gIGNvbG9yOiAjNTU1NTU1XG59XG5cbi5sb2dpbi1idG4ge1xuICBAYXBwbHkgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnJlc2V0LWJ0biB7XG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTQ4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IHRleHQtbGcgZm9udC1zZW1pYm9sZDtcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5wYXNzd29yZC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBjYXJldC1jb2xvcjogIzU1NTU1NTtcbn1cblxuLmJvcmRlci1ibGFjay0yIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xufVxuXG5pb24taWNvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbiJdfQ== */";

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
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.register-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 12rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #AA4C33;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n\ncode-input {\n  --color: #555555;\n  --item-spacing: 20px;\n  --item-border: 1px solid #555555;\n  --item-border-radius: 15px;\n  --item-border-bottom: 1px solid #555555;\n  --item-border-has-value: 1px solid #555555;\n  --item-border-bottom-has-value: 1px solid #555555;\n  --item-border-focused: 1px solid #555555;\n  --item-border-bottom-focused: 1px solid #555555;\n  --item-shadow-focused: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUdFO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsY0FBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLHVCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsa0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7RUFDQTtBQUZBOztBQUtGO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQkFBQTtBQUNGIiwiZmlsZSI6InNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrLTIge1xuICBjb2xvcjogIzU1NTU1NVxufVxuXG4ucmVnaXN0ZXItYnRuIHtcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5idG4ge1xuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy00OCBoLTE0IHRleHQtd2hpdGUgcm91bmRlZC0yeGwgbXQtOCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQ7XG4gIGJhY2tncm91bmQ6ICM5QjdFNjA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc2VuZC1idG4ge1xuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1sZyBtdC02IGZvbnQtc2VtaWJvbGQ7XG4gIGNvbG9yOiAjQUE0QzMzO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnBhc3N3b3JkLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xufVxuXG4uYm9yZGVyLWJsYWNrLTIge1xuICBib3JkZXItY29sb3I6ICM1NTU1NTU7XG59XG5cbmlvbi1pY29uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmNvZGUtaW5wdXQge1xuICAtLWNvbG9yOiAjNTU1NTU1O1xuICAtLWl0ZW0tc3BhY2luZzogMjBweDtcbiAgLS1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIC0taXRlbS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU1NTU7XG4gIC0taXRlbS1ib3JkZXItaGFzLXZhbHVlOiAxcHggc29saWQgIzU1NTU1NTtcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20taGFzLXZhbHVlOiAxcHggc29saWQgIzU1NTU1NTtcbiAgLS1pdGVtLWJvcmRlci1mb2N1c2VkOiAxcHggc29saWQgIzU1NTU1NTtcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20tZm9jdXNlZDogMXB4IHNvbGlkICM1NTU1NTU7XG4gIC0taXRlbS1zaGFkb3ctZm9jdXNlZDogMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 1757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-footer>\n  <div class=\"bg-dark min-h-[500px] py-[50px] lg:pt-[120px]\">\n    <ion-row class=\"container\">\n      <ion-col size=\"8\" offset=\"2\" size-lg=\"4\" offset-lg=\"0\">\n        <ion-text class=\"text-left\">\n          <p class=\"text-2xl font-bold text-left\">White Logo.</p> <br/>\n          <p class=\"footer-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit.</p>\n        </ion-text>\n      </ion-col>\n      <hr/>\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"2\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\n        <ion-text>\n          <p class=\"uppercase\">Navigation</p><br/>\n            <ion-button (click)=\"scrollTo('home')\" fill=\"clear\">Home</ion-button><br/>\n            <ion-button (click)=\"scrollTo('how-it-works')\" fill=\"clear\">How it works</ion-button><br/>\n            <ion-button (click)=\"scrollTo('stories')\" fill=\"clear\">Stories</ion-button><br/>\n            <ion-button (click)=\"scrollTo('contact')\" fill=\"clear\">Contact</ion-button>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"4\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\n        <ion-text>\n          <p class=\"uppercase\">Social Media</p><br/>\n          <ion-icon class=\"social-logo\" name=\"logo-facebook\"></ion-icon>\n          <ion-icon class=\"social-logo\" name=\"logo-instagram\"></ion-icon>\n          <ion-icon class=\"social-logo\" name=\"logo-linkedin\"></ion-icon>\n          <ion-icon class=\"social-logo\" name=\"logo-twitter\"></ion-icon><br/>\n\n          <ion-button fill=\"clear\">Terms & Conditions</ion-button><br/>\n          <ion-button fill=\"clear\">Privacy Policy</ion-button>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n";

/***/ }),

/***/ 4982:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [class.white-header]=\"isScrolledDown\" class=\"bg-transparent sticky top-0 z-[100]\" >\n  <div class=\"header-wrapper\">\n    <a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\n      <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\n    </a>\n      <ion-buttons class=\"header-buttons\">\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('home')\">Home</ion-button>\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('how-it-works')\">How It Works</ion-button>\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('stories')\">Stories</ion-button>\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('contact')\">Contact</ion-button>\n        <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">Login</ion-button>\n        <ion-button fill=\"clear\" class=\"register-btn\" routerLink=\"/register\" routerDirection=\"root\">Register</ion-button>\n      </ion-buttons>\n      <div class=\"flex md:hidden flex-1 justify-end\" id=\"menu-content\">\n        <ion-menu-button></ion-menu-button>\n      </div>\n  </div>\n</ion-header>\n\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\n  <ion-header>\n    <ion-toolbar translucent>\n      <ion-title><a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\n      </a></ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"/login\" >Login</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"/register\" >Register</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n  <ion-header class=\"\" id=\"main-content\">\n    <ion-toolbar class=\"header-wrapper\">\n      <ion-buttons slot=\"start\" class=\"\">\n        <ion-button slot=\"start\">\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\n          </a>\n        </ion-button>\n        <section class=\"header-buttons\">\n        <ion-button fill=\"clear\" class=\"btn\" routerLink=\"/my-intiri\" routerDirection=\"root\">My Intiri</ion-button>\n        <ion-button fill=\"clear\" class=\"btn\">Book a designer</ion-button>\n        </section>\n      </ion-buttons>\n      <ion-buttons class=\"header-buttons justify-end\">\n        <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\n          <img src=\"../../../assets/images/landing-img.png\" class=\"header-profile-img\" alt=\"Profile Img\"/>\n        </a>\n        <ion-icon class=\"header-icon\" name=\"chatbox-ellipses-sharp\"></ion-icon>\n        <ion-icon class=\"header-icon\" id=\"settings-btn\" name=\"settings-sharp\"></ion-icon>\n        <ion-button fill=\"clear\" class=\"new-project-btn\" (click)=\"removeProjectDraft()\" href=\"/new-project\">Create new project</ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<!-- Settings Dropdown Menu -->\n<ion-popover trigger=\"settings-btn\" [dismissOnSelect]=\"true\">\n  <ng-template>\n      <ion-list lines=\"none\" >\n        <ion-item class=\"mt-[16px]\">\n          <ion-icon class=\"header-icon\" name=\"settings-sharp\"></ion-icon>\n          <span class=\"text-primary font-medium ml-2\">Free plan</span><br/><br/>\n        </ion-item>\n        <hr class=\"border-light border-t mx-[16px] my-[16px]\" />\n        <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Language</ion-item>\n        <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Terms & Conditions</ion-item>\n        <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Pricing plans</ion-item>\n        <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">Logout</ion-item>\n      </ion-list>\n  </ng-template>\n</ion-popover>\n\n<!-- Mobile Menu -->\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\n  <ion-header>\n    <ion-toolbar translucent>\n      <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\n      </a></ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"/my-intiri\" >My Intiri</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"#\" >Book a designer</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"#\" >My Profile</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"#\" >Settings</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"cursor-pointer\" routerLink=\"#\" >Create new project</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>";

/***/ }),

/***/ 1731:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"container\">\n    <p class=\"mt-[90px] text-2xl text-black font-medium\">Book your design consultation</p>\n    <p class=\"mt-[30px] text-2xl text-primary font-medium\">{{price}} Nok / consultation</p>\n    <p class=\"text-lg text-black-2\">*Consultation duration is 45min</p>\n    <div class=\"mt-[30px]\">\n      <span class=\"text-sm text-black-2\">Number of consultations</span>\n      <ion-input type=\"number\" class=\"border rounded-2xl border-black-2 w-[310px] h-14\" (ionChange)=\"totalPriceSum($event)\"></ion-input>\n    </div>\n    <p class=\"mt-[30px] text-lg text-black-2 font-medium\">TOTAL TO PAY</p>\n    <p class=\"text-[45px] text-primary font-medium\">{{totalPrice}} Nok</p>\n    <ion-item-divider class=\"border-b-[3px] border-primary w-[60px] h-0\"></ion-item-divider>\n    <p class=\"mt-[50px] text-2xl text-black font-medium\">Tell us what you need</p>\n    <p class=\"text-lg text-black-2 text-center\">You are soon ready to meet your designer, just tell us what you need help with.</p>\n    <div class=\"flex flex-wrap mt-[50px]\">\n      <ion-item *ngFor=\"let item of items\" class=\"w-1/2\" lines=\"none\">\n        <div class=\"flex items-center\">\n          <ion-checkbox></ion-checkbox>\n          <p class=\"text-[18px] text-black-2 ml-2 leading-[26px]\">{{item.name}}</p>\n        </div>\n      </ion-item>\n    </div>\n    <div class=\"mt-[50px]\">\n      <ion-button fill=\"clear\" class=\"cancel-btn\" (click)=\"dismissModal()\">Cancel</ion-button>\n      <ion-button fill=\"clear\" class=\"proceed-btn\" (click)=\"redirectToDesigner()\">Proceed</ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 4618:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\n      <div class=\"max-w-md w-full space-y-8\">\n        <div>\n          <div class=\"plus-icon-wrapper\"><div class=\"bg-plus h-[34px] w-[34px] mx-auto mt-[5px]\"></div></div>\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black1\">Let's create new project</h2>\n          <p class=\"text-center text-base text-black2\">Name the project first.</p>\n        </div>\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\n          <div class=\"rounded-md shadow-sm -space-y-px\">\n            <div>\n              <label for=\"project-name\" class=\"sr-only\">Project name</label>\n              <input id=\"project-name\" name=\"email\" type=\"email\" autocomplete=\"email\" [(ngModel)]=\"projectName\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[8px] focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm\" placeholder=\"Project name\">\n            </div>\n          </div>\n          <ion-buttons class=\"justify-center\">\n            <ion-button  class=\"cancel-btn\" (click)=\"dismiss()\" routerLink=\"/my-intiri\" routerDirection=\"root\">Cancel</ion-button>\n            <ion-button class=\"create-btn\" [class.disabled]=\"!isValidProjectName()\" (click)=\"startProjectCreation()\">Create</ion-button>\n          </ion-buttons>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 1070:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\n      <div class=\"max-w-md w-full space-y-8\">\n        <div>\n          <img class=\"mx-auto h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\" alt=\"Workflow\">\n          <h2 class=\"mt-6 text-center text-3xl font-extrabold text-gray-900\">Sign in to your account</h2>\n        </div>\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\n          <div class=\"rounded-md shadow-sm -space-y-px\">\n            <div>\n              <label for=\"email-address\" class=\"sr-only\">Email address</label>\n              <input id=\"email-address\" name=\"email\" type=\"email\" autocomplete=\"email\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\" placeholder=\"Email address\">\n            </div>\n            <div>\n              <label for=\"password\" class=\"sr-only\">Password</label>\n              <input id=\"password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\" placeholder=\"Password\">\n            </div>\n          </div>\n\n          <div class=\"flex items-center justify-between\">\n            <div class=\"flex items-center\">\n              <input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\" class=\"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded\">\n              <label for=\"remember-me\" class=\"ml-2 block text-sm text-gray-900\"> Remember me </label>\n            </div>\n\n            <div class=\"text-sm\">\n              <a href=\"#\" class=\"font-medium text-indigo-600 hover:text-indigo-500\"> Forgot your password? </a>\n            </div>\n          </div>\n\n          <div>\n            <button type=\"submit\" class=\"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\n              <span class=\"absolute left-0 inset-y-0 flex items-center pl-3\">\n                <!-- Heroicon name: solid/lock-closed -->\n                <svg class=\"h-5 w-5 text-indigo-500 group-hover:text-indigo-400\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                  <path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\" />\n                </svg>\n              </span>\n              Sign in\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8832:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\n      <div class=\"max-w-md w-full space-y-8\">\n        <div>\n          <div class=\"logout-icon-wrapper\"><ion-icon class=\"h-[34px] w-[34px] mx-auto mt-[5px] block\" name=\"log-out-outline\"></ion-icon></div>\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black1\">Logout!</h2>\n          <p class=\"text-center text-base text-black2\">Are you sure you want to logout from the app?</p>\n        </div>\n        <ion-buttons class=\"justify-center\">\n          <ion-button  class=\"cancel-btn\" (click)=\"dismiss()\">Cancel</ion-button>\n          <ion-button class=\"logout-btn\" (click)=\"logout()\">Logout</ion-button>\n        </ion-buttons>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 952:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <h2 class=\"step-title\">{{currentStep.title}}</h2>\n  <p class=\"step-subtitle\">{{currentStep.subtitle}}</p>\n  <ion-grid class=\"step-items\">\n    <ion-row>\n      <ion-col *ngFor=\"let item of currentStep.data\" (click)=\"toggleItem(item)\" size=\"5.5\" size-sm=\"3.75\" class=\"step-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\n        <img *ngIf=\"item.path\" src=\"{{apiUrl}}{{item.path}}\" class=\"step-image\" alt=\"style-img\"/>\n        <div *ngIf=\"item.imagePath\" class=\"step-icon-wrapper\" >\n          <img src=\"{{apiUrl}}{{item.imagePath}}\" class=\"step-icon\" alt=\"room-icon\"/>\n        </div>\n        <div *ngIf=\"item.hexValue\" class=\"step-color-wrapper\" [ngStyle]=\"{background: item.hexValue}\"></div>\n        <p *ngIf=\"item.name\" class=\"font-bold mt-6\">{{item.name}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>";

/***/ }),

/***/ 9624:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-light  xl-ion:w-[300px]  xl-ion:h-[680px] rounded-lg text-center\">\n  <img src=\"../../../assets/images/landing-img.png\" class=\"rounded-[50%] w-[300px] h-[300px] object-cover p-8 relative top-12 mx-auto\" alt=\"Profile Img\"/>\n  <h3 class=\"mt-12 mx-10 mb-1 font-medium text-black-2\">Phoebe Karen Johnson</h3>\n  <p class=\"text-black-3 mb-8\">16 projects</p>\n  <ion-buttons class=\"justify-center\">\n    <ion-button\n      class=\"change-img-btn\"\n      >Change profile picture</ion-button\n    >\n  </ion-buttons>\n</div>\n";

/***/ }),

/***/ 1457:
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h3 class=\"text-black-2 text-[24px] my-0 mx-2\">Personal Info</h3>\n<section class=\"sm:flex\">\n  <div class=\"profile-input\">\n    <span class=\"text-sm text-black-2\">First name</span>\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n  </div>\n  <div class=\"profile-input\">\n    <span class=\"text-sm text-black-2\">Last name</span>\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n  </div>\n</section>\n<div class=\"profile-input\">\n  <span class=\"text-sm text-black-2\">Gender</span>\n  <ion-select>\n    <ion-select-option value=\"male\">Male</ion-select-option>\n    <ion-select-option value=\"female\">Female</ion-select-option>\n    <ion-select-option value=\"non-binary\">Non-binary</ion-select-option>\n    <ion-select-option value=\"not-to-say\">I prefer not to say</ion-select-option>\n  </ion-select>\n</div>\n\n\n<section class=\"flex\">\n  <div class=\"phone-input\">\n    <span class=\"text-sm text-black-2\">Phone number</span>\n    <ion-select class=\"\">\n      <ion-select-option value=\"denmark\">+45</ion-select-option>\n      <ion-select-option value=\"sweden\">+46</ion-select-option>\n      <ion-select-option value=\"norway\">+47</ion-select-option>\n      <ion-select-option value=\"serbia\">+381</ion-select-option>\n      <ion-select-option value=\"montenegro\">+382</ion-select-option>\n    </ion-select>\n  </div>\n  <div class=\"profile-input\">\n    <span class=\"text-sm invisible\">Phone number</span>\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n  </div>\n</section>\n\n<div class=\"profile-input\">\n  <span class=\"text-sm text-black-2\">Email</span>\n  <ion-input type=\"email\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n  <span class=\"text-sm text-[#eb445a] hidden\">Wrong format</span>\n</div>\n<div class=\"profile-input\">\n  <span class=\"text-sm text-black-2\">Street</span>\n  <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n</div>\n<section class=\"sm:flex\">\n  <div class=\"profile-input\">\n    <span class=\"text-sm text-black-2\">Postal code</span>\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n  </div>\n  <div class=\"profile-input\">\n    <span class=\"text-sm text-black-2\">City</span>\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\n  </div>\n</section>\n<div class=\"profile-input\">\n  <span class=\"text-sm text-black-2\">Country</span>\n  <ion-select>\n    <ion-select-option value=\"apples\">Apples</ion-select-option>\n    <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n    <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n  </ion-select>\n</div>\n\n";

/***/ }),

/***/ 5338:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"page === 'create-project'\" class=\"bg-light xl-ion:w-[240px] xl-ion:h-[680px] rounded-lg text-center\">\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\n    <div class=\"project-step-icon bg-style\"></div>\n    <p class=\"project-step-text\">Style</p>\n  </section>\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\n    <div class=\"w-[30px] h-[22px] mx-auto bg-cover bg-room\"></div>\n    <p class=\"project-step-text\">Room</p>\n  </section>\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step\">\n    <div class=\"project-step-icon bg-color-pallete\"></div>\n    <p class=\"project-step-text\">Color Pallete</p>\n  </section>\n  <section [class.opacity-50]=\"currentStepNo !== 3\" [class.disabled]=\"!canChangeStep(3)\" (click)=\"goToStep(3)\" class=\"project-step\">\n    <div class=\"project-step-icon bg-moodboard\"></div>\n    <p class=\"project-step-text\">Moodboard</p>\n  </section>\n  <section [class.opacity-50]=\"currentStepNo !== 4\" [class.disabled]=\"!canChangeStep(4)\" (click)=\"goToStep(4)\" class=\"project-step no-border\">\n    <div class=\"project-step-icon bg-final-result\"></div>\n    <p class=\"project-step-text\">Final Result</p>\n  </section>\n</div>\n\n<div *ngIf=\"page === 'customize-moodboard'\" class=\"bg-light xl-ion:w-[240px] xl-ion:h-[680px] rounded-lg text-center\">\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\n    <div class=\"project-step-icon bg-color-pallete\"></div>\n    <p class=\"project-step-text\">Color Pallete</p>\n  </section>\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\n    <div class=\"project-step-icon mx-auto bg-cover bg-materials\"></div>\n    <p class=\"project-step-text\">Materials</p>\n  </section>\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step no-border\">\n    <div class=\"project-step-icon bg-sofa\"></div>\n    <p class=\"project-step-text\">Products</p>\n  </section>\n</div>\n\n";

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
module.exports = "<ion-content>\n  <div id=\"hero\">\n    <app-header></app-header>\n    <div class=\"2xl:container mb-40\">\n      <p class=\"text-[45px] font-medium mt-16\">Select a designer</p>\n      <div class=\"flex flex-wrap justify-between\">\n        <div *ngFor=\"let d of designers\">\n          <ion-card class=\"border border-black rounded-2xl shadow-none w-[370px] h-[350px] m-0 mt-5 mb-[8px] p-4\">\n            <img src={{d.image}} class=\"w-full h-full\">\n          </ion-card>\n          <div class=\"flex items-center justify-between\">\n            <div class=\"flex items-center justify-start\">\n              <img src={{d.logo}} class=\"h-[30px] w-[30px] rounded-md\">\n              <p class=\"text-black-2 text-2xl font-medium ml-2\">{{d.name}}</p>\n              <ion-button fill=\"clear\" class=\"text-black\" (click)=\"paymentModal()\">\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\n              </ion-button>\n            </div>\n            <div class=\"h-[30px] w-[55px] bg-secondary flex items-center justify-evenly rounded-md\">\n              <ion-icon name=\"star\" class=\"text-light text-sm\"></ion-icon>\n              <p class=\"text-light text-sm\">{{d.rating}}</p>\n            </div>\n          </div>\n          <div>\n            <p class=\"text-lg text-black-3\">{{d.designs}} completed designs</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

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
module.exports = "<ion-content>\n    <div id=\"home\">\n      <app-header></app-header>\n      <ion-grid class=\"px-[2%] xs:px-[5%] 2xl:container mt-[30px]\">\n        <ion-row>\n          <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3\">\n            <app-step-picker\n              (changeStep)=\"goToStep($event)\"\n              [canChangeToStep]=\"canChangeToStep\"\n              [currentStepNo]=\"currentStepNo\"\n              [moodboard]=\"moodboard\"\n              [steps]=\"steps\"\n              [page]=\"'customize-moodboard'\"\n            ></app-step-picker>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"9\">\n            <app-new-project-step\n              (toggleSelection)=\"toggleItem($event)\"\n              [project]=\"moodboard\"\n              [stepsOrder]=\"stepsOrder\"\n              [currentStepNo]=\"currentStepNo\"\n              [currentStep]=\"steps[currentStepNo]\"\n            ></app-new-project-step>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col offset-xl=\"3\">\n            <ion-buttons class=\"justify-center\">\n                <ion-button\n                *ngIf=\"currentStepNo === 0\"\n                class=\"back-btn\"\n                routerLink=\"/new-project\"\n                routerDirection=\"root\"\n                >Cancel</ion-button\n              >\n              <ion-button\n                *ngIf=\"currentStepNo !== 0\"\n                class=\"back-btn\"\n                [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\n                (click)=\"backStep()\"\n                >Back</ion-button\n              >\n              <ion-button\n                *ngIf=\"currentStepNo !== 2\"\n                class=\"next-btn\"\n                [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\n                (click)=\"nextStep()\"\n                >Next</ion-button\n              >\n              <ion-button\n                *ngIf=\"currentStepNo === 2\"\n                class=\"next-btn\"\n                [class.disabled]=\"!validateData()\"\n                routerLink=\"/new-project\"\n                routerDirection=\"root\"\n                >Finish</ion-button\n              >\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n";

/***/ }),

/***/ 5662:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"hero\">\n    <app-header></app-header>\n    <div class=\"2xl:container\">\n      <p class=\"text-[45px] font-medium mt-16\">Designer profile</p>\n      <div class=\"mt-[30px]\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"bg-light rounded-2xl flex flex-col items-center\">\n              <img src=\"../../../../assets/images/profile-img.png\" class=\"w-[240px] h-[240px] rounded-full mt-[65px]\">\n              <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">Diana Haliwell</p>\n              <p class=\"text-lg text-black-3\">16 projects</p>\n              <p class=\"text-lg text-black-2 px-[60px] mt-[30px]\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.\n                <br>\n                <br>\n                Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.\n              </p>\n              <ion-button fill=\"clear\" class=\"contact-btn\">Contact designer</ion-button>\n            </div>\n          </ion-col>\n          <ion-col size=\"8\" class=\"pl-5\">\n            <p class=\"text-2xl text-black-2 font-medium\">Available slots</p>\n            <div class=\"mt-[30px] flex flex-wrap justify-between\">\n              <div class=\"border border-black rounded-2xl h-[477px] w-[470px] p-4 flex justify-center items-center\">\n                <ion-datetime presentation=\"calendar\" class=\"h-full w-full\" [multiple]=\"true\"></ion-datetime>\n              </div>\n              <div class=\"border border-black rounded-2xl h-[477px] w-[260px] p-4 flex flex-col items-center\">\n                <ion-button fill=\"clear\" class=\"time-btn\">10 AM - 11 AM</ion-button>\n                <ion-button fill=\"clear\" class=\"time-btn\">11 AM - 12 AM</ion-button>\n                <ion-button fill=\"clear\" class=\"time-btn\">13 AM - 14 AM</ion-button>\n                <ion-button fill=\"clear\" class=\"time-btn\">14 AM - 15 AM</ion-button>\n                <ion-button fill=\"clear\" class=\"time-btn\">15 AM - 16 AM</ion-button>\n                <ion-button fill=\"clear\" class=\"time-btn\">16 AM - 17 AM</ion-button>\n              </div>\n            </div>\n            <p class=\"text-2xl text-black-2 font-medium mt-[80px]\">Moodboard</p>\n            <div class=\"mt-[30px] mb-[200px]\">\n              <div class=\"border border-black rounded-2xl w-[746px] h-[410px] p-4\">\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-full\">\n              </div>\n            </div>\n            <div class=\"flex justify-center items-center h-[152px] w-[746px] fixed bottom-0 bg-white\">\n              <ion-button fill=\"clear\" class=\"cancel-btn\">Cancel</ion-button>\n              <ion-button fill=\"clear\" class=\"book-btn\" routerLink=\"/payment-details\" routerDirection=\"root\">Book consultation</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 780:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <ion-grid class=\"px-[2%] xs:px-[5%] xll:container mt-[30px]\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\n          <h1 class=\"font-medium text-black-1 text-5xl mt-0\">Messages</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\n            <div class=\"xl-ion:w-[370px] xl-ion:h-[720px] pb-8\">\n              <div class=\"profile-input\">\n                <span class=\"text-sm text-black-2\">Search</span>\n                <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px]\"></ion-input>\n              </div>\n              <ul>\n                <li *ngFor=\"let number of [0,1,2,3,4,5,6]\">\n                  <div class=\"my-6 flex justify-between\">\n                    <div class=\"flex\" >\n                      <img src=\"../../../assets/images/profile-img.png\" class=\"w-[57px] h-[57px] rounded-lg object-cover\" alt=\"Profile Img\"/>\n                      <div class=\"ml-3.5 w-[170px]\">\n                        <p class=\"text-black-1 leading-5 font-semibold\">Sina Marlsberg</p>\n                        <p class=\"text-black-3 size-[15px] leading-5\" style=\"overflow: hidden;\n                          display: -webkit-box;\n                          -webkit-box-orient: vertical;\n                          -webkit-line-clamp: 2;\n                          \">Hello, I wanted to go to the dates of...\n                        </p>\n                      </div>\n                    </div>\n                    <div>\n                      <p class=\"text-black-3 size-[15px] leading-[14px]\">22 Jun</p>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\n            <div class=\"bg-light xl-ion:w-[794px] xl-ion:h-[682px] rounded-lg text-center pb-8\">\n              <div class=\"flex py-[22px] pl-[18px] border-b border-secondary\">\n                <img src=\"../../../assets/images/profile-img.png\" class=\"w-[45px] h-[45px] rounded-lg object-cover\" alt=\"Profile Img\"/>\n                <p class=\"text-black-1 leading-5 font-semibold ml-[13px] flex items-center\">Sina Marlsberg</p>\n              </div>\n              <div class=\"chat\">\n                <div class=\"chat-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. Fusce laoreet commodo eros vitae condimentum. Fusce at sem tellus. </div>\n                <div class=\"chat-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. </div>\n                <div class=\"chat-right\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. Fusce laoreet commodo eros vitae condimentum. Fusce at sem tellus. Vivamus eget vehicula nulla. </div>\n                <div class=\"chat-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. Fusce laoreet commodo eros vitae condimentum. Fusce at sem tellus. Vivamus eget vehicula nulla. </div>\n              </div>\n              <div class=\"chat-input\">\n                <ion-input type=\"text\" placeholder=\"Type a message...\" class=\"border bg-transparent text-left h-[52px] rounded-2xl border-black-2 mx-[20px] w-[80%]\"></ion-input>\n                <ion-icon class=\"img-btn disabled\" name=\"image\"></ion-icon>\n                <div class=\"send-btn-wrapper\"><ion-icon class=\"send-btn\" name=\"send-sharp\"></ion-icon></div>\n              </div>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 4326:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <div class=\"2xl:container\">\n      <ion-button fill=\"clear\" class=\"back-btn\" routerLink=\"/project-details\" routerDirection=\"root\">\n        <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\n        <p>Project details</p>\n      </ion-button>\n      <p class=\"text-[45px] font-medium\">Moodboard 1</p>\n      <ion-card class=\"border border-black shadow-none rounded-2xl w-[866px] h-[411px] m-0 mt-7 p-4\">\n        <img src=\"../../../../assets/images/landing-img.png\" class=\"h-full w-full\">\n      </ion-card>\n      <div class=\"mt-16\">\n        <p class=\"text-black-2 text-2xl font-medium\">What's included in moodboard</p>\n        <div class=\"mt-6 flex justify-between flex-wrap\">\n          <div *ngFor=\"let p of parts\" class=\"flex flex-col\">\n            <ion-card class=\"border border-black shadow-none rounded-2xl w-[270px] h-[200px] m-0 mt-5 p-4\">\n              <img src={{p.image}} class=\"h-full w-full\">\n            </ion-card>\n            <p class=\"text-black-2 text-2xl mt-2 font-medium\">{{p.name}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex justify-center mt-40 mb-40\">\n        <ion-button fill=\"clear\" class=\"clear-btn\">Edit moodboard</ion-button>\n        <ion-button fill=\"clear\" class=\"full-btn\" routerLink=\"/contact-designer\" routerDirection=\"root\">Contact designer</ion-button>\n        <ion-button fill=\"clear\" class=\"clear-btn\">Contact craftsman</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 7165:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <div class=\"2xl:container\">\n      <p class=\"text-5xl mt-20 font-medium\">My intiri</p>\n      <ion-row class=\"mt-3\">\n        <ion-col size=\"8\" class=\"pl-0 pt-6\">\n          <div>\n\n            <div class=\"flex justify-between items-center\">\n              <p class=\"text-2xl font-medium\">Latest projects</p>\n              <div>\n                <ion-button fill=\"clear\" class=\"text-black\">\n                  <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\" class=\"text-black\">\n                  <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n            <div class=\"flex justify-center\">\n              <ion-card class=\"w-[370px] h-[350px] border rounded-2xl border-black ml-0 shadow-none p-4\">\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-full\">\n              </ion-card>\n              <ion-card class=\"w-[170px] h-[350px] border rounded-2xl border-gray-400 shadow-none p-4\">\n                <p class=\"mt-2 text-lg text-black-1 text-center\">Colors</p>\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-[52px] mt-1\">\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-[52px] mt-1\">\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-[52px] mt-1\">\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-[52px] mt-1\">\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-[52px] mt-1\">\n              </ion-card>\n              <ion-card class=\"w-[170px] h-[350px] border rounded-2xl border-gray-400 shadow-none p-4\">\n                <p class=\"mt-2 text-lg text-black-1 text-center\">Material</p>\n              </ion-card>\n            </div>\n            <div class=\"flex items-center justify-start\">\n              <p class=\"text-black-2 text-2xl font-medium\">Skandinavian Bright</p>\n              <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/project-details\" routerDirection=\"root\">\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\n              </ion-button>\n            </div>\n            <div>\n              <p class=\"text-black-3 text-lg\">2 moodboard / 20 pieces / 2d ago</p>\n            </div>\n          </div>\n          <div class=\"mt-16\">\n            <p class=\"text-2xl font-medium text-black-2\">All projects</p>\n            <div class=\"flex flex-wrap justify-between\">\n              <div *ngFor=\"let project of projects\">\n                <ion-card class=\"w-[370px] h-[350px] border rounded-2xl border-black m-0 mt-5 shadow-none p-4\">\n                  <img src={{project.image}} class=\"w-full h-full\">\n                </ion-card>\n                <div class=\"flex items-center justify-start\">\n                  <p class=\"text-black-2 text-2xl font-medium\">{{project.projectName}}</p>\n                  <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/project-details\" routerDirection=\"root\">\n                    <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\n                  </ion-button>\n                </div>\n                <div>\n                  <p class=\"text-black-3 text-lg\">{{project.moodboard}} moodboard / {{project.pieces}} pieces / {{project.updated}} ago</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" class=\"pl-4\">\n          <div class=\"h-full bg-light rounded-2xl pl-7 pt-6\">\n            <p class=\"text-2xl font-medium\">Intiri news</p>\n            <div *ngFor=\"let n of news\" class=\"flex justify-start mt-5\">\n              <img src={{n.image}} class=\"w-14 h-14 rounded-2xl\">\n              <div class=\"ml-5\">\n                <p class=\"text-lg font-medium\">{{n.name}}</p>\n                <p class=\"text-lg text-black-2\">{{n.news}}</p>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5631:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <ion-grid class=\"px-[2%] xs:px-[5%] 2xl:container mt-[30px]\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"3\">\n          <app-step-picker\n            (changeStep)=\"goToStep($event)\"\n            [canChangeToStep]=\"canChangeToStep\"\n            [currentStepNo]=\"currentStepNo\"\n            [project]=\"project\"\n            [steps]=\"steps\"\n          ></app-step-picker>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"9\">\n          <app-new-project-step\n            (toggleSelection)=\"toggleItem($event)\"\n            [project]=\"project\"\n            [stepsOrder]=\"stepsOrder\"\n            [currentStepNo]=\"currentStepNo\"\n            [currentStep]=\"steps[currentStepNo]\"\n          ></app-new-project-step>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset-xl=\"3\">\n          <ion-buttons class=\"justify-center\">\n            <ion-button\n              class=\"back-btn\"\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\n              (click)=\"backStep()\"\n              >Back</ion-button\n            >\n            <ion-button\n              class=\"next-btn\"\n              [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\n              (click)=\"nextStep()\"\n              >Next</ion-button\n            >\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 4238:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"hero\">\n    <app-header></app-header>\n    <div class=\"2xl:container\">\n      <p class=\"text-[45px] font-medium mt-16\">Payment details</p>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-button fill=\"clear\" class=\"credit-btn\">\n            <ion-icon name=\"card-outline\"></ion-icon>\n            <p class=\"ml-2\">Credit card</p>\n          </ion-button>\n          <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">Billing address</p>\n          <div class=\"mt-[30px]\">\n            <span class=\"text-sm black-2\">Full name</span>\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[470px]\"></ion-input>\n          </div>\n          <div class=\"mt-[30px]\">\n            <span class=\"text-sm black-2\">Street</span>\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[470px]\"></ion-input>\n          </div>\n          <div class=\"mt-[30px] flex\">\n            <div>\n              <span class=\"text-sm black-2\">Postal code</span>\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[225px]\"></ion-input>\n            </div>\n            <div class=\"ml-[20px]\">\n              <span class=\"text-sm black-2\">City</span>\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[225px]\"></ion-input>\n            </div>\n          </div>\n          <div class=\"mt-[30px]\">\n            <span class=\"text-sm black-2\">City</span>\n            <ion-select class=\"border rounded-2xl border-black-2 h-[52px] w-[470px]\" interface=\"popover\">\n              <ion-select-option>Serbia</ion-select-option>\n              <ion-select-option>Norway</ion-select-option>\n            </ion-select>\n          </div>\n          <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">Billing address</p>\n          <div class=\"mt-[30px]\">\n            <span class=\"text-sm black-2\">Name on card</span>\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[470px]\"></ion-input>\n          </div>\n          <div class=\"mt-[30px]\">\n            <span class=\"text-sm black-2\">Card number</span>\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[470px]\"></ion-input>\n          </div>\n          <div class=\"mt-[30px] flex\">\n            <div>\n              <span class=\"text-sm black-2\">CVV</span>\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[225px]\"></ion-input>\n            </div>\n            <div class=\"ml-[20px]\">\n              <span class=\"text-sm black-2\">Expiration date</span>\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-[225px]\"></ion-input>\n            </div>\n          </div>\n          <div class=\"flex justify-center mt-[30px] mb-[50px]\">\n            <ion-button fill=\"clear\" class=\"continue-btn\">Continue</ion-button>\n          </div>\n        </ion-col>\n        <ion-col offset=\"2\" size=\"5\">\n          <div class=\"min-h-[580px] bg-light border border-light rounded-2xl px-[50px] pt-[50px]\">\n          <p class=\"text-2xl text-black-2 font-medium\">Order summary</p>\n          <p class=\"text-lg text-black-2 font-medium mt-[30px]\">Consultation with designer</p>\n          <p class=\"text-lg text-black-2 mt-[10px]\" *ngFor=\"let item of items\">{{item.name}}</p>\n          <ion-item-divider class=\"border-b border-secondary bg-transparent\"></ion-item-divider>\n          <div class=\"mt-[30px] flex justify-between\">\n            <p class=\"text-lg text-black-2 font-medium\">Consultation price</p>\n            <p class=\"text-lg text-black-2\">{{consultationPrice}} {{currency}}</p>\n          </div>\n          <div class=\"mt-[14px] flex justify-between\">\n            <p class=\"text-lg text-black-2 font-medium\">Number of consultations</p>\n            <p class=\"text-lg text-black-2\">{{consultationNumber}}</p>\n          </div>\n          <ion-item-divider class=\"border-b border-secondary bg-transparent\"></ion-item-divider>\n          <div class=\"mt-[30px] flex justify-between items-center mb-[50px]\">\n            <p class=\"text-lg text-black-2 font-medium\">TOTAL</p>\n            <p class=\"text-2xl text-black-2 font-medium\">{{totalPrice}} {{currency}}</p>\n          </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 6488:
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
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <ion-grid class=\"px-[2%] xs:px-[5%] xll:container mt-[30px]\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\n          <h1 class=\"font-medium text-black-1 text-5xl mt-0\">Pricing plans</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\n            <div class=\"xl-ion:w-[370px] xl-ion:h-[720px] rounded-lg text-center border pb-8\">\n                <div class=\"pt-12\">\n                    <img src=\"../../../assets/icon/free-plan.svg\" class=\"w-[100px] h-[77px]  mx-auto\" alt=\"Free Plan Img\"/>\n                </div>\n                <h3 class=\"mt-10 mx-10 mb-1 font-medium text-black-2\">Free plan</h3>\n                <hr class=\"w-[60px] h-[0px] border border-primary bg-primary mx-auto mt-[30px]\">\n                <p class=\"text-black-2 mt-[30px]\">Room sketch</p>\n                <p class=\"text-black-2 mt-[30px]\">Moodboard adjustment</p>\n                <p class=\"text-black-2 mt-[30px]\">Select products</p>\n                <p class=\"text-black-2 mt-[30px]\">Decoration</p>\n              </div>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\n            <div class=\"bg-light xl-ion:w-[370px] xl-ion:h-[720px] rounded-lg text-center pb-8\">\n                <div class=\"pt-12\">\n                    <img src=\"../../../assets/icon/premium-plan.svg\" class=\"w-[100px] h-[77px]  mx-auto\" alt=\"Premium Plan Img\"/>\n                </div>\n                <h3 class=\"mt-10 mx-10 mb-1 font-medium text-black-2\">Premium plan</h3>\n                <hr class=\"w-[60px] h-[0px] border border-primary bg-primary mx-auto mt-[30px]\">\n                <p class=\"text-black-2 mt-[30px]\">Room sketch</p>\n                <p class=\"text-black-2 mt-[30px]\">Moodboard adjustment</p>\n                <p class=\"text-black-2 mt-[30px]\">Select products</p>\n                <p class=\"text-black-2 mt-[30px]\">Decoration</p>\n                <ion-buttons class=\"justify-center mt-8\">\n                    <ion-button class=\"upgrade-btn bg-primary\">Upgrade</ion-button>\n                </ion-buttons>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5461:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <div class=\"2xl:container\">\n      <ion-button fill=\"clear\" class=\"back-btn\" routerLink=\"/my-intiri\" routerDirection=\"root\">\n        <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\n        <p>My Intiri</p>\n      </ion-button>\n      <p class=\"text-[45px] font-medium\">Skandinavian bright</p>\n      <div class=\"mt-7 flex flex-wrap justify-between\">\n        <div *ngFor=\"let mb of moodboards\">\n          <ion-card class=\"h-[350px] w-[370px] border border-black rounded-2xl m-0 mt-5 shadow-none p-4\">\n            <img src={{mb.image}} class=\"w-full h-full\">\n          </ion-card>\n          <div class=\"flex items-center justify-start\">\n            <p class=\"text-black-2 text-2xl font-medium\">{{mb.name}}</p>\n            <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/moodboard-details\" routerDirection=\"root\">\n              <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\n            </ion-button>\n          </div>\n          <div>\n            <p class=\"text-black-3 text-lg\">{{mb.pieces}} pieces / {{mb.updated}} ago</p>\n          </div>\n        </div>\n        <ion-card class=\"h-[350px] w-[370px] border border-black-3 border-dashed rounded-2xl shadow-none m-0 mt-5 p-4 flex justify-center items-center flex-col\">\n          <ion-icon name=\"add\" class=\"w-20 h-20\"></ion-icon>\n          <p class=\"text-lg font-medium\">Add new moodboard</p>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 6688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\n        <div class=\"w-[470px]\">\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\n            <p>Login</p>\n          </ion-button>\n          <h1 class=\"text-5xl font-semibold mt-7\">Forgot password?</h1>\n          <p class=\"text-lg black-2\">\n            Please enter your phone number to reset your password.\n          </p>\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"forgotPassword()\" autocomplete=\"off\">\n          <div class=\"mt-8\">\n            <span class=\"text-sm black-2\">Phone number</span>\n            <div class=\"flex justify-between\">\n              <div>\n                <ion-input class=\"border rounded-2xl border-black-2 h-14 w-32\"></ion-input>\n              </div>\n              <div>\n                <ion-input name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-80\"></ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"flex flex-col justify-center items-center\">\n            <ion-button fill=\"clear\" class=\"send-btn\" type=\"submit\">Send</ion-button>\n          </div>\n          </form>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

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
module.exports = "<ion-content\n[scrollEvents]=\"true\"\n(ionScroll)=\"logScrollEnd()\">\n  <div class=\"bg-white\">\n    <div>\n      <app-header-landing [isScrolledDown]=\"isScrolledDown\"></app-header-landing>\n      <div class=\"hero-wrapper\">\n\n        <!-- Hero Text -->\n        <div class=\"container relative\" id=\"home\">\n          <div class=\"hero-text-wrapper\">\n            <p class=\"hero-pencraft\">Welcome to Intiri</p>\n            <p class=\"hero-text\">Get <span class=\"text-primary\">IDEAS</span> for furnishing and decorating your home!</p>\n            <ion-buttons size=\"small\">\n            <ion-button class=\"btn\">Find your style</ion-button>\n            </ion-buttons>\n          </div>\n        </div>\n      </div>\n\n      <!-- Text 1 -->\n      <ion-grid id=\"how-it-works\">\n        <ion-row class=\"container\">\n          <ion-col size=\"12\" size-sm>\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\n            <img src=\"../../../assets/images/01.png\" alt=\"\">\n            <p class=\"pencraft\">How it works</p>\n            <p class=\"landing-headline\">Headline</p>\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\n            <ion-buttons>\n              <ion-button class=\"btn\">Find your style</ion-button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- Text 2 -->\n      <ion-grid>\n        <ion-row class=\"container flex-col-reverse xs:flex-row \">\n          <ion-col size=\"12\" size-sm  class=\"pt-32 pr-11 pl-11 md:pl-0\">\n            <img src=\"../../../assets/images/02.png\" alt=\"\">\n            <p class=\"pencraft\">How it works</p>\n            <p class=\"landing-headline\">Headline</p>\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\n            <ion-buttons>\n              <ion-button class=\"btn\">Find your style</ion-button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <!-- Text 3 -->\n      <ion-grid class=\"mb-12\">\n        <ion-row class=\"container\">\n          <ion-col size=\"12\" size-sm>\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\n            <img src=\"../../../assets/images/03.png\" alt=\"\">\n            <p class=\"pencraft\">How it works</p>\n            <p class=\"landing-headline\">Headline</p>\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\n            <ion-buttons>\n              <ion-button class=\"btn\">Find your style</ion-button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- Stories / Testimonials -->\n      <div class=\"bg-light bg-cover min-h-[1030px]\" id=\"stories\">\n        <ion-row class=\"container relative py-[30px] xl:py-[310px]\">\n          <ion-col size=\"12\" size-xl=\"3.5\"  class=\"ion-align-self-center pl-[5%] xl-ion:pl-0\">\n            <p class=\"pencraft\">Stories</p>\n            <p class=\"landing-headline\">You said <br/> about us</p>\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </ion-col>\n          <ion-col size=\"12\" size-xl=\"7.5\" offset-xl=\"0.75\" class=\"\">\n            <ion-slides #slides [options]=\"getOptions()\" class=\"h-[100%]\">\n              <ion-slide *ngFor=\"let comment of comments\">\n                <ion-card class=\"border rounded-2xl border-black-1 bg-transparent p-8 text-left h-[100%]\">\n                  <div class=\"mb-2\">\n                    <span class='quote-icon'></span>\n                    <span class='quote-icon ml-1'></span>\n                  </div>\n                  <p class=\"black-2 text-lg\">{{comment.text}}</p>\n                  <p class=\"text-lg font-semibold text-black mt-4\">{{comment.author}}</p>\n                </ion-card>\n              </ion-slide>\n            </ion-slides>\n            <div class=\"flex justify-end\">\n              <ion-button fill=\"clear\" (click)=\"prev()\" class=\"text-black\">\n                <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"clear\" (click)=\"next()\" class=\"text-black\">\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- Contact Us -->\n      <div id=\"contact\" class=\"bg-primary bg-cover h-[480px] text-center pt-[140px]\">\n        <p class=\"pencraft-white\">Contact us</p>\n        <p class=\"landing-headline-white\">Don't hesitate to say hi</p>\n        <ion-buttons>\n          <ion-button href=\"mailto:office@intiri.com\" class=\"contact-btn\">office@intiri.com</ion-button>\n        </ion-buttons>\n      </div>\n\n      <app-footer></app-footer>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\n        <div class=\"w-[470px]\">\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\n          <h1 class=\"font-['Allison'] text-7xl mt-16 black-2\">Welcome back</h1>\n          <h1 class=\"text-5xl font-semibold\">Login</h1>\n          <p class=\"text-lg black-2\">\n            Manage your account, create and edit projects, collaborate on design and more.\n          </p>\n          <form #loginForm=\"ngForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"login()\" autocomplete=\"off\">\n          <div class=\"mt-8\">\n            <span class=\"text-sm black-2\">Phone number</span>\n            <div class=\"flex justify-between\">\n              <div>\n                <ion-input class=\"border rounded-2xl border-black-2 h-14 w-32\"></ion-input>\n              </div>\n              <div>\n                <ion-input [(ngModel)]=\"model.phoneNumber\" name=\"phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-80\"></ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"flex flex-col justify-center items-center\">\n            <ion-button fill=\"clear\" class=\"login-btn\" type=\"submit\">Login</ion-button>\n            <ion-button fill=\"clear\" class=\"forgot-btn\" routerLink=\"/forgot-password\" routerDirection=\"root\">Forgot password?</ion-button>\n            <p class=\"text-lg black-2 mt-7\">Or</p>\n            <ion-button fill=\"clear\" class=\"vipps-btn\">VIPPS</ion-button>\n            <p class=\"text-lg black-2 mt-20\">Don't have an account?</p>\n            <ion-button fill=\"clear\" class=\"create-btn\" routerLink=\"/register\" routerDirection=\"root\">Create an account</ion-button>\n          </div>\n          </form>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div id=\"home\">\n    <app-header></app-header>\n    <ion-grid class=\"px-[2%] xs:px-[5%] xll:container mt-[30px]\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\n          <h1 class=\"font-medium text-black-1 text-5xl mt-0\">Profile</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\n          <app-profile-img-section></app-profile-img-section>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\n          <app-profile-info-section></app-profile-info-section>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset-xl=\"4\" size-xl=\"5\">\n          <ion-buttons class=\"justify-center mt-8\">\n            <ion-button class=\"save-btn\">Save changes</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\n        <div class=\"w-[470px]\">\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\n            <p>Login</p>\n          </ion-button>\n          <h1 class=\"font-['Allison'] text-7xl mt-0 black-2\">Start your journey</h1>\n          <h1 class=\"text-5xl font-semibold\">Create an account</h1>\n          <p class=\"text-lg black-2\">\n            Manage your account, create and edit projects, collaborate on design and more.\n          </p>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n            <div class=\"mt-8 flex justify-between\">\n              <div>\n                <span class=\"text-sm black-2\">First name</span>\n                <ion-input type=\"text\" formControlName=\"username\" class=\"border rounded-2xl h-14 border-black-2 w-56\"></ion-input>\n              </div>\n              <div>\n                <span class=\"text-sm black-2\">Last name</span>\n                <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2 w-56\"></ion-input>\n              </div>\n            </div>\n            <div class=\"mt-7\">\n              <span class=\"text-sm black-2\">Phone number</span>\n              <div class=\"flex justify-between\">\n                <div>\n                  <ion-input class=\"border rounded-2xl border-black-2 h-14 w-32\"></ion-input>\n                </div>\n                <div>\n                  <ion-input formControlName=\"phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-80\"></ion-input>\n                </div>\n              </div>\n            </div>\n            <div class=\"flex flex-col justify-center items-center\">\n              <ion-button type=\"submit\" fill=\"clear\" class=\"register-btn\">Register</ion-button>\n            </div>\n          </form>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 4367:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\n        <div class=\"w-[470px]\">\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\n            <p>Login</p>\n          </ion-button>\n          <h1 class=\"text-5xl font-semibold mt-7\">Reset password</h1>\n          <p class=\"text-lg black-2\">\n            Please enter your new password.\n          </p>\n          <form [formGroup]=\"resetPassForm\" (ngSubmit)=\"resetPassword()\">\n            <div class=\"mt-8\">\n              <span class=\"text-sm black-2\">Password</span>\n              <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\n                <ion-input formControlName=\"password\" type=\"password\" class=\"h-14 password-input\"></ion-input>\n                <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\n              </ion-item>\n            </div>\n            <div class=\"mt-7\">\n              <span class=\"text-sm black-2\">Repeat password</span>\n              <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\n                <ion-input formControlName=\"confirmPassword\" type=\"password\" class=\"h-14 password-input\"></ion-input>\n                <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\n              </ion-item>\n            </div>\n            <div class=\"flex flex-col justify-center items-center\">\n              <ion-button fill=\"clear\" type=\"submit\" class=\"reset-btn\">Reset password</ion-button>\n            </div>\n          </form>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

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
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\n        <div class=\"w-[470px]\">\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\n          <ion-button fill=\"clear\" class=\"register-btn\" routerLink=\"/register\" routerDirection=\"root\">\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\n            <p>Create an account</p>\n          </ion-button>\n          <h1 class=\"text-5xl font-semibold\">Sms verification</h1>\n          <p class=\"text-lg black-2\">\n            An sms with 6-digit verification code was sent to your phone.\n          </p>\n          <div class=\"mt-8\">\n            <code-input  #codeInput [codeLength]=\"6\" (codeChanged)=\"onCodeChanged($event)\" (codeCompleted)=\"onCodeCompleted($event)\">\n\n            </code-input>\n          </div>\n          <div class=\"flex flex-col justify-center items-center\">\n            <ion-button fill=\"clear\" class=\"btn\">Proceed to app</ion-button>\n            <ion-button fill=\"clear\" class=\"send-btn\">Send again</ion-button>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map