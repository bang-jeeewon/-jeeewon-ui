import { useState } from 'react';
import { SampleBox, Spacing, TitleComponent, Code } from '@/_lib/components';
import { Typography, Box, Checkbox, FormGroup, FormControlLabel, FormLabel, FormHelperText, FormControl } from '@jeeewon/ui';
import { FavoriteBorder, Favorite, BookmarkBorder, Bookmark, Warning } from '@jeeewon/ui';
import { pink } from '@jeeewon/ui';
import { alpha } from '@jeeewon/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/checkbox/')({
  component: RouteComponent,
});

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

function RouteComponent() {
  const [checked, setChecked] = useState(true);
  const [indeterminateCheked, setIndeterminateCheked] = useState([true, false, false]);
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndeterminateCheked([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndeterminateCheked([event.target.checked, indeterminateCheked[1], indeterminateCheked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndeterminateCheked([indeterminateCheked[0], event.target.checked, indeterminateCheked[2]]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndeterminateCheked([indeterminateCheked[0], indeterminateCheked[1], event.target.checked]);
  };

  const handleFormGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel label="Child 1" control={<Checkbox checked={indeterminateCheked[0]} onChange={handleChange2} />} />
      <FormControlLabel label="Child 2" control={<Checkbox checked={indeterminateCheked[1]} onChange={handleChange3} />} />
      <FormControlLabel label="Child 3" control={<Checkbox checked={indeterminateCheked[2]} onChange={handleChange4} />} />
    </Box>
  );

  return (
    <>
      <TitleComponent title="Checkbox" description="체크박스는 사용자가 하나 이상 선택할 수 있게 합니다." />
      <Typography sx={{ marginBottom: 1 }}>
        체크박스는 on-off 상태를 표시할 수 있습니다.
        <br />
        여러 옵션이 리스트로 표시되는 경우, on/off 스위치 대신 체크박스를 사용하면 공간을 절약할 수 있습니다. 단일 옵션인 경우에는 체크박스를 사용하지
        말고 on/off 스위치를 사용하세요.
      </Typography>
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic checkboxes
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
          </Box>
        }
        code={`<Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked />`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Label
      </Typography>
      <Typography>
        <Code>FormControlLabel</Code> 컴포넌트를 사용하여 체크박스에 레이블을 추가할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </FormGroup>
        }
        code={`<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Size
      </Typography>
      <Typography>
        <Code>size</Code> prop을 사용하여 svg 아이콘의 크기를 조정할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Checkbox {...label} defaultChecked size="small" />
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />
          </Box>
        }
        code={`<Checkbox {...label} defaultChecked size="small" />
<Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Color
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked color="secondary" />
            <Checkbox {...label} defaultChecked color="success" />
            <Checkbox {...label} defaultChecked color="default" />
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            />
          </Box>
        }
        code={`<Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
  {...label}
  defaultChecked
  sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }}
/>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Icon
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox {...label} icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </Box>
        }
        code={`<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox {...label} icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Controlled
      </Typography>
      <Typography>
        <Code>checked</Code>, <Code>onChange</Code> props를 사용하여 체크박스의 상태를 제어할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            slotProps={{
              input: { 'aria-label': 'controlled' },
            }}
          />
        }
        code={`<Checkbox
  checked={checked}
  onChange={handleChange}
  slotProps={{
    input: { 'aria-label': 'controlled' },
  }}
/>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Indeterminate
      </Typography>
      <Typography>
        폼 제출 관점에서는 2 가지 상태(<Code>checked</Code>, <Code>unchecked</Code>)만 있고, 시각적으로는 3 가지 상태(<Code>checked</Code>,{' '}
        <Code>unchecked</Code>, <Code>indeterminate</Code>)를 가질 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box>
            <FormControlLabel
              label="Parent"
              control={
                <Checkbox
                  checked={indeterminateCheked[0] && indeterminateCheked[1] && indeterminateCheked[2]}
                  indeterminate={
                    indeterminateCheked[0] !== indeterminateCheked[1] ||
                    indeterminateCheked[0] !== indeterminateCheked[2] ||
                    indeterminateCheked[1] !== indeterminateCheked[2]
                  }
                  onChange={handleChange1}
                />
              }
            />
            {children}
          </Box>
        }
        code={`<Box sx={{ display: 'flex', gap: 2 }}>
<FormControlLabel
  label="Parent"
  control={<Checkbox
    checked={indeterminateCheked[0] && indeterminateCheked[1] && indeterminateCheked[2]}
    indeterminate={indeterminateCheked[0] !== indeterminateCheked[1] || indeterminateCheked[0] !== indeterminateCheked[2] || indeterminateCheked[1] !== indeterminateCheked[2]}
    onChange={handleChange1}
  />}
/>
{children}
</Box>`}
      />

      <Box
        sx={{
          padding: 2,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          backgroundColor: (theme) => alpha(theme.palette.warning.light, 0.1),
          borderRadius: '16px',
          border: (theme) => `1px solid ${alpha(theme.palette.warning.light, 0.3)}`,
        }}
      >
        <Checkbox {...label} icon={<Warning color="warning" fontSize="small" />} />
        <Typography variant="body2">
          indeterminate 설정된 경우, <Code>checked</Code> prop은 폼 제출 값에만 영향을 미치며, 접근성이나 UX에는 영향을 주지 않습니다.
        </Typography>
      </Box>
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        FormGroup
      </Typography>
      <Typography>
        <Code>FormGroup</Code> 은 체크박스들을 그룹으로 묶어서 제어하는 컴포넌트입니다.
      </Typography>
      <SampleBox
        UI={
          <FormControl required error={error} component="fieldset" sx={{ m: 3 }} variant="standard">
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={gilad} onChange={handleFormGroupChange} name="gilad" />} label="Gilad Gray" />
              <FormControlLabel control={<Checkbox checked={jason} onChange={handleFormGroupChange} name="jason" />} label="Jason Killian" />
              <FormControlLabel control={<Checkbox checked={antoine} onChange={handleFormGroupChange} name="antoine" />} label="Antoine Llorca" />
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
        }
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Label placement
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Label placement</FormLabel>
              <FormGroup aria-label="position" row>
                <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
                <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
                <FormControlLabel value="start" control={<Checkbox />} label="Start" labelPlacement="start" />
                <FormControlLabel value="end" control={<Checkbox />} label="End" labelPlacement="end" />
              </FormGroup>
            </FormControl>
          </Box>
        }
        code={`<Box sx={{ display: 'flex', gap: 2 }}>
  <FormControl component="fieldset">
    <FormLabel component="legend">Label placement</FormLabel>
    <FormGroup aria-label="position" row>
      <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
      <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
      <FormControlLabel value="start" control={<Checkbox />} label="Start" labelPlacement="start" />
      <FormControlLabel value="end" control={<Checkbox />} label="End" labelPlacement="end" />
    </FormGroup>
  </FormControl>
</Box>`}
      />
    </>
  );
}
