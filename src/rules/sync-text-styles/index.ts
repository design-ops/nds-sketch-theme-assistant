import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'
import FileFormat from '@sketch-hq/sketch-file-format-ts'

export const syncTextStyles: RuleDefinition = {
  rule: async (context) => {

    type StyleId = string
    const { utils } = context
    const sharedStyles: Map<StyleId, FileFormat.SharedStyle> = new Map()

    for (const sharedStyle of utils.objects.sharedStyle) {
      if (typeof sharedStyle.do_objectID === 'string') {
        sharedStyles.set(sharedStyle.do_objectID, sharedStyle)
      }
    }

    for (const text of utils.objects.text) {
      if (typeof text.sharedStyleID !== 'string') continue
      const sharedStyle = sharedStyles.get(text.sharedStyleID)
      if (!sharedStyle) continue
      if (!utils.textStyleEq(text.style, sharedStyle.value)) {
        context.utils.report('\''+ sharedStyle.name + '\' shared style on \''+ text.name +'\' is out of sync', text)
      }
    }

  },
  name: 'nds-sketch-theme-assistant/sync-text-styles',
  title: 'Text Style is Out of Sync',
  description: 'Reports if a text style is out of sync with the shared style.',
}
