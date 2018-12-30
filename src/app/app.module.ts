import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './shared/app-routing.module';
import { LayoutFeatureModule } from './layout/layout-feature.module';

@Component({
  selector: 'app-root',
  template: '<app-root-layout></app-root-layout>'
})
export class AppComponent {}

@NgModule({
  imports: [
    AppRoutingModule,
    LayoutFeatureModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
