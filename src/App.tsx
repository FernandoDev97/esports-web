import './styles/main.css'
import logoNLW from './assets/logo-nlw-esports.svg'
import GameBanner from './components/GameBanner'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CreateAdBanner from './components/CreateAdBanner'
import { GameController } from 'phosphor-react'
import Input from './components/Form/Input'


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
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-full max-w-[480px] shadow-lg'>
            <Dialog.Title className='text-3xl text-white font-black'>
              Publique um anúncio
            </Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor="game">Qual o game?</label>
                <Input id='game' type='text' placeholder='Selecione o jogo que deseja jogar' />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor="name">Seu nome (ou nickname)</label>
                <Input id='name' type="text" placeholder='Como te chamam dentro do game?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input type="number" placeholder='Tudo bem ser ZERO' id="yearsPlaying" />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="discord">Qual seu discord</label>
                  <Input type="text" id='discord' placeholder='Usuário#00000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex gap-6 flex-col'>
                  <label className='font-semibold' htmlFor="weekDays">Quando costuma Jogar</label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Domingo'>D</button>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Segunda'>S</button>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Terça'>T</button>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Quarta'>Q</button>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Quinta'>Q</button>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Sexta'>S</button>
                    <button
                      className='w-8 h-8 rounded bg-zinc-900'
                      title='Sábado'>S</button>
                  </div>
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='font-semibold' htmlFor="hourStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input type="time" id='hourStart' placeholder='De' />
                    <Input type="time" id='hourEnd' placeholder='Até' />
                  </div>
                </div>
              </div>
              <div className='mt-2 flex gap-2 text-sm'>
                <Input type='checkbox' />
                Constumo me conectar ao chat de voz
              </div>
              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                  <GameController size={24} />
                  Encontar duo
                </button>
              </footer>
            </form>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
