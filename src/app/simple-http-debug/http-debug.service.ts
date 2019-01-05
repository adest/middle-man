import { Injectable } from '@angular/core';
import { createDebugApplication } from './http-debug.model';

@Injectable({
  providedIn: 'root'
})
export class HttpDebugService {

  private _application = createDebugApplication(1334);
  get debugApplication() {
    return this._application;
  }
}
