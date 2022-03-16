import { ICommand } from "@nestjs/cqrs";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateUserCommand implements ICommand {

    constructor(public payload : CreateUserDto) {}

}