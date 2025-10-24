import { Button } from "@/components/ui/button"
import { Phone, Calculator } from "lucide-react"
import { CTA_CONFIG, type CTAButtonType, type CTAButtonVariant } from "@/lib/cta-config"

interface CTAButtonProps {
  type: CTAButtonType
  variant?: CTAButtonVariant
  className?: string
  onClick?: () => void
}

// 개별 CTA 버튼 컴포넌트
export function CTAButton({ type, variant = 'primary', className, onClick }: CTAButtonProps) {
  const config = CTA_CONFIG[type]
  const buttonStyle = CTA_CONFIG.buttonStyles[variant]
  
  const getIcon = () => {
    switch (config.icon) {
      case 'phone':
        return <Phone className="h-4 w-4" />
      case 'calculator':
        return <Calculator className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Button
      size={buttonStyle.size}
      variant={buttonStyle.variant}
      className={`${buttonStyle.className} ${className || ''}`}
      onClick={onClick}
    >
      {getIcon()}
      {config.text}
    </Button>
  )
}

// CTA 버튼 그룹 컴포넌트 (상담하러가기 + 단가보러가기)
interface CTAGroupProps {
  className?: string
  onConsultationClick?: () => void
  onPricingClick?: () => void
}

export function CTAGroup({ className, onConsultationClick, onPricingClick }: CTAGroupProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className || ''}`}>
      <CTAButton 
        type="consultation" 
        variant="primary"
        onClick={onConsultationClick}
      />
      <CTAButton 
        type="pricing" 
        variant="secondary"
        onClick={onPricingClick}
      />
    </div>
  )
}

// 전화번호 표시 컴포넌트
interface PhoneDisplayProps {
  className?: string
  showIcon?: boolean
}

export function PhoneDisplay({ className, showIcon = true }: PhoneDisplayProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className || ''}`}>
      {showIcon && <Phone className="h-6 w-6 text-accent" />}
      <a
        href={`tel:${CTA_CONFIG.phone.number}`}
        className="text-2xl md:text-3xl font-bold text-accent hover:text-accent/90 transition-colors"
      >
        {CTA_CONFIG.phone.display}
      </a>
    </div>
  )
}
