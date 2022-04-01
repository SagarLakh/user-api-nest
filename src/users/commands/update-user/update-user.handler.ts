import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserMapper } from "src/users/mappers/user.mapper";
import { UserRepository } from "src/users/repository/user.repository";
import { UpdateUserCommand } from "./update-user.command";

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    
    constructor(
        private userRepository : UserRepository,
        private mapper: UserMapper
    ) {}
    
    async execute(command: UpdateUserCommand): Promise<any> {
        return this.userRepository.update(command.id, this.mapper.toEntity(command.payload))
    }
}