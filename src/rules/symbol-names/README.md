# ```symbol-names```

## Notifies if a symbol is not properly named

In the Natural Design System layer styles are required to have unique names. This assistant locates any symbols that are named either `null`, `Undefined` or `blank`.

In Sketch, the `/` is used to create structure and organise symbols, that is why no symbol can be named with a simple `/`.

## Configuration

```js
{
  "active": true,
}
```