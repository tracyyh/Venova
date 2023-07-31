import { navigate } from 'gatsby'
import * as React from 'react'
import { Route } from '../types/type'
import { Flex, Spacer, Center } from '@chakra-ui/react'
import Logo from './Logo'
import './topMenuModal.css'
const LINKS: Route[] = [
  {
    pageName: 'home',
    displayedName: 'Home',
    link: '/',
    children: [],
  },
  {
    pageName: 'about',
    displayedName: 'About',
    link: '/solution',
    children: [
      {
        pageName: 'birthcontrol',
        displayedName: 'Our Solution',
        link: '/solution',
        children: [],
      },
      {
        pageName: 'birthcontrol',
        displayedName: 'Birth Control Options',
        link: '/options',
        children: [],
      },
    ],
  },
  {
    pageName: 'team',
    displayedName: 'Team',
    link: '/team',
    children: [],
  },
  {
    pageName: 'press',
    displayedName: 'Press',
    link: '/press',
    children: [],
  },
  {
    pageName: 'contact',
    displayedName: 'Contact',
    link: '/contact',
    children: [],
  },
]

export default function TopMenuModal() {
  return (
    <>
      <div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Center h='70px' w='300px' onClick={() => navigate('/')}>
            <Logo className='logo' />
          </Center>
          <Spacer />
          <Center>
            <nav>
              <ul>
                {LINKS.map((x: Route) => {
                  return (
                    <li className='nav-btn' onClick={() => navigate(x.link)}>
                      <a>{x.displayedName}</a>
                      <ul className='sub-nav'>
                        {x.children.map((y: Route) => {
                          return (
                            <li>
                              <a href={y.link}>{y.displayedName}</a>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </Center>
        </Flex>
      </div>
    </>
  )
}
