import { Header } from '@/components/header'
import { LastBookRead } from '@/components/last-book-read'
import { LatestBookReviews } from '@/components/latest-book-reviews'
import { PopularBooks } from '@/components/popular-books'
import { Sidebar } from '@/components/sidebar'

export default async function Visitor() {
  return (
    <div className="flex flex-row md:gap-24">
      <Sidebar />
      <div className="flex flex-col md:gap-10 md:mt-16">
        <Header />
        <div className="flex flex-row md:gap-16">
          <div className="flex flex-col gap-10">
            <LastBookRead />
            <LatestBookReviews />
          </div>

          <PopularBooks />
        </div>
      </div>
    </div>
  )
}
