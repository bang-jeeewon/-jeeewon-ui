import { createFileRoute } from '@tanstack/react-router';
import { TitleComponent, Spacing, SampleBox } from '@/_lib/components';
import { Typography, List, ListItemButton, ListItemIcon, ListItemText, Checkbox, Button, Paper, Grid } from '@jeeewon/ui';
import { useState } from 'react';

export const Route = createFileRoute('/transfer-list/')({
  component: RouteComponent,
});

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.includes(value));
}

function RouteComponent() {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const [left, setLeft] = useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items: readonly number[]) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.map((value: number) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
                <ListItemText id={labelId} primary={`List item ${value + 1}`} />
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <>
      <TitleComponent title="Transfer List" description="유저가 하나 이상의 항복을 리스트간 옮길 수 있습니다." />
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic transfer list
      </Typography>
      <SampleBox
        UI={
          <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid>{customList(left)} </Grid>
            <Grid>
              <Grid container direction="column" sx={{ alignItems: 'center' }}>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleAllRight}
                  disabled={left.length === 0}
                  aria-label="move all right"
                >
                  ≫
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  &gt;
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  &lt;
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleAllLeft}
                  disabled={right.length === 0}
                  aria-label="move all left"
                >
                  ≪
                </Button>
              </Grid>
            </Grid>
            <Grid>{customList(right)} </Grid>
          </Grid>
        }
        code={`<Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
  <Grid>{customList(left)} </Grid>
  <Grid>
    <Grid container direction="column" sx={{ alignItems: 'center' }}>
      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleAllRight} disabled={left.length === 0} aria-label="move all right">
        ≫
      </Button>
      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedRight} disabled={leftChecked.length === 0} aria-label="move selected right">
        &gt;
      </Button>
      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedLeft} disabled={rightChecked.length === 0} aria-label="move selected left">
        &lt;
      </Button>
      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleAllLeft} disabled={right.length === 0} aria-label="move all left">
        ≪
      </Button>
    </Grid>
  </Grid>
  <Grid>{customList(right)} </Grid>
</Grid>`}
      />
    </>
  );
}
