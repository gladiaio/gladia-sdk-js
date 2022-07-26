import { capitalizeFirst, kebabToPascalCase } from './utils';
export function getInputModelType(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${taskName}Inputs`;
}
