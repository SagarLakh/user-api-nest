import { UserEntity } from "../entities/user.entity";

export abstract class UserRepository {
    
    abstract findAll() : Promise<UserEntity[]>

    abstract findById(id : string) : Promise<UserEntity>

    abstract create(user : UserEntity) : Promise<void>

    abstract delete(id : string) : Promise<void>

    abstract update(id : string, user : UserEntity) : Promise<void>

}