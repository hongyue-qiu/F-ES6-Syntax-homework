const parseData = (input) => {
    const { data, column } = input;
    const keys = column.map((cn) => cn.name);
    return data.map((values) => {
        const obj = {};
        keys.forEach((key, i) => {
            obj[key] = values[i];
        });

        return obj;
    });
};

export { parseData };