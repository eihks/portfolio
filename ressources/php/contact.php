<?php
$fName = $_POST["f-name"];
$lName = $_POST["l-name"];
$name = $fName . " " . $lName;
$mail = $_POST["mail"];
$object = $_POST["object"];
$message = $_POST["message"];

$response = [
    "success" => 0,
    "message" => "Une erreur est survenue, veuiller réesayer ultérieurement",
    "failedInput" => null
];

if(strlen($fName) <= 0)
{
    $response["message"] = "Veuiller remplir le champ 'Prénom'";
    $response["failedInput"] = "f-name";
} 
elseif(strlen($lName) <= 0)
{
    $response["message"] = "Veuiller remplir le champ 'Nom'";
    $response["failedInput"] = "l-name";
} 
elseif(strlen($mail) <= 0 || !filter_var($mail, FILTER_VALIDATE_EMAIL))
{
    $response["message"] = "Mail invalide";
    $response["failedInput"] = "mail";
}
elseif(strlen($object) <= 0)
{
    $response["message"] = "Veuiller remplir le champ 'Objet'";
    $response["failedInput"] = "object";
}
elseif(strlen($message) <= 0)
{
    $response["message"] = "Veuiller remplir le champ 'Message'";
    $response["failedInput"] = "message";
}
else
{
    $response["message"] = "Mail envoyé avec succès.";

    $mailMessage = $name . "\r" . $mail . "\r" . $message;
    $message = wordwrap($message, 70, "\r\n");

    $success = mail('pillot.vincent@hotmail.com', $object, $mailMessage);

    if(!$success) 
    {
        $errorMessage = error_get_last()["message"];
    } 
    else 
    {
        $response["success"] = 1;
        $response["message"] = "Mail envoyé avec succès.";
    }
}

echo json_encode($response);