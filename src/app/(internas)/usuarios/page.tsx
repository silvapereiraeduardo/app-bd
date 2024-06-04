'use client'
import Botao from '@/app/components/shared/Botao'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import FormularioUsuario from '@/app/components/usuario/FormularioUsuario'
import ListaUsuario from '@/app/components/usuario/ListaUsuario'
import useUsuarios from '@/app/data/hooks/useUsuarios'
import { IconPlus, IconUser } from '@tabler/icons-react'

export default function Page() {
  const { usuario, alterarUsuario, usuarios, cancelar, salvar, excluir } =
    useUsuarios()

  return (
    <Pagina className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <Titulo
          icone={IconUser}
          principal="Usuarios"
          secundario="Cadastro de Usuarios"
        />
        {!usuario && (
          <div className="flex justify-end">
            <Botao
              variant="primary"
              className="flex items-center gap-2"
              onClick={() => alterarUsuario({})}
            >
              <IconPlus />
              <span>Novo Usuario</span>
            </Botao>
          </div>
        )}
      </div>
      {usuario ? (
        <FormularioUsuario
          usuario={usuario}
          onChange={alterarUsuario}
          cancelar={cancelar}
          salvar={salvar}
          excluir={excluir}
        />
      ) : (
        <>
          <ListaUsuario usuarios={usuarios} onClick={alterarUsuario} />
        </>
      )}
    </Pagina>
  )
}
