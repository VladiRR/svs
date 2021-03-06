/**
 * Extend options
 * @param defaultOptions Default options
 * @param options Current options
 * @param fields Sub objects fields name
 */
// TODO разобраться с типом object
export function extendOptions<T = Record<string, unknown>>(defaultOptions: Partial<T>, options?: Partial<T>, fields: string[] = ['relations']): Partial<T> {
  const subObjects = {};
  if (!options) {
    options = {};
  }

  fields.forEach(field => {
    if (Array.isArray(defaultOptions[field] || options[field])) {
      subObjects[field] = [...(defaultOptions[field] || []), ...(options[field] || [])];
    } else {
      subObjects[field] = { ...(defaultOptions[field] || {}), ...(options[field] || {}) };
    }
  });
  const result = {
    ...defaultOptions,
    ...options,
    ...subObjects
  };
  for (const option of Object.keys(result)) {
    if (result[option] == null) {
      delete result[option];
    }
  }

  return result;
}
