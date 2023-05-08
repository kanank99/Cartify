
export default function Home({ params }) {
  return (
    <div className='w-full max-w-screen-xl pt-28 flex flex-col h-screen'>
      hello {params.id}
    </div>

  )
}
