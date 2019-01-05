import { Observer } from 'rxjs';
import { IncomingMessage } from 'http';
import { Middleware } from 'koa';

export const requestObserver = (observer: Observer<IncomingMessage>): Middleware => async (ctx, next) => {
  observer.next(ctx.req);
  await next();
};
