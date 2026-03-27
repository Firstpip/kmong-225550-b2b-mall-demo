'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';

export default function MypageProfilePage() {
  const { currentUser } = useAuth();
  const { showToast } = useToast();
  const [cashReceiptNumber, setCashReceiptNumber] = useState(currentUser?.cashReceiptNumber || '');

  if (!currentUser) {
    return <div className="card p-8 text-center text-neutral-400">회원 정보를 불러올 수 없습니다.</div>;
  }

  const handleSave = () => {
    showToast('현금영수증 번호가 저장되었습니다. (데모)', 'success');
  };

  return (
    <div id="mypage-profile">
      <h2 className="text-lg font-bold text-neutral-900 mb-4">회원정보</h2>

      {/* Member grade */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-neutral-900">회원 등급</h3>
            <p className="text-sm text-neutral-400 mt-1">현재 등급에 따른 할인 혜택이 적용됩니다.</p>
          </div>
          <div className="text-right">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
              currentUser.memberGroup === 'vip'
                ? 'bg-yellow-100 text-yellow-800'
                : currentUser.memberGroup === 'premium'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {currentUser.memberGroup.toUpperCase()}
            </span>
            <p className="text-sm text-primary font-bold mt-1">할인율: {currentUser.discountRate}%</p>
          </div>
        </div>
      </div>

      {/* Business info */}
      <div className="card p-6 mb-6">
        <h3 className="font-medium text-neutral-900 mb-4">사업자 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-neutral-400">회사명</span>
            <p className="font-medium mt-0.5">{currentUser.businessName}</p>
          </div>
          <div>
            <span className="text-neutral-400">사업자등록번호</span>
            <p className="font-medium mt-0.5">{currentUser.businessNumber}</p>
          </div>
          <div>
            <span className="text-neutral-400">대표자명</span>
            <p className="font-medium mt-0.5">{currentUser.ownerName}</p>
          </div>
          <div>
            <span className="text-neutral-400">담당자명</span>
            <p className="font-medium mt-0.5">{currentUser.managerName}</p>
          </div>
          <div>
            <span className="text-neutral-400">업태 / 종목</span>
            <p className="font-medium mt-0.5">{currentUser.businessType} / {currentUser.businessItem}</p>
          </div>
          <div>
            <span className="text-neutral-400">이메일</span>
            <p className="font-medium mt-0.5">{currentUser.email}</p>
          </div>
          <div>
            <span className="text-neutral-400">연락처</span>
            <p className="font-medium mt-0.5">{currentUser.phone}</p>
          </div>
          <div>
            <span className="text-neutral-400">주소</span>
            <p className="font-medium mt-0.5">{currentUser.address}</p>
          </div>
        </div>
      </div>

      {/* Cash receipt */}
      <div className="card p-6">
        <h3 className="font-medium text-neutral-900 mb-4">현금영수증 설정</h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={cashReceiptNumber}
            onChange={(e) => setCashReceiptNumber(e.target.value)}
            className="input-field max-w-xs"
            placeholder="010-0000-0000"
          />
          <button onClick={handleSave} className="btn-primary">
            저장
          </button>
        </div>
        <p className="text-xs text-neutral-400 mt-2">주문 시 현금영수증 발행에 사용됩니다.</p>
      </div>
    </div>
  );
}
