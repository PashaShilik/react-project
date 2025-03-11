import { HistoryItem } from '@/types/history';

export function convertHistoryItemToQueryString(item: HistoryItem) {
  const { searchInput, status, genres, start_date, end_date, order_by, sort } = item;
  const params = {
    q: searchInput,
    status,
    genres,
    start_date,
    end_date,
    order_by,
    sort,
  };

  return Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
