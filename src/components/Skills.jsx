import React from 'react'


const Skills = () => {
  const images = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/128/732/732190.png"
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/128/919/919851.png"
    },
    {
      id: 5,
      image: "https://cdn-icons-png.flaticon.com/128/15466/15466047.png"
    },
    {
      id: 6,
      image: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
    },
    {
      id: 7,
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
    },
    {
      id: 8,
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",

    },
    {
      id: 9,
      image: "https://cdn-icons-png.flaticon.com/128/919/919836.png"
    },
    {
      id: 10,
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
    },
    {
      id: 11,
      image: "https://cdn-icons-png.flaticon.com/128/733/733553.png"
    }
  ]
  return (
    <section className='min-h-[400px] mt-8'>
      <h2 className='text-center text-white text-3xl py-4 font-semibold uppercase'>Skills</h2>
      <div className='grid grid-cols-4 md:grid-cols-10 gap-2 mt-6 '>
        {
          images.map(item => (
            <div className='w-20 h-20 ' key={item.id}>
              <img className='aspect-square' src={item.image} alt="" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills