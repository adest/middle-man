import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { LayoutFeatureModule } from './layout/layout-feature.module';
import { SimpleHttpDebugFeatureModule } from './simple-http-debug/simple-http-debug-feature.module';

@Component({
  selector: 'app-root',
  template: '<app-root-layout></app-root-layout>'
})
export class AppComponent {}

@NgModule({
  imports: [
    AppRoutingModule,
    LayoutFeatureModule,
    SimpleHttpDebugFeatureModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
