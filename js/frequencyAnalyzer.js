const frequencyAnalyzer = (() => {
    const defaultSymbols = [
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п',
        'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'у', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
    ];

    const initializeObj = (config) => {
        const resultObj = {};
        let symbols = [...defaultSymbols];

        if (!config) {
            symbols.forEach(char => {
                resultObj[char] = 0;
            });

            return resultObj;
        }

        if (config.symbols && config.symbols.length > 0) {
            symbols = [...config.symbols];
        }

        if (config.useUpperCase) {
            symbols = [
                ...symbols,
                symbols.map(char => char.toUpperCase())
            ]
        }

        symbols.forEach(char => {
            resultObj[char] = 0;
        });

        return resultObj;
    };

    const analyzer = (text, config = {}) => {
        const statistic = initializeObj(config);
        let str = text;
        let counter = 0;

        if (!config.useUpperCase) {
            str = text.toLowerCase();
        }

        for (let i = 0; i < str.length; i +=1) {
            const char = str[i];
            
            if (statistic.hasOwnProperty(char)) {
                statistic[char] += 1;
                counter += 1;
            }
        }

        return Object.keys(statistic).map(char => ({ char, count: statistic[key] / counter }));
    };

    return analyzer;
})();
