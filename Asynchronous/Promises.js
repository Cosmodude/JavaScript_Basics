const btn = document.querySelector('button');
console.log(btn);

const moveX = (element, amount, delay, callback) => {
    const currLeft = element.getBoundingClientRect().left;
    setTimeout(() => {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        if (callback) callback();
    }, delay);
    
};

moveX(btn, 400, 1000, () => {
    moveX(btn, -200, 1000)  // this is callback
});
