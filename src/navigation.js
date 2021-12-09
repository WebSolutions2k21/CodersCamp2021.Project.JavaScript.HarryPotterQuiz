function mapNavigationClickToTemplate(rootElement, btnSelector, switchFuntion) {
    const btn = document.querySelector(btnSelector);

    btn.addEventListener("click", () => {
        switchFuntion(rootElement);
    });
}

export default mapNavigationClickToTemplate;