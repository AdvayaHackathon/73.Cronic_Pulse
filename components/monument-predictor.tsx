"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getMonumentByName } from "@/lib/monuments"

export type MonumentPredictorProps = {
  onSelectMonument?: (monumentName: string) => void
}

export default function MonumentPredictor({ onSelectMonument }: MonumentPredictorProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<{ place: string; confidence: number } | null>(null)
  const [details, setDetails] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
      setResult(null)
      setDetails(null)
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
      setResult(data)

      const fetched = await getMonumentByName(data.place)
      setDetails(fetched)
      if (onSelectMonument && fetched?.name) onSelectMonument(fetched.name)
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
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {preview && <img src={preview} alt="Preview" className="rounded w-full max-w-sm" />}

        <Button onClick={handleUpload} disabled={!file || loading}>
          {loading ? "Analyzing..." : "Predict Monument"}
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-muted rounded">
            <h3 className="text-lg font-semibold">Prediction:</h3>
            <p>Monument: {result.place}</p>
            <p>Confidence: {result.confidence}</p>
          </div>
        )}

        {details && (
          <div className="mt-4 p-4 border rounded bg-card">
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <p><strong>Name:</strong> {details.name}</p>
            <p><strong>Location:</strong> {details.location}</p>
            <p><strong>Year Built:</strong> {details.yearBuilt}</p>
            <p className="mt-2 text-muted-foreground">{details.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
