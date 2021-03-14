export default function vk() {
    try {
        VK.Widgets.Group("vk-news", {mode: 4, width: "auto", height: "600"}, 150619577);
        VK.Widgets.CommunityMessages("vk_community_messages", 150619577, {
            expandTimeout: "30000",
            disableNewMessagesSound: "1",
            tooltipButtonText: "Есть вопрос?"
        });
    } catch (e) {
        const elem = document.getElementById("vk-news");
        if (elem) {
            elem.innerHTML = "<a href='https://vk.com/magicofgods' target='_blank'>https://vk.com/magicofgods</a>"
        }
        console.warn("Слава Украине! ВК потiк");
    }
}
