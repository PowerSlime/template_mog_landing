export default function vk() {
    VK.Widgets.Group("vk-news", {mode: 4, width: "auto", height: "600"}, 150619577);
    VK.Widgets.CommunityMessages("vk_community_messages", 150619577, {
        expandTimeout: "30000",
        disableNewMessagesSound: "1",
        tooltipButtonText: "Есть вопрос?"
    });
}
