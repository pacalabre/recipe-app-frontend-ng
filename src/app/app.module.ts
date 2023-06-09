import { isDevMode, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './route-components/home/home.component';
import { ProfileComponent } from './route-components/profile/profile.component';
import { LoginComponent } from './route-components/login/login.component';
import { NotFoundComponent } from './route-components/not-found/not-found.component';
import { RegisterComponent } from './route-components/register/register.component';
import ButtonComponent from '../stories/components/atoms/button/button.component';
import HeaderComponent from '../stories/components/organisms/header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        appState: reducers,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
