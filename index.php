<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Quote Machine</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div id="quote-box" class="card text-center p-4">
      <div class="card-body">
        <p id="text" class="card-text"></p>
        <p id="author" class="card-author text-end"></p>
        <div class="d-flex justify-content-between mt-3">
          <a id="tweet-quote" class="btn btn-primary" href="#" target="_blank">Tweet Quote</a>
          <button id="new-quote" class="btn btn-success">New Quote</button>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
