# tagless

remove html tags from a string

## Install

```bash

npm install tagless

```

## Usage

```js

const tagless = require('tagless')

// or

const { removeAll, removeByTag } = require('tagless')

```

```js

import tagless from 'tagless'

// or

import { removeAll, removeByTag } from 'tagless'

```

### removeAll

parse all tags from a string

parms: `(string)`

```js

tagless.removeAll('<p>hello</p>') // hello

```

### removeByTag 

parse a specific tag from a string

parms: `(string, tag)`

```js

tagless.removeByTag('<p>hello</p>', 'p') // hello

```

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please open an issue or submit a pull request.

### Author

**Mahmoud Ibrahiam**



