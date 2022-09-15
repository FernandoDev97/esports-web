import './styles/main.css'
import logoNLW from './assets/logo-nlw-esports.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'

function App() {
  return (
    <div className='w-full flex items-center mx-auto flex-col max-w-[1344px] mt-20'>
      <img src={logoNLW} alt="Logo Nlw" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 self-stretch mt-8 rounded-lg bg-nlw-gradient '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'> Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos plays</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/> 
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
