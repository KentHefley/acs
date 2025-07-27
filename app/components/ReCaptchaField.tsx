
/* Google reCAPTCHA v2 checkbox (always visible on initial load)
   ---------------------------------------------------------------- */
'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    grecaptcha: {
      render: (
        container: HTMLDivElement,
        params: {
          sitekey: string
          callback: (token: string | null) => void
          'expired-callback': () => void
        },
      ) => number
    }
  }
}

interface Props {
  siteKey: string
  fieldName?: string
}

export default function ReCaptchaField({
  siteKey,
  fieldName = 'g-recaptcha-response',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<number | null>(null)
  const [token, setToken] = useState('')

  /* Render exactly once */
  const renderWidget = () => {
    if (widgetIdRef.current !== null) return
    if (!window.grecaptcha?.render || !containerRef.current) return

    widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
      sitekey: siteKey,
      callback: (v: string | null) => setToken(v ?? ''),
      'expired-callback': () => setToken(''),
    })
  }

  /* ① Run when the Google script finishes loading */
  const handleScriptLoad = () => renderWidget()

  /* ② Fallback: poll every 250 ms until grecaptcha is present */
  useEffect(() => {
    const id = setInterval(() => {
      renderWidget()
      if (widgetIdRef.current !== null) clearInterval(id)
    }, 250)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div ref={containerRef} className="g-recaptcha my-4" />
      <input type="hidden" name={fieldName} value={token} />
    </>
  )
}
