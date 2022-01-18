import {
  Box,
  Center,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Heading,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import Navlink from './Navlink'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { toggleColorMode } = useColorMode()
  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth()

  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
      py={4}
    >
      <HStack
        justifyContent='flex-end'
        maxW='container.xl'
        mx='auto'
        spacing={4}
      >
        {/* <Navlink to='/' name='City Health Office' size='lg' /> */}
        <Heading color="green.500">
          City Health Office
        </Heading>
        <Spacer />

        {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser &&
          <>
            <Navlink to='/users' name='Users' />
            <Navlink to='/patients' name='Patients' />

            <Menu>
              <MenuButton
                as={Button}
                colorScheme="green"
                rightIcon={<ChevronDownIcon />}
              >
                Account

              </MenuButton>
              <MenuList>
                <Link to='/profile'>
                  <MenuItem>
                    Profile
                  </MenuItem>
                </Link>
                <Link to='/logout' name='Logout' onClick={async e => {
                  e.preventDefault()
                  await logout()
                }}
                >
                  <MenuItem>
                    Logout
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </>
        }
      </HStack>
      <HStack
        justifyContent='center'
        maxW='container.xl'
        mx='auto'
        spacing={4}
        mt={3}
      >
        {currentUser &&
          <>
            <Navlink to='/animal-bite-admin' name='Animal Bite Treatment Admin' />
            <Navlink to='/communicable-admin' name='Communicable Diseases Admin' />
            <Navlink to='/immunization-admin' name='Immunization and Nutrition Admin' />
            <Navlink to='/tropical-admin' name='Tropical Diseases Admin' />
          </>
        }
        {
          !currentUser &&
          <>
            <Navlink to='/animal-bite' name='Animal Bite Treatment' />
            <Navlink to='/communicable' name='Communicable Diseases' />
            <Navlink to='/immunization' name='Immunization and Nutrition' />
            <Navlink to='/tropical' name='Tropical Diseasesm' />
          </>
        }

      </HStack>
    </Box>
  )
}
