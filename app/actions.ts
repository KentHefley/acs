/* ------------------------------------------------------------------
   Server actions – require a captcha token, let Getform verify it
   ------------------------------------------------------------------ */
'use server'

import { parseWithZod } from '@conform-to/zod'
import { submissionSchema } from './zodSchema'
import { redirect } from 'next/navigation'

type Submission = Awaited<ReturnType<typeof parseWithZod>>
type ReplyFn    = Submission['reply']

async function forwardToGetform(
  formData: FormData,
  endpoint: string,
  reply: ReplyFn,
) {
  const token = formData.get('g-recaptcha-response') as string | null
  if (!token || token.length === 0) {
    return { ...reply(), formError: 'Please complete the captcha.' }
  }

  const resp = await fetch(endpoint, {
    method: 'POST',
    body: formData,          // still includes the token for Getform to verify
  })

  if (!resp.ok) {
    console.error('Getform rejected:', await resp.text())
    return { ...reply(), formError: 'Unable to send message.' }
  }

  redirect('/success')
}

/* ---------- Talk to Sales ---------- */
export async function TalkToSalesAction(
  _prev: unknown,
  formData: FormData,
) {
  const submission = await parseWithZod(formData, { schema: submissionSchema })
  if (submission.status !== 'success') return submission.reply()

  return forwardToGetform(
    formData,
    process.env.TALK_TO_SALES_URL!,
    submission.reply,
  )
}

/* ---------- Support Ticket ---------- */
export async function SupportTicketAction(
  _prev: unknown,
  formData: FormData,
) {
  const submission = await parseWithZod(formData, { schema: submissionSchema })
  if (submission.status !== 'success') return submission.reply()

  return forwardToGetform(
    formData,
    process.env.SUPPORT_TICKET_URL!,
    submission.reply,
  )
}
