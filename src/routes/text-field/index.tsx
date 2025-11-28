import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { TitleComponent, Spacing, Code, SampleBox } from '@/_lib/components';
import {
  TextField,
  Typography,
  Box,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  FormHelperText,
  IconButton,
  OutlinedInput,
} from '@jeeewon/ui';
import { AccountCircle, VisibilityOff, Visibility } from '@jeeewon/ui';

export const Route = createFileRoute('/text-field/')({
  component: RouteComponent,
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <TitleComponent title="Text Field" description="유저가 텍스트를 입력하거나 수정할 수 있습니다." />
      <Typography>텍스트 필드는 폼과 다이얼로그에서 사용됩니다.</Typography>
      <Typography>
        <Code>TextField</Code>는 <Code>FormControl</Code>, <Code>Input</Code>, <Code>FilledInput</Code>, <Code>InputLabel</Code>,
        <Code>OutlinedInput</Code>, <Code>FormHelperText</Code>의 작은 컴포넌트들로 구성되어 있습니다.
      </Typography>
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic TextField
      </Typography>
      <Typography>
        <Code>TextField</Code> 컴포넌트는 label, input, help text를 제어할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </Box>
        }
        code={`<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Form Props
      </Typography>
      <Typography>
        <Code>required</Code>, <Code>disabled</Code>, <Code>type</Code> 등의 폼 관련 속성을 제어할 수 있습니다. <Code>helperText</Code>를 통해 필드
        입력에 대한 추가 정보를 제공할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <div>
              <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
              <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
              <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
              <TextField id="outlined-search" label="Search field" type="search" />
              <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" />
            </div>
          </Box>
        }
        code={`<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
  <div>
    <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
    <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
    <TextField id="outlined-read-only-input" label="Read Only" defaultValue="Hello World" slotProps={{ input: { readOnly: true } }} />
    <TextField id="outlined-search" label="Search field" type="search" />
    <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" />
  </div>
</Box>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Validation
      </Typography>
      <Typography>
        <Code>error</Code>로 오류 상태를 제어할 수 있습니다. <Code>helperText</Code> prop을 통해 유저에게 피드백을 제공할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <div>
              <TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
              <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." />
            </div>
          </Box>
        }
        code={`<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
  <div>
    <TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
    <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." />
  </div>
</Box>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Multiline
      </Typography>
      <SampleBox
        UI={
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <div>
              <TextField id="outlined-multiline-flexible" label="Multiline" multiline maxRows={4} />
              <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" />
            </div>
          </Box>
        }
        code={`<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
  <div>
    <TextField id="outlined-multiline-flexible" label="Multiline" multiline maxRows={4} />
    <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" />
  </div>
</Box>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Select, Native select
      </Typography>
      <SampleBox
        UI={
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <TextField id="outlined-select-currency" select label="Select" defaultValue="EUR" helperText="Please select your currency">
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Native Select"
              defaultValue="EUR"
              helperText="Please select your currency"
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
        }
        code={`<Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
  <TextField id="outlined-select-currency" select label="Select" defaultValue="EUR" helperText="Please select your currency">
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
  <TextField id="outlined-select-currency-native" select label="Select" defaultValue="EUR" helperText="Please select your currency" slotProps={{ select: { native: true } }}>
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </TextField>
</Box>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Icons
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField
              id="input-with-icon-textfield"
              label="TextField"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="With sx" variant="standard" />
            </Box>
          </Box>
        }
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Input Adornments
      </Typography>
      <Typography>
        <Code>InputAdornment</Code>를 사용하여, 입력 필드에 접두사, 접미사 또는 동작을 추가할 수 있습니다. 예를 들어, 아이콘 버튼을 사용하여
        비밀번호를 숨기거나 표시할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <TextField
                label="With normal TextField"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  },
                }}
              />
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? 'hide the password' : 'display the password'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" startAdornment={<InputAdornment position="start">$</InputAdornment>} label="Amount" />
              </FormControl>
            </div>
          </Box>
        }
      />
    </>
  );
}
