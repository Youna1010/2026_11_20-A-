let menu = ['Home', 'Works', 'About'];
let boxes = [];

for (const i of menu) {
    const bt   = document.createElement('div');
    const h1 = document.createElement('h1');
    bt.textContent = i;
    h1.textContent = i;
    const box = document.createElement('div');
    box.append(h1);
    bt.style.cssText = `
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
        top: 20px;
        left: ${20 + menu.indexOf(i) * 120}px;
        z-index: 10;
        `;
    box.style.cssText = `
        width: 100vw;
        height: 100vh;
        background-color: #979797;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        `;
    h1.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5rem;
        display: none;
        `;  
    boxes.push(box);
    bt.addEventListener('click', async () => {
            boxes.forEach(b => {
                b.style.display = 'none';
            });
        box.style.display = 'block';
        
        await box.animate([
            {opacity: 0.3},
            {opacity: 1}
        ], {
            duration: 500,
            fill: 'forwards'
        }).finished;

        h1.style.display = 'block';

        await h1.animate([
            {transform: 'translate(-50%, -50%) scale(0.7)'},
            {transform: 'translate(-50%, -70%) scale(1)'}
        ], {
            duration: 300,
            fill: 'forwards'
        }).finished;
        
    }); 
    document.body.append(bt);
    document.body.append(box);
    };


