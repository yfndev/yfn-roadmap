import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import { Callout } from "../components/Callout";
import { ImageFloat } from "../components/ImageFloat";
import { Video } from "../components/Video";
import { Grid } from "../components/Grid";
import { Tooltipp } from "../components/Tooltipp";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { VideoFloat } from "../components/VideoFloat";




export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Callout>" tag to our Callout component
  // `Callout` will receive all props that were passed to `<Highlight>` in MDX
  Callout,
  ImageFloat,
  Video,
  Grid,
  Tooltipp,
  Spacer,
  Button,
  VideoFloat,
};
