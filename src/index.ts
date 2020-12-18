import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { duplicateLayerStyles } from './rules/duplicate-layer-styles'
import { duplicateTextStyles } from './rules/duplicate-text-styles'
import { duplicateSymbols } from './rules/duplicate-symbols'
import { defaultLayerStyles } from './rules/default-layer-styles'
import { defaultTextStyles } from './rules/default-text-styles'
import { defaultSymbols } from './rules/default-symbols'
import { modifierStructure } from './rules/modifier-structure'
import { syncLayerStyles } from './rules/sync-layer-styles'
import { syncTextStyles } from './rules/sync-text-styles'
import { layerStyleNames } from './rules/layer-style-names'
import { textStyleNames } from './rules/text-style-names'
import { symbolNames } from './rules/symbol-names'
import { embedFonts } from './rules/embed-fonts'

const assistant: AssistantPackage = async () => {
  return {
    name: 'nds-sketch-theme-assistant',
    rules: [
      duplicateLayerStyles,
      duplicateTextStyles,
      duplicateSymbols,
      defaultLayerStyles,
      defaultTextStyles,
      defaultSymbols,
      modifierStructure,
      syncLayerStyles,
      syncTextStyles,
      symbolNames,
      layerStyleNames,
      textStyleNames,
      embedFonts,
    ],
    config: {
      rules: {
        'nds-sketch-theme-assistant/duplicate-layer-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-text-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-symbols': { active: true },
        'nds-sketch-theme-assistant/default-layer-styles': { active: true },
        'nds-sketch-theme-assistant/default-text-styles': { active: true },
        'nds-sketch-theme-assistant/default-symbols': { active: true },
        'nds-sketch-theme-assistant/modifier-structure': { active: true },
        'nds-sketch-theme-assistant/sync-layer-styles': { active: true },
        'nds-sketch-theme-assistant/sync-text-styles': { active: true },
        'nds-sketch-theme-assistant/symbol-names': { active: true },
        'nds-sketch-theme-assistant/layer-style-names': { active: true },
        'nds-sketch-theme-assistant/text-style-names': { active: true },
        'nds-sketch-theme-assistant/embed-fonts': { active: true },
      },
    },
  }
}

export default assistant
