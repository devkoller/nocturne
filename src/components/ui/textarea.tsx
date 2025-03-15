import * as React from "react"
import { useTranslation } from 'react-i18next';

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, placeholder, ...props }, ref) => {
  const { t } = useTranslation()
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500",
        className
      )}
      ref={ref}
      {...props}
      placeholder={t(placeholder || '')}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
