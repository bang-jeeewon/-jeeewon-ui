import { useState } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { CssBaseline, JeeewonProvider } from '@jeeewon/ui';
import { Container } from '@jeeewon/ui';
import Menu from '../_lib/components/Menu';
import { styled } from '@mui/material/styles';

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
      <Container>
        <Menu open={open} setOpen={setOpen} />
        <Main open={open}>
          Design SystemDesign SystemDesign SystemDesign SystemDesign SystemDesign SystemDesign System Design SystemDesign SystemDesign SystemDesign
          SystemDesign SystemDesign SystemDesign System Design SystemDesign SystemDesign SystemDesign SystemDesign SystemDesign SystemDesign System
          Design SystemDesign SystemDesign SystemDesign SystemDesign SystemDesign SystemDesign System
          <Outlet />
        </Main>
      </Container>
    </JeeewonProvider>
  );
}
