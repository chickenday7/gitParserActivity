const scrollTo = async (page) => {
  await page.evaluate(async () => {
    const delay = 1000;
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const scrollDown = async () => {
      // eslint-disable-next-line no-undef
      document
        .querySelector("#activity > div.content_list > div:last-child")
        .scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    };
    let time;
    do {
      await scrollDown();
      await wait(delay);
      // eslint-disable-next-line no-undef
      time = document.querySelector(
        "#activity > div.content_list > div:last-child > div.event-item-timestamp > time"
      ).textContent;
    } while (time !== "1 month ago");
    await wait(delay);
  });
  return true;
};

export default scrollTo;
