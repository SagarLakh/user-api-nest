import { ICommand } from "@nestjs/cqrs";
import { UserDto } from "src/users/dto/user.dto";

export class UpdateUserCommand implements ICommand {

    constructor(public id : string, public payload : UserDto) {}

}