import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleHttpDebugComponent } from '../../simple-http-debug/simple-http-debug.component';

const routes: Routes = [
  { path: 'debug', component: SimpleHttpDebugComponent },
  { path: '**', redirectTo: 'debug'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } /* <-- debugging purposes only */ )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
