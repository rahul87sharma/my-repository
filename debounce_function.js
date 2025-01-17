function debounce(func, delay) {
    let timer;
    return function (...args) {
        const context = this; 
        clearTimeout(timer); 
        timer = setTimeout(() => {
            func.apply(context, args); 
        }, delay);
    };
}

function onResize() {
    console.log('Resize event triggered!');
}
const debouncedResize = debounce(onResize, 300);
window.addEventListener('resize', debouncedResize);
