export default function Home() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline text-center">WELCOME TO THE HOME PAGE</h1>
        <button className="bg-blue-500 text-white p-2 rounded-md mx-auto block" onClick={() => navigate('/about')}>Go to About Page</button>
    </div>
  )
}