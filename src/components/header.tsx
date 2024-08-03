'use client'

import { ChartLineUp } from 'phosphor-react'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex flex-row items-center justify-start gap-3">
      <ChartLineUp size={32} className="text-green-100" />
      <h2 className="text-2xl text-gray-100 ">{title}</h2>
    </div>
  )
}
