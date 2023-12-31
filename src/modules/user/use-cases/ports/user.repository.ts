import { User } from '../../entities/user'

export interface IUserRepository {
  findAll(): Promise<User[]>
  findById(id: number): Promise<User>
  save(user: User): Promise<User>
  update(user: User): Promise<User>
  delete(id: number): Promise<User>
}