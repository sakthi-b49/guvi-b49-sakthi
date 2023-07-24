const coundownElement = document.getElementById('countdown');
const displayMessage =(message) => {
    coundownElement.innerHTML = message;
};
const countFromTen = (count, callback) => {
  setTimeout(() => {
    displayMessage(count);
    if(count > 1){
        countFromTen(count - 1, callback);
    }
    else{
        callback();
    }
  }, 1000);
};
const displayIndependenceDayMessage = () => {
 setTimeout(() => {
    displayMessage("Happy Independence Day!!");
 }, 1000);

};
countFromTen(10, displayIndependenceDayMessage);