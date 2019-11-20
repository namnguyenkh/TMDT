import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbMenuModule,
  NbSidebarModule,
  NbWindowModule,
  NbThemeModule,
  NbToastrModule,
  NbToastrService
} from '@nebular/theme';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ShellModule } from './modules/shell/shell.module';
import { ThemeModule } from './modules/shell/@theme/theme.module';
import { CoreModule } from './modules/core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from './services/translation.service';
import { TOASTR_CONFIG } from './helpers/constants.helper';
import { NotificationService } from './services/notification.service';
import { CommonService } from './services/common.service';
import {MegaMenuModule} from 'primeng/megamenu';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
export function createTranslateLoader(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    ShellModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    BrowserAnimationsModule,

    NbThemeModule.forRoot(),
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    MegaMenuModule,

    NbToastrModule.forRoot(TOASTR_CONFIG),

    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG
    }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: NotificationService, useClass: NotificationService },
    CommonService,
    CookieService,
    TranslationService,
    NbToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
