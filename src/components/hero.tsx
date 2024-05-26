import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/hero.jpg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Welcome to Olive
              </h1>
              <p className="max-w-[600px] md:text-xl">
                your top choice for organic olive products from Al-Jouf, northern Saudi Arabia. We
                offer premium quality olives and olive oil, grown and harvested using organic
                farming practices.
              </p>
              <Button type="submit">Get Prodcts</Button>
            </div>
            <div className="w-full max-w-sm space-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
