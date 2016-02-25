# campaign-mustache

> Mustache template provider for Campaign

# install

```shell
npm i campaign-mustache -S
```

# usage

using [`campaign`](https://github.com/bevacqua/campaign).

```js
var campaign = require('campaign');
var mustache = require('campaign-mustache');
var client = campaign({
  templateEngine: mustache
});
client.send(...) // as usual
```

# `mustache`

no configuration is involved.

# license

mit
