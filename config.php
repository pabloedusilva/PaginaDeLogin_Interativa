<?php
$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassaword = '1234';
$dbName = 'formulario-login';

// Criar conexão
$conexao = new mysqli($dbHost, $dbUsername, $dbPassaword, $dbName);

// // Verificar conexão
// if ($conexao->connect_errno) 
// {
//     echo "Erro";
// }
// else
// {
//     echo "Conexão realizada com sucesso";
// }
?>
