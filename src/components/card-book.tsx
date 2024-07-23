'use client'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export function CardBook() {
  return (
    <div className="flex flex-row gap-5 px-5 py-4 bg-gray-700 min-w-[324px] max-h-[130px] rounded-lg">
      <Image
        src="/book-hobbit.png"
        alt=""
        width={64}
        height={64}
        quality={100}
      />

      <div className="flex flex-col gap-8 max-w-[200px] max-h-[98px]">
        <div>
          <h2 className="text-gray-100 text-base">O Hobbit</h2>
          <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
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
