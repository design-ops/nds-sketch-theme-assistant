import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const layerStyleNames: RuleDefinition = {
  rule: async (context) => {

    for (const sharedStyle of context.utils.objects.sharedStyle) {
      if (sharedStyle.value.textStyle == undefined) {

        if (sharedStyle.name == null || sharedStyle.name == " ") {
          context.utils.report('Woops! Layer Style name cannot be left blank', sharedStyle);
        }

      }
    }

  },
  name: 'nds-sketch-theme-assistant/layer-style-names',
  title: 'Layer Style Names',
  description: 'Reports an improperly named layer style in your NDS theme file.',
}
