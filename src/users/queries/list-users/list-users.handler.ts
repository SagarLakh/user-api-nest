import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserRepository } from "src/users/repository/user-repository";
import { ListUsersQuery } from "./list-users.query";

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersQuery> {
    
    constructor(
        private userRepository : UserRepository,
    ) {}
    
    execute(query: ListUsersQuery): Promise<any> {
        return this.userRepository.findAll()
    }
}