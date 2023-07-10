let hamburger = document.getElementById('hamburger');
let nav_small_screen = document.getElementsByClassName('navbar_links_container-small_screen')[0];

hamburger.addEventListener('click',()=>{
    nav_small_screen.classList.toggle('active')
})

let slide_count = 1;
const showNext = (parent_id,elems_class_name) =>{
    let parent = document.getElementById(parent_id);
    if (((parent.getElementsByClassName(elems_class_name)).length) < (slide_count+2)) {
        
    } else {
        let vis_element = parent.getElementsByClassName(elems_class_name)[slide_count];
        let nxt_element = parent.getElementsByClassName(elems_class_name)[slide_count+1];
        vis_element.classList.add('display-none');
        nxt_element.classList.remove('display-none');
        slide_count += 1;
    }
}

const showPrevious = (parent_id,elems_class_name) =>{
    let parent = document.getElementById(parent_id);
    if (0>slide_count-1) {
        
    } else {
        let vis_element = parent.getElementsByClassName(elems_class_name)[slide_count];
        let pre_element = parent.getElementsByClassName(elems_class_name)[slide_count-1];
        vis_element.classList.add('display-none');
        pre_element.classList.remove('display-none');
        slide_count -= 1;
    }
}