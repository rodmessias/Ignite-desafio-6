import { Flex, Text, useBreakpointValue, Image } from "@chakra-ui/react";

interface Props {
    icon: string;
    title: string;
}

export default function Prop({ icon, title }: Props) {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true,
    });

    return (
        <Flex
            direction={['row', 'column']}
            align={'center'}
            justify={'center'}
        >
            {isMobile ?
                <Image
                    src={`/icons/${icon}.svg`}
                    w={'85px'}
                    h={'85px'}
                    mb={'6'}
                    alt={icon}
                /> :
                <Text
                    color={'yellow.400'}
                    fontSize={'4xl'}
                    mr={'2'}
                >
                    •
                </Text>}
            <Text
                fontWeight={'600'}
                color={'gray.700'}
                fontSize={['md', 'xl', '2xl']}
            >
                {title}
            </Text>
        </Flex>
    );
}