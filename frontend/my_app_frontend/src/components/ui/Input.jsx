import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Input = forwardRef(({ 
  className, 
  type = "text",
  error,
  label,
  helperText,
  required = false,
  ...props 
}, ref) => {
  const inputStyles = cn(
    "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    error 
      ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    className
  )

  const inputId = props.id || props.name

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={inputId}
        className={inputStyles}
        {...props}
      />
      {(error || helperText) && (
        <p className={cn(
          "mt-1 text-sm",
          error ? "text-red-600" : "text-gray-500"
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = "Input"

export { Input }
