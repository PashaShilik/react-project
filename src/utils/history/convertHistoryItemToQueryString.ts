import { HistoryItem } from '@/types/history';

export function convertHistoryItemToQueryString(item: HistoryItem) {
  const { searchInput, status, genres, start_date, end_date, order_by, sort } = item;

  return Object.entries({
    q: searchInput,
    status,
    genres,
    start_date,
    end_date,
    order_by,
    sort,
  })
    .reduce((acc, [key, value]) => {
      if (value) acc.push(`${key}=${value}`);
      return acc;
    }, [] as string[])
    .join('&');
}
