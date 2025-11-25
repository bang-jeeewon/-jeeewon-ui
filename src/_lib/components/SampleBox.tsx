import { useState } from 'react';
import { Box, Divider, IconButton } from '@jeeewon/ui';
import { ContentCopy, Check } from '@mui/icons-material';
import CodeBlock from './CodeBlock';

export default function SampleBox({ UI, code }: { UI: React.ReactNode; code?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        marginTop: '16px',
        marginBottom: '48px',
      }}
    >
      <Box sx={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>{UI}</Box>
      <Divider />
      {code && (
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
            }}
          >
            <IconButton
              onClick={handleCopy}
              size="small"
              sx={{
                padding: '8px',
                color: 'text.primary',
              }}
            >
              {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
            </IconButton>
          </Box>
          <CodeBlock>{code}</CodeBlock>
        </Box>
      )}
    </Box>
  );
}
