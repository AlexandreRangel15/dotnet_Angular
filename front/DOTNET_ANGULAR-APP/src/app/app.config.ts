import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseDirective } from 'ngx-bootstrap/collapse';
 
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'collapse-demo-animation',
  templateUrl: './animated.html',
  standalone: false
})
export class CollapseDemoAnimatedComponent {
  isCollapsed = true;
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    CollapseDirective,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
