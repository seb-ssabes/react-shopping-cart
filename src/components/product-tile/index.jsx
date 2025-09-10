export default function ProductTile({product}) {
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-gray-400 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img src={product?.image}
               alt={product?.title}
               className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
      </div>
    </div>
  )
}
