import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";

export class UserRepository {
    
    async findAll() : Promise<User[]> {
        return
    }

    async findById(id : string) : Promise<User> {
        return
    }

    async create(user : CreateUserDto) : Promise<void> {
        
    }

    async delete(id : string) : Promise<void> {

    }

    async update(id : string, user : UpdateUserDto) : Promise<void> {
        
    }

}