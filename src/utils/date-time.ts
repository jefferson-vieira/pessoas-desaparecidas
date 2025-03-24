const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'short',
});

const dateTimeFormatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'short',
  timeStyle: 'short',
});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

export function formatDateTime(dateTime?: string) {
  if (!dateTime) {
    return null;
  }

  return dateTimeFormatter.format(new Date(dateTime));
}
