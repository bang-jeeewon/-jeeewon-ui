import { useState } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { CssBaseline, JeeewonProvider } from '@jeeewon/ui';
import { Container } from '@jeeewon/ui';
import { Menu } from '@/_lib/components';
import { styled, GlobalStyles } from '@mui/material';

export const Route = createRootRoute({
  component: RootComponent,
});

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  paddingTop: `calc(64px + ${theme.spacing(3)})`,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0, // Drawer가 닫혀있을 때는 원래 위치
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`, // Drawer가 열려있을 때 오른쪽으로 밀림
      },
    },
  ],
}));

function RootComponent() {
  const [open, setOpen] = useState(false);

  return (
    <JeeewonProvider>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*': {
            // Chrome, Safari, Edge
            '&::-webkit-scrollbar': {
              width: '4px',
              height: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              '&:hover': {
                background: '#555',
              },
            },
            // 위/아래 화살표 제거
            '&::-webkit-scrollbar-button': {
              display: 'none',
            },
            // Firefox
            scrollbarWidth: 'thin',
            scrollbarColor: '#888 transparent',
          },
        }}
      />
      <Container sx={{ margin: 0, padding: 0 }}>
        <Menu open={open} setOpen={setOpen} />
        <Main open={open}>
          <Outlet />
        </Main>
      </Container>
    </JeeewonProvider>
  );
}
