import { be } from './verb/verb.be'
import { _do } from './verb/verb.do'
import { come } from './verb/verb.come'
import { have } from './verb/verb.have'
import { say } from './verb/verb.say'

import { expect } from './verb/verb.expect'
import { talk } from './verb/verb.talk'
import { deny } from './verb/verb.deny'
import { determine } from './verb/verb.determine'
import { enable } from './verb/verb.enable'
import type { Tverbs } from './db.verbs.type'


export const verbs: Tverbs = {
  be,
  do: _do,
  come,
  have,
  say,

  expect,
  deny,
  determine,
  enable,
  talk,
}
