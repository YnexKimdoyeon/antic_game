import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"

export function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="bg-accent/10 p-6 rounded-full">
                  <ShieldCheck className="h-12 w-12 text-accent" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                믿을 수 있는 거래,
                <br />
                신뢰할 수 있는 서비스
              </h2>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">통신판매업 신고번호: 제 2020-부산북구-0224호</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
