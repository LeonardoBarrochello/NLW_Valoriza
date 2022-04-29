import {DataSource} from "typeorm";


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/database.sqlite", 
})


AppDataSource.initialize()