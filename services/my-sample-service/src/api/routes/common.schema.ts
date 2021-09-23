import { OpenAPIV3 } from 'openapi-core';

export const errorSchema = {
  Error: {
    type: 'object',
    required: ['code', 'message'],
    description: 'Cognite API error',
    properties: {
      code: {
        type: 'integer',
        description: 'HTTP status code',
        format: 'int32',
        example: 401,
      },
      message: {
        type: 'string',
        description: 'Error message',
        example: 'Could not authenticate.',
      },
      missing: {
        type: 'array',
        description:
          'List of lookup objects that have not matched any results.',
        items: {
          type: 'object',
          additionalProperties: true,
        },
      },
      duplicated: {
        type: 'array',
        description: 'List of objects that violate the uniqueness constraint.',
        items: {
          type: 'object',
          additionalProperties: true,
        },
      },
    },
  },
};
