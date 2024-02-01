
function GROCERIES() {
    const name =
        document.forms.action_page.yname.value;
    const email =
        document.forms.action_page.emailaddress.value;
    const interest =
        document.forms.action_page.interest.value;
    

if (name === ""
        || name.includes('0') || name.includes('1')
        || name.includes('2') || name.includes('3')
        || name.includes('4') || name.includes('5')
        || name.includes('6') || name.includes('7')
        || name.includes('8') || name.includes('9')) 
    {
        window.alert
        ("Please enter your name properly.");
        name.focus();
        return false;
    }
    if (email === "" || !email.includes('@')) {
        window.alert
        ("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (interest.selectedIndex === -1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }
 
    return true;
}