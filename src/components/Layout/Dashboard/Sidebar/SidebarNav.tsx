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
      <SidebarNavItem icon={faGauge} href="/" >
        {dict.sidebar.items.dashboard}
        <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons">
        {dict.sidebar.items.sample}
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </SidebarNavItem>

      <SidebarNavTitle>{dict.sidebar.items.administration}</SidebarNavTitle>
      <SidebarNavItem icon={faFaceSmile} href="#">{dict.sidebar.items.family}</SidebarNavItem>
      <SidebarNavItem icon={faAndroid} href="#">{dict.sidebar.items.devices}</SidebarNavItem>

      <SidebarNavTitle>{dict.sidebar.items.extras}</SidebarNavTitle>
      <SidebarNavGroup toggleIcon={faBug} toggleText={dict.sidebar.items.reporting}>
        <SidebarNavItem icon={faBug} href="report_site">{dict.sidebar.items.report_website}</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="report_app">{dict.sidebar.items.report_application}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavTitle>{dict.sidebar.items.theme}</SidebarNavTitle>
      <SidebarNavItem icon={faLocationArrow} href="#">{dict.sidebar.items.buttons}</SidebarNavItem>

      <SidebarNavGroup toggleIcon={faBell} toggleText={dict.sidebar.items.notifications}>
        <SidebarNavItem href="#">{dict.sidebar.items.alerts}</SidebarNavItem>
        <SidebarNavItem href="#">{dict.sidebar.items.badge}</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={faFileLines} href="/plan_international">About Plan International</SidebarNavItem>
    </ul>
  )
}
