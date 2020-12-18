# NDS Sketch theme assistant

This Sketch Assistant is to be used when designing theme files for the Natural Design System. The Assistant performs the following checks on your theme file:

## Rules

1. [Duplicate symbols](./src/rules/duplicate-symbols)
* [Duplicate layer styles](./src/rules/duplicate-layer-styles)
* [Duplicate text styles](./src/rules/duplicate-text-styles)
* [Default symbols](./src/rules/default-symbols)
* [Default layer styles](./src/rules/default-layer-styles)
* [Default text styles](./src/rules/default-text-styles)
* [Sync layer styles](./src/rules/sync-layer-styles)
* [Sync text styles](./src/rules/sync-text-styles)
* [Symbol names](./src/rules/symbol-names)
* [Layer style names](./src/rules/layer-style-names)
* [Text style names](./src/rules/text-style-names)
* [Modifier structure](./src/rules/modifier-structure)
* [Embedded fonts](./src/rules/embed-fonts)




### UI Components
1. 🛑 Error: Name of the layer must match the style
1. 🛑 Error: Component names must begin with `_`


### UI Layout
1. 🛑 Error: Artboard names must follow the pattern `Section Name - Description`
1. 🛑 Error: Local layer styles not permitted
1. 🛑 Error: Local text styles not permitted
1. ⚠️ Warning: Local symbols not advised