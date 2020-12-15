import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'
import FileFormat from '@sketch-hq/sketch-file-format-ts'

const duplicateLayerStyles: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      number: number
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates = [];

    for (const style of context.utils.objects.sharedStyle) {
      if (style.value.textStyle == undefined) {
        var existingElement = duplicates.find((element) => element.name == style.name)
        if (existingElement != null)
          existingElement.number++;
        else {
          duplicates.push({ name: style.name, number: 1 });
        }
      }
    }

    totalDuplicates = duplicates.filter((element) => element.number > 1);

    totalDuplicates.forEach(element => context.utils.report('• \'' + element.name + '\' has a duplicate layer style'));

  },
  name: 'nds-sketch-theme-assistant/duplicate-layer-styles',
  title: 'Duplicate Layer Styles',
  description: 'Reports duplicate layer styles in your theme file.',
}

const duplicateTextStyles: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      number: number
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates = [];

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

const duplicateSymbols: RuleDefinition = {
  rule: async (context) => {
    interface Duplicate {
      name: string
      number: number
    }

    var duplicates: Array<Duplicate> = [];
    var totalDuplicates = [];

    for (const symbol of context.utils.objects.symbolMaster) {
      var existingElement = duplicates.find((element) => element.name == symbol.name);
      if (existingElement != null)
        existingElement.number++;
      else
        duplicates.push({ name: symbol.name, number: 1 });
    }

    totalDuplicates = (duplicates.filter((element) => element.number > 1));

    totalDuplicates.forEach(element => context.utils.report('• \'' + element.name + '\' has a duplicate symbol'));

  },
  name: 'nds-sketch-theme-assistant/duplicate-symbols',
  title: 'Duplicate Symbols',
  description: 'Reports duplicate symbols in your NDS theme file.',
}

const defaultLayerTokens: RuleDefinition = {
  rule: async (context) => {

    interface Tokens {
      token: string
      path: string
      default: boolean
    }

    var tokens: Array<Tokens> = [];
    var tokenParts: Array<string> = [];
    var allTokens: Array<Tokens> = [];
    var defaultTokens: Array<Tokens> = [];

    for (const style of context.utils.objects.sharedStyle) {
      if (style.value.textStyle == undefined) {

        tokenParts = style.name.split('/');
        var tokenName = tokenParts.slice(-1).toString();
        var tokenPath = tokenParts.pop();
        tokenPath = tokenParts.join('/');
        if (tokenParts.length > 0) {
          tokens.push({ token: tokenName, path: tokenPath, default: false });
        } else {
          tokens.push({ token: tokenName, path: tokenPath, default: true });
        }

      }
    }
    defaultTokens = (tokens.filter((element) => element.default == true));
    tokens.filter(function(item){
      var i = allTokens.findIndex(x => x.token == item.token);
      if(i <= -1){
        allTokens.push({token: item.token, path: item.path, default: item.default});
      }
      return null;
    });

    for (const token of allTokens) {
      var existingElement = defaultTokens.find((element) => element.token == token.token);
      if (existingElement == null) {
        context.utils.report('• \'' + token.token + '\' is missing a default layer style');
      }

    }

  },
  name: 'nds-sketch-theme-assistant/default-layer-tokens',
  title: 'Default Layer Tokens',
  description: 'Reports missing default layer style tokens in your NDS theme file.',
}

const defaultTextTokens: RuleDefinition = {
  rule: async (context) => {

    interface Tokens {
      token: string
      path: string
      default: boolean
    }

    var tokens: Array<Tokens> = [];
    var tokenParts: Array<string> = [];
    var allTokens: Array<Tokens> = [];
    var defaultTokens: Array<Tokens> = [];

    for (const style of context.utils.objects.sharedStyle) {
      if (style.value.textStyle != undefined) {

        tokenParts = style.name.split('/');
        var tokenName = tokenParts.slice(-1).toString();
        var tokenPath = tokenParts.pop();
        tokenPath = tokenParts.join('/');
        if (tokenParts.length > 0) {
          tokens.push({ token: tokenName, path: tokenPath, default: false });
        } else {
          tokens.push({ token: tokenName, path: tokenPath, default: true });
        }

      }
    }
    defaultTokens = (tokens.filter((element) => element.default == true));
    tokens.filter(function(item){
      var i = allTokens.findIndex(x => x.token == item.token);
      if(i <= -1){
        allTokens.push({token: item.token, path: item.path, default: item.default});
      }
      return null;
    });

    for (const token of allTokens) {
      var existingElement = defaultTokens.find((element) => element.token == token.token);
      if (existingElement == null) {
        context.utils.report('• \'' + token.token + '\' is missing a default text style');
      }

    }

  },
  name: 'nds-sketch-theme-assistant/default-text-tokens',
  title: 'Default Text Tokens',
  description: 'Reports missing default text style tokens in your NDS theme file.',
}

const defaultSymbolTokens: RuleDefinition = {
  rule: async (context) => {

    interface Tokens {
      token: string
      path: string
      default: boolean
    }

    var tokens: Array<Tokens> = [];
    var tokenParts: Array<string> = [];
    var allTokens: Array<Tokens> = [];
    var defaultTokens: Array<Tokens> = [];

    for (const symbol of context.utils.objects.symbolMaster) {

      if (symbol.name != null) {

        tokenParts = symbol.name.split('/');
        var tokenName = tokenParts.slice(-1).toString();
        var tokenPath = tokenParts.pop();
        tokenPath = tokenParts.join('/');
        if (tokenParts.length > 0) {
          tokens.push({ token: tokenName, path: tokenPath, default: false });
        } else {
          tokens.push({ token: tokenName, path: tokenPath, default: true });
        }

      }
    }
    defaultTokens = (tokens.filter((element) => element.default == true));
    tokens.filter(function(item){
      var i = allTokens.findIndex(x => x.token == item.token);
      if(i <= -1){
        allTokens.push({token: item.token, path: item.path, default: item.default});
      }
      return null;
    });

    for (const token of allTokens) {
      var existingElement = defaultTokens.find((element) => element.token == token.token);
      if (existingElement == null) {
        context.utils.report('• \'' + token.token + '\' is missing a default symbol');
      }

    }

  },
  name: 'nds-sketch-theme-assistant/default-symbol-tokens',
  title: 'Default Symbol Tokens',
  description: 'Reports missing default symbol tokens in your NDS theme file.',
}

const modifierFormat: RuleDefinition = {
  rule: async (context) => {

    for (const symbol of context.utils.objects.symbolMaster) {
      if (symbol.name != null && symbol.name.match(/.*? \-\-[^\s]+$/gm)) { // match naming scheme ' --modifier'

        var numberOfLayers = symbol.layers.length;
        if (numberOfLayers > 1) {
          context.utils.report('• \'' + symbol.name + '\' modifier has too many (' + numberOfLayers + ') layers');
        }
        if (numberOfLayers < 1 ) {
          context.utils.report('• \'' + symbol.name + '\' modifier requires a single layer');
        }

      }
    }

  },
  name: 'nds-sketch-theme-assistant/modifier-format',
  title: 'Modifier Format',
  description: 'Reports if a modifier has more than one or less than one layer.',
}

const syncLayerStyles: RuleDefinition = {
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
        context.utils.report('• \''+ sharedStyle.name + '\' shared style on \''+ layer.name +'\' is out of sync')
      }
      // if (sharedStyle.name != layer.name) {
      //   context.utils.report('• \''+ sharedStyle.name + '\' BLAH \''+ layer.name +'\' is out of sync')
      // }
    }

  },
  name: 'nds-sketch-theme-assistant/sync-layer-styles',
  title: 'Layer Style is Out of Sync',
  description: 'Reports if a layer style is out of sync with the shared style.',
}

const syncTextStyles: RuleDefinition = {
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
        context.utils.report('• \''+ sharedStyle.name + '\' shared style on \''+ text.name +'\' is out of sync')
      }
      // if (sharedStyle.name != text.name) {
      //   context.utils.report('• \''+ sharedStyle.name + '\' BLAH \''+ text.name +'\' is out of sync')
      // }
    }

  },
  name: 'nds-sketch-theme-assistant/sync-text-styles',
  title: 'Text Style is Out of Sync',
  description: 'Reports if a text style is out of sync with the shared style.',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'nds-sketch-theme-assistant',
    rules: [
      duplicateLayerStyles,
      duplicateTextStyles,
      duplicateSymbols,
      defaultLayerTokens,
      defaultTextTokens,
      defaultSymbolTokens,
      modifierFormat,
      syncLayerStyles,
      syncTextStyles
    ],
    config: {
      rules: {
        'nds-sketch-theme-assistant/duplicate-layer-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-text-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-symbols': { active: true },
        'nds-sketch-theme-assistant/default-layer-tokens': { active: true },
        'nds-sketch-theme-assistant/default-text-tokens': { active: true },
        'nds-sketch-theme-assistant/default-symbol-tokens': { active: true },
        'nds-sketch-theme-assistant/modifier-format': { active: true },
        'nds-sketch-theme-assistant/sync-layer-styles': { active: true },
        'nds-sketch-theme-assistant/sync-text-styles': { active: true },
      },
    },
  }
}

export default assistant
