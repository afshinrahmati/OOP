{// Key Points:
// Abstraction (Shape): This represents the high-level control layer.
// Implementor (DrawAPI): This defines the interface for the implementation classes.
// Concrete Implementor (Pencil, Brush): These are the concrete classes that implement the DrawAPI.
// Refined Abstraction (Circle): This is the specialized class that extends the abstraction and uses the implementor to perform the operations.


// The Implementor interface defines the drawing method
interface DrawAPI {
    drawShape(radius: number, x: number, y: number): void;
}

// Concrete Implementors implement the drawing method
class Pencil implements DrawAPI {
    drawShape(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle [color: pencil, radius: ${radius}, x: ${x}, y: ${y}]`);
    }
}

class Brush implements DrawAPI {
    drawShape(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle [color: brush, radius: ${radius}, x: ${x}, y: ${y}]`);
    }
}

// The Abstraction defines the shape
abstract class Shape {
    protected drawAPI: DrawAPI;

    protected constructor(drawAPI: DrawAPI) {
        this.drawAPI = drawAPI;
    }

    public abstract draw(): void;
}

// The Refined Abstraction defines a specific shape
class Circle extends Shape {
    private radius: number;
    private x: number;
    private y: number;

    constructor(radius: number, x: number, y: number, drawAPI: DrawAPI) {
        super(drawAPI);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    public draw(): void {
        this.drawAPI.drawShape(this.radius, this.x, this.y);
    }
}

// Client code
const pencilCircle = new Circle(10, 100, 100, new Pencil());
const brushCircle = new Circle(10, 200, 200, new Brush());

pencilCircle.draw(); // Drawing Circle [color: pencil, radius: 10, x: 100, y: 100]
brushCircle.draw();  // Drawing Circle [color: brush, radius: 10, x: 200, y: 200]
}

{// Key Components:
// Abstraction (DatabaseService): This represents the high-level control layer. It's an abstract class that defines the interface for the client. The abstraction maintains a reference to the implementor (DatabaseInterface).

// Implementor (DatabaseInterface): This defines the interface for the implementation classes. The DatabaseInterface declares methods like connect, query, and close that must be implemented by concrete classes.

// Concrete Implementors (PostgresqlDB, MongoDB): These are the concrete classes that implement the DatabaseInterface. Each one provides its own specific implementation for database operations.

// Refined Abstraction (mongo): This is a concrete class that extends the abstraction (DatabaseService). It can implement additional operations or use the methods defined in the abstraction.
// The Implementor interface defines the database operations
interface DatabaseInterface {
    connect(): void;
    query(sql: string): any;
    close(): void;
}

// Concrete Implementors implement the database operations
class PostgresqlDB implements DatabaseInterface {
    constructor(private path: string) {}

    connect(): void {
        console.log("Connected to PostgreSQL at " + this.path);
    }

    query(sql: string): any {
        console.log("Executing SQL on PostgreSQL: " + sql);
        return {}; // Simulate returning a result
    }

    close(): void {
        console.log("Closed PostgreSQL connection");
    }
}

class MongoDB implements DatabaseInterface {
    constructor(private path: string) {}

    connect(): void {
        console.log("Connected to MongoDB at " + this.path);
    }

    query(sql: string): any {
        console.log("Executing query on MongoDB: " + sql);
        return {}; // Simulate returning a result
    }

    close(): void {
        console.log("Closed MongoDB connection");
    }
}

// The Abstraction defines a general interface for database services
abstract class DatabaseService {
    protected database: DatabaseInterface;

    constructor(db: DatabaseInterface) {
        this.database = db;
    }

    abstract fetchData(query: string): any;
}

// The Refined Abstraction provides a specific service implementation
class UserService extends DatabaseService {
    constructor(db: DatabaseInterface) {
        super(db);
    }

    fetchData(query: string): any {
        this.database.connect();
        const result = this.database.query(query);
        this.database.close();
        return result;
    }
}

// Client code
const postgresService = new UserService(new PostgresqlDB("localhost:5432/mydb"));
const mongoService = new UserService(new MongoDB("localhost:27017/mydb"));

console.log("Fetching data from PostgreSQL:");
postgresService.fetchData("SELECT * FROM users");

console.log("\nFetching data from MongoDB:");
mongoService.fetchData("db.users.find({})");
}