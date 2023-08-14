import { Icon } from '@iconify/react/dist/iconify.js'
import { tv } from 'tailwind-variants'

const action = tv({
  base: 'w-9 h-9 flex items-center justify-center rounded-full',
  variants: {
    type: {
      default: '',
      reply:
        'group-hover/act:text-brand-blue-500 group-hover/act:bg-brand-blue-500/10 ',
      retweet:
        'group-hover/act:text-brand-green-500 group-hover/act:bg-brand-green-500/10 ',
      like: 'group-hover/act:text-brand-pink-500 group-hover/act:bg-brand-pink-500/10',
      view: 'group-hover/act:text-brand-blue-500 group-hover/act:bg-brand-blue-500/10',
      share:
        'group-hover/act:text-brand-blue-500 group-hover/act:bg-brand-blue-500/10',
    },
    label: {
      default: '',
      reply:
        'group-hover/act:text-brand-blue-500 w-full text-left justify-start  ',
      retweet:
        'group-hover/act:text-brand-green-500 w-full text-left justify-start ',
      like: 'group-hover/act:text-brand-pink-500 w-full text-left justify-start ',
      view: 'group-hover/act:text-brand-blue-500 w-full text-left justify-start ',
      share:
        'group-hover/act:text-brand-blue-500 w-full text-left justify-start ',
    },
  },
})

const icons = [
  { name: 'ri:chat-1-line', numbers: '500', type: 'reply' },
  { name: 'lucide:repeat-2', numbers: '1,800', type: 'retweet' },
  { name: 'ph:heart', numbers: '11,7K', type: 'like' },
  { name: 'pixelarticons:chart-bar', numbers: '580,3k', type: 'view' },
  { name: 'system-uicons:share', type: 'share' },
]

interface Type {
  type: 'reply' | 'retweet' | 'like' | 'view' | 'share'
}
export default function Actions() {
  return (
    <div className="flex items-center justify-between w-full text-neutral-2 ">
      {icons.map((icon) => {
        return (
          <div key={icon.name} className="flex w-auto group/act cursor-pointer">
            <div
              className={action({
                type: icon.type as unknown as Type['type'],
              })}
            >
              <Icon icon={icon.name} className="w-5 h-5 pointer-events-none" />
            </div>

            {icon.numbers !== undefined && (
              <div className="min-w-[3.125rem">
                <span
                  className={action({
                    label: icon.type as unknown as Type['type'],
                  })}
                >
                  {icon.numbers}
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
