# @jeeewon/ui

MUI(Material-UI) 기반의 커스텀 디자인 시스템 라이브러리입니다. 일관된 디자인과 사용자 경험을 제공하는 React 컴포넌트 모음을 제공합니다.

## 📦 설치

```bash
npm install @jeeewon/ui
# 또는
yarn add @jeeewon/ui
# 또는
pnpm add @jeeewon/ui
```

## 🔧 필수 의존성

이 라이브러리는 다음 peer dependencies가 필요합니다:

- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.1
- `@fontsource/roboto`: ^5.2.8
- `@mui/icons-material`: ^7.3.5
- `@mui/material`: ^7.3.5
- `react`: ^19.2.0
- `react-dom`: ^19.2.0

## 🚀 시작하기

### 1. Provider 설정

애플리케이션의 최상위에 `JeeewonProvider`를 추가하세요:

```tsx
import { JeeewonProvider } from '@jeeewon/ui';

function App() {
  return <JeeewonProvider>{/* Your app components */}</JeeewonProvider>;
}
```

### 2. 컴포넌트 사용

```tsx
import { Button, TextField, Card } from '@jeeewon/ui';

function MyComponent() {
  return (
    <Card>
      <TextField label="이름" />
      <Button variant="contained" color="primary">
        제출
      </Button>
    </Card>
  );
}
```

## 🎨 디자인 시스템

### 색상 팔레트

라이브러리는 다음 색상 팔레트를 제공합니다:

- **Primary (Carrot)**: `#ff6600` - 주요 액션 및 브랜드 색상
- **Secondary (Blue)**: `#5e98fe` - 보조 액션 색상
- **Success (Green)**: `#10ab7d` - 성공 상태
- **Error (Red)**: `#fc6a66` - 에러 상태
- **Warning (Yellow)**: `#c49725` - 경고 상태
- **Info (Gray)**: `#b0b3ba` - 정보 표시

각 색상은 100-900 스케일을 제공하며, `light`, `main`, `dark` 변형을 지원합니다.

### 테마

커스텀 테마는 MUI의 `createTheme`을 기반으로 구성되어 있으며, 모든 컴포넌트에 일관된 스타일을 적용합니다.

## 📚 컴포넌트

### Input 컴포넌트

- `Autocomplete` - 자동완성 입력 필드
- `Button` - 버튼 컴포넌트
- `ButtonGroup` - 버튼 그룹
- `Checkbox` - 체크박스
- `Fab` - Floating Action Button
- `RadioGroup` - 라디오 버튼 그룹
- `Rating` - 평점 컴포넌트
- `Select` - 선택 드롭다운
- `Switch` - 스위치 토글
- `Slider` - 슬라이더
- `TextField` - 텍스트 입력 필드
- `ToggleButton` - 토글 버튼
- `ToggleButtonGroup` - 토글 버튼 그룹

### Data Display 컴포넌트

- `Avatar` - 아바타 이미지
- `Badge` - 배지/뱃지
- `Chip` - 칩 컴포넌트
- `Divider` - 구분선
- `List` - 리스트 컨테이너
- `ListItem` - 리스트 아이템
- `ListItemButton` - 리스트 아이템 버튼
- `ListItemIcon` - 리스트 아이템 아이콘
- `ListItemText` - 리스트 아이템 텍스트
- `ListSubheader` - 리스트 서브헤더
- `ListItemAvatar` - 리스트 아이템 아바타
- `Table` - 테이블 컴포넌트
- `TableBody` - 테이블 본문
- `TableCell` - 테이블 셀
- `TableContainer` - 테이블 컨테이너
- `TableFooter` - 테이블 푸터
- `TableHead` - 테이블 헤더
- `TablePagination` - 테이블 페이지네이션
- `TableRow` - 테이블 행
- `TableSortLabel` - 테이블 정렬 라벨
- `Tooltip` - 툴팁
- `Typography` - 텍스트 타이포그래피

### Feedback 컴포넌트

- `Alert` - 알림 메시지
- `AlertTitle` - 알림 제목
- `Backdrop` - 백드롭 오버레이
- `Dialog` - 다이얼로그 모달
- `DialogActions` - 다이얼로그 액션
- `DialogContent` - 다이얼로그 내용
- `DialogContentText` - 다이얼로그 텍스트
- `DialogTitle` - 다이얼로그 제목
- `CircularProgress` - 원형 프로그레스
- `LinearProgress` - 선형 프로그레스
- `Skeleton` - 스켈레톤 로딩
- `Snackbar` - 스낵바 알림
- `SnackbarContent` - 스낵바 내용

### Surfaces 컴포넌트

- `Accordion` - 아코디언
- `AccordionActions` - 아코디언 액션
- `AccordionDetails` - 아코디언 상세
- `AccordionSummary` - 아코디언 요약
- `AppBar` - 앱 바
- `Card` - 카드 컴포넌트
- `CardActions` - 카드 액션
- `CardActionArea` - 카드 액션 영역
- `CardContent` - 카드 내용
- `CardHeader` - 카드 헤더
- `CardMedia` - 카드 미디어
- `Paper` - 페이퍼 컴포넌트

### Navigation 컴포넌트

- `BottomNavigation` - 하단 네비게이션
- `BottomNavigationAction` - 하단 네비게이션 액션
- `Breadcrumbs` - 브레드크럼
- `Drawer` - 드로어 사이드바
- `Link` - 링크 컴포넌트
- `Menu` - 메뉴
- `MenuItem` - 메뉴 아이템
- `MenuList` - 메뉴 리스트
- `Pagination` - 페이지네이션
- `PaginationItem` - 페이지네이션 아이템
- `SpeedDial` - 스피드 다이얼
- `SpeedDialIcon` - 스피드 다이얼 아이콘
- `SpeedDialAction` - 스피드 다이얼 액션
- `Stepper` - 스텝퍼
- `Step` - 스텝
- `StepButton` - 스텝 버튼
- `StepConnector` - 스텝 커넥터
- `StepIcon` - 스텝 아이콘
- `StepLabel` - 스텝 라벨
- `MobileStepper` - 모바일 스텝퍼
- `Tabs` - 탭 컨테이너
- `Tab` - 탭 아이템

### Layout 컴포넌트

- `Box` - 박스 레이아웃
- `Container` - 컨테이너
- `Grid` - 그리드 레이아웃
- `Stack` - 스택 레이아웃
- `ImageList` - 이미지 리스트
- `ImageListItem` - 이미지 리스트 아이템
- `ImageListItemBar` - 이미지 리스트 아이템 바

### Utils 컴포넌트

- `ClickAwayListener` - 외부 클릭 감지
- `CssBaseline` - CSS 기본 스타일 리셋

### Icons

- `AddIcon` - 추가 아이콘
- `DeleteIcon` - 삭제 아이콘

## 💡 사용 예시

### 기본 버튼

```tsx
import { Button } from '@jeeewon/ui';

<Button variant="contained" color="primary">
  클릭하세요
</Button>;
```

### 폼 입력

```tsx
import { TextField, Button } from '@jeeewon/ui';

function LoginForm() {
  return (
    <>
      <TextField label="이메일" type="email" />
      <TextField label="비밀번호" type="password" />
      <Button variant="contained" color="primary">
        로그인
      </Button>
    </>
  );
}
```

### 카드 레이아웃

```tsx
import { Card, CardContent, CardHeader, Typography } from '@jeeewon/ui';

<Card>
  <CardHeader title="카드 제목" />
  <CardContent>
    <Typography>카드 내용입니다.</Typography>
  </CardContent>
</Card>;
```

### 다이얼로그

```tsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@jeeewon/ui';

function ConfirmDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>확인</DialogTitle>
      <DialogContent>정말 삭제하시겠습니까?</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button color="error" onClick={onClose}>
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}
```

## 🛠️ 개발

### 빌드

```bash
yarn build
```

### 타입 정의 생성

```bash
yarn build:tsc
```

## 📄 라이선스

MIT

## 📝 버전

현재 버전: `0.3.5`
