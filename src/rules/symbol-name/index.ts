import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const symbolName: RuleDefinition = {
  rule: async (context) => {
    for (const symbol of context.utils.objects.symbolMaster) {
      if (symbol.name == null || symbol.name == " ") {
        context.utils.report('Woops! Symbol name cannot be left blank', symbol);
      }
      if (symbol.name == "/") {
        context.utils.report('Woops! Symbol name cannot be a "/"', symbol);
      }
    }
  },
  name: 'nds-sketch-theme-assistant/symbol-name',
  title: 'Symbol Name',
  description: 'Reports an improperly named symbol in your NDS theme file.',
}
