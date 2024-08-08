'use client'

import { MagnifyingGlass } from 'phosphor-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex md:w-[624] items-center justify-between border rounded border-gray-500 py-3 px-5"
    >
      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar livro avaliado"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        required
      />

      <MagnifyingGlass className="w-5 h-5 text-gray-500" />
    </form>
  )
}
