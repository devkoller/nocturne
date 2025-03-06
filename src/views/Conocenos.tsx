import { Menu, Footer, Maps } from '@/components/Landing'
import raul from '@/assets/images/otorrino/raul.avif'
import magdicarla from '@/assets/images/otorrino/magdicarla.avif'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Conocenos = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Menu />
      <header className='bg-medica p-10 w-full'>
        <div className='w-10/12 mx-auto'>
          <h1 className='text-center text-white'>
            <p className='text-2xl md:text-5xl'>Conócenos</p>
          </h1>
        </div>
      </header>
      <main className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-10'>

        <article className='grid grid-cols-1 gap-5 md:grid-cols-12 mb-10 text-sm text-justify bg-gray-100 p-10 rounded-md' id='raul'>
          <div className='col-span-1 md:col-span-8 flex flex-col gap-3'>
            <div>
              <h2 className='text-2xl md:text-3xl text-medica rounded-sm'>Dr. Raúl Durán López
              </h2>
              <p className='text-justify'>
                Otorrinolaringología, laringología, alergia, rinología y cirugía plástica facial.
              </p>
            </div>

            <div>
              <p>Médico Cirujano y Partero. Universidad de Guadalajara
              </p>
              <p>Cédula profesional 2464260. Cédula profesional estatal definitiva PEJ 277782.
              </p>
            </div>

            <div>
              Especialidad en Otorrinolaringología realizada en el Hospital Civil de Guadalajara, Universidad de Guadalajara, con la Cédula de Especialista 3624699; cédula de especialidad PEJ 278120.
            </div>

            <p>
              Certificación y recertificación por el Consejo Mexicano de Otorrinolaringología y Cirugía de Cabeza y Cuello, con el registro DUL-1807/05
            </p>

            <ul className='list-disc px-5'>
              <li className=''>
                <p>Diplomado en Alergia en Otorrinolaringología, avalado por la Universidad de Guadalajara.
                </p>
              </li>
              <li>
                <p>Diplomado en Rinología y Cirugía Estética Facial, avalado por la Universidad de Autónoma de México.
                </p>
              </li>
              <li>
                <p>
                  Diplomado Latinoamericano de Laringología, Fonocirugía y Reconstrucción de la Vía Aérea, avalado por la Universidad Autónoma de México.
                </p>
              </li>
              <li>
                <p>Maestría Gerencia en Servicios de Salud, División de Postgrado del Centro Universitario de Ciencias de la Salud, Universidad de Guadalajara. Cédula de Maestría PEJ 278178, registrada por el Gobierno del Estado de Jalisco.
                </p>
              </li>
            </ul>

          </div>
          <div className='col-span-1 md:col-span-4 flex justify-center items-center'>
            <img src={raul} alt="" className='shadow-xl shadow-medica' />
          </div>
        </article>


        <article className='grid grid-cols-1 gap-5 md:grid-cols-12 mb-10 text-sm text-justify bg-gray-100 p-10 rounded-md' id='magdicarla'>
          <div className='col-span-1 md:col-span-8 flex flex-col gap-3'>
            <div>
              <h2 className='text-2xl md:text-3xl text-medica'>Dra. Magdicarla De Alba
              </h2>
              <p className='text-justify'>
                Otorrinolaringología, otología, neuro-otología, cirugía estética y funcional de nariz, alergia.
              </p>
            </div>

            <div>
              <p>Médico Cirujano y Partero. Universidad de Guadalajara.
              </p>
              <p>Cédula profesional 2464258. Cédula profesional estatal definitiva PEJ 277752.
              </p>
            </div>

            <div>
              <p>Especialidad en Otorrinolaringología, realizada en el Hospital Civil de Guadalajara “Fray Antonio Alcalde”; Universidad de Guadalajara. Cédula de especialista 3245985. Cédula de especialidad PEJ 278186.
              </p>
            </div>


            <ul className='list-disc px-5'>
              <li className=''>
                <p>
                  Adiestramiento en Audiología, realizado en el Hospital de Especialidades del Centro Médico Nacional de Occidente, del Instituto Mexicano del Seguro Social.
                </p>
              </li>
              <li>
                <p>
                  Certificación y recertificación por el Consejo Mexicano de Otorrinolaringología y Cirugía de Cabeza y Cuello, A.C., con el registro No. ALM-1297/01.
                </p>
              </li>
              <li>
                <p>
                  Maestría en Investigación Clínica, División de Postgrado del Centro Universitario de Ciencias de la Salud, Universidad de Guadalajara. Cédula de Maestría PEJ 278191, registrada por el Gobierno del Estado del Jalisco.
                </p>
              </li>
              <li>
                <p>
                  Certificación por el Consejo Mexicano de Otorrinolaringología y Cirugía de
                  Cabeza y Cuello, A.C. como especialista en Neuro-Otología, con el registro No. ALM-NEUO-010/18.
                </p>
              </li>
            </ul>

          </div>
          <div className='col-span-1 md:col-span-4 flex justify-center items-center'>
            <img src={magdicarla} alt="" className='shadow-xl shadow-medica rounded-sm' />
          </div>
        </article>


      </main>
      <Maps />
      <Footer />
    </>
  )
}
