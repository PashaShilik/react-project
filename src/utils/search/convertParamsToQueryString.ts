import {ParamsProps} from "@/types/search";

export function convertParamsToQueryString(params: ParamsProps) {
    return [...Object.entries(params)]
        .filter(el => el[1])
        .map(el => `${el[0]}=${el[1]}`).join('&');
}