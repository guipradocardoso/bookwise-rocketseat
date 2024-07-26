'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'phosphor-react'

export function CardLastestBook() {
  return (
    <div className="flex flex-col md:max-w-[608px] md:max-h-72 px-5 py-4 md:gap-8 bg-gray-700 rounded-lg">
      <div className="flex flex-row md:gap-4 justify-between">
        <Image
          src="https://github.com/guipradocardoso.png"
          alt=""
          width={40}
          height={40}
          quality={100}
          className="flex self-center rounded-full w-10 h-10 items-center"
        />

        <div className="flex flex-col flex-grow">
          <p>Guilherme Prado</p>
          <span>Hoje</span>
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
      <div className="flex flex-row md:gap-5">
        <Image
          src="/book-algoritmos.png"
          alt=""
          width={108}
          height={152}
          quality={100}
          className="rounded"
        />

        <div className="flex flex-col md:max-h-40 md:max-w-[428px] md:gap-3">
          <div className="flex flex-col md:gap-6">
            <div className="flex flex-col md:max-h-11">
              <h1>Entendendo Algoritmos</h1>
              <span>Aditya Bhargava</span>
            </div>
            <div className="flex relative md:max-w-[428px] md:max-h-[88px]">
              <p className="text-sm line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus assumenda harum nostrum deleniti. Cumque modi,
                accusantium officia nisi placeat totam aliquam, neque laboriosam
                ipsum illo odit! Nostrum perspiciatis in eius. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Quam, soluta esse
                nulla dolore doloribus reiciendis non fuga sapiente ex officiis
                quos laudantium assumenda minus autem animi et! Sunt, sapiente
                architecto.
              </p>
              <Link
                href="/"
                className="flex absolute bottom-0 right-0 text-purple-100"
              >
                ver mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
