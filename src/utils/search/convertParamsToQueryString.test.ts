import {convertParamsToQueryString} from "@/utils/search/convertParamsToQueryString";

test('should convert object with multiple parameters to query string', () => {
    const params = {page: 5, q: '2313', limit: 10};
    const expected = "page=5&q=2313&limit=10";
    expect(convertParamsToQueryString(params)).toBe(expected);
})

test('should convert empty object to empty string', () => {
    const params = {};
    const expected = "";
    expect(convertParamsToQueryString(params)).toBe(expected);
})

test('should filter parameters with falsy values', () => {
    const params = {page: 1, q: '', limit: 1, genres: undefined, start_date: undefined};
    const expected = "page=1&limit=1";
    expect(convertParamsToQueryString(params)).toBe(expected);
})

test('should handle parameters with special characters', () => {
    const params = {q: 'Sasaki & Miyano+Naruto.'};
    const expected = "q=Sasaki & Miyano+Naruto.";
    expect(convertParamsToQueryString(params)).toBe(expected);
})