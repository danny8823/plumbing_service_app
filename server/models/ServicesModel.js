import { Sequelize } from "sequelize";
import db from "../db.js";

const Services = db.define('services',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true,
        isIn: [['water', 'sewer', 'gas', 'misc']]
    }
});

export default Services