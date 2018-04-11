import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './api/api.module';

import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { RxjsTasksModule } from './01-rxjs-tasks/rxjs-tasks.module';
import { RxjsUiTasksModule } from './rxjs-ui-tasks/rxjs-ui-tasks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    // core
    CoreModule,
    AppRoutingModule,
    ApiModule,
    // features
    DashboardModule,
    RxjsTasksModule,
    RxjsUiTasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
