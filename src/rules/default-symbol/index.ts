import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const defaultSymbol: RuleDefinition = {
  rule: async (context) => {

    interface Tokens {
      token: string
      path: string
      default: boolean
      obj: object
    }

    var tokens: Array<Tokens> = [];
    var tokenParts: Array<string> = [];
    var defaultTokens: Array<Tokens> = [];

    for (const symbol of context.utils.objects.symbolMaster) {

      if (symbol.name != null) {
        tokenParts = symbol.name.split('/');
        var tokenName = tokenParts.slice(-1).toString();
        var tokenPath = tokenParts.pop();
        tokenPath = tokenParts.join('/');
        if (tokenParts.length > 0) {
          tokens.push({ token: tokenName, path: tokenPath, default: false, obj: symbol });
        } else {
          tokens.push({ token: tokenName, path: tokenPath, default: true, obj: symbol });
        }
      }
    }
    defaultTokens = (tokens.filter((element) => element.default == true));

    for (const token of tokens) {
      var existingElement = defaultTokens.find((element) => element.token == token.token);
      if (existingElement == null) {
        context.utils.report('• \'' + token.token + '\' is missing a default symbol');
      }

    }

  },
  name: 'nds-sketch-theme-assistant/default-symbol',
  title: 'Default Symbol',
  description: 'Reports missing default symbol in your NDS theme file.',
}
