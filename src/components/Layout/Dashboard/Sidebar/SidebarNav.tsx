import {
  faAddressCard, faBell, faStar,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  faCalculator,
  faChartPie,
  faCode,
  faDroplet,
  faGauge,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
  faFaceSmile,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'
import { Badge } from 'react-bootstrap'
import SidebarNavGroup from '@/components/Layout/Dashboard/Sidebar/SidebarNavGroup'
import SidebarNavItem from '@/components/Layout/Dashboard/Sidebar/SidebarNavItem'
import { getDictionary } from '@/locales/dictionary'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default async function SidebarNav() {
  const dict = await getDictionary()
  return (
    <ul className="list-unstyled">
      <SidebarNavTitle>{dict.sidebar.items.administration}</SidebarNavTitle>
      <SidebarNavItem icon={faGauge} href="/" >
        {dict.sidebar.items.dashboard}
      </SidebarNavItem>
      <SidebarNavItem icon={faFaceSmile} href="/pokemons">
        My Family
      </SidebarNavItem>
      <SidebarNavItem icon={faLocationArrow} href="/children">my children</SidebarNavItem>

      <SidebarNavItem icon={faAndroid} href="#">{dict.sidebar.items.devices}</SidebarNavItem>

      <SidebarNavTitle>{dict.sidebar.items.extras}</SidebarNavTitle>
      <SidebarNavGroup toggleIcon={faBug} toggleText={dict.sidebar.items.reporting}>
        <SidebarNavItem icon={faBug} href="report_site">{dict.sidebar.items.report_website}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="report_app">{dict.sidebar.items.report_application}</SidebarNavItem>
      </SidebarNavGroup>
      <SidebarNavItem icon={faLocationArrow} href="/location">Locate your children</SidebarNavItem>


      <SidebarNavGroup toggleIcon={faBell} toggleText={dict.sidebar.items.notifications}>
        <SidebarNavItem href="#">{dict.sidebar.items.alerts}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.badge}</SidebarNavItem>
      </SidebarNavGroup>

    </ul>
  )
}
