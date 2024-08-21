enum Role {
  Developer = "Developer",
  Admin = "Admin",
  Designer = "Designer",
}
interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): Role;
}

class Developer implements Employee {
  constructor(
    private name: string,
    private salary: number,
  ) {}
  getRole(): Role {
    return Role.Developer;
  }
  getSalary(): number {
    return this.salary;
  }
  getName(): string {
    return this.name;
  }
}

class Designer implements Employee {
  constructor(
    private name: string,
    private salary: number,
  ) {}
  getRole(): Role {
    return Role.Designer;
  }
  getSalary(): number {
    return this.salary;
  }
  getName(): string {
    return this.name;
  }
}

interface Composite extends Employee {
  addEmployee(data: Employee): void;
  removeEmployee(data: Employee): void;
  getEmployees(): Employee[];
}

class Admin implements Composite {
  private listEmployees: Employee[] = [];
  constructor(
    private name: string,
    private salary: number,
  ) {}
  getRole(): Role {
    return Role.Admin;
  }
  getSalary(): number {
    return this.salary;
  }
  getName(): string {
    return this.name;
  }
  addEmployee(data: Employee): void {
    this.listEmployees.push(data);
  }
  removeEmployee(data: Employee): void {
    const index = this.listEmployees.indexOf(data);
    this.listEmployees.splice(index, 1);
  }
  getEmployees(): Employee[] {
    return this.listEmployees;
  }
}
const dev1 = new Developer("Afshin", 1600);
const dev2 = new Developer("AmirAdvari", 8500);
const design1 = new Designer("Farid", 4100);
const design2 = new Designer("morteza", 4700);

const manager = new Admin("messam", 85900000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(design1);
manager.addEmployee(design2);
// console.log(manager.getEmployees());
//[
//   Developer { name: 'Afshin', salary: 1600 },
//   Developer { name: 'AmirAdvari', salary: 8500 },
//   Designer { name: 'Farid', salary: 4100 },
//   Designer { name: 'morteza', salary: 4700 }
// ]
manager.removeEmployee(design1);

console.log(manager.getEmployees());
// [
//   Developer { name: 'Afshin', salary: 1600 },
//   Developer { name: 'AmirAdvari', salary: 8500 },
//   Designer { name: 'morteza', salary: 4700 }
// ]
