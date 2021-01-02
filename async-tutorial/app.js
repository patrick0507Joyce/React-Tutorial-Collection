console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback({email: email});
    },500)
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 500);
}

const user = loginUser("sxh@aalto.fi", 123456, (userName) => {
    if (userName) {
        console.log("UserName:", userName);
        getUserVideos(userName.email, (videos) => {
            console.log("Videos: ", videos);
        })
    }
})
console.log("End");