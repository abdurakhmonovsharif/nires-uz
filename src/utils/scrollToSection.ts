import { history } from "./history";

export const scrollToSection = (componentId: string): void => {
  const sectionId = componentId.replace("/", "#");

  if (componentId === "/") {
    history.push("/");
    window.scrollTo(0, 0);
    return;
  }

  try {
    const sanitizedSectionId = sectionId.replace(/[^a-zA-Z0-9-_#]/g, "\\$&"); // Escape invalid characters
    const element = document.querySelector(sanitizedSectionId);

    if (element) {
      element.scrollIntoView({ block: "start" });
      history.push(componentId);
      return;
    }
  } catch (error) {
    console.error(`Invalid selector: ${sectionId}`, error);
  }

  window.scrollTo(0, 0);
};
