//generate random num lower/upper bound (inclusive)
function boundedRandom(lowBound, upBound) {
    const low = Math.floor(lowBound);
    const high = Math.ceil(upBound);
    const offset = Math.round((high - low) * Math.random());
    return low + offset;
}


const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const months = [
    {
        name: "Jan",
        number: 1,
        numDays: 31
    },
    {
        name: "Feb",
        number: 2,
        numDays: 28
    },
    {
        name: "Mar",
        number: 3,
        numDays: 31
    },
    {
        name: "Apr",
        number: 4,
        numDays: 30
    },
    {
        name: "May",
        number: 5,
        numDays: 31
    },
    {
        name: "Jun",
        number: 6,
        numDays: 30
    },
    {
        name: "Jul",
        number: 7,
        numDays: 31
    },
    {
        name: "Aug",
        number: 8,
        numDays: 31
    },
    {
        name: "Sept",
        number: 9,
        numDays: 30
    },
    {
        name: "Oct",
        number: 10,
        numDays: 31
    },
    {
        name: "Nov",
        number: 11,
        numDays: 30
    },
    {
        name: "Dec",
        number: 12,
        numDays: 31
    }
];

function zeroPadded(number, minimumDigits) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    const opts = { minimumIntegerDigits: minimumDigits };
    return number.toLocaleString(undefined, opts);
}

function getRandomDate(minYear, maxYear) {
    const month = months[boundedRandom(0, 11)];
    const monthStr = zeroPadded(month.number, 2)
    const dayStr = zeroPadded(boundedRandom(1, month.numDays), 2);
    return `${boundedRandom(minYear, maxYear)}-${monthStr}-${dayStr}`;
}

export { getRandomDate };