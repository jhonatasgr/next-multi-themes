import { Icon } from '@iconify/react/dist/iconify.js'
import Aside from './components/Aside.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Actions from './components/Actions.tsx'
import { radios } from './components/utils/Variants.tsx'

export interface ThemePropsColor {
  color: 'blue' | 'pink' | 'purple' | 'green' | 'orange' | 'yellow' | 'default'
}

export default function App() {
  return (
    <main
      className={radios({
        class: 'm-auto max-w-1000 grid grid-cols-display h-screen',
      })}
    >
      <Aside />
      <div className="border-l border-solid border-neutral-bDef group-data-[background=dim]/root:border-neutral-bDim group-data-[background=lightOut]/root:border-neutral-bOut border-r">
        <Header />
        <form
          action=""
          className="px-6 flex flex-col border-b border-neutral-bDef group-data-[background=dim]/root:border-neutral-bDim group-data-[background=lightOut]/root:border-neutral-bOut"
        >
          <div className="flex gap-4 h-auto ">
            <div className="w-10 mt-4 h-full">
              <span className="text-2xl font-bold rounded-3xl w-11 h-11 bg-neutral-3 flex items-center justify-center text-white">
                <Icon icon="healthicons:j" className="w-7 h-7" />
              </span>
            </div>
            <div className="flex-1">
              <textarea
                name=""
                id=""
                placeholder="Whats is happening?! "
                maxLength={280}
                className="flex w-full border-0 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-neutral-3 focus:border-b border-neutral-bDef group-data-[background=dim]/root:border-neutral-bDim group-data-[background=lightOut]/root:border-neutral-bOut overflow-y-hidden h-12 py-3 bg-transparent"
              />
              <Footer />
            </div>
          </div>
        </form>
        <div className="px-6 p-3 grid grid-cols-tweet border-b border-neutral-bDef group-data-[background=dim]/root:border-neutral-bDim group-data-[background=lightOut]/root:border-neutral-bOut hover:bg-neutral-def/10 group-data-[background=dim]/root:hover:bg-neutral-dim/10 transition-colors group-data-[background=lightOut]/root:hover:bg-neutral-out/10 cursor-pointer ">
          <div className="w-10 h-full">
            <span className="text-2xl font-bold rounded-3xl w-11 h-11 bg-neutral-3 flex items-center justify-center text-white">
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

              <div className="ml-auto hover:bg-brand-blue-500/20 w-8 h-8 hover:text-brand-blue-500 flex items-center justify-center rounded-3xl transition-all">
                <Icon icon="tabler:dots" className="pointer-events-none" />
              </div>
            </div>
            <span className="mx-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              ad. Eligendi ducimus quia laudantium, cupiditate molestiae quos
              praesentium? Ducimus tempore excepturi repudiandae explicabo
              delectus praesentium qui placeat dolore eveniet enim.{' '}
              <span className="cursor-pointer font-semibold text-brand-blue-500 group-data-[color=blue]/root:text-brand-blue-500 group-data-[color=pink]/root:text-brand-pink-500 group-data-[color=green]/root:text-brand-green-500  group-data-[color=yellow]/root:text-brand-yellow-500 group-data-[color=purple]/root:text-brand-purple-500 group-data-[color=orange]/root:text-brand-orange-500  ">
                ...more
              </span>
            </span>
            <Actions />
          </div>
        </div>
      </div>
    </main>
  )
}
