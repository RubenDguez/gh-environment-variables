const fs = require('fs');

const pass = {
    neersit: 'sit',
    neerqa: 'qa',
    neeruat: 'uat'
}

fs.writeFileSync('pass.txt', JSON.stringify(pass, null, 2), { encoding: 'utf-8' });
