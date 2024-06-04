import { IconHome } from '@tabler/icons-react'
import Pagina from './components/template/Pagina'
import Titulo from './components/template/Titulo'

export default function Home() {
  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconHome} principal="Inicio" secundario="Página inicial" />
    </Pagina>
  )
}
