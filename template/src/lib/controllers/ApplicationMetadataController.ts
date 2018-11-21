import { controller, method } from '@e2/web';
import { MyContext } from '../context';
import { ApplicationMetadata } from '../../shared/ApplicationMetadata';

@controller('/api')
export class ApplicationMetadataController {
  /**
   * Get metadata
   *
   * @param {MyContext} ctx
   * @returns {Promise<ApplicationMetadata>}
   */
  @method('GET', '/metadata')
  async metadata(ctx: MyContext): Promise<ApplicationMetadata> {
    return {
      version: String(ctx.settings.VERSION)
    };
  }

  @method('GET', '/version')
  async version(ctx: MyContext) {
    return ctx.settings.VERSION;
  }
}
