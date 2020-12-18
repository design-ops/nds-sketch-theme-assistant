import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const modifierStructure: RuleDefinition = {
  rule: async (context) => {

    for (const symbol of context.utils.objects.symbolMaster) {
      if (symbol.name != null && symbol.name.match(/.*? \-\-[^\s]+$/gm)) { // match naming scheme ' --modifier'

        var numberOfLayers = symbol.layers.length;
        if (numberOfLayers > 1) {
          context.utils.report('\'' + symbol.name + '\' modifier has too many (' + numberOfLayers + ') layers', symbol);
        }
        if (numberOfLayers < 1 ) {
          context.utils.report('\'' + symbol.name + '\' modifier requires a single layer', symbol);
        }

      }
    }

  },
  name: 'nds-sketch-theme-assistant/modifier-structure',
  title: 'Modifier Structure',
  description: 'Reports if a modifier has more than one or less than one layer.',
}
