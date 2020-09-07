import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './state/effects';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { VotersGuideComponent } from './voters-guide/voters-guide.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { appStateReducer } from './state/reducers';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareCardComponent } from './share-card/share-card.component';
import { DonateCardComponent } from './donate-card/donate-card.component';
import { PollingStationCardInfoComponent } from './polling-station-card-info/polling-station-card-info.component';
import { PollingStationSearchComponent } from './polling-station-search/polling-station-search.component';
// import { HereAddressService } from './services/here-address.service';
import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { AdminModule } from './admin/admin.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JoinTranslationsPipe } from './join-translations.pipe';
import { VotRomaniaComponent } from './vot-romania/vot.romania.component';
import { MapNoteComponent } from './map-note/map.note.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cookies-policy', component: CookiePolicyComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    GeneralInfoComponent,
    VotersGuideComponent,
    FooterComponent,
    ShareCardComponent,
    DonateCardComponent,
    PollingStationCardInfoComponent,
    PollingStationSearchComponent,
    AboutComponent,
    CookiePolicyComponent,
    JoinTranslationsPipe,
    VotRomaniaComponent,
    MapNoteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([ApplicationEffects]),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ data: appStateReducer }),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    AdminModule,
    MatAutocompleteModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    // HereAddressService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
