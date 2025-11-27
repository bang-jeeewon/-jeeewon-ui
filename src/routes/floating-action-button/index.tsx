import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Code, TitleComponent, SampleBox, Spacing } from '@/_lib/components';
import { Box, Typography, Fab, AppBar, Tabs, Tab, useTheme, green, Zoom } from '@jeeewon/ui';
import { Add, Edit, Navigation, Favorite, ArrowUpward } from '@jeeewon/ui';
import type { SxProps } from '@jeeewon/ui';

export const Route = createFileRoute('/floating-action-button/')({
  component: RouteComponent,
});

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

function RouteComponent() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary' as const,
      sx: fabStyle as SxProps,
      icon: <Add />,
      label: 'Add',
    },
    {
      color: 'secondary' as const,
      sx: fabStyle as SxProps,
      icon: <Edit />,
      label: 'Edit',
    },
    {
      color: 'inherit' as const,
      sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
      icon: <ArrowUpward />,
      label: 'Expand',
    },
  ];

  return (
    <>
      <TitleComponent title="Floating Action Button" description="FAB는 화면의 주요 동작 또는 가장 자주 사용되는 동작을 수행합니다." />
      <Typography>
        FAB는 원형 아이콘의 중앙으로 모든 화면의 맨 앞에 고정되어 있는 버튼입니다. 2 가지 타입이 있습니다: <Code>regular</Code>, <Code>extended</Code>{' '}
        <br />
        화면의 최우선적인 액션을 나타냅니다. 화면당 1개의 FAB를 사용하는 것이 좋습니다.
      </Typography>
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic FAB
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Fab color="primary" aria-label="add">
              <Add />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <Edit />
            </Fab>
            <Fab variant="extended">
              <Navigation sx={{ mr: 1 }} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <Favorite />
            </Fab>
          </Box>
        }
        code={`<Fab color="primary" aria-label="add">
  <Add />
</Fab>
<Fab color="secondary" aria-label="edit">
  <Edit />
</Fab>
<Fab variant="extended">
  <Navigation sx={{ mr: 1 }} />
  Navigate
</Fab>
<Fab disabled aria-label="like">
  <Favorite />
</Fab>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Size
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Fab size="small" color="secondary" aria-label="add">
              <Add />
            </Fab>
            <Fab size="medium" color="secondary" aria-label="add">
              <Add />
            </Fab>
            <Fab color="secondary" aria-label="add">
              <Add />
            </Fab>
          </Box>
        }
        code={`<Fab size="small" color="secondary" aria-label="add">
  <Add />
</Fab>
<Fab size="medium" color="secondary" aria-label="add">
  <Add />
</Fab>
<Fab color="secondary" aria-label="add">
  <Add />
</Fab>`}
      />
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Fab variant="extended" size="small" color="primary">
              <Navigation sx={{ mr: 1 }} />
              Extended
            </Fab>
            <Fab variant="extended" size="medium" color="primary">
              <Navigation sx={{ mr: 1 }} />
              Extended
            </Fab>
            <Fab variant="extended" color="primary">
              <Navigation sx={{ mr: 1 }} />
              Extended
            </Fab>
          </Box>
        }
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Animation
      </Typography>
      <Typography>
        FAB는 기본적으로 확장되는 형태로 화면에 애니메이션으로 나타납니다. <br />
        FAB는 다수의 화면에서(탭으로 구성된 화면 경우) 짧게 사라졌다가 다시 나타나는 애니메이션을 제공합니다. <br />
        끝나는 애니메이션과 시작하는 애니메이션이 동시에 시작되므로, <Code>enterDelay</Code> prop을 사용해 기존 FAB의 애니메이션이 끝난 후 새로운
        FAB가 나타나도록 합니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ bgcolor: 'background.paper', width: 500, position: 'relative', minHeight: 200 }}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
            {fabs.map((fab, index) => (
              <Zoom
                key={fab.color}
                in={value === index}
                timeout={transitionDuration}
                style={{
                  transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                }}
                unmountOnExit
              >
                <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                  {fab.icon}
                </Fab>
              </Zoom>
            ))}
          </Box>
        }
      />
    </>
  );
}
