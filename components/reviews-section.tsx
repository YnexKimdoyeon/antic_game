import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    initial: "김**",
    rating: 5,
    text: "시세보다 좋은 가격에 빠른 입금까지! 정말 만족스러운 거래였습니다.",
  },
  {
    id: 2,
    initial: "이**",
    rating: 5,
    text: "데이터 삭제도 꼼꼼하게 해주시고 안심하고 거래할 수 있었어요.",
  },
  {
    id: 3,
    initial: "박**",
    rating: 5,
    text: "복지포인트로 구매한 게임기도 매입해주셔서 감사합니다!",
  },
  {
    id: 4,
    initial: "최**",
    rating: 5,
    text: "친절한 상담과 투명한 가격 책정. 다음에도 이용하겠습니다.",
  },
  {
    id: 5,
    initial: "정**",
    rating: 5,
    text: "당일 입금 정말 빠르네요. 믿고 거래할 수 있는 곳입니다.",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            광고가 아닌 고객 리뷰가
            <br />
            저희를 증명합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                <p className="text-sm font-semibold text-foreground">{review.initial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
