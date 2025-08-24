'use client'

import { motion } from 'framer-motion'
import { Brain, MessageSquare, TrendingUp, BarChart3, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI 감정 분석',
    description: '리뷰의 감정을 정확하게 분석하여 고객 만족도를 실시간으로 파악합니다.',
    color: 'blue'
  },
  {
    icon: MessageSquare,
    title: '자동 응대 시스템',
    description: 'AI가 리뷰에 맞는 적절한 답변을 자동으로 생성하고 응대합니다.',
    color: 'green'
  },
  {
    icon: TrendingUp,
    title: '트렌드 분석',
    description: '고객 피드백 패턴을 분석하여 제품 개선 방향을 제시합니다.',
    color: 'purple'
  },
  {
    icon: BarChart3,
    title: '실시간 대시보드',
    description: '리뷰 현황과 고객 만족도를 한눈에 파악할 수 있는 대시보드를 제공합니다.',
    color: 'orange'
  },
  {
    icon: Zap,
    title: '즉시 처리',
    description: '24시간 언제든지 리뷰를 분석하고 응대하여 고객 서비스 품질을 향상시킵니다.',
    color: 'yellow'
  },
  {
    icon: Shield,
    title: '데이터 보안',
    description: '엔터프라이즈급 보안으로 고객 데이터를 안전하게 보호합니다.',
    color: 'red'
  }
]

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  red: 'bg-red-100 text-red-600'
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🚀 <span className="gradient-text">AI가 알아서</span> 다 해드립니다
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            복잡한 리뷰 분석과 응대를 AI가 자동으로 처리하여<br />
            <span className="font-semibold text-primary-600">업무 효율성을 극대화</span>합니다
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl">
                <div className={`w-14 h-14 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
