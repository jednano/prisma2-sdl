# @jedmao/prisma2-sdl

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
[![GitHub Actions](https://github.com/jedmao/prisma2-sdl/workflows/master/badge.svg)](https://github.com/jedmao/prisma2-sdl/actions)
[![codecov](https://img.shields.io/codecov/c/gh/jedmao/prisma2-sdl?style=flat-square)](https://codecov.io/gh/jedmao/prisma2-sdl)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![types: TypeScript](https://img.shields.io/npm/types/typescript?style=flat-square)](https://typescriptlang.org)
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- markdownlint-disable commands-show-output -->

Parses a subset of the
[Prisma2 Schema Language (PSL)](https://github.com/prisma/specs/tree/master/schema).

## Installation

```sh
npm install @jedmao/prisma2-sdl
```

## Usage

```ts
import { parse, prettify } from '@jedmao/prisma2-sdl'
import { readFileSync } from 'fs'

const ast = parse(readFileSync('schema.prisma'))
console.log(prettify(ast))
```

## Limitations

This library only parses a subset of the
[Prisma2 Schema Language (PSL)](https://github.com/prisma/specs/tree/master/schema).

```prisma
model User {
  id     Int     @id
  name   String
  email  String
  age    Int?
  posts  Post[]
}

model Post {
  id       Int     @id
  title    String
  content  String
  author   User
}
```

## Scripts

The following [npm scripts](https://docs.npmjs.com/misc/scripts) are made
available to you in the project root. You can run each of them with
`npm run <script-name>`.

### build

Runs the [TypeScript][] compiler.

### test

Runs [AVA][] in
[watch mode](https://github.com/avajs/ava/blob/master/docs/recipes/watch-mode.md),
which attempts to run only on changed files.

### cover

Runs [AVA][] with
[coverage](https://github.com/avajs/ava/blob/master/docs/recipes/code-coverage.md),
dumping coverage results in `./coverage` and showing a text summary in the
console output.

### commit

Runs [Commitizen](http://commitizen.github.io/cz-cli/) commit wizard, ensuring
that your commit messages conform to
[Conventional Commits](https://www.conventionalcommits.org/).

### Tips

Use the [`git commit`](https://git-scm.com/docs/git-commit) command directly
with the
[`-n`, `--no-verify` option](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt--n)
to bypasses the pre-commit and commit-msg hooks.

[ava]: https://github.com/avajs/ava
[typescript]: http://www.typescriptlang.org/
