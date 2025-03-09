export type HistoryItem = {
  date: string;
  searchInput?: string;
  status?: string;
  genres?: string;
  start_date?: string;
  end_date?: string;
  order_by?: string;
  sort?: string;
};

export type DetailItem = {
  key: string;
  value: string | undefined;
  style?: React.CSSProperties;
};