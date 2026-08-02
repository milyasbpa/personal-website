import React from 'react';
import { MDXComponents } from '../../components/MDXComponents/MDXComponents';

export interface BlogPostContentProps {
  source: string;
}

export function BlogPostContent({ source }: BlogPostContentProps) {
  if (!source) {
    return null;
  }

  const blocks = parseMDXContent(source);

  return (
    <article className="prose dark:prose-invert max-w-none text-[var(--fg-body)] leading-relaxed">
      {blocks.map((block, index) => (
        <React.Fragment key={index}>{renderBlock(block)}</React.Fragment>
      ))}
    </article>
  );
}

interface ContentBlock {
  type: 'h2' | 'h3' | 'p' | 'code' | 'callout' | 'vocab' | 'ul' | 'blockquote';
  text?: string;
  language?: string;
  calloutType?: 'note' | 'tip' | 'warning';
  title?: string;
  kanji?: string;
  reading?: string;
  meaning?: string;
  items?: string[];
}

function parseMDXContent(source: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = source.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Empty line
    if (!line) {
      i++;
      continue;
    }

    // Code block ```
    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'text';
      let code = '';
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code += lines[i] + '\n';
        i++;
      }
      i++; // Skip closing ```
      blocks.push({ type: 'code', language, text: code.trimEnd() });
      continue;
    }

    // Vocab tag <Vocab kanji="..." reading="..." meaning="..." />
    if (line.startsWith('<Vocab')) {
      const kanjiMatch = line.match(/kanji="([^"]+)"/);
      const readingMatch = line.match(/reading="([^"]+)"/);
      const meaningMatch = line.match(/meaning="([^"]+)"/);
      blocks.push({
        type: 'vocab',
        kanji: kanjiMatch ? kanjiMatch[1] : '',
        reading: readingMatch ? readingMatch[1] : '',
        meaning: meaningMatch ? meaningMatch[1] : '',
      });
      i++;
      continue;
    }

    // Callout tag <Callout type="..." title="...">
    if (line.startsWith('<Callout')) {
      const typeMatch = line.match(/type="([^"]+)"/);
      const titleMatch = line.match(/title="([^"]+)"/);
      let content = '';
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('</Callout>')) {
        content += lines[i] + ' ';
        i++;
      }
      i++; // Skip </Callout>
      blocks.push({
        type: 'callout',
        calloutType: (typeMatch ? typeMatch[1] : 'note') as 'note' | 'tip' | 'warning',
        title: titleMatch ? titleMatch[1] : undefined,
        text: content.trim(),
      });
      continue;
    }

    // Heading H2
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      i++;
      continue;
    }

    // Heading H3
    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4).trim() });
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      blocks.push({ type: 'blockquote', text: line.slice(2).trim() });
      i++;
      continue;
    }

    // List item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(lines[i].trim().slice(2).trim());
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // Normal paragraph
    let paraText = '';
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('## ') &&
      !lines[i].trim().startsWith('### ') &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('<Callout') &&
      !lines[i].trim().startsWith('<Vocab') &&
      !lines[i].trim().startsWith('> ') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('* ')
    ) {
      paraText += lines[i].trim() + ' ';
      i++;
    }
    if (paraText.trim()) {
      blocks.push({ type: 'p', text: paraText.trim() });
    }
  }

  return blocks;
}

function renderBlock(block: ContentBlock): React.ReactNode {
  const { h2: H2, h3: H3, p: P, blockquote: Blockquote, Callout, Vocab, CodeBlock } = MDXComponents;

  switch (block.type) {
    case 'h2': {
      const id = block.text?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <H2 id={id}>{block.text}</H2>;
    }
    case 'h3': {
      const id = block.text?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <H3 id={id}>{block.text}</H3>;
    }
    case 'code':
      return (
        <CodeBlock language={block.language} code={block.text}>
          {block.text}
        </CodeBlock>
      );
    case 'callout':
      return (
        <Callout type={block.calloutType} title={block.title}>
          {block.text}
        </Callout>
      );
    case 'vocab':
      return (
        <Vocab
          kanji={block.kanji || ''}
          reading={block.reading || ''}
          meaning={block.meaning || ''}
        />
      );
    case 'blockquote':
      return <Blockquote>{block.text}</Blockquote>;
    case 'ul':
      return (
        <ul className="list-disc list-outside pl-6 my-4 space-y-2 text-[var(--fg-body)]">
          {block.items?.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'p':
    default:
      return <P>{block.text}</P>;
  }
}
