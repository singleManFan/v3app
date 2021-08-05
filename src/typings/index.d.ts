interface Window {
    onLoad: () => void;
    AMap: any;
}

interface ScrollH {
    height: string;
}

interface Cell {
    id: number;
    value: string;
}

interface ITableData {
    th: string[];
    data: Cell[][];
}