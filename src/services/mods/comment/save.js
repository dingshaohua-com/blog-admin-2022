/**
 * @desc 新增评论
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.JsonResult();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/comment', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
