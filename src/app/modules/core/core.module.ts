import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { RouteReusableStrategy } from './route-reusable-strategy';
import { HttpCacheService } from '../../services/http-cache.service';
import { HttpInterceptorProviders } from '../../interceptors/http-interceptor.providers';
import { CacheInterceptor } from '../../interceptors/cache.interceptor';
import { ApiPrefixInterceptor } from '../../interceptors/api-prefix.interceptor';
import { ErrorInterceptor } from '../../interceptors/error.interceptor';

@NgModule({
  imports: [HttpClientModule, RouterModule],
  exports: [],
  providers: [
    AuthenticationService,
    HttpCacheService,
    ErrorInterceptor,
    ApiPrefixInterceptor,
    CacheInterceptor,
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    },
    HttpInterceptorProviders
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parrentModule: CoreModule) {
    if (parrentModule) {
      throw new Error(`${parrentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
