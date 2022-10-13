import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//pages for all users
import { LandingPage } from './pages/landing/landing.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { HowItWorksPage } from './pages/how-it-works/how-it-works.page';
import { ProfilePage } from './pages/profile/profile.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { ResetPasswordPage } from './pages/reset-password/reset.password.page';
import { SmsVerificationPage } from './pages/sms-verification/sms-verification.page';

//pages for end-users
import { NewProjectPage } from './pages/end-user-pages/new-project/new-project.page';
import { PreBookSelectionPage } from './pages/end-user-pages/pre-book-selection/pre-book-selection.page';
import { MyIntiriPage } from './pages/end-user-pages/my-intiri/my-intiri.page';
import { CustomizeMoodboardPage } from './pages/end-user-pages/customize-moodboard/customize-moodboard.page';
import { CraftsmanPortalPage } from './pages/end-user-pages/craftsman-portal/craftsman-portal.page';
import { ContactDesignerPage } from './pages/end-user-pages/contact-designer/contact-designer.page';
import { BookDesignerPage } from './pages/end-user-pages/book-designer/book-designer.page';
import { PricingPlansPage } from './pages/end-user-pages/pricing-plans/pricing-plans.page';
import { ProjectDetailsPage } from './pages/end-user-pages/project-details/project-details.page';
import { MoodboardDetailsPage } from './pages/end-user-pages/moodboard-details/moodboard-details.page';
import { MessengerPage } from './pages/end-user-pages/messenger/messenger.page';
import { DesignerProfilePage } from './pages/end-user-pages/designer-profile/designer-profile.page';
import { PaymentDetailsPage } from './pages/end-user-pages/payment-details/payment-details.page';
import { BookDesignerProfilePage } from './pages/end-user-pages/book-designer-profile/book-designer-profile.page';

//pages for admins
import { DashboardPage } from './pages/admin-pages/dashboard/dashboard.page';
import { DesignerPage } from './pages/admin-pages/designer/designer.page';
import { VendorPage } from './pages/admin-pages/vendor/vendor.page';
import { ConsultationsPage } from './pages/admin-pages/consultations/consultations.page';
import { MoodboardsPage } from './pages/admin-pages/moodboards/moodboards.page';
import { ClientPage } from './pages/admin-pages/client/client.page';
import { StylePage } from './pages/admin-pages/style/style.page';
import { AddMoodboardPage } from './pages/admin-pages/add-moodboard/add-moodboard.page';

//pages for designers
import { MyMoodboardPage } from './pages/designer-pages/my-moodboard/my-moodboard.page';
import { ClientListPage } from './pages/designer-pages/internal-designer/clients/client-list/client-list.page';
import { StyleListPage } from './pages/designer-pages/internal-designer/styles/style-list/style-list.page';
import { ClientRequestPage } from './pages/designer-pages/client-request/client-request.page';

//shared admin/designer pages
import { MoodboardPage } from './pages/shared-guarded-pages/moodboard/moodboard.page';

//app components
import { HeaderComponent } from './components/header/header.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderLandingComponent } from './components/header-landing/header-landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepPickerComponent } from './components/step-picker/step-picker.component';
import { NewProjectStepComponent } from './components/new-project-step/new-project-step.component';
import { ProfileImgSectionComponent } from './components/profile-img-section/profile-img-section.component';
import { ProfileInfoSectionComponent } from './components/profile-info-section/profile-info-section.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { HeaderInternalDesignerComponents } from './components/header-internal-designer/header-internal-designer.component';
import { AdminPartnersComponent } from './components/admin-partners/admin-partners.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { AdminInspirationComponent } from './components/admin-inspiration/admin-inspiration.component';
import { AdminStylesComponent } from './components/admin-styles/admin-styles.component';
import { AdminMaterialsComponent } from './components/admin-materials/admin-materials.component';
import { AdminRoomsComponent } from './components/admin-rooms/admin-rooms.component';
import { AdminColorsComponent } from './components/admin-colors/admin-colors.component';
import { AdminPicturesComponent } from './components/admin-pictures/admin-pictures.component';
import { AddMoodboardStepComponent } from './components/add-moodboard-step/add-moodboard-step.component';


//app modals
import { LoginModalComponent } from './components/modals/login/login-modal.component';
import { LogoutModalComponent } from './components/modals/logout-modal/logout-modal.component';
import { CreateProjectModalComponent } from './components/modals/create-project-modal/create-project-modal.component';
import { AddDesignerModalComponent } from './components/modals/add-designer-modal/add-designer-modal.component';
import { AddPartnerModalComponent } from './components/modals/add-partner-modal/add-partner-modal.component';
import { BookDesignerModalComponent } from './components/modals/book-designer-modal/book-designer-modal.component';
import { SettingsPopoverComponent } from './components/settings-popover/settings-popover.component';
import { MenuPopoverComponent } from './components/menu-popover/menu-popover.component';
import { AddStyleModalComponent } from './components/modals/add-style-modal/add-style-modal.component';
import { LanguagePopoverComponent } from './components/popovers/language-popover/language-popover.component';
import { RateModalComponent } from './components/modals/share-rate-modals/rate-modal/rate-modal.component';
import { RateSuccessfulModalComponent } from './components/modals/share-rate-modals/rate-successful-modal/rate-successful-modal.component';
import { ShareModalComponent } from './components/modals/share-rate-modals/share-modal/share-modal.component';
import { ShareSuccessfulModalComponent } from './components/modals/share-rate-modals/share-successful-modal/share-successful-modal.component';
import { AddMaterialsModalComponent } from './components/modals/add-materials-modal/add-materials-modal.component';
import { AddRoomModalComponent } from './components/modals/add-room-modal/add-room-modal.component';
import { AddColorModalComponent } from './components/modals/add-color-modal/add-color-modal.component';
import { AddPictureModalComponent } from './components/modals/add-picture-modal/add-picture-modal.component';

//plugins
import { CodeInputModule } from 'angular-code-input';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { StylePopoverComponent } from './components/popovers/style-popover/style-popover.component';
import { ProcessingPage } from './pages/processing/processing.page';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ColorPickerModule } from 'ngx-color-picker';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SmsVerificationModalComponent } from './components/modals/sms-verification-modal/sms-verification-modal.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatePipe } from '@angular/common';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent, LandingPage, LoginPage, RegisterPage, HowItWorksPage, ProfilePage, ForgotPasswordPage, ResetPasswordPage,
    SmsVerificationPage,
    NewProjectPage, PreBookSelectionPage, MyIntiriPage, CustomizeMoodboardPage, CraftsmanPortalPage, ContactDesignerPage, BookDesignerPage,
    ProjectDetailsPage, MoodboardDetailsPage, PricingPlansPage, MessengerPage, DesignerProfilePage, PaymentDetailsPage,
    DashboardPage, DesignerPage, VendorPage, BookDesignerProfilePage, ConsultationsPage, ClientPage, MoodboardsPage,
    MyMoodboardPage, ClientListPage, StyleListPage, ClientRequestPage,
    StylePage, MoodboardPage, AddMoodboardPage,
    HeaderLandingComponent, HeaderAdminComponent, HeaderComponent, FooterComponent, HeaderInternalDesignerComponents, SubHeaderComponent,
    NewProjectStepComponent, StepPickerComponent, AddMoodboardStepComponent,
    ProfileImgSectionComponent, ProfileInfoSectionComponent, AdminPartnersComponent, AdminProductsComponent, AdminClientsComponent, AdminInspirationComponent, AdminStylesComponent, AdminMaterialsComponent, AdminRoomsComponent, AdminColorsComponent, AdminPicturesComponent,
    LoginModalComponent, LogoutModalComponent, CreateProjectModalComponent, AddDesignerModalComponent, AddPartnerModalComponent, BookDesignerModalComponent,
    SettingsPopoverComponent, MenuPopoverComponent, StylePopoverComponent, AddStyleModalComponent, LanguagePopoverComponent, RateModalComponent, RateSuccessfulModalComponent,
    ShareModalComponent, ShareSuccessfulModalComponent, AddMaterialsModalComponent, AddRoomModalComponent, AddColorModalComponent, AddPictureModalComponent,
    TimeAgoPipe,ProcessingPage,SmsVerificationModalComponent
  ],
  entryComponents: [
    LoginModalComponent, LogoutModalComponent, CreateProjectModalComponent, AddDesignerModalComponent, AddPartnerModalComponent, BookDesignerModalComponent,
    RateModalComponent, RateSuccessfulModalComponent, ShareModalComponent, ShareSuccessfulModalComponent, AddMaterialsModalComponent, AddRoomModalComponent,
    AddColorModalComponent, AddPictureModalComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    ColorPickerModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    CodeInputModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
