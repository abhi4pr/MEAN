const token = localStorage.getItem("userToken");
var val:any;

if (token) {
    const checkToken = JSON.parse(atob(token.split('.')[1]));
    val = checkToken.userId;
}

export {val}