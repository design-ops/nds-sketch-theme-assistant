import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const textStyleNames: RuleDefinition = {
  rule: async (context) => {
    for (const sharedStyle of context.utils.objects.sharedStyle) {
      if (sharedStyle.value.textStyle != undefined) {
        if (sharedStyle.name == null || sharedStyle.name == " ") {
          context.utils.report('Woops! Text Style name cannot be left blank', sharedStyle);
        }
      }
    }
  },
  name: 'nds-sketch-theme-assistant/text-style-names',
  title: 'Text Style Names',
  description: 'Reports an improperly named text style in your NDS theme file.',
}
