"use client";

import { CheeseView } from "@/components/CheeseView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 pt-60">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                <div>Hello,</div>
                <div>I&apos;m Ryoma Maeda.</div>
              </h1>
              <div className="flex flex-row items-center justify-center gap-2">
                <Tabs defaultValue="frontend">
                  <TabsList>
                    <TabsTrigger value="frontend" className="text-2xl">
                      Frontend
                    </TabsTrigger>
                    <TabsTrigger value="backend" className="text-2xl">
                      Backend
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="frontend" className="hidden" />
                  <TabsContent value="backend" className="hidden" />
                </Tabs>
                <p className="ml-4 leading-relaxed text-foreground text-2xl">
                  engineer
                </p>
              </div>
            </div>

            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1620206343767-7da98185edd4?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
