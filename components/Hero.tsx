'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              매일 쌓이는 쇼핑몰 리뷰,
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">이제 AI한테</span> 맡기세요!
            </h1>
          </div>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            <br/>복잡한 리뷰 분석은 리뷰파일럿이 자동화 해드릴게요!<br />
            <span className="font-semibold">이제 중요한 고객 피드백에 집중하세요</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary text-lg px-8 py-4"
            >
              지금 무료로 시작하기
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary text-lg px-8 py-4"
            >
              데모 보기
            </motion.button>
          </div>
        </motion.div>

        {/* Customer Review Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Review Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
              AI가 자동으로 응답해주니까 정말 편해요!<br />
              <span className="font-medium text-primary-600">24시간 언제든지 응대</span>가 가능해서 고객 만족도가 올랐어요.
            </p>
            <div className="text-center">
              <p className="text-xs text-gray-500">패션 쇼핑몰 **** 대표</p>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
              리뷰 분석으로 고객이 원하는 게 뭔지 알 수 있었어요.<br />
              <span className="font-medium text-primary-600">마케팅 전략 수립에 큰 도움</span>이 되었습니다!
            </p>
            <div className="text-center">
              <p className="text-xs text-gray-500">뷰티 브랜드 **** 대표</p>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
              고객 피드백 트렌드를 실시간으로 파악할 수 있어요.<br />
              <span className="font-medium text-primary-600">시장 변화에 빠르게 대응</span>해서 영업 실적이 30% 향상되었습니다!
            </p>
            <div className="text-center">
              <p className="text-xs text-gray-500">홈리빙 쇼핑몰 *** 대표</p>
            </div>
          </div>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
        </motion.div>
      </div>
    </section>
  )
}
