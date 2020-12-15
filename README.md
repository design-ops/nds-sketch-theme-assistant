# NDS Sketch Assistants

These are a set of Sketch Assistants for use with the NDS.

## Primary Rules

### Theme file rules
1. **DONE:** 🛑 Error: Find Duplicate **Symbols**, **Text & Layer Styles**
1. **DONE:** 🛑 Error: **Token** must always have a default. Example:
	1. if `navbar/background` exists, `background` is required
	2. if `navbar/button-primary/title` exists, `title` is required
1. **DONE:** 🛑 Error: Symbols with a modifier extension must contain only one layer.
	1. `--radius` extension requires a single Rectangle shape layer.
1. **DONE:** 🛑 Error: All Text & Layers must be synced to a their Shared Styles

### UI Components
1. 🛑 Error: Name of the layer must match the style
1. 🛑 Error: Component names must begin with `_`


### UI Layout
1. 🛑 Error: Artboard names must follow the pattern `Section Name - Description`
1. 🛑 Error: Local layer styles not permitted
1. 🛑 Error: Local text styles not permitted
1. ⚠️ Warning: Local symbols not advised