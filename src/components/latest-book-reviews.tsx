'use client'

import { CardLastBook } from './card-last-book'

export function LatestBookReviews() {
  return (
    <div className="flex flex-col md:gap-4 max-w-full md:max-h-60">
      <h2 className="text-sm">Avaliações mais recentes</h2>
      <CardLastBook />
    </div>
  )
}
