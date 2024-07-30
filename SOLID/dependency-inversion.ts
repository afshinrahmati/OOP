interface IDatabase {
  save(data: string): void;
}

class MySQLDatabase implements IDatabase {
  save(data: string): void {
    // logic to save data to a MySQL database
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    // logic to save data to a MongoDB database
  }
}

class HighLevelModule {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  execute(data: string): void {
    // high-level logic
    this.database.save(data);
  }
}
