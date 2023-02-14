# ```modifier-structure```

## Notifies if a modifier is not properly structured (does not have only one layer)

In the Natural Design System modifier symbols are used to apply styles that are not present in the style options. Any modifier used in the theme file is required to contain only one layer.

Furthermore, that single layer is required to have a Shared Style attached to it, otherwise Sketch cannot override it.

## Configuration

```js
{
  "active": true,
}
```