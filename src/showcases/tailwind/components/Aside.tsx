import { Icon } from '@iconify/react'
import Button from './Button.tsx'
import DisplayDialog from './Dialog.tsx'
import { useTheme } from '../../../index.tsx'
import { ThemePropsColor } from '../App.tsx'

export default function Aside() {
  const { themes, setTheme } = useTheme()

  const { color } = themes!.color as unknown as ThemePropsColor

  const linkLabels = [
    { name: 'house', label: 'home' },
    { name: 'magnifying-glass', label: 'explorar' },
    { name: 'bell', label: 'notifications' },
    { name: 'envelope-simple', label: 'messages' },
    { name: 'notepad', label: 'lists' },
    { name: 'bookmark-simple', label: 'bookmarks' },
    { name: 'user', label: 'profile' },
  ]
  return (
    <aside className="py-24 px-25 flex flex-col h-full">
      <span className="font-black text-5xl m-3">X</span>
      <nav className="flex flex-col ">
        {linkLabels.map((icon) => {
          return (
            <button
              key={icon.label}
              onClick={() => {
                setTheme('blue')
              }}
              className="flex items-center text-xl p-3 gap-3 hover:bg-neutral-def/10 group-data-[background=dim]/root:hover:bg-neutral-dim/10 transition-colors group-data-[background=lightOut]/root:hover:bg-neutral-out/10 cursor-pointer rounded-full relative "
            >
              <div className="relative flex">
                <Icon icon={`ph:${icon.name}-bold`} className="w-6 h-6  " />
                {icon.name === 'house' && (
                  <span
                    className={`absolute inline-flex rounded-full -top-1 -right-1 h-2 w-2 bg-brand-${color}-500`}
                  ></span>
                )}
              </div>
              {icon.label.charAt(0).toUpperCase() + icon.label.slice(1)}
            </button>
          )
        })}

        <DisplayDialog />

        <div className="flex flex-col h-full justify-between mt-2">
          <Button size="x2" color={color}>
            <span className="pointer-events-none select-none">Tweet</span>
          </Button>
        </div>
      </nav>
    </aside>
  )
}
