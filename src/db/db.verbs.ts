import { _do } from './verb/verb.do'
import { be } from './verb/verb.be'
import { expect } from './verb/verb.expect'
import type { TverbFld } from './db.verbs.type.fields'
import type { Tregular } from './db.verbs.type.regular'
import type { Tirregular } from './db.verbs.type.irregular'


export const verbs: Tverbs = {
  do: _do,
  be,
  expect,
}

// типизация

type Tverbs = { [k in Tverb]?: TverbObj }

export type Tverb = Tregular | Tirregular

export type TverbObj = { [f in TverbFld]?: string }

export {type TverbFld};
