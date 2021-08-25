# Project NextJs and bootstrap 5

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Add Bootstrap

```bash

# With npm
npm i bootstrap

# With Yarn
yarn add bootstrap
```

## Add poper

````bash
# With npm
npm i @popperjs/core

# With Yarn
yarn add @popperjs/core

## import into pages/_app.js
```bash
useEffect(() => {
  if (typeof document !== "undefined") {
    require("@popperjs/core/dist/umd/popper.js");
    require("bootstrap/dist/js/bootstrap.min.js");
  }
}, []);

ex:

import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("@popperjs/core/dist/umd/popper.js");
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

````

Distribution targets
Popper is distributed in 3 different versions, in 3 different file formats.

The 3 file formats are:

esm (works with import syntax — recommended)
umd (works with <script> tags or RequireJS)
cjs (works with require() syntax)
There are two different esm builds, one for bundler consumers (e.g. webpack, Rollup, etc..), which is located under /lib, and one for browsers with native support for ES Modules, under /dist/esm. The only difference within the two, is that the browser-compatible version doesn't make use of process.env.NODE_ENV to run development checks.

The 3 versions are:

popper: includes all the modifiers (features) in one file (default);
popper-lite: includes only the minimum amount of modifiers to provide the basic functionality;
popper-base: doesn't include any modifier, you must import them separately;
Below you can find the size of each version, minified and compressed with the Brotli compression algorithm:

### fix error

if have problem try delete the .next folder at the root of your project.

### Finish
