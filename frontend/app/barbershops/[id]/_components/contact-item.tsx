"use client"

import * as React from "react"
import { SmartphoneIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"

interface ContactItemProps {
  phone: string
}

export default function ContactItem({ phone }: ContactItemProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      console.error("Falha ao copiar telefone", e)
    }
  }

  return (
    <div className="rounded-xl border p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <SmartphoneIcon />
          <p className="text-sm font-medium">{phone}</p>
        </div>

        <Button variant="outline" size="sm" onClick={handleCopy}>
          Copiar
        </Button>
      </div>

      {copied && (
        <p className="mt-2 text-xs text-green-600">
          Telefone copiado para a área de transferência!
        </p>
      )}
    </div>
  )
}
