import { useShape } from '@electric-sql/react'

function Root() {
  const { data } = useShape({
    url: 'http://localhost:3000/v1/shape',
    params: {
      table: 'user_table'
    }
  })

  return (
    <pre>{ JSON.stringify(data, null, 2) }</pre>
  )
}

export default Root;