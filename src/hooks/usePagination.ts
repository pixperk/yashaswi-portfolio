import { useState } from 'react'

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(items.length / itemsPerPage)

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const nextPage = () => setCurrentPage((old) => Math.min(old + 1, maxPage))
  const prevPage = () => setCurrentPage((old) => Math.max(old - 1, 1))

  return { currentItems, nextPage, prevPage, currentPage, maxPage }
}
