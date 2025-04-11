"use client"

import Link from "next/link" 
import { Button } from "@/components/ui/button"

export default function Sidebar() { return ( <aside className="w-full md:w-64 border-r p-4 bg-white shadow-sm"> 
<h2 className="text-lg font-semibold mb-4"></h2> <Link href="/predict/upload"> 
<Button className="w-full " variant="default"> Upload Image </Button> </Link> </aside> ) }