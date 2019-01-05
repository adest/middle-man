import { IncomingMessage, Server } from 'http';
import { Observable, Subject } from 'rxjs';
import { tap, scan } from 'rxjs/operators';
import * as Koa from 'koa';
import { requestObserver } from '../shared/middleware-http/request-debug-request';
import { respondHttpOk } from '../shared/middleware-http/response-ok';

export interface Application {
  port: number;
  isRunning: boolean;
  requests$: Observable<IncomingMessage[]>;
  start(): void;
  stop(): void;
}

class DebugApplication implements Application {

  constructor(public port: number) {}

  isRunning = false;

  private _subject$ = new Subject<IncomingMessage>();
  requests$: Observable<IncomingMessage[]> = this._subject$.pipe(
    scan(arrayReducer, [] as IncomingMessage[])
  );

  private _app = new Koa()
    .use(requestObserver(this._subject$))
    .use(respondHttpOk);
  private _server: Server;

  start(): void {
    this._server = this._app
        .listen(this.port);
    this.isRunning = true;
  }
  stop(): void {
    this._server.close();
    this.isRunning = false;
  }


}

export const createDebugApplication = (port: number): Application => new DebugApplication(port);

function arrayReducer(acc: IncomingMessage[], msg: IncomingMessage): IncomingMessage[] {
  acc.push(msg);
  return acc;
}
