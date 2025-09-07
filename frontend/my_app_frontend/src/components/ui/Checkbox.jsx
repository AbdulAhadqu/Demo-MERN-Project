import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Checkbox = forwardRef(({ 
  className,
  label,
  error,
  checked,
  onChange,
  ...props 
}, ref) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={cn(
            "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0",
            error && "border-red-300",
            className
          )}
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label htmlFor={props.id} className="text-gray-700">
            {label}
          </label>
          {error && (
            <p className="text-red-600 text-xs mt-1">{error}</p>
          )}
        </div>
      )}
    </div>
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }
