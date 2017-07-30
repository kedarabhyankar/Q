import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { MapviewComponent } from './mapview/mapview.component';

import { MapgenService } from './mapgen.service';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';

// 10.10.20.58

const appRoutes: Routes = [
  { path: 'mapview', component: MapviewComponent },
  { path: 'about', component: AboutComponent},
  { path: 'donate', component: DonateComponent},
  { path: '',
    redirectTo: '/mapview',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/mapview',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MapviewComponent,
    DonateComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxC6M8rZZuOA9b4mt3eEeN3Q4SViFiSXk'
    }),
    CollapseModule.forRoot(),
  ],
  providers: [ MapgenService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
