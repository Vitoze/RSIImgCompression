/* global Dicoogle */

export default class MyPlugin {
    
    constructor() {
        // TODO initialize plugin here
    }
    
    /** 
     * @param {DOMElement} parent
     * @param {DOMElement} slot
     */
    render(parent, slot) {
        // TODO mount a new web component here
        const div = document.createElement('div');
        div.innerHTML = 'Image Compression Converter';

        const div2 = document.createElement('div');
        const h1 = document.createElement('h1');
        const btn = document.createElement('button');
        btn.innerHTML = "Upload Image";
        div2.appendChild(h1);
        div2.appendChild(btn);

        const div1 = document.createElement('div');
        const h = document.createElement('h1');
        const sel = document.createElement('select');
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');
        const option4 = document.createElement('option');
        const option5 = document.createElement('option');
        const option6 = document.createElement('option');
        option1.innerHTML = "RAW";
        option2.innerHTML = "JPEG Lossy";
        option3.innerHTML = "JPEG Lossless";
        option4.innerHTML = "JPEG 2000";
        option5.innerHTML = "MPEG2";
        option6.innerHTML = "MPEG4";
        sel.appendChild(option1);
        sel.appendChild(option2);
        sel.appendChild(option3);
        sel.appendChild(option4);
        sel.appendChild(option5);
        sel.appendChild(option6);
        const btn1 = document.createElement('button');
        btn1.innerHTML = "Compression";
        div1.appendChild(h1);
        div1.appendChild(sel);
        div1.appendChild(btn1);

        const div4 = document.createElement('div');
        const hp = document.createElement('h1');
        div4.appendChild(hp);
        
        const div3 = document.createElement('div');
        const btn2 = document.createElement('button');
        btn2.innerHTML = "Download Image Converted";
        div3.appendChild(btn2);

        parent.appendChild(div);
        parent.appendChild(div2);
        parent.appendChild(div1);
        parent.appendChild(div4);
        parent.appendChild(div3);
    }
    
}
