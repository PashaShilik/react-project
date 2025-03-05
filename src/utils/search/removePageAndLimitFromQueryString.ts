
export function removePageAndLimitFromQueryString(queryString: string): string {
    const params = new URLSearchParams(queryString);
    if(params.has('page')) params.delete('page');
    if(params.has('limit')) params.delete('limit');
    return params.toString();
}