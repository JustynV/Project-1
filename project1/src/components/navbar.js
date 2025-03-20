'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function Navigator(){
  const router = useRouter()
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
  <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
    <Link
      href="/"
      className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
    >
      Home
    </Link>
    <Link
      href="/features"
      className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
    >
      Features
    </Link>
    <Link
      href="/biling"
      className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
    >
      Pricing
    </Link>
    <Link
      href="/pages/blog"
      className="border-b-2 border-transparent  hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
    >
      Blog
    </Link>
  </div>
</nav>
  )
}