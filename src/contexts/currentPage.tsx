import { createContext, useState, useEffect } from 'react'

export const PageContext = createContext('')

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const recoveredCurrentPage = document.URL

    if (recoveredCurrentPage) {
      setCurrentPage(recoveredCurrentPage)
    }

    console.log(recoveredCurrentPage)
  }, [])

  return (
    <PageContext.Provider value={{ authenticated: !!currentPage, currentPage }}>
      {children}
    </PageContext.Provider>
  )
}
