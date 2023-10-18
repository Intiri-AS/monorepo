import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { SettingsPopoverComponent } from '../../settings-popover/settings-popover.component';

@Component({
  selector: 'app-language-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss'],
})
export class ProfilePopoverComponent {
  headerType;

  constructor(
    private nav: NavController,
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    console.log(this.headerType);
  }

  showProfilePage() {
    if (this.headerType === 'partner') {
      this.nav.navigateRoot('/partner/profile');
    } else {
      this.nav.navigateRoot('/profile');
    }
    this.popoverController.dismiss();
  }

  async showSettings(e: Event) {
    // this.isSettingsSelected = true;
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: {
        headerType: this.headerType,
        onSettingsItemClick: this.onSettingsItemClick,
      },
      event: e,
      dismissOnSelect: false,
    });

    await popover.present();

    // SettingsPopoverComponent.prototype.popoverController.dismiss()

    // popover.onDidDismiss().then(() => {
    //   this.isSettingsSelected = false;
    // })
  }

  onSettingsItemClick() {
    this.popoverController.dismiss();
  }
}
