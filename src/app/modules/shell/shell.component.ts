import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MENU_ITEMS } from './menu-items-navigation';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  appName = environment.appName;
  envName = environment.envName;
  version = environment.versions.app;
  menu = MENU_ITEMS;

  constructor(private readonly translate: TranslateService) {}
  ngOnInit() {
    this.menu = this.translateMenu(MENU_ITEMS);
  }
  /**
   *
   * @param menu
   */
  translateMenu(menuItems) {
    const translatedMenuItems = [];
    menuItems.forEach(t => {
      const translatedMenuItem = { ...t };
      translatedMenuItems.push(translatedMenuItem);
      this.translate.get(t.title).subscribe(title => {
        translatedMenuItem.title = title;
      });
      if (t.children) {
        translatedMenuItem.children = [];
        t.children.forEach(u => {
          const translatedChild = { ...u };
          translatedMenuItem.children.push(translatedChild);
          this.translate.get(u.title).subscribe(title => {
            translatedChild.title = title;
          });
        });
      }
    });
    return translatedMenuItems;
  }
}
