import React from 'react';
import { Callout } from "../components/Callout";
import { ImageFloat } from "../components/ImageFloat";

import MDXComponents from '@theme-original/MDXComponents';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Callout>" tag to our Callout component
    // `Callout` will receive all props that were passed to `<Highlight>` in MDX
    Callout,
    ImageFloat,
};