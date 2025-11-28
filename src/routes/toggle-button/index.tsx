import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { TitleComponent, Spacing, SampleBox } from '@/_lib/components';
import {
  Paper,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  ArrowDropDown,
  FormatColorFill,
} from '@jeeewon/ui';
import { toggleButtonGroupClasses } from '@jeeewon/ui';
import { FormatAlignLeft, FormatAlignCenter, FormatAlignRight, FormatAlignJustify } from '@jeeewon/ui';
import { styled } from '@jeeewon/ui';

export const Route = createFileRoute('/toggle-button/')({
  component: RouteComponent,
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]: {
    marginLeft: -1,
    borderLeft: '1px solid transparent',
  },
}));

function RouteComponent() {
  const [alignment, setAlignment] = useState<string | null>('left');
  const [formats, setFormats] = useState(() => ['italic']);

  const handleFormat = (_event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <TitleComponent title="Toggle Button" description="토글 버튼은 관련된 옵션들을 그룹화하는 데 사용할 수 있습니다." />
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Exclusive selection
      </Typography>
      <Typography>독립된 토글에서 하나의 옵션을 선택하면 다른 모든 옵션이 선택 해제됩니다.</Typography>
      <SampleBox
        UI={
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered aligned">
              <FormatAlignCenter />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRight />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified aligned">
              <FormatAlignJustify />
            </ToggleButton>
          </ToggleButtonGroup>
        }
        code={`<ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
  <ToggleButton value="left" aria-label="left aligned">
    <FormatAlignLeft />
  </ToggleButton>
  <ToggleButton value="center" aria-label="centered aligned">
    <FormatAlignCenter />
  </ToggleButton>
  <ToggleButton value="right" aria-label="right aligned">
    <FormatAlignRight />
  </ToggleButton>
  <ToggleButton value="justify" aria-label="justified aligned">
    <FormatAlignJustify />
  </ToggleButton>
</ToggleButtonGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Customization
      </Typography>
      <SampleBox
        UI={
          <Paper
            elevation={0}
            sx={(theme) => ({
              display: 'flex',
              border: `1px solid ${theme.palette.divider}`,
              flexWrap: 'wrap',
            })}
          >
            <StyledToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeft />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenter />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRight />
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified" disabled>
                <FormatAlignJustify />
              </ToggleButton>
            </StyledToggleButtonGroup>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <StyledToggleButtonGroup size="small" value={formats} onChange={handleFormat} aria-label="text formatting">
              <ToggleButton value="bold" aria-label="bold">
                <FormatBold />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                <FormatItalic />
              </ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlined />
              </ToggleButton>
              <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFill />
                <ArrowDropDown />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        }
        code={`<Paper
  elevation={0}
  sx={(theme) => ({
    display: 'flex',
    border: \`1px solid \${theme.palette.divider}\`,
    flexWrap: 'wrap',
  })}
>
  <StyledToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
    <ToggleButton value="left" aria-label="left aligned">
      <FormatAlignLeft />
    </ToggleButton>
    <ToggleButton value="center" aria-label="centered">
      <FormatAlignCenter />
    </ToggleButton>
    <ToggleButton value="right" aria-label="right aligned">
      <FormatAlignRight />
    </ToggleButton>
    <ToggleButton value="justify" aria-label="justified" disabled>
      <FormatAlignJustify />
    </ToggleButton>
  </StyledToggleButtonGroup>
  <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
  <StyledToggleButtonGroup size="small" value={formats} onChange={handleFormat} aria-label="text formatting">
    <ToggleButton value="bold" aria-label="bold">
      <FormatBold />
    </ToggleButton>
    <ToggleButton value="italic" aria-label="italic">
      <FormatItalic />
    </ToggleButton>
    <ToggleButton value="underlined" aria-label="underlined">
      <FormatUnderlined />
    </ToggleButton>
    <ToggleButton value="color" aria-label="color" disabled>
      <FormatColorFill />
      <ArrowDropDown />
    </ToggleButton>
  </StyledToggleButtonGroup>
</Paper>`}
      />
    </>
  );
}
