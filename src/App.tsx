import { JeeewonProvider } from '@jeeewon/ui';
import { Autocomplete } from '@jeeewon/ui';
import { Button, ButtonGroup } from '@jeeewon/ui';
import { Slider } from '@jeeewon/ui';
import { Checkbox } from '@jeeewon/ui';
import { Fab } from '@jeeewon/ui';
import { RadioGroup } from '@jeeewon/ui';
import { Rating } from '@jeeewon/ui';

import { Add } from '@mui/icons-material';
import { Radio } from '@mui/material';
import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { TextField } from '@mui/material';

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

function App() {
  return (
    <JeeewonProvider>
      {/*  */}
      <MuiAutocomplete
        disablePortal
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        freeSolo
      />
      <hr />
      {/* MuiAutocompleteProps<string, false, false, false> 여기서 첫 번째 string이 options array 타입 */}
      <Autocomplete disablePortal options={options} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Movie" />} freeSolo />
      <hr />
      {/*  */}
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <hr />
      {/*  */}
      <Checkbox checked={true} />
      <hr />
      {/*  */}
      <Fab color="primary">
        <Add color="primary" />
      </Fab>
      <hr />
      {/*  */}
      <RadioGroup>
        <Radio value="1" />
        <Radio value="2" />
        <Radio value="3" />
      </RadioGroup>
      <hr />
      {/*  */}
      <Rating value={3} />
      <hr />
      {/*  */}
      <Button variant="contained" color="primary" size="small">
        Small
      </Button>
      <hr />
      <Button variant="contained" color="secondary" size="medium">
        Medium
      </Button>
      <hr />
      <Button variant="contained" color="success" size="large">
        Large
      </Button>
      <hr />
      <Button variant="contained" color="warning" size="large">
        Large
      </Button>
      <hr />
      <Button variant="contained" color="error" size="large">
        Large
      </Button>
      <hr />
      <Button variant="contained" color="info" size="large">
        Large
      </Button>
      <hr />
      <Slider color="primary" />
      <Slider color="secondary" />
      <Slider color="success" />
      <Slider color="warning" />
      <Slider color="error" />
      <Slider color="info" />
      <Slider success />
      <Autocomplete renderInput={() => <input />} options={[]} />
    </JeeewonProvider>
  );
}

export default App;
