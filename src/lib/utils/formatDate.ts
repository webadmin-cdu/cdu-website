import { format, parseISO, formatDistanceToNow } from 'date-fns';

export function formatDate(dateString: string, formatStr: string = 'MMMM d, yyyy'): string {
  const date = parseISO(dateString);
  return format(date, formatStr);
}

export function formatRelativeDate(dateString: string): string {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
}

export function formatShortDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy');
}
