import { Box } from '@jeeewon/ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language = 'jsx' }: CodeBlockProps) {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        border: '1px solid #e0e0e0',
        borderRadius: '0 0 12px 12px',
        '& pre': {
          margin: 0,
          padding: '16px !important',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          borderRadius: '0 0 12px 12px',
        },
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '16px',
          borderRadius: '0 0 12px 12px',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  );
}
