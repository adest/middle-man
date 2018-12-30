import { NgModule } from '@angular/core';
import { WidgetBaseModule } from '../shared/widget-base/widget-base.module';
import { SimpleHttpDebugComponent } from './simple-http-debug.component';

@NgModule({
  imports: [ WidgetBaseModule ],
  declarations: [ SimpleHttpDebugComponent ],
})
export class SimpleHttpDebugFeatureModule { }
