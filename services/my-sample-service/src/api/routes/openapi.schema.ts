import { OpenAPIV3 } from 'openapi-core';

import { endpoints as userEndpoints } from './users/openapi.schema';
import { schemas as commentSchemas } from './users/models.schema';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Comment Service API',
    description:
      'This is a generated openapi spec for the Cognite Comment Service',
    version: '0.0.0',
  },
  security: [{ bearerToken: [] }] as unknown,
  servers: [
    {
      description: 'localhost',
      url: 'http://localhost:8300',
      variables: {},
    },
    {
      description: 'Discover API',
      url: 'https://comment-service{environment}{cluster}',
      variables: {
        environment: {
          enum: ['.', '.staging.'],
          default: '.staging.',
        },
        cluster: {
          enum: [
            'cognite.ai',
            'bluefield.cognite.ai',
            'greenfield.cognite.ai',
            'bp-northeurope.cognite.ai',
            'azure-dev.cognite.ai',
          ],
          default: 'bluefield.cognite.ai',
        },
      },
    },
  ] as OpenAPIV3.ServerObject[],
  paths: {
    '/_status': {
      get: {
        tags: ['Default'],
        summary: 'Returns status of the service',
        description: '',
        responses: {
          '200': {
            description: 'Ok message',
            content: {
              'application/json': {
                schema: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
    ...userEndpoints,
  } as OpenAPIV3.Document['paths'],
  components: {
    responses: {
      default: {
        description: 'Unexpected error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorModel',
            },
          },
        },
      },
    },
    schemas: {
      ...commentSchemas,
    },
  },
};
