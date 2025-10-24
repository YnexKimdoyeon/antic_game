import { Card, CardContent } from "@/components/ui/card"

const channels = [
  { name: "온라인 쇼핑몰", percentage: 20 },
  { name: "중고거래 플랫폼", percentage: 18 },
  { name: "전자제품 전문몰", percentage: 15 },
  { name: "대형마트", percentage: 12 },
  { name: "쿠팡", percentage: 10 },
  { name: "더현대닷컴", percentage: 8 },
  { name: "SSG몰", percentage: 7 },
  { name: "지인선물", percentage: 10 },
]

export function ChannelsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              다양한 구매 경로의
              <br />
              게임기를 전문적으로 취급
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">정품 여부 철저히 검수 후 매입합니다</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {channels.map((channel, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:scale-105">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">{channel.percentage}%</div>
                  <p className="text-sm font-medium text-foreground">{channel.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-muted-foreground">
              다양한 경로에서 입고된 게임기를 전문적으로 취급하며,
              <br className="hidden sm:block" />
              정품 여부를 철저히 검수한 후 매입합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
