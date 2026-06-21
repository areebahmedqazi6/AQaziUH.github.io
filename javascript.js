// I got this code from AI for the time becasue i douln't figure out how to code it myself a little confused
// the rest is written by me by using W3Schools*\
function updatedate() {
    const date = new Date();
    const dateoptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', dateoptions); 
    document.getElementById('top-right-date').textContent = dateString;
}
updatedate();
setInterval(updatedate, 60000);