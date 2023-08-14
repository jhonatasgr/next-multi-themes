import { Icon } from '@iconify/react/dist/iconify.js'
import Button from './Button.tsx'
import { useTheme } from '../../../index.tsx'
import { ThemePropsColor } from '../App.tsx'

const Icons = [
  'ph:image',
  'material-symbols:gif-box-outline-rounded',
  'material-symbols:event-list-outline',
  'ph:smiley',
  'tabler:calendar-time',
  'ph:map-pin',
]

export default function Footer() {
  const { themes } = useTheme()

  const { color } = themes as unknown as ThemePropsColor
  return (
    <div
      className={`grid grid-cols-2  items-center justify-center py-3 text-brand-blue-500  group-data-[color=${color}]/root:text-brand-${color}-500 cursor-pointer`}
    >
      <div className="flex gap-3 h-auto mr-auto ">
        {Icons.map((icon) => {
          return (
            <div
              key={icon}
              className={` w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-blue-500/10 hover:group-data-[color=${color}]/root:bg-brand-${color}-500/10`}
            >
              <Icon
                icon={icon}
                className="w-5 h-5 pointer-events-none"
                rotate={icon === 'material-symbols:event-list-outline' ? 2 : 0}
              />
            </div>
          )
        })}
      </div>
      <div className="ml-auto">
        <Button size="x1" color={color}>
          Tweet
        </Button>
      </div>
    </div>
  )
}
