import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import { Callout } from "../components/Callout";
import { ImageFloat } from "../components/ImageFloat";
import { YouTube } from "../components/YouTube";
import { TwoColumns } from "../components/TwoColumns";
import { Tooltipp } from "../components/Tooltipp";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { Spotify } from "../components/Spotify";
import { TikTok } from "../components/TikTok";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Callout>" tag to our Callout component
  // `Callout` will receive all props that were passed to `<Highlight>` in MDX
  Callout,
  ImageFloat,
  YouTube,
  TwoColumns,
  Tooltipp,
  Spacer,
  Button,
  Spotify,
  TikTok,
};
