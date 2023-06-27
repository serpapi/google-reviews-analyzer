import Image from "next/image";

export default function BusinessItem({ thumbnail, title, address, type, rating, reviews, onSeekingAnalyse }) {
  return (
    <div className="rounded shadow flex overflow-hidden">
      <Image src={thumbnail} width={200} height={150} alt={`${title}'s image`} className="object-cover object-center" />
      <div className="p-2 w-full">
        <h4 className="text-xl">{title}</h4>
        {type && <div className="text-xs text-gray-500">
          {type}
        </div>}
        <div className="text-gray-400 text-xs">{address}</div>
        <div className="text-sm">{rating} ({reviews})</div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white p-2 rounded shadow text-sm mt-2" onClick={onSeekingAnalyse}>Analyze Reviews</button>
        </div>
      </div>
    </div>
  )
}