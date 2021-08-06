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

type ITableData = { value: string; id: number }[][]