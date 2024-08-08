'use client'

import { ChartLineUp, User } from 'phosphor-react'

const icons = {
  user: User,
  chartlineup: ChartLineUp,
}

type IconName = keyof typeof icons

interface HeaderProps {
  title: string
  iconColor?: string
  iconName: IconName
}

export function Header({ title, iconName, iconColor }: HeaderProps) {
  const IconComponent = icons[iconName]

  return (
    <div className="flex flex-row items-center justify-start gap-3">
      <IconComponent size={32} className={iconColor} />
      <h2 className="text-2xl text-gray-100 ">{title}</h2>
    </div>
  )
}
