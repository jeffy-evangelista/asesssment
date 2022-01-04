import {Center, Grid, GridItem, SimpleGrid} from '@chakra-ui/layout'
import {Stat, StatGroup, StatHelpText, StatLabel, StatNumber} from '@chakra-ui/stat'
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T1() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/6aab0696-1687-4893-b8f0-7e45bc6d0505/page/gvZiC"
                style={{ width: '1px', minWidth: '100%'}}
            />
        </Grid>
    )
}
