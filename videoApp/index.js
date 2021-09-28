
fetch('https://picsum.photos/200/200')
    .then(res => res.blob())
    .then(blob => {
        let img = document.createElement('img');
        console.log(img)
        img.src = URL.createObjectURL(blob);
        document.querySelector('.image').appendChild(img)
    })




const postSection =document.querySelector('#posts');
const postTemplate =document.querySelector('#post-template');


console.log('starting...');

async function getData() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postStream.json();
    let i =0;

    posts.forEach(post => {
        i++;
        
        if (i<20){
            const title=post.title;
            const body=post.body;

            const newPost = document.importNode(postTemplate.content, true );
            const postTitle = newPost.querySelector('.post_title')
            const postBody = newPost.querySelector('.post_body');

            postTitle.innerText='Post#'+i+'\n'+title;
            postBody.innerText=body;
            postSection.appendChild(newPost)
        }
    })
console.log('done...')
}


getData()