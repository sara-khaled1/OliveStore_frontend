import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"

export default function About() {
  return (
    <>
      <NavBar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                  Our Story
                </h1>
                <p className="mt-4 max-w-2xl md:text-xl text-white">
                  Located in the fertile lands of Al-Jouf, renowned for producing the best olives in
                  Saudi Arabia, our journey began with a passion for purity and nature. We are
                  dedicated to bringing you the freshest and healthiest olive products, ensuring
                  that every item meets our rigorous quality standards.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                alt="About Us"
                className="rounded-xl object-cover w-full h-auto lg:max-w-md"
                src="../about.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
