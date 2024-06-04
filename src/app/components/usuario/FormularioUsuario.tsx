import { Usuario } from '@/core/model/Usuario'
import InputTexto from '../shared/InputTexto'

export interface FormularioUsuarioProps {
  usuario: Partial<Usuario>
  onChange: (usuario: Partial<Usuario>) => void
  salvar: (usuario: Partial<Usuario>) => void
  excluir: (usuario: Partial<Usuario>) => void
  cancelar: (usuario: Partial<Usuario>) => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
  return (
    <div className="flex flex-col gap-4">
      <InputTexto
        label="Nome"
        type="text"
        value={props.usuario.nome}
        onChange={(e) =>
          props.onChange({ ...props.usuario, nome: e.target.value })
        }
      />
      <InputTexto
        label="Email"
        type="email"
        value={props.usuario.email}
        onChange={(e) =>
          props.onChange({ ...props.usuario, email: e.target.value })
        }
      />
      <InputTexto
        label="Senha"
        type="password"
        value={props.usuario.senha}
        onChange={(e) =>
          props.onChange({ ...props.usuario, senha: e.target.value })
        }
      />

      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <button
            className="bg-blue-500 px-4 py-2 rounded-md"
            onClick={() => props.salvar(props.usuario)}
          >
            Salvar
          </button>
          <button
            className="bg-zinc-500 px-4 py-2 rounded-md"
            onClick={() => props.cancelar(props.usuario)}
          >
            Cancelar
          </button>
        </div>
        <button
          className="bg-red-500 px-4 py-2 rounded-md"
          onClick={() => props.excluir(props.usuario)}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}
