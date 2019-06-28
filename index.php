<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/master.css">
	<script defer src="scripts/master.js"></script>

	<title>Vigenere</title>
	
</head>
<body>
	<main class="master">
		<h1>Cifra de vigenere</h1>
		<textarea class="general" id="text" cols="30" rows="10" placeholder="Digite aqui sua mensagem."></textarea>
		<br>
		<label for="key">Chave: </label>
		<input class="general" type="text" name="" id="key" placeholder="Chave">
		<input class="general button" id="decifrar" type="button" value="Decifrar">
		<input class="general button" id="cifrar" type="button" value="Cifrar">

		<h2>Resultado:</h2>
		<p id="result"></p>
	</main>
</body>
</html>