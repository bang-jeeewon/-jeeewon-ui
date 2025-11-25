import { useState } from 'react';
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { CssBaseline, JeeewonProvider, Box } from '@jeeewon/ui';
import { Container } from '@jeeewon/ui';
import { Menu, IndexComponent } from '@/_lib/components';
import { styled, GlobalStyles } from '@mui/material';

export const Route = createRootRoute({
  component: RootComponent,
});

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  height: 'calc(100vh)',
  padding: theme.spacing(3),
  paddingBottom: 0, // 하단 padding 제거하여 공간 확보
  overflow: 'hidden', // Main 자체는 스크롤 안됨
  boxSizing: 'border-box',
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

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  height: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
}));

const ContentArea = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0, // flex item이 overflow 방지
  overflowY: 'auto',
  overflowX: 'hidden',
  height: `calc(100% - ${theme.spacing(8)})`, // marginTop을 고려한 높이 조정
  marginTop: theme.spacing(8),
  paddingBottom: theme.spacing(3), // 하단 여백 추가
  boxSizing: 'border-box',
}));

const SidebarArea = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    display: 'none', // 모바일에서는 숨김
  },
}));

function RootComponent() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
      <Container sx={{ margin: 0, padding: 0 }} maxWidth={false}>
        <Menu open={open} setOpen={setOpen} />
        <Main open={open}>
          <ContentWrapper>
            <ContentArea id="main-content">
              <Outlet />
            </ContentArea>
            <SidebarArea>
              <IndexComponent key={location.pathname} selector="#main-content" />
            </SidebarArea>
          </ContentWrapper>
        </Main>
      </Container>
    </JeeewonProvider>
  );
}
