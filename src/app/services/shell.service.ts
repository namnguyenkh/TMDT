import { ShellComponent } from '../modules/shell/shell.component';
import { Routes, Route } from '@angular/router';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data: { reuse: true }
    };
  }
}
