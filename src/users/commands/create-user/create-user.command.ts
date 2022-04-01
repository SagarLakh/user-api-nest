import { ICommand } from "@nestjs/cqrs";
import { UserDto } from "src/users/dto/user.dto";

export class CreateUserCommand implements ICommand {

    constructor(public payload : UserDto) {}

}