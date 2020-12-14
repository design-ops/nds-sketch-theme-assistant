import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

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

const assistant: AssistantPackage = async () => {
  return {
    name: 'nds-sketch-theme-assistant',
    rules: [duplicateLayerStyles, duplicateTextStyles, duplicateSymbols, defaultLayerTokens, defaultTextTokens, defaultSymbolTokens],
    config: {
      rules: {
        'nds-sketch-theme-assistant/duplicate-layer-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-text-styles': { active: true },
        'nds-sketch-theme-assistant/duplicate-symbols': { active: true },
        'nds-sketch-theme-assistant/default-layer-tokens': { active: true },
        'nds-sketch-theme-assistant/default-text-tokens': { active: true },
        'nds-sketch-theme-assistant/default-symbol-tokens': { active: true },
      },
    },
  }
}

export default assistant
