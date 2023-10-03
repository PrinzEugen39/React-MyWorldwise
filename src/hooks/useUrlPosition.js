import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();

  const lat = searchParams.get("latitude");
  const lng = searchParams.get("longitude");

  return [lat, lng];
}
