'use client'

import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { CardPopularBook } from './card-popular-book'

export function PopularBooks() {
  return (
    <div className="flex flex-col md:gap-4 max-w-full">
      <div className="flex flex-row items-center justify-between max-w-full">
        <h2 className="text-sm">Livros populares</h2>
        <Link
          href="/look-all"
          className="text-sm font-bold text-purple-100 flex flex-row gap-2 justify-center items-center"
        >
          <span>Ver todos</span>
          <CaretRight size={16} />
        </Link>
      </div>
      <CardPopularBook />
      <CardPopularBook />
      <CardPopularBook />
      <CardPopularBook />
    </div>
  )
}
