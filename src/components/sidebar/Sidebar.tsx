import Image from 'next/image'

import { TbBrandNextjs } from 'react-icons/tb'
import { LuLayoutDashboard } from 'react-icons/lu'
import { AiOutlineCalculator } from 'react-icons/ai'
import { IoFootball, IoHeartOutline } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'

const MenuItems = [
  {
    path: '/dashboard/main',
    icon: <LuLayoutDashboard className="mr-2" size={25} />,
    title: 'Dashboard',
    subtitle: 'Data Overview',
  },
  {
    path: '/dashboard/counter',
    icon: <AiOutlineCalculator className="mr-2" size={25} />,
    title: 'Counter',
    subtitle: 'App state',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball className="mr-2" size={25} />,
    title: 'Pokemons',
    subtitle: 'Static Generation',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline className="mr-2" size={25} />,
    title: 'Favorites',
    subtitle: 'Global state',
  },
]

export function Sidebar() {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 min-w-[18rem]  left-0 "
    >
      <div id="logo" className="my-4 px-4">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <TbBrandNextjs className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-4 py-10">
        <p className="text-slate-500">Welcome back</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="avatar"
              className="rounded-full w-8 h-8"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Aksel Rivera</span>
        </a>
      </div>
      <div id="nav" className="w-full px-4">
        {MenuItems.map((item) => (
          <SidebarMenuItem
            key={item.path}
            path={item.path}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  )
}
