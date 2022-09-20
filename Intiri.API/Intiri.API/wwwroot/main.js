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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 7425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin-pages/consultations/consultations.page */ 7984);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 5731);
/* harmony import */ var _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/shared-guarded-pages/style/style.page */ 281);
/* harmony import */ var _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer/book-designer.page */ 5436);
/* harmony import */ var _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/end-user-pages/contact-designer/contact-designer.page */ 7396);
/* harmony import */ var _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/end-user-pages/craftsman-portal/craftsman-portal.page */ 2080);
/* harmony import */ var _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/end-user-pages/customize-moodboard/customize-moodboard.page */ 1505);
/* harmony import */ var _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/end-user-pages/my-intiri/my-intiri.page */ 8277);
/* harmony import */ var _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/end-user-pages/new-project/new-project.page */ 3735);
/* harmony import */ var _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/end-user-pages/pre-book-selection/pre-book-selection.page */ 3577);
/* harmony import */ var _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.page */ 8032);
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/landing/landing.page */ 4808);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/profile/profile.page */ 4629);
/* harmony import */ var _pages_register_register_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/register.page */ 6690);
/* harmony import */ var _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/shared-guarded-pages/moodboard/moodboard.page */ 8441);
/* harmony import */ var _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.page */ 2032);
/* harmony import */ var _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/reset-password/reset.password.page */ 5250);
/* harmony import */ var _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/sms-verification/sms-verification.page */ 970);
/* harmony import */ var _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/end-user-pages/pricing-plans/pricing-plans.page */ 9320);
/* harmony import */ var _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/end-user-pages/project-details/project-details.page */ 7807);
/* harmony import */ var _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/end-user-pages/moodboard-details/moodboard-details.page */ 8974);
/* harmony import */ var _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/end-user-pages/messenger/messenger.page */ 3947);
/* harmony import */ var _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/end-user-pages/designer-profile/designer-profile.page */ 9783);
/* harmony import */ var _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/end-user-pages/payment-details/payment-details.page */ 5643);
/* harmony import */ var _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer-profile/book-designer-profile.page */ 1525);
/* harmony import */ var _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/designer-pages/internal-designer/clients/client-list/client-list.page */ 3767);

































const routes = [
    {
        path: '',
        redirectTo: 'my-intiri',
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
        component: _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_19__.ForgotPasswordPage
    },
    {
        path: 'reset-password',
        component: _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_20__.ResetPasswordPage
    },
    {
        path: 'sms-verification',
        component: _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_21__.SmsVerificationPage
    },
    {
        path: 'how-it-works',
        component: _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_13__.HowItWorksPage
    },
    {
        path: 'profile',
        component: _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_16__.ProfilePage,
    },
    {
        path: 'book-designer',
        component: _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_6__.BookDesignerPage
    },
    {
        path: 'contact-designer',
        component: _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_7__.ContactDesignerPage
    },
    {
        path: 'designer-profile',
        component: _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_26__.DesignerProfilePage
    },
    {
        path: 'payment-details',
        component: _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_27__.PaymentDetailsPage
    },
    {
        path: 'book-designer-profile',
        component: _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_28__.BookDesignerProfilePage
    },
    {
        path: 'craftsman-portal',
        component: _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_8__.CraftsmanPortalPage
    },
    {
        path: 'pricing-plans',
        component: _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_22__.PricingPlansPage
    },
    {
        path: 'messenger',
        component: _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_25__.MessengerPage
    },
    {
        path: 'customize-moodboard',
        component: _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_9__.CustomizeMoodboardPage
    },
    {
        path: 'my-intiri',
        component: _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_10__.MyIntiriPage
    },
    {
        path: 'project-details',
        component: _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_23__.ProjectDetailsPage
    },
    {
        path: 'moodboard-details',
        component: _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_24__.MoodboardDetailsPage
    },
    {
        path: 'new-project',
        component: _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_11__.NewProjectPage
    },
    {
        path: 'pre-book-selection',
        component: _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_12__.PreBookSelectionPage
    },
    {
        path: 'dashboard',
        component: _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    },
    {
        path: 'consultations',
        component: _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_3__.ConsultationsPage
    },
    {
        path: 'designer',
        component: _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_1__.DesignerPage
    },
    {
        path: 'vendors',
        component: _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_2__.VendorPage
    },
    {
        path: 'my-moodboard',
        component: _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_4__.MyMoodboardPage
    },
    {
        path: 'client-list',
        component: _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_29__.ClientListPage
    },
    {
        path: 'style',
        component: _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_5__.StylePage
    },
    {
        path: 'moodboard',
        component: _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_18__.MoodboardPage
    }
    //TODO Add routes for client pages, after discussion
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_31__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_32__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @ionic/angular */ 3819);
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
/* harmony import */ var _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/end-user-pages/book-designer-profile/book-designer-profile.page */ 1525);
/* harmony import */ var _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/admin-pages/dashboard/dashboard.page */ 7425);
/* harmony import */ var _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/admin-pages/designer/designer.page */ 899);
/* harmony import */ var _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/admin-pages/vendor/vendor.page */ 6441);
/* harmony import */ var _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/admin-pages/consultations/consultations.page */ 7984);
/* harmony import */ var _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/designer-pages/my-moodboard/my-moodboard.page */ 5731);
/* harmony import */ var _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/designer-pages/internal-designer/clients/client-list/client-list.page */ 3767);
/* harmony import */ var _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/shared-guarded-pages/style/style.page */ 281);
/* harmony import */ var _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/shared-guarded-pages/moodboard/moodboard.page */ 8441);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/header-admin/header-admin.component */ 5263);
/* harmony import */ var _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/header-landing/header-landing.component */ 8021);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/step-picker/step-picker.component */ 1014);
/* harmony import */ var _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/new-project-step/new-project-step.component */ 8735);
/* harmony import */ var _components_profile_img_section_profile_img_section_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/profile-img-section/profile-img-section.component */ 4529);
/* harmony import */ var _components_profile_info_section_profile_info_section_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/profile-info-section/profile-info-section.component */ 4091);
/* harmony import */ var _components_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/sub-header/sub-header.component */ 9052);
/* harmony import */ var _components_header_internal_designer_header_internal_designer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/header-internal-designer/header-internal-designer.component */ 3597);
/* harmony import */ var _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/modals/login/login-modal.component */ 6974);
/* harmony import */ var _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/modals/logout-modal/logout-modal.component */ 7147);
/* harmony import */ var _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/modals/create-project-modal/create-project-modal.component */ 390);
/* harmony import */ var _components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/modals/add-designer-modal/add-designer-modal.component */ 2736);
/* harmony import */ var _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/modals/book-designer-modal/book-designer-modal.component */ 2064);
/* harmony import */ var _components_settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/settings-popover/settings-popover.component */ 6925);
/* harmony import */ var _components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/menu-popover/menu-popover.component */ 5506);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! angular-code-input */ 3891);
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pipes/time-ago.pipe */ 2541);









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
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_50__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_51__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_2__.LandingPage, _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage, _pages_register_register_page__WEBPACK_IMPORTED_MODULE_4__.RegisterPage, _pages_how_it_works_how_it_works_page__WEBPACK_IMPORTED_MODULE_5__.HowItWorksPage, _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_6__.ProfilePage, _pages_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordPage, _pages_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordPage,
            _pages_sms_verification_sms_verification_page__WEBPACK_IMPORTED_MODULE_9__.SmsVerificationPage,
            _pages_end_user_pages_new_project_new_project_page__WEBPACK_IMPORTED_MODULE_10__.NewProjectPage, _pages_end_user_pages_pre_book_selection_pre_book_selection_page__WEBPACK_IMPORTED_MODULE_11__.PreBookSelectionPage, _pages_end_user_pages_my_intiri_my_intiri_page__WEBPACK_IMPORTED_MODULE_12__.MyIntiriPage, _pages_end_user_pages_customize_moodboard_customize_moodboard_page__WEBPACK_IMPORTED_MODULE_13__.CustomizeMoodboardPage, _pages_end_user_pages_craftsman_portal_craftsman_portal_page__WEBPACK_IMPORTED_MODULE_14__.CraftsmanPortalPage, _pages_end_user_pages_contact_designer_contact_designer_page__WEBPACK_IMPORTED_MODULE_15__.ContactDesignerPage, _pages_end_user_pages_book_designer_book_designer_page__WEBPACK_IMPORTED_MODULE_16__.BookDesignerPage,
            _pages_end_user_pages_project_details_project_details_page__WEBPACK_IMPORTED_MODULE_18__.ProjectDetailsPage, _pages_end_user_pages_moodboard_details_moodboard_details_page__WEBPACK_IMPORTED_MODULE_19__.MoodboardDetailsPage, _pages_end_user_pages_pricing_plans_pricing_plans_page__WEBPACK_IMPORTED_MODULE_17__.PricingPlansPage, _pages_end_user_pages_messenger_messenger_page__WEBPACK_IMPORTED_MODULE_20__.MessengerPage, _pages_end_user_pages_designer_profile_designer_profile_page__WEBPACK_IMPORTED_MODULE_21__.DesignerProfilePage, _pages_end_user_pages_payment_details_payment_details_page__WEBPACK_IMPORTED_MODULE_22__.PaymentDetailsPage,
            _pages_admin_pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_24__.DashboardPage, _pages_admin_pages_designer_designer_page__WEBPACK_IMPORTED_MODULE_25__.DesignerPage, _pages_admin_pages_vendor_vendor_page__WEBPACK_IMPORTED_MODULE_26__.VendorPage, _pages_end_user_pages_book_designer_profile_book_designer_profile_page__WEBPACK_IMPORTED_MODULE_23__.BookDesignerProfilePage, _pages_admin_pages_consultations_consultations_page__WEBPACK_IMPORTED_MODULE_27__.ConsultationsPage,
            _pages_designer_pages_my_moodboard_my_moodboard_page__WEBPACK_IMPORTED_MODULE_28__.MyMoodboardPage, _pages_designer_pages_internal_designer_clients_client_list_client_list_page__WEBPACK_IMPORTED_MODULE_29__.ClientListPage,
            _pages_shared_guarded_pages_style_style_page__WEBPACK_IMPORTED_MODULE_30__.StylePage, _pages_shared_guarded_pages_moodboard_moodboard_page__WEBPACK_IMPORTED_MODULE_31__.MoodboardPage,
            _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_34__.HeaderLandingComponent, _components_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_33__.HeaderAdminComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_32__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__.FooterComponent, _components_header_internal_designer_header_internal_designer_component__WEBPACK_IMPORTED_MODULE_41__.HeaderInternalDesignerComponents, _components_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_40__.SubHeaderComponent,
            _components_new_project_step_new_project_step_component__WEBPACK_IMPORTED_MODULE_37__.NewProjectStepComponent, _components_step_picker_step_picker_component__WEBPACK_IMPORTED_MODULE_36__.StepPickerComponent,
            _components_profile_img_section_profile_img_section_component__WEBPACK_IMPORTED_MODULE_38__.ProfileImgSectionComponent, _components_profile_info_section_profile_info_section_component__WEBPACK_IMPORTED_MODULE_39__.ProfileInfoSectionComponent,
            _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_42__.LoginModalComponent, _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_43__.LogoutModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_44__.CreateProjectModalComponent, _components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_45__.AddDesignerModalComponent, _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_46__.BookDesignerModalComponent, _components_settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_47__.SettingsPopoverComponent, _components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_48__.MenuPopoverComponent,
            _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_49__.TimeAgoPipe
        ],
        entryComponents: [
            _components_modals_login_login_modal_component__WEBPACK_IMPORTED_MODULE_42__.LoginModalComponent, _components_modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_43__.LogoutModalComponent, _components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_44__.CreateProjectModalComponent, _components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_45__.AddDesignerModalComponent, _components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_46__.BookDesignerModalComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_52__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_53__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_54__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_55__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_55__.ReactiveFormsModule,
            angular_code_input__WEBPACK_IMPORTED_MODULE_56__.CodeInputModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_57__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_53__.IonicRouteStrategy }
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

/***/ 5263:
/*!*******************************************************************!*\
  !*** ./src/app/components/header-admin/header-admin.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAdminComponent": () => (/* binding */ HeaderAdminComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-admin.component.html?ngResource */ 1152);
/* harmony import */ var _header_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-admin.component.scss?ngResource */ 3548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 6925);








let HeaderAdminComponent = class HeaderAdminComponent {
  constructor(router, popoverController) {
    this.router = router;
    this.popoverController = popoverController;
    this.menuItems = [{
      title: 'Dashboard',
      url: '/dashboard'
    }, {
      title: 'Consultations',
      url: '/consultations'
    }, {
      title: 'Vendors',
      url: '/vendors'
    }, {
      title: 'Designers',
      url: '#'
    }, {
      title: 'Clients',
      url: '#'
    }, {
      title: 'Moodboards',
      url: '#'
    }, {
      title: 'Style',
      url: '#'
    }];
  }

  isActiveRoute(route) {
    return this.router.url === route;
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

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_3__.SettingsPopoverComponent,
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
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}];

HeaderAdminComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-header-admin',
  template: _header_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderAdminComponent);


/***/ }),

/***/ 3597:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/header-internal-designer/header-internal-designer.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInternalDesignerComponents": () => (/* binding */ HeaderInternalDesignerComponents)
/* harmony export */ });
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_internal_designer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-internal-designer.component.html?ngResource */ 9366);
/* harmony import */ var _header_internal_designer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-internal-designer.component.scss?ngResource */ 3235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 6925);








let HeaderInternalDesignerComponents = class HeaderInternalDesignerComponents {
  constructor(router, popoverController) {
    this.router = router;
    this.popoverController = popoverController;
    this.menuItems = [{
      title: 'Client',
      url: '/client-list'
    }, {
      title: 'Style',
      url: '#'
    }, {
      title: 'Moodboard',
      url: '#'
    }];
  }

  isActiveRoute(route) {
    return this.router.url === route;
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_3__.SettingsPopoverComponent,
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
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}];

HeaderInternalDesignerComponents = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-header-internal-designer',
  template: _header_internal_designer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_internal_designer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderInternalDesignerComponents);


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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/project.model */ 2744);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings-popover/settings-popover.component */ 6925);










let HeaderComponent = class HeaderComponent {
  constructor(projectService, router, popoverController) {
    this.projectService = projectService;
    this.router = router;
    this.popoverController = popoverController;
    this.menuItems = [{
      title: 'My Intiri',
      url: '/my-intiri'
    }, {
      title: 'Book a designer',
      url: '/book-designer'
    }];
  }

  isActiveRoute(route) {
    return this.router.url === route;
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _settings_popover_settings_popover_component__WEBPACK_IMPORTED_MODULE_5__.SettingsPopoverComponent,
        componentProps: {
          headerType: 'user'
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

  removeProjectDraft() {
    this.projectService.setCurrentProject(new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_3__.Project());
  }

};

HeaderComponent.ctorParameters = () => [{
  type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
}];

HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HeaderComponent);


/***/ }),

/***/ 5506:
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-popover/menu-popover.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPopoverComponent": () => (/* binding */ MenuPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-popover.component.html?ngResource */ 3879);
/* harmony import */ var _menu_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-popover.component.scss?ngResource */ 2082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MenuPopoverComponent = class MenuPopoverComponent {
    constructor() { }
    ngOnInit() { }
};
MenuPopoverComponent.ctorParameters = () => [];
MenuPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-menu-popover',
        template: _menu_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPopoverComponent);



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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-designer-modal.component.html?ngResource */ 7999);
/* harmony import */ var _add_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-designer-modal.component.scss?ngResource */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);

var AddDesignerModalComponent_1;





let AddDesignerModalComponent = AddDesignerModalComponent_1 = class AddDesignerModalComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addedDesigner() {
    var _this = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}];

AddDesignerModalComponent = AddDesignerModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-add-designer-modal',
  template: _add_designer_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_designer_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddDesignerModalComponent);


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
        this.extraPayment = false;
        this.extraPaymentAmount = 3500;
        this.numberOfConsultations = 0;
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
                id: 4, name: 'Select products'
            },
            {
                id: 5, name: 'Lining plan'
            },
            {
                id: 6, name: 'Decoration'
            },
            {
                id: 7, name: 'Other questions'
            }
        ];
    }
    totalPriceSum(event) {
        const numberOfConsultations = event.detail.value;
        this.numberOfConsultations = numberOfConsultations;
        const reg = new RegExp(/^[1-9]\d*$/g);
        if (reg.test(numberOfConsultations)) {
            if (this.extraPayment) {
                this.totalPrice = this.price * numberOfConsultations + this.extraPaymentAmount;
            }
            else {
                this.totalPrice = this.price * numberOfConsultations;
            }
        }
        else {
            this.totalPrice = 0;
        }
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    redirectToPayment() {
        this.modalController.dismiss();
        this.nav.navigateRoot('/payment-details');
    }
    isChecked(event) {
        if (this.numberOfConsultations == 0) {
            if (event.detail.checked) {
                this.extraPayment = true;
            }
            else {
                this.extraPayment = false;
            }
            this.totalPrice = 0;
            return;
        }
        if (event.detail.checked) {
            this.extraPayment = true;
            this.totalPrice = this.totalPrice + this.extraPaymentAmount;
        }
        else {
            this.extraPayment = false;
            this.totalPrice = this.totalPrice - this.extraPaymentAmount;
        }
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
            if (this.project[stepName].some(e => JSON.stringify(e) === JSON.stringify(item))) {
                return true;
            }
        }
        else { // else it's a single select
            // if it's updating sub-object
            if (stepName.includes('.')) {
                return JSON.stringify(this.project[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item);
            }
            else {
                return JSON.stringify(this.project[stepName]) === JSON.stringify(item);
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

/***/ 6925:
/*!***************************************************************************!*\
  !*** ./src/app/components/settings-popover/settings-popover.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPopoverComponent": () => (/* binding */ SettingsPopoverComponent)
/* harmony export */ });
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-popover.component.html?ngResource */ 4953);
/* harmony import */ var _settings_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-popover.component.scss?ngResource */ 5391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/logout-modal/logout-modal.component */ 7147);







let SettingsPopoverComponent = class SettingsPopoverComponent {
  constructor(modalController) {
    this.modalController = modalController;
  }

  ngOnInit() {}

  openLogoutModal() {
    var _this = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _modals_logout_modal_logout_modal_component__WEBPACK_IMPORTED_MODULE_3__.LogoutModalComponent,
        cssClass: 'small-modal-css'
      });
      yield modal.present();
    })();
  }

};

SettingsPopoverComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

SettingsPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-settings-popover',
  template: _settings_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsPopoverComponent);


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
        return !object || (Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype);
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

/***/ 9052:
/*!***************************************************************!*\
  !*** ./src/app/components/sub-header/sub-header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubHeaderComponent": () => (/* binding */ SubHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sub_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-header.component.html?ngResource */ 2177);
/* harmony import */ var _sub_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-header.component.scss?ngResource */ 2268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let SubHeaderComponent = class SubHeaderComponent {
    constructor() {
        this.slider = false;
        this.changeSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.menuItems = {
            vendors: [{ title: 'Vendors', url: '/vendors' }, { title: 'Products', url: '/products' }],
            clients: ['clients', 'inspiration'],
            moodboards: ['styles', 'materials', 'rooms', 'colors', 'pictures'],
            clientList: ['clients', 'moodboard', 'statistic']
        };
    }
    ngOnInit() { }
    goToSlide(id) {
        this.changeSlide.emit(id);
    }
};
SubHeaderComponent.ctorParameters = () => [];
SubHeaderComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    activeTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    changeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SubHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-sub-header',
        template: _sub_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubHeaderComponent);



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
        this.budget = '';
        this.roomDetails = {};
        this.colorPalette = {};
        this.moodboard = {};
    }
}


/***/ }),

/***/ 7984:
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-pages/consultations/consultations.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationsPage": () => (/* binding */ ConsultationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _consultations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultations.page.html?ngResource */ 4257);
/* harmony import */ var _consultations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultations.page.scss?ngResource */ 9631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ConsultationsPage = class ConsultationsPage {
    constructor() { }
};
ConsultationsPage.ctorParameters = () => [];
ConsultationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-consultations-page',
        template: _consultations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_consultations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConsultationsPage);



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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.page.html?ngResource */ 4652);
/* harmony import */ var _designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designer.page.scss?ngResource */ 6736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/menu-popover/menu-popover.component */ 5506);
/* harmony import */ var src_app_components_modals_add_designer_modal_add_designer_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/add-designer-modal/add-designer-modal.component */ 2736);








let DesignerPage = class DesignerPage {
  constructor(popoverController, modalController) {
    this.popoverController = popoverController;
    this.modalController = modalController;
  }

  showSettings(e) {
    var _this = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: src_app_components_menu_popover_menu_popover_component__WEBPACK_IMPORTED_MODULE_3__.MenuPopoverComponent,
        event: e,
        dismissOnSelect: true
      });
      yield popover.present();
    })();
  }

  addDesigner() {
    var _this2 = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

};

DesignerPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

DesignerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-designer-page',
  template: _designer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_designer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DesignerPage);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _client_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-list.page.html?ngResource */ 1893);
/* harmony import */ var _client_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-list.page.scss?ngResource */ 9415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let ClientListPage = class ClientListPage {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.options = {
            slidesPerView: 1,
            initialSlide: 0
        };
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
ClientListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ClientListPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides',] }]
};
ClientListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-client-list-page',
        template: _client_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientListPage);



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

/***/ 1525:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer-profile/book-designer-profile.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDesignerProfilePage": () => (/* binding */ BookDesignerProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _book_designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-designer-profile.page.html?ngResource */ 4395);
/* harmony import */ var _book_designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-designer-profile.page.scss?ngResource */ 1107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




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
    constructor() {
        this.designers = [
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Sheldon Cooper',
                logo: '../../../../assets/images/landing-img.png',
                designs: 120,
                rating: 4.5
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Mary Jane',
                logo: '../../../../assets/images/landing-img.png',
                designs: 160,
                rating: 4
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Marco Geller',
                logo: '../../../../assets/images/landing-img.png',
                designs: 100,
                rating: 3.7
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Sheldon Cooper',
                logo: '../../../../assets/images/landing-img.png',
                designs: 120,
                rating: 4.5
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Mary Jane',
                logo: '../../../../assets/images/landing-img.png',
                designs: 160,
                rating: 4
            },
            {
                image: '../../../../assets/images/landing-img.png',
                name: 'Marco Geller',
                logo: '../../../../assets/images/landing-img.png',
                designs: 100,
                rating: 3.7
            },
        ];
    }
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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _customize_moodboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize-moodboard.page.html?ngResource */ 569);
/* harmony import */ var _customize_moodboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize-moodboard.page.scss?ngResource */ 1546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 354);





let CustomizeMoodboardPage = class CustomizeMoodboardPage {
    constructor(projectService) {
        this.projectService = projectService;
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
    ngOnInit() {
        this.projectService.getStyleImages().subscribe((res) => {
            this.steps[0]['data'] = res;
        });
        this.projectService.getMaterials().subscribe((res) => {
            this.steps[1]['data'] = res.map(e => { const parsed = { ...e, path: e.imagePath }; delete parsed.imagePath; return parsed; });
        });
        this.projectService.getProducts().subscribe((res) => {
            this.steps[2]['data'] = res.map(e => { const parsed = { ...e, path: e.imagePath }; delete parsed.imagePath; return parsed; });
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
CustomizeMoodboardPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService }
];
CustomizeMoodboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-profile.page.html?ngResource */ 5662);
/* harmony import */ var _designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designer-profile.page.scss?ngResource */ 7927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/book-designer-modal/book-designer-modal.component */ 2064);







let DesignerProfilePage = class DesignerProfilePage {
  constructor(modalController, nav) {
    this.modalController = modalController;
    this.nav = nav;
    this.projects = [{
      projectName: 'Minimal',
      moodboard: '2',
      pieces: '20',
      updated: '1 week',
      image: '../../../../assets/images/landing-img.png'
    }, {
      projectName: 'Funky',
      moodboard: '3',
      pieces: '25',
      updated: '1 day',
      image: '../../../../assets/images/landing-img.png'
    }];
  }

  bookConsultationModal() {
    var _this = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_components_modals_book_designer_modal_book_designer_modal_component__WEBPACK_IMPORTED_MODULE_3__.BookDesignerModalComponent,
        cssClass: 'book-designer-modal-css'
      });
      yield modal.present();
    })();
  }

};

DesignerProfilePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}];

DesignerProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-designer-profile-page',
  template: _designer_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_designer_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DesignerProfilePage);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_intiri_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-intiri.page.html?ngResource */ 7165);
/* harmony import */ var _my_intiri_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-intiri.page.scss?ngResource */ 4723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);






let MyIntiriPage = class MyIntiriPage {
    constructor(projectService) {
        this.projectService = projectService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
        this.projects = [];
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
        this.options = {
            slidesPerView: 2,
            spaceBetween: 20,
        };
    }
    ngOnInit() {
        this.projectService.getAllProjects().subscribe((res) => {
            this.projects = res;
        });
    }
    // TODO: needs to be updated after project is allowed to have multiple moodboards!
    getPiecesNo(project) {
        return project.moodboard.colorPalettes.length + project.moodboard.materials.length + project.moodboard.products.length;
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
};
MyIntiriPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService }
];
MyIntiriPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['slides',] }]
};
MyIntiriPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
      0: 'styleImages',
      1: 'room',
      2: 'roomDetails.shape',
      3: 'colorPalette',
      4: 'moodboard',
      5: 'final'
    };
    this.currentStepNo = 0;
  }

  ngOnInit() {
    this.projectService.currentProject$.subscribe(project => {
      this.project = project;

      if (!project.name) {
        this.openStartModal();
      }
    });
    this.projectService.getStyleImages().subscribe(res => {
      this.steps[0]['data'] = res;
    });
    this.projectService.getRooms().subscribe(res => {
      this.steps[1]['data'] = res;
    });
    this.projectService.getColorPalettes().subscribe(res => {
      this.steps[3]['data'] = res;
    });
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
      this.projectService.setCurrentProject(this.project);
    }

    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  nextStep() {
    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
      this.projectService.setCurrentProject(this.project);
    }

    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  goToStep(stepNo) {
    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
      this.projectService.setCurrentProject(this.project);
    }

    if (stepNo === 4) {
      this.getMoodboardMatches();
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

  saveProject() {
    this.projectService.saveProject(this.project).subscribe(res => {
      console.log(res);
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
          return this.project.styleImages.length > 0;
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
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && this.areProjectDetailsValid() && !this.isEmpty(this.project.colorPalette);
        }

      case 5:
        {
          return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && this.areProjectDetailsValid() && !this.isEmpty(this.project.colorPalette) && !this.isEmpty(this.project.moodboard);
        }
    }

    return false;
  }

  isEmpty(object) {
    return !object || Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
  }

  areProjectDetailsValid() {
    return this.project.roomDetails['shape'] && this.project.roomDetails['size'] && !!this.project.budget;
  }

  toggleItem(item) {
    // if you change any selection, selected moodboard will reset
    if (this.currentStepNo < 4) {
      this.project.moodboard = {};
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

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

  openFinalModal() {
    var _this2 = this;

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: src_app_components_modals_create_project_modal_create_project_modal_component__WEBPACK_IMPORTED_MODULE_3__.CreateProjectModalComponent,
        componentProps: {
          final: true,
          projectName: _this2.project.name
        },
        cssClass: 'final-project-step-modal-css',
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
/* harmony import */ var C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_yokelns_Documents_Projects_Intiri_Intiri_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

/***/ 2541:
/*!****************************************!*\
  !*** ./src/app/pipes/time-ago.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


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
    parseProject(project) {
        let parsedProj = {
            styleImageIds: project.styleImages.map(e => e['id']),
            colorPaletteId: project.colorPalette['id'],
            roomId: project.room['id'],
            roomDetails: { size: project.roomDetails['size'], shape: project.roomDetails['shape'].shape },
            name: project.name
        };
        if (project.moodboard?.['id']) {
            parsedProj['moodboardId'] = project.moodboard['id'];
        }
        return parsedProj;
    }
    ;
    getMoodboardMatches(project) {
        const req_data = this.parseProject(project);
        return this.http.post(this.apiUrl + 'projects/moodboard-match', req_data);
    }
    saveProject(project) {
        const req_data = this.parseProject(project);
        return this.http.post(this.apiUrl + 'projects/add', req_data);
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
    //apiUrl: 'https://intiri-test.azurewebsites.net/'
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

/***/ 3548:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-admin/header-admin.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-popover {\n  --backdrop-opacity: 0;\n  --offset-y: 10px;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUdKO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0cmFja2luZy1ub3JtYWwgbm9ybWFsLWNhc2UgdGV4dC1ibGFjay0xIHRleHQtWzE4cHhdIGZvbnQtbWVkaXVtIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBweS00O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4geGw6ZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIG1sLTg7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLVswLjdyZW1dIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDVweF0gdy1bNDVweF0gbXItNFxyXG59XHJcblxyXG5pb24tcG9wb3ZlciB7XHJcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xyXG4gIC0tb2Zmc2V0LXk6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn0iXX0= */";

/***/ }),

/***/ 3235:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/header-internal-designer/header-internal-designer.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1pbnRlcm5hbC1kZXNpZ25lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUlKO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUFGIiwiZmlsZSI6ImhlYWRlci1pbnRlcm5hbC1kZXNpZ25lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0cmFja2luZy1ub3JtYWwgbm9ybWFsLWNhc2UgdGV4dC1bMThweF0gZm9udC1tZWRpdW0gdGV4dC1ibGFjay0xIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBweS00O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4geGw6ZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIG1sLTg7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLVswLjdyZW1dIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDVweF0gdy1bNDVweF0gbXItNFxyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5225:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".white-header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(241 245 249 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-weight: 700;\n  text-transform: none;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 576px) {\n\n  .header-wrapper {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    max-width: 640px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .header-wrapper {\n    max-width: 768px;\n    padding-right: 4rem;\n    padding-left: 4rem;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .header-wrapper {\n    max-width: 992px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .header-wrapper {\n    max-width: 1024px;\n    padding-right: 10rem;\n    padding-left: 10rem;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .header-wrapper {\n    max-width: 1200px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .header-wrapper {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1340px) {\n\n  .header-wrapper {\n    max-width: 1340px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .header-wrapper {\n    max-width: 1536px;\n  }\n}\n\n.header-wrapper {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n@media (min-width: 640px) {\n\n  .header-wrapper {\n    margin-top: 3rem;\n  }\n}\n\n.header-buttons {\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n@media (min-width: 768px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsd0JBQUE7RUFBQSxzQkFBQTtFQUFBLHlEQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUEsZ0JBQUE7SUFBQSxtQkFBQTtJQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQTtJQUFBLGdCQUFBO0lBQUEsbUJBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQSxpQkFBQTtJQUFBLG9CQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEseUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlLWhlYWRlciB7XHJcbiAgQGFwcGx5IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0xMDBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgQGFwcGx5IG5vcm1hbC1jYXNlIHRleHQtYmxhY2stMSBmb250LWJvbGQgaG92ZXI6dGV4dC1ibGFjay0yIG14LTFcclxufVxyXG5cclxuLmhlYWRlci13cmFwcGVyIHtcclxuICBAYXBwbHkgY29udGFpbmVyIGZsZXggaXRlbXMtY2VudGVyIHB5LTQgbXQtNCBzbTptdC0xMlxyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4gbWQ6ZmxleCBmbGV4LTEganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC0yXHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: none;\n  letter-spacing: 0em;\n  color: var(--ion-color-black-1);\n}\n\n.btn:hover {\n  color: var(--ion-color-black-2);\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.header-buttons {\n  margin-left: 2rem;\n  display: none;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n@media (min-width: 1280px) {\n\n  .header-buttons {\n    display: flex;\n  }\n}\n\n.header-icon {\n  margin-right: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.75rem;\n  background-color: var(--ion-color-light);\n  padding: 0.7rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--ion-color-primary);\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n\n.header-profile-img {\n  margin-right: 1rem;\n  height: 45px;\n  width: 45px;\n  border-radius: 0.75rem;\n  object-fit: cover;\n}\n\nion-header::after {\n  border-bottom: none;\n  border: 0px;\n  border-bottom-color: transparent;\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlFO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsc0JBQUE7RUFBQSx3Q0FBQTtFQUFBLGVBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBOztBQUlKO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUFGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIEBhcHBseSB0cmFja2luZy1ub3JtYWwgbm9ybWFsLWNhc2UgdGV4dC1ibGFjay0xIHRleHQtWzE4cHhdIGZvbnQtbWVkaXVtIGhvdmVyOnRleHQtYmxhY2stMiBteC0xO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBweS00O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ1dHRvbnMge1xyXG4gIEBhcHBseSBoaWRkZW4geGw6ZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIG1sLTg7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgICBAYXBwbHkgdGV4dC1wcmltYXJ5IHRleHQtMnhsIHJvdW5kZWQteGwgYmctbGlnaHQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS04MCBwLVswLjdyZW1dIG1yLTJcclxufVxyXG5cclxuLmhlYWRlci1wcm9maWxlLWltZyB7XHJcbiAgICBAYXBwbHkgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgaC1bNDVweF0gdy1bNDVweF0gbXItNFxyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2082:
/*!********************************************************************************!*\
  !*** ./src/app/components/menu-popover/menu-popover.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6898:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/modals/add-designer-modal/add-designer-modal.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.phone-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    min-width: 130px\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.plus-icon-wrapper {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 81px;\n\n    width: 81px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-light);\n\n    padding: 0.5rem;\n\n    font-size: 1.5rem;\n\n    line-height: 2rem;\n\n    color: var(--ion-color-primary)\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kZXNpZ25lci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBLHFCQUFBOztJQUFBLHdDQUFBOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImFkZC1kZXNpZ25lci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xXHJcbn1cclxuXHJcbi5waG9uZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBteC0yIG1pbi13LVsxMzBweF1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIEBhcHBseSBoLTEyXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTRcclxufVxyXG5cclxuLnBsdXMtaWNvbi13cmFwcGVyIHtcclxuICAgIEBhcHBseSBteC1hdXRvIHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgYmctbGlnaHQgcC0yIGgtWzgxcHhdIHctWzgxcHhdXHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 829:
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
module.exports = ".logout-icon-wrapper {\n    margin-left: auto;\n    margin-right: auto;\n    height: 60px;\n    width: 60px;\n    border-radius: 9999px;\n    background-color: var(--ion-color-light);\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtJQUFBLGlCQUFBO0lBQUEsa0JBQUE7SUFBQSxZQUFBO0lBQUEsV0FBQTtJQUFBLHFCQUFBO0lBQUEsd0NBQUE7SUFBQSxlQUFBO0lBQUEsaUJBQUE7SUFBQSxpQkFBQTtJQUFBO0FBQUEiLCJmaWxlIjoibG9nb3V0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvdXQtaWNvbi13cmFwcGVyIHtcclxuICBAYXBwbHkgbXgtYXV0byB0ZXh0LXByaW1hcnkgdGV4dC0yeGwgcm91bmRlZC1mdWxsIGJnLWxpZ2h0IHAtMiBoLVs2MHB4XSB3LVs2MHB4XVxyXG59Il19 */";

/***/ }),

/***/ 6166:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".step-title {\n  margin-top: 0.25rem;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  color: var(--ion-color-black-1)\n}\n\n.step-subtitle {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: var(--ion-color-black-3)\n}\n\n.step-item-wrapper,  .moodboard-item-wrapper {\n  margin-top: 1rem;\n  height: 130px;\n  width: 100%;\n  cursor: pointer;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-black-3)\n}\n\n.step-item-wrapper:hover,  .moodboard-item-wrapper:hover {\n  border-width: 3px;\n  opacity: 0.8\n}\n\n@media (min-width: 1024px) {\n\n  .step-item-wrapper,  .moodboard-item-wrapper {\n    height: 180px\n  }\n}\n\n.moodboard-item-wrapper {\n  height: 230px\n}\n\n@media (min-width: 1024px) {\n\n  .moodboard-item-wrapper {\n    height: 310px\n  }\n}\n\n.selected-item {\n  border-width: 3px;\n  border-color: var(--ion-color-primary)\n}\n\n.bigger-margin {\n  margin-bottom: 2.5rem\n}\n\n.step-image {\n  height: 100%;\n  width: 100%;\n  border-radius: 0.125rem;\n  object-fit: cover;\n  padding: 0.5rem\n}\n\n.step-icon-wrapper {\n  margin: 0.5rem;\n  height: 87%;\n  border-radius: 0.125rem;\n  background-color: var(--ion-color-light);\n  padding-top: 30px\n}\n\n@media (min-width: 1024px) {\n\n  .step-icon-wrapper {\n    padding-top: 50px\n  }\n}\n\n.step-color-wrapper {\n  margin: 0.5rem;\n  height: 87%;\n  border-radius: 0.125rem\n}\n\n.step-icon {\n  margin-left: auto;\n  margin-right: auto;\n  height: 50px;\n  width: 50px\n}\n\n.step-items {\n  margin-bottom: 0.75rem;\n  max-height: 700px;\n  min-height: 490px;\n  overflow: auto\n}\n\n.step-items::-webkit-scrollbar {\n  width: 5px;\n  background-color: transparent;\n  opacity: 0\n}\n\n.step-items:hover::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(207 207 207 / var(--tw-bg-opacity))\n}\n\n.step-items::-webkit-scrollbar-thumb {\n  --tw-bg-opacity: 1;\n  background-color: rgb(223 223 223 / var(--tw-bg-opacity));\n  transition-duration: 1000ms\n}\n\n.input {\n  margin-top: 1rem;\n  width: 300px;\n  flex: 1 1 0%\n}\n\n.result-grid {\n  display: grid;\n  grid-auto-flow: row dense;\n  grid-template-columns: repeat(13, minmax(0, 1fr));\n  gap: 0.75rem\n}\n\n.item-sm {\n  background-color: var(--ion-color-light);\n  height: 53px\n}\n\n.item-sm-tall {\n  background-color: var(--ion-color-secondary);\n  grid-row: auto/span 3;\n  height: 184px\n}\n\n.item-md {\n  background-color: var(--ion-color-primary);\n  background-size: cover !important;\n  grid-column: auto/span 2;\n  grid-row: auto/span 1.5;\n  height: 86px\n}\n\n.item-lg {\n  background-image: url('/assets/images/landing-img.png');\n  background-size: cover !important;\n  grid-column: auto/span 4;\n  grid-row: auto/span 3;\n  height: 184px\n}\n\n.item-lg-tall {\n  background-image: url('/assets/images/img-01.png');\n  background-size: cover !important;\n  grid-column: auto/span 4;\n  grid-row: auto/span 6;\n  height: 381px\n}\n\n.step-items-row {\n  column-gap: 2%\n}\n\nion-input {\n  height: 3rem\n}\n\nion-select {\n  height: 3rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-black-2);\n  padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7O0FBS0E7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsaUJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsdUJBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxjQUFBO0VBQUEsV0FBQTtFQUFBLHVCQUFBO0VBQUEsd0NBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsY0FBQTtFQUFBLFdBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLFlBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsc0JBQUE7RUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLFVBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxrQkFBQTtFQUFBLHlEQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGdCQUFBO0VBQUEsWUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxhQUFBO0VBQUEseUJBQUE7RUFBQSxpREFBQTtFQUFBO0FBQUE7O0FBS0U7RUFBQSx3Q0FBQTtFQUNBO0FBREE7O0FBSUE7RUFBQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0E7QUFGQTs7QUFLQTtFQUFBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0E7QUFKQTs7QUFPQTtFQUFBLHVEQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0E7QUFKQTs7QUFPQTtFQUFBLGtEQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0E7QUFKQTs7QUFTRjtFQUFBO0FBQUE7O0FBR0E7RUFBQTtBQUFBOztBQUdBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxzQ0FBQTtFQUFBO0FBQUEiLCJmaWxlIjoibmV3LXByb2plY3Qtc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwLXRpdGxlIHtcclxuICBAYXBwbHkgdGV4dC1ibGFjay0xIHRleHQtNHhsIG10LTE7XHJcbn1cclxuXHJcbi5zdGVwLXN1YnRpdGxlIHtcclxuICBAYXBwbHkgdGV4dC1ibGFjay0zIHRleHQtYmFzZTtcclxufVxyXG5cclxuLnN0ZXAtaXRlbS13cmFwcGVyIHtcclxuICBAYXBwbHkgcm91bmRlZC0yeGwgYm9yZGVyLWJsYWNrLTMgYm9yZGVyIGhvdmVyOmJvcmRlci1bM3B4XSBob3ZlcjpvcGFjaXR5LTgwIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLVsxMzBweF0gbGc6aC1bMTgwcHhdIG10LTQ7XHJcbn1cclxuXHJcbi5tb29kYm9hcmQtaXRlbS13cmFwcGVyIHtcclxuICBAZXh0ZW5kIC5zdGVwLWl0ZW0td3JhcHBlcjtcclxuICBAYXBwbHkgaC1bMjMwcHhdIGxnOmgtWzMxMHB4XTtcclxufVxyXG5cclxuLnNlbGVjdGVkLWl0ZW0ge1xyXG4gIEBhcHBseSBib3JkZXItWzNweF0gYm9yZGVyLXByaW1hcnk7XHJcbn1cclxuXHJcbi5iaWdnZXItbWFyZ2luIHtcclxuICBAYXBwbHkgbWItMTA7XHJcbn1cclxuXHJcbi5zdGVwLWltYWdlIHtcclxuICBAYXBwbHkgb2JqZWN0LWNvdmVyIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1zbSBwLTI7XHJcbn1cclxuXHJcbi5zdGVwLWljb24td3JhcHBlciB7XHJcbiAgQGFwcGx5IGgtWzg3JV0gcm91bmRlZC1zbSBtLTIgYmctbGlnaHQgcHQtWzMwcHhdIGxnOnB0LVs1MHB4XTtcclxufVxyXG5cclxuLnN0ZXAtY29sb3Itd3JhcHBlciB7XHJcbiAgQGFwcGx5IGgtWzg3JV0gcm91bmRlZC1zbSBtLTI7XHJcbn1cclxuXHJcbi5zdGVwLWljb24ge1xyXG4gIEBhcHBseSBoLVs1MHB4XSB3LVs1MHB4XSBteC1hdXRvO1xyXG59XHJcblxyXG4uc3RlcC1pdGVtcyB7XHJcbiAgQGFwcGx5IG1pbi1oLVs0OTBweF0gbWF4LWgtWzcwMHB4XSBvdmVyZmxvdy1hdXRvIG1iLTM7XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgQGFwcGx5IG9wYWNpdHktMCB3LVs1cHhdIGJnLXRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3RlcC1pdGVtczpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIEBhcHBseSBiZy1bI2NmY2ZjZl07XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW1zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgQGFwcGx5IGJnLVsjZGZkZmRmXSBkdXJhdGlvbi0xMDAwO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIEBhcHBseSBtdC00IGZsZXgtMSB3LVszMDBweF07XHJcbn1cclxuXHJcbi5yZXN1bHQtZ3JpZCB7XHJcbiAgQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLTEzIGdhcC0zIGdyaWQtZmxvdy1yb3ctZGVuc2U7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAmLXNtIHtcclxuICAgIEBhcHBseSBiZy1saWdodDtcclxuICAgIGhlaWdodDogNTNweDtcclxuICB9XHJcbiAgJi1zbS10YWxsIHtcclxuICAgIEBhcHBseSBiZy1zZWNvbmRhcnk7XHJcbiAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMztcclxuICAgIGhlaWdodDogMTg0cHg7XHJcbiAgfVxyXG4gICYtbWQge1xyXG4gICAgQGFwcGx5IGJnLXByaW1hcnk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMjtcclxuICAgIGdyaWQtcm93OiBhdXRvIC8gc3BhbiAxLjU7XHJcbiAgICBoZWlnaHQ6IDg2cHg7XHJcbiAgfVxyXG4gICYtbGcge1xyXG4gICAgQGFwcGx5IGJnLWxhbmRpbmctaW1nO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDQ7XHJcbiAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gMztcclxuICAgIGhlaWdodDogMTg0cHg7XHJcbiAgfVxyXG4gICYtbGctdGFsbCB7XHJcbiAgICBAYXBwbHkgYmctaW1nLTAxO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDQ7XHJcbiAgICBncmlkLXJvdzogYXV0byAvIHNwYW4gNjtcclxuICAgIGhlaWdodDogMzgxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcC1pdGVtcy1yb3cge1xyXG4gIEBhcHBseSBnYXAteC1bMiVdO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgQGFwcGx5IGgtMTI7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7575:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".change-img-btn {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-bottom: 2rem;\n    height: 2.5rem;\n    border-radius: 0.75rem;\n    border-width: 1px;\n    border-color: var(--ion-color-primary);\n    background-color: transparent;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    font-weight: 500;\n    text-transform: none;\n    color: var(--ion-color-primary)\n}\n.change-img-btn:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW1nLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxtQkFBQTtJQUFBLG9CQUFBO0lBQUEsbUJBQUE7SUFBQSxjQUFBO0lBQUEsc0JBQUE7SUFBQSxpQkFBQTtJQUFBLHNDQUFBO0lBQUEsNkJBQUE7SUFBQSxrQkFBQTtJQUFBLG1CQUFBO0lBQUEsZ0JBQUE7SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUEiLCJmaWxlIjoicHJvZmlsZS1pbWctc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtaW1nLWJ0biB7XHJcbiAgICBAYXBwbHkgaG92ZXI6b3BhY2l0eS04MCBiZy10cmFuc3BhcmVudCB0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW0gbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItcHJpbWFyeSBib3JkZXIgcHgtNCBteC0yIG1iLTggaC0xMFxyXG59Il19 */";

/***/ }),

/***/ 8397:
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.phone-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    min-width: 130px\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtaW5mby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJwcm9maWxlLWluZm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWlucHV0IHtcclxuICAgIEBhcHBseSBtdC00IG14LTIgZmxleC0xXHJcbn1cclxuXHJcbi5waG9uZS1pbnB1dCB7XHJcbiAgICBAYXBwbHkgbXQtNCBteC0yIG1pbi13LVsxMzBweF1cclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIEBhcHBseSBoLTEyXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIHByLTRcclxufSJdfQ== */";

/***/ }),

/***/ 5391:
/*!****************************************************************************************!*\
  !*** ./src/app/components/settings-popover/settings-popover.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-icon {\n    margin-right: 0.5rem;\n    cursor: pointer;\n    border-radius: 0.75rem;\n    background-color: var(--ion-color-light);\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: var(--ion-color-primary)\n}\n.header-icon:hover {\n    opacity: 0.8\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7SUFBQSxvQkFBQTtJQUFBLGVBQUE7SUFBQSxzQkFBQTtJQUFBLHdDQUFBO0lBQUEsZUFBQTtJQUFBLGlCQUFBO0lBQUEsaUJBQUE7SUFBQTtBQUFBO0FBQUE7SUFBQTtBQUFBIiwiZmlsZSI6InNldHRpbmdzLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWljb24ge1xyXG4gICAgQGFwcGx5IHRleHQtcHJpbWFyeSB0ZXh0LTJ4bCByb3VuZGVkLXhsIGJnLWxpZ2h0IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODAgcC0yIG1yLTJcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 9526:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".project-step {\n\n    margin-left: 5%;\n\n    margin-right: 5%;\n\n    display: inline-block;\n\n    width: 60px;\n\n    cursor: pointer;\n\n    border-color: var(--ion-color-secondary);\n\n    padding-top: 32px;\n\n    padding-bottom: 32px\n}\n\n.project-step:hover {\n\n    opacity: 0.8\n}\n\n@media (min-width: 1200px) {\n\n    .project-step {\n\n        margin-left: auto;\n\n        margin-right: auto;\n\n        display: block;\n\n        border-right-width: 0px;\n\n        border-bottom-width: 1px\n    }\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    cursor: default\n}\n\n.no-border {\n\n    border-width: 0px\n}\n\n.project-step-icon {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    height: 30px;\n\n    width: 30px;\n\n    background-size: cover\n}\n\n.project-step-text {\n\n    margin-top: 1rem;\n\n    margin-left: -17px;\n\n    width: 98px;\n\n    text-align: center;\n\n    color: var(--ion-color-primary)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsV0FBQTs7SUFBQSxlQUFBOztJQUFBLHdDQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTs7UUFBQSxpQkFBQTs7UUFBQSxrQkFBQTs7UUFBQSxjQUFBOztRQUFBLHVCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJRTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlGOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZ0JBQUE7O0lBQUEsa0JBQUE7O0lBQUEsV0FBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6InN0ZXAtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtc3RlcCB7XHJcbiAgQGFwcGx5IGlubGluZS1ibG9jayB4bC1pb246YmxvY2sgdy1bNjBweF0gcHktWzMycHhdICB4bC1pb246Ym9yZGVyLXItMCB4bC1pb246Ym9yZGVyLWIgYm9yZGVyLXNlY29uZGFyeSBteC1bNSVdIHhsLWlvbjpteC1hdXRvIGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBjdXJzb3ItZGVmYXVsdFxyXG59XHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBAYXBwbHkgYm9yZGVyLTA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0ZXAtaWNvbiB7XHJcbiAgQGFwcGx5IHctWzMwcHhdIGgtWzMwcHhdIG14LWF1dG8gYmctY292ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0ZXAtdGV4dCB7XHJcbiAgQGFwcGx5IHRleHQtY2VudGVyIG10LTQgdGV4dC1wcmltYXJ5IHctWzk4cHhdIG1sLVstMTdweF07XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2268:
/*!****************************************************************************!*\
  !*** ./src/app/components/sub-header/sub-header.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header-buttons {\n\n    margin-left: 2rem;\n\n    display: flex;\n\n    height: 100%;\n\n    flex: 1 1 0%;\n\n    align-items: center;\n\n    gap: 0.5rem\n}\n\n.btn {\n\n    margin-left: 0.25rem;\n\n    margin-right: 0.25rem;\n\n    font-size: 18px;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    letter-spacing: 0em;\n\n    color: var(--ion-color-black-1)\n}\n\n.btn:hover {\n\n    color: var(--ion-color-black-2)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsaUJBQUE7O0lBQUEsYUFBQTs7SUFBQSxZQUFBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxvQkFBQTs7SUFBQSxxQkFBQTs7SUFBQSxlQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJzdWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1idXR0b25zIHtcclxuICAgIEBhcHBseSBmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIgZ2FwLTIgbWwtOCBoLVsxMDAlXTtcclxuICB9XHJcbi5idG4ge1xyXG4gICAgQGFwcGx5IG5vcm1hbC1jYXNlIHRleHQtYmxhY2stMSBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LWJsYWNrLTIgbXgtMSB0cmFja2luZy1ub3JtYWwgdGV4dC1bMThweF07XHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 9631:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin-pages/consultations/consultations.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".save-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.save-btn:hover {\n\n    opacity: 0.8\n}\n\n.consultations-input-wrapper {\n\n    position: relative;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.consultations-input {\n\n    height: 3.5rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.currency-label {\n\n    position: absolute;\n\n    bottom: 16px;\n\n    right: 13px;\n\n    z-index: 50;\n\n    color: var(--ion-color-black-3)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztJQUFBLG1CQUFBOztJQUFBLG9CQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsMENBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGtCQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsY0FBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiY29uc3VsdGF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNhdmUtYnRuIHtcclxuICAgIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwXHJcbiAgfVxyXG5cclxuICAuY29uc3VsdGF0aW9ucy1pbnB1dC13cmFwcGVyIHtcclxuICAgIEBhcHBseSBtdC00IGZsZXgtMSByZWxhdGl2ZVxyXG59XHJcblxyXG4uY29uc3VsdGF0aW9ucy1pbnB1dCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTQgYm9yZGVyLWJsYWNrLTJcclxufVxyXG5cclxuLmN1cnJlbmN5LWxhYmVsIHtcclxuICAgIEBhcHBseSBhYnNvbHV0ZSBib3R0b20tWzE2cHhdIHJpZ2h0LVsxM3B4XSB6LTUwIHRleHQtYmxhY2stM1xyXG59Il19 */";

/***/ }),

/***/ 5117:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.total {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 200px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.sales {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 426px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.designers {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 882px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n\n.trending {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 426px;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7O0lBQUEsWUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxzQ0FBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG1CQUFBOztJQUFBLFlBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcclxuICAgIEBhcHBseSBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBwci00XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgaC1bMjAwcHhdIG1iLVszMHB4XVxyXG59XHJcblxyXG4uc2FsZXMge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIGgtWzQyNnB4XSBtYi1bMzBweF1cclxufVxyXG5cclxuLmRlc2lnbmVycyB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgaC1bODgycHhdIG1iLVszMHB4XVxyXG59XHJcblxyXG4udHJlbmRpbmcge1xyXG4gICAgQGFwcGx5IGJvcmRlciByb3VuZGVkLTJ4bCBoLTEyIGJvcmRlci1ibGFjay0yIGgtWzQyNnB4XSBtYi1bMzBweF1cclxufSJdfQ== */";

/***/ }),

/***/ 6736:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n\n.designer {\n\n    margin-bottom: 30px;\n\n    height: 3rem;\n\n    height: 320px;\n\n    overflow: hidden;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBLHNDQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsbUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxhQUFBOztJQUFBLGdCQUFBOztJQUFBLG1CQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoiZGVzaWduZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcbiAgICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNFxyXG59XHJcblxyXG4uZGVzaWduZXIge1xyXG4gICAgQGFwcGx5ICBib3JkZXIgcm91bmRlZC0yeGwgaC0xMiBib3JkZXItYmxhY2stMiBoLVszMjBweF0gbWItWzMwcHhdIG92ZXJmbG93LWhpZGRlbjtcclxuICAgIC8vLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggOHB4IDMycHggMTdweCByZ2IoMCAwIDAgLyA4JSk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1989:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".profile-input {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    margin-top: 1rem;\n\n    flex: 1 1 0%\n}\n\n.add-vendor-btn {\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    background-color: var(--ion-color-primary);\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    font-weight: 500;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.add-vendor-btn:hover {\n\n    opacity: 0.8\n}\n\nion-input {\n\n    height: 3rem\n}\n\nion-select {\n\n    height: 3rem;\n\n    border-radius: 1rem;\n\n    border-width: 1px;\n\n    border-color: var(--ion-color-black-2);\n\n    padding-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxjQUFBOztJQUFBLHNCQUFBOztJQUFBLDBDQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBLGdCQUFBOztJQUFBLG9CQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFlBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0NBQUE7O0lBQUE7QUFBQSIsImZpbGUiOiJ2ZW5kb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5wdXQge1xyXG4gIEBhcHBseSBtdC00IG14LTIgZmxleC0xO1xyXG59XHJcblxyXG4uYWRkLXZlbmRvci1idG4ge1xyXG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTgwIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBub3JtYWwtY2FzZSByb3VuZGVkLXhsIHB4LTQgbXgtMiBoLTEwO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIEBhcHBseSBoLTEyO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBAYXBwbHkgYm9yZGVyIHJvdW5kZWQtMnhsIGgtMTIgYm9yZGVyLWJsYWNrLTIgcHItNDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9415:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/clients/client-list/client-list.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn {\n  padding-left: 0px;\n  padding-right: 0px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  text-transform: none;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n.active-btn {\n  color: var(--ion-color-primary);\n}\n\n.avatar-img {\n  height: 70px !important;\n  width: 70px !important;\n  border-radius: 15px;\n}\n\n.moodboard-img {\n  height: 100% !important;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiY2xpZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgQGFwcGx5IHRleHQtYmxhY2sgbm9ybWFsLWNhc2UgdGV4dC1sZyBweC0wXHJcbn1cclxuXHJcbi5hY3RpdmUtYnRuIHtcclxuICBAYXBwbHkgdGV4dC1wcmltYXJ5O1xyXG59XHJcblxyXG4uYXZhdGFyLWltZyB7XHJcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubW9vZGJvYXJkLWltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 5919:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1tb29kYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1107:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer-profile/book-designer-profile.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".time-btn {\n  height: 46px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-light);\n  background-color: var(--ion-color-light);\n  padding: 0px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 400;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  text-transform: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGVzaWduZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLG9DQUFBO0VBQUEsd0NBQUE7RUFBQSxZQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsMENBQUE7RUFDQTtBQURBIiwiZmlsZSI6ImJvb2stZGVzaWduZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZS1idG4ge1xyXG4gIEBhcHBseSBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtMnhsIGJnLWxpZ2h0IHRleHQtYmxhY2sgdGV4dC1sZyBoLVs0NnB4XSBwLTAgcHgtMiBmb250LW5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4iXX0= */";

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
module.exports = ".disabled {\n    pointer-events: none;\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZS1tb29kYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0lBQUEsb0JBQUE7SUFBQTtBQUFBIiwiZmlsZSI6ImN1c3RvbWl6ZS1tb29kYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcclxuICBAYXBwbHkgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7927:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ25lci1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4013:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".chat {\n\n    height: 490px;\n\n    overflow: auto;\n\n    border-bottom-width: 1px;\n\n    border-color: var(--ion-color-secondary);\n\n    padding-top: 25px;\n\n    padding-bottom: 25px\n}\n\n.chat-input {\n\n    display: flex;\n\n    height: 102px;\n\n    align-items: center\n}\n\n.chat-bubble,  .chat-right,  .chat-left {\n\n    clear: both;\n\n    margin-top: 5px;\n\n    margin-bottom: 5px;\n\n    max-width: 400px;\n\n    padding: 15px;\n\n    text-align: left\n}\n\n.chat-left {\n\n    margin-left: 55px;\n\n    border-bottom-right-radius: 0.5rem;\n\n    border-bottom-left-radius: 0.5rem;\n\n    border-top-right-radius: 0.5rem;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity))\n}\n\n.chat-right {\n\n    float: right;\n\n    margin-right: 27px;\n\n    border-bottom-right-radius: 0.5rem;\n\n    border-bottom-left-radius: 0.5rem;\n\n    border-top-left-radius: 0.5rem;\n\n    background-color: var(--ion-color-secondary)\n}\n\n.chat::-webkit-scrollbar {\n\n    width: 4px;\n\n    background-color: transparent;\n\n    opacity: 0\n}\n\n.chat:hover::-webkit-scrollbar-thumb {\n\n    background-color: var(--ion-color-primary)\n}\n\n.chat::-webkit-scrollbar-thumb {\n\n    background-color: var(--ion-color-secondary);\n\n    transition-duration: 1000ms\n}\n\n.img-btn {\n\n    margin-right: 20px;\n\n    cursor: pointer;\n\n    font-size: 32px;\n\n    color: var(--ion-color-primary)\n}\n\n.send-btn-wrapper {\n\n    margin-right: 20px;\n\n    height: 38px;\n\n    width: 38px;\n\n    border-radius: 9999px;\n\n    background-color: var(--ion-color-primary);\n\n    padding: 10px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.send-btn {\n\n    margin-top: -1px;\n\n    cursor: pointer;\n\n    font-size: 22px\n}\n\n.disabled {\n\n    pointer-events: none;\n\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3Nlbmdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0lBQUEsYUFBQTs7SUFBQSxjQUFBOztJQUFBLHdCQUFBOztJQUFBLHdDQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBSUU7O0lBQUEsYUFBQTs7SUFBQSxhQUFBOztJQUFBO0FBQUE7O0FBSUY7O0lBQUEsV0FBQTs7SUFBQSxlQUFBOztJQUFBLGtCQUFBOztJQUFBLGdCQUFBOztJQUFBLGFBQUE7O0lBQUE7QUFBQTs7QUFLQTs7SUFBQSxpQkFBQTs7SUFBQSxrQ0FBQTs7SUFBQSxpQ0FBQTs7SUFBQSwrQkFBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBOztBQUtBOztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUEsa0NBQUE7O0lBQUEsaUNBQUE7O0lBQUEsOEJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxVQUFBOztJQUFBLDZCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSw0Q0FBQTs7SUFBQTtBQUFBOztBQUlFOztJQUFBLGtCQUFBOztJQUFBLGVBQUE7O0lBQUEsZUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGtCQUFBOztJQUFBLFlBQUE7O0lBQUEsV0FBQTs7SUFBQSxxQkFBQTs7SUFBQSwwQ0FBQTs7SUFBQSxhQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZ0JBQUE7O0lBQUEsZUFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLG9CQUFBOztJQUFBO0FBQUEiLCJmaWxlIjoibWVzc2VuZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcclxuICBAYXBwbHkgaC1bNDkwcHhdIGJvcmRlci1iIGJvcmRlci1zZWNvbmRhcnkgcHktWzI1cHhdIG92ZXJmbG93LWF1dG87XHJcbn1cclxuXHJcbi5jaGF0LWlucHV0IHtcclxuICAgIEBhcHBseSBmbGV4IGgtWzEwMnB4XSBpdGVtcy1jZW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZSB7XHJcbiAgQGFwcGx5IGNsZWFyLWJvdGggIHAtWzE1cHhdIHRleHQtbGVmdCBteS1bNXB4XSBtYXgtdy1bNDAwcHhdO1xyXG59XHJcblxyXG4uY2hhdC1sZWZ0IHtcclxuICBAZXh0ZW5kIC5jaGF0LWJ1YmJsZTtcclxuICBAYXBwbHkgYmctd2hpdGUgbWwtWzU1cHhdIHJvdW5kZWQtYi1sZyByb3VuZGVkLXRyLWxnO1xyXG59XHJcblxyXG4uY2hhdC1yaWdodCB7XHJcbiAgQGV4dGVuZCAuY2hhdC1idWJibGU7XHJcbiAgQGFwcGx5IGZsb2F0LXJpZ2h0IGJnLXNlY29uZGFyeSBtci1bMjdweF0gcm91bmRlZC1iLWxnIHJvdW5kZWQtdGwtbGc7XHJcbn1cclxuXHJcbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgQGFwcGx5IG9wYWNpdHktMCB3LVs0cHhdIGJnLXRyYW5zcGFyZW50O1xyXG59XHJcbi5jaGF0OmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgQGFwcGx5IGJnLXByaW1hcnk7XHJcbn1cclxuLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBAYXBwbHkgYmctc2Vjb25kYXJ5IGR1cmF0aW9uLTEwMDA7XHJcbn1cclxuXHJcbi5pbWctYnRuIHtcclxuICAgIEBhcHBseSB0ZXh0LVszMnB4XSBtci1bMjBweF0gdGV4dC1wcmltYXJ5IGN1cnNvci1wb2ludGVyO1xyXG59XHJcblxyXG4uc2VuZC1idG4td3JhcHBlciB7XHJcbiAgICBAYXBwbHkgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IHAtWzEwcHhdIHJvdW5kZWQtZnVsbCBtci1bMjBweF0gaC1bMzhweF0gdy1bMzhweF07XHJcbn1cclxuXHJcbi5zZW5kLWJ0biB7XHJcbiAgICBAYXBwbHkgdGV4dC1bMjJweF0gbXQtWy0xcHhdIGN1cnNvci1wb2ludGVyO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgQGFwcGx5IG9wYWNpdHktNjAgcG9pbnRlci1ldmVudHMtbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7017:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-top: 3.5rem;\n  margin-bottom: 0px;\n  padding-left: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}@media (min-width: 1280px) {.back-btn {\n    padding-left: 0px;\n  }\n}.back-btn {\n  --padding-start: 4px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2Rib2FyZC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsa0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQSxDQUFBLDRCQUFBO0lBQUE7RUFBQTtBQUFBLENBREY7RUFFRSxvQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoibW9vZGJvYXJkLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnRuIHtcclxuICBAYXBwbHkgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIG10LTE0IG1iLTAgcGwtMiB4bDpwbC0wO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4723:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".img-settings {\n  height: 52px !important;\n  width: 100%;\n  margin-top: 4px;\n  background-size: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWludGlyaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFDRiIsImZpbGUiOiJteS1pbnRpcmkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zZXR0aW5ncyB7XHJcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2569:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".disabled {\n    pointer-events: none;\n    opacity: 0.6\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtJQUFBLG9CQUFBO0lBQUE7QUFBQSIsImZpbGUiOiJuZXctcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xyXG4gIEBhcHBseSBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNjBcclxufSJdfQ== */";

/***/ }),

/***/ 4400:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".credit-btn {\n  margin: 0px;\n  margin-top: 30px;\n  height: 62px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-secondary);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  text-transform: none\n}\n\n.vipps-btn {\n  margin: 0px;\n  margin-top: 30px;\n  margin-left: 10px;\n  height: 62px;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: var(--ion-color-light);\n  background-color: var(--ion-color-light);\n  padding: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.25rem\n}\n\n@media (min-width: 1280px) {\n\n  .vipps-btn {\n    margin-left: 30px\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxXQUFBO0VBQUEsZ0JBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSxpQkFBQTtFQUFBLHdDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0E7QUFEQTs7QUFLQTtFQUFBLFdBQUE7RUFBQSxnQkFBQTtFQUFBLGlCQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0LWJ0biB7XHJcbiAgQGFwcGx5IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtMnhsIGgtWzYycHhdIHAtMCBweC00IG0tMCBtdC1bMzBweF0gdGV4dC1sZyB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4udmlwcHMtYnRuIHtcclxuICBAYXBwbHkgYm9yZGVyIGJvcmRlci1saWdodCBiZy1saWdodCByb3VuZGVkLTJ4bCBoLVs2MnB4XSBwLTAgcHgtNCBwdC0xIG0tMCBtdC1bMzBweF0gbWwtWzEwcHhdIHhsOm1sLVszMHB4XTtcclxufVxyXG4iXX0= */";

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
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLXBsYW5zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3908:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-btn {\n  margin-top: 3.5rem;\n  margin-bottom: 0px;\n  padding-left: 0.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}@media (min-width: 1280px) {.back-btn {\n    padding-left: 0px;\n  }\n}.back-btn {\n  --padding-start: 4px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLGtCQUFBO0VBQUEsb0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUEsQ0FBQSw0QkFBQTtJQUFBO0VBQUE7QUFBQSxDQURGO0VBRUUsb0JBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idG4ge1xyXG4gIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgbXQtMTQgbWItMCBwbC0yIHhsOnBsLTA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2653:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 7rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0U7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsMENBQUE7RUFDQSxvQkFBQTtFQUNBO0FBRkE7O0FBTUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxjQUFBO0VBQUEsV0FBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBO0FBRkE7O0FBS0Y7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XHJcbiAgY29sb3I6ICM1NTU1NTVcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uc2VuZC1idG4ge1xyXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTI4IGgtMTQgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBtdC04IHRleHQtbGcgZm9udC1zZW1pYm9sZDtcclxuICBiYWNrZ3JvdW5kOiAjOUI3RTYwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiJdfQ== */";

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
module.exports = ".hero-pencraft {\n\n    margin-bottom: 2rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3rem;\n\n    line-height: 1;\n\n    line-height: 90px;\n\n    color: var(--ion-color-black-2)\n}\n\n@media (min-width: 768px) {\n\n    .hero-pencraft {\n\n        font-size: 3.75rem;\n\n        line-height: 1\n    }\n}\n\n.hero-text {\n\n    margin-bottom: 1.5rem;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 60px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 768px) {\n\n    .hero-text {\n\n        font-size: 3rem;\n\n        line-height: 1;\n\n        line-height: 80px\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text {\n\n        text-align: left;\n\n        font-size: 3.75rem;\n\n        line-height: 1;\n\n        line-height: 90px\n    }\n}\n\n.hero-wrapper {\n\n    margin-left: 1rem;\n\n    margin-right: 1rem;\n\n    margin-bottom: 4rem;\n\n    margin-top: -72px;\n\n    height: 800px;\n\n    border-radius: 1rem;\n\n    background-image: url('/assets/images/landing-img.png');\n\n    background-size: cover\n}\n\n@media (min-width: 768px) {\n\n    .hero-wrapper {\n\n        margin-left: 3rem;\n\n        margin-right: 3rem;\n\n        height: 1030px\n    }\n}\n\n.hero-text-wrapper {\n\n    position: absolute;\n\n    top: 150px;\n\n    display: flex;\n\n    flex: 1 1 0%;\n\n    flex-direction: column;\n\n    align-items: flex-start\n}\n\n@media (min-width: 1024px) {\n\n    .hero-text-wrapper {\n\n        width: 610px\n    }\n}\n\n.pencraft,  .pencraft-white {\n\n    padding-top: 4rem;\n\n    font-family: Allison, sans-serif;\n\n    font-size: 3.75rem;\n\n    line-height: 1;\n\n    line-height: 70px;\n\n    color: var(--ion-color-black-2)\n}\n\n.pencraft-white {\n\n    padding-top: 0px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-headline,  .landing-headline-white {\n\n    margin-bottom: 1.5rem;\n\n    text-align: left;\n\n    font-size: 2.25rem;\n\n    line-height: 2.5rem;\n\n    font-weight: 700;\n\n    line-height: 55px;\n\n    color: var(--ion-color-black-1)\n}\n\n@media (min-width: 1024px) {\n\n    .landing-headline,  .landing-headline-white {\n\n        font-size: 3rem;\n\n        line-height: 1\n    }\n}\n\n.landing-headline-white {\n\n    text-align: center;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.landing-text {\n\n    font-size: 18px;\n\n    font-weight: 400;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-2)\n}\n\n.landing-bold {\n\n    font-size: 18px;\n\n    font-weight: 700;\n\n    line-height: 30px;\n\n    color: var(--ion-color-black-1)\n}\n\n.landing-img {\n\n    margin: 4rem;\n\n    margin-left: 0px;\n\n    border-radius: 1rem\n}\n\n.quote-icon {\n\n    display: inline-block;\n\n    height: 40px;\n\n    width: 27px;\n\n    background-image: url('/assets/icon/quote.svg')\n}\n\n.arrow-icon {\n\n    display: inline-block;\n\n    height: 20px;\n\n    width: 40px;\n\n    cursor: pointer\n}\n\n.arrow-icon:hover {\n\n    opacity: 0.5\n}\n\n.contact-btn {\n\n    margin-left: auto;\n\n    margin-right: auto;\n\n    margin-top: 0px;\n\n    margin-bottom: 0px;\n\n    height: 2.5rem;\n\n    border-radius: 0.75rem;\n\n    border-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n\n    background-color: transparent;\n\n    padding-left: 1rem;\n\n    padding-right: 1rem;\n\n    text-transform: none;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.contact-btn:hover {\n\n    opacity: 0.7\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztJQUFBLG1CQUFBOztJQUFBLGdDQUFBOztJQUFBLGVBQUE7O0lBQUEsY0FBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBQUE7O0lBQUE7O1FBQUEsZ0JBQUE7O1FBQUEsa0JBQUE7O1FBQUEsY0FBQTs7UUFBQTtJQUFBO0FBQUE7O0FBSUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSx1REFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGlCQUFBOztRQUFBLGtCQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxVQUFBOztJQUFBLGFBQUE7O0lBQUEsWUFBQTs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBO0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxnQ0FBQTs7SUFBQSxrQkFBQTs7SUFBQSxjQUFBOztJQUFBLGlCQUFBOztJQUFBO0FBQUE7O0FBS0E7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxxQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBOztRQUFBLGVBQUE7O1FBQUE7SUFBQTtBQUFBOztBQUtBOztJQUFBLGtCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEsZUFBQTs7SUFBQSxnQkFBQTs7SUFBQSxpQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLGVBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsaUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxZQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBSUE7O0lBQUEscUJBQUE7O0lBQUEsWUFBQTs7SUFBQSxXQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxpQkFBQTs7SUFBQSxrQkFBQTs7SUFBQSxlQUFBOztJQUFBLGtCQUFBOztJQUFBLGNBQUE7O0lBQUEsc0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsNkJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwiZmlsZSI6ImxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8tcGVuY3JhZnQge1xyXG4gIEBhcHBseSB0ZXh0LWJsYWNrLTIgZm9udC1BbGxpc29uIHRleHQtNXhsIG1kOnRleHQtNnhsIG1iLTggbGVhZGluZy1bOTBweF1cclxufVxyXG5cclxuLmhlcm8tdGV4dCB7XHJcbiAgQGFwcGx5IHRleHQtYmxhY2stMSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBsZzp0ZXh0LWxlZnQgbWItNiBsZWFkaW5nLVs2MHB4XSBtZDpsZWFkaW5nLVs4MHB4XSBsZzpsZWFkaW5nLVs5MHB4XSBmb250LWJvbGRcclxufVxyXG5cclxuLmhlcm8td3JhcHBlciB7XHJcbiAgQGFwcGx5IGJnLWxhbmRpbmctaW1nIHJvdW5kZWQtMnhsIGJnLWNvdmVyIGgtWzgwMHB4XSBtZDpoLVsxMDMwcHhdIG1iLTE2IG10LVstNzJweF0gbXgtNCBtZDpteC0xMlxyXG59XHJcblxyXG4uaGVyby10ZXh0LXdyYXBwZXIge1xyXG4gIEBhcHBseSBsZzp3LVs2MTBweF0gdG9wLVsxNTBweF0gYWJzb2x1dGUgZmxleCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtc3RhcnRcclxufVxyXG5cclxuLnBlbmNyYWZ0IHtcclxuICBAYXBwbHkgcHQtMTYgdGV4dC1ibGFjay0yIGZvbnQtQWxsaXNvbiB0ZXh0LTZ4bCBsZWFkaW5nLVs3MHB4XVxyXG59XHJcblxyXG4ucGVuY3JhZnQtd2hpdGUge1xyXG4gIEBleHRlbmQgLnBlbmNyYWZ0O1xyXG4gIEBhcHBseSB0ZXh0LXdoaXRlIHB0LTA7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWhlYWRsaW5lIHtcclxuICBAYXBwbHkgdGV4dC1ibGFjay0xIHRleHQtNHhsIGxnOnRleHQtNXhsIHRleHQtbGVmdCBtYi02IGxlYWRpbmctWzU1cHhdIGZvbnQtYm9sZFxyXG59XHJcblxyXG4ubGFuZGluZy1oZWFkbGluZS13aGl0ZSB7XHJcbiAgQGV4dGVuZCAubGFuZGluZy1oZWFkbGluZTtcclxuICBAYXBwbHkgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlcjtcclxufVxyXG5cclxuLmxhbmRpbmctdGV4dCB7XHJcbiAgQGFwcGx5IGZvbnQtbm9ybWFsIHRleHQtYmxhY2stMiB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxyXG59XHJcblxyXG4ubGFuZGluZy1ib2xkIHtcclxuICBAYXBwbHkgZm9udC1ib2xkIHRleHQtYmxhY2stMSB0ZXh0LVsxOHB4XSBsZWFkaW5nLVszMHB4XVxyXG59XHJcblxyXG4ubGFuZGluZy1pbWcge1xyXG4gIEBhcHBseSBtLTE2IG1sLTAgcm91bmRlZC0yeGxcclxufVxyXG5cclxuLnF1b3RlLWljb24ge1xyXG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgdy1bMjdweF0gaC1bNDBweF0gYmctcXVvdGVcclxufVxyXG5cclxuLmFycm93LWljb24ge1xyXG4gIEBhcHBseSBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgdy1bNDBweF0gaC1bMjBweF0gaG92ZXI6b3BhY2l0eS01MFxyXG59XHJcblxyXG4uY29udGFjdC1idG4ge1xyXG4gIEBhcHBseSBob3ZlcjpvcGFjaXR5LTcwIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbm9ybWFsLWNhc2Ugcm91bmRlZC14bCBib3JkZXItd2hpdGUgYm9yZGVyIHB4LTQgbXgtYXV0byBteS0wIGgtMTBcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".vipps-btn {\n  display: flex;\n  height: 46px;\n  width: 151px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding-top: 0.25rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #FF5B24;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.img-bg {\n  border-radius: 0 !important;\n  border: none !important;\n  height: 15px !important;\n  width: 22px !important;\n  background-size: 15px 22px !important;\n  background-repeat: no-repeat !important;\n  background-image: url('no.svg') !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGFBQUE7RUFBQSxZQUFBO0VBQUEsWUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpcHBzLWJ0biB7XHJcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdy1bMTUxcHhdIGgtWzQ2cHhdIHJvdW5kZWQtMnhsIHRleHQtbGcgZm9udC1tZWRpdW0gcHQtMTtcclxuICBiYWNrZ3JvdW5kOiAjRkY1QjI0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgY2FyZXQtY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbi5pbWctYmcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uL2ZsYWdzL25vLnN2Z1wiKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */";

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
module.exports = ".login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgY2FyZXQtY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6222:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".black-2 {\n  color: #555555;\n}\n\n.login-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.reset-btn {\n  margin-top: 2rem;\n  display: flex;\n  height: 3.5rem;\n  width: 12rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  background: #9B7E60;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\n.border-black-2 {\n  border-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0E7QUFGQTs7QUFNQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLGNBQUE7RUFBQSxZQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsb0JBQUE7RUFBQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0E7QUFGQTs7QUFLRjtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stMiB7XHJcbiAgY29sb3I6ICM1NTU1NTVcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgQGFwcGx5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG10LTE0O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy00OCBoLTE0IHRleHQtd2hpdGUgcm91bmRlZC0yeGwgbXQtOCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIzlCN0U2MDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnBhc3N3b3JkLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG4gIGNhcmV0LWNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsYWNrLTIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcbiJdfQ== */";

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
module.exports = ".register-btn {\n  margin-top: 3.5rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  --padding-start: 4px;\n  text-transform: none;\n}\n\n.send-btn {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #AA4C33;\n  text-transform: none;\n}\n\n.password-input {\n  border: none;\n}\n\nion-item {\n  border: 1px solid #555555;\n  color: #555555;\n  --padding-start: 0px;\n}\n\nion-input {\n  color: #555555;\n  caret-color: #555555;\n}\n\nion-icon {\n  pointer-events: none;\n}\n\ncode-input {\n  --color: #555555;\n  --item-spacing: 20px;\n  --item-border: 1px solid #555555;\n  --item-border-radius: 15px;\n  --item-border-bottom: 1px solid #555555;\n  --item-border-has-value: 1px solid #555555;\n  --item-border-bottom-has-value: 1px solid #555555;\n  --item-border-focused: 1px solid #555555;\n  --item-border-bottom-focused: 1px solid #555555;\n  --item-shadow-focused: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtcy12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQTtBQUZBOztBQU1BO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUNBLGNBQUE7RUFDQTtBQUZBOztBQUtGO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoic21zLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItYnRuIHtcclxuICBAYXBwbHkgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbXQtMTQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5zZW5kLWJ0biB7XHJcbiAgQGFwcGx5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtbGcgbXQtNCBmb250LXNlbWlib2xkO1xyXG4gIGNvbG9yOiAjQUE0QzMzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6ICM1NTU1NTU7XHJcbiAgY2FyZXQtY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuY29kZS1pbnB1dCB7XHJcbiAgLS1jb2xvcjogIzU1NTU1NTtcclxuICAtLWl0ZW0tc3BhY2luZzogMjBweDtcclxuICAtLWl0ZW0tYm9yZGVyOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1oYXMtdmFsdWU6IDFweCBzb2xpZCAjNTU1NTU1O1xyXG4gIC0taXRlbS1ib3JkZXItYm90dG9tLWhhcy12YWx1ZTogMXB4IHNvbGlkICM1NTU1NTU7XHJcbiAgLS1pdGVtLWJvcmRlci1mb2N1c2VkOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1mb2N1c2VkOiAxcHggc29saWQgIzU1NTU1NTtcclxuICAtLWl0ZW0tc2hhZG93LWZvY3VzZWQ6IDBweDtcclxufVxyXG4iXX0= */";

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
module.exports = "<ion-footer>\r\n  <div class=\"bg-dark min-h-[500px] py-[50px] lg:pt-[120px]\">\r\n    <ion-row class=\"container\">\r\n      <ion-col size=\"8\" offset=\"2\" size-lg=\"4\" offset-lg=\"0\">\r\n        <ion-text class=\"text-left\">\r\n          <p class=\"text-2xl font-bold text-left\">White Logo.</p> <br/>\r\n          <p class=\"footer-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit.</p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <hr/>\r\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"2\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\r\n        <ion-text>\r\n          <p class=\"uppercase\">Navigation</p><br/>\r\n            <ion-button (click)=\"scrollTo('home')\" fill=\"clear\">Home</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('how-it-works')\" fill=\"clear\">How it works</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('stories')\" fill=\"clear\">Stories</ion-button><br/>\r\n            <ion-button (click)=\"scrollTo('contact')\" fill=\"clear\">Contact</ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"10\" offset=\"2\" size-lg=\"4\" offset-lg=\"1\" class=\"mt-[60px] md:mt-0\">\r\n        <ion-text>\r\n          <p class=\"uppercase\">Social Media</p><br/>\r\n          <ion-icon class=\"social-logo\" name=\"logo-facebook\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-instagram\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-linkedin\"></ion-icon>\r\n          <ion-icon class=\"social-logo\" name=\"logo-twitter\"></ion-icon><br/>\r\n\r\n          <ion-button fill=\"clear\">Terms & Conditions</ion-button><br/>\r\n          <ion-button fill=\"clear\">Privacy Policy</ion-button>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 1152:
/*!********************************************************************************!*\
  !*** ./src/app/components/header-admin/header-admin.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n  <ion-header class=\"\" id=\"main-content\">\r\n    <ion-toolbar class=\"header-wrapper header-container\">\r\n      <ion-buttons slot=\"start\" class=\"\">\r\n        <ion-button slot=\"start\">\r\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n          </a>\r\n        </ion-button>\r\n        <section class=\"header-buttons\">\r\n        <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n        </section>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"header-buttons justify-end\">\r\n        <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\r\n          <img src=\"../../../assets/images/landing-img.png\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n        </a>\r\n        <ion-icon class=\"header-icon\" (click)=\"showSettings($event)\" name=\"settings-sharp\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of menuItems\">\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 9366:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/header-internal-designer/header-internal-designer.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header id=\"main-content\">\r\n  <ion-toolbar class=\"header-wrapper header-container\">\r\n    <ion-buttons slot=\"start\" class=\"\">\r\n      <ion-button slot=\"start\">\r\n        <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n          <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n        </a>\r\n      </ion-button>\r\n      <section class=\"header-buttons\">\r\n        <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n      </section>\r\n    </ion-buttons>\r\n    <ion-buttons class=\"header-buttons justify-end\">\r\n      <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/landing-img.png\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n      </a>\r\n      <ion-icon class=\"header-icon\" name=\"chatbox-ellipses-sharp\"></ion-icon>\r\n      <ion-icon class=\"header-icon\" (click)=\"showSettings($event)\" name=\"settings-sharp\"></ion-icon>\r\n      <ion-icon class=\"header-icon\" name=\"notifications-sharp\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n<ion-header>\r\n  <ion-toolbar translucent>\r\n    <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n      <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n    </a></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of menuItems\">\r\n      <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"cursor-pointer\" routerLink=\"/profile\" routerDirection=\"root\">My Profile</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"cursor-pointer\">Settings</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label class=\"cursor-pointer\">Notifications</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 4982:
/*!************************************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [class.white-header]=\"isScrolledDown\" class=\"bg-transparent sticky top-0 z-[100]\" >\r\n  <div class=\"header-wrapper\">\r\n    <a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\r\n      <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n    </a>\r\n      <ion-buttons class=\"header-buttons\">\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('home')\">Home</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('how-it-works')\">How It Works</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('stories')\">Stories</ion-button>\r\n        <ion-button fill=\"clear\" class=\"btn\" (click)=\"scrollTo('contact')\">Contact</ion-button>\r\n        <ion-button fill=\"clear\" class=\"primary-btn\" routerLink=\"/login\" routerDirection=\"root\">Login</ion-button>\r\n        <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/register\" routerDirection=\"root\">Register</ion-button>\r\n      </ion-buttons>\r\n      <div class=\"flex md:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/landing\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/login\" >Login</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/register\" >Register</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n\r\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <ion-header id=\"main-content\">\r\n    <ion-toolbar class=\"header-wrapper header-container\">\r\n      <ion-buttons slot=\"start\" class=\"\">\r\n        <ion-button slot=\"start\">\r\n          <a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n            <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n          </a>\r\n        </ion-button>\r\n        <section class=\"header-buttons\">\r\n          <ion-button *ngFor=\"let item of menuItems\"  routerLink=\"{{item.url}}\" routerDirection=\"root\" fill=\"clear\" class=\"btn\" [class.!text-primary]=\"isActiveRoute(item.url)\">{{item.title}}</ion-button>\r\n        </section>\r\n      </ion-buttons>\r\n      <ion-buttons class=\"header-buttons justify-end\">\r\n        <a routerLink=\"/profile\" routerDirection=\"root\" class=\"py-1\">\r\n          <img src=\"../../../assets/images/landing-img.png\" class=\"header-profile-img\" alt=\"Profile Img\"/>\r\n        </a>\r\n        <ion-icon class=\"header-icon\" name=\"chatbox-ellipses-sharp\"></ion-icon>\r\n        <ion-icon class=\"header-icon\" (click)=\"showSettings($event)\" name=\"settings-sharp\"></ion-icon>\r\n        <ion-button fill=\"clear\" class=\"primary-btn\" (click)=\"removeProjectDraft()\" href=\"/new-project\">Create new project</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" class=\"flex xl:hidden flex-1 justify-end\" id=\"menu-content\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Mobile Menu -->\r\n<ion-menu (ionWillOpen)=\"menuOpened()\" (ionWillClose)=\"menuClosed()\" side=\"start\" content-id=\"menu-content\">\r\n  <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title><a routerLink=\"/my-intiri\" routerDirection=\"root\" class=\"py-1\">\r\n        <img src=\"../../../assets/images/intiri-logo.svg\" class=\"ml-4 sm:ml-0\" alt=\"Intiri\"/>\r\n      </a></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let item of menuItems\">\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/profile\" routerDirection=\"root\">My Profile</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\">Settings</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"cursor-pointer\" routerLink=\"/new-project\" routerDirection=\"root\">Create new project</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 3879:
/*!********************************************************************************!*\
  !*** ./src/app/components/menu-popover/menu-popover.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\">Edit designer</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\">Delete</ion-item>\r\n</ion-list>";

/***/ }),

/***/ 7999:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/modals/add-designer-modal/add-designer-modal.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- Add designer modal -->\r\n  <div *ngIf=\"add\" class=\"justify-center items-center flex flex-col h-full\">\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"font-medium text-black-1 text-5xl mt-9 text-center\">Add designer</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">Designer name</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <section class=\"flex\">\r\n            <div class=\"phone-input\">\r\n              <span class=\"text-sm text-black-2\">Phone number</span>\r\n              <ion-select class=\"\" value=\"serbia\" interface=\"popover\">\r\n                <ion-select-option value=\"denmark\">+45</ion-select-option>\r\n                <ion-select-option value=\"sweden\">+46</ion-select-option>\r\n                <ion-select-option value=\"norway\">+47</ion-select-option>\r\n                <ion-select-option value=\"serbia\">+381</ion-select-option>\r\n                <ion-select-option value=\"montenegro\">+382</ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n            <div class=\"profile-input\">\r\n              <span class=\"text-sm invisible\">Phone number</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n            </div>\r\n          </section>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"flex\">\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">Hourly rate</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n          </div>\r\n          <div class=\"profile-input\">\r\n            <span class=\"text-sm text-black-2\">Style</span>\r\n            <ion-select class=\"\" interface=\"popover\">\r\n              <ion-select-option value=\"style1\">style1</ion-select-option>\r\n              <ion-select-option value=\"style2\">style2</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ml-2.5\">\r\n          <p class=\"font-medium text-black-1 text-lg mt-7 mb-2\">Designer status</p>\r\n          <div class=\"flex items-center mb-3\">\r\n            <input id=\"default-checkbox\" type=\"checkbox\" value=\"\" class=\"w-5 h-5 rounded text-black-1 cursor-pointer\">\r\n            <label for=\"default-checkbox\" class=\"ml-2 text-lg text-black-1\">In-house designer</label>\r\n          </div>\r\n          <div class=\"flex items-center\">\r\n            <input id=\"default-checkbox\" type=\"checkbox\" value=\"\" class=\"w-5 h-5 rounded text-black-1\">\r\n            <label for=\"default-checkbox\" class=\"ml-2 text-lg text-black-1\">External designer</label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"text-center mt-12\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn h-[52px]\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn h-[52px]\" (click)=\"addedDesigner()\">Add</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n   <!-- Designer added modal -->\r\n   <div *ngIf=\"added\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><img class=\"h-[32px] w-[32px] mx-auto mt-[18px]\" src=\"../../../../assets/icon/success.svg\" alt=\"success\"></div>\r\n          <h2 class=\"mt-10 text-center text-2xl font-bold text-black-1\">Designer added!</h2>\r\n          <p class=\"text-center text-base text-[18px] text-black-2\">You successfully added new designer.</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button class=\"primary-btn h-[52px] mt-10\" (click)=\"dismissModal()\">Go to Designers</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1731:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/modals/book-designer-modal/book-designer-modal.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"container\">\r\n    <p class=\"mt-[90px] text-2xl text-black font-medium\">Book your design consultation</p>\r\n    <p class=\"mt-[30px] text-2xl text-primary font-medium\">{{price}} Nok / consultation</p>\r\n    <p class=\"text-lg text-black-2\">*Consultation duration is 45min</p>\r\n    <div class=\"mt-[30px]\">\r\n      <span class=\"text-sm text-black-2\">Number of consultations</span>\r\n      <ion-input type=\"number\" class=\"border rounded-2xl border-black-2 w-[310px] h-14 focus:ring-transparent\" (ionChange)=\"totalPriceSum($event)\"></ion-input>\r\n    </div>\r\n    <p class=\"mt-[30px] text-lg text-black-2 font-medium\">TOTAL TO PAY</p>\r\n    <p class=\"text-[45px] text-primary font-medium\">{{totalPrice}} Nok</p>\r\n    <ion-item-divider class=\"border-b-[3px] border-primary w-[60px] h-0 bg-white\"></ion-item-divider>\r\n    <p class=\"mt-[50px] text-2xl text-black font-medium\">Tell us what you need</p>\r\n    <p class=\"text-lg text-black-2 text-center\">You are soon ready to meet your designer, just tell us what you need help with.</p>\r\n    <div class=\"flex flex-wrap mt-[50px]\">\r\n      <ion-item *ngFor=\"let item of items\" class=\"w-full xl:w-1/2\" lines=\"none\">\r\n        <div class=\"flex items-center\">\r\n          <ion-checkbox></ion-checkbox>\r\n          <p class=\"text-[18px] text-black-2 ml-2 leading-[26px]\">{{item.name}}</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"w-full xl:w-1/2\" lines=\"none\">\r\n        <div class=\"flex items-center\">\r\n          <ion-checkbox (ionChange)=\"isChecked($event)\"></ion-checkbox>\r\n          <div>\r\n            <p class=\"text-[18px] text-black-2 ml-2 leading-[26px]\">2D & 3D drawings</p>\r\n            <p class=\"text-[18px] text-primary ml-2 leading-[26px]\">(+3500 Nok)</p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"mt-[50px]\">\r\n      <ion-button fill=\"clear\" class=\"secondary-btn\" (click)=\"dismissModal()\">Cancel</ion-button>\r\n      <ion-button fill=\"clear\" class=\"primary-btn\" (click)=\"redirectToPayment()\">Proceed</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4618:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/modals/create-project-modal/create-project-modal.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <!-- first step of creating a project (start)-->\r\n  <div *ngIf=\"start\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper\"><div class=\"bg-plus h-[34px] w-[34px] mx-auto mt-[5px]\"></div></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black-1\">Let's create new project</h2>\r\n          <p class=\"text-center text-base text-black-2\">Name the project first.</p>\r\n        </div>\r\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\r\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\r\n          <div class=\"rounded-md shadow-sm -space-y-px\">\r\n            <div>\r\n              <label for=\"project-name\" class=\"sr-only\">Project name</label>\r\n              <input id=\"project-name\" name=\"email\" type=\"email\" autocomplete=\"email\" [(ngModel)]=\"projectName\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[8px] focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm\" placeholder=\"Project name\">\r\n            </div>\r\n          </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button  class=\"secondary-btn\" (click)=\"dismiss()\" routerLink=\"/my-intiri\" routerDirection=\"root\">Cancel</ion-button>\r\n            <ion-button class=\"primary-btn\" [class.disabled]=\"!isValidProjectName()\" (click)=\"startProjectCreation()\">Create</ion-button>\r\n          </ion-buttons>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   <!-- last step of creating a project (final)-->\r\n   <div *ngIf=\"final\" class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"plus-icon-wrapper !pt-[8px] !pl-[12px]\"><ion-icon class=\"text-primary h-[34px] w-[34px] mx-auto mt-[5px]\" name=\"bookmark\"></ion-icon></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black-1\">Saved!</h2>\r\n          <p class=\"text-center text-base text-black-2\">Your project <span class=\"font-medium\">{{projectName}}</span> and first moodboard are saved. You can add new moodboard to the same project or review it.</p>\r\n        </div>\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button  class=\"secondary-btn\" (click)=\"dismiss()\" routerLink=\"/my-intiri\" routerDirection=\"root\">Go to project</ion-button>\r\n            <ion-button class=\"primary-btn\" (click)=\"dismiss()\" [class.disabled]=\"true\">Add new moodboard</ion-button>\r\n          </ion-buttons>\r\n          <p class=\"text-primary text-center cursor-pointer hover:opacity-80\" [class.disabled]=\"true\"><ion-icon class=\"text-xl relative top-[6px] mr-2\" name=\"share-social\"></ion-icon>Share via email</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1070:
/*!*******************************************************************************!*\
  !*** ./src/app/components/modals/login/login-modal.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <img class=\"mx-auto h-12 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\" alt=\"Workflow\">\r\n          <h2 class=\"mt-6 text-center text-3xl font-extrabold text-gray-900\">Sign in to your account</h2>\r\n        </div>\r\n        <form class=\"mt-8 space-y-6\" action=\"#\" method=\"POST\">\r\n          <input type=\"hidden\" name=\"remember\" value=\"true\">\r\n          <div class=\"rounded-md shadow-sm -space-y-px\">\r\n            <div>\r\n              <label for=\"email-address\" class=\"sr-only\">Email address</label>\r\n              <input id=\"email-address\" name=\"email\" type=\"email\" autocomplete=\"email\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\" placeholder=\"Email address\">\r\n            </div>\r\n            <div>\r\n              <label for=\"password\" class=\"sr-only\">Password</label>\r\n              <input id=\"password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" required class=\"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"flex items-center justify-between\">\r\n            <div class=\"flex items-center\">\r\n              <input id=\"remember-me\" name=\"remember-me\" type=\"checkbox\" class=\"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded\">\r\n              <label for=\"remember-me\" class=\"ml-2 block text-sm text-gray-900\"> Remember me </label>\r\n            </div>\r\n\r\n            <div class=\"text-sm\">\r\n              <a href=\"#\" class=\"font-medium text-indigo-600 hover:text-indigo-500\"> Forgot your password? </a>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button type=\"submit\" class=\"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\r\n              <span class=\"absolute left-0 inset-y-0 flex items-center pl-3\">\r\n                <!-- Heroicon name: solid/lock-closed -->\r\n                <svg class=\"h-5 w-5 text-indigo-500 group-hover:text-indigo-400\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\r\n                  <path fill-rule=\"evenodd\" d=\"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\" clip-rule=\"evenodd\" />\r\n                </svg>\r\n              </span>\r\n              Sign in\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 8832:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/logout-modal/logout-modal.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"bg-gray-500 justify-center items-center flex flex-col h-full\">\r\n    <div class=\"min-h-full min-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white\">\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <div>\r\n          <div class=\"logout-icon-wrapper\"><ion-icon class=\"h-[34px] w-[34px] mx-auto mt-[5px] block\" name=\"log-out-outline\"></ion-icon></div>\r\n          <h2 class=\"mt-6 text-center text-2xl font-bold text-black1\">Logout!</h2>\r\n          <p class=\"text-center text-base text-black2\">Are you sure you want to logout from the app?</p>\r\n        </div>\r\n        <ion-buttons class=\"justify-center\">\r\n          <ion-button  class=\"secondary-btn\" (click)=\"dismiss()\">Cancel</ion-button>\r\n          <ion-button class=\"primary-btn\" (click)=\"logout()\">Logout</ion-button>\r\n        </ion-buttons>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 952:
/*!****************************************************************************************!*\
  !*** ./src/app/components/new-project-step/new-project-step.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <h2 class=\"step-title\">{{currentStep.title}}</h2>\r\n  <p class=\"step-subtitle\">{{currentStep.subtitle}}</p>\r\n  <ion-grid *ngIf=\"isArray(currentStep.data)\" class=\"step-items\">\r\n    <ion-row class=\"step-items-row\">\r\n      <ion-col *ngFor=\"let item of currentStep.data\" (click)=\"toggleItem(item)\" size=\"5.8\" size-sm=\"3.8\" class=\"step-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n        <!-- if image (style|material|product) -->\r\n        <img *ngIf=\"item.path\" src=\"{{item.path}}\" class=\"step-image\" alt=\"style-img\"/>\r\n         <!-- if icon (room) -->\r\n        <div *ngIf=\"item.imagePath\" class=\"step-icon-wrapper\" >\r\n          <img src=\"{{item.imagePath}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n        </div>\r\n        <!-- if color pallete -->\r\n        <div *ngIf=\"item.mainColor\" class=\"step-color-wrapper\" >\r\n          <div class=\"w-[47.5%] h-full inline-block\" [ngStyle]=\"{background: item.mainColor}\"></div>\r\n          <div class=\"w-[47.5%] h-full inline-block float-right\">\r\n            <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorLight}\"></div>\r\n            <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorMedium}\"></div>\r\n            <div class=\"h-[30%]\" [ngStyle]=\"{background: item.shadeColorDark}\"></div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-8 text-black-2\">{{item.name}} </p>\r\n        <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-8 text-black-2\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n   <!-- if room details -->\r\n  <div *ngIf=\"currentStep.data.roomShapes\">\r\n    <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">Room details</p>\r\n    <p class=\"text-black-2\">Select room shape</p>\r\n    <ion-grid class=\"step-items\" style=\"min-height: 300px;\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of currentStep.data.roomShapes\" (click)=\"toggleItem(item)\" size=\"5.8\" size-sm=\"3.8\" class=\"step-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n          <div class=\"step-icon-wrapper\" >\r\n            <img src=\"../../../assets/{{item.imagePath}}\" class=\"step-icon\" alt=\"room-icon\"/>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"input\">\r\n      <span class=\"text-black-2\">Room area (m2)</span>\r\n      <ion-input [(ngModel)]=\"project.roomDetails.size\" type=\"number\" class=\"border rounded-2xl h-14 border-black-2 !pr-4\"></ion-input>\r\n    </div>\r\n    <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">Budget for products</p>\r\n    <div class=\"input\">\r\n      <span class=\"text-black-2\">Select your budget for products</span>\r\n      <ion-select  [(ngModel)]=\"project.budget\" interface=\"popover\">\r\n        <ion-select-option value=\"low\">Low</ion-select-option>\r\n        <ion-select-option value=\"medium\">Medium</ion-select-option>\r\n        <ion-select-option value=\"high\">High</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- if moodboards -->\r\n  <div *ngIf=\"currentStep.data.moodboards\">\r\n    <ion-grid class=\"step-items\" style=\"min-height: 400px;\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of currentStep.data.moodboards\" (click)=\"toggleItem(item)\" size=\"5.8\" size-sm=\"3.8\" class=\"moodboard-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.style.styleImages[0].path}}\" class=\"h-[95px] lg:h-[135px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img src=\"{{item.style.styleImages[2].path}}\" class=\"h-[95px] lg:h-[135px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.style.styleImages[1].path}}\" class=\"h-full object-cover w-full\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          <p *ngIf=\"item.style.name\" class=\"text-lg font-bold mt-4 text-black-2\">{{item.style.name}} <span *ngIf=\"item.percentageMatch\" class=\"text-base font-normal text-primary\">/ {{item.percentageMatch}}% match</span></p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">See rooms in this style</p>\r\n    <ion-grid class=\"step-items\" style=\"min-height: 785px;\">\r\n      <ion-row class=\"step-items-row\">\r\n        <ion-col *ngFor=\"let item of currentStep.data.moodboardFamily\" (click)=\"toggleItem(item)\" size=\"5.5\" size-sm=\"3.75\" class=\"moodboard-item-wrapper\" [class.selected-item]=\"isItemSelected(item)\"  [class.bigger-margin]=\"item.name\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.materials[0].imagePath}}\" class=\"h-[95px] lg:h-[135px] w-full mb-2 object-cover\" alt=\"moodboard-img\"/>\r\n                  <img src=\"{{item.products[1].imagePath}}\" class=\"h-[95px] lg:h-[135px] w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <img src=\"{{item.style.styleImages[1].path}}\" class=\"h-full w-full object-cover\" alt=\"moodboard-img\"/>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          <p *ngIf=\"item.style.name\" class=\"text-lg font-bold mt-4 text-black-2\">{{item.style.name}} <span *ngIf=\"item.percentageMatch\" class=\"text-base font-normal text-primary\">/ {{item.percentageMatch}}% match</span></p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <div class=\"h-full w-full relative\">\r\n          <div class=\"mt-8 w-full h-[360px] bg-landing-img bg-cover blur rounded-lg \"></div>\r\n          <div class=\"flex-column text-center w-[80%] absolute top-1/2 left-1/2\" style=\"transform: translate(-50%, -50%)\">\r\n            <p class=\"text-black-1 text-xl font-bold mb-2\">Upgrade!</p>\r\n            <p class=\"text-black-2 font-bold mb-4\">To see more rooms from this style upgrade to Premium plan.</p>\r\n            <ion-buttons class=\"justify-center\">\r\n              <ion-button class=\"primary-btn\" routerLink=\"/pricing-plans\" routerDirection=\"root\">Pricing plans</ion-button>\r\n            </ion-buttons>\r\n          </div>\r\n        </div>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n    <!-- if final step -->\r\n    <div *ngIf=\"currentStep.data === 'final'\">\r\n      <div class=\"rounded-2xl border-black-3 border-2 w-full h-[320px] lg:h-[410px] mr-2 md:mr-3 mt-4 p-3\">\r\n        <div class=\"result-grid\">\r\n          <div class=\"item-sm\" [ngStyle]=\"{background: project.moodboard.colorPalettes[0].shadeColorLight}\"></div>\r\n          <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.products[0].imagePath) + ')'}\"></div>\r\n          <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.products[1].imagePath) + ')'}\"></div>\r\n          <div class=\"item-lg-tall\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.style.styleImages[0].path) + ')'}\"></div>\r\n          <div class=\"item-sm\" [ngStyle]=\"{background: project.moodboard.colorPalettes[0].shadeColorMedium}\"></div>\r\n          <div class=\"item-sm\" [ngStyle]=\"{background: project.moodboard.colorPalettes[0].shadeColorDark}\"></div>\r\n          <div class=\"item-sm-tall\" [ngStyle]=\"{background: project.moodboard.colorPalettes[project.moodboard.colorPalettes.length-1].mainColor}\"></div>\r\n          <div class=\"item-lg\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.style.styleImages[1].path) + ')'}\"></div>\r\n          <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.materials[0].imagePath) + ')'}\"></div>\r\n          <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.materials[1].imagePath) + ')'}\"></div>\r\n          <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.materials[2].imagePath) + ')'}\"></div>\r\n          <div class=\"item-md\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(project.moodboard.materials[3].imagePath) + ')'}\"></div>\r\n        </div>\r\n      </div>\r\n      <p class=\"text-black-2 font-bold text-xl leading-[29px] mt-[30px] mb-[10px]\">What's included in moodboard</p>\r\n      <ion-grid class=\"step-items\" style=\"min-height: 460px; max-height: 720px;\">\r\n        <ion-row class=\"step-items-row\">\r\n          <ion-col *ngFor=\"let item of project.moodboard.colorPalettes\" size=\"5.8\" size-sm=\"3.8\" class=\"rounded-2xl border-2 border-black-3 w-full h-[130px] lg:h-[180px] mt-4\" [class.bigger-margin]=\"item.name\">\r\n            <div *ngIf=\"item.mainColor\" class=\"step-color-wrapper\" >\r\n              <div class=\"w-[47.5%] h-full inline-block\" [ngStyle]=\"{background: item.mainColor}\"></div>\r\n              <div class=\"w-[47.5%] h-full inline-block float-right\">\r\n                <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorLight}\"></div>\r\n                <div class=\"h-[30%] mb-[6%]\" [ngStyle]=\"{background: item.shadeColorMedium}\"></div>\r\n                <div class=\"h-[30%]\" [ngStyle]=\"{background: item.shadeColorDark}\"></div>\r\n              </div>\r\n            </div>\r\n            <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-8 text-black-2\">{{item.name}} </p>\r\n            <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-8 text-black-2\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n          </ion-col>\r\n          <ion-col *ngFor=\"let item of project.moodboard.materials\" size=\"5.8\" size-sm=\"3.8\" class=\"rounded-2xl border-2 border-black-3 w-full h-[130px] lg:h-[180px] mt-4\" [class.bigger-margin]=\"item.name\">\r\n            <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n            <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-5 text-black-2\">{{item.name}} </p>\r\n            <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-5 text-black-2\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n          </ion-col>\r\n          <ion-col *ngFor=\"let item of project.moodboard.products\" size=\"5.8\" size-sm=\"3.8\" class=\"rounded-2xl border-2 border-black-3 w-full h-[130px] lg:h-[180px] mt-4\" [class.bigger-margin]=\"item.name\">\r\n            <img *ngIf=\"item.imagePath\" src=\"{{item.imagePath}}\" class=\"step-image\" alt=\"style-img\"/>\r\n            <p *ngIf=\"!item.number && item.name\" class=\"font-bold mt-5 text-black-2\">{{item.name}} </p>\r\n            <p *ngIf=\"item.number && item.name\" class=\"font-bold mt-5 text-black-2\">{{item.number}} <span class=\"font-normal\">/ {{item.name}}</span></p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 9624:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/profile-img-section/profile-img-section.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-light  xl-ion:w-[300px]  xl-ion:h-[680px] rounded-lg text-center\">\r\n  <img src=\"../../../assets/images/landing-img.png\" class=\"rounded-[50%] w-[300px] h-[300px] object-cover p-8 relative top-12 mx-auto\" alt=\"Profile Img\"/>\r\n  <h3 class=\"mt-12 mx-10 mb-1 font-medium text-black-2\">Phoebe Karen Johnson</h3>\r\n  <p class=\"text-black-3 mb-8\">16 projects</p>\r\n  <ion-buttons class=\"justify-center\">\r\n    <ion-button\r\n      class=\"change-img-btn\"\r\n      >Change profile picture</ion-button\r\n    >\r\n  </ion-buttons>\r\n</div>\r\n";

/***/ }),

/***/ 1457:
/*!************************************************************************************************!*\
  !*** ./src/app/components/profile-info-section/profile-info-section.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h3 class=\"text-black-2 text-[24px] my-0 mx-2\">Personal Info</h3>\r\n<section class=\"sm:flex\">\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm text-black-2\">First name</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n  </div>\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm text-black-2\">Last name</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n  </div>\r\n</section>\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">Gender</span>\r\n  <ion-select interface=\"popover\">\r\n    <ion-select-option value=\"male\">Male</ion-select-option>\r\n    <ion-select-option value=\"female\">Female</ion-select-option>\r\n    <ion-select-option value=\"non-binary\">Non-binary</ion-select-option>\r\n    <ion-select-option value=\"not-to-say\">I prefer not to say</ion-select-option>\r\n  </ion-select>\r\n</div>\r\n\r\n\r\n<section class=\"flex\">\r\n  <div class=\"phone-input\">\r\n    <span class=\"text-sm text-black-2\">Phone number</span>\r\n    <ion-select class=\"\" interface=\"popover\">\r\n      <ion-select-option value=\"denmark\">+45</ion-select-option>\r\n      <ion-select-option value=\"sweden\">+46</ion-select-option>\r\n      <ion-select-option value=\"norway\">+47</ion-select-option>\r\n      <ion-select-option value=\"serbia\">+381</ion-select-option>\r\n      <ion-select-option value=\"montenegro\">+382</ion-select-option>\r\n    </ion-select>\r\n  </div>\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm invisible\">Phone number</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">Email</span>\r\n  <ion-input type=\"email\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n  <span class=\"text-sm text-[#eb445a] hidden\">Wrong format</span>\r\n</div>\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">Street</span>\r\n  <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n</div>\r\n<section class=\"sm:flex\">\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm text-black-2\">Postal code</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n  </div>\r\n  <div class=\"profile-input\">\r\n    <span class=\"text-sm text-black-2\">City</span>\r\n    <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2\"></ion-input>\r\n  </div>\r\n</section>\r\n<div class=\"profile-input\">\r\n  <span class=\"text-sm text-black-2\">Country</span>\r\n  <ion-select interface=\"popover\">\r\n    <ion-select-option value=\"apples\">Apples</ion-select-option>\r\n    <ion-select-option value=\"oranges\">Oranges</ion-select-option>\r\n    <ion-select-option value=\"bananas\">Bananas</ion-select-option>\r\n  </ion-select>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 4953:
/*!****************************************************************************************!*\
  !*** ./src/app/components/settings-popover/settings-popover.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list *ngIf=\"headerType === 'user'\" lines=\"none\" >\r\n  <ion-item class=\"mt-[16px]\">\r\n    <ion-icon class=\"header-icon\" name=\"settings-sharp\"></ion-icon>\r\n    <span class=\"text-primary font-medium ml-2\">Free plan</span><br/><br/>\r\n  </ion-item>\r\n  <hr class=\"border-light border-t mx-[16px] my-[16px]\" />\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Terms & Conditions</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\" routerLink=\"/pricing-plans\" routerDirection=\"root\">Pricing plans</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">Logout</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"headerType === 'admin'\" lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Terms & Conditions</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">Logout</ion-item>\r\n</ion-list>\r\n\r\n<ion-list *ngIf=\"headerType === 'designer'\" lines=\"none\" >\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Language</ion-item>\r\n  <ion-item class=\"text-black-1\" [button]=\"true\" [detail]=\"true\">Terms & Conditions</ion-item>\r\n  <ion-item class=\"text-black-1 font-medium\" [button]=\"true\" [detail]=\"true\" (click)=\"openLogoutModal()\">Logout</ion-item>\r\n</ion-list>\r\n";

/***/ }),

/***/ 5338:
/*!******************************************************************************!*\
  !*** ./src/app/components/step-picker/step-picker.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"page === 'create-project'\" class=\"bg-light xl-ion:w-[240px] xl-ion:h-[820px] rounded-lg text-center\">\r\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-style\"></div>\r\n    <p class=\"project-step-text\">Style</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\r\n    <div class=\"w-[30px] h-[22px] mx-auto bg-cover bg-room\"></div>\r\n    <p class=\"project-step-text\">Room</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step\">\r\n    <div class=\"w-[30px] h-[22px] mx-auto bg-cover bg-room-details\"></div>\r\n    <p class=\"project-step-text\">Room Details</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 3\" [class.disabled]=\"!canChangeStep(3)\" (click)=\"goToStep(3)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-color-pallete\"></div>\r\n    <p class=\"project-step-text\">Color Pallete</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 4\" [class.disabled]=\"!canChangeStep(4)\" (click)=\"goToStep(4)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-moodboard\"></div>\r\n    <p class=\"project-step-text\">Moodboard</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 5\" [class.disabled]=\"!canChangeStep(5)\" (click)=\"goToStep(5)\" class=\"project-step no-border\">\r\n    <div class=\"project-step-icon bg-final-result\"></div>\r\n    <p class=\"project-step-text\">Final Result</p>\r\n  </section>\r\n</div>\r\n\r\n<div *ngIf=\"page === 'customize-moodboard'\" class=\"bg-light xl-ion:w-[240px] xl-ion:h-[680px] rounded-lg text-center\">\r\n  <section [class.opacity-50]=\"currentStepNo !== 0\" [class.disabled]=\"!canChangeStep(0)\" (click)=\"goToStep(0)\" class=\"project-step\">\r\n    <div class=\"project-step-icon bg-color-pallete\"></div>\r\n    <p class=\"project-step-text\">Color Pallete</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 1\" [class.disabled]=\"!canChangeStep(1)\" (click)=\"goToStep(1)\" class=\"project-step\">\r\n    <div class=\"project-step-icon mx-auto bg-cover bg-materials\"></div>\r\n    <p class=\"project-step-text\">Materials</p>\r\n  </section>\r\n  <section [class.opacity-50]=\"currentStepNo !== 2\" [class.disabled]=\"!canChangeStep(2)\" (click)=\"goToStep(2)\" class=\"project-step no-border\">\r\n    <div class=\"project-step-icon bg-sofa\"></div>\r\n    <p class=\"project-step-text\">Products</p>\r\n  </section>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 2177:
/*!****************************************************************************!*\
  !*** ./src/app/components/sub-header/sub-header.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"!slider\" class=\"h-[61px] w-[100%] rounded-xl bg-light\">\r\n  <section class=\"header-buttons\">\r\n      <ion-button *ngFor=\"let item of menuItems[menu]\" [class.!text-primary]=\"activeTitle === item.title\" fill=\"clear\" class=\"btn\" routerLink=\"{{item.url}}\" routerDirection=\"root\">{{item.title}}</ion-button>\r\n    </section>\r\n</div>\r\n\r\n<div *ngIf=\"slider\" class=\"h-[61px] w-[100%] rounded-xl bg-light\">\r\n  <section class=\"header-buttons\">\r\n      <ion-button *ngFor=\"let item of menuItems[menu]; index as i\" (click)=\"goToSlide(i, item)\"  [class.!text-primary]=\"activeTitle === i\" fill=\"clear\" class=\"btn\">{{item | titlecase}}</ion-button>\r\n    </section>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 4257:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin-pages/consultations/consultations.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-admin></app-header-admin>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">Consultations</h1>\r\n          <p class=\"text-2xl font-bold text-black-2 mt-8\">Details</p>\r\n\r\n          <div class=\"consultations-input-wrapper\">\r\n            <span class=\"text-sm text-black-2\">Duration</span>\r\n            <span class=\"currency-label\">min</span>\r\n            <ion-input\r\n              type=\"number\"\r\n              class=\"consultations-input !pr-[48px]\"\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <div class=\"consultations-input-wrapper\">\r\n            <span class=\"text-sm text-black-2\">Price</span>\r\n            <span class=\"currency-label\">Nok</span>\r\n            <ion-input\r\n              type=\"number\"\r\n              class=\"consultations-input !pr-[48px]\"\r\n            ></ion-input>\r\n          </div>\r\n\r\n          <ion-buttons class=\"justify-center mt-8\">\r\n            <ion-button class=\"save-btn\">Save changes</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 3147:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header-admin></app-header-admin>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"4\">\r\n            <h1 class=\"main-title\">Dashboard</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <div class=\"w-[270px] h-[52px] mt-6\">\r\n                <ion-select value=\"month\" interface=\"popover\" >\r\n                  <ion-select-option value=\"month\">Month</ion-select-option>\r\n                  <ion-select-option value=\"year\">Year</ion-select-option>\r\n                </ion-select>\r\n            </div>\r\n        </ion-row>\r\n        <ion-row class=\"mt-8\">\r\n            <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"2.75\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] ml-[30px] tracking-[3px]\">TOTAL VENDORS</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">30</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0.33\" size-xl=\"2.75\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] ml-[30px] tracking-[3px]\">TOTAL DESIGNERS</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">65</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0\"  offset-xl=\"0.33\" size-xl=\"2.75\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] ml-[30px] tracking-[3px]\">TOTAL CLIENTS</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">658</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0.33\" size-xl=\"2.75\">\r\n                <div class=\"total\">\r\n                    <p class=\"text-primary text-[18px] mt-[44px] mx-[25px] tracking-[2px]\">TOTAL MOODBOARDS</p>\r\n                    <p class=\"text-black-1 text-[60px] font-bold ml-[30px]\">658</p>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"9\">\r\n                <div class=\"sales\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">Sales Overview</h3>\r\n                </div>\r\n                <div class=\"sales\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">Number of Clients</h3>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0.25\" size-xl=\"2.75\">\r\n                <div class=\"designers\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">Top Designers</h3>\r\n                    <ul>\r\n                        <li *ngFor=\"let number of [0,1,2,3,4,5,6,7,8,9,10]\">\r\n                            <div class=\"my-6 flex justify-between mt-[30px]\">\r\n                                <div class=\"flex\" >\r\n                                <img src=\"../../../assets/images/profile-img.png\" class=\"w-[40px] h-[40px] rounded-2xl object-cover ml-[30px]\" alt=\"Profile Img\"/>\r\n                                <div class=\"ml-3.5 w-[170px]\">\r\n                                    <p class=\"text-black-1 leading-5 font-semibold\">Moniqa Ramirez</p>\r\n                                    <p class=\"text-secondary size-[22px] leading-5\">Scandinavian style</p>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"5.75\" size-xl=\"5.875\">\r\n                <div class=\"trending\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">Trending Styles</h3>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" offset=\"0\" size-sm=\"5.75\" offset-sm=\"0.33\" offset-xl=\"0.25\" size-xl=\"5.875\">\r\n                <div class=\"trending\">\r\n                    <h3 class=\"text-black-2 mt-[30px] ml-[30px]\">Recent Activity</h3>\r\n                    <ul>\r\n                        <li *ngFor=\"let number of [0,1,2,3,4]\">\r\n                            <div class=\"my-6 flex justify-between mt-[30px]\">\r\n                                <div class=\"flex\" >\r\n                                <img src=\"../../../assets/images/profile-img.png\" class=\"w-[40px] h-[40px] rounded-2xl object-cover ml-[30px]\" alt=\"Profile Img\"/>\r\n                                <div class=\"ml-3.5 flex\">\r\n                                    <p class=\"text-black-2 size-[22px] leading-5 flex-1\"> <span class=\"text-black-1 leading-5 font-semibold\">Moniqa Ramirez </span>made an enquiry about Scandinavian style designer.</p>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>";

/***/ }),

/***/ 4652:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-pages/designer/designer.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header-admin></app-header-admin>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n            <h1 class=\"font-medium text-black-1 text-5xl mt-0\">Designers</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"5\" size-xl=\"2.75\">\r\n                <div class=\"h-[52px] mt-6\">\r\n                    <ion-select interface=\"popover\" placeholder=\"Search\">\r\n                    <ion-select-option value=\"\"></ion-select-option>\r\n                    <ion-select-option value=\"\"></ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"5\" offset-xl=\"4.30\" size-xl=\"2.75\">\r\n                <span class=\"text-sm text-black-2 mt-6\">Status</span>\r\n                <div class=\" h-[52px]\">\r\n                    <ion-select interface=\"popover\" [multiple]=\"true\">\r\n                    <ion-select-option value=\"status1\">Status1</ion-select-option>\r\n                    <ion-select-option value=\"status2\">Status2</ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-sm=\"5\" size-xl=\"2\">\r\n                <ion-button (click)=\"addDesigner()\" fill=\"clear\" class=\"primary-btn w-[170px] h-[45px] mt-6\">Add designer</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"mt-8 gap-x-[1.65%]\">\r\n            <ion-col *ngFor=\"let i of [1,2,3,4,6,7]\" size=\"12\" size-sm=\"5.75\" size-xl=\"2.85\">\r\n                <div class=\"designer\">\r\n                    <div class=\"my-6 flex flex-1 justify-center\">\r\n                        <img src=\"../../../assets/images/profile-img.png\" class=\"w-[70px] h-[70px] rounded-2xl object-cover \" alt=\"Profile Img\"/>\r\n                    </div>\r\n                    <div class=\"absolute top-[12px] right-[12px]\">\r\n                        <button (click)=\"showSettings($event)\" id=\"dropdownMenuIconButton\" data-dropdown-toggle=\"dropdownDots\" class=\"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50\" type=\"button\">\r\n                            <svg class=\"w-6 h-6\" aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z\"></path></svg>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"my-4 text-center\">\r\n                        <p class=\"text-black-2 leading-5 font-semibold text-2xl\">Grace  Delawer</p>\r\n                        <p class=\"text-black-2 size-[22px] leading-5 mt-1\">Scandinavian style</p>\r\n                        <p class=\"px-2 py-2 bg-secondary rounded-lg text-white inline-block mt-4 leading-5\">INHOUSE DESIGNER</p>\r\n                        <div class=\"p-4 m-4 bg-light\">\r\n                            <ul>\r\n                                <li *ngFor=\"let number of [0,1,2,3,4]\" class=\"inline-block\">\r\n                                    <ion-icon name=\"star\" class=\"text-primary mr-1\"></ion-icon>\r\n                                </li>\r\n                            </ul>\r\n                            <p class=\"text-primary size-[20px] leading-5\">128 Completed Designs</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>";

/***/ }),

/***/ 5267:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-pages/vendor/vendor.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header-admin></app-header-admin>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\">\r\n            <h1 class=\"font-medium text-black-1 text-5xl mt-0 mb-[25px]\">Vendors</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"12\">\r\n                <app-sub-header [menu]=\"'vendors'\" [activeTitle]=\"'Vendors'\"></app-sub-header>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\">\r\n                <div class=\"profile-input\">\r\n                    <ion-select interface=\"popover\" placeholder=\"Search\">\r\n                      <ion-select-option value=\"male\">Male</ion-select-option>\r\n                      <ion-select-option value=\"female\">Female</ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-buttons class=\"justify-end mt-4\">\r\n                <ion-button class=\"add-vendor-btn\">Add vendor</ion-button>\r\n              </ion-buttons>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>";

/***/ }),

/***/ 1893:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/internal-designer/clients/client-list/client-list.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header-internal-designer></app-header-internal-designer>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title mb-[30px]\">Client</p>\r\n      <app-sub-header [menu]=\"'clientList'\" [activeTitle]=\"currentSlide\" [slider]=\"true\" (changeSlide)=\"changeSlide($event)\"></app-sub-header>\r\n      <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"onSlideChange()\">\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5 flex flex-wrap\">\r\n            <div *ngFor=\"let client of clients\">\r\n              <ion-card class=\"ion-card-container w-[270px] h-[270px] flex flex-col items-center mt-[30px]\">\r\n                <img src={{client.avatar}} class=\"avatar-img\">\r\n                <p class=\"text-2xl text-black-2 font-medium mt-[15px]\">{{client.name}}</p>\r\n                <p class=\"text-lg text-black-2\">{{client.email}}</p>\r\n                <div class=\"w-full bg-light flex flex-col items-center mt-[15px]\">\r\n                  <p class=\"text-sm text-primary mt-[15px]\">Selected style</p>\r\n                  <p class=\"text-lg text-black-2 font-medium mb-[15px]\">{{client.style}}</p>\r\n                </div>\r\n              </ion-card>\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5 flex flex-wrap\">\r\n            <div *ngFor=\"let moodboard of moodboards\">\r\n              <ion-card class=\"ion-card-container  h-[350px] mt-[30px]\">\r\n                <img src={{moodboard.image}} class=\"moodboard-img\">\r\n              </ion-card>\r\n              <div class=\"flex items-center justify-start ml-2\">\r\n                <p class=\"text-black-2 text-2xl font-medium\">{{moodboard.style}}</p>\r\n                <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"#\" routerDirection=\"root\">\r\n                  <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n              <div class=\"text-left ml-2\">\r\n                <p class=\"text-black-3 text-lg\">2 moodboard / 20 pieces / 2d ago</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <div class=\"w-full h-full mt-5 flex\">\r\n            <ion-card class=\"ion-card-container w-[370px] h-[200px] mt-[30px] flex flex-col items-start justify-center\">\r\n              <p class=\"text-lg text-primary ml-[20px]\">NUMBER OF CLIENTS</p>\r\n              <p class=\"text-[60px] text-black font-medium ml-[20px]\">25</p>\r\n            </ion-card>\r\n            <ion-card class=\"ion-card-container w-[370px] h-[200px] mt-[30px] flex flex-col items-start justify-center\">\r\n              <p class=\"text-lg text-primary ml-[20px]\">TOTAL INCOME</p>\r\n              <p class=\"text-[60px] text-black font-medium ml-[20px]\">$25.456</p>\r\n            </ion-card>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7182:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/designer-pages/my-moodboard/my-moodboard.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 4395:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer-profile/book-designer-profile.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <h1 class=\"main-title\">Designer profile</h1>\r\n      <div class=\"mt-[30px]\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"4\" class=\"p-0\">\r\n            <div class=\"p-2 xl:p-0\">\r\n              <div class=\"bg-light rounded-2xl flex flex-col items-center\">\r\n                <img src=\"../../../../assets/images/profile-img.png\" class=\"w-[240px] h-[240px] rounded-full mt-[65px]\">\r\n                <div class=\"w-[144px] h-[30px] bg-secondary rounded-[5px] flex items-center justify-center mt-[30px]\">\r\n                  <p class=\"text-white text-sm\">INHOUSE DESIGNER</p>\r\n                </div>\r\n                <p class=\"text-2xl text-black-2 font-medium mt-[15px]\">Diana Haliwell</p>\r\n                <p class=\"text-lg text-black-3\">16 projects</p>\r\n                <p class=\"text-lg text-black-2 px-[30px] xl:px-[60px] mt-[30px] mb-[30px]\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.\r\n                  <br>\r\n                  <br>\r\n                  Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"8\" class=\"p-0 xl:pl-5\">\r\n            <div class=\"p-2 xl:p-0\">\r\n              <p class=\"text-2xl text-black-2 font-medium\">Available slots</p>\r\n              <div class=\"mt-[30px] flex flex-col xl:flex-row flex-wrap items-center xl:justify-between\">\r\n                <div class=\"border border-black rounded-2xl h-[400px] xl:h-[477px] w-full xl:w-[470px] p-4 flex justify-center items-center\">\r\n                  <ion-datetime presentation=\"calendar\" class=\"h-full w-full bg-white\"></ion-datetime>\r\n                </div>\r\n                <div class=\"border border-black rounded-2xl h-[477px] w-[260px] p-4 mt-5 xl:mt-0 flex flex-col items-center\">\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">10 AM - 11 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">11 AM - 12 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">13 AM - 14 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">14 AM - 15 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">15 AM - 16 AM</ion-button>\r\n                  <ion-button fill=\"clear\" class=\"time-btn\">16 AM - 17 AM</ion-button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-2xl text-black-2 font-medium mt-[80px]\">Moodboard</p>\r\n              <div class=\"mt-[30px] mb-[200px]\">\r\n                <div class=\"border border-black rounded-2xl w-full xl:w-[746px] h-[410px] p-4\">\r\n                  <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-full\">\r\n                </div>\r\n              </div>\r\n              <div class=\"flex flex-col xl:flex-row justify-center items-center h-[152px] w-full xl:w-[746px] fixed bottom-0 bg-white z-10\">\r\n                <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/messenger\" routerDirection=\"root\">Open chat</ion-button>\r\n                <ion-button fill=\"clear\" class=\"primary-btn\">Book consultation</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 2759:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/book-designer/book-designer.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <h1 class=\"main-title\">Book a designer</h1>\r\n      <div class=\"mt-[30px] p-2 xl:p-0\">\r\n        <span class=\"text-sm black-2\">Sort by</span>\r\n          <ion-select class=\"border rounded-2xl border-black-2 h-[52px] w-[270px]\" interface=\"popover\">\r\n            <ion-select-option>Rating</ion-select-option>\r\n            <ion-select-option>Moodboards</ion-select-option>\r\n          </ion-select>\r\n      </div>\r\n      <div class=\"flex flex-wrap justify-between mt-[30px] p-2 xl:p-0\">\r\n        <div *ngFor=\"let d of designers\">\r\n          <ion-card class=\"border border-black rounded-2xl shadow-none w-full xl:w-[370px] h-[350px] m-0 mt-5 mb-2 p-4\">\r\n            <img src={{d.image}} class=\"w-full h-full\">\r\n          </ion-card>\r\n          <div class=\"flex items-center justify-between\">\r\n            <div class=\"flex items-center justify-start\">\r\n              <img src={{d.logo}} class=\"h-[30px] w-[30px] rounded-md\">\r\n              <p class=\"text-black-2 text-2xl font-medium ml-2\">{{d.name}}</p>\r\n              <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/designer-profile\" routerDirection=\"root\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div class=\"h-[30px] w-[55px] bg-secondary flex items-center justify-evenly rounded-md\">\r\n              <ion-icon name=\"star\" class=\"text-light text-sm\"></ion-icon>\r\n              <p class=\"text-light text-sm\">{{d.rating}}</p>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <p class=\"text-lg text-black-3\">{{d.designs}} completed designs</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4530:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/contact-designer/contact-designer.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container mb-40\">\r\n      <h1 class=\"main-title\">Select a designer</h1>\r\n      <div class=\"flex flex-wrap justify-between p-2 xl:p-0\">\r\n        <div *ngFor=\"let d of designers\">\r\n          <ion-card class=\"border border-black rounded-2xl shadow-none w-full xl:w-[370px] h-[350px] m-0 mt-5 mb-2 p-4\">\r\n            <img src={{d.image}} class=\"w-full h-full\">\r\n          </ion-card>\r\n          <div class=\"flex items-center justify-between\">\r\n            <div class=\"flex items-center justify-start\">\r\n              <img src={{d.logo}} class=\"h-[30px] w-[30px] rounded-md\">\r\n              <p class=\"text-black-2 text-2xl font-medium ml-2\">{{d.name}}</p>\r\n              <ion-button fill=\"clear\" class=\"text-black\" (click)=\"paymentModal()\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div class=\"h-[30px] w-[55px] bg-secondary flex items-center justify-evenly rounded-md\">\r\n              <ion-icon name=\"star\" class=\"text-light text-sm\"></ion-icon>\r\n              <p class=\"text-light text-sm\">{{d.rating}}</p>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <p class=\"text-lg text-black-3\">{{d.designs}} completed designs</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

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
module.exports = "<ion-content>\r\n    <div id=\"home\">\r\n      <app-header></app-header>\r\n      <ion-grid class=\"main-container\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"3\">\r\n            <app-step-picker\r\n              (changeStep)=\"goToStep($event)\"\r\n              [canChangeToStep]=\"canChangeToStep\"\r\n              [currentStepNo]=\"currentStepNo\"\r\n              [moodboard]=\"moodboard\"\r\n              [steps]=\"steps\"\r\n              [page]=\"'customize-moodboard'\"\r\n            ></app-step-picker>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"9\">\r\n            <app-new-project-step\r\n              (toggleSelection)=\"toggleItem($event)\"\r\n              [project]=\"moodboard\"\r\n              [stepsOrder]=\"stepsOrder\"\r\n              [currentStepNo]=\"currentStepNo\"\r\n              [currentStep]=\"steps[currentStepNo]\"\r\n            ></app-new-project-step>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col offset-xl=\"3\">\r\n            <ion-buttons class=\"justify-center\">\r\n                <ion-button\r\n                *ngIf=\"currentStepNo === 0\"\r\n                class=\"secondary-btn\"\r\n                routerLink=\"/new-project\"\r\n                routerDirection=\"root\"\r\n                >Cancel</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"currentStepNo !== 0\"\r\n                class=\"secondary-btn\"\r\n                [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n                (click)=\"backStep()\"\r\n                >Back</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"currentStepNo !== 2\"\r\n                class=\"primary-btn\"\r\n                [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\r\n                (click)=\"nextStep()\"\r\n                >Next</ion-button\r\n              >\r\n              <ion-button\r\n                *ngIf=\"currentStepNo === 2\"\r\n                class=\"primary-btn\"\r\n                [class.disabled]=\"!validateData()\"\r\n                routerLink=\"/new-project\"\r\n                routerDirection=\"root\"\r\n                >Finish</ion-button\r\n              >\r\n            </ion-buttons>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>\r\n";

/***/ }),

/***/ 5662:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/designer-profile/designer-profile.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <h1 class=\"main-title\">Designer profile</h1>\r\n      <div class=\"mt-[30px]\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-xl=\"4\" class=\"p-0\">\r\n            <div class=\"p-2 xl:p-0\">\r\n              <div class=\"bg-light rounded-2xl flex flex-col items-center\">\r\n                <img src=\"../../../../assets/images/profile-img.png\" class=\"w-[240px] h-[240px] rounded-full mt-[65px]\">\r\n                <div class=\"w-[144px] h-[30px] bg-secondary rounded-[5px] flex items-center justify-center mt-[30px]\">\r\n                  <p class=\"text-white text-sm\">INHOUSE DESIGNER</p>\r\n                </div>\r\n                <p class=\"text-2xl text-black-2 font-medium mt-[15px]\">Diana Haliwell</p>\r\n                <p class=\"text-lg text-black-3\">16 projects</p>\r\n                <p class=\"text-lg text-black-2 px-[30px] xl:px-[60px] mt-[30px]\">\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui. Maecenas congue vel leo ac feugiat.\r\n                  <br>\r\n                  <br>\r\n                  Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.\r\n                </p>\r\n                <div class=\"flex flex-col items-start w-full px-[30px] xl:px-[60px]\">\r\n                  <p class=\"text-primary text-lg mt-[20px]\">LANGUAGES</p>\r\n                  <p class=\"text-black-2 text-lg\">English, Norwegian</p>\r\n                </div>\r\n                <ion-button fill=\"clear\" class=\"primary-btn mb-[60px] mt-[30px]\" (click)=\"bookConsultationModal()\">Book consultation</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"8\" class=\"p-2 xl:p-0 xl:pl-5\">\r\n            <p class=\"text-2xl text-black-2 font-medium\">Latest project</p>\r\n            <div class=\"mt-[20px] xl:mt-[30px]\">\r\n              <div class=\"border border-black rounded-2xl w-full xl:w-[765px] h-[410px] p-4 mb-2\">\r\n                <img src=\"../../../../assets/images/landing-img.png\" class=\"w-full h-full\">\r\n              </div>\r\n            </div>\r\n            <div class=\"flex items-center justify-start\">\r\n              <p class=\"text-black-2 text-2xl font-medium\">Skandinavian Warm</p>\r\n              <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/project-details\" routerDirection=\"root\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n              <p class=\"text-black-3 text-lg\">20 pieces / 1w ago</p>\r\n            </div>\r\n            <div class=\"mt-16\">\r\n              <p class=\"text-2xl font-medium text-black-2\">Other projects</p>\r\n              <div class=\"flex flex-wrap justify-between w-full xl:w-[765px]\">\r\n                <div *ngFor=\"let project of projects\">\r\n                  <ion-card class=\"w-full xl:w-[370px] h-[350px] border rounded-2xl border-black m-0 mt-5 mb-2 shadow-none p-4\">\r\n                    <img src={{project.image}} class=\"w-full h-full\">\r\n                  </ion-card>\r\n                  <div class=\"flex items-center justify-start\">\r\n                    <p class=\"text-black-2 text-2xl font-medium\">{{project.projectName}}</p>\r\n                    <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/project-details\" routerDirection=\"root\">\r\n                      <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                  <div>\r\n                    <p class=\"text-black-3 text-lg\">{{project.moodboard}} moodboard / {{project.pieces}} pieces / {{project.updated}} ago</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 780:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/messenger/messenger.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">Messages</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n            <div class=\"xl-ion:w-[370px] xl-ion:h-[720px] pb-8\">\r\n              <div class=\"profile-input\">\r\n                <span class=\"text-sm text-black-2\">Search</span>\r\n                <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px]\"></ion-input>\r\n              </div>\r\n              <ul>\r\n                <li *ngFor=\"let number of [0,1,2,3,4,5,6]\">\r\n                  <div class=\"my-6 flex justify-between\">\r\n                    <div class=\"flex\" >\r\n                      <img src=\"../../../assets/images/profile-img.png\" class=\"w-[57px] h-[57px] rounded-lg object-cover\" alt=\"Profile Img\"/>\r\n                      <div class=\"ml-3.5 w-[170px]\">\r\n                        <p class=\"text-black-1 leading-5 font-semibold\">Sina Marlsberg</p>\r\n                        <p class=\"text-black-3 size-[15px] leading-5\" style=\"overflow: hidden;\r\n                          display: -webkit-box;\r\n                          -webkit-box-orient: vertical;\r\n                          -webkit-line-clamp: 2;\r\n                          \">Hello, I wanted to go to the dates of...\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <p class=\"text-black-3 size-[15px] leading-[14px]\">22 Jun</p>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n            <div class=\"bg-light xl-ion:w-[794px] xl-ion:h-[682px] rounded-lg text-center pb-8\">\r\n              <div class=\"flex py-[22px] pl-[18px] border-b border-secondary\">\r\n                <img src=\"../../../assets/images/profile-img.png\" class=\"w-[45px] h-[45px] rounded-lg object-cover\" alt=\"Profile Img\"/>\r\n                <p class=\"text-black-1 leading-5 font-semibold ml-[13px] flex items-center\">Sina Marlsberg</p>\r\n              </div>\r\n              <div class=\"chat\">\r\n                <div class=\"chat-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. Fusce laoreet commodo eros vitae condimentum. Fusce at sem tellus. </div>\r\n                <div class=\"chat-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. </div>\r\n                <div class=\"chat-right\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. Fusce laoreet commodo eros vitae condimentum. Fusce at sem tellus. Vivamus eget vehicula nulla. </div>\r\n                <div class=\"chat-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tempor turpis. Fusce laoreet commodo eros vitae condimentum. Fusce at sem tellus. Vivamus eget vehicula nulla. </div>\r\n              </div>\r\n              <div class=\"chat-input\">\r\n                <ion-input type=\"text\" placeholder=\"Type a message...\" class=\"border bg-transparent text-left h-[52px] rounded-2xl border-black-2 mx-[20px] w-[80%]\"></ion-input>\r\n                <ion-icon class=\"img-btn disabled\" name=\"image\"></ion-icon>\r\n                <div class=\"send-btn-wrapper\"><ion-icon class=\"send-btn\" name=\"send-sharp\"></ion-icon></div>\r\n              </div>\r\n            </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4326:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/moodboard-details/moodboard-details.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <ion-button fill=\"clear\" class=\"back-btn\" routerLink=\"/project-details\" routerDirection=\"root\">\r\n        <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n        <p>Project details</p>\r\n      </ion-button>\r\n      <p class=\"main-title\">Moodboard 1</p>\r\n      <div class=\"p-2 xl:p-0\">\r\n        <ion-card class=\"border border-black shadow-none rounded-2xl w-full xl:w-[866px] h-[410px] m-0 mt-7 p-4\">\r\n          <img src=\"../../../../assets/images/landing-img.png\" class=\"h-full w-full\">\r\n        </ion-card>\r\n        <div class=\"mt-16 text-center xl:text-left\">\r\n          <p class=\"text-black-2 text-2xl font-medium\">What's included in moodboard</p>\r\n          <div class=\"mt-6 flex justify-center xl:justify-between flex-wrap\">\r\n            <div *ngFor=\"let p of parts\" class=\"flex flex-col\">\r\n              <ion-card class=\"border border-black shadow-none rounded-2xl w-[270px] h-[200px] m-0 mt-5 mb-2 p-4\">\r\n                <img src={{p.image}} class=\"h-full w-full\">\r\n              </ion-card>\r\n              <p class=\"text-black-2 text-2xl mt-2 font-medium\">{{p.name}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"flex flex-col xl:flex-row justify-center mt-10 xl:mt-40 mb-40\">\r\n          <ion-button fill=\"clear\" class=\"secondary-btn\">Edit moodboard</ion-button>\r\n          <ion-button fill=\"clear\" class=\"primary-btn\" routerLink=\"/contact-designer\" routerDirection=\"root\">Contact designer</ion-button>\r\n          <ion-button fill=\"clear\" class=\"secondary-btn\">Contact craftsman</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7165:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/my-intiri/my-intiri.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title\">My intiri</p>\r\n      <ion-row class=\"mt-3\">\r\n        <ion-col size=\"12\" size-xl=\"8\" class=\"p-2 xl:p-0 xl:pt-6\">\r\n          <div *ngIf=\"projects.length > 0\">\r\n            <div class=\"flex justify-between items-center \">\r\n              <p class=\"text-2xl font-medium\">Latest project</p>\r\n              <div>\r\n                <ion-button fill=\"clear\" class=\"text-black\" (click)=\"prev()\">\r\n                  <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button fill=\"clear\" class=\"text-black\" (click)=\"next()\">\r\n                  <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex flex-col xl:flex-row xl:justify-between m-0 mt-4 mb-2\">\r\n              <ion-card class=\"w-full xl:w-[370px] h-[350px] border rounded-2xl border-black m-0 shadow-none p-4\">\r\n                <img src=\"{{projects[projects.length-1].moodboard.style.styleImages[1].path}}\" class=\"w-full h-full object-cover\">\r\n              </ion-card>\r\n              <div class=\"w-full xl:w-[370px] h-[350px] mt-5 xl:mt-0\">\r\n                <ion-slides #slides [options]=\"options\" class=\"p-0 m-0\">\r\n                  <ion-slide>\r\n                    <ion-card class=\"w-[170px] h-[350px] border rounded-2xl border-gray-400 m-0 shadow-none p-4\">\r\n                      <p class=\"mt-2 text-lg text-black-1 text-center\">Colors</p>\r\n                      <section  class=\"max-h-[280px] overflow-auto\">\r\n                        <div *ngFor=\"let palette of projects[projects.length-1].moodboard.colorPalettes\" [ngStyle]=\"{background: palette.mainColor}\" class=\"img-settings\"></div>\r\n                      </section>\r\n                    </ion-card>\r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                    <ion-card class=\"w-[170px] h-[350px] border rounded-2xl border-gray-400 m-0 shadow-none p-4\">\r\n                      <p class=\"mt-2 text-lg text-black-1 text-center\">Material</p>\r\n                      <section  class=\"max-h-[280px] overflow-auto\">\r\n                        <div *ngFor=\"let item of projects[projects.length-1].moodboard.materials\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(item.imagePath) + ')'}\" class=\"img-settings\"></div>\r\n                      </section>\r\n                    </ion-card>\r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                    <ion-card class=\"w-[170px] h-[350px] border rounded-2xl border-gray-400 m-0 shadow-none p-4\">\r\n                      <p class=\"mt-2 text-lg text-black-1 text-center\">Furniture</p>\r\n                      <section  class=\"max-h-[280px] overflow-auto\">\r\n                        <div *ngFor=\"let item of projects[projects.length-1].moodboard.products\" [ngStyle]=\"{background: 'url(' + normalizeSlashes(item.imagePath) + ')'}\" class=\"img-settings\"></div>\r\n                      </section>\r\n                    </ion-card>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex items-center justify-start\">\r\n              <p class=\"text-black-2 text-2xl font-medium\">{{projects[projects.length-1].name}}</p>\r\n              <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/project-details\" routerDirection=\"root\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n              <p class=\"text-black-3 text-lg\">1 moodboard / {{getPiecesNo(projects[projects.length-1])}} pieces / {{projects[projects.length-1].created | timeAgo }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-16\">\r\n            <p class=\"text-2xl font-medium text-black-2\">All projects</p>\r\n            <div class=\"flex flex-wrap justify-between\">\r\n              <div *ngFor=\"let project of projects\">\r\n                <ion-card class=\"w-full xl:w-[370px] h-[350px] border rounded-2xl border-black m-0 mt-5 mb-2 shadow-none p-4\">\r\n                  <img src=\"{{project.moodboard.style.styleImages[0].path}}\" class=\"w-full h-full\">\r\n                </ion-card>\r\n                <div class=\"flex items-center justify-start\">\r\n                  <p class=\"text-black-2 text-2xl font-medium\">{{project.name}}</p>\r\n                  <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/project-details\" routerDirection=\"root\">\r\n                    <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n                <div>\r\n                  <p class=\"text-black-3 text-lg\">1 moodboard / {{getPiecesNo(project)}} pieces / {{project.created | timeAgo }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-xl=\"4\" class=\"xl:pl-4\">\r\n          <div class=\"h-full bg-light rounded-2xl pl-7 pt-6\">\r\n            <p class=\"text-2xl font-medium\">Intiri news</p>\r\n            <div *ngFor=\"let n of news\" class=\"flex justify-start mt-5\">\r\n              <img src={{n.image}} class=\"w-14 h-14 rounded-2xl\">\r\n              <div class=\"ml-5\">\r\n                <p class=\"text-lg font-medium\">{{n.name}}</p>\r\n                <p class=\"text-lg text-black-2\">{{n.news}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5631:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/new-project/new-project.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-xl=\"3\">\r\n          <app-step-picker\r\n            (changeStep)=\"goToStep($event)\"\r\n            [canChangeToStep]=\"canChangeToStep\"\r\n            [currentStepNo]=\"currentStepNo\"\r\n            [project]=\"project\"\r\n            [steps]=\"steps\"\r\n          ></app-step-picker>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-xl=\"9\">\r\n          <app-new-project-step\r\n            (toggleSelection)=\"toggleItem($event)\"\r\n            [project]=\"project\"\r\n            [stepsOrder]=\"stepsOrder\"\r\n            [currentStepNo]=\"currentStepNo\"\r\n            [currentStep]=\"steps[currentStepNo]\"\r\n          ></app-new-project-step>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"3\">\r\n          <ion-buttons class=\"justify-center\">\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo].data !== 'final'\"\r\n              class=\"secondary-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n              (click)=\"backStep()\"\r\n              >Back</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo].data !== 'final'\"\r\n              class=\"primary-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo+1)\"\r\n              (click)=\"nextStep()\"\r\n              >Next</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo].data === 'final'\"\r\n              class=\"secondary-btn\"\r\n              [class.disabled]=\"!canChangeToStep(currentStepNo-1)\"\r\n              routerLink=\"/customize-moodboard\"\r\n              routerDirection=\"root\"\r\n              >Customize moodboard</ion-button\r\n            >\r\n            <ion-button\r\n              *ngIf=\"steps[currentStepNo].data === 'final'\"\r\n              class=\"primary-btn\"\r\n              (click)=\"saveProject(); openFinalModal()\"\r\n              >Finish</ion-button\r\n            >\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4238:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/payment-details/payment-details.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <p class=\"main-title\">Payment details</p>\r\n      <div class=\"w-full\">\r\n      <ion-row class=\"p-2 xl:p-0\">\r\n        <ion-col size=\"12\" size-xl=\"5\">\r\n          <div class=\"flex\">\r\n            <ion-button fill=\"clear\" class=\"credit-btn\">\r\n              <ion-icon name=\"card-outline\"></ion-icon>\r\n              <p class=\"ml-2\">Credit card</p>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" class=\"vipps-btn\">\r\n              <img src=\"../../../../assets/icon/vipps-red.svg\">\r\n            </ion-button>\r\n          </div>\r\n          <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">Billing address</p>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">Full name</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">Street</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px] flex flex-col xl:flex-row\">\r\n            <div>\r\n              <span class=\"text-sm black-2\">Postal code</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n            <div class=\"ml-0 xl:ml-[20px] mt-[30px] xl:mt-0\">\r\n              <span class=\"text-sm black-2\">City</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">Country</span>\r\n            <ion-select class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\" interface=\"popover\">\r\n              <ion-select-option>Serbia</ion-select-option>\r\n              <ion-select-option>Norway</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <p class=\"text-2xl text-black-2 font-medium mt-[30px]\">Credit card</p>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">Name on card</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px]\">\r\n            <span class=\"text-sm black-2\">Card number</span>\r\n            <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[470px]\"></ion-input>\r\n          </div>\r\n          <div class=\"mt-[30px] flex\">\r\n            <div>\r\n              <span class=\"text-sm black-2\">CVV</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n            <div class=\"ml-[10px] xl:ml-[20px]\">\r\n              <span class=\"text-sm black-2\">Expiration date</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl border-black-2 h-[52px] w-full xl:w-[225px]\"></ion-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex justify-center mt-[30px] mb-[50px]\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn\" routerLink=\"/book-designer-profile\" routerDirection=\"root\">Continue</ion-button>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col offset-xl=\"2\" size-xl=\"5\" size=\"12\">\r\n          <div class=\"min-h-[580px] bg-light border border-light rounded-2xl px-[30px] xl:px-[50px] pt-[50px]\">\r\n          <p class=\"text-2xl text-black-2 font-medium\">Order summary</p>\r\n          <p class=\"text-lg text-black-2 font-medium mt-[30px]\">Consultation with designer</p>\r\n          <p class=\"text-lg text-black-2 mt-[10px]\" *ngFor=\"let item of items\">{{item.name}}</p>\r\n          <ion-item-divider class=\"border-b border-secondary bg-transparent\"></ion-item-divider>\r\n          <div class=\"mt-[30px] flex justify-between\">\r\n            <p class=\"text-lg text-black-2 font-medium\">Consultation price</p>\r\n            <p class=\"text-lg text-black-2\">{{consultationPrice}} {{currency}}</p>\r\n          </div>\r\n          <div class=\"mt-[14px] flex justify-between\">\r\n            <p class=\"text-lg text-black-2 font-medium\">Number of consultations</p>\r\n            <p class=\"text-lg text-black-2\">{{consultationNumber}}</p>\r\n          </div>\r\n          <ion-item-divider class=\"border-b border-secondary bg-transparent\"></ion-item-divider>\r\n          <div class=\"mt-[30px] flex justify-between items-center mb-[50px]\">\r\n            <p class=\"text-lg text-black-2 font-medium\">TOTAL</p>\r\n            <p class=\"text-2xl text-black-2 font-medium\">{{totalPrice}} {{currency}}</p>\r\n          </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

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
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">Pricing plans</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n            <div class=\"xl-ion:w-[370px] xl-ion:h-[720px] rounded-lg text-center border pb-8\">\r\n                <div class=\"pt-12\">\r\n                    <img src=\"../../../assets/icon/free-plan.svg\" class=\"w-[100px] h-[77px]  mx-auto\" alt=\"Free Plan Img\"/>\r\n                </div>\r\n                <h3 class=\"mt-10 mx-10 mb-1 font-medium text-black-2\">Free plan</h3>\r\n                <hr class=\"w-[60px] h-[0px] border border-primary bg-primary mx-auto mt-[30px]\">\r\n                <p class=\"text-black-2 mt-[30px]\">Room sketch</p>\r\n                <p class=\"text-black-2 mt-[30px]\">Moodboard adjustment</p>\r\n                <p class=\"text-black-2 mt-[30px]\">Select products</p>\r\n                <p class=\"text-black-2 mt-[30px]\">Decoration</p>\r\n              </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n            <div class=\"bg-light xl-ion:w-[370px] xl-ion:h-[720px] rounded-lg text-center pb-8\">\r\n                <div class=\"pt-12\">\r\n                    <img src=\"../../../assets/icon/premium-plan.svg\" class=\"w-[100px] h-[77px]  mx-auto\" alt=\"Premium Plan Img\"/>\r\n                </div>\r\n                <h3 class=\"mt-10 mx-10 mb-1 font-medium text-black-2\">Premium plan</h3>\r\n                <hr class=\"w-[60px] h-[0px] border border-primary bg-primary mx-auto mt-[30px]\">\r\n                <p class=\"text-black-2 mt-[30px]\">Room sketch</p>\r\n                <p class=\"text-black-2 mt-[30px]\">Moodboard adjustment</p>\r\n                <p class=\"text-black-2 mt-[30px]\">Select products</p>\r\n                <p class=\"text-black-2 mt-[30px]\">Decoration</p>\r\n                <ion-buttons class=\"justify-center mt-8\">\r\n                    <ion-button class=\"primary-btn\">Upgrade</ion-button>\r\n                </ion-buttons>\r\n            </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5461:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/end-user-pages/project-details/project-details.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <div class=\"main-container\">\r\n      <ion-button fill=\"clear\" class=\"back-btn\" routerLink=\"/my-intiri\" routerDirection=\"root\">\r\n        <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n        <p>My Intiri</p>\r\n      </ion-button>\r\n      <p class=\"main-title\">Skandinavian bright</p>\r\n      <div class=\"mt-7 flex flex-wrap justify-between p-2 xl:p-0\">\r\n        <div *ngFor=\"let mb of moodboards\">\r\n          <ion-card class=\"h-[350px] w-full xl:w-[370px] border border-black rounded-2xl m-0 mt-5 mb-2 shadow-none p-4\">\r\n            <img src={{mb.image}} class=\"w-full h-full\">\r\n          </ion-card>\r\n          <div class=\"flex items-center justify-start\">\r\n            <p class=\"text-black-2 text-2xl font-medium\">{{mb.name}}</p>\r\n            <ion-button fill=\"clear\" class=\"text-black\" routerLink=\"/moodboard-details\" routerDirection=\"root\">\r\n              <ion-icon name=\"arrow-forward\" class=\"h-6 w-6 text-black-2\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n          <div>\r\n            <p class=\"text-black-3 text-lg\">{{mb.pieces}} pieces / {{mb.updated}} ago</p>\r\n          </div>\r\n        </div>\r\n        <ion-card class=\"h-[350px] w-[370px] border border-black-3 border-dashed rounded-2xl shadow-none m-0 mt-5 p-4 flex justify-center items-center flex-col\">\r\n          <ion-icon name=\"add\" class=\"w-20 h-20\"></ion-icon>\r\n          <p class=\"text-lg font-medium\">Add new moodboard</p>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6688:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Login</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold mt-7\">Forgot password?</h1>\r\n          <p class=\"text-lg black-2\">\r\n            Please enter your phone number to reset your password.\r\n          </p>\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"forgotPassword()\" autocomplete=\"off\">\r\n          <div class=\"mt-8\">\r\n            <span class=\"text-sm black-2\">Phone number</span>\r\n            <div class=\"flex justify-between\">\r\n              <div>\r\n                <ion-input class=\"border rounded-2xl border-black-2 h-14 w-32\"></ion-input>\r\n              </div>\r\n              <div>\r\n                <ion-input name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-80\"></ion-input>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"send-btn\" type=\"submit\">Send</ion-button>\r\n          </div>\r\n          </form>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

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
module.exports = "<ion-content\r\n[scrollEvents]=\"true\"\r\n(ionScroll)=\"logScrollEnd()\">\r\n  <div class=\"bg-white\">\r\n    <div>\r\n      <app-header-landing [isScrolledDown]=\"isScrolledDown\"></app-header-landing>\r\n      <div class=\"hero-wrapper\">\r\n\r\n        <!-- Hero Text -->\r\n        <div class=\"container relative\" id=\"home\">\r\n          <div class=\"hero-text-wrapper\">\r\n            <p class=\"hero-pencraft\">Welcome to Intiri</p>\r\n            <p class=\"hero-text\">Get <span class=\"text-primary\">IDEAS</span> for furnishing and decorating your home!</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\">Find your style</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Text 1 -->\r\n      <ion-grid id=\"how-it-works\">\r\n        <ion-row class=\"container\">\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\r\n            <img src=\"../../../assets/images/01.png\" alt=\"\">\r\n            <p class=\"pencraft\">How it works</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\">Find your style</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Text 2 -->\r\n      <ion-grid>\r\n        <ion-row class=\"container flex-col-reverse xs:flex-row \">\r\n          <ion-col size=\"12\" size-sm  class=\"pt-32 pr-11 pl-11 md:pl-0\">\r\n            <img src=\"../../../assets/images/02.png\" alt=\"\">\r\n            <p class=\"pencraft\">How it works</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\">Find your style</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      <!-- Text 3 -->\r\n      <ion-grid class=\"mb-12\">\r\n        <ion-row class=\"container\">\r\n          <ion-col size=\"12\" size-sm>\r\n            <img class=\"landing-img\" src=\"../../../assets/images/landing-img-02.png\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm class=\"pt-32 pl-11\">\r\n            <img src=\"../../../assets/images/03.png\" alt=\"\">\r\n            <p class=\"pencraft\">How it works</p>\r\n            <p class=\"landing-headline\">Headline</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui.<br>Maecenas congue vel leo ac feugiat.</p>\r\n            <p class=\"landing-text mt-8\">Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed dolor mauris.</p>\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\">Find your style</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Stories / Testimonials -->\r\n      <div class=\"bg-light bg-cover min-h-[1030px]\" id=\"stories\">\r\n        <ion-row class=\"container relative py-[30px] xl:py-[310px]\">\r\n          <ion-col size=\"12\" size-xl=\"3.5\"  class=\"ion-align-self-center pl-[5%] xl-ion:pl-0\">\r\n            <p class=\"pencraft\">Stories</p>\r\n            <p class=\"landing-headline\">You said <br/> about us</p>\r\n            <p class=\"landing-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-xl=\"7.5\" offset-xl=\"0.75\" class=\"\">\r\n            <ion-slides #slides [options]=\"getOptions()\" class=\"h-[100%]\">\r\n              <ion-slide *ngFor=\"let comment of comments\">\r\n                <ion-card class=\"border rounded-2xl border-black-1 bg-transparent p-8 text-left h-[100%]\">\r\n                  <div class=\"mb-2\">\r\n                    <span class='quote-icon'></span>\r\n                    <span class='quote-icon ml-1'></span>\r\n                  </div>\r\n                  <p class=\"text-black-2 text-lg\">{{comment.text}}</p>\r\n                  <p class=\"text-lg font-semibold text-black mt-4\">{{comment.author}}</p>\r\n                </ion-card>\r\n              </ion-slide>\r\n            </ion-slides>\r\n            <div class=\"flex justify-end\">\r\n              <ion-button fill=\"clear\" (click)=\"prev()\" class=\"text-black\">\r\n                <ion-icon name=\"arrow-back\" class=\"h-6 w-6\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button fill=\"clear\" (click)=\"next()\" class=\"text-black\">\r\n                <ion-icon name=\"arrow-forward\" class=\"h-6 w-6\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <!-- Contact Us -->\r\n      <div id=\"contact\" class=\"bg-primary bg-cover h-[480px] text-center pt-[140px]\">\r\n        <p class=\"pencraft-white\">Contact us</p>\r\n        <p class=\"landing-headline-white\">Don't hesitate to say hi</p>\r\n        <ion-buttons>\r\n          <ion-button href=\"mailto:office@intiri.com\" class=\"contact-btn\">office@intiri.com</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-row>\r\n    <ion-col offset-xl=\"2\" size-xl=\"4\" class=\"p-2 xl:p-12 h-full\">\r\n      <div class=\"w-full xl:w-[470px]\">\r\n        <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n        <h1 class=\"font-['Allison'] text-7xl mt-16 text-black-2\">Welcome back</h1>\r\n        <h1 class=\"text-5xl font-semibold\">Login</h1>\r\n        <p class=\"text-lg text-black-2\">\r\n          Manage your account, create and edit projects, collaborate on design and more.\r\n        </p>\r\n        <form #loginForm=\"ngForm\" class=\"d-flex mt-2 mt-md-0\" (ngSubmit)=\"login()\" autocomplete=\"off\">\r\n        <div class=\"mt-8\">\r\n          <span class=\"text-sm text-black-2\">Phone number</span>\r\n          <div class=\"flex justify-between\">\r\n            <div>\r\n              <ion-select class=\"border rounded-2xl border-black-2 h-14 w-24 xl:w-32\" interface=\"popover\">\r\n                <ion-select-option>\r\n                  <div>\r\n                    <p class=\"text-lg text-black\">+47</p>\r\n                  </div>\r\n                </ion-select-option>\r\n                <ion-select-option>\r\n                  <p class=\"text-lg text-black\">+381</p>\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n            <div>\r\n              <ion-input [(ngModel)]=\"model.phoneNumber\" name=\"phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-60 xl:w-80\"></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"flex flex-col justify-center items-center\">\r\n          <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\" type=\"submit\">Login</ion-button>\r\n          <p class=\"text-lg text-black-2 mt-7\">Or</p>\r\n          <ion-button fill=\"clear\" class=\"vipps-btn\">\r\n            <img src=\"../../../assets/icon/vipps-white.svg\">\r\n          </ion-button>\r\n          <p class=\"text-lg text-black-2 mt-20\">Don't have an account?</p>\r\n          <ion-button fill=\"clear\" class=\"secondary-btn\" routerLink=\"/register\" routerDirection=\"root\">Create an account</ion-button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-xl=\"6\" class=\"p-2 xl:p-12 h-full flex justify-end\">\r\n      <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div id=\"home\">\r\n    <app-header></app-header>\r\n    <ion-grid class=\"main-container\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <h1 class=\"main-title\">Profile</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"4\">\r\n          <app-profile-img-section></app-profile-img-section>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" offset-xl=\"0\" size-xl=\"5\">\r\n          <app-profile-info-section></app-profile-info-section>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col offset-xl=\"4\" size-xl=\"5\">\r\n          <ion-buttons class=\"justify-center mt-8\">\r\n            <ion-button class=\"primary-btn\">Save changes</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\" offset-xl=\"2\" size-xl=\"4\" class=\"p-2 xl:p-12 h-full\">\r\n      <div class=\"w-full xl:w-[470px]\">\r\n        <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n        <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n          <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n          <p>Login</p>\r\n        </ion-button>\r\n        <h1 class=\"font-['Allison'] text-7xl mt-0 text-black-2\">Start your journey</h1>\r\n        <h1 class=\"text-5xl font-semibold\">Create an account</h1>\r\n        <p class=\"text-lg text-black-2\">\r\n          Manage your account, create and edit projects, collaborate on design and more.\r\n        </p>\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n          <div class=\"mt-8 flex flex-col xl:flex-row justify-between\">\r\n            <div>\r\n              <span class=\"text-sm text-black-2\">First name</span>\r\n              <ion-input type=\"text\" formControlName=\"username\" class=\"border rounded-2xl h-14 border-black-2 w-full xl:w-56\"></ion-input>\r\n            </div>\r\n            <div class=\"mt-[30px] xl:mt-0\">\r\n              <span class=\"text-sm text-black-2\">Last name</span>\r\n              <ion-input type=\"text\" class=\"border rounded-2xl h-14 border-black-2 w-full xl:w-56\"></ion-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-7\">\r\n            <span class=\"text-sm text-black-2\">Phone number</span>\r\n            <div class=\"flex justify-between\">\r\n              <div>\r\n                <ion-select class=\"border rounded-2xl border-black-2 h-14 w-24 xl:w-32\" interface=\"popover\">\r\n                  <ion-select-option>\r\n                    <div>\r\n                      <p class=\"text-lg text-black\">+47</p>\r\n                    </div>\r\n                  </ion-select-option>\r\n                  <ion-select-option>\r\n                    <p class=\"text-lg text-black\">+381</p>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n              <div>\r\n                <ion-input formControlName=\"phoneNumber\" type=\"tel\" class=\"border rounded-2xl h-14 border-black-2 w-60 xl:w-80\"></ion-input>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button type=\"submit\" fill=\"clear\" class=\"primary-btn mt-[30px]\">Register</ion-button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-xl=\"6\" class=\"p-2 xl:p-12 h-full flex justify-end\">\r\n      <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4367:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" size=\"4\" class=\"p-12 h-full\">\r\n        <div class=\"w-[470px]\">\r\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n          <ion-button fill=\"clear\" class=\"login-btn\" routerLink=\"/login\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Login</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold mt-7\">Reset password</h1>\r\n          <p class=\"text-lg black-2\">\r\n            Please enter your new password.\r\n          </p>\r\n          <form [formGroup]=\"resetPassForm\" (ngSubmit)=\"resetPassword()\">\r\n            <div class=\"mt-8\">\r\n              <span class=\"text-sm black-2\">Password</span>\r\n              <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n                <ion-input formControlName=\"password\" type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n                <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"mt-7\">\r\n              <span class=\"text-sm black-2\">Repeat password</span>\r\n              <ion-item class=\"rounded-2xl border-black-2\" lines=\"none\">\r\n                <ion-input formControlName=\"confirmPassword\" type=\"password\" class=\"h-14 password-input\"></ion-input>\r\n                <ion-icon slot=\"end\" name=\"eye\"></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"flex flex-col justify-center items-center\">\r\n              <ion-button fill=\"clear\" type=\"submit\" class=\"reset-btn\">Reset password</ion-button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

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
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset-xl=\"2\" size-xl=\"4\" class=\"p-2 xl:p-12 h-full\">\r\n        <div class=\"w-full xl:w-[470px]\">\r\n          <img class=\"h-7 w-auto\" src=\"../../../assets/images/intiri-logo.svg\">\r\n          <ion-button fill=\"clear\" class=\"register-btn\" routerLink=\"/register\" routerDirection=\"root\">\r\n            <ion-icon name=\"arrow-back\" class=\"w-6 h-6\" slot=\"start\"></ion-icon>\r\n            <p>Create an account</p>\r\n          </ion-button>\r\n          <h1 class=\"text-5xl font-semibold\">Sms verification</h1>\r\n          <p class=\"text-lg text-black-2\">\r\n            An sms with 6-digit verification code was sent to your phone.\r\n          </p>\r\n          <div class=\"mt-8\">\r\n            <code-input  #codeInput [codeLength]=\"6\" (codeChanged)=\"onCodeChanged($event)\" (codeCompleted)=\"onCodeCompleted($event)\">\r\n\r\n            </code-input>\r\n          </div>\r\n          <div class=\"flex flex-col justify-center items-center\">\r\n            <ion-button fill=\"clear\" class=\"primary-btn mt-[30px]\">Proceed to app</ion-button>\r\n            <ion-button fill=\"clear\" class=\"send-btn\">Send again</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-xl=\"6\" class=\"p-2 xl:p-12 h-full flex justify-end\">\r\n        <div class=\"bg-img-01 rounded-2xl bg-cover h-[980px] w-[900px]\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map