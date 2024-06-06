import { _do } from './verb/verb.do'
import { be } from './verb/verb.be'
import { expect } from './verb/verb.expect'


type TVerb = 'be'
  | 'do'
  | 'expect'

type TDbVevb = {
  [k in TVerb]: {
    'ru infinitive': string,

    'ru I presentSimple': string,
    'ru you presentSimple': string,
    'ru we presentSimple': string,
    'ru they presentSimple': string,
    'ru he presentSimple': string,
    'ru she presentSimple': string,
    'ru it presentSimple': string,

    'ru I pastSimple': string,
    'ru you pastSimple': string,
    'ru we pastSimple': string,
    'ru they pastSimple': string,
    'ru he pastSimple': string,
    'ru she pastSimple': string,
    'ru it pastSimple': string,

    'ru I futureSimple'?: string,
    'ru you futureSimple'?: string,
    'ru we futureSimple'?: string,
    'ru they futureSimple'?: string,
    'ru he futureSimple'?: string,
    'ru she futureSimple'?: string,
    'ru it futureSimple'?: string,


    'en infinitive': string,

    'en I presentSimple': string,
    'en you presentSimple': string,
    'en we presentSimple': string,
    'en they presentSimple': string,
    'en he presentSimple': string,
    'en she presentSimple': string,
    'en it presentSimple': string,

    'en I pastSimple': string,
    'en you pastSimple': string,
    'en we pastSimple': string,
    'en they pastSimple': string,
    'en he pastSimple': string,
    'en she pastSimple': string,
    'en it pastSimple': string,
  }
}

export const verbs: TDbVevb = {
  do: _do,
  be,
  expect,
}
