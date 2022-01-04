import {Center, Grid, GridItem, SimpleGrid, Text} from '@chakra-ui/layout'
import {Stat, StatGroup, StatHelpText, StatLabel, StatNumber} from '@chakra-ui/stat'
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T2() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>

            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/ec1d4730-20e8-46d8-ac45-dfacd393acc0/page/ntZiC"
                style={{ width: '1px', minWidth: '100%'}}
            />
        </Grid>
    )
}
