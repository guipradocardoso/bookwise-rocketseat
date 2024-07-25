'use client'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export function CardPopularBook() {
  return (
    <div className="flex flex-row md:max-w-xs md:max-h-32 px-5 py-4 md:gap-6 bg-gray-700 rounded-lg">
      <Image
        src="/book-algoritmos.png"
        alt=""
        width={64}
        height={94}
        quality={100}
        className="rounded"
      />

      <div className="flex flex-col md:max-w-52 md:max-h-24 md:gap-8">
        <div className="flex flex-col max-h-11">
          <div className="flex ">
            <h2 className="text-gray-100 font-bold text-base truncate-multiline">
              A revolução dos bichos
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-sm">George Orwell</p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className="text-purple-100 w-4 h-4 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
