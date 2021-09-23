import { OpenAPIV3 } from 'openapi-core';

const User: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: ['created', 'updated', 'deleted'],
    },
  },
  additionalProperties: false,
};

export const schemas: OpenAPIV3.ComponentsObject['schemas'] = {
  User,
  CommentListBody: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        properties: {
          target: { $ref: '#/components/schemas/User' },
        },
      },
      scope: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'number',
      },
    },
    required: ['filter'],
    additionalProperties: false,
  },
  ErrorModel: {
    type: 'object',
    properties: {
      app: {
        type: 'string',
      },
    },
  },
};
