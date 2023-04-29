export type Weather = {
    main: {
        temp: number,
    },
    name: string,
    weather: [
        {main: string, icon: string}
    ]
};
