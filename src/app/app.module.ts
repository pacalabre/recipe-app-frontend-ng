import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './route-components/home/home.component';
import { ProfileComponent } from './route-components/profile/profile.component';
import { LoginComponent } from './route-components/login/login.component';
import { NotFoundComponent } from './route-components/not-found/not-found.component';
import { RegisterComponent } from './route-components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
