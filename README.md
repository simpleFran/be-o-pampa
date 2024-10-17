Quiz
[] - On the quiz responsivity flexibilize the answers one below the other

Landing Page
Desktop
[] - put a property 'href' on cards Object
Tablet
[] - On a tablet, move the Mascot just above the cloud
Mobile

        [] - In mobile, move the Title a tiny above (mt-0 or something) and a Mascot to dow


Animations

[] - Ajustar pastilhas
[] - ajustar racoon, tatu, passaro
[] - colocar som inicial de animais silvestres


*********************original tailwindcss pastilhas*************
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplicativo Narrativa Fauna</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-900">

  <div class="max-w-4xl mx-auto p-6">
    <!-- Resumo do aplicativo -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h1 class="text-2xl font-bold mb-4">Resumo do Aplicativo</h1>
      <p class="text-xl">NARRATIVA | FAUNA</p>
    </div>

    <!-- Fauna e Relevo/Clima -->
    <div class="grid grid-cols-2 gap-6 mb-8">
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-xl font-semibold">Fauna</h2>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-xl font-semibold">Relevo e Clima</h2>
      </div>
    </div>

    <!-- Informações -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">INFORMAÇÕES</h2>

      <div class="grid grid-cols-2 gap-6">
        <div class="bg-gray-100 shadow-inner p-4 text-center">
          <h3 class="text-lg font-semibold">Conscientização e Conservação</h3>
        </div>
        <div class="bg-gray-100 shadow-inner p-4 text-center">
          <h3 class="text-lg font-semibold">Flora</h3>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
