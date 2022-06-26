import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('ng-app/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          outlet: 'navbar',
          loadChildren: () =>
            import('ng-navbar/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          outlet: 'react',
          component: WrapperComponent,
          data: { importName: 'react-remote', elementName: 'child-react-element'
        }},
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
