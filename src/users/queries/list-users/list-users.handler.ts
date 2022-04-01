import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserDto } from "src/users/dto/user.dto";
import { UserMapper } from "src/users/mappers/user.mapper";
import { UserRepository } from "src/users/repository/user.repository";
import { ListUsersQuery } from "./list-users.query";

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersQuery> {
    
    constructor(
        private userRepository : UserRepository,
        private mapper: UserMapper
    ) {}
    
    async execute(query: ListUsersQuery): Promise<UserDto[]> {
        return (await this.userRepository.findAll()).map(user => this.mapper.toDto(user))
    }
}