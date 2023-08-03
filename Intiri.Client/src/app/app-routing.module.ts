import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/admin-pages/dashboard/dashboard.page';
import { DesignerPage } from './pages/admin-pages/designer/designer.page';
import { VendorPage } from './pages/admin-pages/vendor/vendor.page';
import { ConsultationsPage } from './pages/admin-pages/consultations/consultations.page';
import { MyMoodboardPage } from './pages/designer-pages/my-moodboard/my-moodboard.page';
import { StylePage } from './pages/admin-pages/style/style.page';
import { BookDesignerPage } from './pages/end-user-pages/book-designer/book-designer.page';
import { InspirationsPage } from './pages/end-user-pages/inspirations/inspirations.page';
import { CustomizeMoodboardPage } from './pages/end-user-pages/customize-moodboard/customize-moodboard.page';
import { MyIntiriPage } from './pages/end-user-pages/my-intiri/my-intiri.page';
import { NewProjectPage } from './pages/end-user-pages/new-project/new-project.page';
import { PreBookSelectionPage } from './pages/end-user-pages/pre-book-selection/pre-book-selection.page';
import { HowItWorksPage } from './pages/how-it-works/how-it-works.page';
import { LandingPage } from './pages/landing/landing.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { RegisterPage } from './pages/register/register.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { ResetPasswordPage } from './pages/reset-password/reset.password.page';
import { SmsVerificationPage } from './pages/sms-verification/sms-verification.page';
import { PricingPlansPage } from './pages/end-user-pages/pricing-plans/pricing-plans.page';
import { ProjectDetailsPage } from './pages/end-user-pages/project-details/project-details.page';
import { MoodboardDetailsPage } from './pages/end-user-pages/moodboard-details/moodboard-details.page';
import { MessengerPage } from './pages/end-user-pages/messenger/messenger.page';
import { DesignerProfilePage } from './pages/end-user-pages/designer-profile/designer-profile.page';
import { BookDesignerProfilePage } from './pages/end-user-pages/book-designer-profile/book-designer-profile.page';
import { ClientListPage } from './pages/designer-pages/internal-designer/clients/client-list/client-list.page';
import { ClientRequestPage } from './pages/designer-pages/client-request/client-request.page';
import { MoodboardsPage } from './pages/admin-pages/moodboards/moodboards.page';
import { ClientPage } from './pages/admin-pages/client/client.page';
import { ProcessingPage } from './pages/processing/processing.page';
import { AddMoodboardPage } from './pages/admin-pages/add-moodboard/add-moodboard.page';
import { PartnerProductsPage } from './pages/partner-pages/partner-products/partner-products.page';
import { PartnerProfilePage } from './pages/partner-pages/partner-profile/partner-profile.page';
import { AddPartnerPage } from './pages/admin-pages/add-partner/add-partner.page';
import { ProjectService } from './services/project.service';
import { MoodboardService } from './services/moodboard.service';
import { EnduserGuard } from './guards/enduser.guard';
import { AdminGuard } from './guards/admin.guard';
import { DesignerGuard } from './guards/designer.guard';
import { SharedGuard } from './guards/shared.guard';
import { PartnerGuard } from './guards/partner.guard';
import { AdminDesignerGuard } from './guards/admin-designer.guard';
import { AdminInternalDesignerGuard } from './guards/admin-internal-designer.guard';
import { PartnerService } from './services/partner.service';
import { DesignerService } from './services/designer.service';
import { ProjectsPage } from './pages/end-user-pages/projects/projects.page';
import { BlockDesignerMoodboardGuard } from './guards/ blockDesignerMoodboard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
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
    path: 'processing',
    component: ProcessingPage
  },
  {
    path: 'profile', //TODO Set up page guard (all users guard)
    component: ProfilePage,
    canActivate: [SharedGuard]
  },
  {
    path: 'book-designer', //TODO Set up page guard (end-user guard)
    component: BookDesignerPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'designer-profile/:id', //TODO Set up page guard (end-user guard)
    resolve: {designer: DesignerService},
    component: DesignerProfilePage,
    canActivate: [EnduserGuard]
  },
  // {
  //   path: 'payment-details', //TODO Set up page guard (end-user guard)
  //   component: PaymentDetailsPage
  // },
  {
    path: 'book-designer-profile', //TODO Set up page guard (end-user guard)
    component: BookDesignerProfilePage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'my-inspirations', //TODO Set up page guard (end-user guard)
    component: InspirationsPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'pricing-plans', //TODO Set up page guard (end-user guard)
    component: PricingPlansPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'messenger', //TODO Set up page guard (all user guard)
    component: MessengerPage,
    canActivate: [SharedGuard]
  },
  {
    path: 'customize-moodboard', //TODO Set up page guard (end-user guard)
    component: CustomizeMoodboardPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'my-intiri', //TODO Set up page guard (end-user guard)
    component: MyIntiriPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'project-details', //TODO Set up page guard (end-user guard)
    component: ProjectDetailsPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'projects', //TODO Set up page guard (end-user guard)
    component: ProjectsPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'moodboard-details/:id', //TODO Set up page guard (end-user guard)
    component: MoodboardDetailsPage,
    resolve: {moodboard: MoodboardService},
    canActivate: [SharedGuard]
  },
  {
    path: 'contact-designer/:id', //TODO Set up page guard (end-user guard)
    component: BookDesignerPage,
    resolve: {moodboard: MoodboardService},
    canActivate: [EnduserGuard]
  },
  {
    path: 'project-details/:projectId/moodboard-details/:id',
    component: MoodboardDetailsPage,
    resolve: {moodboard: MoodboardService},
    canActivate: [EnduserGuard]
  },
  {
    path: 'edit-moodboard/:id/project/:projectId',
    component: CustomizeMoodboardPage,
    resolve: {moodboard: MoodboardService},
    canActivate: [EnduserGuard]
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailsPage,
    resolve: {project: ProjectService},
    canActivate: [EnduserGuard]
  },
  {
    path: 'partner-profile/:id',
    component: AddPartnerPage,
    resolve: {partner: PartnerService},
    canActivate: [AdminGuard]
  },
  {
    path: 'new-project',
    component: NewProjectPage
  },
  {
    path: 'pre-book-selection', //TODO Set up page guard (end-user guard)
    component: PreBookSelectionPage,
    canActivate: [EnduserGuard]
  },
  {
    path: 'dashboard', //TODO Set up page guard (admin guard)
    component: DashboardPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'consultations', //TODO Set up page guard (admin guard)
    component: ConsultationsPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'designers', //TODO Set up page guard (admin guard)
    component: DesignerPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'partners', //TODO Set up page guard (admin guard)
    component: VendorPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'moodboards', //TODO Set up page guard (admin guard)
    component: MoodboardsPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'clients', //TODO Set up page guard (admin guard)
    component: ClientPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'add-moodboard',
    component: AddMoodboardPage,
    canActivate: [AdminInternalDesignerGuard]
  },
  {
    path: 'create-offer/:paymentId',
    component: AddMoodboardPage,
    canActivate: [AdminDesignerGuard]
  },
  {
    path: 'style', //TODO Set up page guard (shared guard)
    component: StylePage,
    canActivate: [AdminGuard]
  },
  {
    path: 'my-moodboard',
    component: MyMoodboardPage,
    canActivate: [BlockDesignerMoodboardGuard]
  },
  {
    path: 'client-list', //TODO Set up page guard (internal designer guard)
    component: ClientListPage,
    canActivate: [DesignerGuard]
  },
  {
    path: 'client-request/:paymentId',
    component: ClientRequestPage,
    canActivate: [DesignerGuard]
  },
  // {
  //   path: 'style-list', //TODO Set up page guard (internal designer guard)
  //   component: StyleListPage
  // },
  {
    path: 'partner', //TODO Set up page guard (shared guard)
    component: PartnerProductsPage,
    canActivate: [PartnerGuard]
  },
  {
    path: 'partner/profile', //TODO Set up page guard (shared guard)
    component: PartnerProfilePage,
    canActivate: [PartnerGuard]
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
