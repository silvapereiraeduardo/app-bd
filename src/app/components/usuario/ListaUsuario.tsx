import { Usuario } from '@/core/model/Usuario'
import LinhaUsuario from './LinhaUsuario'

export interface LinhaUsuarioProps {
  onClick: (usuario: Usuario) => void
  usuarios: Usuario[]
}

export default function ListaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.usuarios.map((usuario) => (
        <LinhaUsuario
          key={usuario.id}
          usuario={usuario}
          onClick={props.onClick}
        />
      ))}
    </div>
  )
}
