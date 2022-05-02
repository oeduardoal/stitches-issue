import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const designsystem = createStitches({
  prefix: "designsystem-",
  theme: {},
  media: {},
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
  },
});

export const {
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
  createTheme,
} = designsystem;

export type CSS = Stitches.CSS<typeof config>;
export type ComponentCSSProp = { css?: CSS; as?: React.ElementType };
