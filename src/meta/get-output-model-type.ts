import { EndpointDef } from './endpoint-defs-type';
import { capitalizeFirst, kebabToPascalCase } from './utils';

export function getOutputModelType(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${taskName}Outputs`;
}
