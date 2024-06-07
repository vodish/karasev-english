import { _do } from './verb/verb.do'
import { be } from './verb/verb.be'
import { expect } from './verb/verb.expect'


export const verbs: TDbVevb = {
  do: _do,
  be,
  expect,
}

export type TVerb = 'be'
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


export type TVerbKey = 'ru infinitive'
  | 'ru I presentSimple'
  | 'ru you presentSimple'
  | 'ru we presentSimple'
  | 'ru they presentSimple'
  | 'ru he presentSimple'
  | 'ru she presentSimple'
  | 'ru it presentSimple'

  | 'ru I pastSimple'
  | 'ru you pastSimple'
  | 'ru we pastSimple'
  | 'ru they pastSimple'
  | 'ru he pastSimple'
  | 'ru she pastSimple'
  | 'ru it pastSimple'

  | 'ru I futureSimple'
  | 'ru you futureSimple'
  | 'ru we futureSimple'
  | 'ru they futureSimple'
  | 'ru he futureSimple'
  | 'ru she futureSimple'
  | 'ru it futureSimple'

  | 'en infinitive'

  | 'en I presentSimple'
  | 'en you presentSimple'
  | 'en we presentSimple'
  | 'en they presentSimple'
  | 'en he presentSimple'
  | 'en she presentSimple'
  | 'en it presentSimple'

  | 'en I pastSimple'
  | 'en you pastSimple'
  | 'en we pastSimple'
  | 'en they pastSimple'
  | 'en he pastSimple'
  | 'en she pastSimple'
  | 'en it pastSimple'
