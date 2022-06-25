export const handleLogin = (email, password) => {
    const currEmail = localStorage.getItem('email');
    const currPassword = localStorage.getItem('password');

    if (email === currEmail && password === currPassword) {
        window.location.href = '/';
    } else {
        alert('Incorrect login info please try again');
    }
    //TODO call the api to check if auth is correct and set the access token in local storage
};

export const handleSignUp = (info, image) => {
    localStorage.setItem('firstname', info.firstName);
    localStorage.setItem('lastname', info.lastname);
    localStorage.setItem('age', info.age);
    localStorage.setItem('height', info.height);
    localStorage.setItem('gender', info.gender);
    localStorage.setItem('email', info.email);
    localStorage.setItem('password', info.password);
    localStorage.setItem('skillLevel', info.skillLevel);
    localStorage.setItem('image', image);

    window.location.href = '/login';
};
