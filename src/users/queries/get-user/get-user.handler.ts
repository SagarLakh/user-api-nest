import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserRepository } from "src/users/repository/user-repository";
import { GetUserQuery } from "./get-user.query";

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {

    constructor(
        private userRepository : UserRepository
    ) {}

    execute(query: GetUserQuery): Promise<any> {
        throw new Error("Method not implemented.");
    }



}