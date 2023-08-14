import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '@iconify/react'
import { useTheme } from '../../../index'
import * as RadioGroup from '@radix-ui/react-radio-group'
import type { VariantProps } from 'tailwind-variants'
import { radios } from './utils/Variants'
import { useState } from 'react'
import Button from './Button'
import { ThemePropsColor } from '../App'

const colors = ['blue', 'pink', 'purple', 'green', 'orange', 'yellow']
const sizes = ['xs', 'sm', 'base', 'lg', 'xl']
const background = ['default', 'dim', 'lightOut']

export default function DisplayDialog() {
  const { setTheme } = useTheme()
  const { themes } = useTheme()
  const [open, setOpen] = useState(true)

  const themeNotDefined = Object.keys(themes!).length > 0

  const size = themeNotDefined && !!themes!.size ? themes!.size : 'base'
  const color = themeNotDefined && !!themes!.color ? themes!.color : 'blue'
  const bg =
    themeNotDefined && !!themes!.background ? themes!.background : 'default'

  console.log(color, size, bg)

  const [step, setStep] = useState(sizes.indexOf(size))
  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        setOpen(!open)
      }}
    >
      <Dialog.Trigger asChild>
        <button className="flex items-center gap-3 text-xl p-3 hover:bg-neutral-def/10 group-data-[background=dim]/root:hover:bg-neutral-dim/10 transition-colors group-data-[background=lightOut]/root:hover:bg-neutral-out/10 cursor-pointer rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"
            />
            <path
              fill={color}
              d="M7 14.987v1.999h1.999l5.529-5.522l-1.998-1.998zm8.47-4.465l-1.998-2L14.995 7l2 1.999z"
            />
          </svg>
          Display
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 group-data-[background=dim]/root:bg-overlay-dim/40 group-data-[background=lightOut]/root:bg-overlay-out/40 " />
        <Dialog.Content className=" fixed flex items-center flex-col gap-3 px-7 justify-center max-w-600 max-h-600 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white group-data-[background=dim]/root:bg-background-dim group-data-[background=lightOut]/root:bg-background-lightOut shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none rounded-2xl">
          <Dialog.Title className="text-xl font-bold">
            Customize your view
          </Dialog.Title>
          <Dialog.Description className="text-sm text-neutral-2">
            These settings affect all the Twitter accounts on this browser.
          </Dialog.Description>
          <div className="px-6 p-3  mx-10 grid grid-cols-tweet border rounded-xl border-neutral-bDef group-data-[background=dim]/root:border-neutral-bDim group-data-[background=lightOut]/root:border-neutral-bOut hover:bg-neutral-def/10 group-data-[background=dim]/root:hover:bg-neutral-dim/10 transition-colors group-data-[background=lightOut]/root:hover:bg-neutral-out/10 cursor-pointer ">
            <div className="w-10 h-full">
              <span className="text-2xl font-bold rounded-3xl w-10 h-10 bg-neutral-3 flex items-center justify-center text-white">
                <Icon icon="healthicons:j" className="w-7 h-7" />
              </span>
            </div>
            <div className="flex flex-col items-start justify-start gap-1 ">
              <div className="flex gap-1 w-full mx-2">
                <p className="font-bold text-base">John Doe</p>

                <Icon
                  icon="solar:verified-check-bold"
                  className="text-brand-blue-500 mt-[5px]"
                />

                <p className="text-neutral-2 text-sm leading-6">@johndoe</p>
                <p className="text-neutral-2 text-sm leading-6"> · 12m</p>
              </div>
              <span className="mx-2 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                ad. Eligendi ducimus quia laudantium..
                <span className="cursor-pointer font-semibold text-brand-blue-500 group-data-[color=blue]/root:text-brand-blue-500 group-data-[color=pink]/root:text-brand-pink-500 group-data-[color=green]/root:text-brand-green-500  group-data-[color=yellow]/root:text-brand-yellow-500 group-data-[color=purple]/root:text-brand-purple-500 group-data-[color=orange]/root:text-brand-orange-500  ">
                  @Johedoe
                </span>
              </span>
            </div>
          </div>
          <div className="w-full">
            <span className="text-xs text-neutral-3 ">Size</span>
            <RadioGroup.Root
              defaultValue={size}
              onValueChange={(size) => setTheme(size, 'size')}
              className="bg-neutral-sDef group-data-[background=dim]/root:bg-neutral-sDim  group-data-[background=lightOut]/root:bg-neutral-sOut  rounded-xl h-12 flex items-center justify-around mb-4"
            >
              <div className="flex p-4 w-full justify-between">
                <span className="flex items-center justify-center text-xs">
                  Aa
                </span>
                <div className="flex w-full items-center justify-center relative   ">
                  <div className="w-[90%] h-full flex items-center justify-center ">
                    <div className="flex w-full justify-between absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  px-4 ">
                      {sizes.map((size, index) => {
                        const filled = step <= index ? color : ''
                        const opacity = step >= index ? color : ''
                        return (
                          <RadioGroup.Item
                            onClick={() => setStep(index)}
                            key={size}
                            value={size}
                            className={radios({
                              dot: color,

                              class:
                                ' h-8 w-8 rounded-full flex items-center justify-center group/tg ease-in-out duration-300 outline-offset-0  outline-none  ',
                            } as VariantProps<typeof radios>)}
                          >
                            <div
                              className={radios({
                                bar: filled,
                                bar2: opacity,

                                class:
                                  'w-3 h-3 group-data-[state=checked]/tg:w-[1.125rem] group-data-[state=checked]/tg:h-[1.125rem] rounded-full shadow-sm shadow-slate-800/50 ',
                              } as VariantProps<typeof radios>)}
                            >
                              <div></div>
                            </div>
                          </RadioGroup.Item>
                        )
                      })}
                    </div>
                    <div className="w-full relative">
                      <div
                        className={radios({
                          bar: color,
                          class: 'w-full rounded-md h-1 ',
                        } as VariantProps<typeof radios>)}
                      />
                      <div
                        className={radios({
                          bar2: color,
                          prog: size,
                          class:
                            ' rounded-md h-[0.313rem] transition-all duration-200 absolute top-1/2 -translate-y-1/2 ',
                        } as VariantProps<typeof radios>)}
                      />
                    </div>
                  </div>
                </div>
                <span className="flex items-center justify-center text-xl">
                  Aa
                </span>
              </div>
            </RadioGroup.Root>
            <span className="text-xs text-neutral-3 ">Color</span>
            <RadioGroup.Root
              defaultValue={color}
              onValueChange={(color) => setTheme(color, 'color')}
              className="bg-neutral-sDef group-data-[background=dim]/root:bg-neutral-sDim  group-data-[background=lightOut]/root:bg-neutral-sOut  rounded-xl h-14 flex items-center justify-around mb-4"
            >
              {colors.map((color) => {
                return (
                  <RadioGroup.Item
                    key={color}
                    value={color}
                    className={radios({
                      color,
                      class:
                        ' w-9 h-9 rounded-full focus:outline-none ring-offset-neutral-1.5 group-data-[background=dim]/root:ring-offset-neutral-sDim  group-data-[background=lightOut]/root:ring-offset-neutral-sOut hover:outline outline-1 active:outline-2  outline-offset-0 ease-in-out duration-300 focus:ring-2 focus:ring-offset-[3px]',
                    } as VariantProps<typeof radios>)}
                  >
                    <RadioGroup.Indicator className="text-white flex items-center justify-center">
                      <Icon icon="radix-icons:check" className="w-7 h-7" />
                    </RadioGroup.Indicator>
                  </RadioGroup.Item>
                )
              })}
            </RadioGroup.Root>
            <span className="text-xs text-neutral-3 ">Background</span>
            <RadioGroup.Root
              defaultValue={bg}
              onValueChange={(bgColor) => {
                setTheme(bgColor, 'background')
              }}
              className="bg-neutral-sDef group-data-[background=dim]/root:bg-neutral-sDim  group-data-[background=lightOut]/root:bg-neutral-sOut  rounded-xl h-auto py-9.1 px-6 flex items-center justify-around mb-4"
            >
              {background.map((item) => {
                const bgColor = item
                return (
                  <RadioGroup.Item
                    key={bgColor}
                    value={bgColor}
                    className={radios({
                      bg: bgColor,
                      border: color,
                      class:
                        'w-152 h-62 rounded-[4px] flex items-center justify-between px-2  border-2 border-neutral-4/10    group/bg data-[state=checked]/bg:border-[3px] focus:outline-none ',
                    } as VariantProps<typeof radios>)}
                  >
                    <div
                      id={bgColor}
                      className={radios({
                        bg2: color,
                        class:
                          ' rounded-full group-hover/bg:bg-neutral-4/10 flex items-center justify-center w-10 h-10 ease-in-out duration-300 outline-offset-0  group-focus/bg:ring-2 ',
                      } as VariantProps<typeof radios>)}
                    >
                      <div
                        className={radios({
                          full: color,
                          class:
                            '  rounded-full flex items-center justify-center w-5 h-5 border-2 border-neutral-3 ease-in-out duration-300 group-data-[state=checked]/bg:border-none  ',
                        } as VariantProps<typeof radios>)}
                      >
                        <RadioGroup.Indicator className="text-white flex h-4 w-4 items-center justify-center">
                          <Icon icon="radix-icons:check" className="w-7 h-7" />
                        </RadioGroup.Indicator>
                      </div>
                    </div>
                    <label
                      htmlFor={bgColor}
                      className={`text-sm flex-1 font-bold  ${
                        bgColor === 'default' ? 'text-black' : 'text-white'
                      }`}
                    >
                      {bgColor === 'default' && 'Default'}
                      {bgColor === 'dim' && 'Dim'}
                      {bgColor === 'lightOut' && 'Lights out'}
                    </label>
                  </RadioGroup.Item>
                )
              })}
            </RadioGroup.Root>
          </div>
          <Dialog.Close asChild>
            <Button size="x1" color={color as ThemePropsColor['color']}>
              <span className="pointer-events-none select-none">Done</span>
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
