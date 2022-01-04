import {Center, Grid, GridItem, SimpleGrid} from '@chakra-ui/layout'
import {Stat, StatGroup, StatHelpText, StatLabel, StatNumber} from '@chakra-ui/stat'
import React from 'react'
import IframeResizer from "iframe-resizer-react";

export default function T1() {
    return (
        <Grid borderWidth='1px' maxW="full" borderRadius="lg" p={5}>
            <IframeResizer
                log
                src="https://datastudio.google.com/embed/reporting/f8be53e4-f2c6-4f19-b001-1fbf8cd321f8/page/pvZiC"
                style={{ width: '1px', minWidth: '100%'}}
            />
        </Grid>
    )
}
