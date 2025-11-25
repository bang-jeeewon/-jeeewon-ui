import { Box } from '@jeeewon/ui';

interface SpacingProps {
  size: number;
}

export default function Spacing({ size }: SpacingProps) {
  return (
    <Box
      sx={{
        height: size,
      }}
    />
  );
}
