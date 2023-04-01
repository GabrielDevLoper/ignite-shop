import { HomeContainer, Product } from "@/styles/pages/home"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import camiseta1 from "../assets/1.png"
import camiseta2 from "../assets/2.png"
import camiseta3 from "../assets/3.png"

import "keen-slider/keen-slider.min.css"

export default function Home() {
const [sliderRef] = useKeenSlider({
  slides: {
    perView: 3,
    spacing: 48
  }
})

  return (
    <>
      <HomeContainer ref={sliderRef}>
        <Product className="keen-slider__slide">
          <Image src={camiseta1} alt="" width={520} height={480}/>

          <footer>
            <strong>camiseta x</strong>
            <span>R$79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={camiseta2} alt="" width={520} height={480}/>

          <footer>
            <strong>camiseta x</strong>
            <span>R$79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={camiseta3} alt="" width={520} height={480}/>

          <footer>
            <strong>camiseta x</strong>
            <span>R$79,90</span>
          </footer>
        </Product> <Product className="keen-slider__slide">
          <Image src={camiseta3} alt="" width={520} height={480}/>

          <footer>
            <strong>camiseta x</strong>
            <span>R$79,90</span>
          </footer>
        </Product>

        
      </HomeContainer>
    </>
  )
}
