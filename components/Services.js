import {
  CodeIcon,
  CursorClickIcon,
  ChartBarIcon,
  LightBulbIcon,
  SpeakerphoneIcon,
  TrendingUpIcon,
  IdentificationIcon,
  FingerPrintIcon,
  UsersIcon,
} from '@heroicons/react/solid';

const Services = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`py-16 ${bgcolor}`}>
      <div className='contain mx-auto'>
        <h2 className='text-center mb-8 md:mb-20'>
          Webbyråns tjänster & digitala lösningar
        </h2>
        <div className='md:grid md:grid-cols-3 grid-cols-1 gap-8'>
          <div className='w-full text-center md:-mt-8'>
            <div className='relative flex flex-col break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700'>
                  <CodeIcon />
                </div>
                <h2 className='text-xl font-bold'>Webbutveckling</h2>
                <div className='mt-2 mb-4 text-gray-600 flex flex-col gap-4'>
                  <p>
                    Behöver ni en ny hemsida som besökarna vill stanna på? Med
                    hjälp av moderna lösningar och genomtänkt design kommer era
                    kunder hitta precis vad de söker efter på webbsidan.
                  </p>
                  <p>
                    Hemsidan eller e-handeln kommer såklart också vara optimerad
                    för att ranka högt på Google och andra sökmotorer, med hjälp
                    av s.k. Search Engine Optimization (SEO).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full text-center md:order-first'>
            <div className='relative flex flex-col break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700'>
                  <TrendingUpIcon />
                </div>
                <h2 className='text-xl font-bold'>Digital marknadsföring</h2>
                <div className='mt-2 mb-4 text-gray-600 flex flex-col gap-4'>
                  <p>
                    Behöver ni stå ut i dagens digitala landskap? Nå ut till nya
                    och befintliga kunder genom digital marknadsföring. Oavsett
                    vilka digitala kanaler ni vill nå ut via, så kan vi hjälpa
                    dig.
                  </p>
                  <p>
                    Specialister inom sociala medier tar tillsammans med er fram
                    strategier & annonser och de utvärderar & optimerar era
                    kampanjer löpande. Med lång erfarenhet och noga analysering
                    av vad som fungerar, kommer vi hitta det bästa
                    tillvägagångssättet för er.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full text-center'>
            <div className='relative flex flex-col break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700'>
                  <IdentificationIcon />
                </div>
                <h2 className='text-xl font-bold'>Digitalt varumärke</h2>
                <div className='mt-2 mb-4 text-gray-600 flex flex-col gap-4'>
                  <p>
                    Ska ni starta ett nytt företag eller uppdatera ett gammalt
                    varumärke? Vi gör logotyper, grafiska profiler, strategier
                    för framtiden och mycket mer, tillsammans med er.
                  </p>
                  <p>
                    Ett starkt varumärke, analogt och digitalt, gör avtryck och
                    skapar känslor hos folk. Vi står redo att hjälpa er att ta
                    fram designer och innehåll som kunder vill förknippas med.
                    Ett varumärke som lyfter fram det budskap ni vill förmedla
                    på digitala medier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center mt-16 gap-8'>
          <div className='w-full md:w-5/12 mx-auto flex flex-col gap-4 md:text-lg'>
            {/* <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
              <i className='fas fa-user-friends text-xl'></i>
            </div> */}
            <h2 className='text-3xl font-bold'>
              Lösningar inom webbutveckling & digital marknadsföring.&nbsp;
              <br />
              Enkelt.
            </h2>
            <p>
              Vi vill att det ska kännas okomplicerat för dig som företagare att
              arbeta med Creative Value Marketing. Just därför gör vi vårt allra
              yttersta för att lyssna på er och göra vad vi kan, för att ni ska
              få precis den hjälp ni behöver.
            </p>
            <p>
              Vare sig om det handlar om en nybyggd hemsida med bra UI/UX-design
              (layout och användarvänlighet/gränssnitt), ett nytt sätt att nå ut
              till kunder på med hjälp av digital marknadsföring eller kanske
              ledning när ert varumärke ska göras om, spelar ingen roll. Vi
              hjälper er.
            </p>
          </div>

          <div className='w-full md:w-4/12 mx-auto'>
            <div className='flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-800'>
              <img
                alt='...'
                src={
                  '/assets/images/webbutveckling-webbyra-creative-value-marketing.webp'
                }
                className='w-full h-full align-middle rounded-t-lg'
              />
              <div className='relative p-8 mb-4'>
                <svg
                  preserveAspectRatio='none'
                  xmlns='https://www.w3.org/2000/svg'
                  viewBox='0 0 583 95'
                  className='absolute left-0 w-full block'
                  style={{
                    height: '95px',
                    top: '-94px',
                  }}
                >
                  <polygon
                    points='-30,95 583,95 583,65'
                    className='text-gray-800 fill-current'
                  ></polygon>
                </svg>
                <h3 className='text-xl font-bold text-white'>
                  Lägg fokus på det ni kan bäst
                </h3>
                <p className='text-md font-light mt-2 text-white'>
                  så lovar vi att göra detsamma. Arbeta med det som gör er
                  oslagbara, så ser vi till att ta hand om ert digitala ansikte
                  utåt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
