import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserDto } from "src/users/dto/user.dto";
import { UserMapper } from "src/users/mappers/user.mapper";
import { UserRepository } from "src/users/repository/user.repository";
import { GetUserQuery } from "./get-user.query";

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {

    constructor(
        private userRepository : UserRepository,
        private mapper: UserMapper
    ) {}

    async execute(query: GetUserQuery): Promise<UserDto> {
        return this.mapper.toDto(await this.userRepository.findById(query.id))
    }

}