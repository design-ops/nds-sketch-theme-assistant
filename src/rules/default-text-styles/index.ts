import { RuleDefinition, SketchFileObject } from '@sketch-hq/sketch-assistant-types'

export const defaultTextStyles: RuleDefinition = {
  rule: async (context) => {

    interface Tokens {
      token: string
      path: string
      default: boolean
      object: SketchFileObject
    }

    var tokens: Array<Tokens> = [];
    var tokenParts: Array<string> = [];
    var defaultTokens: Array<Tokens> = [];

    for (const style of context.utils.objects.sharedStyle) {
      if (style.value.textStyle != undefined) {

        tokenParts = style.name.split('/');
        var tokenName = tokenParts.slice(-1).toString();
        var tokenPath = tokenParts.pop();
        tokenPath = tokenParts.join('/');
        if (tokenParts.length > 0) {
          tokens.push({ token: tokenName, path: tokenPath, default: false, object:style });
        } else {
          tokens.push({ token: tokenName, path: tokenPath, default: true, object:style });
        }

      }
    }
    defaultTokens = (tokens.filter((element) => element.default == true));

    for (const token of tokens) {
      var existingElement = defaultTokens.find((element) => element.token.toLowerCase() == token.token.toLowerCase());
      if (existingElement == null) {
        context.utils.report('\'' + token.token + '\' is missing a default text style', token.object);
      }

    }

  },
  name: 'nds-sketch-theme-assistant/default-text-styles',
  title: 'Default Text Styles',
  description: 'Reports missing default text styles in your NDS theme file.',
}
