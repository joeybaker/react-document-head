# react-document-head [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Build Status][travis-image]][travis-url]

Simple function to isomorphically set the &lt;title&gt; on the server and the client in a React workflow.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Install](#install)
- [Usage](#usage)
- [Options](#options)
  - [`<String>` title](#string-title)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S react-document-head
```


## Usage

A React component
```js
import setHead from 'react-document-head'
import React from 'react'

export default class SingleDiv extends React.Component {
  render () {
    setHead({title: 'my title'})
    return <div />
  }
}
```

On the server…
```js
const content = React.renderToString(SingleDiv)
const title = React.documentHead.title
const html = `<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <div id="app"≥
      ${content}
    </div>
  </body>
</html>`

reply(html)
```

## Options
### `<String>` title
Set the title. On the client, this sets `document.title`, on the server, it sets a global: `React.documentHead`.

## Tests
Tests are in [tape](https://github.com/substack/tape).

* `npm test` will run both server and browser tests
* `npm run test-browser` and `npm run test-server` run their respective tests
* `npm run tdd-server` will run the server tests on every file change.
* `npm run tdd-browser` will run the browser tests on every file change.

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](http://byjoeybaker.com)


[npm-url]: https://npmjs.org/package/react-document-head
[npm-image]: https://badge.fury.io/js/react-document-head.svg
[travis-url]: https://travis-ci.org/joeybaker/react-document-head
[travis-image]: https://travis-ci.org/joeybaker/react-document-head.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/react-document-head.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/react-document-head
