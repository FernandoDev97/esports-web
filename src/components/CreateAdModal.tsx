import Input from "./Form/Input"
import * as Dialog from '@radix-ui/react-dialog'
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from "phosphor-react"
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useEffect, useState } from "react"
import axios from "axios"

interface Game {
    id: string;
    title: string;
}

const CreateAdModal = () => {

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    console.log(weekDays)

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

   async function handleCreatAd (event: FormEvent) {
        event.preventDefault()

        const formData = new  FormData (event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if(!data.name) {
            return
        }

        try {
           await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaynig : Number(data.yearsPlaynig),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })
            alert('Anúncio criado com sucesso')
        } catch (error) {
            console.log(error)
            alert("Erro ao criar o anúncio")
        }
     
       
    }
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-full max-w-[480px] shadow-lg'>
                <Dialog.Title className='text-3xl text-white font-black'>
                    Publique um anúncio
                </Dialog.Title>

                <form onSubmit={handleCreatAd} className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor="game">Qual o game?</label>
                        <select defaultValue='' className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500' name='game' id='game'>
                            <option value='' disabled >Selecione o jogo que deseja jogar</option>
                            {games.map(game => {
                                return (
                                    <option key={game.id} value={game.id}>{game.title}</option>
                                )
                            })}
                        </select>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor="name">Seu nome (ou nickname)</label>
                        <Input name='name' id='name' type="text" placeholder='Como te chamam dentro do game?' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold' htmlFor="yearsPlaynig">Joga a quantos anos?</label>
                            <Input type="number" placeholder='Tudo bem ser ZERO' name="yearsPlaynig" id="yearsPlaynig" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold' htmlFor="discord">Qual seu discord</label>
                            <Input type="text" name='discord' id='discord' placeholder='Usuário#00000' />
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex gap-6 flex-col'>
                            <label className='font-semibold' htmlFor="weekDays">Quando costuma Jogar</label>

                            <ToggleGroup.Root type="multiple" onValueChange={setWeekDays} value={weekDays} className='grid grid-cols-4 gap-2'>
                                <ToggleGroup.Item
                                    value="0"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Domingo'>D</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="1"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Segunda'>S</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="2"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Terça'>T</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Quarta'>Q</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Quinta'>Q</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="5"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Sexta'>S</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="6"
                                    className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Sábado'>S</ToggleGroup.Item>
                            </ToggleGroup.Root>

                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label className='font-semibold' htmlFor="hourStart">Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input type="time" name='hourStart' id='hourStart' placeholder='De' />
                                <Input type="time" name='hourEnd' id='hourEnd' placeholder='Até' />
                            </div>
                        </div>
                    </div>
                    <label className='mt-2 flex gap-2 text-sm text-center'>
                        <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900" 
                        checked={useVoiceChannel}
                        onCheckedChange={(checked) => {
                            if (checked === true) {
                                setUseVoiceChannel(true)
                            } else {
                                setUseVoiceChannel(false)
                            }
                        }}>
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Constumo me conectar ao chat de voz
                    </label>
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
    )
}

export default CreateAdModal