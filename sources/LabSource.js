var mockData = [
    {
        'name': 'Beyster 1620',
        'status': 'Open',
        'used': 21,
        'total': 44
    },
    {
        'name': 'Beyster 1695',
        'status': 'Reserved',
        'used': 40,
        'total': 48
    }
];

var LabSource = {
    fetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(mockData);
            }, 1500);
        });
    }
};

module.exports = LabSource;
