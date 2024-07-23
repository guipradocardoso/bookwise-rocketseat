'use client'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export function RatedBook() {
  return (
    <div className="flex flex-col gap-8 bg-gray-700 min-w-[608px] min-h-[280px] rounded-lg p-6">
      <header className="flex flex-row gap-4 min-w-[560px] justify-between">
        <div className="flex flex-row gap-4 items-center justify-center">
          <Image
            src="https://github.com/guipradocardoso.png"
            alt=""
            width={40}
            height={40}
            quality={100}
            className="rounded-full w-10 h-10"
          />

          <div className="flex flex-col">
            <h1 className="text-gray-100 text-base">Guilherme Prado</h1>
            <p className="text-sm text-gray-400">Hoje</p>
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
      </header>

      <div className="flex flex-row gap-5">
        <Image
          src="/book-hobbit.png"
          alt=""
          width={108}
          height={152}
          quality={100}
        />

        <div className="flex flex-col gap-5 max-w-[432px] max-h-[152px]">
          <div>
            <h2 className="text-gray-100 text-base">O Hobbit</h2>
            <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
          </div>

          <p className="text-gray-300 text-sm line-clamp-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, quas non ducimus repellat, blanditiis quis culpa esse
            ut nesciunt quia sapiente veniam minima dolorem amet obcaecati
            voluptatum deleniti pariatur velit? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Reprehenderit, quas non ducimus
            repellat, blanditiis quis culpa esse ut nesciunt quia sapiente
            veniam minima dolorem amet obcaecati voluptatum deleniti pariatur
            velit?
          </p>
        </div>
      </div>
    </div>
  )
}
