import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBtn } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragraph tipo="secundario">Lista de tarefas feita com VueJS</Paragraph>
      <LinkBtn>Visualizar</LinkBtn>
    </Card>
  )
}

export default Project
