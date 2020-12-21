import { RuleDefinition, SketchFileObject } from '@sketch-hq/sketch-assistant-types'

export const duplicateSymbols: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      number: number
      object: SketchFileObject
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates: Array<Duplicate> = [];

    for (const symbol of context.utils.objects.symbolMaster) {
      var existingElement = duplicates.find((element) => element.name == symbol.name);
      if (existingElement != null)
        existingElement.number++;
      else
        duplicates.push({ name: symbol.name, number: 1, object:symbol });
    }

    totalDuplicates = (duplicates.filter((element) => element.number > 1));

    totalDuplicates.forEach(element => context.utils.report('\'' + element.name + '\' has a duplicate symbol', element.object));

  },
  name: 'nds-sketch-theme-assistant/duplicate-symbols',
  title: 'Duplicate Symbols',
  description: 'Reports duplicate symbols in your NDS theme file.',
}
