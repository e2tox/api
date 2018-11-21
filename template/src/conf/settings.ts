import { WebApplicationSettings, conf } from '@e2/web';

export class MyApplicationSettings extends WebApplicationSettings {
  @conf()
  AWS_ACCESS_KEY_ID: string;

  @conf()
  AWS_SECRET_ACCESS_KEY: string;

  @conf()
  AWS_DEFAULT_REGION: string;
}
