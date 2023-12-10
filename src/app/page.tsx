"use client";

import { CheeseView } from "@/components/CheeseView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import profilePic from "/public/images/ryoma_maeda_photo.jpg";

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 pt-60" id="top-section">
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

            <div className="overflow-hidden lg:h-auto xl:w-1/2">
              <CheeseView />
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Selected
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[480px]">
                <div className="h-full w-full object-center relative">
                  <Image
                    src={profilePic}
                    alt="Photo of Ryoma Maeda"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Our competitive advantage
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is{" "}
                <a
                  href="#"
                  className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  random
                </a>{" "}
                or otherwise generated. It may be used to display a sample of
                fonts or generate text for testing. Filler text is dummy text
                which has no meaning however looks very similar to real text.
              </p>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
