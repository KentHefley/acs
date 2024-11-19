"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./zodSchema";


export async function TalkToSalesAction(prevState: unknown, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    });

    if(submission.status !== "success") {
        return submission.reply()
    }


const response = await fetch(process.env.TALK_TO_SALES_URL!, {
    method: "POST",
    body: formData,
})

if (!response.ok) {
    throw new Error("Failed to send message to sales team")
}
return redirect("/success")
}

// Support Ticket Action

export async function SupportTicketAction(prevState: unknown, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    });

    if(submission.status !== "success") {
        return submission.reply()
    }


const response = await fetch(process.env.SUPPORT_TICKET_URL!, {
    method: "POST",
    body: formData,
})

if (!response.ok) {
    throw new Error("Failed to send message to sales team")
}
return redirect("/success")
}