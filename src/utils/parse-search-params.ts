export default function parseSearchParams<
  T extends Record<PropertyKey, unknown>,
>(data: T) {
  return new URLSearchParams(
    Object.entries(data)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => [key, String(value)]),
  );
}
