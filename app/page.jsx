import {
  Brain,
  Square,
  MessageCircleQuestionMark,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import aistudy from "@/public/aistudy.png";
export default function Home() {
  return (
    <div className="">
      <header className="flex h-20 items-center justify-between px-10">
        {/* app logo and name */}
        <div className="flex w-full items-center gap-2 ">
          {/* Brain Icon */}
          <Brain className="w-8 h-8 text-amber-600" />
          <span className="flex items-center gap-1 text-lg font-bold">
            <h1>LearnMan</h1>
            <h2 className="text-amber-600">AI</h2>
          </span>
        </div>
        <div>
          <Link href="/signin">
            <button
              className="rounded-3xl  px-4 py-2 text-white
          border-2 border-amber-600 hover:text-amber-200"
            >
              signin
            </button>
          </Link>
        </div>
      </header>
      <main className="">
        {/* ai image */}
        <div>
          <Image
            src={aistudy}
            alt="AI Study"
            className=" absolute w-full h-full object-cover z-[-1] opacity-40 "
          />
        </div>
        <div className="m-10 mt-20">
          {/* hero section */}
          <div className="flex ">
            {/* desc*/}
            <div className="flex flex-col gap-20 w-full ">
              {/* crt texts */}
              <div className="flex flex-col gap-4  font-bold">
                <h2 className="text-4xl">Master Your Studies With</h2>
                <h1 className="text-amber-600 text-4xl">LearnMan AI</h1>

                <p className="text-md text-gray-500">
                  Get instant answers, solve complex doubts, and ace every
                  subject with your personal Al study companion.
                </p>
              </div>
              <div className="flex gap-6 flex-wrap ">
                <span className="flex flex-col">
                  {/* icon */}
                  <span className="relative inline-flex items-center justify-center w-12 h-12">
                    {/* Lucide Square Outline */}
                    <Square
                      className="absolute w-full h-full text-amber-600"
                      strokeWidth={1}
                    />

                    {/* 24/7 Text styled to fit inside */}
                    <span className="text-sm font-extrabold tracking-tighter text-amber-600 font-sans p-sm">
                      24/7
                    </span>
                  </span>
                  <span>
                    <p className="text-lg font-bold">24/7 AI Tutor</p>
                    <p className="text-gray-500">
                      Get instant answers, chat with AI tutor
                    </p>
                  </span>
                </span>
                <span className="flex flex-col">
                  {/* icon */}
                  <MessageCircleQuestionMark
                    className="w-10 h-10 text-amber-600 "
                    strokeWidth={1}
                  />

                  <p className="text-lg font-bold">Intractive Doubts Solving</p>
                  <p className="text-gray-500">Intracive doubt soubts</p>
                </span>
                <span className="flex flex-col">
                  {/* icon */}
                  <Sparkles
                    className="w-10 h-10 text-amber-600 "
                    strokeWidth={1}
                  />

                  <p className="text-lg font-bold">24/7 AI Tutor</p>
                  <p className="text-gray-500">
                    Get instant answers, chat with AI tutor
                  </p>
                </span>
              </div>
              <div>
                <Link href="/signup">
                  <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-2xl w-xl py-3 text-xl">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
