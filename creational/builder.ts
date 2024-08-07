interface QueryBuilder {
  table(table: string): QueryBuilder;
  delete(table?: string): QueryBuilder;
  limit(limit: number): QueryBuilder;
  where(condition: string): QueryBuilder;
  getQuery(): string;
}

class SqlBuilder implements QueryBuilder {
  private tableName: string = "";
  private limitValue?: number;
  private whereCondition?: string;
  private queryType: "SELECT" | "DELETE" = "SELECT";

  constructor(table?: string) {
    if (table) {
      this.tableName = table;
    }
  }

  public table(table: string): QueryBuilder {
    this.tableName = table;
    return this;
  }

  public delete(table?: string): QueryBuilder {
    if (table) {
      this.tableName = table;
    }
    this.queryType = "DELETE";
    return this;
  }

  public limit(limit: number): QueryBuilder {
    this.limitValue = limit;
    return this;
  }

  public where(condition: string): QueryBuilder {
    this.whereCondition = condition;
    return this;
  }

  public getQuery(): string {
    if (!this.tableName) {
      throw new Error("Table name is not specified.");
    }

    let query = "";

    if (this.queryType === "DELETE") {
      query = `DELETE FROM ${this.tableName}`;
    } else {
      query = `SELECT * FROM ${this.tableName}`;
    }

    if (this.whereCondition) {
      query += ` WHERE ${this.whereCondition}`;
    }

    if (this.limitValue !== undefined) {
      query += ` LIMIT ${this.limitValue}`;
    }

    return query;
  }
}

// Example usage
const queryBuilder = new SqlBuilder()
  .table("users")
  .where("age > 20")
  .limit(10)
  .getQuery();
function client(builder: QueryBuilder) {
  const query = builder.table("posts").where("id = 429").limit(10).getQuery();

  console.log(query);
}
console.log(queryBuilder); // Output: DELETE FROM users WHERE age > 20 LIMIT 10
