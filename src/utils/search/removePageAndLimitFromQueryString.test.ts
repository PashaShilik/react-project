import {removePageAndLimitFromQueryString} from "@/utils/search/removePageAndLimitFromQueryString";

test('should handle empty string', () => {
    const params = "";
    const expected = "";
    expect(removePageAndLimitFromQueryString(params)).toBe(expected);
})

test('should remove page and limit from query string', () => {
    const params = "page=5&limit=10&genres=1&score=10";
    const expected = "genres=1&score=10";
    expect(removePageAndLimitFromQueryString(params)).toBe(expected);
})