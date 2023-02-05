export const GetResponsive = (params)=>window.addEventListener("resize", function(){
    const size = document.body.getBoundingClientRect().width;
    params(size);
});

export const isDesktop = (params)=>window.addEventListener("resize", function(){
    const size = document.body.getBoundingClientRect().width;
    params(size > 1200);
});

export const isLaptop = (params)=>window.addEventListener("resize", function(){
    const size = document.body.getBoundingClientRect().width;
    params(size > 1024 && size <= 1200);
});

export const isTablet = (params)=>window.addEventListener("resize", function(){
    const size = document.body.getBoundingClientRect().width;
    params(size > 480 && size <= 1024);
});

export const isPhone = (params)=>window.addEventListener("resize", function(){
    const size = document.body.getBoundingClientRect().width;
    params(size <= 480);
});
