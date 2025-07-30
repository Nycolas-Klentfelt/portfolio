import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSecao } from './styles'

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre</Title>
      <Paragraph tipo="principal">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, nisi.
        Repellat totam minus sapiente! Beatae laboriosam, praesentium recusandae
        corporis necessitatibus voluptatum quod vero perferendis veniam quidem
        voluptates commodi, porro illum!
      </Paragraph>
      <GithubSecao>
        <img
          height="180em"
          src="https://github-readme-stats.vercel.app/api?username=Nycolas-Klentfelt&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nycolas-Klentfelt&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default About
