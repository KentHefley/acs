"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SupportTicketAction, TalkToSalesAction } from "../actions"
import { SubmitButton } from "../components/SubmitButton"
import { useFormState } from "react-dom"
import {useForm} from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { submissionSchema } from "../zodSchema"
import MapComponent from "../components/MapComponent";
import Address from "../components/Address";
import {ShoppingCart} from 'lucide-react';



export default function Contact() {
  const [salesResult,  salesAction] = useFormState(TalkToSalesAction, undefined);

  const [supportResult,  supportAction] = useFormState(SupportTicketAction, undefined);

  const [salesForm, salesFields] = useForm({
    // Sync the result of last submission
    lastResult: salesResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [supportForm, supportFields] = useForm({
    // Sync the result of last submission
    lastResult: supportResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });


  return (
    <div className="container mx-auto px-8 lg:px-12 py-8 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <ShoppingCart size={96} className="mb-4 mx-auto text-gray-300" />
      <p className="text-sm max-w-[500px] mx-auto mb-4 p-5 bg-primary/10 rounded-md">We’re here to help! Contact our sales team to learn about our shopping cart recovery services, or reach out to support if you're an existing customer needing assistance.</p>
      <section className="flex flex-col items-center justify-center mb-10">
      <Card className="max-w-[500px] w-full">
        <Tabs defaultValue="sales">
          <CardContent className="mt-5">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="sales">
                Talk to Sales
              </TabsTrigger>
              <TabsTrigger value="support">
                Support
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sales">
            <p className="text-muted-foreground text-sm">What can we help you with?</p>

            <form 
            action={salesAction} 
            id={salesForm.id}
            onSubmit={salesForm.onSubmit}
            noValidate
            className="flex flex-col gap-y-4 mt-5">

            <input type="hidden" name="_gotcha" />

            <div className="grid space-y-1">
              <Label>Name</Label>
              <Input 
                name={salesFields.name.name}
                defaultValue={salesFields.name.initialValue}
                key={salesFields.name.key}
                id="name" 
                placeholder="John Doe" 
                />
                <p className="text-red-500 text-sm">{salesFields.name.errors}</p>
            </div>
            <div className="grid space-y-1">
              <Label>Email</Label>
              <Input 
                name={salesFields.email.name}
                key={salesFields.email.key}
                defaultValue={salesFields.email.initialValue}
                id="email" 
                placeholder="john.doe@example.com" 
              />
               <p className="text-red-500 text-sm">{salesFields.email.errors}</p>
            </div>
            <div className="grid space-y-1">
              <Label>Phone</Label>
              <Input
              type="tel" 
              name={salesFields.phone.name}
              key={salesFields.phone.key}
              defaultValue={salesFields.phone.initialValue}
              id="phone" 
              placeholder="(555) 555-5555" 
              />
               <p className="text-red-500 text-sm">{salesFields.phone.errors}</p>
            </div>
            <div className="grid space-y-1">
            <Label>Email</Label>
              <Textarea 
                name={salesFields.message.name}
                key={salesFields.message.key}
                defaultValue={salesFields.message.initialValue}
                id="message" 
                className="h-32" 
                placeholder="Please share some details about your needs..." 
                />
                 <p className="text-red-500 text-sm">{salesFields.message.errors}</p>
            </div>
            <SubmitButton />
            </form>
            </TabsContent>
            {/* Second Tab */}
            <TabsContent value="support">
            <p className="text-muted-foreground text-sm"><span className="font-semibold">Existing clients: </span>Report a problem or request service. If you have located carts that need retreival, please give us location details and image files if available. Please provide your client ID</p>
            <form 
              id={supportForm.id} 
              onSubmit={supportForm.onSubmit} 
              action={supportAction} 
              noValidate 
              className="flex flex-col gap-y-4 mt-5"
              >
            <input type="hidden" name="_gotcha" />
              <div className="grid space-y-1">
                <Label>Name</Label>
                <Input 
                name={supportFields.name.name}
                key={supportFields.name.key}
                placeholder="John Doe" 
                defaultValue={supportFields.name.initialValue} 
                />
                <p className="text-red-500 text-sm">{supportFields.name.errors}</p>
              </div>
              <div className="grid space-y-1">
                <Label>Email</Label>
                <Input 
                name={supportFields.email.name}
                key={supportFields.email.key}
                defaultValue={supportFields.email.initialValue}
                placeholder="john.doe@example.com" 
                 />
                  <p className="text-red-500 text-sm">{supportFields.email.errors}</p>
              </div>
              <div className="grid space-y-1">
                <Label>Phone</Label>
                <Input 
                name={supportFields.phone.name}
                key={supportFields.phone.key}
                defaultValue={supportFields.phone.initialValue}
                placeholder="(555) 555-5555" 
                />
                 <p className="text-red-500 text-sm">{supportFields.phone.errors}</p>
              </div>
              <div className="grid space-y-1">
                <Label>Problem</Label>
              <Textarea 
                name={supportFields.message.name}
                key={supportFields.message.key}
                defaultValue={supportFields.message.initialValue}
                className="h-32" 
                placeholder="Describe your issue..." />
                 <p className="text-red-500 text-sm">{supportFields.message.errors}</p>
              </div>
              <div className="grid space-y-1">
                <Label>Supporting File or Image</Label>
                <Input 
                  name={supportFields.file.name}
                  key={supportFields.file.key}
                  type="file" 
                  className="cursor-pointer" 
                  placeholder="Upload a file..." 
                  />
              </div>
              <SubmitButton />
            </form>
            </TabsContent>

          </CardContent>
        </Tabs>
      </Card>
      </section>
      <MapComponent />
      <Address />
    </div>
  )
}
