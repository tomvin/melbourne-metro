import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { PanelComponent } from './components/panel/panel.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TabsComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent,
    PrimaryButtonComponent
  ]
})
export class SharedModule { }
