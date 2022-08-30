export interface OpenApiJson {
  openapi: string;
  info: {
    title: string;
    version: string;
  };
  paths: Record<PathUrl, PathDef>;
  components: OpenApiJsonComponent;
  security?: unknown;
}

type PathUrl = string;

export interface PathDef {
  get?: PathRequestDef;
  post: PathRequestDef;
}

interface PathRequestDef {
  tags: string[];
  summary: string;
  operationId: string;
  responses: Record<number, PathRequestResponseDef>;
  parameters?: PathRequestParamDef[];
  requestBody?: RequestBodyDef;
}

interface PathRequestResponseDef {
  description: string;
  content:
    | {
        'application/json': PathRequestResponseContentDef;
      }
    | {
        'image/*': PathRequestResponseContentDef;
      };
}

interface PathRequestResponseContentDef {
  schema:
    | {}
    | {
        $ref: string;
      }
    | {
        type: 'string';
        format: 'binary';
        data_type: string;
      }
    | {
        type: 'object';
        prediction: 'string' | 'number' | 'array';
        prediction_raw: {};
      };
}

interface PathRequestParamDef {
  required: boolean;
  name: string;
  in: string;
  schema:
    | {
        title: string;
        type: 'integer';
        default: number;
      }
    | {
        title: string;
        type: 'string';
        enum?: string[];
        default: string;
      };
}

interface RequestBodyDef {
  required?: boolean;
  content: Record<RequestBodyContentType, { schema: RequestBodySchema }>;
}

interface RequestBodySchema {
  $ref?: string;
  title?: string;
  type?: string;
  default?: string;
}

type RequestBodyContentType = string;

interface OpenApiJsonComponent {
  schemas: Record<
    string,
    {
      title: string;
      required?: string[];
      type: string;
      properties: Record<
        string,
        {
          title: string;
          type: string;
          description?: string;
          default?: string | number;
          format?: 'binary';
          items?: Record<string, unknown>;
          example?: string | number;
          examples?: (string | number)[];
          _examples?: (string | number)[];
          data_type?: 'string' | 'text' | 'url' | 'integer' | 'float' | 'image' | 'audio' | 'array';
        }
      >;
    }
  >;
  securitySchemes?: unknown;
}
