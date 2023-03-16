async function klik(){
    const login = document.getElementById("login").value
    const haslo = document.getElementById("haslo").value

    const data = await fetch(`http://localhost:3000/login`)
    const json = await data.json()

    if(json[0].login == login && json[0].adminpass == haslo){
        console.log("Zalogowano")
        localStorage.setItem('login', 'admin')
        window.location.href = "admin.html"
        guzik()
    }
    else if(json[1].login == login && json[1].adminpass == haslo){
        console.log("Zalogowano")
        localStorage.setItem('login', 'user')
        window.location.href = "user.html"
        guzik()
    }
    else{
        console.log("Błędny login lub haslo")
        alert("Błędny login lub haslo")
        localStorage.setItem('login', 'false')
    }
}
function checkAmin(){

    const admin = localStorage.getItem("login")
    if(admin !=="admin"  ){
        window.location.href = "login.html"
    }
    guzik()
}
function checkuser(){

    const admin = localStorage.getItem("login")
    if(admin !=="user"  ){
        window.location.href = "login.html"
    }
    guzik()
}
function guzik(){
    const admin = localStorage.getItem("login")
    if(admin == "admin"){
        const wyloguj = document.createElement("button")
        wyloguj.innerHTML = "Wyloguj"
        wyloguj.setAttribute("onclick", "wylog()")
    document.getElementById("wyloguj").appendChild(wyloguj)
    }
}
function wylog(){
    localStorage.setItem('login', 'false')
    window.location.href = "login.html"
}
