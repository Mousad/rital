import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()
    const { name, email, phone, message, service } = body

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "suppors249@gmail.com",
      subject: "📩 رسالة جديدة من الموقع",
      html: `
        <h2>طلب جديد</h2>
        <p>الاسم: ${name}</p>
        <p>الهاتف: ${phone}</p>
        <p>الإيميل: ${email}</p>
        <p>الخدمة: ${service}</p>
        <p>الرسالة: ${message}</p>
      `,
    })

    return Response.json({ success: true })

  } catch (err) {
    console.error(err)
    return Response.json({ success: false })
  }
}