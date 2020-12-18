import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { duplicateLayerStyles } from './rules/duplicate-layer-styles'
import { duplicateTextStyles } from './rules/duplicate-text-styles'
import { duplicateSymbols } from './rules/duplicate-symbols'
import { defaultLayerStyle } from './rules/default-layer-style'
import { defaultTextStyle } from './rules/default-text-style'
import { defaultSymbol } from './rules/default-symbol'
import { modifierFormat } from './rules/modifier-format'
import { syncLayerStyles } from './rules/sync-layer-styles'
import { syncTextStyles } from './rules/sync-text-styles'
import { layerStyleName } from './rules/layer-style-name'
import { textStyleName } from './rules/text-style-name'
import { symbolName } from './rules/symbol-name'

const assistant: AssistantPackage = async () => {
  return {
    name: 'nds-sketch-theme-assistant',
    rules: [
      duplicateLayerStyles,
      duplicateTextStyles,
      duplicateSymbols,
      defaultLayerStyle,
      defaultTextStyle,
      defaultSymbol,
      modifierFormat,
      syncLayerStyles,
      syncTextStyles,
      symbolName,
      layerStyleName,
      textStyleName,
    ],
    config: {
      rules: {
        'nds-sketch-theme-assistant/duplicate-layer-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-text-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-symbols': { active: true },
        'nds-sketch-theme-assistant/default-layer-style': { active: true },
        'nds-sketch-theme-assistant/default-text-style': { active: true },
        'nds-sketch-theme-assistant/default-symbol': { active: true },
        'nds-sketch-theme-assistant/modifier-format': { active: true },
        'nds-sketch-theme-assistant/sync-layer-styles': { active: true },
        'nds-sketch-theme-assistant/sync-text-styles': { active: true },
        'nds-sketch-theme-assistant/symbol-name': { active: true },
        'nds-sketch-theme-assistant/layer-style-name': { active: true },
        'nds-sketch-theme-assistant/text-style-name': { active: true },
      },
    },
  }
}

export default assistant
