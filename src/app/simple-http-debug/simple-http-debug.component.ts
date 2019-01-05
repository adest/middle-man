import { Component } from '@angular/core';
import { HttpDebugService } from './http-debug.service';

@Component({
  selector: 'app-simple-http-debug',
  templateUrl: './simple-http-debug.component.html',
  styleUrls: ['./simple-http-debug.component.scss']
})
export class SimpleHttpDebugComponent {

  constructor(private _httpDebugService: HttpDebugService) {}

  application = this._httpDebugService.debugApplication;

  onStartStopButton() {
    if (this.application.isRunning) {
      this.application.stop();
    } else {
      this.application.start();
    }
  }

  asEntries(obj: any): {key: string, value: any}[] {
    return Object.getOwnPropertyNames(obj).map(key => ({key: key, value: obj[key]}));
  }
}
