export function convertQueryStringToParams(queryString: string): Record<string, string> {
  const cleanedQueryString = queryString.split('?')[1] || queryString;
  const params: Record<string, string> = {};

  cleanedQueryString.split('&').forEach(param => {
    const [key, value] = param.split('=');
    if (key && value !== undefined) {
      params[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    }
  });

  return params;
}
