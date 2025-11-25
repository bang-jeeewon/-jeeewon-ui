import { createFileRoute } from '@tanstack/react-router';
import { TitleComponent, Code, SampleBox } from '@/_lib/components';
import { Box, Button, ButtonGroup, MenuItem, MenuList, ClickAwayListener, Paper, Typography, Popper, Grow } from '@jeeewon/ui';
import { ArrowDropDown, Save } from '@jeeewon/ui';
import type { TransitionProps } from '@mui/material/transitions';
import { useRef, useState, useEffect } from 'react';

interface PopperChildrenProps {
  TransitionProps?: TransitionProps & {
    onEnter?: () => void;
    onExited?: () => void;
  };
  placement: string;
}

export const Route = createFileRoute('/button-group/')({
  component: RouteComponent,
});

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

const buttons = [<Button key="one">One</Button>, <Button key="two">Two</Button>, <Button key="three">Three</Button>];

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    if (anchorRef.current) {
      setAnchorEl(anchorRef.current);
    }
  }, []);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains((event.target as HTMLElement) || null)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <TitleComponent title="Button Group" description="Button Group은 관계된 버튼들을 묶어서 표시하는 데 사용합니다." />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic button group
      </Typography>
      <Typography>
        <Code>ButtonGroup</Code> 컴포넌트로 버튼들을 감싸면 그룹으로 묶을 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        }
        code={`<ButtonGroup variant="contained" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Button variants
      </Typography>
      <Typography>모든 표준 버튼 형태를 지원합니다.</Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
        }
        code={`<ButtonGroup variant="outlined" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Sizes and colors
      </Typography>
      <Typography>
        <Code>size</Code>와 <Code>color</Code> prop을 사용하여 버튼 그룹의 크기와 색상을 조정할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <ButtonGroup size="small" aria-label="Small button group">
              {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="Medium-sized button group">
              {buttons}
            </ButtonGroup>
            <ButtonGroup size="large" color="success" aria-label="Large button group">
              {buttons}
            </ButtonGroup>
          </Box>
        }
        code={`<ButtonGroup size="small" aria-label="Small button group">
  {buttons}
</ButtonGroup>
<ButtonGroup color="secondary" aria-label="Medium-sized button group">
  {buttons}
</ButtonGroup>
<ButtonGroup size="large" color="success" aria-label="Large button group">
  {buttons}
</ButtonGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Vertical group
      </Typography>
      <Typography>
        <Code>orientation</Code> prop을 사용하여 버튼 그룹을 수직으로 배치할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <ButtonGroup orientation="vertical" aria-label="Vertical button group">
              {buttons}
            </ButtonGroup>
            <ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="contained">
              {buttons}
            </ButtonGroup>
            <ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="text">
              {buttons}
            </ButtonGroup>
          </Box>
        }
        code={`<ButtonGroup orientation="vertical" aria-label="Vertical button group">
  {buttons}
</ButtonGroup>
<ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="contained">
  {buttons}
</ButtonGroup>
<ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="text">
  {buttons}
</ButtonGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Split button
      </Typography>
      <Typography>
        <Code>ButtonGroup</Code>은 분할 버튼을 만들 수도 있습니다. 드롭다운은 버튼 동작을 변경하거나, 관련 동작을 바로 실행하는 데 사용할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="Button group with a nested menu">
              <Button onClick={handleClick}>{options[selectedIndex]}</Button>
              <Button
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDown />
              </Button>
            </ButtonGroup>
            <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }: PopperChildrenProps) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        }
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Disabled elevation
      </Typography>
      <Typography>
        <Code>disableElevation</Code> prop으로 elevation을 비활성화할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <ButtonGroup disableElevation variant="contained" aria-label="Disabled button group">
            <Button>One</Button>
            <Button>Two</Button>
          </ButtonGroup>
        }
        code={`<ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled button group"
>
  <Button>One</Button>
  <Button>Two</Button>
</ButtonGroup>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Loading
      </Typography>
      <Typography>
        <Code>loading</Code> prop으로 로딩 상태를 설정할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <ButtonGroup variant="outlined" aria-label="Loading button group">
            <Button>Submit</Button>
            <Button>Fetch data</Button>
            <Button loading loadingPosition="start" startIcon={<Save />}>
              Save
            </Button>
          </ButtonGroup>
        }
        code={`<ButtonGroup variant="outlined" aria-label="Loading button group">
  <Button>Submit</Button>
  <Button>Fetch data</Button>
  <Button loading loadingPosition="start" startIcon={<Save />}>
    Save
  </Button>
</ButtonGroup>`}
      />
    </>
  );
}
