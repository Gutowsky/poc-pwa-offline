export const isConnectonOnline = () => {
    const condition = navigator.onLine;
    console.log(`We are ${condition ? `online` : `offline`}`);
    return condition;
}