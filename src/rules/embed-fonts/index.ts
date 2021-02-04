import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const embedFonts: RuleDefinition = {
  rule: async (context) => {
    for (const font of context.utils.objects.fontReference) {
      if (font.options == 2) { // Non system font is used, but not embedded
          context.utils.report("\'" + font.fontFamilyName + "\' font is not embedded");
      }
    }
  },
  name: 'nds-sketch-theme-assistant/embed-fonts',
  title: 'Embed Fonts',
  description: 'Reports if a font family is not embedded in your NDS theme file.',
}
