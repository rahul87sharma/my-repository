// Question : Debounce Function: Implement a debounce function that limits the frequency of a function's execution when called 
//repeatedly within a specified time frame. This is useful in scenarios like resizing or scrolling events.


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
