import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserRepository } from "src/users/repository/user-repository";
import { CreateUserCommand } from "./create-user.command";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

    constructor(
        private userRepository : UserRepository
    ) {}

    async execute(command: CreateUserCommand): Promise<any> {
        throw new Error("Method not implemented.");
    }

}