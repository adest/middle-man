import { NgModule } from '@angular/core';
import { WidgetBaseModule } from '../shared/widget-base/widget-base.module';
import { SimpleHttpDebugComponent } from './simple-http-debug.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    WidgetBaseModule,
    FormsModule
  ],
  declarations: [ SimpleHttpDebugComponent ],
})
export class SimpleHttpDebugFeatureModule { }
