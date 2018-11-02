import { ServerlessApplicationContext, LambdaApplication } from '@e2/web';
import { MyApplication } from './src/lib/application';
import { MyApplicationSettings } from './src/conf/settings';

export function server() {
  return ServerlessApplicationContext.create(LambdaApplication)
    .with(MyApplication, MyApplicationSettings)
    .invoke(arguments);
}
