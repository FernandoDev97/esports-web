import './styles/main.css'
import logoNLW from './assets/logo-nlw-esports.svg'
import GameBanner from './components/GameBanner'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CreateAdBanner from './components/CreateAdBanner'
import CreateAdModal from './components/CreateAdModal'


interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    async function getGames() {
      try {
        const response = await axios.get('http://localhost:3333/games')
        const data = await response.data
        setGames(data)
      } catch (error) {
        console.log(error)
      }
    }
    getGames()
  }, [])

  return (
    <div className='w-full flex items-center mx-auto flex-col max-w-[1344px] mt-20 mb-20'>
      <img src={logoNLW} alt="Logo Nlw" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => {
          return (
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
          )
        })}

      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal/>
      </Dialog.Root>

    </div>
  )
}

export default App
