import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { TitleComponent, Spacing, SampleBox, Code } from '@/_lib/components';
import { Stack, Typography, Box, Slider } from '@jeeewon/ui';
import { VolumeDown, VolumeUp } from '@jeeewon/ui';

export const Route = createFileRoute('/slider/')({
  component: RouteComponent,
});

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

function RouteComponent() {
  const [value, setValue] = useState<number>(30);
  const [rangeValue, setRangeValue] = useState<number[]>([20, 37]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (_event: Event, newValue: number | number[], _activeThumb?: number) => {
    setValue(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleRangeChange = (_event: Event, newValue: number | number[], _activeThumb?: number) => {
    setRangeValue(newValue as number[]);
  };

  return (
    <>
      <TitleComponent title="Slider" description="사용자가 값 범위 중에서 선택할 수 있게 합니다." />
      <Typography>
        슬라이더는 막대 형태로 값의 범위를 보여주며, 사용자가 그 중에서 하나의 값을 선택할 수 있게 합니다. 볼륨이나 밝기 조절, 이미지 필터 적용 등
        설정을 조정할 때 유용합니다.
      </Typography>
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Continuous sliders
      </Typography>
      <Typography>연속적인 슬라이더는 사용자가 주관적인 범위를 따라 값을 선택할 수 있게 합니다.</Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
              <VolumeDown />
              <Slider aria-label="Volume" value={value} onChange={handleChange} />
              <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
          </Box>
        }
        code={`<Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
  <VolumeDown />
  <Slider aria-label="Volume" value={value} onChange={handleChange} />
  <VolumeUp />
</Stack>
<Slider disabled defaultValue={30} aria-label="Disabled slider" />`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Sizes
      </Typography>
      <Typography>
        <Code>size="small"</Code> prop으로 작은 슬라이더를 구현할 수 있습니다다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 300 }}>
            <Slider size="small" defaultValue={70} aria-label="Samll" valueLabelDisplay="auto" />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          </Box>
        }
        code={`<Slider
  size="small"
  defaultValue={70}
  aria-label="Samll"
  valueLabelDisplay="auto"
/>
<Slider
  defaultValue={50}
  aria-label="Default"
  valueLabelDisplay="auto"
/>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Discrete sliders
      </Typography>
      <Typography>
        이산적인 슬라이더는 인디케이터에서 특정한 값을 선택할 수 있게 합니다. 눈금은 <Code>marks={true}</Code>로 표시할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={10}
              marks
              min={10}
              max={110}
            />
          </Box>
        }
        code={`<Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  shiftStep={30}
  step={10}
  marks
  min={10}
  max={110}
/>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Custom marks
      </Typography>
      <Typography>
        <Code>marks</Code> prop을 사용하여 눈금을 커스터마이징할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 300 }}>
            <Slider aria-label="Custom marks" defaultValue={20} getAriaValueText={valuetext} step={10} valueLabelDisplay="auto" marks={marks} />
          </Box>
        }
        code={`<Slider
  aria-label="Custom marks"
  defaultValue={20}
  getAriaValueText={valuetext}
  step={10}
  valueLabelDisplay="auto"
  marks={marks}
/>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Restricted values
      </Typography>
      <Typography>
        <Code>step={null}</Code>, <Code>marks</Code>로 선택할 수 있는 값을 제한할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={20}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>
        }
        code={`<Slider
  aria-label="Restricted values"
  defaultValue={20}
  getAriaValueText={valuetext}
  step={null}
  valueLabelDisplay="auto"
  marks={marks}
/>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Label always visible
      </Typography>
      <Typography>
        <Code>valueLabelDisplay="on"</Code>로 label을 항상 표시할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 300 }}>
            <Slider aria-label="Always visible" defaultValue={80} getAriaValueText={valuetext} step={10} marks={marks} valueLabelDisplay="on" />
          </Box>
        }
        code={`<Slider 
  aria-label="Always visible"
  defaultValue={80}
  getAriaValueText={valuetext}
  step={10}
  marks={marks}
  valueLabelDisplay="on"
/>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Range slider
      </Typography>
      <Typography>
        <Code>value</Code> prop을 배열로 설정하면 범위 슬라이더를 구현할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={rangeValue}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        }
        code={`<Slider
  getAriaLabel={() => 'Temperature range'}
  value={rangeValue}
  onChange={handleChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
/>`}
      />
    </>
  );
}
