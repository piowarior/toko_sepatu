import { stitch } from "@google/stitch-sdk";

const project = stitch.project("9680238916042943458");
const screen = await project.getScreen("b3e6479b0f9c456c81f366638b46c2cd");

async function main() {
    const htmlUrl = await screen.getHtml();
    const imageUrl = await screen.getImage();
    console.log("HTML_URL=" + htmlUrl);
    console.log("IMAGE_URL=" + imageUrl);
}
main().catch(console.error);
