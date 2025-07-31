import React from 'react'
import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { BtnTheme, Description, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <>
      <aside>
        <SidebarContainer>
          <Avatar />
          <Title fontSize={20}>Nycolas Klentfelt</Title>
          <Paragraph fontSize={16} tipo="secundario">
            Nycolas-Klentfelt
          </Paragraph>
          <Description tipo="principal" fontSize={12}>
            Engenheiro Front-end
          </Description>
          <BtnTheme>Trocar tema</BtnTheme>
        </SidebarContainer>
      </aside>
    </>
  )
}

export default Sidebar
