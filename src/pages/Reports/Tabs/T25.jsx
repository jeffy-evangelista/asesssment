import {Center, Grid, GridItem, SimpleGrid} from '@chakra-ui/layout'
import {Stat, StatGroup, StatHelpText, StatLabel, StatNumber} from '@chakra-ui/stat'
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T25() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/ebea61f5-2c2d-4742-9d70-e8007f9322b0/page/vvZiC"
                style={{ width: '1px', minWidth: '100%'}}
            />
        </Grid>
    )
}
