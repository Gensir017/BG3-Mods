function buildNavbar(highlighted){
    let navbarDiv = document.createElement("div")
    navbarDiv.className = "navbar"

    let navbarIcon = document.createElement("img")
    navbarIcon.src = "icons/Class_Barbarian_Badge_Icon.png"
    navbarIcon.className = "navbarIcon"
    navbarDiv.appendChild(navbarIcon)

    addNavbarButton(navbarDiv, "Home", "index.html", highlighted)

    addNavbarTitle(navbarDiv, "Main Class")
    addNavbarButton(navbarDiv, "Barbarian", "barbarian.html", highlighted)

    addNavbarTitle(navbarDiv, "Sub Classes")
    addNavbarButton(navbarDiv, "Wildheart", "wildheart.html", highlighted)
    addNavbarButton(navbarDiv, "Berserker", "berserker.html", highlighted)
    addNavbarButton(navbarDiv, "Wild Magic", "wildmagic.html", highlighted)

    addNavbarTitle(navbarDiv, "Misc")
    addNavbarButton(navbarDiv, "Onslaughts", "onslaughts.html", highlighted)

    addNavbarTitle(navbarDiv, "")
    addNavbarButton(navbarDiv, "Donate", "donate.html", highlighted)
    
    document.body.appendChild(navbarDiv)
}

function addNavbarButton(navbarDiv, text, href, highlighted){
    let navbarButton = document.createElement("button")
    navbarButton.textContent = text
    if(text == highlighted){
        navbarButton.className = "navbarButtonHighlighted"
    }else{
        navbarButton.className = "navbarButton"
    }
    navbarButton.addEventListener('click', function(){
        window.location.href = href
    })
    navbarDiv.appendChild(navbarButton)
}

function addNavbarTitle(navbarDiv, text){
    let navbarTitle = document.createElement("label")
    navbarTitle.textContent = text
    navbarTitle.className = "navbarTitle"

    let navbarSpacer = document.createElement("div")
    navbarSpacer.className = "navbarSpacer"
    navbarDiv.appendChild(navbarTitle)

    if(text != ""){
        navbarDiv.appendChild(navbarSpacer)
    }
}