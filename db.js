import { Sequelize } from "sequelize";

const sequelize = new Sequelize("jlabs-assessment", "postgres", "aA84889752", {
  host: "localhost",
  dialect: "postgres",
});

export { sequelize };
