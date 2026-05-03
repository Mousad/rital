import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const { name, email, phone, message, service } = body

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "youremail@gmail.com", // ← حط إيميلك هنا
      subject: "طلب استشارة جديد",
      html: `
        <h2>طلب جديد من الموقع</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الإيميل:</strong> ${email}</p>
        <p><strong>الموبايل:</strong> ${phone}</p>
        <p><strong>الخدمة:</strong> ${service}</p>
        <p><strong>الرسالة:</strong> ${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false }, { status: 500 })
  }
}