import { resolve } from 'path'
import { testRuleInAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('Duplicate layer styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './duplicate-layer-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/duplicate-layer-styles"
  )
  expect(violations[0].message).toBe("• 'background' has a duplicate layer style")
  expect(violations).toHaveLength(1)
})

test('Duplicate text styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './duplicate-text-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/duplicate-text-styles"
  )
  expect(violations[0].message).toBe("• 'title' has a duplicate text style")
  expect(violations).toHaveLength(1)
})

test('Duplicate symbols', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './duplicate-symbols.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/duplicate-symbols"
  )
  expect(violations[0].message).toBe("• 'icon' has a duplicate symbol")
  expect(violations).toHaveLength(1)
})

test('Default layer styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './default-layer-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/default-layer-styles"
  )
  expect(violations[0].message).toBe("• 'background' is missing a default layer style")
  expect(violations).toHaveLength(1)
})

test('Default text styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './default-text-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/default-text-styles"
  )
  expect(violations[0].message).toBe("• 'title' is missing a default text style")
  expect(violations).toHaveLength(1)
})

test('Default symbols', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './default-symbols.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/default-symbols"
  )
  expect(violations[0].message).toBe("• 'icon' is missing a default symbol")
  expect(violations).toHaveLength(1)
})

test('Modifier structure', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './modifier-structure.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/modifier-structure"
  )
  expect(violations[0].message).toBe("'background --radius' modifier has too many (2) layers")
  expect(violations[1].message).toBe("'header/background --radius' modifier requires a single layer")
  expect(violations).toHaveLength(2)
})

test('Sync layer styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './sync-layer-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/sync-layer-styles"
  )
  expect(violations[0].message).toBe("'background' shared style on 'Rectangle' is out of sync")
  expect(violations).toHaveLength(1)
})

test('Sync text styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './sync-text-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/sync-text-styles"
  )
  expect(violations[0].message).toBe("'title' shared style on 'Title' is out of sync")
  expect(violations).toHaveLength(1)
})

test('Symbol names', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './symbol-names.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/symbol-names"
  )
  expect(violations[0].message).toBe('Woops! Symbol name cannot be a "/"')
  expect(violations[1].message).toBe('Woops! Symbol name cannot be left blank')
  expect(violations).toHaveLength(2)
})

test('Text style names', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './text-style-names.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/text-style-names"
  )
  expect(violations[0].message).toBe('Woops! Text Style name cannot be left blank')
  expect(violations).toHaveLength(1)
})

test('Layer style names', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './layer-style-names.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/layer-style-names"
  )
  expect(violations[0].message).toBe('Woops! Layer Style name cannot be left blank')
  expect(violations).toHaveLength(1)
})

test('Embed Font', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './embed-fonts.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/embed-fonts"
  )
  expect(violations[0].message).toBe("'SF Pro Display' font is not embedded")
  expect(violations).toHaveLength(1)
})
