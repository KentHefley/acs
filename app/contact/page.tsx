"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SupportTicketAction, TalkToSalesAction } from "../actions"
import { SubmitButton } from "../components/SubmitButton"
import { useFormState } from "react-dom"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { submissionSchema } from "../zodSchema"
import MapComponent from "../components/MapComponent"
import Address from "../components/Address"
import { ShoppingCart } from "lucide-react"
import ReCaptchaField from "../components/ReCaptchaField"

/* Helper to render Conform errors safely */
function ErrorText({ errors }: { errors: unknown }) {
  if (!errors || (Array.isArray(errors) && errors.length === 0)) return null
  return (
    <p className="text-red-500 text-sm">
      {Array.isArray(errors) ? errors.join(", ") : String(errors)}
    </p>
  )
}

export default function Contact() {
  const [salesResult, salesAction] = useFormState(TalkToSalesAction, undefined)
  const [supportResult, supportAction] = useFormState(
    SupportTicketAction,
    undefined,
  )

  const [salesForm, salesFields] = useForm({
    lastResult: salesResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema })
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  })

  const [supportForm, supportFields] = useForm({
    lastResult: supportResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema })
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  })

  return (
    <div className="container mx-auto px-8 lg:px-12 py-8 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact Us
      </h1>

      <ShoppingCart size={96} className="mb-4 mx-auto text-gray-300" />

      {/* ---------------- TABS ---------------- */}
      <Card className="max-w-[500px] w-full mx-auto mb-10">
        <Tabs defaultValue="support">
          <CardContent className="mt-5">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
              <TabsTrigger value="support">Report Lost Carts</TabsTrigger>
            </TabsList>

            {/* ---------- SALES ---------- */}
            <TabsContent value="sales">
              <form
                id={salesForm.id}
                onSubmit={salesForm.onSubmit}
                action={salesAction}
                noValidate
                className="flex flex-col gap-y-4 mt-5"
              >
                <input type="hidden" name="_gotcha" />

                {/* name */}
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input
                    name={salesFields.name.name}
                    key={salesFields.name.key}
                    defaultValue={salesFields.name.initialValue as string}
                    placeholder="John Doe"
                  />
                  <ErrorText errors={salesFields.name.errors} />
                </div>

                {/* email */}
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input
                    name={salesFields.email.name}
                    key={salesFields.email.key}
                    defaultValue={salesFields.email.initialValue as string}
                    placeholder="john.doe@example.com"
                  />
                  <ErrorText errors={salesFields.email.errors} />
                </div>

                {/* phone */}
                <div className="grid space-y-1">
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    name={salesFields.phone.name}
                    key={salesFields.phone.key}
                    defaultValue={salesFields.phone.initialValue as string}
                    placeholder="(555) 555-5555"
                  />
                  <ErrorText errors={salesFields.phone.errors} />
                </div>

                {/* message */}
                <div className="grid space-y-1">
                  <Label>Message</Label>
                  <Textarea
                    name={salesFields.message.name}
                    key={salesFields.message.key}
                    defaultValue={salesFields.message.initialValue as string}
                    className="h-32"
                    placeholder="Please share some details…"
                  />
                  <ErrorText errors={salesFields.message.errors} />
                </div>

                {/* --- CAPTCHA --- */}
                <ReCaptchaField
                  siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />

                <SubmitButton />
              </form>
            </TabsContent>

            {/* ---------- SUPPORT ---------- */}
            <TabsContent value="support">
              <form
                id={supportForm.id}
                onSubmit={supportForm.onSubmit}
                action={supportAction}
                noValidate
                className="flex flex-col gap-y-4 mt-5"
              >
                <input type="hidden" name="_gotcha" />

                {/* name */}
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input
                    name={supportFields.name.name}
                    key={supportFields.name.key}
                    defaultValue={supportFields.name.initialValue as string}
                    placeholder="John Doe"
                  />
                  <ErrorText errors={supportFields.name.errors} />
                </div>

                {/* email */}
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input
                    name={supportFields.email.name}
                    key={supportFields.email.key}
                    defaultValue={supportFields.email.initialValue as string}
                    placeholder="john.doe@example.com"
                  />
                  <ErrorText errors={supportFields.email.errors} />
                </div>

                {/* phone */}
                <div className="grid space-y-1">
                  <Label>Phone</Label>
                  <Input
                    name={supportFields.phone.name}
                    key={supportFields.phone.key}
                    defaultValue={supportFields.phone.initialValue as string}
                    placeholder="(555) 555-5555"
                  />
                  <ErrorText errors={supportFields.phone.errors} />
                </div>

                {/* problem */}
                <div className="grid space-y-1">
                  <Label>Problem</Label>
                  <Textarea
                    name={supportFields.message.name}
                    key={supportFields.message.key}
                    defaultValue={supportFields.message.initialValue as string}
                    className="h-32"
                    placeholder="Describe your issue…"
                  />
                  <ErrorText errors={supportFields.message.errors} />
                </div>

                {/* file upload */}
                <div className="grid space-y-1">
                  <Label>Supporting File or Image</Label>
                  <Input
                    type="file"
                    name={supportFields.file.name}
                    key={supportFields.file.key}
                    className="cursor-pointer"
                  />
                </div>

                {/* --- CAPTCHA --- */}
                <ReCaptchaField
                  siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />

                <SubmitButton />
              </form>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>

      {/* map & address (unchanged) */}
      <MapComponent />
      <Address />
    </div>
  )
}