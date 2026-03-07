import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">

        {/* Logo */}
        <h1 className="text-orange-500 font-bold text-xl">
          D.M
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About me</li>
          <li className="hover:text-orange-500 cursor-pointer">Projects</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact me</li>
        </ul>

        {/* Hire Me Button (Desktop) */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 px-6 pb-6">
          <ul className="flex flex-col space-y-4 text-gray-300">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About me</li>
            <li className="hover:text-orange-500 cursor-pointer">Projects</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact me</li>
          </ul>

          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  )
}