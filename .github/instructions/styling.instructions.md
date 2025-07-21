---
description: # Guidelines for Styling
applyTo: "**"
---

# Guidelines for Styling

## Purpose and Overview

These styling guidelines ensure consistency, readability, and maintainability across the project's components. By following these conventions, we maintain a clean and organized codebase that's easier to understand and modify.

## Tailwind CSS Usage

### Class Organization

When using the `cn()` utility function to combine Tailwind classes, rely on Prettier's automatic sorting via `prettier-plugin-tailwindcss`. Classes are automatically sorted in the following order:

1. **Base utilities** (layout, positioning, sizing)
2. **Component utilities** (borders, backgrounds, typography)
3. **Responsive variants** (sm:, md:, lg:, xl:)
4. **State variants** (hover:, focus:, active:, etc.)
5. **Custom/arbitrary values** ([custom-value])

```tsx
className={cn(
  // Base classes - automatically sorted by Prettier
  'relative mx-auto flex h-[44px] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-base-400 bg-card px-3 text-base-400 placeholder:text-base-400 md:w-full md:px-4',
  // State variants - automatically sorted by Prettier
  'focus:border-[2px] focus:border-primary-focus focus:outline-none focus:ring-0',
  // Conditional states - automatically sorted by Prettier
  'disabled:border-base-400 disabled:bg-white disabled:text-base-400',
  // External classes passed as props - always last
  className
)}
```

### Automatic Sorting Benefits

- **Consistency**: All classes follow the same order across the entire codebase
- **Maintainability**: No manual grouping means fewer merge conflicts
- **Performance**: Optimal class order for CSS specificity and cascade
- **Readability**: Predictable class order makes code easier to scan

### Manual Grouping (When Needed)

Only use manual grouping when you need to separate complex conditional logic:

````tsx
className={cn(
  // Base styles
  'flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
  // Variant-based conditional styles
  variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
  variant === 'outline' && 'border border-input bg-background hover:bg-accent',
  // Size-based conditional styles
  size === 'sm' && 'h-8 px-3 text-xs',
  size === 'lg' && 'h-12 px-6 text-base',
  // State-based conditional styles
  disabled && 'pointer-events-none opacity-50',
  // External classes
  className
)}

## Responsive Design Approach

### Mobile-First Design

Follow a mobile-first approach with responsive breakpoints. Let Prettier automatically sort responsive variants:

```tsx
className={cn(
  // All classes automatically sorted by Prettier
  'w-full p-2 text-sm md:w-auto md:p-4 md:text-base lg:p-6 lg:text-lg'
)}
````

### Responsive Breakpoint Order

Prettier automatically sorts responsive variants in the correct order:

- Base (mobile-first)
- `sm:` (640px+)
- `md:` (768px+)
- `lg:` (1024px+)
- `xl:` (1280px+)
- `2xl:` (1536px+)

### Complex Responsive Components

For components with many responsive variants, group by logical functionality rather than breakpoint:

```tsx
// prettier-ignore
className={cn(
  // Base styles (mobile)
  'flex flex-col w-full p-4 text-sm rounded-md bg-white',
  // Small screens (sm)
  'sm:flex-row sm:gap-4 sm:p-5 sm:text-base',
  // Medium screens (md)
  'md:gap-6 md:p-6 md:rounded-lg',
  // External classes
  className
)}
```

## Implementation Examples

### Button Component Example

```tsx
<button
  className={cn(
    // Base styles - automatically sorted by Prettier
    "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2",
    // Variant styles
    variant === "default" && "bg-primary text-white hover:bg-primary-focus",
    variant === "outline" && "border border-base-400 hover:bg-base-100",
    // Size styles
    size === "sm" && "h-8 px-3 text-xs",
    size === "lg" && "h-12 px-6 text-base",
    // Responsive styles - automatically sorted
    "w-full text-sm sm:w-auto md:text-base",
    // State styles
    disabled && "cursor-not-allowed opacity-50",
    // External classes
    className,
  )}
>
  {children}
</button>
```

### Card Component Example

```tsx
<div
  className={cn(
    // Base layout and spacing
    "w-full p-4",
    // Responsive layout
    "md:p-6 lg:p-8",
    "sm:flex sm:gap-4 md:gap-6",
    // Borders and shadows
    "rounded-lg border border-base-200 shadow-sm",
    // Background and text colors
    "bg-white text-base-900",
    // Hover state
    "hover:shadow-md transition-shadow duration-200",
    // External classes
    className,
  )}
>
  {children}
</div>
```

this instructions is from [constRod react-vite template](https://github.com/constROD/template-react-vite/blob/main/.cursor/rules/styling.mdc)
