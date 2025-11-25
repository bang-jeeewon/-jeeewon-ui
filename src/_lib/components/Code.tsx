const codeStyle = {
  backgroundColor: '#f5f5f5',
  padding: '4px 6px',
  borderRadius: '6px',
  fontFamily: 'monospace',
  fontSize: '0.8em',
};

export default function Code({ children }: { children: React.ReactNode }) {
  return <code style={codeStyle}>{children}</code>;
}
