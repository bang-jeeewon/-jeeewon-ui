import { useState } from 'react';
import { Spacing, TitleComponent, Code, SampleBox } from '@/_lib/components';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography, Box, pink, FormHelperText, Button } from '@jeeewon/ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/radio-group/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [value, setValue] = useState('female');
  const [selectedValue, setSelectedValue] = useState('a');
  const [showErrorValue, setShowErrorValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose wisely');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSelectedValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleSelectedValueChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (showErrorValue === 'best') {
      setHelperText('좋은 선택이에요!');
      setError(false);
    } else if (showErrorValue === 'worst') {
      setHelperText('다시 생각해보세요!');
      setError(true);
    } else {
      setHelperText('선택을 해주세요!');
      setError(true);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowErrorValue((event.target as HTMLInputElement).value);
    setHelperText('');
    setError(false);
  };

  return (
    <>
      <TitleComponent title="Radio Group" description="세트당 하나의 옵션을 선택하게 합니다." />
      <Typography>
        라디오 버튼은 모든 가능한 옵션을 보여줄 필요가 있을 때 사용합니다. 옵션들이 접혀진 상태로 보이게 하려면, Select 컴포넌트를 사용하세요.
      </Typography>
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Radio group
      </Typography>
      <Typography>
        <Code>RadioGroup</Code>은 <Code>Radio</Code> 컴포넌트들을 그룹으로 묶어서 제어하는 컴포넌트입니다.
      </Typography>
      <SampleBox
        UI={
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        }
        code={`<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Direction
      </Typography>
      <Typography>
        <Code>row</Code> prop을 사용하여 라디오 버튼들을 가로로 배치할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
            </RadioGroup>
          </FormControl>
        }
        code={`<FormControl>
  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
  </RadioGroup>
</FormControl>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Controlled
      </Typography>
      <Typography>
        <Code>value</Code>, <Code>onChange</Code> props를 사용하여 라디오 버튼의 상태를 제어할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        }
        code={`<FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Standalone radio buttons
      </Typography>
      <Typography>
        <Code>Radio</Code> 컴포넌트를 사용하여 단독으로 라디오 버튼을 사용할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleSelectedValueChange}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleSelectedValueChange}
              value="b"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />
          </Box>
        }
        code={`<Radio
checked={selectedValue === 'a'}
onChange={handleSelectedValueChange}
value='a'
name='radio-buttons'
inputProps={{ 'aria-label': 'A' }}
/>
<Radio
checked={selectedValue === 'b'}
onChange={handleSelectedValueChange}
value='b'
name='radio-buttons'
inputProps={{ 'aria-label': 'B' }}
/>
`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Size
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Radio {...controlProps('a')} size="small" />
            <Radio {...controlProps('b')} />
            <Radio
              {...controlProps('c')}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
              }}
            />
          </Box>
        }
        code={`<Radio {...controlProps('a')} size="small" />
<Radio {...controlProps('b')} />
<Radio
  {...controlProps('c')}
  sx={{
    '& .MuiSvgIcon-root': {
      fontSize: 28,
    },
  }}
/>
`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Color
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Radio {...controlProps('a')} />
            <Radio {...controlProps('b')} color="secondary" />
            <Radio {...controlProps('c')} color="success" />
            <Radio {...controlProps('d')} color="default" />
            <Radio
              {...controlProps('e')}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            />
          </Box>
        }
        code={`<Radio {...controlProps('a')} />
<Radio {...controlProps('b')} color="secondary" />
<Radio {...controlProps('c')} color="success" />
<Radio {...controlProps('d')} color="default" />
<Radio {...controlProps('e')} sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Show error
      </Typography>
      <Typography>
        라디오 버튼은 기본적으로 하나의 옵션을 선택해야 합니다. 만약 하나의 옵션을 선택하지 않았다면, 에러를 표시할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
              <FormLabel>퀴즈입니다! Jeeewon Design System은...</FormLabel>
              <RadioGroup aria-labelledby="demo-error-radios" name="quiz" value={showErrorValue} onChange={handleRadioChange}>
                <FormControlLabel value="best" control={<Radio />} label="좋은 선택이에요!" />
                <FormControlLabel value="worst" control={<Radio />} label="다시 생각해보세요!" />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button type="submit" variant="contained" sx={{ mt: 1, mr: 1 }}>
                제출하기
              </Button>
            </FormControl>
          </form>
        }
        code={`<form onSubmit={handleSubmit}>
  <FormControl sx={{ m: 3 }} error={error} variant="standard">
    <FormLabel>퀴즈입니다! Jeeewon Design System은...</FormLabel>
    <RadioGroup aria-labelledby="demo-error-radios" name="quiz" value={showErrorValue} onChange={handleRadioChange}>
      <FormControlLabel value="best" control={<Radio />} label="좋은 선택이에요!" />
      <FormControlLabel value="worst" control={<Radio />} label="다시 생각해보세요!" />
    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
    <Button type="submit" variant="contained" sx={{ mt: 1, mr: 1 }}>
      제출하기
    </Button>
  </FormControl>
</form>`}
      />
    </>
  );
}
