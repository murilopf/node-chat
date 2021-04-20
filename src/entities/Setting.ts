import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
} from "typeorm"

import { v4 as uuid } from "uuid"

@Entity("settings")
class Setting {

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        //Sempre que cria uma nova classe Setting entra aqui primeiro
        if (!this.id)
            this.id = uuid();
    }
}

export { Setting }