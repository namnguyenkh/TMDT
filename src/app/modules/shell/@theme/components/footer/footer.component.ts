import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor() {}
  appName = environment.appName;
  envName = environment.envName;
  version = environment.versions.app;
  year = new Date().getFullYear();
}
