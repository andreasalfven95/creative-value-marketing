import CTAButton from './CTAButton'
import ExportedImage from 'next-image-export-optimizer'

const Featured = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`py-16 ${bgcolor}`}>
      <div className='contain mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 items-center'>
        <div className='relative h-full min-h-[350px] rounded-lg overflow-hidden shadow-xl'>
          <ExportedImage
            src='assets/images/digital-marknadsforing-creative-value-marketing.webp'
            alt='Webbyrån Creative Value Marketings vägledande ord för webbutveckling och digital marknadsföring.'
            layout='fill'
            objectFit='cover'
            className='object-bottom'
          />
        </div>
        <div className='w-full flex flex-col justify-center gap-4'>
          <h2 className='text-3xl font-bold'>
            En personlig webbyrå, er hjälp på vägen.
          </h2>
          <p className='text-lg leading-8 text-gray-600'>
            Creative Value Marketing är webbyrå, baserad i Uppsala, fylld med
            fantastiska idéer. Vi har kreativa lösningar för såväl
            webbutveckling och digital marknadsföring, som grafisk design och
            varumärkesbyggande. Vi startade för att möta behovet hos flera
            företag, som både vill och behöver synas mer; och det är precis vad
            vi är bäst på!
          </p>
          <ul className='list-disc list-inside leading-8 text-lg'>
            <li>Webbutveckling som hjälper er att ta nästa steg.</li>
            <li>Digital marknadsföring med fokus på växande.</li>
            <li>Nöjda företagare, glada kunder.</li>
          </ul>
          <div className='mx-auto md:mx-0'>
            <CTAButton
              textColor={'text-white'}
              bgColor={'bg-sky-800/80'}
              borderColor={'border-black'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
