const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/ngoctuan_education_dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            },
        );
        console.log('connetion successfully !!!');
    } catch (error) {
        console.log('connetion failure !!!');
    }
}

module.exports = { connect };
