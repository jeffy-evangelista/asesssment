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
  Link, Image
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import Navlink from './Navlink'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.png'

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

        <Link to="/">
          <Image
            maxHeight="50px"
            src={logo}
          />
        </Link>
        <Navlink to='/' name='Mangan da Kita' size='lg' />

        <Spacer />

        {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser &&
          <HStack>
            <Navlink to='/menu' name='Menu' />
            <Navlink to='/contact-information' name='Contact Information' />
            <Navlink to='/technology-stack' name='Technology Stack' />
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="blue"

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
          </HStack>
        }
      </HStack>
      <HStack
        justifyContent='center'
        maxW='container.xl'
        mx='auto' ww
        spacing={4}
      // mt={3}
      >
      </HStack>
    </Box>
  )
}
