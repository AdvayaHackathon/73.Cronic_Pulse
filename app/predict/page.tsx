"use client"

import { useRouter } from "next/navigation" 
import { Button } from "@/components/ui/button"

export default function PredictPage() { const router = useRouter()

const handleNavigate = () => { router.push("/predict/upload") }

return ( <main className="container mx-auto px-4 py-8"> 
<h1 className="text-2xl font-bold mb-6">Upload Image to Identify Monument</h1> 
<Button onClick={handleNavigate} className="bg-blue-600 text-white"> Click here to upload image </Button> </main> ) }