import gitLogin from "./gitLogin.js";
import scrollTo from "./scrollTo.js";

const getDataProjects = async (user) => {
  const page = await gitLogin(user);
  const response = await scrollTo(page);
  if (response) {
    const list = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          "#activity > div.content_list > div > div.event-title.d-flex.flex-wrap > span.event-scope > a"
        ),
        (element) => element.textContent
      )
    );
    page.close();
    return list;
  }
};

export default getDataProjects;
