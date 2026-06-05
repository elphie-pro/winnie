import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  console.log('API KEY:', process.env.RESEND_API_KEY)
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'onazjr2006@gmail.com',
      subject: 'SHE SAID YES!! 🎉',
      html: `
        <h1>SHE SAID YES!! 🎉🎉🎉</h1>
        <p>Ayomide clicked Yes!</p>
        <p>You're no longer a free man 😝</p>
      `
    })
    console.log(data)
    return Response.json({ success: true })
  } catch (error) {
    console.error('RESEND ERROR:', error)
    return Response.json({ error }, { status: 500 })
  }
}