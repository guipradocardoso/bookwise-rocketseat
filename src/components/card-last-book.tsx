'use client'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export function CardLastBook() {
  return (
    <div className="flex flex-row md:max-w-[608px] md:max-h-48 px-5 py-4 md:gap-6 bg-gray-700 rounded-lg">
      <Image
        src="/book-algoritmos.png"
        alt=""
        width={108}
        height={152}
        quality={100}
        className="rounded"
      />

      <div className="flex flex-col md:max-w-[428px] md:gap-3">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-gray-300 text-sm">Há 2 dias</h2>
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

        <div className="flex flex-col md:gap-6">
          <div className="flex flex-col md:max-h-11">
            <h1>Entendendo Algoritmos</h1>
            <span>Aditya Bhargava</span>
          </div>
          <div className="flex md:max-h-11 truncate-multiline">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus assumenda harum nostrum deleniti. Cumque modi,
              accusantium officia nisi placeat totam aliquam, neque laboriosam
              ipsum illo odit! Nostrum perspiciatis in eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
