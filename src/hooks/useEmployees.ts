import { useMemo } from "react";
import type { Employee } from "../types/EmployeeType";

export function useEmployees(employees: Employee[]) {
  const stats = useMemo(() => {
    const totalEmployees = employees.length;

    const activeEmployees = employees.filter((e) => e.isActive).length;

    const avgSalary = Math.round(
      employees.reduce((sum, e) => sum + e.salary, 0) / totalEmployees,
    );

    const avgPerformance = (
      employees.reduce((sum, e) => sum + e.performanceRating, 0) /
      totalEmployees
    ).toFixed(1);

    return {
      totalEmployees,
      activeEmployees,
      avgSalary,
      avgPerformance,
    };
  }, [employees]);

  const departmentData = useMemo(() => {
    const map = employees.reduce<Record<string, number>>((acc, employee) => {
      acc[employee.department] = (acc[employee.department] || 0) + 1;

      return acc;
    }, {});

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }, [employees]);

  return {
    employees,
    stats,
    departmentData,
  };
}
