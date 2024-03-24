# My design system

This use an official starter Turborepo. The idea of this repo is to build a design system and provide implementation in different frameworks

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a story book (TODO)
- `@khyonn/test-design`: a packages of styling utilities (tailwind preset, sass mixins, css components)
- `@khyonn/solid-test-design`: an implementation of the styling package for [SolidJS](https://www.solidjs.com/)
- `@khyonn/react-test-design`: an implementation of the styling package for [React](https://react.dev/) (TODO)
- `@khyonn/vue-test-design`: an implementation of the styling package for [VueJS](https://vuejs.org/) (TODO)

Each js package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```bash
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```