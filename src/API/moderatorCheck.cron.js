const { default: axios } = require("axios");

let isCronLocked = false;

async function moderatorTask(){
    if(isCronLocked===true){
        return;
    }
    isCronLocked = true;
    // setTimeout(()=>{
    //     console.log("Cron working with isCronLocked ->" + isCronLocked);
    // }, 5000)
    // await timeout(5000);
    console.log("Cron working with isCronLocked ->" + isCronLocked);
    const r = await moderatorCheck();
    isCronLocked = false;
};

async function moderatorCheck(){
    //1. get the posts from moderation table
    const post = JSON.parse(localStorage.getItem("moderation"));
    // console.log("herere");
    if(post === null) {
        console.log("Moderator Table Empty");
        return;
    }
    console.log(post); 

    //2. check for moderation for each post
    

    // Passed moderation
    axios({
        method: 'put',
        url: 'http://localhost:8000/text/',
        data: {
            postText: post[0].postContent
        }
    })
    .then((textCheck)=>{
        console.log(textCheck);
        if(textCheck.data.resp === "false"){
            const passed = JSON.parse(localStorage.getItem("posts"));
            if(passed === null){
                localStorage.setItem('posts', JSON.stringify(post));
            } else {
                localStorage.setItem('posts', JSON.stringify([...passed, ...post]));
            }
        } else {
            const failed = JSON.parse(localStorage.getItem("review"));
            if(failed === null){
                localStorage.setItem('review', JSON.stringify(post));
            } else {
                localStorage.setItem('review', JSON.stringify([...failed, ...post]));
            }
        }
        localStorage.removeItem('moderation');
    })
    .catch((error)=>{
        console.log(error);
    })
    return;
}

// moderatorTask.start();

module.exports = moderatorTask;