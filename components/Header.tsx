'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Banner */}
      <div className="gradient-bg text-white py-2 px-4 text-center text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          🚀 가입 즉시 무료 체험권 받으세요! 리뷰 분석은 AI가, 고객 만족도는 3배로! ✨
        </span>
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/reviewpilot.png"
              alt="리뷰파일럿 로고"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-bold text-gray-900">리뷰파일럿</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                AI 기능
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isFeaturesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="#sentiment-analysis" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    감정 분석
                  </Link>
                  <Link href="#auto-response" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    자동 응대
                  </Link>
                  <Link href="#trend-analysis" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    트렌드 분석
                  </Link>
                </div>
              )}
            </div>
            <Link href="#templates" className="text-gray-700 hover:text-primary-600 transition-colors">
              템플릿 갤러리
            </Link>
            <Link href="#case-studies" className="text-gray-700 hover:text-primary-600 transition-colors">
              고객사례
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              요금제
            </Link>
            <button className="button-secondary">
              로그인
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                AI 기능
              </Link>
              <Link href="#templates" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                템플릿 갤러리
              </Link>
              <Link href="#case-studies" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                고객사례
              </Link>
              <Link href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">
                요금제
              </Link>
              <button className="w-full mt-4 button-secondary">
                로그인
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
