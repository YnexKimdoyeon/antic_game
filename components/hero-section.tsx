import { CTAGroup, PhoneDisplay } from "@/components/cta-buttons"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            각종 게임기 매입,
            <br />
            믿을 수 있는 연희실장
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
            플레이스테이션 · 닌텐도 · 엑스박스 · Steam Deck까지 모두 매입
          </p>

          <PhoneDisplay className="py-6" />

          <CTAGroup className="pt-4" />

          <p className="text-sm text-primary-foreground/70 pt-4">24시간 상담 가능</p>
        </div>
      </div>
    </section>
  )
}
