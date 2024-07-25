'use client'

import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { CardLastBook } from './card-last-book'

export function LastBookRead() {
  return (
    <div className="flex flex-col md:gap-4 max-w-full md:max-h-60">
      <div className="flex flex-row items-center justify-between max-w-full">
        <h2 className="text-sm">Sua última leitura</h2>
        <Link
          href="/look-all"
          className="text-sm font-bold text-purple-100 flex flex-row gap-2 justify-center items-center"
        >
          <span>Ver todas</span>
          <CaretRight size={16} />
        </Link>
      </div>
      <CardLastBook />
    </div>
  )
}
