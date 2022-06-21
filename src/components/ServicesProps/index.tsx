import { Grid, GridItem } from "@chakra-ui/react";
import Prop from "./Prop";

export default function ServicesProps() {
    return (
        <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
            w={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mt={['10', '32']}
            mx={'auto'}
            maxW={'1160px'}
            gap={[1, 5]}
        >
            <GridItem>
                <Prop icon={'cocktail'} title={'vida noturna'} />
            </GridItem>
            <GridItem>
                <Prop icon={'surf'} title={'praia'} />
            </GridItem>
            <GridItem>
                <Prop icon={'building'} title={'moderno'} />
            </GridItem>
            <GridItem>
                <Prop icon={'museum'} title={'clássico'} />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Prop icon={'earth'} title={'e mais...'} />
            </GridItem>

        </Grid>

    );
}