import { forwardRef, useState } from "react"
import { cn } from "../../lib/utils"

const Select = forwardRef(({ 
  className,
  options = [],
  placeholder = "Select an option",
  label,
  error,
  required = false,
  value,
  onChange,
  ...props 
}, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || "")

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue)
    setIsOpen(false)
    if (onChange) {
      onChange({ target: { value: optionValue } })
    }
  }

  const selectedOption = options.find(opt => opt.value === selectedValue)

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <button
          ref={ref}
          type="button"
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
            error 
              ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
            className
          )}
          onClick={() => setIsOpen(!isOpen)}
          {...props}
        >
          <span className={selectedValue ? "text-gray-900" : "text-gray-500"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
            <ul className="max-h-60 overflow-auto py-1">
              {options.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className="flex w-full items-center px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Select.displayName = "Select"

export { Select }
