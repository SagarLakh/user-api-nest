import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("users")
export class UserEntity {

    @PrimaryColumn()
    username : string

    @Column()
    name : string

    @Column()
    surname : string

    @Column({
        unique : true
    })
    email : string

    @Column()
    password : string

    constructor(username: string, name: string, surname: string, email: string, password: string) {
        this.username = username
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
    }
}
