import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../../../../../services/layout.service';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  appName = environment.appName;
  userPictureOnly: Boolean = false;
  user: any;
  name = 'Nam Nguyen';
  currentTheme = 'Light';
  base64image = '../../../../../../assets/images/jack.png';
  userMenu = [{ title: 'menu.profile', data: 'profile' }, { title: 'menu.logout', data: 'logout' }];
  themes = [
    {
      value: 'default',
      name: 'Light'
    },
    {
      value: 'dark',
      name: 'Dark'
    },
    {
      value: 'cosmic',
      name: 'Cosmic'
    }
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private router: Router,
    private readonly authenticationService: AuthenticationService,
    private readonly translate: TranslateService,
  ) {}
  ngOnInit() {
    // this.userMenu = this.translateMenu(this.userMenu);
    this.currentTheme = this.themeService.currentTheme;

    this.loadUser();
    this.subscribeToIsAuthenticated();

    this.menuService.onItemClick().subscribe(event => {
      this.onItemSelection(event.item);
    });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe((isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl));

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe(themeName => (this.currentTheme = themeName));

  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  /**
   * Call function defened on  menuContext
   * @param item
   */
  onItemSelection(item) {
    switch (item.data) {
      case 'logout':
        this.onLogout();
        break;

      case 'profile':
        break;

      default:
        break;
    }
  }
  /**
   * Toggles sidebar state
   */
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  /**
   * Subscribe Authentication
   */
  private subscribeToIsAuthenticated() {
    this.authenticationService.authChanged$.subscribe(() => this.loadUser());
  }

  /**
   *  Load User
   */
  private loadUser() {
    const credentials = this.authenticationService.credentials;
    this.user = credentials;
    if (this.user && !this.user.picture) {
      this.user.picture = 'assets/images/default-avatar.png';
    }
  }

  /**
   * Navigation home page
   */
  navigateHome() {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Logout account
   */
  onLogout() {
    this.authenticationService.logout().subscribe(() => {
      location.href = '/signout';
    });
  }
  // /**
  //  *
  //  * @param menuItems
  //  */
  // translateMenu(menuItems) {
  //   const translatedMenuItems = [];
  //   menuItems.forEach(t => {
  //     const translatedMenuItem = { ...t };
  //     translatedMenuItems.push(translatedMenuItem);
  //     translatedMenuItem.title = this.translate.instant(t.title);
  //   });
  //   return translatedMenuItems;
  // }

}
