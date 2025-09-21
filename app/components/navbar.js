"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ChatApp
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            About
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-sm">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </header>
  )
}