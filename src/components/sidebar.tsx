'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Binoculars,
  ChartLineUp,
  Icon,
  SignIn,
  SignOut,
  User,
} from 'phosphor-react'

const useAuth = () => {
  const isAuthenticated = true
  return { isAuthenticated }
}

interface SidebarItemProps {
  href: string
  icon: Icon
  label: string
}

const SidebarItem = ({ href, icon: Icon, label }: SidebarItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const activeClasses = isActive ? 'text-gray-200' : 'text-gray-400'

  return (
    <Link
      href={href}
      className={`flex flex-row gap-3 ${activeClasses} focus:text-gray-200`}
    >
      <div
        className={`h-6 w-1 rounded-full ${isActive ? 'bg-gradient-vertical' : 'bg-transparent'} mr-1`}
      />
      <Icon size={24} />
      <h2>{label}</h2>
    </Link>
  )
}

export function Sidebar() {
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()

  return (
    <div className="flex flex-col pt-10 pb-6 items-center justify-between  min-w-56 h-[988px] rounded-lg bg-gradient-to-b from-green-200 via-purple-200 to-gray-800">
      <div className="flex flex-col gap-16">
        <Image
          src="/logo-bookwise.png"
          alt=""
          width={128}
          height={32}
          quality={100}
        />

        <div className="flex flex-col gap-4">
          <SidebarItem href="/visitor" icon={ChartLineUp} label="Início" />
          <SidebarItem href="/explorer" icon={Binoculars} label="Explorar" />
          {isAuthenticated && (
            <SidebarItem href="/perfil" icon={User} label="Perfil" />
          )}
        </div>
      </div>
      {!isAuthenticated && pathname !== '/login' && (
        <div>
          <Link href="/login">
            <div className="flex flex-row gap-3 items-center">
              <p>Fazer login</p>
              <SignIn size={24} className="text-green-100" weight="fill" />
            </div>
          </Link>
        </div>
      )}

      {isAuthenticated && (
        <Link href="/perfil">
          <div className="flex flex-row gap-3 items-center justify-center">
            <Image
              src="https://github.com/guipradocardoso.png"
              width={32}
              height={32}
              alt=""
              quality={100}
              className="rounded-full"
            />
            <p className="text-gray-200 text-sm">Guilherme</p>
            <Link href="/login">
              <SignOut size={20} className="text-red-500 p-1" weight="fill" />
            </Link>
          </div>
        </Link>
      )}
    </div>
  )
}
