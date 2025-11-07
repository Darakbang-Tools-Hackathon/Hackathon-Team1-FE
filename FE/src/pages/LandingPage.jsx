import React from 'react';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/common/Layout';
import { Link } from 'react-router-dom';

// Animated Section Component
const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const LandingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-indigo-100 to-white">
        <AnimatedSection className="px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-800 mb-4">
            VITA-Track: 선제적 돌봄의 새로운 기준
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            AI 음향 분석 기술을 통해 어르신의 건강을 미리 예측하고, 반응적 돌봄의 한계를 넘어 소중한 일상을 지킵니다.
          </p>
          <Link to="/login">
            <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
              대시보드 시작하기
            </button>
          </Link>
        </AnimatedSection>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* The Problem */}
        <AnimatedSection className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-4">문제점: '반응적 돌봄'의 명백한 한계</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            현재의 의료 시스템은 건강 문제가 발생한 후에야 개입하는 '반응적' 방식에 머물러 있습니다. 하지만 노쇠는 서서히 진행되다 사소한 스트레스에도 갑자기 무너지는 '노쇠 캐스케이드'로 이어질 수 있어, 사후 대처만으로는 부족합니다. 2025년 초고령 사회 진입을 앞둔 한국에게 선제적 관리는 더 이상 선택이 아닌 필수입니다.
          </p>
        </AnimatedSection>

        {/* The Solution */}
        <AnimatedSection className="mb-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">VITA-Track: 보이지 않는 위험을 감지하는 혁신</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              VITA-Track은 일상의 소리 패턴을 AI로 분석하여 건강 상태를 예측하고, 위험 징후를 조기에 발견하는 혁신적인 솔루션입니다. 카메라나 웨어러블 기기 없이, 어르신의 프라이버시를 존중하며 편안한 환경에서 건강을 관리합니다.
            </p>
          </div>
        </AnimatedSection>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <AnimatedSection>
            <h3 className="text-3xl font-bold mb-3">VITA-Score (활력 점수)</h3>
            <p className="text-gray-600 mb-4">
              식사, 외출, 수면 등 핵심 일상 활동에서 발생하는 소리 패턴을 정밀하게 분석하여 매일 0점에서 100점 사이의 '활력 점수'를 계산합니다. 이 점수는 외출(40%), 수면(30%), 식사(30%)의 가중치 합으로 구성되어, 어르신의 건강 상태를 직관적으로 파악할 수 있게 돕습니다.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
              <p className="text-center text-indigo-600 font-bold text-2xl">"어제의 활력 점수는 <span className="text-5xl font-extrabold">87</span>점 입니다."</p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <AnimatedSection className="md:order-2">
            <h3 className="text-3xl font-bold mb-3">CIP (핵심 개입 시점) 탐지</h3>
            <p className="text-gray-600 mb-4">
              VITA-Score의 장기적인 추세를 모니터링하여 건강이 저하되기 시작하는 초기 변곡점(CIP)을 감지합니다. 단기(7일) 평균 점수가 장기(30일) 기준선보다 현저히 낮아지면 보호자의 모바일 앱으로 즉시 경고 알림을 보내, 건강을 지킬 수 있는 '골든 타임'을 확보합니다.
            </p>
          </AnimatedSection>
          <AnimatedSection className="md:order-1">
            <div className="bg-red-100 p-8 rounded-xl shadow-lg">
              <p className="text-center text-red-600 font-bold text-2xl">"⚠️ 심각한 위험: 3일 연속 활력 점수가 장기 평균보다 5점 이상 낮습니다."</p>
            </div>
          </AnimatedSection>
        </div>

        {/* How It Works */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">강력한 프라이버시 보호 설계</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            원본 오디오는 집 안의 '엣지 디바이스'에서 즉시 식별 불가능한 데이터(로그 멜 스펙트로그램)로 변환되어 클라우드로 전송됩니다. 이 과정에서 데이터 크기는 80% 감소하고, 원본 음성 정보는 절대 외부로 노출되지 않아 사생활을 완벽하게 보호합니다.
          </p>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default LandingPage;