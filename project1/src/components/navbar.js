'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function MainItem({ name, isSelected }) {
  if (isSelected) {
    return <Link
      href= {`/`}
      className="border-b-2 hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 text-xl p-2">
        {name}
      </Link>
  }
  return <Link
    href={`/`}
    className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 text-xl p-2">
      {name}
    </Link>
}


function Item({ name, isSelected }) {
  if (isSelected) {
    return <Link
      href= {`/${name.toLowerCase()}`}
      className="border-b-2 hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 text-xl p-2">
        {name}
      </Link>
  }
  return <Link
    href={`/${name.toLowerCase()}`}
    className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 text-xl p-2">
      {name}
    </Link>
}

export function Navigator() {
  const actualPage = usePathname()
  return (
    <nav className="bg-white shadow dark:bg-gray-800 flex justify-center">
      <MainItem
        name = "Stock"
        isSelected = {actualPage === "/"}
      />
      <Item
        name = "Sentiment"
        isSelected = {actualPage === "/sentiment"}
      />
      <Item
        name = "Reviews"
        isSelected = {actualPage === "/reviews"}
      />
      <Item
        name = "Credits"
        isSelected = {actualPage === "/credits"}
      />
    </nav>
  )
}