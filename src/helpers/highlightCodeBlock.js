import { common, createLowlight } from 'lowlight'
import { toHtml } from 'hast-util-to-html'
import { fromHtml } from 'hast-util-from-html'

const lowlight = createLowlight(common)
lowlight.registerAlias({ javascript: ['js'] })

function walk(node) {
  if (!node || !node.children) return

  for (const child of node.children) {
    // If this is a <pre><code> block
    if (
      child.tagName === 'pre' &&
      child.children?.[0]?.tagName === 'code'
    ) {
      const codeNode = child.children[0]
      const classNames = codeNode.properties?.className || []
      const langClass = classNames.find((cls) =>
        cls.startsWith('language-')
      )
      const language = langClass?.replace('language-', '') || 'plaintext'
      const codeText = codeNode.children?.[0]?.value || ''

      try {
        const highlighted = lowlight.highlight(language, codeText)
        codeNode.children = highlighted.children
        codeNode.properties.className = ['hljs', `language-${language}`]
      } catch {
        console.warn(`Unsupported language: ${language}`)
      }
    }

    // Recursively process all children
    walk(child)
  }
}

export default function highlightCodeBlocks(html) {
  const tree = fromHtml(html, { fragment: true })
  walk(tree)
  return toHtml(tree)
}