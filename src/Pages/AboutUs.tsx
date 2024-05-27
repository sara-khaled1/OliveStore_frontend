/**
 * v0 by Vercel.
 * @see https://v0.dev/t/45r5bH53MJA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
      <NavBar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Our Story
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Located in the fertile lands of Al-Jouf, renowned for producing the best olives in
                  Saudi Arabia, our journey began with a passion for purity and nature. We are
                  dedicated to bringing you the freshest and healthiest olive products, ensuring
                  that every item meets our rigorous quality standards.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
                <Link className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                  Contact Us
                </Link>
              </div>
            </div>
            <img
              alt="About Us"
              className="mx-auto aspect-video  rounded-xl  object-center  sm:w-full sm:h-full lg:order-last"
              height={700}
              src="about.jpg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
