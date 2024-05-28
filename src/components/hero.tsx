export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6">Welcome to Olive</h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Your top choice for organic olive products from Al-Jouf, northern Saudi Arabia. We
              offer premium quality olives and olive oil, grown and harvested using organic farming
              practices.
            </p>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-sm md:text-base hover:bg-white hover:text-gray-900 hover:border-gray-900 transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
          <div className="lg:order-last">
            <img
              alt="Hero"
              className="rounded-xl object-cover object-center w-full h-full"
              src="../hero.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
