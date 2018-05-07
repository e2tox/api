import { WebotApplicationSettings } from '../conf/settings';
import { WebController } from '@e2/web';
import { WebotContext } from './context';
import { middleware, NextFunction } from '@e2/web';
import { config, DynamoDB, Credentials } from 'aws-sdk';


export class WebotController extends WebController<WebotApplicationSettings> {
  dynamodb: DynamoDB.DocumentClient;

  @middleware()
  createClient(ctx: WebotContext, next: NextFunction) {
    if (!this.dynamodb) {
      // setup credential for dev only，production credential read from environment
      if (ctx.settings.ENV === 'development') {
        ctx.logger.info('Updating credentials to ' + ctx.settings.AWS_ACCESS_KEY_ID);
        config.credentials = new Credentials(ctx.settings.AWS_ACCESS_KEY_ID, ctx.settings.AWS_SECRET_ACCESS_KEY);

        ctx.logger.info('Updating region to ' + ctx.settings.AWS_DEFAULT_REGION);
        config.update({ region: ctx.settings.AWS_DEFAULT_REGION });
      }

      ctx.logger.info('Creating DynamoDB client');
      this.dynamodb = new DynamoDB.DocumentClient();
    }

    return next();
  }
}
