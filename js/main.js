'use strict'

$(document).ready(init);

function init() {
    renderPortfolioGrid();

}

function findProjectId(porjId) {
    var proj = findProjbyId(porjId)
    renderPortfolioModal(proj);
}

function submitEmail() {
    var $elSubject = $('.form-control-name').val() + ' | ' + $('.form-control-subject').val();
    var $elContent = $('.form-control').val();

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=nadavjulius@gmail.com&su=${$elSubject}&body=${$elContent}`)

    $('.form-control-name').val('');
    $('.form-control-subject').val('');
    $('.form-control').val('');
}

function linkToProj(proj) {
    window.open(proj)
}

function renderPortfolioModal(proj) {

    var strHTML = `<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.img}" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Client: ${proj.client}</li>
                      <li>Category: ${proj.category}</li>
                    </ul>
                    <div class="col">
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                    <button class="btn btn-primary" type="button" onclick="linkToProj('${proj.url}')">
                      Check It Out
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    var $elPortfolioSection = $('.project-modal-container')
    $elPortfolioSection.html(strHTML)
}



function renderPortfolioGrid() {
    var projects = getProjsForDisplay();
    var projStrHtml = projects.map(function (proj) {
        var strHTML = ``;
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="findProjectId('${proj.id}')">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
         <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.img}" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
    </div>`;
        return strHTML;
    })

    var $elPortfolioSection = $('.portfolio-container')
    $elPortfolioSection.html(projStrHtml)
}


