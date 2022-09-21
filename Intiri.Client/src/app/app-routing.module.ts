import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/admin-pages/dashboard/dashboard.page';
import { DesignerPage } from './pages/admin-pages/designer/designer.page';
import { VendorPage } from './pages/admin-pages/vendor/vendor.page';
import { ConsultationsPage } from './pages/admin-pages/consultations/consultations.page';
import { MyMoodboardPage } from './pages/designer-pages/my-moodboard/my-moodboard.page';
import { StylePage } from './pages/shared-guarded-pages/style/style.page';
import { BookDesignerPage } from './pages/end-user-pages/book-designer/book-designer.page';
import { ContactDesignerPage } from './pages/end-user-pages/contact-designer/contact-designer.page';
import { CraftsmanPortalPage } from './pages/end-user-pages/craftsman-portal/craftsman-portal.page';
import { CustomizeMoodboardPage } from './pages/end-user-pages/customize-moodboard/customize-moodboard.page';
import { MyIntiriPage } from './pages/end-user-pages/my-intiri/my-intiri.page';
import { NewProjectPage } from './pages/end-user-pages/new-project/new-project.page';
import { PreBookSelectionPage } from './pages/end-user-pages/pre-book-selection/pre-book-selection.page';
import { HowItWorksPage } from './pages/how-it-works/how-it-works.page';
import { LandingPage } from './pages/landing/landing.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { RegisterPage } from './pages/register/register.page';
import { MoodboardPage } from './pages/shared-guarded-pages/moodboard/moodboard.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { ResetPasswordPage } from './pages/reset-password/reset.password.page';
import { SmsVerificationPage } from './pages/sms-verification/sms-verification.page';
import { PricingPlansPage } from './pages/end-user-pages/pricing-plans/pricing-plans.page';
import { ProjectDetailsPage } from './pages/end-user-pages/project-details/project-details.page';
import { MoodboardDetailsPage } from './pages/end-user-pages/moodboard-details/moodboard-details.page';
import { MessengerPage } from './pages/end-user-pages/messenger/messenger.page';
import { DesignerProfilePage } from './pages/end-user-pages/designer-profile/designer-profile.page';
import { PaymentDetailsPage } from './pages/end-user-pages/payment-details/payment-details.page';
import { BookDesignerProfilePage } from './pages/end-user-pages/book-designer-profile/book-designer-profile.page';
import { ClientListPage } from './pages/designer-pages/internal-designer/clients/client-list/client-list.page';
import { StyleListPage } from './pages/designer-pages/internal-designer/styles/style-list/style-list.page';
import { ClientRequestPage } from './pages/designer-pages/client-request/client-request.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-intiri',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage
  },
  {
    path: 'sms-verification',
    component: SmsVerificationPage
  },
  {
    path: 'how-it-works',
    component: HowItWorksPage
  },
  {
    path: 'profile', //TODO Set up page guard (all users guard)
    component: ProfilePage,
  },
  {
    path: 'book-designer', //TODO Set up page guard (end-user guard)
    component: BookDesignerPage
  },
  {
    path: 'contact-designer', //TODO Set up page guard (end-user guard)
    component: ContactDesignerPage
  },
  {
    path: 'designer-profile', //TODO Set up page guard (end-user guard)
    component: DesignerProfilePage
  },
  {
    path: 'payment-details', //TODO Set up page guard (end-user guard)
    component: PaymentDetailsPage
  },
  {
    path: 'book-designer-profile', //TODO Set up page guard (end-user guard)
    component: BookDesignerProfilePage
  },
  {
    path: 'craftsman-portal', //TODO Set up page guard (end-user guard)
    component: CraftsmanPortalPage
  },
  {
    path: 'pricing-plans', //TODO Set up page guard (end-user guard)
    component: PricingPlansPage
  },
  {
    path: 'messenger', //TODO Set up page guard (end-user guard)
    component: MessengerPage
  },
  {
    path: 'customize-moodboard', //TODO Set up page guard (end-user guard)
    component: CustomizeMoodboardPage
  },
  {
    path: 'my-intiri', //TODO Set up page guard (end-user guard)
    component: MyIntiriPage
  },
  {
    path: 'project-details', //TODO Set up page guard (end-user guard)
    component: ProjectDetailsPage
  },
  {
    path: 'moodboard-details', //TODO Set up page guard (end-user guard)
    component: MoodboardDetailsPage
  },
  {
    path: 'new-project', //TODO Set up page guard (end-user guard)
    component: NewProjectPage
  },
  {
    path: 'pre-book-selection', //TODO Set up page guard (end-user guard)
    component: PreBookSelectionPage
  },
  {
    path: 'dashboard', //TODO Set up page guard (admin guard)
    component: DashboardPage
  },
  {
    path: 'consultations', //TODO Set up page guard (admin guard)
    component: ConsultationsPage
  },
  {
    path: 'designers', //TODO Set up page guard (admin guard)
    component: DesignerPage
  },
  {
    path: 'partners', //TODO Set up page guard (admin guard)
    component: VendorPage
  },
  {
    path: 'my-moodboard', //TODO Set up page guard (designer guard)
    component: MyMoodboardPage
  },
  {
    path: 'client-list', //TODO Set up page guard (internal designer guard)
    component: ClientListPage
  },
  {
    path: 'client-request', //TODO Set up page guard (designer guard)
    component: ClientRequestPage
  },
  {
    path: 'style-list', //TODO Set up page guard (internal designer guard)
    component: StyleListPage
  },
  {
    path: 'style', //TODO Set up page guard (shared guard)
    component: StylePage
  },
  {
    path: 'moodboard', //TODO Set up page guard (shared guard)
    component: MoodboardPage
  }
  //TODO Add routes for client pages, after discussion
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
