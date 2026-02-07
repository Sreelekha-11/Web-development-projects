import React from 'react'
import './App.css'
import Carousel from './Components/Carousel';

function App() {

  let slides = [
    "https://wallpaperaccess.com/full/1534864.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.VJiARj0UkxCMgU5T5unQwAHaEK?w=1600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://picfiles.alphacoders.com/294/thumb-1920-294486.jpg",
    "https://wallpapercave.com/wp/wp4511436.jpg",
    "https://wallpaperaccess.com/full/1792983.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/437a30c1-0fa6-4a1d-b4f1-3929c544e015/d4mhawo-b9ed595d-fa0e-48bc-a31c-32723b0af3b7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzN2EzMGMxLTBmYTYtNGExZC1iNGYxLTM5MjljNTQ0ZTAxNVwvZDRtaGF3by1iOWVkNTk1ZC1mYTBlLTQ4YmMtYTMxYy0zMjcyM2IwYWYzYjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4VHUlbW7zstqDcVdvN0SfxY3zui-1g8D7AIr6X8LNWQ"
  ]

  return (
    <div className='w-[60%] m-auto pt-11'>
      <Carousel slides={slides} />
    </div>
  )
}

export default App


