<?php

require 'animals.php' ;

$animalObjek = new Animals();

$animalObjek->index();
echo '<br/>';

$animalObjek->store('Kucing');
echo '<br/>';
$animalObjek->index();
echo '<br/>';

$animalObjek->update(1, 'Kambing');
echo '<br/>';
$animalObjek->index();
echo '<br/>';

$animalObjek->destroy(0);
echo '<br/>';
$animalObjek->index();

?>