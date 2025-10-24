// CTA 버튼 링크 설정
export const CTA_CONFIG = {
  // 상담하러가기 링크
  consultation: {
    url: "https://www.naver.com/", 
    text: "상담하러가기",
    icon: "phone" as const,
  },
  
  // 단가보러가기 링크
  pricing: {
    url: "https://www.naver.com/", 
    text: "단가보러가기", 
    icon: "calculator" as const,
  },
  
  // 전화번호 (별도 표시용)
  phone: {
    number: "010-5782-5248",
    display: "010-5782-5248",
  },
  
  // CTA 버튼 스타일 설정
  buttonStyles: {
    primary: {
      size: "lg" as const,
      className: "bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold",
    },
    secondary: {
      size: "lg" as const,
      variant: "outline" as const,
      className: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 font-bold border-2",
    },
  },
} as const;

// CTA 버튼 타입 정의
export type CTAButtonType = 'consultation' | 'pricing';
export type CTAButtonVariant = 'primary' | 'secondary';
