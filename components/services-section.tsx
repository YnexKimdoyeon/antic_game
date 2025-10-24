import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: CheckCircle2,
    title: "투명하고 공정한 가격",
    description: "시세를 반영한 합리적인 매입가를 제시합니다",
  },
  {
    icon: Zap,
    title: "신속한 거래 & 안전한 절차",
    description: "당일 매입, 당일 현금 지급으로 빠른 거래를 보장합니다",
  },
  {
    icon: Shield,
    title: "고객 만족 최우선 서비스",
    description: "데이터 삭제부터 안전한 포장까지 꼼꼼하게 처리합니다",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-sm mb-6">
              복지포인트몰 제휴 가능
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">게임기 매입 서비스</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-accent/10 p-4 rounded-full">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
