import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserRepository } from "src/users/repository/user-repository";
import { UpdateUserCommand } from "./update-user.command";

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    
    constructor(
        private userRepository : UserRepository,
    ) {}
    
    execute(command: UpdateUserCommand): Promise<any> {
        return this.userRepository.update(command.id, command.payload)
    }
}