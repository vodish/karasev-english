export type TPatternKey = 'affirmative pastSimple'
  | 'affirmative presentSimple'
  | 'affirmative futureSimple'

  | 'negative pastSimple'
  | 'negative presentSimple'
  | 'negative futureSimple'

  | 'question pastSimple'
  | 'question presentSimple'
  | 'question futureSimple'


export const patterns: { [k in TPatternKey]: { ru: string, en: string } } = {
  'affirmative pastSimple': { ru: '{subject} {verb}.', en: '{subject} {verb}.' },
  'affirmative presentSimple': { ru: '{subject} {verb}.', en: '{subject} {verb}.' },
  'affirmative futureSimple': { ru: '{subject} {быть} {verb}.', en: '{subject} will {verb}.' },

  'negative pastSimple': { ru: '{subject} не {verb}.', en: '{subject} {do} not {verb}.' },
  'negative presentSimple': { ru: '{subject} не {verb}.', en: '{subject} {do} not {verb}.' },
  'negative futureSimple': { ru: '{subject} не {быть} {verb}.', en: '{subject} will not {verb}.' },

  'question pastSimple': { ru: '{subject} {verb}?', en: '{do} {subject} {verb}?' },
  'question presentSimple': { ru: '{subject} {verb}?', en: '{do} {subject} {verb}?' },
  'question futureSimple': { ru: '{subject} {быть} {verb}?', en: 'will {subject} {verb}?' },
}
