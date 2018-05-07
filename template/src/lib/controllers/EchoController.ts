import { controller, method } from '@e2/web';
import { WebotController } from '../controller';
import { WebotContext } from '../context';

@controller('/api')
export class EchoController extends WebotController {
  
  /**
   * Demo api endpoint
   *
   * @param {WebotContext} ctx
   * @returns {Promise<any>}
   */
  @method('GET', '/echo')
  @method('POST', '/echo')
  async echo(ctx: WebotContext): Promise<any> {
    ctx.cookies.set('name', 'ling', { signed: true, domain: 'jsonsdk.com' });
    ctx.cookies.set('level', '14', { domain: 'jsonsdk.com' });

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
      host: ctx.req.hostname
    };
  }
}
