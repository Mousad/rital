"use client";

import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Loader2, Send } from "lucide-react";

const SERVICES = [
  { value: "certificates", label: "استخراج الشهادات" },
  { value: "study-china", label: "الدراسة في الصين" },
  { value: "study-egypt", label: "الدراسة في مصر" },
  { value: "scholarships", label: "المنح الدراسية" },
  { value: "consultation", label: "استشارة تعليمية" },
  { value: "other", label: "خدمة أخرى" },
];

const COUNTRY_CODES = [
  { code: "+20", flag: "🇪🇬" },
  { code: "+249", flag: "🇸🇩" },
  { code: "+966", flag: "🇸🇦" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+974", flag: "🇶🇦" },
  { code: "+965", flag: "🇰🇼" },
  { code: "+968", flag: "🇴🇲" },
  { code: "+962", flag: "🇯🇴" },
];

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [loading, setLoading] = useState(false);

  const [service, setService] = useState<string>(defaultService || "");

  const [educationLevel, setEducationLevel] = useState("");
  const [targetCountry, setTargetCountry] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [countryCode, setCountryCode] = useState("+20");
  const [phone, setPhone] = useState("");

  function detectCountryCode(value: string) {
    const cleaned = value.replace(/\D/g, "");

    // السودان
    if (cleaned.startsWith("9") || cleaned.startsWith("1")) {
      setCountryCode("+249");
    }

    // مصر
    else if (
      cleaned.startsWith("10") ||
      cleaned.startsWith("11") ||
      cleaned.startsWith("12") ||
      cleaned.startsWith("15")
    ) {
      setCountryCode("+20");
    }

    // السعودية
    else if (cleaned.startsWith("5")) {
      setCountryCode("+966");
    }

    // الإمارات
    else if (
      cleaned.startsWith("50") ||
      cleaned.startsWith("52") ||
      cleaned.startsWith("54") ||
      cleaned.startsWith("55")
    ) {
      setCountryCode("+971");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const payload = Object.fromEntries(formData.entries());

      const phone = String(payload.phone).trim();

      // التحقق من الرقم
      if (phone.startsWith("+") || phone.startsWith("00")) {
        toast.error("اكتب رقم الهاتف بدون مفتاح الدولة");

        setLoading(false);
        return;
      }

      const fullWhatsapp = `${countryCode}${phone}`;

      await emailjs.send(
        "service_6f9wr56",
        "template_i16kxce",
        {
          name: payload.name,
          email: payload.email,
          phone: fullWhatsapp,
          whatsapp: fullWhatsapp,
          message: payload.message,
          service: service,

          country: payload.country,
          education_level: educationLevel,
          specialization: payload.specialization,
          target_country: targetCountry,
          study_time: studyTime,
          budget: payload.budget,
        },
        "1r417iv__IDFDFN9D",
      );

      toast.success("تم إرسال طلبك بنجاح ", {
        description: "سيقوم فريق ريتال بمراجعة بياناتك والتواصل معك قريباً.",
      });

      e.currentTarget.reset();

      setService(defaultService || "");
      setEducationLevel("");
      setTargetCountry("");
      setStudyTime("");
      setCountryCode("+20");
      setPhone("");
    } catch (error) {
      console.log(error);

      toast.error("حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* الاسم + الدولة الحالية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="name ">الاسم الكامل</Label>

          <Input
            id="name"
            name="name"
            required
            placeholder="أدخل اسمك الكامل"
            className=""
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="country">الدولة الحالية</Label>

          <Input
            id="country"
            name="country"
            required
            placeholder="مثال: السودان"
          />
        </div>
      </div>

      {/* الهاتف */}
      <div className="grid gap-2">
        <Label>رقم الواتساب</Label>

        <div className="relative">
          {/* مفتاح الدولة */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="h-8 w-[105px] border-0 bg-transparent shadow-none focus:ring-0">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {COUNTRY_CODES.map((item) => (
                  <SelectItem key={item.code} value={item.code}>
                    <span className="flex items-center gap-2">
                      <span>{item.flag}</span>
                      <span>{item.code}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* الانبوت */}
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            dir="ltr"
            value={phone}
            placeholder="10xxxxxxxx"
            className="pl-[120px]"
            onChange={(e) => {
              const value = e.target.value;

              setPhone(value);

              detectCountryCode(value);
            }}
          />
        </div>
      </div>

      {/* التخصص + الميزانية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="specialization">التخصص المطلوب</Label>

          <Input
            id="specialization"
            name="specialization"
            required
            placeholder="مثال: الطب البشري"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="budget">الميزانية التقريبية</Label>

          <Input id="budget" name="budget" required placeholder="مثال: 5000$" />
        </div>
      </div>

      {/* الإيميل */}
      <div className="grid gap-2">
        <Label htmlFor="email">البريد الإلكتروني</Label>

        <Input
          id="email"
          name="email"
          required
          type="email"
          placeholder="example@gmail.com"
          dir="ltr"
        />
      </div>

     {/* الخدمة + المرحلة + الدولة + موعد الدراسة */}
<div className="w-full flex justify-center">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-5xl px-2">

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

    {/* المرحلة الدراسية */}
    <div className="grid gap-2">
      <Label>المرحلة الدراسية</Label>

      <Select value={educationLevel} onValueChange={setEducationLevel}>
        <SelectTrigger>
          <SelectValue placeholder="اختر المرحلة" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ثانوية">ثانوية</SelectItem>
          <SelectItem value="دبلوم">دبلوم</SelectItem>
          <SelectItem value="بكالوريوس">بكالوريوس</SelectItem>
          <SelectItem value="ماجستير">ماجستير</SelectItem>
          <SelectItem value="دكتوراه">دكتوراه</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* الدولة المطلوبة */}
    <div className="grid gap-2">
      <Label>الدولة المطلوبة</Label>

      <Select value={targetCountry} onValueChange={setTargetCountry}>
        <SelectTrigger>
          <SelectValue placeholder="اختر الدولة" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="مصر">مصر</SelectItem>
          <SelectItem value="الصين">الصين</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* موعد الدراسة */}
    <div className="grid gap-2">
      <Label>موعد الدراسة</Label>

      <Select value={studyTime} onValueChange={setStudyTime}>
        <SelectTrigger>
          <SelectValue placeholder="اختر الموعد" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="خلال 3 أشهر">خلال 3 أشهر</SelectItem>
          <SelectItem value="خلال 6 أشهر">خلال 6 أشهر</SelectItem>
          <SelectItem value="السنة القادمة">السنة القادمة</SelectItem>
        </SelectContent>
      </Select>
    </div>

  </div>
</div>

      {/* الرسالة */}
      <div className="grid gap-2">
        <Label htmlFor="message">تفاصيل إضافية</Label>

        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="اكتب تفاصيل طلبك هنا"
        />
      </div>

      {/* زر الإرسال */}
      <Button type="submit" disabled={loading} className="w-full bg-[#27215f]">
        {loading ? (
          <>
            <Loader2 className="animate-spin w-4 h-4" />
            جارٍ الإرسال...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            إرسال 
          </>
        )}
      </Button>
    </form>
  );
}
