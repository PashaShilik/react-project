import { HistoryItem } from "@/types/history";

export function createSearchHistoryEntry(searchParams: Record<string, string>): HistoryItem | null {
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);

  const searchHistoryEntry: HistoryItem = {
    date: formattedDate,
    searchInput: searchParams.q || undefined,
    status: searchParams.status || undefined,
    genres: searchParams.genres || undefined,
    start_date: searchParams.start_date || undefined,
    end_date: searchParams.end_date || undefined,
    order_by: searchParams.order_by || undefined,
    sort: searchParams.sort || undefined,
  };

  const filteredEntry = Object.fromEntries(
    Object.entries(searchHistoryEntry).filter(([_, value]) => value !== undefined && value !== '')
  ) as HistoryItem;

  if (Object.keys(filteredEntry).length === 1 && filteredEntry.date) {
    return null;
  }

  return filteredEntry;
}
