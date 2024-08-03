import { Header } from '@/components/header'
import { LastBookRead } from '@/components/last-book-read'
import { LatestBookReviews } from '@/components/latest-book-reviews'
import { PopularBooks } from '@/components/popular-books'
import { Sidebar } from '@/components/sidebar'
import { User } from 'phosphor-react'

const useAuth = () => {
  const isAuthenticated = true
  return { isAuthenticated }
}

export default async function Visitor() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex flex-row md:gap-24 max-w-full max-h-full overflow-hidden p-5">
      <Sidebar />
      <div className="flex flex-col md:gap-10 md:mt-16">
        <Header title="Início" icon={User} />
        <div className="flex flex-row md:gap-16">
          <div className="flex flex-col gap-10">
            {isAuthenticated && <LastBookRead />}
            <LatestBookReviews />
          </div>

          <PopularBooks />
        </div>
      </div>
    </div>
  )
}
