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
        console.log('connection successfully !!!');
    } catch (error) {
        console.log('connection failure !!!');
    }
}

module.exports = { connect };
