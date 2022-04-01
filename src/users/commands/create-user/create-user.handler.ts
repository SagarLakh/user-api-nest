import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserMapper } from "src/users/mappers/user.mapper";
import { UserRepository } from "src/users/repository/user.repository";
import { CreateUserCommand } from "./create-user.command";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

    constructor(
        private userRepository : UserRepository,
        private mapper: UserMapper
    ) {}

    async execute(command: CreateUserCommand): Promise<any> {
        return this.userRepository.create(this.mapper.toEntity(command.payload))
    }

}