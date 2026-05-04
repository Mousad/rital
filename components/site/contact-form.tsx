"use client"

import { useState } from "react"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"

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

    try {
      const formData = new FormData(e.currentTarget)
      const payload = Object.fromEntries(formData.entries())

      await emailjs.send(
        "service_6f9wr56",      // Service ID ✔️
        "template_i16kxce",     // Template ID ✔️
        {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
          service: service,
        },
       "1r417iv__IDFDFN9D"      // ⚠️ حط Public Key هنا
      )

      toast.success("تم إرسال طلبك بنجاح!", {
        description: "سنتواصل معك خلال 24 ساعة.",
      })

      e.currentTarget.reset()
      setService(defaultService || undefined)

    } catch (error) {
      console.log(error)
      toast.error("فشل إرسال الرسالة ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">

      {/* الاسم + الهاتف */}
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="grid gap-2">
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input id="name" name="name" required placeholder="أدخل اسمك" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input id="phone" name="phone" required type="tel" placeholder="+20 ..." />
        </div>
      </div>

      {/* الإيميل */}
      {!compact && (
        <div className="grid gap-2">
          <Label htmlFor="email">الإيميل (اختياري)</Label>
          <Input id="email" name="email" type="email" placeholder="email@example.com" />
        </div>
      )}

      {/* الخدمة */}
      <div className="grid gap-2">
        <Label>الخدمة المطلوبة</Label>

        <Select value={service} onValueChange={setService} required>
          <SelectTrigger>
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

      {/* الرسالة */}
      {!compact && (
        <div className="grid gap-2">
          <Label htmlFor="message">رسالتك</Label>
          <Textarea id="message" name="message" rows={4} />
        </div>
      )}

      {/* زر الإرسال */}
      <Button type="submit" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="animate-spin w-4 h-4" />
            جارٍ الإرسال...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            إرسال الطلب
          </>
        )}
      </Button>

    </form>
  )
}