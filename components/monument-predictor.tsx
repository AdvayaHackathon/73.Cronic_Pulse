"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getMonumentByName } from "@/lib/monuments"
import MonumentDetail from "@/components/monument-detail"
import type { Monument } from "@/types/monument"

export type MonumentPredictorProps = {
  onSelectMonument?: (monumentName: string) => void
}

export default function MonumentPredictor({ onSelectMonument }: MonumentPredictorProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<{ place: string; confidence: number } | null>(null)
  const [details, setDetails] = useState<Monument | null>(null)
  const [loading, setLoading] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
      setResult(null)
      setDetails(null)
      setShowDetail(false)
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()

      const fetched = await getMonumentByName(data.place)
      if (fetched) {
        setDetails(fetched)
        setShowDetail(true)
        if (onSelectMonument && fetched.name) onSelectMonument(fetched.name)
      } else {
        setResult({ place: data.place, confidence: data.confidence })
        setDetails(null)
        setShowDetail(true)
      }
    } catch (err) {
      console.error("Prediction error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle>Upload a Photo to Identify a Monument</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
        />

        {preview && <img src={preview} alt="Preview" className="rounded w-full max-w-sm" />}

        <Button onClick={handleUpload} disabled={!file || loading}>
          {loading ? "Analyzing..." : "Predict Monument"}
        </Button>

        {showDetail && (
          <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in">
            {details ? (
              <MonumentDetail monument={{ ...details}} isOpen={true} onClose={() => setShowDetail(false)} />
            ) : (
              <div className="bg-white p-6 rounded shadow max-w-sm text-center">
                <h2 className="text-xl font-semibold mb-2">Prediction</h2>
                <p className="mb-1">Place: {result?.place}</p>
                <p className="mb-4">Confidence: {result?.confidence}</p>
                <p className="text-muted-foreground">No matching monument found in database.</p>
                <Button className="mt-4" onClick={() => setShowDetail(false)}>Close</Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
