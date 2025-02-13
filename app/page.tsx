"use client"

import { useState } from "react"
import Link from "next/link"

export default function ChatInterface() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col">
      {/* Navigation */}
      <nav className="h-[44px] px-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#2A2B32] rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3.5H5.5C4.67157 3.5 4 4.17157 4 5V19C4 19.8284 4.67157 20.5 5.5 20.5H18.5C19.3284 20.5 20 19.8284 20 19V12M19.5 3.5L15.5 3.5M19.5 3.5V7.5M19.5 3.5L11.5 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            <span className="font-semibold">ChatGPT</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm hover:bg-[#2A2B32] rounded-lg">Log in</button>
          <button className="px-3 py-1 text-sm bg-white text-black rounded-lg hover:bg-gray-200">Sign up</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="text-[32px] font-medium mb-6">What can I help with?</div>

        {/* Message Input Area */}
        <div className="w-full max-w-[650px] bg-[#303030] rounded-xl overflow-hidden">
          <div className="p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message ChatGPT"
              className="w-full bg-transparent resize-none focus:outline-none min-h-[52px] max-h-[200px] text-white placeholder:text-gray-400"
              style={{ height: "52px" }}
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t border-[#454545]">
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-[#454545] hover:bg-[#3a3a3a]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b4b3ae"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-[#454545] hover:bg-[#3a3a3a]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b4b3ae"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-[#454545] hover:bg-[#3a3a3a]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b4b3ae"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                  <line x1="10" y1="3" x2="8" y2="21" />
                  <line x1="16" y1="3" x2="14" y2="21" />
                </svg>
              </button>
            </div>
            <button className="p-2 rounded-full border border-[#454545] hover:bg-[#3a3a3a]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b4b3ae"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-[#303030] rounded-xl hover:bg-[#3a3a3a] whitespace-nowrap text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b4b3ae"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Summarize text
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#303030] rounded-xl hover:bg-[#3a3a3a] whitespace-nowrap text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b4b3ae"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Code
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#303030] rounded-xl hover:bg-[#3a3a3a] whitespace-nowrap text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b4b3ae"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Surprise me
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#303030] rounded-xl hover:bg-[#3a3a3a] whitespace-nowrap text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b4b3ae"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Get advice
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#303030] rounded-xl hover:bg-[#3a3a3a] whitespace-nowrap text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b4b3ae"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Analyze images
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#303030] rounded-xl hover:bg-[#3a3a3a] whitespace-nowrap text-sm">
            More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        <p>
          By messaging ChatGPT, you agree to our{" "}
          <Link href="#" className="underline hover:text-gray-400">
            Terms
          </Link>{" "}
          and have read our{" "}
          <Link href="#" className="underline hover:text-gray-400">
            Privacy Policy
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}

