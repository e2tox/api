import { WebServerContext, HttpListener } from '@e2/web';
import { WebotApplication } from '../lib/application';
import { WebotApplicationSettings } from '../conf/settings';
import { KoaServer } from '@e2/web-adapter-koa';

// Create a Koa server
//    using WebotApplication and WebotApplicationSettings
//    listen with HttpListener

WebServerContext.create(KoaServer)
  .with(WebotApplication, WebotApplicationSettings)
  .listen(HttpListener);



