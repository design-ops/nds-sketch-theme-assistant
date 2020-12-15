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

test('Default layer style', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './default-layer-style.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/default-layer-style"
  )
  expect(violations[0].message).toBe("• 'background' is missing a default layer style")
  expect(violations).toHaveLength(1)
})

test('Default text style', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './default-text-style.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/default-text-style"
  )
  expect(violations[0].message).toBe("• 'title' is missing a default text style")
  expect(violations).toHaveLength(1)
})

test('Default symbol tokens', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './default-symbol.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/default-symbol"
  )
  expect(violations[0].message).toBe("• 'icon' is missing a default symbol")
  expect(violations).toHaveLength(1)
})

test('Modifier format', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './modifier-format.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/modifier-format"
  )
  expect(violations[0].message).toBe("• 'background --radius' modifier has too many (2) layers")
  expect(violations[1].message).toBe("• 'header/background --radius' modifier requires a single layer")
  expect(violations).toHaveLength(2)
})

test('Sync layer styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './sync-layer-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/sync-layer-styles"
  )
  expect(violations[0].message).toBe("• 'background' shared style on 'Rectangle' is out of sync")
  expect(violations).toHaveLength(1)
})

test('Sync text styles', async () => {
  const { violations } = await testRuleInAssistant(
    resolve(__dirname, './sync-text-styles.sketch'),
    Assistant,
    "nds-sketch-theme-assistant/sync-text-styles"
  )
  expect(violations[0].message).toBe("• 'title' shared style on 'Title' is out of sync")
  expect(violations).toHaveLength(1)
})
