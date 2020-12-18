import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const duplicateTextStyles: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      number: number
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates: Array<Duplicate> = [];

    for (const style of context.utils.objects.sharedStyle) {
      if (style.value.textStyle != undefined) {
        var existingElement = duplicates.find((element) => element.name == style.name)
        if (existingElement != null)
          existingElement.number++;
        else {
          duplicates.push({ name: style.name, number: 1 });
        }
      }
    }

    totalDuplicates = (duplicates.filter((element) => element.number > 1));

    totalDuplicates.forEach(element => context.utils.report('• \'' + element.name + '\' has a duplicate text style'));

  },
  name: 'nds-sketch-theme-assistant/duplicate-text-styles',
  title: 'Duplicate Text Style',
  description: 'Reports duplicate text styles in your NDS theme file.',
}