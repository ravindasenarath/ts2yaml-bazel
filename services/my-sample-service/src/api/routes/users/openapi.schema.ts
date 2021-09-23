import { OpenAPIV3 } from 'openapi-core';

import { endpoints as list } from './actions/list.schema';

export const endpoints: OpenAPIV3.Document['paths'] = {
  ...list,
};
