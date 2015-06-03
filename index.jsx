import React from 'react'
import assign from 'lodash/object/assign'

const head = {}
const setDocumentHead = function setDocumentHead (options = {}) {
  const documentHead = assign(head, options)
  if (typeof document !== 'undefined') document.title = documentHead.title
  else React.documentHead = documentHead
}

export default setDocumentHead
