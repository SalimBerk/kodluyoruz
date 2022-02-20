const posts=[{post:"ilk mesaj gönderildi"}];


const postList=()=>{
    posts.map((post)=>{
        console.log(post.post);
    })
}



const postAdd=(newPost)=>{
    const promise1=new Promise((resolve,reject)=>{
        posts.push(newPost);
        resolve(posts);
        //reject('Bir hata oluştu.')

    })
    return promise1;
}


async function showListBooks(){
    try{
    await postAdd({post:"ikinci mesaj gönderildi ."})
    postList();  
    }
    catch(err){
        console.log(err);

    }
}
showListBooks();