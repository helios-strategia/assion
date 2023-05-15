import { useCallback, useEffect, useState } from "react";
import { useWindow } from "./useWindow";

export enum mediaQueryType {
  MORE = "MORE",
  LESS = "LESS",
}

export const useMediaQuery = (
  type: mediaQueryType = mediaQueryType.LESS,
  queryWidth: number = 1
) => {
  const { width } = useWindow();

  const media = useCallback(() => {
    if (type === mediaQueryType.LESS) {
      return queryWidth >= width;
    }
    if (type === mediaQueryType.MORE) {
      return queryWidth <= width;
    } else {
      return null;
    }
  }, [width, queryWidth, type]);

  const [res, setRes] = useState<boolean | null>(null);
  useEffect(() => {
    setRes(media());
  }, []);

  useEffect(() => {
    setRes(media());
  }, [media]);
  return res;
};
