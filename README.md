# Sixshop-fe-test

## 1. Installation & Run
```
// 해당 코드 가져오기
1. git clone https://github.com/leee1846/leee1846-fe.git

// 필요 dependency 설치
2. npm install

// run local server
3. npm run dev
```

## 4. Specification
#### 설치 library 및 version
```
zustand : 4.1.1
```

## 5. 구현 목록
### 1. 로그인 (`/login`)

- [x]  제공된 디자인을 참고하여 input 컴포넌트를 구현해주세요.
    - [x]  아이디 형식
    - [x]  비밀번호 형식
- [x]  input 값이 유효한 경우에만 로그인 버튼이 활성화됩니다.
- [x]  로그인 버튼 클릭하면 로그인 API를 이용해서 로그인을 합니다. 로그인이 성공하면 홈 화면(`/`)으로 이동합니다.
- [x]  로그인이 되어있지 않다면 어느 페이지에서든 헤더 우측에 `login` 버튼이 노출됩니다.
- [x]  로그인이 되어 있다면 어느 페이지에서든 헤더 우측에 `user name`텍스트와 `logout` 버튼이 노출됩니다.
- [x]  헤더의 `logout` 버튼을 클릭하면 로그아웃 처리 후 헤더 우측은 `login` 버튼으로 변경됩니다.
- [x]  로그인 된 상태에서 로그인 화면(`/login`)에 진입하면 홈 화면(`/`)으로 리다이렉트됩니다.
- [x]  새로고침 시에도 로그인이 유지되어야 합니다.

### 2. 페이지네이션 (`/pagination?page=number`)

- [x]  Pagination 컴포넌트와 usePagination 커스텀훅을 구현해주세요.
- [x]  한 페이지 당 보여지는 상품의 개수는 10개입니다.
- [x]  상품을 클릭하면 상품 상세(`/products/{id}`)로 이동합니다.
- [x]  상품 가격은 세 자리마다 콤마(,)로 구분해주세요.
- [x]  이전 범위 버튼(<)을 클릭하면 이전 범위의 마지막 페이지를 보여줍니다.
- [x]  다음 범위 버튼(>)을 클릭하면 다음 범위의 첫 번째 페이지를 보여줍니다.
- [x]  이전 범위가 존재하지 않는다면 이전 범위 버튼(<)은 disabled 되어야 합니다.
- [x]  다음 범위가 존재하지 않는다면 다음 범위 버튼(>)은 disabled 되어야 합니다.
- [x]  현재 선택된 페이지는 클릭되지 않도록 합니다.
- [x]  존재하지 않는 페이지에 접근 시 에러 처리를 합니다.

### 3. 무한 스크롤 (`/infinite-scroll`)

- [x]  스크롤이 페이지 하단에 도달하면 다음 상품을 이어서 보여줍니다.
- [x]  성능을 고려하여 작업해주세요.
- [x]  한 페이지 당 보여지는 상품의 개수는 16개입니다.
- [x]  상품을 클릭하면 상품 상세(`/products/{id}`)로 이동합니다.
- [x]  상품 가격은 세 자리마다 콤마(,)로 구분해주세요.
- [x]  더 이상 가져올 데이터가 없는 경우 요청이 나가지 않도록 처리해주세요.
- [x]  상품 상세 화면으로 이동했다가 다시 이전 페이지(`/infinite-scroll`)로 돌아오면 기존의 위치로 되돌아옵니다.
- [x]  `(선택)` 이미지는 lazy loading 처리해주세요

### 4. 상품 상세 (`/products/{id}`)

- [x]  상품 상세 조회 API를 이용해서 id에 해당하는 상품을 보여주세요.
- [x]  상품 가격은 세 자리마다 콤마(,)로 구분해주세요.
- [x]  존재하지 않는 상품에 접근 시 에러 처리를 합니다.
