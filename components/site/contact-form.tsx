"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, Send } from "lucide-react"

const SERVICES = [
  { value: "certificates", label: "استخراج الشهادات" },
  { value: "study-china", label: "الدراسة في الصين" },
  { value: "study-egypt", label: "الدراسة في مصر" },
  { value: "scholarships", label: "المنح الدراسية" },
  { value: "consultation", label: "استشارة تعليمية" },
  { value: "other", label: "خدمة أخرى" },
]

export function ContactForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string
  compact?: boolean
}) {
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState<string | undefined>(defaultService)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    console.log("[v0] Contact form submitted:", payload)

    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900))

    setLoading(false)
    toast.success("تم إرسال طلبك بنجاح!", {
      description: "سنتواصل معك خلال 24 ساعة.",
    })
    e.currentTarget.reset()
    setService(defaultService)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-sm font-medium">
            الاسم الكامل
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="أدخل اسمك"
            className="h-11 rounded-xl bg-background"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            رقم الهاتف
          </Label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="+20 ..."
            dir="ltr"
            className="h-11 rounded-xl bg-background text-right"
          />
        </div>
      </div>

      {!compact && (
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm font-medium">
            البريد الإلكتروني (اختياري)
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            dir="ltr"
            className="h-11 rounded-xl bg-background text-right"
          />
        </div>
      )}

      <div className="grid gap-2">
        <Label htmlFor="service" className="text-sm font-medium">
          الخدمة المطلوبة
        </Label>
        <Select
          name="service"
          value={service}
          onValueChange={setService}
          required
        >
          <SelectTrigger id="service" className="h-11 rounded-xl bg-background">
            <SelectValue placeholder="اختر الخدمة" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!compact && (
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-sm font-medium">
            رسالتك
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="اكتب تفاصيل طلبك هنا..."
            rows={4}
            className="rounded-xl bg-background resize-none"
          />
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            جارٍ الإرسال...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            إرسال الطلب
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        بإرسالك هذا النموذج فإنك توافق على أن نتواصل معك بخصوص استفسارك.
      </p>
    </form>
  )
}
