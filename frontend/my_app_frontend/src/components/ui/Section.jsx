import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Section = forwardRef(({ 
  className, 
  variant = "default",
  padding = "default",
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900 text-white"
  }

  const paddings = {
    none: "",
    sm: "py-8 px-4 sm:px-6",
    default: "py-12 px-4 sm:px-6 lg:px-8",
    lg: "py-16 px-4 sm:px-6 lg:px-8",
    xl: "py-24 px-4 sm:px-6 lg:px-8"
  }

  return (
    <section
      ref={ref}
      className={cn(
        "w-full",
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
})

Section.displayName = "Section"

export { Section }
