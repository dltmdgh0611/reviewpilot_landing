import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '리뷰파일럿 - AI 기반 온라인 쇼핑몰 리뷰 분석 및 자동 응대',
  description: 'AI가 쇼핑몰 리뷰를 분석하고 자동으로 응대해드립니다. 고객 만족도 향상과 영업 효율성을 동시에!',
  keywords: '리뷰분석, AI응대, 쇼핑몰, 고객서비스, 자동화',
  openGraph: {
    title: '리뷰파일럿 - AI 기반 리뷰 분석 및 자동 응대',
    description: 'AI가 쇼핑몰 리뷰를 분석하고 자동으로 응대해드립니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
