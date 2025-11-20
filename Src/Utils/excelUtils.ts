import * as XLSX from "xlsx";

export class ExcelUtils {

    static readExcel(filePath: string, sheetName: string) {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
        return jsonData;
    }

}
