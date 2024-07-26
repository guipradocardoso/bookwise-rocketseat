'use client'

import { CardLastestBook } from './card-latest-book'

export function LatestBookReviews() {
  return (
    <div className="flex flex-col md:gap-4 max-w-full md:max-h-[580px] overflow-auto">
      <h2 className="text-sm">Avaliações mais recentes</h2>
      <CardLastestBook />
      <CardLastestBook />
      <CardLastestBook />
    </div>
  )
}
