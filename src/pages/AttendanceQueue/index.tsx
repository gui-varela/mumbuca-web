import { useEffect, useState } from 'react'
import { getQueueByAgency } from '../../services/api'
import { Container } from './styles'

export function AttendanceQueue() {
  const [queue, setQueue] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await getQueueByAgency(
        '0689d9a6-c60f-4ba4-949e-7aa95116340e',
      )

      console.log(response.data)

      if (response) {
        setQueue(response.data[0])
      }
    })()
  }, [])

  return (
    <Container>
      <p>{queue.id}</p>
    </Container>
  )
}
