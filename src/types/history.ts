export type HistoryItem = {
  date: string;
  searchInput?: string;
  status?: string;
  genres?: string | number;
  start_date?: string;
  end_date?: string;
  order_by?: string;
  sort?: string;
};

export type DetailItem = {
  key: string;
  value: string | number | undefined;
  style?: { backgroundColor: string };
};

export type HistoryItemBlockProps = {
  item: HistoryItem;
  index: number;
  onDelete: (index: number) => void;
};

export type DetailsBlockProps = {
  details: DetailItem[];
};