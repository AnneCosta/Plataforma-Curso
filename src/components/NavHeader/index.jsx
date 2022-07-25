// import { Link } from 'react-router-dom';
import './styles.css'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ClipboardListIcon,
  UserGroupIcon,
  MenuIcon,
  MailIcon,
  XIcon,
  TableIcon
} from '@heroicons/react/outline'

const linksMobile = [
  {
    name: 'Cursos',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/cursos',
    icon: ClipboardListIcon,
  },
  {
    name: 'Sobre',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/sobre',
    icon: UserGroupIcon,
  },
  { 
    name: 'Contato', 
    description: "Your customers' data will be safe and secure.", 
    href: '/contato', 
    icon: MailIcon 
  },
]

export function NavHeader() {
  return (
    <Popover className="relative bg-bgBlue">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 marker:md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-16 sm:h-20"
                src="Logo2.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-white rounded-md bg-cBlue-300 hover:bg-cBlue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-linkBlue">
              <span className="sr-only">Ver menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-5 md:flex">
            <a href="/cursos" className="text-base font-medium links">
              Cursos
            </a>
            <a href="/sobre" className="text-base font-medium links">
              Sobre
            </a>
            <a href="/contato" className="text-base font-medium links">
              Contato
            </a>
          </Popover.Group>
          
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a href="/login" className="text-base font-medium text-bgColor whitespace-nowrap hover:text-gray-900">
              Login
            </a>
            <a
              href="/registro"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-linkBlue whitespace-nowrap hover:bg-linkHover"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="divide-y-2 rounded-lg shadow-lg bg-cBlue-100 ring-1 ring-black ring-opacity-5 divide-cBlue-300">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-14"
                    src="Logo2.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-white rounded-md bg-cBlue-200 hover:text-white hover:bg-cBlue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-linkBlue">
                    <span className="sr-only">Fechar menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {linksMobile.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-cBlue-200 hover:text-white"
                    >
                      <item.icon className="flex-shrink-0 w-6 h-6 text-linkBlue" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium ">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div>
                <a
                  href="/registro"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-linkBlue hover:bg-linkHover"
                >
                  Cadastre-se
                </a>
                <p className="mt-6 text-base font-medium text-center text-bgColor">
                  Já tem conta?{' '}
                  <a href="/login" className="underline underline-offset-1 text-cBlue-400 hover:text-cBlue-600">
                    Faça login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}