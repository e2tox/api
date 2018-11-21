import { WebServerContext, HttpListener } from '@e2/web';
import { KoaServer } from '@e2/web-adapter-koa';
import { MyApplication } from '../lib/application';
import { MyApplicationSettings } from '../conf/settings';

WebServerContext.create(KoaServer)
  .with(MyApplication, MyApplicationSettings)
  .listen(HttpListener);
