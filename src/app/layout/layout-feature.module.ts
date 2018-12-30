import { NgModule } from '@angular/core';
import { RootLayoutComponent } from './root-layout.component';
import { WidgetBaseModule } from '../shared/widget-base/widget-base.module';

const COMPONENTS = [
  RootLayoutComponent
];

@NgModule({
  imports: [WidgetBaseModule],
  exports: COMPONENTS,
  declarations: COMPONENTS,
})
export class LayoutFeatureModule { }
