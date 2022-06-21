import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Sliders() {
    return (
        <Flex
            w={'100%'}
            maxW={'1240px'}
            mx={'auto'}
            mb={['5', '10']}
            h={['250px', '450px']}
        >
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 5000 }}
                style={{ width: '100%', flex: '1' }}
            >
                <SwiperSlide>
                    <Flex
                        w={'100%'}
                        h={'100%'}
                        align={'center'}
                        justify={'center'}
                        direction={'column'}
                        bgImage={'url(/banner.jpg)'}
                        bgSize={'cover'}
                        bgRepeat={'no-repeat'}
                        textAlign={'center'}
                        bgPosition={'center'}
                    >
                        <Link href={'/continent/europe'}>
                            <a>
                                <Heading
                                    fontSize={['3xl', '4xl', '5xl']}
                                    color={'gray.100'}
                                    fontWeight={'bold'}
                                >
                                    Europa
                                </Heading>
                                <Text
                                    fontWeight={'bold'}
                                    color={'gray.300'}
                                    fontSize={['.8rem', '1xl', '2xl']}
                                    mt={['2', '4']}
                                >
                                    O continente mais antigo.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w={'100%'}
                        h={'100%'}
                        align={'center'}
                        justify={'center'}
                        direction={'column'}
                        bgImage={'url(/banner.jpg)'}
                        bgSize={'cover'}
                        bgRepeat={'no-repeat'}
                        textAlign={'center'}
                        bgPosition={'center'}
                    >
                        <Link href={'/continent/europe'}>
                            <a>
                                <Heading
                                    fontSize={['3xl', '4xl', '5xl']}
                                    color={'gray.100'}
                                    fontWeight={'bold'}
                                >
                                    Europa
                                </Heading>
                                <Text
                                    fontWeight={'bold'}
                                    color={'gray.300'}
                                    fontSize={['.8rem', '1xl', '2xl']}
                                    mt={['2', '4']}
                                >
                                    O continente mais antigo.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>

        </Flex>
    )
}