import CTAButton from './CTAButton';

const Featured = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`py-16 ${bgcolor}`}>
      <div className='contain mx-auto items-center justify-evenly flex flex-col-reverse gap-8 md:flex-row'>
        <div className='flex justify-center items-center'>
          <img
            alt='Creative Value Marketing vägledande ord.'
            className='max-w-full w-full h-full max-h-[32rem] rounded-lg shadow-lg'
            src={
              '/assets/images/digital-marknadsforing-creative-value-marketing.webp'
            }
          />
        </div>
        <div className='w-full flex flex-col gap-4 md:w-5/12 '>
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
  );
};

export default Featured;
