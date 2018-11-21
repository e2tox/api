import { MyApplicationSettings } from '../conf/settings';
import { WebApplication } from '@e2/web';
import * as Controllers from './controllers';

export class MyApplication extends WebApplication<MyApplicationSettings> {
  public onInitApplication() {
    if (this.settings.ENV !== 'production') {
      this.warn('+=============================================================+');
      this.warn('|                                                             |');
      this.warn('|     Please set environment variable NODE_ENV=production     |');
      this.warn('|                                                             |');
      this.warn('+=============================================================+');
    }
    this.addControllers(Controllers);
  }
}
