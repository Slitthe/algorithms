export function isValidSudoku(sudoku: string[][]): boolean {
    for (let row = 0; row < sudoku.length; row++) {
        const colSet = new Set();
        for (let col = 0; col < sudoku.length; col++) {
            const currentValue = sudoku[row][col];
            if (currentValue === ".") {
                continue;
            }

            if (colSet.has(currentValue)) {
                return false;
            }

            colSet.add(currentValue);
        }
    }

    for (let row = 0; row < sudoku.length; row++) {
        const rowSet = new Set();
        for (let col = 0; col < sudoku.length; col++) {
            const currentValue = sudoku[col][row];
            if (currentValue === ".") {
                continue;
            }

            if (rowSet.has(currentValue)) {
                return false;
            }

            rowSet.add(currentValue);
        }
    }

    let startRow = 0;
    let startCol = 0;
    while (startRow < sudoku.length && startCol < sudoku.length) {
        const unique = new Set();
        let col: number = 0;
        let row: number = 0;
        for (col = startCol; col < startCol + 3; col++) {
            for (row = startRow; row < startRow + 3; row++) {
                const currentValue = sudoku[row][col];
                if (currentValue === ".") {
                    continue;
                }
                if (unique.has(currentValue)) {
                    return false;
                }
                unique.add(currentValue);
            }
        }

        if (col === sudoku.length) {
            startCol = 0;
            startRow = row;
        } else {
            startCol = col;
            startRow = row - 3;
        }
    }

    return true;
}
