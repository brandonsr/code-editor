"use strict";

const update = () => {
    const $code = document.querySelector('#text');
    const $renderCode = document.querySelector('#render');
     //access to atribute srcdoc
    $renderCode.srcdoc = $code.value;
    console.log(code.value);
};