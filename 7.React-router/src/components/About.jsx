import React from 'react'

export default function About() {
  return (
    <>
    <h1 className="text-3xl font-bold underline text-center">WELCOME TO THE ABOUT PAGE</h1>
    <button className="bg-blue-500 text-white p-2 rounded-md mx-auto block" onClick={() => navigate('/')}>Go to Home Page</button>
    </>
  )
}