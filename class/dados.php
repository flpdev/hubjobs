<?php

require('./class/simple_html_dom.php');

$html = str_get_html(file_get_contents('http://www.fiemt.com.br/vagas_migracao.php'));
echo "<div id='fiemt' class='oculto'>";
echo 'FIEMT <br>';
foreach($html->find("a.texto") as $element) 
       echo $element. '<br>';
echo "</div>";

$html = str_get_html(file_get_contents('http://www.sescmatogrosso.com.br/sis/trabalhe_conosco/pagina/processo_seletivo/aberto.php'));
echo "<div id='sescvagas' class='oculto'>";
foreach($html->find("table.table-striped") as $element) 
       echo utf8_encode($element). '<br>';
echo "</div>";

$html = str_get_html(file_get_contents('https://www.mt.senac.br/trabalhe.php'));
echo "<div id='senac' class='oculto'>";
foreach($html->find("table.bordasimples") as $element) 
       echo $element. '<br>';
echo "</div>";

$html = str_get_html(file_get_contents('https://www.indeedjobs.com/gupo-bom-futuro/jobs'));
echo "<div id='bomfuturo' class='oculto'>";
foreach($html->find(".cp-list li") as $element)
       echo $element. '<br>';
echo "</div>";

$html = str_get_html(file_get_contents('http://trabalheconosco.univag.com.br/oportunidades'));
echo "<div id='univag' class='oculto'>";
foreach($html->find(".panel-body") as $element)
       echo $element. '<br>';
echo "</div>";

?>