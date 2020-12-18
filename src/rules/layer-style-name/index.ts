import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const layerStyleName: RuleDefinition = {
  rule: async (context) => {

    for (const sharedStyle of context.utils.objects.sharedStyle) {
      if (sharedStyle.value.textStyle == undefined) {

        if (sharedStyle.name == null || sharedStyle.name == " ") {
          context.utils.report('Woops! Layer Style name cannot be left blank', sharedStyle);
        }

      }
    }

  },
  name: 'nds-sketch-theme-assistant/layer-style-name',
  title: 'Layer Style Name',
  description: 'Reports an improperly named layer style in your NDS theme file.',
}
