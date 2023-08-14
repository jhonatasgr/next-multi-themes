import { tv } from 'tailwind-variants'

export const radios = tv({
  variants: {
    bar: {
      blue: '   bg-brand-blue-200',
      pink: '   bg-brand-pink-200',
      green: '  bg-brand-green-200',
      yellow: ' bg-brand-yellow-200',
      orange: ' bg-brand-orange-200',
      purple: ' bg-brand-purple-200',
    },
    bar2: {
      blue: '   bg-brand-blue-500',
      pink: '   bg-brand-pink-500',
      green: '  bg-brand-green-500',
      yellow: ' bg-brand-yellow-500',
      orange: ' bg-brand-orange-500',
      purple: ' bg-brand-purple-500',
    },
    dot: {
      blue: '   hover:bg-brand-blue-500/10 focus:outline-blue-500',
      pink: '   hover:bg-brand-pink-500/10 focus:outline-pink-500',
      green: '  hover:bg-brand-green-500/10 focus:outline-green-500',
      yellow: ' hover:bg-brand-yellow-500/10 focus:outline-yellow-500',
      orange: ' hover:bg-brand-orange-500/10 focus:outline-orange-500',
      purple: ' hover:bg-brand-purple-500/10 focus:outline-purple-500',
    },
    prog: {
      xs: 'w-[1%]',
      sm: 'w-[25%]',
      base: 'w-[50%]',
      lg: 'w-[75%]',
      xl: 'w-[100%]',
    },

    color: {
      blue: 'bg-brand-blue-500 outline-brand-blue-500/50 ring-brand-blue-500',
      pink: 'bg-brand-pink-500 outline-brand-pink-500/50 ring-brand-pink-500',
      green:
        'bg-brand-green-500 outline-brand-green-500/50 ring-brand-green-500',
      yellow:
        'bg-brand-yellow-500 outline-brand-yellow-500/50 ring-brand-yellow-500',
      orange:
        'bg-brand-orange-500 outline-brand-orange-500/50 ring-brand-orange-500',
      purple:
        'bg-brand-purple-500 outline-brand-purple-500/50 ring-brand-purple-500',
    },

    bg: {
      default: 'bg-background-default',
      dim: 'bg-background-dim',
      lightOut: 'bg-background-lightOut',
    },
    bg2: {
      blue: 'group-data-[state=checked]/bg:group-hover/bg:bg-brand-blue-500/20  ring-brand-blue-400',
      pink: 'group-data-[state=checked]/bg:group-hover/bg:bg-brand-pink-500/20  ring-brand-pink-400',
      green:
        'group-data-[state=checked]/bg:group-hover/bg:bg-brand-green-500/20  ring-brand-green-400',
      yellow:
        'group-data-[state=checked]/bg:group-hover/bg:bg-brand-yellow-500/20  ring-brand-yellow-400',
      orange:
        'group-data-[state=checked]/bg:group-hover/bg:bg-brand-orange-500/20  ring-brand-orange-400',
      purple:
        'group-data-[state=checked]/bg:group-hover/bg:bg-brand-purple-500/20  ring-brand-purple-400',
    },
    border: {
      blue: '   data-[state=checked]:border-brand-blue-500',
      pink: '   data-[state=checked]:border-brand-pink-500',
      green: '  data-[state=checked]:border-brand-green-500',
      yellow: ' data-[state=checked]:border-brand-yellow-500',
      orange: ' data-[state=checked]:border-brand-orange-500',
      purple: ' data-[state=checked]:border-brand-purple-500',
    },
    full: {
      blue: 'group-data-[state=checked]/bg:bg-brand-blue-500',
      pink: 'group-data-[state=checked]/bg:bg-brand-pink-500',
      green: 'group-data-[state=checked]/bg:bg-brand-green-500',
      yellow: 'group-data-[state=checked]/bg:bg-brand-yellow-500',
      orange: 'group-data-[state=checked]/bg:bg-brand-orange-500',
      purple: 'group-data-[state=checked]/bg:bg-brand-purple-500',
    },
    size: {
      xs: 'group-data-[size=xs]/root:text-xs',
      sm: 'group-data-[size=sm]/root:text-sm',
      base: 'group-data-[size=base]/root:text-base',
      lg: 'group-data-[size=lg]/root:text-lg',
      xl: 'group-data-[size=xl]/root:text-xl',
    },
  },
  compoundVariants: [
    {
      bar: ['pink', 'blue', 'green', 'orange', 'purple', 'yellow'],
      bar2: ['pink', 'blue', 'green', 'orange', 'purple', 'yellow'],
    },
  ],
})
