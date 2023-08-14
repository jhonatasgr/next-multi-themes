export default function Header() {
  return (
    <div className=" flex flex-col items-center justify-start border-b border-neutral-bDef group-data-[background=dim]/root:border-neutral-bDim group-data-[background=lightOut]/root:border-neutral-bOut ">
      <span className="text-xl font-bold p-3 self-start ">Home</span>
      <div className=" w-full h-full grid grid-cols-2 items-center justify-center ">
        <div className="w-full flex flex-col  items-center justify-center hover:bg-neutral-def/10 group-data-[background=dim]/root:hover:bg-neutral-dim/10 transition-colors group-data-[background=lightOut]/root:hover:bg-neutral-out/10 cursor-pointer">
          <span className=" py-2 font-bold text-sm">For you</span>
          <div className="h-1 w-14 bg-brand-blue-500 group-data-[color=blue]/root:bg-brand-blue-500               group-data-[color=pink]/root:bg-brand-pink-500 group-data-[color=green]/root:bg-brand-green-500   group-data-[color=yellow]/root:bg-brand-yellow-500 group-data-[color=purple]/root:bg-brand-purple-500 group-data-[color=orange]/root:bg-brand-orange-500 rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}
