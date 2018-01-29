var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = function (data = {} {
    /* --------------------------------------------------------
                              FONTS
    ---------------------------------------------------------- */

    var fonts             = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', 'https://fonts.googleapis.com/css?family=Ubuntu']
    var fontAwesome       = bel`<link href=${fonts[0]} rel='stylesheet' type='text/css'>`
    var fontUbuntu        = bel`<link href=${fonts[1]} rel="stylesheet">`
    var font_ubuntu       = 'Ubuntu, sans-serif'
    document.head.appendChild(fontAwesome)
    document.head.appendChild(fontUbuntu)
    /* --------------------------------------------------------
                            VARIABLES
    ---------------------------------------------------------- */

// VARIABLES
    var profileImageUrl   = 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'
    var githubUrl = data['github']

//  COlORS
    var blue = '#365899'
    var grey = '#616770'
    var lightGrey = '#90949c'

//STATE
    var projectsExpanded = false;

    // CSS
    var css = csjs`
      .main {
        font-family: ${font_ubuntu};
        display: flex;
        align-items: start;
      }
      .button:hover {
        background: none !important;
      }
      .imageContainer {
        display: flex;
      }
      .textContainer {
        margin-left: 5%;
        min-width: 250px;
        line-height: 18px;
      }
      .username {
        font-weight: bold;
        text-decoration: none;
        color: ${blue};
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        padding-bottom: 1px;
      }
      .profileImage {
        border-radius: 50%;
        width: 72px;
        height: 72px;
      }
      .background {
        font-size: 0.7em;
      }
      .interests {
        color: ${lightGrey};
        font-size: 12px;
      }
      .interestItems {
        color: ${lightGrey};
        font-size: 12px;
        margin-left: 2px;
      }
      .backgroundItem {
        color: ${grey};
        border: .5px solid ${lightGrey};
        border-radius: 3px;
        padding: 2px;
        font-size: 11px;
        margin-left: 3px;
        align-items: center;
        letter-spacing: -0.01em;
        font-weight: bold;
      }
      .projectsContainer {
        color: ${blue};
        cursor: pointer;
        text-decoration: none;
        font-size: 12px;
      }
      .projectsTitle:hover,
      .username:hover {
        text-decoration: underline;
      }
      .projectList {
        line-height: 25px;
      }
      .projectItem {
        text-decoration: none;
      }
      .line {
        border-top: 1px #dddfe2 solid;
        margin: 5px 0;
      }
    `
    // HTML
    var html = bel`
      <div class=${css.main}>
        <div>
          <div class=${css.imageContainer}>
            <img src=${profileImageUrl} class=${css.profileImage}></img>
          </div>
          <div class=${css.textContainer}>
            <a href=${githubUrl} class=${css.username}>@${data['username']}</a>
            ${showBackground(data)}
            ${showProjects(data)}
            ${showInterests(data)}
      </div>
  `
    /* --------------------------------------------------------
                              HELPERS
      ---------------------------------------------------------- */
   function showBackground (data) {
     return bel`
      <div>
        <div class=${css.background}>
          <i class="fa fa-shield" aria-hidden="true"></i>
          ${data['background'].map((el)=>bel`<span class=${css.backgroundItem}>${el + ' '}</span>`)}
        </div>
      </div>`
   }

  function showProjects (data) {
    var len = data['projects'].length
    return bel`
      <div>
        <div class=${css.projectsContainer} onclick=${event => showHideProjects(event.currentTarget, data)}>
          <div class=${css.projectsTitle}>${len} projects listed</div>
        </div>
      </div>
    `
  }

  function showHideProjects (el, data) {
    console.log(el)
    if (projectsExpanded === true) {
      var list = document.querySelector('#list')
      el.removeChild(list)
      projectsExpanded = false
    } else {
      var projectList = bel`
        <div class=${css.projectList} id='list'>
          <div class=${css.line}></div>
          ${data['projects'].map((el)=>bel`<div class=${css.projectItem}>${el + ' '}</div>`)}
          <div class=${css.line}></div>
        </div>
      `
      el.appendChild(projectList)
      projectsExpanded = true
    }
  }

  function showInterests (data) {
    return bel`
      <div class=${css.interests}>
        <span class=${css.tag}>List of interests:</span>
        ${data['interests'].map((el)=>bel`<span class=${css.interestItems}>${el + ' '}</span>`)}
      </div>`
  }


   document.body.appendChild(html)

}
