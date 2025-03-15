import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { useTranslation } from 'react-i18next';


import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, placeholder, ...props }, ref) => {
    const [Type, setType] = useState(type)
    const { t } = useTranslation()

    return (
      <>
        <input
          type={Type}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500",
            className
          )}
          ref={ref}
          {...props}
          placeholder={t(placeholder || '')}
        />
        {type === "password" && (
          <Button type='button' variant='outline' onClick={() => setType(prev => prev === 'password' ? 'input' : 'password')}>{Type === 'password' ? <FaRegEye /> : <FaRegEyeSlash />}</Button>
        )}
      </>
    )
  }
)
Input.displayName = "Input"

export { Input }
