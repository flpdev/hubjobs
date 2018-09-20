<?php
    require('./class/dados.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>HubJobs</title>   
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="assets/css/css.css">
        <link rel="stylesheet" href="assets/css/bootstrap.css">

        
    </head>
    <body>     
    
        
    <nav class="navbar navbar-dark bg-primary">
      <div class="navbar-brand">
        <h3>HUBJOBS</h3> <h6 class="lead">Desenvolvido por Felipe Moreira</h6>
      </div>
    </nav> 
                    
    <div class="container pdt50">              
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="heading1">
              <h5 class="mb-0">
                <button id="btnfiemt" class="btn btn-primary col-md-12" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  FIEMT
                </button>
              </h5>
            </div>
            <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#accordion">
              <div class="card-body">
                <div id="tabelafiemt"></div>  
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header" id="heading2">
              <h5 class="mb-0">
                <button id="btnsesc" class="btn btn-primary col-md-12" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                    SESC
                </button>
              </h5>
            </div>

            <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordion">
              <div class="card-body">
                <div id="tabelaSesc"></div>  
              </div>
            </div>
          </div>  
          <!--
          <div class="card">
            <div class="card-header" id="heading3">
              <h5 class="mb-0">
                <button id="btnsenac" class="btn btn-primary col-md-12" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                    SENAC
                </button>
              </h5>
            </div>

            <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordion">
              <div class="card-body">
                <div id="tabelaSenac"></div>  
              </div>
            </div>
          </div>    
          -->
          <div class="card">
            <div class="card-header" id="heading4">
              <h5 class="mb-0">
                <button id="btnbomfuturo" class="btn btn-primary col-md-12" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                    BOM FUTURO
                </button>
              </h5>
            </div>

            <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordion">
              <div class="card-body">
                <div id="tabelaBomFuturo"></div>  
              </div>
            </div>
          </div>  
          
          <div class="card">
            <div class="card-header" id="heading5">
              <h5 class="mb-0">
                <button id="btnunivag" class="btn btn-primary col-md-12" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                    UNIVAG
                </button>
              </h5>
            </div>

            <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordion">
              <div class="card-body">
                <div id="tabelaUnivag"></div>  
              </div>
            </div>
          </div>  
        </div> 
    </div>                                                           
                               
        <script src="assets/js/jquery-3.3.1.js"></script>
        <script src="assets/js/script.js"></script>
        <script src="assets/js/bootstrap.js"></script>
        <script src="assets/js/bootstrap.bundle.js"></script>
    </body>
</html>    