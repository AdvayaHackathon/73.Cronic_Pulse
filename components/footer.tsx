"use client" 
import { useEffect, useState } from "react"

export default function Footer() { const [year, setYear] = useState<number | null>(null)

useEffect(() => { setYear(new Date().getFullYear()) }, [])

return ( <footer className="w-full border-t mt-8 py-4 px-6 text-sm text-muted-foreground text-center bg-white"> 
<p> © {year ?? "----"} 
    Monument Explorer. All rights reserved. | By using this site you agree to our 
    <span className="text-blue-600 underline cursor-pointer ml-1">Terms & Conditions</span>. 
    </p> </footer> ) }
