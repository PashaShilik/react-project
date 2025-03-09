import { HistoryItem } from '@/types/interfaces/HistoryData';

export const getDetails = (item: HistoryItem) => {
  return [
    { key: 'Search Input', value: item.searchInput },
    { key: 'Status', value: item.status },
    { key: 'Genres', value: item.genres, style: { backgroundColor: '#FFB83527' } },
    { key: 'From', value: item.start_date, style: { backgroundColor: '#18940F24' } },
    { key: 'To', value: item.end_date, style: { backgroundColor: '#C125252B' } },
    { key: 'Order', value: item.order_by },
    { key: 'Sort', value: item.sort },
  ].filter((detail) => !!detail.value);
};
