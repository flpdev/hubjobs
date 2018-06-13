/*SESC ======================================================== */
$('#btnsesc').click(function(){
    
    $('#tabelaSesc').empty();
    var vagassesc = $('#sescvagas').find('tbody').find('tr');
        
    var sescLinha = []
    
    sescLinha.push("<div class='alert alert-danger text-center' role='alert'>");
    sescLinha.push("Para acessar os editais e arquivos <a href='http://www.sescmatogrosso.com.br/sis/trabalhe_conosco/pagina/processo_seletivo/aberto.php' target='_blank' class='alert-link'>CLIQUE AQUI</a>");
    sescLinha.push("</div>");
    
    sescLinha.push("<table class='table'>");
    sescLinha.push("<thead>");
    sescLinha.push('<tr>');
    sescLinha.push("<th>Cargo</th>");
    sescLinha.push("<th>Vaga</th>");
    sescLinha.push("<th>Local</th>");
    sescLinha.push("<th>CH</th>");
    sescLinha.push("<th>Salário</th>");
    sescLinha.push("<th>Edital</th>");
    sescLinha.push("<th>Inscrição</th>");
    sescLinha.push('</tr>');
    sescLinha.push('</thead>');
    sescLinha.push('<tbody>');  
    
    for (var i = 0; i <= vagassesc.length-1; i++){

    var vagaTexto = $(vagassesc[i]);
        
    sescLinha.push('<tr>');
    sescLinha.push($(vagaTexto).html());
    sescLinha.push('</tr>'); 
        
    }
    
    sescLinha.push('</tbody>');
    sescLinha.push('</table>');    
    $('#tabelaSesc').append($(sescLinha.join('')));   
    
})

/*BOM FUTURO ================================================== */
$('#btnbomfuturo').click(function(){
    
    $('#tabelaBomFuturo').empty();
    var vagasBomFuturo = $('#bomfuturo').find('li').removeAttr('class');
    var bomFuturoLinha = [];
    
    bomFuturoLinha.push("<table class='table'>");
    bomFuturoLinha.push("<thead>");
    bomFuturoLinha.push('<tr>');
    bomFuturoLinha.push("<th class='text-center'>Vaga</th>");
    bomFuturoLinha.push("<th class='text-center'>Dados</th>");
    bomFuturoLinha.push("<th class='text-center'>Detalhes</th>");
    bomFuturoLinha.push('</tr>');
    bomFuturoLinha.push('</thead>');
    bomFuturoLinha.push('<tbody>'); 

    for(var i = 0; i <= vagasBomFuturo.length-1;i++){
        
        var vagaTitulo = $(vagasBomFuturo[i]).find('.title').text();
        var vagaLocal = $(vagasBomFuturo[i]).find('p').text();
        var vagaLink = $(vagasBomFuturo[i]).find('a').attr('href');

        bomFuturoLinha.push('<tr>');
        bomFuturoLinha.push('<td>'+vagaTitulo+'</td>');
        bomFuturoLinha.push('<td>'+vagaLocal+'</td>');
        bomFuturoLinha.push("<td><a href='"+vagaLink+"'target='_blank' class='btn btn-primary'>Detalhes</a></td>")
        
    }
    
    bomFuturoLinha.push('</tbody>');
    bomFuturoLinha.push('</table>');    
    $('#tabelaBomFuturo').append($(bomFuturoLinha.join('')));
    
})

/*SENAC ======================================================= */    
$('#btnsenac').click(function(){

    $('#tabelaSenac').empty();
    var vagasSenac = $('#senac tr').removeAttr('class');    
    var senacLinha = [];
    
    
    senacLinha.push("<div class='alert alert-danger text-center' role='alert'>");
    senacLinha.push("Para acessar os editais e arquivos <a href='https://www.mt.senac.br/trabalhe.php' target='_blank' class='alert-link'>CLIQUE AQUI</a>");
    senacLinha.push("</div>");
    
    senacLinha.push("<table class='table'>");
    senacLinha.push("<thead>");
    senacLinha.push('<tr>');
    senacLinha.push("<th class='text-center'>Vaga</th>");
    senacLinha.push("<th class='text-center'>Resultados</th>");
    senacLinha.push("<th class='text-center'>Edital</th>");
    senacLinha.push("<th class='text-center'>Status</th>");
    senacLinha.push('</tr>');
    senacLinha.push('</thead>');
    senacLinha.push('<tbody>');  
    
    
    for(var i = 0; i <= vagasSenac.length-1;i++){
        
        var vagaLinha = $(vagasSenac[i]).text();        
        var existeVagaOpen = vagaLinha.indexOf('Em Andamento');       
        var existeVagaInsc = vagaLinha.indexOf('Inscreva-se');       
        
        if((existeVagaOpen >= 1) || (existeVagaInsc >= 1)){
            
            senacLinha.push(vagasSenac[i].outerHTML); 
            
        } 
    }
    
    senacLinha.push('</tbody>');
    senacLinha.push('</table>');    
    $('#tabelaSenac').append($(senacLinha.join('')));
})

/*FIEMT ======================================================= */
$('#btnfiemt').click(function(){
    
    var d = new Date();
    formattedDate = d.toLocaleString('pt-BR', {month: "numeric", day: "numeric", year: "numeric"});
    formattedDate = formattedDate+' a ';    
    
    $('#tabelafiemt').empty();

    var vagas = $('#fiemt').find('.texto'); 
    
    var linha = [];
    linha.push("<table class='table'>");
    linha.push("<thead>");
    linha.push('<tr>');
    linha.push('<th>Vaga</th>');
    linha.push('<th>Detalhes</th>');
    linha.push('</tr>');
    linha.push('</thead>');
    linha.push('<tbody>');  
    
    var conta = 0;
    
    for(var i = 0; i <= vagas.length-1; i++){
        
        conta = conta+1;
        var vagaTexto = $(vagas[i]).text();   
        
        var vagaHoje = vagaTexto.indexOf(formattedDate);
        
        if(vagaHoje >= 1){
            
            var vagaLink = $(vagas[i]).attr('href');        
            linha.push("<tr class='bg-warning'><td>"+vagaTexto+"</td><td><a href='"+vagaLink+"'target='_blank' class='btn btn-primary'>Detalhes</a></td></tr>");
            
        }else{
            
            var vagaLink = $(vagas[i]).attr('href');        
            linha.push("<tr><td>"+vagaTexto+"</td><td><a href='"+vagaLink+"'target='_blank' class='btn btn-primary'>Detalhes</a></td></tr>");
            
        }
    }
    
    linha.push('</tbody>');
    linha.push('</table>');
    
    if(conta>0){
        
        $('#tabelafiemt').append($(linha.join('')));
        
    }
})

/*UNIVAG ====================================================== */
$('#btnunivag').click(function(){
    
    $('#tabelaUnivag').empty();

    var vagasUnivag = $('#univag').find('.panel-body .panel-heading a');   
    
    var linhaUnivag = [];
    
    linhaUnivag.push("<div class='alert alert-danger text-center' role='alert'>");
    linhaUnivag.push("Para mais detalhes sobre as vagas <a href='http://trabalheconosco.univag.com.br/oportunidades' target='_blank' class='alert-link'>CLIQUE AQUI</a>");
    linhaUnivag.push("</div>");
    
    linhaUnivag.push("<table class='table'>");
    linhaUnivag.push("<thead>");
    linhaUnivag.push('<tr>');
    linhaUnivag.push('<th>Vaga</th>');
    linhaUnivag.push('</tr>');
    linhaUnivag.push('</thead>');
    linhaUnivag.push('<tbody>');  
    
    for(var i = 0; i <= vagasUnivag.length - 1 ; i++){

        linhaUnivag.push('<tr><td>' + $(vagasUnivag[i]).text().trim() + '</td></tr>');
        
    }
    
    linhaUnivag.push('</tbody>');
    linhaUnivag.push('</table>');
    
    $('#tabelaUnivag').append($(linhaUnivag.join('')));
    
})