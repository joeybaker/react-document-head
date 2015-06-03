import test from 'tape'
import React from 'react'
import setHead from '../index.jsx'

test('react-document-head', (t) => {
  t.plan(2)

  t.doesNotThrow(
    setHead
    , 'does not throw'
  )

  const title = 'my title'
  setHead({title})
  if (process.browser) {
    t.equal(
      document.title
      , title
      , 'sets the title'
    )
  }
  else {
    t.equal(
      React.documentHead.title
      , title
      , 'sets the title'
    )
  }
})
