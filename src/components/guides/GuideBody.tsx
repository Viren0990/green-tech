import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import type { GuideBlock } from '@/src/lib/guides';

// Inline markup in guide text: **bold**, [label](href) and [TODO: note]. Internal hrefs
// (starting with "/") use next/link; external ones open in a new tab. TODOs are
// highlighted so the owner can spot facts still to be supplied.
function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[(TODO:.+?)\](?!\()|\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const key = match.index;
    if (match[1]) {
      parts.push(<mark key={key} className="bg-amber-200 text-amber-950 px-1 rounded">[{match[1]}]</mark>);
    } else if (match[2]) {
      parts.push(<strong key={key} className="font-semibold text-gray-900">{match[2]}</strong>);
    } else if (match[4].startsWith('/')) {
      parts.push(<Link key={key} href={match[4]}>{match[3]}</Link>);
    } else {
      parts.push(<a key={key} href={match[4]} target="_blank" rel="noopener noreferrer">{match[3]}</a>);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i} id={headingId(block.text)}>{block.text}</h2>;
          case 'h3':
            return <h3 key={i}>{block.text}</h3>;
          case 'p':
            return <p key={i}>{inline(block.text)}</p>;
          case 'ul':
            return <ul key={i}>{block.items.map((item, j) => <li key={j}>{inline(item)}</li>)}</ul>;
          case 'ol':
            return <ol key={i}>{block.items.map((item, j) => <li key={j}>{inline(item)}</li>)}</ol>;
          case 'callout':
            return (
              <aside key={i} className="my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 text-[15px] text-gray-800">
                {block.title && <p className="font-semibold text-emerald-900 !mb-1">{block.title}</p>}
                <p className="leading-relaxed !mb-0">{inline(block.text)}</p>
              </aside>
            );
          case 'table':
            // Phones: each row becomes a small card with the column name above each value.
            return (
              <table key={i} className="block md:table my-6 w-full text-left text-[15px] md:border-collapse">
                <thead className="hidden md:table-header-group">
                  <tr>
                    {block.head.map((cell) => (
                      <th key={cell} className="border-b-2 border-emerald-600 py-2 pr-4 font-semibold text-gray-900 align-bottom">{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="block md:table-row-group space-y-3 md:space-y-0">
                  {block.rows.map((row, j) => (
                    <tr key={j} className="block md:table-row rounded-xl border border-gray-200 md:rounded-none md:border-0 md:border-b p-3 md:p-0">
                      {row.map((cell, k) => (
                        <td key={k} className="block md:table-cell py-1 md:py-2.5 md:pr-4 align-top">
                          <span className="md:hidden block text-xs font-semibold uppercase tracking-wide text-emerald-700">{block.head[k]}</span>
                          {inline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          default:
            return <Fragment key={i} />;
        }
      })}
    </>
  );
}
