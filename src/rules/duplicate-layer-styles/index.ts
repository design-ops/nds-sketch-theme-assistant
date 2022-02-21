import { RuleDefinition, SketchFileObject } from '@sketch-hq/sketch-assistant-types'

export const duplicateLayerStyles: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      number: number
      object: SketchFileObject
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates: Array<Duplicate> = [];

    for (const style of context.utils.objects.sharedStyle) {
      if (style.value.textStyle == undefined) {
        var existingElement = duplicates.find((element) => element.name.toLowerCase() == style.name.toLowerCase())
        if (existingElement != null)
          existingElement.number++;
        else {
          duplicates.push({ name: style.name, number: 1, object:style });
        }
      }
    }

    totalDuplicates = duplicates.filter((element) => element.number > 1);
    totalDuplicates.forEach(element => context.utils.report('\'' + element.name + '\' has a duplicate layer style', element.object));

  },
  name: 'nds-sketch-theme-assistant/duplicate-layer-styles',
  title: 'Duplicate Layer Styles',
  description: 'Reports duplicate layer styles in your theme file.',
}
