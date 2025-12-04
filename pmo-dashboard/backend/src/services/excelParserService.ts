import * as XLSX from 'xlsx';

class ExcelParserService {
  public parse(filePath: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  }
}

export default new ExcelParserService();
