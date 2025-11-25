import { Divider, Typography, Box, Button, IconButton, Tooltip, badgeClasses } from '@jeeewon/ui';
import { Add, Delete, Alarm, AddShoppingCart, Fingerprint, Badge, ShoppingCart, CloudUpload } from '@jeeewon/ui';
import { SampleBox, Code, Spacing, CodeBlock } from '@/_lib/components';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { styled } from '@jeeewon/ui';

export const Route = createFileRoute('/button/')({
  component: RouteComponent,
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const buttonsUI = ['Modal Windows', 'Forms', 'Cards', 'Toolbars'];

function RouteComponent() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
        Button
      </Typography>
      <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
        버튼은 사용자가 한 번의 탭으로 작업을 수행하고 선택할 수 있게 해줍니다.
      </Typography>
      <Divider />
      <Spacing size={32} />
      <Typography sx={{ marginBottom: 1 }}>버튼은 사용자가 수행할 수 있는 작업을 나타냅니다.</Typography>
      {buttonsUI.map((ui) => (
        <Box key={ui} sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
          <Typography>•</Typography>
          <Typography sx={{ marginLeft: 1 }}>{ui}</Typography>
        </Box>
      ))}
      <Spacing size={32} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Basic button
      </Typography>
      <Typography>
        <Code>Button</Code>은 세 가지 <Code>variant</Code>를 제공합니다: <Code>text</Code> (default), <Code>contained</Code>, <Code>outlined</Code>.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Box>
        }
        code={`<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Text button
      </Typography>
      <Typography>
        <Code>Text buttons</Code>는 덜 강조된 액션에 사용되며, 주로 다이얼로그나 카드에 배치됩니다. 카드에서는 Text 버튼이 카드 콘텐츠의 강조를
        유지하는 데 도움이 됩니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
          </Box>
        }
        code={`<Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Contained buttons
      </Typography>
      <Typography>
        <Code>Contained buttons</Code>는 높은 강조를 가지며, 그림자와 채움 효과로 구분됩니다. 앱의 주요 액션에 사용됩니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
              Link
            </Button>
          </Box>
        }
        code={`<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>`}
      />
      <Typography>
        <Code>disableElevation prop을 사용하면 그림자를 제거할 수 있습니다.</Code>
      </Typography>
      <SampleBox
        UI={
          <Box>
            <Button variant="contained" disableElevation>
              Disable elevation
            </Button>
          </Box>
        }
        code={`<Button variant="contained" disableElevation>
  Disable elevation
</Button>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Outlined button
      </Typography>
      <Typography>
        <Code>Outlined buttons</Code>는 중간 강조 버튼입니다. 중요한 액션이지만 앱의 주요 액션은 아닌 경우에 사용됩니다. <Code>Outlined</Code> 버튼은
        <Code>Contained</Code>
        버튼보다 낮은 강조의 대안이거나, <Code>Text</Code> 버튼보다 높은 강조의 대안입니다
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Link
            </Button>
          </Box>
        }
        code={`<Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Handling clicks
      </Typography>
      <Typography>
        모든 컴포넌트는 루트 DOM 요소에 적용되는 <Code>onClick</Code> 핸들러를 지원합니다
      </Typography>
      <CodeBlock>
        {`<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>`}
      </CodeBlock>
      <Spacing size={16} />
      <Typography>참고로, 문서는 컴포넌트의 API 섹션에서 네이티브 props(많은 수가 있음)를 명시하지 않습니다.</Typography>

      <Spacing size={48} />
      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Color
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Box>
        }
        code={`<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>`}
      />
      <Typography>
        기본 버튼 색상을 사용하는 것 외에도, 커스텀 색상을 추가하거나 필요하지 않은 색상을 비활성화할 수 있습니다. 자세한 내용은 '새 색상 추가하기'
        예제를 참고하세요.
      </Typography>
      <Spacing size={48} />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Sizes
      </Typography>
      <Typography>
        크거나 작은 버튼은 <Code>size</Code> prop을 사용하여 조정할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ '& button': { m: 1 } }}>
            <div>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
            <div>
              <Button variant="outlined" size="small">
                Small
              </Button>
              <Button variant="outlined" size="medium">
                Medium
              </Button>
              <Button variant="outlined" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button variant="contained" size="small">
                Small
              </Button>
              <Button variant="contained" size="medium">
                Medium
              </Button>
              <Button variant="contained" size="large">
                Large
              </Button>
            </div>
          </Box>
        }
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Buttons with icons and label
      </Typography>
      <Typography>
        특정 버튼에 아이콘을 추가하면 앱의 UX를 개선할 수 있습니다. 로고를 일반 텍스트보다 더 쉽게 인식하기 때문입니다. 예를 들어, 삭제 버튼에 휴지통
        아이콘을 사용할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" startIcon={<Delete />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<Add />}>
              Send
            </Button>
          </Box>
        }
        code={`<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Icon button
      </Typography>
      <Typography>
        아이콘 버튼을 일반적으로 앱 바와 툴바에서 사용됩니다. 아이콘은 항목에 별을 추가하거나 제거하는 것처럼, 단일 선택을 선택하거나 선택 해제할 수
        있는 토글 버튼에도 적합합니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <Delete />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <Alarm />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCart />
            </IconButton>
          </Box>
        }
        code={`<IconButton aria-label="delete">
  <Delete />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <Delete />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <Alarm />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCart />
</IconButton>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Sizes
      </Typography>
      <Typography>
        크거나 작은 버튼은 <Code>size</Code> prop을 사용하여 조정할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton aria-label="delete" size="small">
              <Delete fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <Delete fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <Delete />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <Delete fontSize="inherit" />
            </IconButton>
          </Box>
        }
        code={`<IconButton aria-label="delete" size="small">
  <Delete fontSize="inherit" />
</IconButton>
<IconButton aria-label="delete" size="small">
  <Delete fontSize="small" />
</IconButton>
<IconButton aria-label="delete" size="large">
  <Delete />
</IconButton>
<IconButton aria-label="delete" size="large">
  <Delete fontSize="inherit" />
</IconButton>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Colors
      </Typography>
      <Typography>
        <Code>color</Code> prop 사용하면 아이콘 버튼의 색상을 변경할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton aria-label="fingerprint" color="secondary">
              <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
              <Fingerprint />
            </IconButton>
          </Box>
        }
        code={`<IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
<IconButton aria-label="fingerprint" color="success">
  <Fingerprint />
</IconButton>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Loading
      </Typography>
      <Typography>
        v6.4.0부터 <Code>loading</Code> props을 사용하여 아이콘 버튼을 로딩 상태로 설정하고 상호작용을 비활성화할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Tooltip title="Click to see loading">
            <IconButton onClick={() => setLoading(true)} loading={loading}>
              <AddShoppingCart />
            </IconButton>
          </Tooltip>
        }
        code={`<Tooltip title="Click to see loading">
  <IconButton onClick={() => setLoading(true)} loading={loading}>
    <AddShoppingCart />
  </IconButton>
</Tooltip>`}
      />

      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Badge
      </Typography>
      <Typography>
        <Code>IconButton</Code>에 <Code>Badge</Code> 컴포넌트를 추가할 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <IconButton>
            <ShoppingCart />
            <CartBadge badgeContent={2} color="primary" overlap="circular" />
          </IconButton>
        }
        code={`<IconButton>
  <ShoppingCart />
  <Badge badgeContent={2} color="primary" overlap="circular" />
</IconButton>`}
      />

      <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        File Upload
      </Typography>
      <Typography>
        파일 업로드 버튼을 만드려면, <Code>component="label"</Code>을 사용하세요. 이렇게 하면 <Code>file</Code> 타입의 input을 만들 수 있습니다.
      </Typography>
      <SampleBox
        UI={
          <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload />}>
            Upload files
            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
          </Button>
        }
        code={`<Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload />}>
  Upload files
  <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
</Button>`}
      />
    </>
  );
}
