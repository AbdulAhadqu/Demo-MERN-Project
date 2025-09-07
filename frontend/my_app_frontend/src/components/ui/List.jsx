import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const List = forwardRef(({ 
  className, 
  variant = "unordered", 
  spacing = "default",
  children, 
  ...props 
}, ref) => {
  const Component = variant === "ordered" ? "ol" : "ul"

  const spacings = {
    none: "",
    sm: "space-y-1",
    default: "space-y-2",
    lg: "space-y-3"
  }

  return (
    <Component
      ref={ref}
      className={cn(
        {
          "list-disc list-inside": variant === "unordered",
          "list-decimal list-inside": variant === "ordered",
        },
        spacings[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
})

const ListItem = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <li 
      ref={ref} 
      className={cn("text-sm leading-relaxed", className)} 
      {...props}
    >
      {children}
    </li>
  )
})

List.displayName = "List"
ListItem.displayName = "ListItem"

export { List, ListItem }
