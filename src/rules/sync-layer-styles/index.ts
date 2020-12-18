import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'
import FileFormat from '@sketch-hq/sketch-file-format-ts'

export const syncLayerStyles: RuleDefinition = {
  rule: async (context) => {

    const IGNORE_CLASSES = ['artboard', 'page', 'symbolMaster', 'text']
    type StyleId = string

    const { utils } = context
    const sharedStyles: Map<StyleId, FileFormat.SharedStyle> = new Map()

    for (const sharedStyle of utils.objects.sharedStyle) {
      if (typeof sharedStyle.do_objectID === 'string') {
        sharedStyles.set(sharedStyle.do_objectID, sharedStyle)
      }
    }

    for (const layer of utils.objects.anyLayer) {
      if (IGNORE_CLASSES.includes(layer._class)) continue // Ignore certain classes
      if (layer._class === 'group' && !layer.style?.shadows?.length) continue // Ignore groups with default styles
      if (typeof layer.sharedStyleID !== 'string') continue // Ignore if no shared style id
      const sharedStyle = sharedStyles.get(layer.sharedStyleID)
      if (!sharedStyle) continue // Ignore if shared style not found
      if (!layer.style || !utils.styleEq(layer.style, sharedStyle.value)) {
        context.utils.report('\''+ sharedStyle.name + '\' shared style on \''+ layer.name +'\' is out of sync', layer)
      }
    }

  },
  name: 'nds-sketch-theme-assistant/sync-layer-styles',
  title: 'Layer Style is Out of Sync',
  description: 'Reports if a layer style is out of sync with the shared style.',
}
