import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { UserRepository } from "../user.repository";

export class TypeOrmUserRepositoryImpl implements UserRepository {

    constructor(
        @InjectRepository(UserEntity) 
            private userRepository: Repository<UserEntity>,
    ){}

    findAll(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }

    findById(id: string): Promise<UserEntity> {
        return this.userRepository.findOne(id)
    }

    create(user: UserEntity): Promise<void> {
        this.userRepository.save(user)
        return
    }

    delete(id: string): Promise<void> {
        this.userRepository.delete(id)
        return
    }

    update(id: string, user: UserEntity): Promise<void> {
        this.userRepository.update(id, user)
        return
    }

}