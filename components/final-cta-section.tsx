import { CTAGroup, PhoneDisplay } from "@/components/cta-buttons"
import { Clock, Banknote } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            이제는 게임기 매입도
            <br />
            연희실장에서!
          </h2>

          <CTAGroup className="pt-4" />

          <PhoneDisplay className="py-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center gap-2">
              <Banknote className="h-8 w-8 text-accent" />
              <p className="font-bold text-primary-foreground">당일 매입</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Banknote className="h-8 w-8 text-accent" />
              <p className="font-bold text-primary-foreground">당일 현금 지급</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-accent" />
              <p className="font-bold text-primary-foreground">24시간 상담 가능</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
