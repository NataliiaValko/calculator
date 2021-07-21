export default [
    {
        type: 'short-term',
        minTerm: 2,
        percent: {
            btc: 30,
            uah: 15,
            rub: 15,
            eur: 10,
            usd: 10,
        },
    },
    {
        type: 'standart',
        minTerm: 4,
        percent: {
            btc: 50,
            uah: 35,
            rub: 40,
            eur: 20,
            usd: 25,
        },
    },
    {
        type: 'long-term',
        minTerm: 6,
        percent: {
            btc: 60,
            uah: 40,
            rub: 35,
            eur: 25,
            usd: 30,
        },
    },
]