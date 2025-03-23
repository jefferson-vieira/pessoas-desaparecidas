const formatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'short',
  timeStyle: 'short',
});

export function formatDateTime(dateTime?: string) {
  if (!dateTime) {
    return null;
  }

  return formatter.format(new Date(dateTime));
}
