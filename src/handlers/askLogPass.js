import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "process";

export const getLogPass = async () => {
  const rl = readline.createInterface({ input, output });
  const login = await rl.question("Введите ваш логин:  ");

  const password = await rl.question("Введите ваш пароль:  ");

  rl.close();
  return { login, password };
};
