import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export default async function Perfil() {
  return (
    <div className="flex flex-row md:gap-24 max-w-full max-h-full overflow-hidden p-5">
      <Sidebar />
      <div className="flex flex-col md:gap-10 md:mt-16">
        <Header title="Perfil" />
      </div>
    </div>
  )
}
