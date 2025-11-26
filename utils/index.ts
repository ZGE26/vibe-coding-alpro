import { ValidationResult } from "@/types";

/**
 * Validates Java variable name according to Java naming conventions
 */
export function validateVariableName(name: string, isFinal: boolean = false): ValidationResult {
  if (!name) {
    return { valid: false, message: "Nama tidak boleh kosong" };
  }

  if (/^\d/.test(name)) {
    return { valid: false, message: "Tidak boleh dimulai dengan angka" };
  }

  if (/\s/.test(name)) {
    return { valid: false, message: "Tidak boleh mengandung spasi" };
  }

  if (/[^a-zA-Z0-9_$]/.test(name)) {
    return { valid: false, message: "Hanya huruf, angka, _ dan $" };
  }

  const javaKeywords = [
    "int", "double", "boolean", "String", "class", "public", 
    "private", "void", "if", "else", "for", "while"
  ];

  if (javaKeywords.includes(name)) {
    return { valid: false, message: "Tidak boleh menggunakan kata kunci Java" };
  }

  if (name[0] === name[0].toUpperCase() && !isFinal) {
    return { 
      valid: true, 
      message: "⚠️ Sebaiknya gunakan huruf kecil di awal (camelCase)" 
    };
  }

  return { valid: true, message: "✅ Nama variabel valid!" };
}

/**
 * Delays execution for a specified time
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates Java variable declaration code
 */
export function generateVariableDeclaration(
  varType: string,
  varName: string,
  varValue: string,
  isFinal: boolean = false
): string {
  if (!varName || !varValue) {
    return "// Isi nama dan nilai variabel";
  }

  const finalKeyword = isFinal ? "final " : "";
  const conventionName = isFinal ? varName.toUpperCase() : varName;

  const formattedValue =
    varType === "String"
      ? `"${varValue}"`
      : varType === "char"
      ? `'${varValue}'`
      : varValue;

  return `${finalKeyword}${varType} ${conventionName} = ${formattedValue};
System.out.println(${conventionName});`;
}

/**
 * Format number with thousands separator
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
