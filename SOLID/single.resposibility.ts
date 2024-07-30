// This principle emphasizes that a class should only have one responsibility or reason to change.

// !!!!! WRONG <Violation of SRP> !!!!
class Report {
  generateReport() {
    // Logic to generate report
  }
  printReport() {
    // Logic to print report
  }
}

// Correct
// ##### Following SRP
class ReportGenerator {
  generateReport() {
    // Logic to generate report
  }
}
class ReportPrinter {
  printReport() {
    // Logic to print report
  }
}
