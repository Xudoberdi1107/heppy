import './App.css'

function App() {
  return (
    <div className='container-box'>
      {/* Секция 1: Приветствие с первым фоном */}
      <div className='section section1'>
        <div className='content'>
          <h1 className='text-4xl text-center'>🌙 Assalomu alaykum.</h1>
          <h2 className='text-3xl text-center'>Tug'ilgan kuningiz muborak bo'lsin.</h2>
        </div>
      </div>

      {/* Секция 2: Clip-эффект с фиксированным текстом */}
      <div className='section section2'>
        <div className='fixed-text'>
          <h1 className='text-2xl text-center px-8'>
            Alloh taolo sizga mustahkam iymon, qalbingizga osoyishtalik va har bir kuningizga baraka ato etsin.
          </h1>
        </div>
      </div>

      {/* Секция 3: Следующий контент */}
      <div className='section section3'>
        <div className='content'>
          <h1 className='text-3xl text-center'>Duolaringiz qabul bo'lsin</h1>
        </div>
      </div>

      {/* Секция 4: Финальный контент */}
      <div className='section section4'>
        <div className='content'>
          <h1 className='text-3xl text-center'>💚 Omad tilaymiz</h1>
        </div>
      </div>
    </div>
  )
}

export default App