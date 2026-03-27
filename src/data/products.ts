export interface ProductOption {
  name: string;
  values: {
    label: string;
    stock: number;
    additionalPrice: number;
  }[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  detailDescription: string;
  images: string[];
  basePrice: number;
  options: ProductOption[];
  visibleToGroups: ('standard' | 'vip' | 'premium')[];
  purchaseLimit: {
    minAmount: number;
    maxQuantity: number;
    periodDays?: number;
  };
  isActive: boolean;
  createdAt: string;
}

export const products: Product[] = [
  // 식품/음료 (3개)
  {
    id: 'P001',
    name: '[대용량] 아메리카노 원두 1kg',
    category: '식품/음료',
    description: '깊은 풍미의 프리미엄 아메리카노 원두, 카페 납품용 대용량',
    detailDescription: '브라질산 100% 아라비카 원두를 사용한 프리미엄 블렌드입니다. 미디엄 로스팅으로 풍부한 바디감과 깔끔한 산미를 느낄 수 있습니다. 카페, 식당 등 업소용으로 최적화된 대용량 패키지입니다.\n\n원산지: 브라질\n로스팅: 미디엄\n포장: 밀봉 질소충전\n유통기한: 제조일로부터 12개월',
    images: ['/images/products/product-1.jpg', '/images/products/product-1-2.jpg'],
    basePrice: 18000,
    options: [
      {
        name: '로스팅',
        values: [
          { label: '미디엄', stock: 150, additionalPrice: 0 },
          { label: '다크', stock: 80, additionalPrice: 1000 },
          { label: '라이트', stock: 60, additionalPrice: 0 },
        ],
      },
      {
        name: '수량단위',
        values: [
          { label: '1kg (1봉)', stock: 200, additionalPrice: 0 },
          { label: '5kg (5봉)', stock: 50, additionalPrice: 72000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 30000, maxQuantity: 100 },
    isActive: true,
    createdAt: '2025-01-10',
  },
  {
    id: 'P002',
    name: '[업소용] 생수 2L 6입 x 4팩',
    category: '식품/음료',
    description: '깨끗한 천연 미네랄워터, 업소 납품용 대량 패키지',
    detailDescription: '강원도 청정지역에서 취수한 천연 미네랄워터입니다. 식당, 카페, 사무실 등 업소용으로 적합한 대량 패키지(24병)입니다.\n\n용량: 2L x 24병\n원산지: 강원도\n유통기한: 제조일로부터 24개월',
    images: ['/images/products/product-2.jpg'],
    basePrice: 12000,
    options: [
      {
        name: '패키지',
        values: [
          { label: '24병 (기본)', stock: 300, additionalPrice: 0 },
          { label: '48병 (2박스)', stock: 120, additionalPrice: 11000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 24000, maxQuantity: 50 },
    isActive: true,
    createdAt: '2025-01-12',
  },
  {
    id: 'P003',
    name: '[대량] 유기농 녹차 티백 100입',
    category: '식품/음료',
    description: '제주산 유기농 녹차 티백, 사무실/카페용',
    detailDescription: '제주도 유기농 차밭에서 재배한 녹차잎으로 만든 프리미엄 티백입니다. 개별 포장되어 신선도가 오래 유지됩니다.\n\n내용량: 100티백 (1.5g x 100)\n원산지: 제주도\n인증: 유기농 인증',
    images: ['/images/products/product-3.jpg'],
    basePrice: 25000,
    options: [
      {
        name: '종류',
        values: [
          { label: '녹차', stock: 100, additionalPrice: 0 },
          { label: '현미녹차', stock: 70, additionalPrice: 2000 },
          { label: '보이차', stock: 40, additionalPrice: 5000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 25000, maxQuantity: 200 },
    isActive: true,
    createdAt: '2025-01-20',
  },

  // 생활용품 (3개)
  {
    id: 'P004',
    name: '[업소용] 다목적 세정제 5L',
    category: '생활용품',
    description: '강력한 세정력의 업소용 다목적 세정제',
    detailDescription: '식당, 사무실, 공장 등 다양한 업소에서 사용할 수 있는 다목적 세정제입니다. 강력한 세정력으로 기름때, 먼지, 각종 오염을 효과적으로 제거합니다.\n\n용량: 5L\n용도: 바닥, 벽면, 설비 청소\n성분: 친환경 계면활성제',
    images: ['/images/products/product-4.jpg'],
    basePrice: 15000,
    options: [
      {
        name: '향',
        values: [
          { label: '무향', stock: 200, additionalPrice: 0 },
          { label: '레몬', stock: 120, additionalPrice: 500 },
          { label: '라벤더', stock: 80, additionalPrice: 500 },
        ],
      },
      {
        name: '용량',
        values: [
          { label: '5L', stock: 300, additionalPrice: 0 },
          { label: '18L', stock: 50, additionalPrice: 40000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 30000, maxQuantity: 50 },
    isActive: true,
    createdAt: '2025-02-01',
  },
  {
    id: 'P005',
    name: '[대량] 산업용 고무장갑 50켤레',
    category: '생활용품',
    description: '내구성 높은 산업용 고무장갑, 박스 단위 납품',
    detailDescription: '내열성과 내화학성이 뛰어난 산업용 고무장갑입니다. 식품가공, 청소, 공장 작업 등 다양한 환경에서 사용 가능합니다.\n\n수량: 50켤레/박스\n재질: 천연고무 + 니트릴\n두께: 0.5mm',
    images: ['/images/products/product-5.jpg'],
    basePrice: 45000,
    options: [
      {
        name: '사이즈',
        values: [
          { label: 'M', stock: 100, additionalPrice: 0 },
          { label: 'L', stock: 150, additionalPrice: 0 },
          { label: 'XL', stock: 80, additionalPrice: 0 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 45000, maxQuantity: 30 },
    isActive: true,
    createdAt: '2025-02-05',
  },
  {
    id: 'P006',
    name: '[업소용] 점보롤 화장지 16롤',
    category: '생활용품',
    description: '업소용 대용량 점보롤 화장지, 경제적인 선택',
    detailDescription: '화장실, 세면실 등에 적합한 업소용 점보롤 화장지입니다. 3겹 엠보싱 처리로 부드럽고 내구성이 뛰어납니다.\n\n수량: 16롤/박스\n겹수: 3겹\n길이: 롤당 300m',
    images: ['/images/products/product-6.jpg'],
    basePrice: 28000,
    options: [
      {
        name: '타입',
        values: [
          { label: '3겹 엠보싱', stock: 200, additionalPrice: 0 },
          { label: '2겹 일반', stock: 300, additionalPrice: -3000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 28000, maxQuantity: 100 },
    isActive: true,
    createdAt: '2025-02-10',
  },

  // 사무용품 (3개)
  {
    id: 'P007',
    name: 'A4 복사용지 5박스 (2,500매)',
    category: '사무용품',
    description: '고품질 A4 복사용지, 사무실 필수품',
    detailDescription: '80g/m2 고품질 복사용지입니다. 양면 인쇄에 최적화되어 있으며, 잉크젯/레이저 프린터 모두 호환됩니다.\n\n규격: A4 (210x297mm)\n중량: 80g/m2\n수량: 500매 x 5박스 = 2,500매',
    images: ['/images/products/product-7.jpg'],
    basePrice: 32000,
    options: [
      {
        name: '중량',
        values: [
          { label: '80g', stock: 500, additionalPrice: 0 },
          { label: '100g', stock: 200, additionalPrice: 8000 },
        ],
      },
      {
        name: '색상',
        values: [
          { label: '백색', stock: 500, additionalPrice: 0 },
          { label: '미색', stock: 150, additionalPrice: 1000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 32000, maxQuantity: 50 },
    isActive: true,
    createdAt: '2025-01-25',
  },
  {
    id: 'P008',
    name: '[대량] 볼펜 세트 100자루',
    category: '사무용품',
    description: '사무용 볼펜 100자루 세트, 업소 대량 구매용',
    detailDescription: '부드러운 필기감의 사무용 볼펜입니다. 0.5mm 유성 볼펜으로 선명한 필기가 가능합니다. 사무실, 은행, 관공서 등 대량 소모처에 적합합니다.\n\n수량: 100자루/박스\n굵기: 0.5mm\n잉크: 유성',
    images: ['/images/products/product-8.jpg'],
    basePrice: 25000,
    options: [
      {
        name: '색상',
        values: [
          { label: '청색', stock: 300, additionalPrice: 0 },
          { label: '흑색', stock: 250, additionalPrice: 0 },
          { label: '적색', stock: 100, additionalPrice: 0 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 25000, maxQuantity: 100 },
    isActive: true,
    createdAt: '2025-02-15',
  },
  {
    id: 'P009',
    name: '스테이플러 + 침 세트 (10개입)',
    category: '사무용품',
    description: '사무용 스테이플러와 침 대량 세트',
    detailDescription: '내구성이 뛰어난 사무용 스테이플러 10개와 침 10,000개가 포함된 세트입니다. 한 번에 최대 25매 제본이 가능합니다.\n\n구성: 스테이플러 10개 + 침 10,000개\n제본능력: 최대 25매\n침 규격: No.10',
    images: ['/images/products/product-9.jpg'],
    basePrice: 35000,
    options: [
      {
        name: '색상',
        values: [
          { label: '블랙', stock: 80, additionalPrice: 0 },
          { label: '화이트', stock: 60, additionalPrice: 0 },
        ],
      },
    ],
    visibleToGroups: ['vip', 'premium'],
    purchaseLimit: { minAmount: 35000, maxQuantity: 30 },
    isActive: true,
    createdAt: '2025-02-20',
  },

  // 패션잡화 (3개)
  {
    id: 'P010',
    name: '[단체용] 면 티셔츠 30장',
    category: '패션잡화',
    description: '단체복/유니폼용 순면 라운드 티셔츠',
    detailDescription: '100% 순면 소재의 라운드넥 티셔츠입니다. 단체복, 유니폼, 행사용으로 적합하며 인쇄/자수 작업이 용이합니다.\n\n소재: 면 100%\n수량: 30장/박스\n중량: 200g',
    images: ['/images/products/product-10.jpg'],
    basePrice: 150000,
    options: [
      {
        name: '색상',
        values: [
          { label: '화이트', stock: 100, additionalPrice: 0 },
          { label: '블랙', stock: 80, additionalPrice: 0 },
          { label: '네이비', stock: 60, additionalPrice: 0 },
        ],
      },
      {
        name: '사이즈',
        values: [
          { label: 'S-M 혼합', stock: 50, additionalPrice: 0 },
          { label: 'L-XL 혼합', stock: 80, additionalPrice: 0 },
          { label: 'XXL 이상', stock: 30, additionalPrice: 15000 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 150000, maxQuantity: 20 },
    isActive: true,
    createdAt: '2025-02-25',
  },
  {
    id: 'P011',
    name: '[업소용] 앞치마 20장 세트',
    category: '패션잡화',
    description: '식당/카페용 방수 앞치마 대량 세트',
    detailDescription: '방수 코팅 처리된 업소용 앞치마입니다. 식당, 카페, 공방 등에서 사용하기 적합하며 세탁이 용이합니다.\n\n소재: 폴리에스터 + 방수코팅\n수량: 20장/세트\n사이즈: 프리사이즈',
    images: ['/images/products/product-11.jpg'],
    basePrice: 48000,
    options: [
      {
        name: '색상',
        values: [
          { label: '블랙', stock: 150, additionalPrice: 0 },
          { label: '브라운', stock: 80, additionalPrice: 0 },
          { label: '네이비', stock: 60, additionalPrice: 0 },
        ],
      },
    ],
    visibleToGroups: ['standard', 'vip', 'premium'],
    purchaseLimit: { minAmount: 48000, maxQuantity: 50 },
    isActive: true,
    createdAt: '2025-03-01',
  },
  {
    id: 'P012',
    name: '[대량] 에코백 토트백 50장',
    category: '패션잡화',
    description: '친환경 에코백, 판촉/행사용 대량 패키지',
    detailDescription: '친환경 캔버스 소재의 에코백입니다. 기업 로고 인쇄가 가능하며 판촉물, 행사 기념품으로 인기가 높습니다.\n\n소재: 캔버스(면)\n수량: 50장/박스\n사이즈: 36x40cm',
    images: ['/images/products/product-12.jpg'],
    basePrice: 50000,
    options: [
      {
        name: '색상',
        values: [
          { label: '내추럴', stock: 200, additionalPrice: 0 },
          { label: '블랙', stock: 100, additionalPrice: 2000 },
        ],
      },
      {
        name: '인쇄',
        values: [
          { label: '무지 (인쇄없음)', stock: 300, additionalPrice: 0 },
          { label: '단색 인쇄', stock: 100, additionalPrice: 25000 },
        ],
      },
    ],
    visibleToGroups: ['vip', 'premium'],
    purchaseLimit: { minAmount: 50000, maxQuantity: 30, periodDays: 30 },
    isActive: true,
    createdAt: '2025-03-05',
  },
];
