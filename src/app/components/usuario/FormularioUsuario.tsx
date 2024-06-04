import { Usuario } from '@/core/model/Usuario'
import Botao from '../shared/Botao'
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
          <Botao variant="primary" onClick={() => props.salvar(props.usuario)}>
            Salvar
          </Botao>
          <Botao
            variant="secondary"
            onClick={() => props.cancelar(props.usuario)}
          >
            Cancelar
          </Botao>
        </div>
        {props.usuario.id && (
          <Botao variant="danger" onClick={() => props.excluir(props.usuario)}>
            Excluir
          </Botao>
        )}
      </div>
    </div>
  )
}
