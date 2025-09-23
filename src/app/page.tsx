import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/navigation/footer'
import { ArrowRight, Feather, GitMerge, Scale } from 'lucide-react'

export default () => {
  return (
    <div className="bg-color-base text-color-base antialiased">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />

            <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-24 sm:pt-48 sm:pb-32">
              <div className="text-center">
                <h1 className="text-5xl font-bold tracking-tighter text-color-high sm:text-7xl">
                  The Anatomy of Excellence
                </h1>
                <p className="mt-6 text-lg leading-8 text-color-low max-w-3xl mx-auto">
                  A living document on the principles of building enduring software. This is not a rulebook; it's a reflection of our craft.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button size="lg" asChild>
                    <Link href="/docs">
                      Begin the Journey <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-color-accent-base">
                  The Pillars of Our Craft
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-color-high sm:text-4xl">
                  Principles for a New Age of Development
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col">
                    <dt className="flex items-center gap-x-3 font-semibold text-color-high">
                      <Feather className="h-5 w-5 flex-none text-color-accent-base" aria-hidden="true" />
                      Clarity
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-color-low">
                      <p className="flex-auto">We believe that clarity is the bedrock of maintainable software. It's about writing code that is not just understood by machines, but by humans.</p>
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="flex items-center gap-x-3 font-semibold text-color-high">
                      <Scale className="h-5 w-5 flex-none text-color-accent-base" aria-hidden="true" />
                      Resilience
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-color-low">
                      <p className="flex-auto">We build systems that are designed to withstand the test of time. Resilience is not just about handling errors; it's about architecting for the unknown.</p>
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="flex items-center gap-x-3 font-semibold text-color-high">
                      <GitMerge className="h-5 w-5 flex-none text-color-accent-base" aria-hidden="true" />
                      Velocity
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-color-low">
                      <p className="flex-auto">We believe that speed is a byproduct of quality. By investing in our tools, our processes, and our people, we create an environment where we can move fast and with confidence.</p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-color-low/30 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-color-accent-base">
                  A Living System
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-color-high sm:text-4xl">
                  Not a Static Document
                </p>
                <p className="mt-6 text-lg leading-8 text-color-low">
                  These guidelines are not handed down from on high. They are the product of a continuous dialogue, a collective effort to refine our understanding of what it means to build great software. This is a living system, constantly evolving as we learn, grow, and adapt to new challenges.
                </p>
              </div>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </div>
  )
}
