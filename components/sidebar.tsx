
"use client"

import { useRouter } from "next/navigation"

export default function Sidebar() {
  const router = useRouter()

  return (
    <div className="w-64 border-r p-4 flex flex-col space-y-4">
      <button
        onClick={() => router.push("/")}
        className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-700"
      >
        Home
      </button>
      <button
        onClick={() => router.push("/predict")}
        className="w-full bg-white text-black font-semibold py-2 border rounded hover:bg-gray-200"
      >
        Upload Image
      </button>
      <a
        href="https://v0-new-project-nyehrocixgl.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center bg-white text-black font-semibold py-2 border rounded hover:bg-gray-200"
      >
        Cultural Heritage
      </a>
      <a
        href="https://sensational-zuccutto-8a4fb2.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center bg-white text-black font-semibold py-2 border rounded hover:bg-gray-200"
      >
        Monuments Near Me
      </a>
    </div>
  )
}
