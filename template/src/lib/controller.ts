import { WebotApplicationSettings } from '../conf/settings';
import { WebController } from '@e2/web';
import { WebotContext } from './context';
import { middleware, NextFunction } from '@e2/web';

export class WebotController extends WebController<WebotApplicationSettings> {

  @middleware()
  createClient(ctx: WebotContext, next: NextFunction) {
    return next();
  }
}
