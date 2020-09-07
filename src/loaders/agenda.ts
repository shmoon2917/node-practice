import Agenda from "agenda";
import config from "../config";

export default ({ mongoConnection }) => {
  console.log(config.agenda.dbCollection);
  return new Agenda({
    mongo: mongoConnection,
    db: { collection: config.agenda.dbCollection },
    processEvery: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  });
};
