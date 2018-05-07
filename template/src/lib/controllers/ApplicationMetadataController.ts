import { controller, method } from '@e2/web';
import { WebotContext } from '../context';
import { ApplicationMetadata } from '../../shared/ApplicationMetadata';

@controller('/api')
export class ApplicationMetadataController {
  /**
   * Get metadata
   *
   * @param {WebotContext} ctx
   * @returns {Promise<ApplicationMetadata>}
   */
  @method('GET', '/metadata')
  async metadata(ctx: WebotContext): Promise<ApplicationMetadata> {
    return {
      version: String(ctx.settings.VERSION)
    };
  }

  @method('GET', '/version')
  async version(ctx: WebotContext) {
    return ctx.settings.VERSION;
  }
}
