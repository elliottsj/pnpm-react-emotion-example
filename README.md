# pnpm-react-emotion-example
Example of a problem using pnpm with TypeScript and react-emotion.

### Usage

```shell
# Install pnpm and use it to install dependencies:
npm install -g pnpm
pnpm install

# Compile index.ts with TypeScript:
pnpm test
```

Output should look like this:

```
> pnpm-react-emotion-example@1.0.0 test /Users/spencerelliott/Dev/elliottsj/pnpm-react-emotion-example
> tsc index.ts

node_modules/.registry.npmjs.org/create-emotion-styled/9.2.8/node_modules/create-emotion-styled/types/common.d.ts:4:72 - error TS2307: Cannot find module 'create-emotion'.

4 import { Emotion, Interpolation as BaseInterpolation, CSSObject } from 'create-emotion';
                                                                         ~~~~~~~~~~~~~~~~
```
