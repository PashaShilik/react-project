export type ParamsProps = {
    page?: number
    limit?: number
    q?: string
    genres?: number
    status?: string
    start_date?: string
    end_date?: string
    order_by?: string
    sort?: string
}

export type animeGenreType = {
    id: number
    type: string
    name: string
    title: string
}

export type animeStatusType = {
    id: number
    title: string
}

export type animeYearType = {
    id: number
    title: string
    startValue: string
    endValue: string
}

export type animeOrderByType = {
    id: number
    title: string
    value: string
}

export enum SortOrder {
    UP = "desc",
    DOWN = "asc",
}