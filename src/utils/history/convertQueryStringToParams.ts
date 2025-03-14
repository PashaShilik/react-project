export function convertQueryStringToParams(queryString: string): Record<string, string> {
  const cleanedQueryString = queryString.split('?')[1] || queryString;
  const defaultParams: Record<string, string> = {
    q: '',
    status: '',
    genres: '',
    start_date: '',
    end_date: '',
    order_by: '',
    sort: '',
  };

  cleanedQueryString.split('&').forEach(param => {
    const [key, value] = param.split('=');
    if (key && value !== undefined) {
      defaultParams[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    }
  });

  return defaultParams;
}
