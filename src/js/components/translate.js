const _translate = (container, i18n) => {
    const attrName = 'data-i18n';
    const nodes = container.querySelectorAll(`[${attrName}]`);

    Array.from(nodes).forEach((node) => {
        const key = node.getAttribute(attrName);
        node.innerHTML = i18n.t(key);
    });
};

export default async function translate(instance) {
    try {
        _translate(document, instance);
    } catch (e) {
        console.error('Error on loading i18n instance');
    }
}
