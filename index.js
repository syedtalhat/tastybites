let hamburger = document.getElementById('hamburger');
let nav_small_screen = document.getElementsByClassName('navbar_links_container-small_screen')[0]
let cuisine_left_btn = document.getElementById('cuisine_left_btn');
let cuisine_right_btn = document.getElementById('cuisine_right_btn');

hamburger.addEventListener('click',()=>{
    nav_small_screen.classList.toggle('active')
})

const slideNext = (elem) => {
    let parent_elem = document.getElementById(elem);
    let first_elem = parent_elem.getElementsByClassName('visible')[0];
    let last_vis_elem = parent_elem.getElementsByClassName('last_visible_child')[0];
    let nxt_sibling = first_elem.nextElementSibling;
    if (last_vis_elem.classList.contains('end_child')) {
        console.log('You have reached the end');
    } else {
        last_vis_elem.nextElementSibling.classList.add("last_visible_child");
        last_vis_elem.classList.remove("last_visible_child");
        first_elem.classList.add('display-none');
        first_elem.classList.remove('visible');
        nxt_sibling.classList.add('visible');
    }
}

const slidePrevious = (elem) => {
    let parent_elem = document.getElementById(elem);
    let first_elem = parent_elem.getElementsByClassName('visible')[0];
    let last_vis_elem = parent_elem.getElementsByClassName('last_visible_child')[0];
    let pre_sibling = first_elem.previousElementSibling;
    if (first_elem.classList.contains('first_child')) {
        console.log('You have reached the Start');
    } else {
        last_vis_elem.classList.add('display-none');
        pre_sibling.classList.remove('display-none');
        pre_sibling.classList.add('visible');
        last_vis_elem.previousElementSibling.classList.add('last_visible_child');
    }
}

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