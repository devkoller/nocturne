import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect } from 'react'
import { useFetch } from "@/hooks"
import { ServiceType } from "@/types"
import { HiOutlineCheckCircle } from "react-icons/hi2";

export const Clients = () => {
  const [ServiceData, setServiceData] = useState<ServiceType[]>([])

  const { response: data } = useFetch({
    url: "/service/get-all",
    qs: {
      public: 1
    }
  })


  const print = () => {
    return ServiceData.map((item, index) => {
      return <CarouselItem className="basis-1/2 md:basis-3/12 flex items-center" key={index}>
        <div className="flex w-full flex-col items-center gap-3 px-5 grayscale duration-500 hover:grayscale-0">
          <div className="flex flex-col gap-3 items-center">
            <HiOutlineCheckCircle className="text-medica text-6xl" />
            <p className="text-center">
              {item.name}
            </p>
          </div>
        </div>
      </CarouselItem>
    })
  }

  useEffect(() => {
    if (data) {
      setServiceData(data.data)
    }
  }, [data])


  return (
    <div className='w-10/12 mx-auto py-10 relative z-10' data-aos='zoom-in'>
      <div className='flex justify-center mb-5'>
        <h2 className='text-xl lg:text-3xl text-medica'>
          Nuestros servicios
        </h2>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {print()}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
