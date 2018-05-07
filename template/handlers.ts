import { ServerlessApplicationContext, LambdaApplication } from '@e2/web';
import { WebotApplication } from './src/lib/application';
import { WebotApplicationSettings } from './src/conf/settings';

export function server() {
  return ServerlessApplicationContext.create(LambdaApplication)
    .with(WebotApplication, WebotApplicationSettings)
    .invoke(arguments);
}
