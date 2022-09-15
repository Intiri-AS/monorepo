import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
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

//pages for designers
import { MyMoodboardPage } from './pages/designer-pages/my-moodboard/my-moodboard.page';

//shared admin/designer pages
import { StylePage } from './pages/shared-guarded-pages/style/style.page';
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
//app modals
import { LoginModalComponent } from './components/modals/login/login-modal.component';
import { LogoutModalComponent } from './components/modals/logout-modal/logout-modal.component';
import { CreateProjectModalComponent } from './components/modals/create-project-modal/create-project-modal.component';
import { BookDesignerModalComponent } from './components/modals/book-designer-modal/book-designer-modal.component';
//plugins
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  declarations: [
    AppComponent, LandingPage, LoginPage, RegisterPage, HowItWorksPage, ProfilePage, ForgotPasswordPage, ResetPasswordPage,
    SmsVerificationPage,
    NewProjectPage, PreBookSelectionPage, MyIntiriPage, CustomizeMoodboardPage, CraftsmanPortalPage, ContactDesignerPage, BookDesignerPage,
    ProjectDetailsPage, MoodboardDetailsPage, PricingPlansPage, MessengerPage, DesignerProfilePage, PaymentDetailsPage,
    DashboardPage, DesignerPage, VendorPage, BookDesignerProfilePage, ConsultationsPage,
    MyMoodboardPage,
    StylePage, MoodboardPage,
    HeaderLandingComponent, HeaderAdminComponent, HeaderComponent, FooterComponent,
    NewProjectStepComponent, StepPickerComponent,
    ProfileImgSectionComponent, ProfileInfoSectionComponent,
    LoginModalComponent, LogoutModalComponent, CreateProjectModalComponent, BookDesignerModalComponent
  ],
  entryComponents: [
    LoginModalComponent, LogoutModalComponent, CreateProjectModalComponent, BookDesignerModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    CodeInputModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
