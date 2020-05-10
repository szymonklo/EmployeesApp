export interface Employee {
    id: number;
    name: string;
    hireDate: Date;
    performanceManagerId?: number;
    performanceManagerName?: string;
}
