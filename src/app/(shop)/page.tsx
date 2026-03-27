'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { useAuth } from '@/contexts/AuthContext';
import PopupOverlay from '@/components/PopupOverlay';

const banners = [
  { title: '3월 대량구매 특별 할인', subtitle: '50만원 이상 주문 시 추가 5% 할인', bg: 'from-primary to-primary-light' },
  { title: '신상품 입고 안내', subtitle: '사무용품 신규 라인업을 확인하세요', bg: 'from-secondary to-secondary-light' },
  { title: 'VIP 회원 전용 혜택', subtitle: '최대 12% 할인 + 무료배송', bg: 'from-primary-dark to-primary' },
];

function formatPrice(price: number) {
  return price.toLocaleString('ko-KR');
}

export default function HomePage() {
  const { role, currentUser } = useAuth();
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const discountRate = currentUser?.discountRate || 0;

  const visibleProducts = products.filter(p => {
    if (!p.isActive) return false;
    if (role === 'admin') return true;
    const group = currentUser?.memberGroup || 'standard';
    return p.visibleToGroups.includes(group);
  });

  return (
    <div id="home-page">
      <PopupOverlay />

      {/* Main banner */}
      <section id="main-banner" className="relative bg-neutral-900 overflow-hidden">
        <div className={`bg-gradient-to-r ${banners[currentBanner].bg} transition-all duration-500`}>
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{banners[currentBanner].title}</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">{banners[currentBanner].subtitle}</p>
            <Link href="#products" className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
              상품 보러가기
            </Link>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBanner(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                i === currentBanner ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Category shortcuts */}
      <section id="category-shortcuts" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <div
              key={cat.id}
              className="card p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-2xl">
                  {cat.slug === 'food-beverage' ? '🍽' : cat.slug === 'living' ? '🏠' : cat.slug === 'office' ? '📋' : '👕'}
                </span>
              </div>
              <h3 className="font-medium text-neutral-900">{cat.name}</h3>
              <p className="text-xs text-neutral-400 mt-1">{cat.productCount}개 상품</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">전체 상품</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map(product => {
            const discountedPrice = Math.round(product.basePrice * (1 - discountRate / 100));
            return (
              <Link key={product.id} href={`/products/${product.id}`} className="card overflow-hidden group hover:shadow-md transition-shadow">
                {/* Image placeholder */}
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {product.category === '식품/음료' ? '🍽' : product.category === '생활용품' ? '🏠' : product.category === '사무용품' ? '📋' : '👕'}
                    </div>
                    <span className="text-xs text-neutral-400">상품 이미지</span>
                  </div>
                  {!product.visibleToGroups.includes('standard') && (
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                      VIP
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-4">
                  <span className="text-xs text-neutral-400">{product.category}</span>
                  <h3 className="font-medium text-neutral-900 mt-1 text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-2">
                    {discountRate > 0 ? (
                      <>
                        <span className="text-xs text-neutral-400 line-through">{formatPrice(product.basePrice)}원</span>
                        <div className="flex items-center gap-1">
                          <span className="text-error text-sm font-bold">{discountRate}%</span>
                          <span className="text-lg font-bold text-neutral-900">{formatPrice(discountedPrice)}원</span>
                        </div>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-neutral-900">{formatPrice(product.basePrice)}원</span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    최소주문: {formatPrice(product.purchaseLimit.minAmount)}원
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
