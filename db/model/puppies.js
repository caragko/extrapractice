const Sequelize = require('sequelize');
const db = new Sequelize("postgres://localhost:5432/extrawork", {
  logging: false
});

const Puppy = db.define('puppy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            posNum: function (num) {
                if (num < 0) {
                    throw new Error ('age cannot be negative')
                }
            }
        }
    },
    bio: {
        type: Sequelize.STRING
    }

})

module.exports = {db, Puppy}