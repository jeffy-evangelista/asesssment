import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function Reports() {
    return (
        <Layout>
            <iframe
                src="https://datastudio.google.com/embed/reporting/8351a600-842b-4165-a622-18c89916eb4d/page/rmvjC"
                style={{ width: '1px', minWidth: '100%', minHeight: '1000px' }}
            />
        </Layout>
    )
}
