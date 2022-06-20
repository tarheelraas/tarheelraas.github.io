class Navbar extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode: "open"});
        console.log("Custom element created!")
    }

    render(){
        this.shadow.innerHTML= `
        <link rel="stylesheet" href="styles/navbar-styles.css">
        <link rel="stylesheet" href="https://use.typekit.net/tpg1uai.css">
            <div class="navbar">
                <div class="navbar-logo">
                    <a href="index.html"><img src="media/THR_Logo.png" alt="Pic Unavailable" class="logo"></a>
                    <a href="index.html" class="navbar-text" id="tar-heel-raas-header">TAR HEEL RAAS</a>
                </div>
                <div class="navbar-links">      
                    <a href="about.html" class="navbar-text">About</a>
                    <a href="fam.html" class="navbar-text">Fam</a>
                    <a href="events.html" class="navbar-text">Events</a>
                    <a href="performances.html" class="navbar-text">Performances</a>
                    <a href="gallery.html" class="navbar-text">Gallery</a>
                    <a href="get_involved.html" class="navbar-text">Get Involved!</a>
                </div>
            </div>              
        `;
    }

    connectedCallback(){
        this.render();
    }

}

customElements.define('nav-bar', Navbar)