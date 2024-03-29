
interface GameBannerProps {
    bannerUrl: string;
    title:  string
    adsCount: number;
}

const GameBanner = ({bannerUrl, title, adsCount}: GameBannerProps) => {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={bannerUrl} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute'>
                <strong className='font-bold text-white'>{title}</strong>
                <span className='text-zinc-300 text-sm block '>{adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}

export default GameBanner