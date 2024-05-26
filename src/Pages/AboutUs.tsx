/**
 * v0 by Vercel.
 * @see https://v0.dev/t/45r5bH53MJA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { NavBar } from "@/components/navbar"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
    <NavBar/>
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
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <img
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={550}
              src="/placeholder.svg"
              width={550}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our talented team of experts is dedicated to delivering exceptional results for our
              clients.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="John Doe"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover"
                }}
                width={120}
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400">CEO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  John is the visionary behind Acme Inc., leading the company to new heights with
                  his strategic expertise and innovative mindset.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="Jane Smith"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover"
                }}
                width={120}
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400">CTO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jane is the technical mastermind behind Acme Inc., driving innovation and ensuring
                  our products are cutting-edge and user-friendly.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="Michael Johnson"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover"
                }}
                width={120}
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">Michael Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">COO</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Michael is the operational mastermind behind Acme Inc., ensuring our processes are
                  efficient and our customers are well-served.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="Emily Davis"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover"
                }}
                width={120}
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">Emily Davis</h3>
                <p className="text-gray-500 dark:text-gray-400">Head of Design</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Emily is the creative force behind Acme Inc., crafting beautiful and user-friendly
                  designs that captivate our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
