import { MyApplicationSettings } from '../conf/settings';
import { WebController } from '@e2/web';
import { MyContext } from './context';
import { middleware, NextFunction } from '@e2/web';

export class WebotController extends WebController<MyApplicationSettings> {

  @middleware()
  createClient(ctx: MyContext, next: NextFunction) {
    return next();
  }
}
