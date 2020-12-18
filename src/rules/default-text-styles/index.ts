import { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

export const defaultTextStyles: RuleDefinition = {
  rule: async (context) => {

    interface Tokens {
      token: string
      path: string
      default: boolean
    }

    var tokens: Array<Tokens> = [];
    var tokenParts: Array<string> = [];
    // var allTokens: Array<Tokens> = [];
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
    // tokens.filter(function(item){
    //   var i = allTokens.findIndex(x => x.token == item.token);
    //   if(i <= -1){
    //     allTokens.push({token: item.token, path: item.path, default: item.default});
    //   }
    //   return null;
    // });

    for (const token of tokens) {
      var existingElement = defaultTokens.find((element) => element.token == token.token);
      if (existingElement == null) {
        context.utils.report('• \'' + token.token + '\' is missing a default text style');
      }

    }

  },
  name: 'nds-sketch-theme-assistant/default-text-styles',
  title: 'Default Text Styles',
  description: 'Reports missing default text styles in your NDS theme file.',
}
