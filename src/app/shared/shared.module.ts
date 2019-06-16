import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent
  ]
})
export class SharedModule { }
