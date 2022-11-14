import puppeteer from "puppeteer";
import initApp from "./../../index.js";

const SELECTOR_TYPE = {
  SUBMIT: "#new_ldap_user > div.submit-container.move-submit-down > input",
  LOGIN: "#username",
  PASSWORD: "#password",
};
const PAGE_ERROR = "https://git.redrowant.ru/users/sign_in";

const gitLogin = async ({ login, password }) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 720 });
  await page.goto("https://git.redrowant.ru/users/sign_in", {
    waitUntil: "networkidle0",
  });
  await page.type(SELECTOR_TYPE.LOGIN, login);
  await page.type("#password", password);
  await page.click(SELECTOR_TYPE.SUBMIT);
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  if (page.url() === PAGE_ERROR) {
    initApp();
  } else {
    await page.goto(`https://git.redrowant.ru/users/${login}/activity`, {
      waitUntil: "networkidle0",
    });
  }

  return page;
};

export default gitLogin;
