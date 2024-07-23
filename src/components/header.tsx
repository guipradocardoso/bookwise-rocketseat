'use client'

import { ChartLineUp } from 'phosphor-react'

export function Header() {
  return (
    <div className="flex flex-row items-center justify-start mb-10 gap-3">
      <ChartLineUp size={32} className="text-green-100" />
      <h2 className="text-2xl text-gray-100 ">Início</h2>
    </div>
  )
}
