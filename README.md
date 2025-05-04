# @augustinmauroy/twas

A relative time string library

[![npm version](https://img.shields.io/npm/v/@augustinmauroy/twas.svg)](https://www.npmjs.com/package/@augustinmauroy/twas)
[![JSR](https://jsr.io/badges/@augustinmauroy/twas)](https://jsr.io/@augustinmauroy/twas)

> **⚠️ WARNING ⚠️**: This library use `Intl.DurationFormat` which is not yet available in all browsers. You can check the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat#browser_compatibility) for more information.

## Example

```js
import { twas } from '@augustinmauroy/twas';

const strDiff = twas(new Date('2021-01-01'), new Date('2021-01-02'));
console.log(strDiff); // '1 day ago'
```

## Prior art

This library is inspired by [`vutran/twas`](https://github.com/vutran/twas).
