import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

// eslint-disable-next-line react-hooks/rules-of-hooks
const button = tv({
  base: `flex items-center justify-center rounded-full transition-colors`,
  variants: {
    size: {
      default:
        'min-w-52 min-h-52 w-auto h-auto shadow-133 px-8 text-base font-black text-white',
      x1: 'min-w-36 min-h-36 w-auto h-auto px-4 text-sm font-black text-white',
      x2: 'min-w-52 min-h-52 w-auto h-auto shadow-133 px-8 text-base font-black text-white',
    },
    color: {
      default: 'bg-brand-blue-500 hover:bg-brand-blue-600',
      blue: 'group-data-[color=blue]/root:bg-brand-blue-500 hover:group-data-[color=blue]/root:bg-brand-blue-600',
      pink: 'group-data-[color=pink]/root:bg-brand-pink-500 hover:group-data-[color=pink]/root:bg-brand-pink-600',
      green:
        'group-data-[color=green]/root:bg-brand-green-500 hover:group-data-[color=green]/root:bg-brand-green-600',
      yellow:
        'group-data-[color=yellow]/root:bg-brand-yellow-500 hover:group-data-[color=yellow]/root:bg-brand-yellow-600',
      purple:
        'group-data-[color=purple]/root:bg-brand-purple-500 hover:group-data-[color=purple]/root:bg-brand-purple-600',
      orange:
        'group-data-[color=orange]/root:bg-brand-orange-500 hover:group-data-[color=orange]/root:bg-brand-orange-600',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: ReactNode
  }

export default function Button({
  children,
  size,
  color,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ size, color })} {...rest}>
      {children}
    </button>
  )
}
