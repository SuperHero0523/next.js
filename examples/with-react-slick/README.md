[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-react-slick)

# With react-slick example

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-react-slick with-react-slick-app
# or
yarn create next-app --example with-react-slick with-react-slick-app
```

### Download manually

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-react-slick
cd with-react-slick
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Notice that `yarn toolbox` (or `npm run toolbox`) should be rerun every time the `"reactToolbox"` configuration in `package.json` is changed, in order to update `static/theme.js` and `static/theme.css`. The `"reactToolbox"` configuration includes styling, and the list of react-slick components to include.

## The idea behind the example

This example shows the most basic way to use [react-slick](https://github.com/akiran/react-slick) with NextJs.
