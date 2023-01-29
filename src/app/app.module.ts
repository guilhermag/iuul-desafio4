import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageListComponent } from './views/page-list/page-list.component';
import { ConvertPageComponent } from './views/convert-page/convert-page.component';
import { AppMaterialModule } from './shared/app-material.module';
import { HistoryComponent } from './views/history/history.component';
import { DialogComponent } from './shared/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PageListComponent,
    ConvertPageComponent,
    HistoryComponent,
    DialogComponent,
  ],
  imports: [
    AppRoutingModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
