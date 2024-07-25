'use client'
import { CaretRight } from 'phosphor-react'
import { CardLastBook } from './card-last-book'

export function ButtonLookAll() {
  return (
    <div className="flex gap-16">
      <div className="flex flex-row gap-24">
        <Sidebar />
        <div className="mt-16">
          <Header />
          <h2 className="mb-4">Avaliações mais recentes</h2>

          <div className="flex flex-col gap-3">
            <RatedBook />
            <RatedBook />
            <RatedBook />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-16">
        <h2>Livros populares</h2>
        <CardLastBook />
      </div>
    </div>
  )
}
