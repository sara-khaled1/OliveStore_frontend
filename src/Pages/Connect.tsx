import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import { Instagram } from "lucide-react"

export default function Connect() {
  return (
    <>
      <NavBar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Connect with Us
            </h2>
            <p className="mx-auto max-w-xl text-lg md:text-xl lg:text-2xl text-white">
              Follow us on social media to stay up-to-date with our latest news and updates.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                <Instagram size={40} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
