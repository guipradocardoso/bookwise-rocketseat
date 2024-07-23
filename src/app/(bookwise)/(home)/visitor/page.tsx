import { CardBook } from '@/components/card-book'
import { Header } from '@/components/header'
import { RatedBook } from '@/components/rated-book'
import { Sidebar } from '@/components/sidebar'

export default async function Visitor() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col mt-16 ml-24">
        <Header />
        <div className="flex flex-row"></div>
      </div>
    </div>
  )
}
