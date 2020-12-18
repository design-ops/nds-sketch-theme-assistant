import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const textStyleName: RuleDefinition = {
  rule: async (context) => {
    for (const sharedStyle of context.utils.objects.sharedStyle) {
      if (sharedStyle.value.textStyle != undefined) {
        if (sharedStyle.name == null || sharedStyle.name == " ") {
          context.utils.report('Woops! Text Style name cannot be left blank', sharedStyle);
        }
      }
    }
  },
  name: 'nds-sketch-theme-assistant/text-style-name',
  title: 'Text Style Name',
  description: 'Reports an improperly named text style in your NDS theme file.',
}
