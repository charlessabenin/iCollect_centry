import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { IonicImageLoader } from 'ionic-image-loader';
import { EditContactPageRoutingModule } from './edit-contact-routing.module';

import { EditContactPage } from './edit-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    IonicImageLoader,
    EditContactPageRoutingModule
  ],
  declarations: [EditContactPage]
})
export class EditContactPageModule {}
