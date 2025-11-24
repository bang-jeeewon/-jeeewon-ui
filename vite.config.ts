import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'], // @toss/tds-mobile이 Emotion을 사용하므로 필요함. 이 플러그인은 Emotion의 `css` prop과 스타일 최적화를 처리함.
      },
    }),
  ],
  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled'], // 사전 번들링할 패키지 지정
    exclude: [], // 사전 번들링에서 제외
    esbuildOptions: {
      jsx: 'automatic', // React 17+의 자동 JSX 변환 사용
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react'], // React, React-DOM, Emotion의 단일 인스턴스 보장
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
});
