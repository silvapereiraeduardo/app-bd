import { Usuario } from '@/core/model/Usuario'
import { PrismaClient } from '@prisma/client'

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient()

  static async opterTodos(): Promise<Usuario[]> {
    return await RepositorioUsuario.db.usuario.findMany()
  }

  static async opterPorId(id: string): Promise<Usuario> {
    const usuario = await RepositorioUsuario.db.usuario.findUnique({
      where: { id: id },
    })

    return usuario as Usuario
  }

  static async salvar(usuario: Partial<Usuario>): Promise<Usuario> {
    return await RepositorioUsuario.db.usuario.upsert({
      where: { id: usuario.id },
      create: usuario as Usuario,
      update: usuario,
    })
  }

  static async excluir(id: string): Promise<Usuario> {
    return await RepositorioUsuario.db.usuario.delete({
      where: { id: id },
    })
  }
}
