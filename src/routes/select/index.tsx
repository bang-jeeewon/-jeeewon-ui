import { Code, SampleBox, Spacing, TitleComponent } from '@/_lib/components';
import { Box, FormControl, Select, Typography, InputLabel, MenuItem, NativeSelect, Checkbox, ListItemText, Chip } from '@jeeewon/ui';
import type { SelectChangeEvent, Theme } from '@jeeewon/ui';
import { useTheme } from '@jeeewon/ui';
import { OutlinedInput } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState, type ChangeEvent } from 'react';

export const Route = createFileRoute('/select/')({
  component: RouteComponent,
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

function RouteComponent() {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value as string);
  };

  const handleSelectChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeMultiple = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;

    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <>
      <TitleComponent title="Select" description="여러 옵션 중에서 사용자 입력을 수집하는 데 사용됩니다." />
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic select
      </Typography>
      <Typography>메뉴는 뷰포트 하단에 가까이 있지 않은 한, 메뉴를 트리거한 요소 아래에 표시됩니다.</Typography>
      <SampleBox
        UI={
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        }
        code={`<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Age</InputLabel>
<Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
<MenuItem value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl>
</Box>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Native select
      </Typography>
      <Typography>native select를 사용해서 사용자 경험이 좋은 셀렉트 박스를 만들 수 있습니다.</Typography>
      <SampleBox
        UI={
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Age
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
          </Box>
        }
        code={`<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
<InputLabel variant="standard" htmlFor="uncontrolled-native">
Age
</InputLabel>
<NativeSelect defaultValue={30} inputProps={{ name: 'age', id: 'uncontrolled-native' }}>
<option value={10}>Ten</option>
<option value={20}>Twenty</option>
<option value={30}>Thirty</option>
</NativeSelect>
</FormControl>
</Box>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Multiple select
      </Typography>
      <Typography>
        <Code>Select</Code> 컴포넌트는 <Code>multiple</Code> prop으로 다중선택을 지원합니다. <br />
        단일 선택과 동일하게, <Code>onChange</Code> 콜백에서 <Code>event.target.value</Code>로 새로운 값을 가져올 수 있습니다. 값은 항상 배열
        형태입니다.
      </Typography>
      <Spacing size={16} />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Default
      </Typography>
      <SampleBox
        UI={
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleSelectChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        }
        code={`<div>
  <FormControl sx={{ m: 1, width: 300 }}>
    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
    <Select labelId="demo-multiple-name-label" id="demo-multiple-name" multiple value={personName} onChange={handleSelectChange} input={<OutlinedInput label="Name" />} MenuProps={MenuProps}>
      {names.map((name) => (
      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
        {name}
      </MenuItem>
    ))}
    </MenuItem>
    </Select>
  </FormControl>
</div>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Checkmarks
      </Typography>
      <SampleBox
        UI={
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleSelectChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected: unknown) => (selected as string[]).join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.includes(name)} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        }
        code={`<div>
  <FormControl sx={{ m: 1, width: 300 }}>
    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
    <Select labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" multiple value={personName} onChange={handleSelectChange} input={<OutlinedInput label="Tag" />} renderValue={(selected: unknown) => (selected as string[]).join(', ')} MenuProps={MenuProps}>
      {names.map((name) => (
      <MenuItem key={name} value={name}>
        <Checkbox checked={personName.includes(name)} />
        <ListItemText primary={name} />
      </MenuItem>
    ))}
    </Select>
  </FormControl>
</div>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Chip
      </Typography>
      <SampleBox
        UI={
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleSelectChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected: unknown) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.includes(name)} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        }
        code={`<div>
  <FormControl sx={{ m: 1, width: 300 }}>
    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
    <Select labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" multiple value={personName} onChange={handleSelectChange} input={<OutlinedInput label="Tag" />} renderValue={(selected: unknown) => (
      <Box>
        {(selected as string[]).map((value) => (
          <Chip key={value} label={value} />
        ))}
      </Box>
    )} MenuProps={MenuProps}>
      {names.map((name) => (
      <MenuItem key={name} value={name}>
        <Checkbox checked={personName.includes(name)} />
        <ListItemText primary={name} />
      </MenuItem>
    ))}
    </Select>
  </FormControl>
</div>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Native
      </Typography>
      <SampleBox
        UI={
          <div>
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
              <InputLabel shrink htmlFor="select-multiple-native">
                Native
              </InputLabel>
              <Select<string[]>
                multiple
                native
                value={personName}
                // @ts-expect-error Typings are not considering `native`
                onChange={handleChangeMultiple}
                label="Native"
                inputProps={{
                  id: 'select-multiple-native',
                }}
              >
                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
        }
        code={`<div>
  <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
    <InputLabel shrink htmlFor="select-multiple-native">
      Native
    </InputLabel>
    <Select multiple native value={personName} onChange={handleChangeMultiple} label="Native" inputProps={{ id: 'select-multiple-native' }}>
      {names.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </Select>
  </FormControl>
</div>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Grouping
      </Typography>
      <Typography>
        <Code>ListSubheader</Code> 컴포넌트나 <Code>optgroup</Code> 태그로 그룹화할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="Grouping">
              <option aria-label="None" value="" />
              <optgroup label="Category 1">
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
              </optgroup>
              <optgroup label="Category 2">
                <option value={3}>Option 3</option>
                <option value={4}>Option 4</option>
              </optgroup>
            </Select>
          </FormControl>
        }
        code={`<FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
  <Select native defaultValue="" id="grouped-native-select" label="Grouping">
    <option aria-label="None" value="" />
    <optgroup label="Category 1">
      <option value={1}>Option 1</option>
      <option value={2}>Option 2</option>
    </optgroup>
    <optgroup label="Category 2">
      <option value={3}>Option 3</option>
      <option value={4}>Option 4</option>
    </optgroup>
  </Select>
</FormControl>`}
      />
    </>
  );
}
