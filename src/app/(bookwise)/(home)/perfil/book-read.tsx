'use client'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export function BookRead() {
  return (
    <div className="flex flex-col md:max-w-[624px] md:max-h-96 px-5 py-4 md:gap-6 bg-gray-700 rounded-lg">
      <div className="flex flex-row md:gap-6">
        <Image
          src="/book-algoritmos.png"
          alt=""
          width={108}
          height={152}
          quality={100}
          className="rounded"
        />

        <div className="flex flex-col justify-between md:max-w-[454px] md:gap-3">
          <div className="flex flex-col md:gap-6">
            <div className="flex flex-col md:max-h-11">
              <h1>Entendendo Algoritmos</h1>
              <span className="text-gray-400">Aditya Bhargava</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
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
      </div>
      <p className="line-clamp-7 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
        laboriosam dolorem corporis id distinctio fugiat. Debitis molestiae, id
        velit aliquam facere, eos itaque consequatur odio ipsam at quam sequi
        quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        voluptates officiis tempora corporis fugit culpa aspernatur ullam quos,
        expedita consequuntur, placeat quisquam voluptatibus praesentium dolore
        eaque commodi cumque ea temporibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt inventore saepe consequuntur
        cupiditate optio. Autem tempora, laboriosam necessitatibus voluptates
        blanditiis itaque nisi, optio error facere, accusantium expedita minima
        impedit laborum.
      </p>
    </div>
  )
}
