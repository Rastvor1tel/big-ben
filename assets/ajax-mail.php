<?php
if ($_REQUEST['phone']) {
    $to = "pr@big-ben.ru,call@big-ben.ru";
    $subject = "Сообщение с лендинга БигБэн";
    $message .= "E-mail: ".$_REQUEST['email']."<br>";
    $message .= "Номер телефона: ".$_REQUEST['phone']."<br>";
    $message = "Имя: ".$_REQUEST['name']."<br>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    if (mail($to, $subject, $message, $headers)) {
        echo 'Ваше сообщение отправлено!';
    }
}