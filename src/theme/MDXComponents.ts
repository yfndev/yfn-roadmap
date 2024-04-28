import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Admonition from "@theme/Admonition";
import { ImageFloat } from "../components/ImageFloat";
import { YouTube } from "../components/YouTube";
import { TwoColumns } from "../components/TwoColumns";

import { Button } from "../components/Button";
import { Spotify } from "../components/Spotify";
import { TikTok } from "../components/TikTok";
import { Tooltipp } from "../components/Tooltipp";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Admonition>" tag to our Callout component
  // `Callout` will receive all props that were passed to `<Highlight>` in MDX
  ImageFloat,
  YouTube,
  TwoColumns,
Tooltipp,
  Button,
  Spotify,
  TikTok,
  Admonition,
  
};
