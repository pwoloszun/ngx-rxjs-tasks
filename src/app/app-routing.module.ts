import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ExamplesComponent } from './01-rxjs-tasks/examples/examples.component';
import { RegistrationFormComponent } from './rxjs-ui-tasks/registration-form/registration-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'rxjs-examples',
    component: ExamplesComponent,
  },
  {
    path: 'rxjs-on-ui',
    component: RegistrationFormComponent,
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule',
  },
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only,
        preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
