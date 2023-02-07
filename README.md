# Todo_Jest

테스트를 하기 위한 Todo 레포입니다.

Next.JS + TS + Jest

https://nextjs.org/docs/testing#quickstart-2

```bash
npx create-next-app@latest --typescript --example with-jest [[파일 이름]]
```

- SWC
  - 컴파일과 번들링: 컴파일과 번들링 모두에 사용
  - 폴리필: 컴파일을 위해 최신 JavaScript 기능을 사용하는 JavaScript/TypeScript 파일을 사용
  - 크로스 브라우징: 모든 주요 브라우저에서 지원하는 유효한 코드를 출력

> 🏎️ SWC는 단일 스레드에서 Babel보다 20배 빠르고 쿼드 코어(4개 코어)에서 70배 빠릅니다 .

SWC는 확장 가능하도록 설계되었습니다. 현재 다음을 지원합니다.

- 편집
- 번들링 (swcpack, 개발 중)
- 축소
- WebAssembly로 변환
- webpack 내부에서 사용(swc-loader)
- Jest 성능 개선(@swc/jest)
- 커스텀 플러그인
