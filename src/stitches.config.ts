import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const designsystem = createStitches({
  prefix: "designsystem-",
  theme: {},
  media: {}
});

export const {
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
  createTheme
} = designsystem;

export type CSS = Stitches.CSS<typeof config>;
