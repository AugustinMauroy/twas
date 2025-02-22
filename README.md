# @augustinmauroy/twas

A relative time string library

[![npm version](https://img.shields.io/npm/v/@augustinmauroy/twas.svg)](https://www.npmjs.com/package/@augustinmauroy/twas)
[![JSR](https://jsr.io/badges/@augustinmauroy/twas)](https://jsr.io/@augustinmauroy/twas)

## Example

```js
import { twas } from '@augustinmauroy/twas';

const strDiff = twas(new Date('2021-01-01'), new Date('2021-01-02'));
console.log(strDiff); // '1 day ago'
```
