import { OpenAPIV3 } from 'openapi-core';

export const endpoints: OpenAPIV3.Document['paths'] = {
  '/users/list': {
    get: {
      tags: ['Users'],
      summary: 'User list',
      parameters: [],
      responses: {
        '200': {
          description: 'Returns an array of comments',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/CommentResponse',
                },
              },
            },
          },
        },
      },
    },
  },
};
