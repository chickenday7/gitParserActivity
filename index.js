import { getLogPass } from "./src/handlers/askLogPass.js";
import getDataProjects from "./src/puppeter/getDataProjects.js";

const initApp = async () => {
  const user = await getLogPass();
  const projectsList = await getDataProjects(user);
  let info = Object.assign(
    {},
    ...Array.from(new Set(projectsList), (value) => ({ [value]: 0 }))
  );

  projectsList.forEach((element) => {
    if (info[element]) {
      info[element] = info[element] + 1;
    } else {
      info[element] = 1;
    }
  });
  const summ = projectsList.length;
  for (const key in info) {
    info[key] = Math.round((info[key] / summ) * 100);
  }
  console.log(info);
};

initApp();

export default initApp;
