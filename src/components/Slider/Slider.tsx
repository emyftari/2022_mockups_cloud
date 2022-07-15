import { FC } from 'react'

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from './Slider.module.scss'

import CustomImage from 'components/ui/CustomImage'

const Slider: FC<any> = ({ images }) => {
  return (
    <Swiper
      className={styles.swiper}
      loop
      autoplay={{ delay: 4000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
    >
      {images.map((img: any) => (
        <SwiperSlide key={img.id}>
          <CustomImage priority={true} layout="fill" src={img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
