'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, Gift, Zap } from 'lucide-react'

export default function KakaoChat() {
  const handleKakaoChatJoin = () => {
    // 실제 카카오톡 오픈채팅 링크로 연결
    window.open('https://open.kakao.com/o/gN8XqhOh', '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🎯 <span className="gradient-text">얼리버드 특별 혜택</span>을 놓치지 마세요!
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            카카오톡 오픈채팅방에 먼저 가입하시면<br />
            <span className="font-semibold text-primary-600">출시 전 특별 할인과 베타 테스터 기회</span>를 드립니다!
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">50% 할인 혜택</h3>
            <p className="text-gray-600">
              출시 후 1년간<br />
              <span className="font-medium">얼리버드 전용 가격</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">베타 테스터 우선권</h3>
            <p className="text-gray-600">
              서비스 출시 전<br />
              <span className="font-medium">먼저 체험해보세요</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">커뮤니티 혜택</h3>
            <p className="text-gray-600">
              다른 사용자들과<br />
              <span className="font-medium">정보를 공유하세요</span>
            </p>
          </motion.div>
        </div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 card-shadow border border-yellow-200 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-yellow-600" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              카카오톡 오픈채팅방에 참여하세요!
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              지금 가입하시면 <span className="font-semibold text-primary-600">출시 알림</span>과 
              <span className="font-semibold text-primary-600"> 특별 혜택</span>을 가장 먼저 받아보실 수 있습니다!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleKakaoChatJoin}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                💬 카카오톡 채팅방 참여하기
              </motion.button>
            
            </div>

            <p className="text-sm text-gray-500 mt-6">
              * 채팅방 참여 후 출시 알림을 받으시면 특별 혜택이 적용됩니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
