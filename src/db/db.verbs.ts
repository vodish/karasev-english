import { be } from './verb/verb.be'
import { _do } from './verb/verb.do'
import { have } from './verb/verb.have'
import { say } from './verb/verb.say'

import { expect } from './verb/verb.expect'
import { talk } from './verb/verb.talk'
import type { Tverbs } from './db.verbs.type'


export const verbs: Tverbs = {
  be,
  do: _do,
  have,
  say,

  expect,
  talk,
}
