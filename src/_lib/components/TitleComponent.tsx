import { Typography, Divider } from '@jeeewon/ui';
import { Spacing } from '@/_lib/components';

interface TitleComponentProps {
  title: string;
  description: string;
}

export default function TitleComponent({ title, description }: TitleComponentProps) {
  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
        {description}
      </Typography>
      <Divider />
      <Spacing size={32} />
    </>
  );
}
