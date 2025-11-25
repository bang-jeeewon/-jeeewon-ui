import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@jeeewon/ui';
import { styled } from '@jeeewon/ui';
import { useEffect, useState } from 'react';

export interface IndexItem {
  id: string;
  text: string;
  level: 4 | 5 | 6; // Typography variant h4, h5, h6
}

interface IndexComponentProps {
  /**
   * 목차를 생성할 영역의 CSS selector
   * 지정하지 않으면 전체 문서에서 탐색합니다.
   */
  selector?: string;
  /**
   * 수동으로 목차 항목을 지정할 수 있습니다.
   * 지정하지 않으면 자동으로 DOM에서 탐색합니다.
   */
  items?: IndexItem[];
}

const StyledList = styled(List)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(2),
  maxHeight: 'calc(100vh - 100px)',
  overflowY: 'auto',
}));

const StyledListItem = styled(ListItem)<{ level: number }>(({ theme, level }) => ({
  paddingLeft: theme.spacing(level === 4 ? 1 : level === 5 ? 2 : 3),
  paddingTop: 0,
  paddingBottom: 0,
}));

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: active ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledListItemText = styled(ListItemText)<{ level: number }>(({ level }) => ({
  '& .MuiListItemText-primary': {
    fontSize: level === 4 ? '1rem' : level === 5 ? '0.875rem' : '0.8125rem',
    fontWeight: level === 4 ? 600 : level === 5 ? 500 : 400,
    color: level === 4 ? 'inherit' : 'text.secondary',
  },
}));

// 텍스트를 URL-friendly ID로 변환
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 특수문자 제거
    .replace(/\s+/g, '-') // 공백을 하이픈으로
    .replace(/-+/g, '-') // 연속된 하이픈 제거
    .trim();
}

// DOM에서 Typography 제목들을 자동으로 찾아서 목차 생성
function extractIndexItems(container: Document | Element = document): IndexItem[] {
  const items: IndexItem[] = [];
  const headings = container.querySelectorAll('h4, h5, h6');
  const usedIds = new Set<string>();

  headings.forEach((heading) => {
    const text = heading.textContent?.trim() || '';
    if (!text) return;

    const level = parseInt(heading.tagName.charAt(1)) as 4 | 5 | 6;
    let id = heading.id;

    // id가 없으면 자동 생성
    if (!id) {
      id = generateId(text);

      // 중복된 id가 있으면 고유하게 만들기
      let uniqueId = id;
      let counter = 1;
      while (usedIds.has(uniqueId)) {
        uniqueId = `${id}-${counter}`;
        counter++;
      }
      id = uniqueId;
      heading.id = id;
    }

    usedIds.add(id);
    items.push({ id, text, level });
  });

  return items;
}

export default function IndexComponent({ selector, items: manualItems }: IndexComponentProps) {
  const [autoItems, setAutoItems] = useState<IndexItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // manualItems가 있으면 사용하고, 없으면 자동 생성
  const items = manualItems || autoItems;

  // 자동으로 목차 생성
  useEffect(() => {
    if (manualItems) {
      return; // 수동으로 지정된 경우 자동 생성하지 않음
    }

    // DOM이 렌더링된 후 탐색 (라우트 변경 후 콘텐츠가 렌더링될 시간 필요)
    const timeoutId = setTimeout(() => {
      const container = selector ? document.querySelector(selector) : document;
      if (container) {
        const extractedItems = extractIndexItems(container as Element);
        setAutoItems(extractedItems);
      }
    }, 200); // 약간 더 긴 시간으로 변경하여 콘텐츠 렌더링 대기

    return () => clearTimeout(timeoutId);
  }, [selector, manualItems]);

  // 스크롤 위치에 따라 활성 항목 감지
  useEffect(() => {
    if (items.length === 0) return;

    const container = selector ? document.querySelector(selector) : null;
    const scrollTarget = container ? (container as HTMLElement) : window;

    const handleScroll = () => {
      if (!container) {
        // 전체 페이지 스크롤
        const scrollPosition = window.scrollY + 100;
        for (let i = items.length - 1; i >= 0; i--) {
          const element = document.getElementById(items[i].id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveId(items[i].id);
            return;
          }
        }
        setActiveId('');
        return;
      }

      // ContentArea 내부 스크롤
      const containerElement = container as HTMLElement;
      const containerRect = containerElement.getBoundingClientRect();
      const scrollTop = containerElement.scrollTop;
      const viewportTop = scrollTop + 100; // 약간의 오프셋

      // 역순으로 탐색하여 현재 보이는 첫 번째 제목 찾기
      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const elementTop = elementRect.top - containerRect.top + scrollTop;

          if (elementTop <= viewportTop) {
            setActiveId(items[i].id);
            return;
          }
        }
      }
      setActiveId('');
    };

    scrollTarget.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행

    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [items, selector]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    const container = selector ? document.querySelector(selector) : null;

    if (element) {
      const offset = 16; // 약간의 여백

      if (container) {
        // ContentArea 내부 스크롤
        const containerElement = container as HTMLElement;
        const containerRect = containerElement.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top - containerRect.top + containerElement.scrollTop;

        containerElement.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth',
        });
      } else {
        // 전체 페이지 스크롤
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <Box sx={{ minWidth: 200 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        CONTENTS
      </Typography>
      <StyledList>
        {items.map((item) => (
          <StyledListItem key={item.id} level={item.level}>
            <StyledListItemButton onClick={() => handleClick(item.id)} active={activeId === item.id}>
              <StyledListItemText primary={item.text} level={item.level} />
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </StyledList>
    </Box>
  );
}
