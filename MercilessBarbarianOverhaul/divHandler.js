function addTitle(text, id = null){
    let sectionDiv = document.createElement("div")
    sectionDiv.className = "sectionDiv"

    let title = document.createElement("h1")
    title.textContent = text
    if(id != null){
        title.id = id
    }
    document.getElementById("pageContainer").appendChild(title)

    sectionDiv.appendChild(title)
    document.getElementById("pageContainer").appendChild(sectionDiv)

    return sectionDiv
}

function addWarning(warning, parentDiv){
    let warningDiv = document.createElement("div")
    warningDiv.className = "flexDiv"
    warningDiv.style.marginTop = "15px"

    // Left Div
    let leftWarningDiv = document.createElement("div")
    leftWarningDiv.className = "leftDiv"
    leftWarningDiv.style.width = "5%"
    warningDiv.appendChild(leftWarningDiv)

    let warningIcon = document.createElement("img")
    warningIcon.className = "skillIcon"
    warningIcon.src = "warning.png"
    warningIcon.style.width = "70%"
    warningIcon.style.paddingBottom = "0px"
    leftWarningDiv.appendChild(warningIcon)
    
    // Right Div
    let rightWarningDiv = document.createElement("div")
    rightWarningDiv.className = "rightDiv"
    rightWarningDiv.style.width = "95%"
    warningDiv.appendChild(rightWarningDiv)

    let warningText = document.createElement("p")
    warningText.className = "warningText"
    warningText.innerHTML = warning
    rightWarningDiv.appendChild(warningText)

    parentDiv.appendChild(warningDiv)
}

function addSkillSnippet(sectionDiv, isNew, iconSrc, iconSize, name, costs, description, warnings=null){
    let skillDiv = document.createElement("div")

    skillDiv.className = "skillSnippet"
    if(isNew){
        skillDiv.className = "skillSnippetNew"
    }
    
    // Left Div
    let leftDiv = document.createElement("div")
    leftDiv.className = "leftDiv"
    leftDiv.style.width = "10%"
    skillDiv.appendChild(leftDiv)

    let skillIcon = document.createElement("img")
    skillIcon.className = "skillIcon"
    skillIcon.src = iconSrc
    skillIcon.style.width = iconSize + "%"
    skillIcon.style.marginLeft = (100-iconSize)/2 + "%"
    leftDiv.appendChild(skillIcon)
    
    // Right Div
    let rightDiv = document.createElement("div")
    rightDiv.className = "rightDiv"
    rightDiv.style.width = "calc(85% - 90px)"
    skillDiv.appendChild(rightDiv)

    let skillTitle = document.createElement("h4")
    skillTitle.innerHTML = name
    skillTitle.className = "skillTitle"
    rightDiv.appendChild(skillTitle)

    let useCosts = document.createElement("h2")
    useCosts.innerHTML = costs
    rightDiv.appendChild(useCosts)

    let skillDescription = document.createElement("p")
    skillDescription.innerHTML = description
    rightDiv.appendChild(skillDescription)

    if(warnings != null){
        for (let i = 0; i < warnings.length; i++) {
            addWarning(warnings[i], rightDiv)
        }
    }

    // Details Div
    let detailsDiv = document.createElement("div")
    detailsDiv.className = "detailsDiv"
    skillDiv.appendChild(detailsDiv)

    let details = document.createElement("p")
    details.textContent = "See details..."
    details.className = "details"
    detailsDiv.appendChild(details)

    sectionDiv.appendChild(skillDiv)

}

function addNonIntSkillSnippet(sectionDiv, isNew, iconSrc, iconSize, name, description, warning=null){
    let skillDiv = document.createElement("div")

    skillDiv.className = "nonIntSkillSnippet"
    if(isNew){
        skillDiv.className = "nonIntSkillSnippetNew"
    }
    
    // Left Div
    let leftDiv = document.createElement("div")
    leftDiv.className = "leftDiv"
    skillDiv.appendChild(leftDiv)

    if(iconSrc == null){
        leftDiv.style.width = "15px"
    } else {
        leftDiv.style.width = "10%"

        let skillIcon = document.createElement("img")
        skillIcon.className = "skillIcon"
        skillIcon.src = iconSrc
        skillIcon.style.width = iconSize + "%"
        skillIcon.style.marginLeft = (100-iconSize)/2 + "%"
        leftDiv.appendChild(skillIcon)
    }
    
    // Right Div
    let rightDiv = document.createElement("div")
    rightDiv.className = "rightDiv"
    rightDiv.style.width = "90%"
    skillDiv.appendChild(rightDiv)

    let skillTitle = document.createElement("h4")
    skillTitle.innerHTML = name
    skillTitle.className = "skillTitle"
    rightDiv.appendChild(skillTitle)

    let skillDescription = document.createElement("p")
    skillDescription.innerHTML = description
    rightDiv.appendChild(skillDescription)

    sectionDiv.appendChild(skillDiv)
}

function addSpacer(className){
    let spacerDiv = document.createElement("div")
    spacerDiv.className = className
    document.getElementById("pageContainer").appendChild(spacerDiv)
}

function addOnslaughtSnippet(sectionDiv, isNew, iconSrc, iconSize, name, description, hrefID){
    let skillDiv = document.createElement("div")

    skillDiv.className = "onslaughtSnippet"
    if(isNew){
        skillDiv.className = "onslaughtSnippetNew"
    }
    
    // Left Div
    let leftDiv = document.createElement("div")
    leftDiv.className = "leftDiv"
    leftDiv.style.width = "15px"
    skillDiv.appendChild(leftDiv)
    
    // Right Div
    let rightDiv = document.createElement("div")
    rightDiv.className = "rightDiv"
    rightDiv.style.width = "90%"
    skillDiv.appendChild(rightDiv)

    let skillTitle = document.createElement("h4")
    skillTitle.innerHTML = name
    skillTitle.className = "skillTitle"
    rightDiv.appendChild(skillTitle)

    let skillDescription = document.createElement("p")
    skillDescription.innerHTML = description
    rightDiv.appendChild(skillDescription)

    sectionDiv.appendChild(skillDiv)

    if(hrefID != "tier1onslaught"){
        skillDiv.addEventListener('click', function(){
            window.location.href = "onslaughts.html#" + hrefID
        })
    } else{
        skillDiv.addEventListener('click', function(){
            window.location.href = "onslaughts.html"
        })
    }
}