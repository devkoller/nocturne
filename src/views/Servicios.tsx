
import { Menu, Footer, } from '@/components/Landing'
import { useState, useEffect } from 'react'
import { useFetch } from "@/hooks"
import { ServiceType } from "@/types"
import { HiOutlineCheckCircle } from "react-icons/hi2";

interface StateTypeof {
  consulta: ServiceType[] | []
  consultorio: ServiceType[] | []
  urgencia: ServiceType[] | []
}

export const Servicios = () => {
  const [ServiceData, setServiceData] = useState<StateTypeof>({
    consulta: [],
    consultorio: [],
    urgencia: [],
  })

  const { response: data } = useFetch({
    url: "/service/get-all",
    qs: {
      public: 1
    }
  })

  // print serivice data by type
  const print = (type: ServiceType[]) => {
    return type.map((item, index) => {
      return (
        <div className="flex w-full flex-col bg-white py-5 rounded-md items-center gap-3 px-5 grayscale duration-500 hover:grayscale-0" key={index}>
          <div className="flex flex-col gap-3 items-center">
            <HiOutlineCheckCircle className="text-medica text-6xl" />
            <p className="text-center">
              {item.name}
            </p>
          </div>
        </div>
      )
    })
  }


  useEffect(() => {
    if (data) {
      let consulta: ServiceType[] = []
      let consultorio: ServiceType[] = []
      let urgencia: ServiceType[] = []

      data.data.forEach((item: ServiceType) => {
        if (item.type === 1) {
          consulta.push(item)
        } else if (item.type === 2) {
          consultorio.push(item)
        } else if (item.type === 3) {
          urgencia.push(item)
        }
      })
      setServiceData({
        consulta,
        consultorio,
        urgencia
      })
    }
  }, [data])


  return (
    <>
      <Menu />
      <header className='bg-medica p-10 w-full'>
        <div className='w-10/12 mx-auto'>
          <h1 className='text-center text-white'>
            <p className='text-2xl md:text-5xl'>NUESTROS SERVICIOS</p>
            <p className='text-xl md:text-4xl'>de Otorrinolaringología</p>
          </h1>
        </div>
      </header>

      <div className='w-full py-10'>
        <div className='w-11/12 bg-gray-100 bg-opacity-60 rounded-md  mx-auto flex flex-col gap-20 items-center py-10 px-5 relative z-10'>

          <div className='w-full'>
            <div className='flex justify-center mb-5'>
              <h2 className='text-xl lg:text-3xl text-medica'>
                Padecimientos que se tratan en consulta
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {print(ServiceData.consulta)}
            </div>
          </div>

          <div className='w-full'>
            <div className='flex justify-center mb-5'>
              <h2 className='text-xl lg:text-3xl text-medica'>
                Procedimientos en consultorio
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {print(ServiceData.consultorio)}
            </div>
          </div>

          <div className='w-full'>
            <div className='flex justify-center mb-5'>
              <h2 className='text-xl lg:text-3xl text-medica'>
                Atención de Urgencia
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {print(ServiceData.urgencia)}
            </div>
          </div>

        </div>


      </div>

      <Textos />

      <Footer />
    </>
  )
}


const Textos = () => {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-10'>
      <h3 className='text-3xl mb-5'>Procedimientos Quirúrgicos</h3>
      <div className='flex flex-col gap-5 text-justify px-5'>
        <div>
          <h4 className='font-bold'>ADENOIDECTOMIA Y/O AMIGDALECTOMIA</h4>
          <p>
            La amigdalectomía y/o adenoidectomía es la intervención que se realiza para extirpar las amígdalas y las vegetaciones adenoideas. Estas formaciones se encuentran en la garganta (amígdalas o anginas) y en la zona posterior de la nariz (vegetaciones o adenoides), y suele indicarse su extirpación generalmente por problemas de infecciones de repetición, o porque alcancen un gran tamaño que dificulte la respiración, provocando en ocasiones respiración obligada por la boca o ronquidos. En la intervención, realizada bajo anestesia general, se introduce un instrumento que mantiene la boca abierta para permitir la extirpación de las amígdalas. Las vegetaciones se extraen mediante legrado cuidadoso de la parte de la garganta que se encuentra detrás de la nariz. El dolor post operatorio es una molestia que puede ser razonablemente controlada con medicación postoperatoria.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>DRENAJE DE ABSCESOS DE CUELLO
          </h4>
          <p>Un absceso de cuello es la formación y acumulación de secreción purulenta (pus) generalmente debido a infecciones de origen dental o de vías respiratorias. Los objetivos de drenar un absceso profundo de cuello son principalmente extraer material purulento encontrado confinado dentro de los espacios profundos del cuello, además de material necrótico o no viable localizado en la misma cavidad, de tal forma que sea posible la mejoría clínica, en conjunto con el uso de antibióticos administrados por vía intravenosa. Al realizar drenaje quirúrgico de un absceso profundo de cuello, es posible que mejoren síntomas tales como dolor, trismus (incapacidad para abrir la boca), aumento del volumen en cuello, rigidez muscular y otros, aunque también es posible que algunos de estos síntomas no mejoren de manera pronta.</p>
        </div>
        <div>
          <h4 className='font-bold'>SEPTUMPLASTÍA</h4>
          <p>Es una operación para corregir una deformidad de la división entre ambos lados de la nariz y que su propósito es mejorar la respiración, pero además puede ser requerida para poder permitir un adecuado examen del interior de la nariz en busca de pólipos, inflamación, tumores o focos de hemorragia. Cuando el septum nasal esta deformado, no hay ningún otro tratamiento o medicación que permita enderezarlo, siendo la cirugía la única alternativa terapéutica.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>TURBINOPLASTIA</h4>
          <p>Este procedimiento se realiza para disminuir el tamaño de los cornetes, los cornetes son estructuras que se encuentran en las fosas nasales y tienen como función ayudar a regular el flujo aéreo. Aumentan de tamaño principalmente por procesos alérgicos o infecciosos. La turbinoplastia puede realizarse con diferentes técnicas, la que tiene mejores resultados suele ser la que se realiza con radiofrecuencia.</p>
        </div>
        <div>
          <h4 className='font-bold'>CIRUGÍA ENDOSCOPICA DE SENOS PARANASALES
          </h4>
          <p>La cirugía endoscópica nasosinusal es la técnica quirúrgica que tiene como finalidad en tratamiento de diferentes enfermedades inflamatorias o infecciosas a nivel nasal y sinusal como sinusitis, quistes de retención mucosos, poliposis, entre otras. La operación se realiza con la ayuda de endoscopios rígidos de luz fría favoreciendo así el control visual y una mejor iluminación de las cavidades
            mencionadas. Este tipo de técnica quirúrgica, constituye uno de los principales avances de la medicina en los últimos años y la mejor forma conocida de tratar esta patología reduciendo en forma notable las molestias post-operatorias y las complicaciones, sin embargo no está exenta a estas.</p>
        </div>
        <div>
          <h4 className='font-bold'>RINOPLASTIA O RINOSEPTUMPLASTIA
          </h4>
          <p>La cirugía de la nariz (rinoplastia o rinoseptumplastía) es una operación realizada frecuentemente en cirugía otorrinolaringológica. Este procedimiento quirúrgico puede producir cambios en el aspecto, estructura y función de la nariz. La rinoseptoplastia puede reducir o aumentar el tamaño de la nariz, cambiar la forma de la punta, estrechar la anchura de las alas, o cambiar el ángulo entre la nariz y el labio superior. Esta operación puede ayudar a corregir defectos de nacimiento, lesiones nasales y algunos problemas respiratorios. No existe un tipo universal de rinoplastia que cubra las necesidades de cada paciente. La cirugía de rinoplastia se diseña para cada paciente, dependiendo de sus propias necesidades.
          </p>
          <p>En la rinoplastia las incisiones pueden hacerse por dentro de la nariz o disimuladas en lugares poco visibles de la misma, cuando se realiza una rinoplastia abierta. Puede realizarse simultáneamente cirugía nasal interna (septumplastia) para mejorar algunos problemas de respiración. El mejor candidato para este tipo de cirugía plástica es individuo que busca una mejoría estética, pero no una perfección, en el aspecto de su nariz. Por tanto debe tener expectativas realistas y estabilidad psicológica.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>MENTOPLASTIA</h4>
          <p>Es la colocación de un implante (prótesis) de mentón creada de un material biocompatible, el más utilizado es el silicón grado médico, con diversas formas y tamaños de acuerdo a las necesidades de cada paciente, con el fin de mejorar la armonía estética del perfil facial.</p>
        </div>
        <div>
          <h4 className='font-bold'>OTOPLASTIA</h4>
          <p>Es la corrección de la posición y forma de los pabellones auricurales (orejas), cuando estas son prominentes o presentan alguna malformación anatómica. La edad ideal para llevarla a cabo es a partir de los 6 años.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>BICHECTOMIA EXTIRPACIÓN DE BOLSAS DE BICHAT
          </h4>
          <p>Las Bolsas de Bichat son unos acúmulos de grasa muy definidos que tienen una importante participación en el contorno de las mejillas. Se extirpan cuando se quiere modificar la forma de una cara redonda o dar mayor realce a los huesos malares (pómulos).
          </p>
        </div>
        <div>
          <h4 className='font-bold'>IMPLANTES FACIALES
          </h4>
          <p>Es la colocación de implantes (protésis) creadas de un material biocompatible, el más utilizado es el silicón grado médico, con diversas formas y tamaños que se colocan en algunas estructuras de la cara, como en los huesos malares (pómulos), región sublabial, surcos nasogenianos, etc., de acuerdo a las necesidades de cada paciente, con el fin de mejorar la armonía estética del perfil y contorno facial.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>BLEFAROPLASTÍA</h4>
          <p>También llamada cirugía de los párpados, es para corregir el abultamiento o “bolsas” de los párpados inferiores y superiores, que dan la imagen de vista cansada.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>MICROCIRUGÍA DE LARÍNGE
          </h4>
          <p>Es la cirugia realizada con ayuda de un microscopio quirúrgico para realizar extirpación de lesiones en cuerdas vocales, como pólipos, nódulos, etc., que modifican la voz, al ocasionar disfonía (ronquera) o afonía (sin voz)
          </p>
        </div>
        <div>
          <h4 className='font-bold'>MASTOIDECTOMIA CON O SIN TIMPANOPLASTIA
          </h4>
          <p>Este tipo de intervención se emplea para tratar la infección crónica del oído que suele cursar con perforación de la membrana timpánica y también la afección conocida como colesteatoma u otitis crónica colesteatomatosa. El colesteatoma es una especie de acúmulo de piel en forma de bolsa que va creciendo hacia el interior del oído produciendo su destrucción progresiva. En su desarrollo causa sordera progresiva, infección con supuración del oído, mareos y ruidos en el oído. La intervención es necesaria para tratar de erradicar este proceso infeccioso y/o colesteatomatoso, y evitar las posibles complicaciones. Consiste en la apertura del oído medio y la mastoides (porción ósea posterior del oído medio) para extirpar la lesión y en los casos en que proceda, la colocación de un injerto en la membrana timpánica para sellar la perforación existente.</p>
        </div>
        <h3>
          Cirugías que se realizan para tratar algunos casos de Hipoacusia (pérdida auditiva) y sordera
        </h3>
        <div>
          <h4 className='font-bold'>COLOCACIÓN DE TUBOS DE VENTILACIÓN
          </h4>
          <p>La intervención de drenajes transtimpánicos, también llamada colocación de tubos de ventilación, se realiza para evacuar un derrame de moco situado tras la membrana timpánica (en caso de otitis seromucosa) y para airear adecuadamente el oído medio durante un tiempo mayor o menor. Con ello se resuelve la pérdida de audición que presenta por este motivo el paciente.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>TIMPANOPLASTIA</h4>
          <p>La timpanoplastia consiste en la apertura del oído medio para corregir perforaciones de la membrana timpánica, causantes de sordera o que facilitan infección de oído. Ello se hace a través de una incisión (corte en la piel) que se sitúa por detrás del pabellón auditivo (oreja) o por dentro del conducto auditivo externo y un poco por delante del mismo. Las corrección más común en esta operación es la colocación de un injerto para sellar una perforación timpánica, con el fin de reestablecer la función normal de la membrana timpánica. El injerto se suele obtener de la fascia del músculo temporal superficial o en ocasiones de cartílago, el cual se puede obtener del pabellón auricular, específicamente, del área denominada concha o también se puede utilizar el cartílago del trago.</p>
        </div>
        <div>
          <h4 className='font-bold'>ESTAPEDECTOMIA
          </h4>
          <p>La estapedectomia es una intervención quirúrgica que se lleva a cabo para tratar la otoesclerosis. La otoesclerosis es una enfermedad del oído que cursa con pérdida de audición de carácter progresivo que a la larga puede llegar a la sordera total. La intervención se suele realizar bajo anestesia local y sedación intravenosa. Consiste en quitar completamente un huesecillo del oído medio (específicamente el estribo) que bloquea la transmisión del sonido y colocar una prótesis en su lugar, que puede ser de diversos materiales, por ejemplo titanio. De esta forma se consigue recuperar la audición en un gran porcentaje de los casos y retrasar de forma muy importante la progresión de la sordera. También se puede realizar la Estapedotomia, que es una variación de la cirugía ya descrita, donde sólo se secciona y retira la parte superior del estribo.</p>
        </div>
        <div>
          <h4 className='font-bold'>OSCICULOPLASTÍA</h4>
          <p>Este procedimiento se puede realizar solo o en conjunto con timpanoplastia y/o mastoidectomia, cuando existen alteraciones en los huecesillos del oido medio, que pueden ser por infecciones, colesteatomas o malformaciones congénitas. Consiste en corregir o sustituir uno o varios de los huecesillos, ya sea por material óseo obtenido del mismo paciente o por protésis de oido medio realizadas de distintos materiales, como titanio.
          </p>
        </div>
        <div>
          <h4 className='font-bold'>CIRUGÍA DE COLOCACIÓN DE IMPLANTE COCLEAR
          </h4>
          <p>El implante coclear es un instrumento eléctrico que permite restaurar la audición de manera útil a quienes tienen un problema profundo de audición o una sordera total. El implante coclear hace que los estímulos lleven información al nervio auditivo a partir del cual los sonidos llegan a los centros superiores de la audición en el Sistema Nervioso Central. El objetivo de esta cirugía es colocar dentro del oído un implante coclear como dispositivo de ayuda.
          </p>
        </div>
      </div>
    </div >
  )
}