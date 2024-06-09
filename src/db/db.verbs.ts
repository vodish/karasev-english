import { _do } from './verb/verb.do'
import { be } from './verb/verb.be'
import { expect } from './verb/verb.expect'
import type { Tverbs } from './db.verbs.type'


export const verbs: Tverbs = {
  do: _do,
  be,
  expect,
}
