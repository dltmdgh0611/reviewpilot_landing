# 🚀 리뷰파일럿 랜딩페이지

AI 기반 온라인 쇼핑몰 리뷰 분석 및 자동 응대 솔루션의 랜딩페이지입니다.

## ✨ 주요 기능

- **AI 리뷰 분석**: 감정 분석, 트렌드 분석, 자동 응대
- **Skin-in-the-Game 전략**: 낮음-중간-높음 단계별 사용자 참여 유도
- **카카오톡 오픈채팅**: 얼리버드 혜택 및 커뮤니티 참여
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

## 🛠 기술 스택

- **Frontend**: Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
# 또는
yarn build
```

## 🌐 Vercel 배포

### **자동 배포 (권장)**

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/reviewpilot-landing.git
   git push -u origin main
   ```

2. **Vercel 연결**
   - [Vercel](https://vercel.com)에 로그인
   - "New Project" 클릭
   - GitHub 저장소 선택
   - 자동 배포 설정 완료

### **수동 배포**

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **배포 실행**
   ```bash
   vercel
   ```

3. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

### **환경 변수 설정**

Vercel 대시보드에서 다음 환경 변수를 설정할 수 있습니다:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 📁 프로젝트 구조

```
reviewpilot_landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/             # React 컴포넌트
│   ├── Header.tsx         # 헤더 & 네비게이션
│   ├── Hero.tsx           # 히어로 섹션
│   ├── Features.tsx       # AI 기능 소개
│   ├── KakaoChat.tsx      # 카카오톡 채팅 유도
│   └── Footer.tsx         # 푸터
├── public/                 # 정적 파일
│   └── reviewpilot.png    # 로고 이미지
├── vercel.json            # Vercel 배포 설정
└── package.json           # 프로젝트 설정
```

## 🎯 Skin-in-the-Game 전략

### 🟢 낮음 (관심 표현)
- 랜딩페이지 방문
- "출시 알림 받기" 버튼 클릭
- 이메일/카카오톡 알림 구독

### 🟡 중간 (진지한 관심)
- 사전 예약 신청
- 무료 체험판 사전 신청
- 카드 등록 (결제 보류)

### 🔴 높음 (실제 행동)
- 얼리버드 결제 (50% 할인)
- 베타 테스터 참여
- 실제 데이터 분석 체험

## 📱 반응형 디자인

- **Mobile**: 320px ~ 768px
- **Tablet**: 768px ~ 1024px  
- **Desktop**: 1024px 이상

## 🎨 커스터마이징

### 색상 테마
`tailwind.config.js`에서 primary 색상을 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // 메인 색상
    600: '#2563eb',  // 호버 색상
  }
}
```

### 폰트
나눔스퀘어라운드 폰트를 사용하고 있으며, `globals.css`에서 변경 가능합니다.

## 📞 연락처

- **이메일**: support@reviewpilot.ai
- **카카오톡**: 오픈채팅방 참여
- **전화**: 02-1234-5678

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
