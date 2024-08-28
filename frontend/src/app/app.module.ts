import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentDaysComponent } from './components/main-content-days/main-content-days.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentDaysComponent,
    SideMenuComponent,
    PopupComponent
  ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
