import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Stack,
  Autocomplete,
  createFilterOptions,
} from '@jeeewon/ui';
import Spacing from '@/_lib/components/Spacing';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

const filter = createFilterOptions<string>();

/** / 메인 페이지  */
function RouteComponent() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState<string>('');

  return (
    <>
      {/* 소개 섹션 */}
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Jeeewon Design System
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 4 }}>
        MUI(Material-UI) 기반의 커스텀 디자인 시스템 라이브러리입니다. 일관된 디자인과 사용자 경험을 제공하는 React 컴포넌트 모음을 제공합니다.
      </Typography>
      <Divider />
      <Spacing size={32} />

      {/* 기본 버튼 예제 */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        기본 버튼
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 4 }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="text" color="primary">
          Text
        </Button>
      </Stack>
      <Divider />
      <Spacing size={32} />

      {/* 폼 입력 예제 */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        폼 입력
      </Typography>
      <Box sx={{ maxWidth: 400, marginBottom: 4 }}>
        <Stack spacing={2}>
          <Autocomplete
            value={email}
            onChange={(_, newValue) => {
              if (newValue !== null) {
                setEmail(newValue);
              } else {
                setEmail('');
              }
            }}
            popupIcon={null}
            /** 옵션 필터링과 새 옵션 추가를 제어함
             * options: options prop에서 받은 원본 배열
             * params: { inputValue } 등 필터링 관련 정보
             * @returns 표시할 옵션 배열 */
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;

              // Suggest the creation of email type
              const isExisting = options.some((option) => inputValue === option);
              if (inputValue !== '' && !isExisting) {
                filtered.push(`${inputValue}@gmail.com`);
                filtered.push(`${inputValue}@naver.com`);
                filtered.push(`${inputValue}@hanmail.net`);
              }

              return filtered;
            }}
            /** 각 옵션을 표시할 문자열을 반환
             * option: 옵션 객체/값
             * @returns 표시할 문자열 */
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              return option || '';
            }}
            /** 선택된 값value과 옵션option이 같은지 비교
             * option: 목록의 옵션
             * value: 현재 선택된 값 (`email` state)
             * @returns 같으면 `true`, 다르면 `false` */
            isOptionEqualToValue={(option, value) => option === value}
            renderInput={(params) => <TextField {...params} label="이메일" type="email" fullWidth />}
            options={[]}
          />
          <TextField label="비밀번호" type="password" fullWidth />
          <Button variant="contained" color="primary" fullWidth>
            로그인
          </Button>
        </Stack>
      </Box>
      <Divider />
      <Spacing size={32} />

      {/* 카드 레이아웃 예제 */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        카드 레이아웃
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 4, flexWrap: 'wrap' }}>
        <Card sx={{ minWidth: 300 }}>
          <CardHeader title="카드 제목" />
          <CardContent>
            <Typography>카드 내용입니다.</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 300 }}>
          <CardHeader title="다른 카드" />
          <CardContent>
            <Typography>다른 카드의 내용입니다.</Typography>
          </CardContent>
        </Card>
      </Box>
      <Divider />
      <Spacing size={32} />

      {/* 다이얼로그 예제 */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        다이얼로그
      </Typography>
      <Button variant="contained" color="error" onClick={() => setDialogOpen(true)} sx={{ marginBottom: 4 }}>
        다이얼로그 열기
      </Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>확인</DialogTitle>
        <DialogContent>
          <Typography>정말 삭제하시겠습니까?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>취소</Button>
          <Button color="error" onClick={() => setDialogOpen(false)}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
      <Divider />
      <Spacing size={32} />

      {/* 색상 팔레트 */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        색상 팔레트
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 4, flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Box>
    </>
  );
}
