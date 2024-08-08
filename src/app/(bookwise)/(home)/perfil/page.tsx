import { Header } from '@/components/header'
import { SearchForm } from '@/components/search-form'
import { Sidebar } from '@/components/sidebar'
import { BookRead } from './book-read'

export default async function Perfil() {
  return (
    <div className="flex flex-row md:gap-24 max-w-full max-h-full overflow-hidden p-5">
      <Sidebar />
      <div className="flex flex-col md:gap-10 md:mt-16">
        <Header title="Perfil" iconName="user" iconColor="text-green-100" />
        <div className="flex flex-row">
          <div className="flex flex-col md:gap-8">
            <SearchForm />
            <div className="flex flex-col md:gap-2">
              <span className="text-gray-300">Há 2 dias</span>
              <BookRead />
            </div>
            <div className="flex flex-col md:gap-2">
              <span className="text-gray-300">Há 2 dias</span>
              <BookRead />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
