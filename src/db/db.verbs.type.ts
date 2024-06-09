import type { Tirregular } from "./db.verbs.type.irregular"
import type { Tregular } from "./db.verbs.type.regular"


export type Tverbs = { [k in Tverb]?: TverbObj }

export type Tverb = Tregular | Tirregular

export type TverbObj = { [f in TverbFld]?: string }

export type TverbFld = 'ru infinitive'
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
