export default function fallbackInfo(
  info?: string | number | null,
  fallback = 'Desconhecido',
) {
  if (info) {
    return info;
  }

  return <span className="italic">{fallback}</span>;
}
