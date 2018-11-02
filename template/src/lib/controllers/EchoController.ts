import { controller, method } from '@e2/web';
import { MyController } from '../controller';
import { MyContext } from '../context';

@controller('/api')
export class EchoController extends MyController {
  
  @method('GET', '/echo')
  @method('POST', '/echo')
  async echo(ctx: MyContext){
    let payload;
    if (ctx.method === 'POST') {
      payload = await ctx.req.json();
    }
    return {
      cookies: ctx.req.cookies,
      signedCookies: ctx.req.signedCookies,
      method: ctx.method,
      path: ctx.req.path,
      headers: ctx.req.headers,
      type: ctx.req.type,
      length: ctx.req.length,
      url: ctx.req.url,
      publicUrl: ctx.req.publicUrl,
      href: ctx.req.href,
      ip: ctx.req.ip,
      host: ctx.req.hostname,
      payload
    };
  }
}
